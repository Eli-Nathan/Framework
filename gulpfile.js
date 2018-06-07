var gulp = require('gulp'),
  argv = require('yargs').argv,
  browserify = require('browserify'),
  browserSync = require('browser-sync'),
  buffer = require('gulp-buffer'),
  changed = require('gulp-changed'),
  cp = require('child_process'),
  debug = require('gulp-debug'),
  gulpif = require('gulp-if'),
  gutil = require('gulp-util'),
  imagemin = require('gulp-imagemin'),
  babelify = require('babelify'),
  nmq = require('gulp-no-media-queries'),
  prefix = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  tap = require('gulp-tap'),
  uglify = require('gulp-uglify'),
  frontmatter = require('gulp-front-matter'),
  fs = require('fs'),
  es = require('event-stream'),
  Liquid = require('liquid-node'),
  engine = new Liquid.Engine

engine.registerFileSystem(new Liquid.LocalFileSystem('./_includes'))

engine.registerFilters({
  strip: function(str) {
    return str.replace(/\s+/g, '');
  }
});

var LAYOUTS_DIR = './_layouts/'

gulp.task('server', function () {
  browserSync.init({
    files: ['./_site/**/*'],
    cors: true,
    logPrefix: 'Framework',
    server: {
      baseDir: './_site'
    }

  }, function (err, bs) {
    bs.addMiddleware("*", function (req, res) {
      res.writeHead(302, {
        "location": "/404.html?location=" + req.url
      })
      res.end("Redirecting!")
    })
  })

  gulp.watch(['./cdn/images/**/*', './cdn/media/**/*', './cdn/css/static/**/*'], ['static'])
  gulp.watch('./_scss/**/*.scss', ['stylesheets'])
  gulp.watch('./_scripts/**/*.js', ['javascripts'])
  gulp.watch(['./_pages/**/*.html'], ['templates'])
});

gulp.task('share', function () {
  return browserSync.init({
    server: {
      baseDir: '_site'
    },
    ghostMode: false
  })
})

gulp.task('javascripts', function () {
  return gulp.src([
    './_scripts/**/*.js', '!./_scripts/_libs/**/*.js'
  ], {
    read: false
  }).pipe(gulpif(!argv.force, changed('./cdn/scripts', {
    extension: '.js'
  }))).pipe(tap(function (file) {
    gutil.log('JavaScripts Bundled: ' + file.path)
    file.contents = browserify(file.path, {
      debug: true,
      paths: ['./node_modules', './_scripts', './_scripts/_modules']
    }).transform(babelify).bundle().on('error', function (err) {
      browserSync.notify(err.message, 10000)
      console.log(err)
      this.emit('end')
    })
  })).pipe(buffer()).pipe(uglify()).pipe(gulp.dest('./cdn/scripts')).pipe(gulp.dest('./_site/cdn/scripts'))
})

gulp.task('stylesheets', function () {
  return gulp.src('./_scss/**/*.scss').pipe(gulpif(!argv.force, changed('./cdn/css', {
    extension: '.css'
  }))).pipe(sass({
    outputStyle: 'compressed',
    includePaths: ['./_scss/', './_scss/_vendor/']
  })).on('error', function (err) {
    browserSync.notify(err.message, 10000)
    console.log(err)
    this.emit('end')
  }).pipe(prefix([
    'last 15 versions', '> 5%', 'ie 8', 'ie 7'
  ], {
    cascade: true
  })).pipe(debug({
    title: 'SCSS Compiled:'
  })).pipe(gulp.dest('./cdn/css')).pipe(gulp.dest('./_site/cdn/css'))
})

gulp.task('static', function () {
  return gulp.src(['./cdn/**/*']).pipe(gulpif(!argv.force, changed('./_site/cdn/'))).pipe(debug({
    title: 'Move static files:'
  })).pipe(gulp.dest('./_site/cdn/'))
})

gulp.task('ie', function () {
  return gulp.src(['./cdn/css/**/*.css', '!./cdn/css/**/*_ie.css']).pipe(nmq({
    width: '1200px',
    type: 'screen'
  })).on('error', function (err) {
    console.log(err)
    this.emit('end')
  }).pipe(rename(function (path) {
    path.basename += '_ie'
    path.extname = '.css'
  })).pipe(debug({
    title: 'Fuck Microsoft:'
  })).pipe(gulp.dest('./cdn/css')).pipe(gulp.dest('./_site/cdn/css'))
})

gulp.task('optimize_images', function () {
  return gulp.src('./cdn/images/**/*.{jpg, bmp, gif, png, jpeg, svg}').pipe(imagemin()).pipe(debug({
    title: 'Crunched:'
  })).pipe(gulp.dest('./cdn/images'))
})

gulp.task('templates', function () {
  return gulp.src(['./_pages/**/*.html']).pipe(gulpif(!argv.force, changed('./_site/', {
    extension: '.html'
  }))).pipe(frontmatter({
    property: 'meta'
  })).pipe(es.map(function (file, cb) {
    if (file.meta.layout) {
      var template = String(fs.readFileSync(LAYOUTS_DIR + file.meta.layout + '.html'))
    } else {
      var template = String(fs.readFileSync(LAYOUTS_DIR + 'default.html'))
    }
    var mainLayout = engine.parseAndRender(template, {
      page: file.meta,
      content: String(file.contents)
    }).then(function (result) {
      var mainLayout = engine.parseAndRender(result, file.meta).then(function (final) {
        file.contents = new Buffer(final)
        cb(null, file)
      })
    })
  })).pipe(debug({
    title: 'Compiled HTML: '
  })).pipe(gulp.dest('./_site/'))
})

gulp.task('default', ['server']);
