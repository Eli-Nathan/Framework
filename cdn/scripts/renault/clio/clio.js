!function o(a,r,n){function d(s,e){if(!r[s]){if(!a[s]){var t="function"==typeof require&&require;if(!e&&t)return t(s,!0);if(g)return g(s,!0);var i=new Error("Cannot find module '"+s+"'");throw i.code="MODULE_NOT_FOUND",i}var l=r[s]={exports:{}};a[s][0].call(l.exports,function(e){var t=a[s][1][e];return d(t||e)},l,l.exports,o,a,r,n)}return r[s].exports}for(var g="function"==typeof require&&require,e=0;e<n.length;e++)d(n[e]);return d}({1:[function(e,t,s){"use strict";!function(p,f,i,e){var s={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAfUlEQVR4Ae3U1WECAAyEYWaptzgsylgMwAK4Ozx/6ATJE9B/gNjdpfDE/KOlo5op0MZcOV7g2xgzxXiJXxNM/MZLFM0w9h0vUTbHyGe8RMUCAx/xEnUr9L3HSzTtcEwXyK3QC66gej/ie0bGoc+8kfJWzocpH+f4Q/nn+TkBRLKGW3MLVosAAAAASUVORK5CYII="/>',prevHtml:'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAe0lEQVR4Ae2UtZmCARQE+a4EXBvBXZqlDlJc078B3IceJkJu8ue7L/TPz0COAX0fnmUDBPy58DRrYEfBhadYAntKLjzBHDhQceFxpsCRuguPMgZONF14hBFwpm1PFwBXejLcJ/Aj+CX6M3oheSk7SLPyZvJ29g/ln4/kBRvQiHCwFbsyAAAAAElFTkSuQmCC"/>',index:!1,iframeMaxWidth:"100%",download:!1,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};function t(e,t){if(this.el=e,this.$el=p(e),this.s=p.extend({},s,t),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in i.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=p(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(p(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}t.prototype.init=function(){var e=this;e.s.preload>e.$items.length&&(e.s.preload=e.$items.length);var t=f.location.hash;0<t.indexOf("lg="+this.s.galleryId)&&(e.index=parseInt(t.split("&slide=")[1],10),p("body").addClass("lg-from-hash"),p("body").hasClass("lg-on")||(setTimeout(function(){e.build(e.index)}),p("body").addClass("lg-on"))),e.s.dynamic?(e.$el.trigger("onBeforeOpen.lg"),e.index=e.s.index||0,p("body").hasClass("lg-on")||setTimeout(function(){e.build(e.index),p("body").addClass("lg-on")})):e.$items.on("click.lgcustom",function(t){try{t.preventDefault(),t.preventDefault()}catch(e){t.returnValue=!1}e.$el.trigger("onBeforeOpen.lg"),e.index=e.s.index||e.$items.index(this),p("body").hasClass("lg-on")||(e.build(e.index),p("body").addClass("lg-on"))})},t.prototype.build=function(e){var t=this;t.structure(),p.each(p.fn.lightGallery.modules,function(e){t.modules[e]=new p.fn.lightGallery.modules[e](t.el)}),t.slide(e,!1,!1),t.s.keyPress&&t.keyPress(),1<t.$items.length&&(t.arrow(),setTimeout(function(){t.enableDrag(),t.enableSwipe()},50),t.s.mousewheel&&t.mousewheel()),t.counter(),t.closeGallery(),t.$el.trigger("onAfterOpen.lg"),t.$outer.on("mousemove.lg click.lg touchstart.lg",function(){t.$outer.removeClass("lg-hide-items"),clearTimeout(t.hideBartimeout),t.hideBartimeout=setTimeout(function(){t.$outer.addClass("lg-hide-items")},t.s.hideBarsDelay)})},t.prototype.structure=function(){var e,t="",s="",i=0,l="",o=this;for(p("body").append('<div class="lg-backdrop"></div>'),p(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),i=0;i<this.$items.length;i++)t+='<div class="lg-item"></div>';if(this.s.controls&&1<this.$items.length&&(s='<div class="lg-actions"><div class="lg-prev">'+this.s.prevHtml+'</div><div class="lg-next">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(l='<div class="lg-sub-html"></div>'),e='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+t+'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAFVBMVEVMaXH////////////////////////zsRG/AAAABnRSTlMA1BXEtRaO1KiVAAAAVElEQVR42uWSSQ4AMQjDGkL5/5N7rSzN5AHlhmyJdb0V7brTckPwqC6uMYTSqJB8GuQ0yGmQ0yhyGiKnAZ6FXCI3mcfMi8qrzsfiubfG/w+z3eupOENZAZe3yBT9AAAAAElFTkSuQmCC"/></span></div>'+s+l+"</div></div>",p("body").append(e),this.$outer=p(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),o.setTop(),p(f).on("resize.lg orientationchange.lg",function(){setTimeout(function(){o.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&1<this.$items.length&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var a=this.$outer.find(".lg-inner");a.css("transition-timing-function",this.s.cssEasing),a.css("transition-duration",this.s.speed+"ms")}p(".lg-backdrop").addClass("in"),setTimeout(function(){o.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=p(f).scrollTop()},t.prototype.setTop=function(){if("100%"!==this.s.height){var e=p(f).height(),t=(e-parseInt(this.s.height,10))/2,s=this.$outer.find(".lg");e>=parseInt(this.s.height,10)?s.css("top",t+"px"):s.css("top","0px")}},t.prototype.doCss=function(){return!!function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=i.documentElement,s=0;for(s=0;s<e.length;s++)if(e[s]in t.style)return!0}()},t.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.$items.eq(t).attr("data-html"),!e&&s)return{html5:!0};var i=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),l=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),a=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:l?{vimeo:l}:o?{dailymotion:o}:a?{vk:a}:void 0},t.prototype.counter=function(){this.s.counter&&p(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},t.prototype.addHtml=function(e){var t,s,i=null;if(this.s.dynamic?this.s.dynamicEl[e].subHtmlUrl?t=this.s.dynamicEl[e].subHtmlUrl:i=this.s.dynamicEl[e].subHtml:(s=this.$items.eq(e)).attr("data-sub-html-url")?t=s.attr("data-sub-html-url"):(i=s.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!i&&(i=s.attr("title")||s.find("img").first().attr("alt"))),!t)if(null!=i){var l=i.substring(0,1);"."!==l&&"#"!==l||(i=this.s.subHtmlSelectorRelative&&!this.s.dynamic?s.find(i).html():p(i).html())}else i="";".lg-sub-html"===this.s.appendSubHtmlTo?t?this.$outer.find(this.s.appendSubHtmlTo).load(t):this.$outer.find(this.s.appendSubHtmlTo).html(i):t?this.$slide.eq(e).load(t):this.$slide.eq(e).append(i),null!=i&&(""===i?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[e])},t.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.$items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(e-s<0);s++)this.loadContent(e-s,!1,0)},t.prototype.loadContent=function(t,e,s){var i,r,l,o,a,n,d=this,g=!1,h=function(e){for(var t=[],s=[],i=0;i<e.length;i++){var l=e[i].split(" ");""===l[0]&&l.splice(0,1),s.push(l[0]),t.push(l[1])}for(var o=p(f).width(),a=0;a<t.length;a++)if(parseInt(t[a],10)>o){r=s[a];break}};if(d.s.dynamic){if(d.s.dynamicEl[t].poster&&(g=!0,l=d.s.dynamicEl[t].poster),n=d.s.dynamicEl[t].html,r=d.s.dynamicEl[t].src,d.s.dynamicEl[t].responsive)h(d.s.dynamicEl[t].responsive.split(","));o=d.s.dynamicEl[t].srcset,a=d.s.dynamicEl[t].sizes}else{if(d.$items.eq(t).attr("data-poster")&&(g=!0,l=d.$items.eq(t).attr("data-poster")),n=d.$items.eq(t).attr("data-html"),r=d.$items.eq(t).attr("href")||d.$items.eq(t).attr("data-src"),d.$items.eq(t).attr("data-responsive"))h(d.$items.eq(t).attr("data-responsive").split(","));o=d.$items.eq(t).attr("data-srcset"),a=d.$items.eq(t).attr("data-sizes")}var u=!1;d.s.dynamic?d.s.dynamicEl[t].iframe&&(u=!0):"true"===d.$items.eq(t).attr("data-iframe")&&(u=!0);var c=d.isVideo(r,t);if(!d.$slide.eq(t).hasClass("lg-loaded")){if(u)d.$slide.eq(t).prepend('<div class="lg-video-cont" style="max-width:'+d.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+r+'"  allowfullscreen="true"></iframe></div></div>');else if(g){var m="";m=c&&c.youtube?"lg-has-youtube":c&&c.vimeo?"lg-has-vimeo":"lg-has-html5",d.$slide.eq(t).prepend('<div class="lg-video-cont '+m+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+l+'" /></div></div>')}else c?(d.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),d.$el.trigger("hasVideo.lg",[t,r,n])):d.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+r+'" /></div>');if(d.$el.trigger("onAferAppendSlide.lg",[t]),i=d.$slide.eq(t).find(".lg-object"),a&&i.attr("sizes",a),o){i.attr("srcset",o);try{picturefill({elements:[i[0]]})}catch(e){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&d.addHtml(t),d.$slide.eq(t).addClass("lg-loaded")}d.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){var e=0;s&&!p("body").hasClass("lg-from-hash")&&(e=s),setTimeout(function(){d.$slide.eq(t).addClass("lg-complete"),d.$el.trigger("onSlideItemLoad.lg",[t,s||0])},e)}),c&&c.html5&&!g&&d.$slide.eq(t).addClass("lg-complete"),!0===e&&(d.$slide.eq(t).hasClass("lg-complete")?d.preload(t):d.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){d.preload(t)}))},t.prototype.slide=function(e,t,s){var i=this.$outer.find(".lg-current").index(),l=this;if(!l.lGalleryOn||i!==e){var o=this.$slide.length,a=l.lGalleryOn?this.s.speed:0,r=!1,n=!1;if(!l.lgBusy){var d;if(this.s.download)(d=l.s.dynamic?!1!==l.s.dynamicEl[e].downloadUrl&&(l.s.dynamicEl[e].downloadUrl||l.s.dynamicEl[e].src):"false"!==l.$items.eq(e).attr("data-download-url")&&(l.$items.eq(e).attr("data-download-url")||l.$items.eq(e).attr("href")||l.$items.eq(e).attr("data-src")))?(p("#lg-download").attr("href",d),l.$outer.removeClass("lg-hide-download")):l.$outer.addClass("lg-hide-download");if(this.$el.trigger("onBeforeSlide.lg",[i,e,t,s]),l.lgBusy=!0,clearTimeout(l.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){l.addHtml(e)},a),this.arrowDisable(e),t){var g=e-1,h=e+1;0===e&&i===o-1?(h=0,g=o-1):e===o-1&&0===i&&(h=0,g=o-1),this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),l.$slide.eq(g).addClass("lg-prev-slide"),l.$slide.eq(h).addClass("lg-next-slide"),l.$slide.eq(e).addClass("lg-current")}else l.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),e<i?(n=!0,0!==e||i!==o-1||s||(n=!1,r=!0)):i<e&&(r=!0,e!==o-1||0!==i||s||(n=!0,r=!1)),n?(this.$slide.eq(e).addClass("lg-prev-slide"),this.$slide.eq(i).addClass("lg-next-slide")):r&&(this.$slide.eq(e).addClass("lg-next-slide"),this.$slide.eq(i).addClass("lg-prev-slide")),setTimeout(function(){l.$slide.removeClass("lg-current"),l.$slide.eq(e).addClass("lg-current"),l.$outer.removeClass("lg-no-trans")},50);l.lGalleryOn?(setTimeout(function(){l.loadContent(e,!0,0)},this.s.speed+50),setTimeout(function(){l.lgBusy=!1,l.$el.trigger("onAfterSlide.lg",[i,e,t,s])},this.s.speed)):(l.loadContent(e,!0,l.s.backdropDuration),l.lgBusy=!1,l.$el.trigger("onAfterSlide.lg",[i,e,t,s])),l.lGalleryOn=!0,this.s.counter&&p("#lg-counter-current").text(e+1)}}},t.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.$slide.length?(t.index++,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(t.$outer.addClass("lg-right-end"),setTimeout(function(){t.$outer.removeClass("lg-right-end")},400)))},t.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(0<t.index?(t.index--,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.$items.length-1,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(t.$outer.addClass("lg-left-end"),setTimeout(function(){t.$outer.removeClass("lg-left-end")},400)))},t.prototype.keyPress=function(){var t=this;1<this.$items.length&&p(f).on("keyup.lg",function(e){1<t.$items.length&&(37===e.keyCode&&(e.preventDefault(),t.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),t.goToNextSlide()))}),p(f).on("keydown.lg",function(e){!0===t.s.escKey&&27===e.keyCode&&(e.preventDefault(),t.$outer.hasClass("lg-thumb-open")?t.$outer.removeClass("lg-thumb-open"):t.destroy())})},t.prototype.arrow=function(){var e=this;this.$outer.find(".lg-prev").on("click.lg",function(){e.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){e.goToNextSlide()})},t.prototype.arrowDisable=function(e){!this.s.loop&&this.s.hideControlOnEnd&&(e+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),0<e?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},t.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.css("left",t):e.css({transform:"translate3d("+t+"px, "+s+"px, 0px)"})},t.prototype.touchMove=function(e,t){var s=t-e;15<Math.abs(s)&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),s,0),this.setTranslate(p(".lg-prev-slide"),-this.$slide.eq(this.index).width()+s,0),this.setTranslate(p(".lg-next-slide"),this.$slide.eq(this.index).width()+s,0))},t.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&t.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){t.$outer.removeClass("lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):0<e&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&t.$el.trigger("onSlideClick.lg"),t.$slide.removeAttr("style")}),setTimeout(function(){t.$outer.hasClass("lg-dragging")||"lg-slide"===t.s.mode||t.$outer.removeClass("lg-slide")},t.s.speed+100)},t.prototype.enableSwipe=function(){var t=this,s=0,i=0,l=!1;t.s.enableSwipe&&t.isTouch&&t.doCss()&&(t.$slide.on("touchstart.lg",function(e){t.$outer.hasClass("lg-zoomed")||t.lgBusy||(e.preventDefault(),t.manageSwipeClass(),s=e.originalEvent.targetTouches[0].pageX)}),t.$slide.on("touchmove.lg",function(e){t.$outer.hasClass("lg-zoomed")||(e.preventDefault(),i=e.originalEvent.targetTouches[0].pageX,t.touchMove(s,i),l=!0)}),t.$slide.on("touchend.lg",function(){t.$outer.hasClass("lg-zoomed")||(l?(l=!1,t.touchEnd(i-s)):t.$el.trigger("onSlideClick.lg"))}))},t.prototype.enableDrag=function(){var t=this,s=0,i=0,l=!1,o=!1;t.s.enableDrag&&!t.isTouch&&t.doCss()&&(t.$slide.on("mousedown.lg",function(e){t.$outer.hasClass("lg-zoomed")||(p(e.target).hasClass("lg-object")||p(e.target).hasClass("lg-video-play"))&&(e.preventDefault(),t.lgBusy||(t.manageSwipeClass(),s=e.pageX,l=!0,t.$outer.scrollLeft+=1,t.$outer.scrollLeft-=1,t.$outer.removeClass("lg-grab").addClass("lg-grabbing"),t.$el.trigger("onDragstart.lg")))}),p(f).on("mousemove.lg",function(e){l&&(o=!0,i=e.pageX,t.touchMove(s,i),t.$el.trigger("onDragmove.lg"))}),p(f).on("mouseup.lg",function(e){o?(o=!1,t.touchEnd(i-s),t.$el.trigger("onDragend.lg")):(p(e.target).hasClass("lg-object")||p(e.target).hasClass("lg-video-play"))&&t.$el.trigger("onSlideClick.lg"),l&&(l=!1,t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},t.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,s=this.$slide.length;this.s.loop&&(0===this.index?t=s-1:this.index===s-1&&(e=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),-1<t&&this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")},t.prototype.mousewheel=function(){var t=this;t.$outer.on("mousewheel.lg",function(e){e.deltaY&&(0<e.deltaY?t.goToPrevSlide():t.goToNextSlide(),e.preventDefault())})},t.prototype.closeGallery=function(){var t=this,s=!1;this.$outer.find(".lg-close").on("click.lg",function(){t.destroy()}),t.s.closable&&(t.$outer.on("mousedown.lg",function(e){s=!!(p(e.target).is(".lg-outer")||p(e.target).is(".lg-item ")||p(e.target).is(".lg-img-wrap"))}),t.$outer.on("mouseup.lg",function(e){(p(e.target).is(".lg-outer")||p(e.target).is(".lg-item ")||p(e.target).is(".lg-img-wrap")&&s)&&(t.$outer.hasClass("lg-dragging")||t.destroy())}))},t.prototype.destroy=function(e){var t=this;e||t.$el.trigger("onBeforeClose.lg"),p(f).scrollTop(t.prevScrollTop),e&&(t.s.dynamic||this.$items.off("click.lg click.lgcustom"),p.removeData(t.el,"lightGallery")),this.$el.off(".lg.tm"),p.each(p.fn.lightGallery.modules,function(e){t.modules[e]&&t.modules[e].destroy()}),this.lGalleryOn=!1,clearTimeout(t.hideBartimeout),this.hideBartimeout=!1,p(f).off(".lg"),p("body").removeClass("lg-on lg-from-hash"),t.$outer&&t.$outer.removeClass("lg-visible"),p(".lg-backdrop").removeClass("in"),setTimeout(function(){t.$outer&&t.$outer.remove(),p(".lg-backdrop").remove(),e||t.$el.trigger("onCloseAfter.lg")},t.s.backdropDuration+50)},p.fn.lightGallery=function(e){return this.each(function(){if(p.data(this,"lightGallery"))try{p(this).data("lightGallery").init()}catch(e){console.error("lightGallery has not initiated properly")}else p.data(this,"lightGallery",new t(this,e))})},p.fn.lightGallery.modules={}}(jQuery,window,document),$("#ac-gallery").lightGallery()},{}],2:[function(e,t,s){"use strict";var i={};i.web_path,i.setPath=function(){var e=$(".colours__image").attr("src").split("colours-");i.web_path=e[0]+"/"},i.changeImage=function(e){$(".colours__image").attr("src",i.web_path+"colours-"+e)},i.clicks=function(){$(".colours__list__item").click(function(){var e=$(this).data("colour");i.changeImage(e),$(".colours__list__item").removeClass("colours__list__item--selected"),$(this).addClass("colours__list__item--selected")})},i.init=function(){i.clicks(),i.setPath()},t.exports=i},{}],3:[function(e,t,s){"use strict";e("_libs/lightgallery.js");var i=e("colour_picker");window.onload=function(){i.init()}},{"_libs/lightgallery.js":1,colour_picker:2}]},{},[3]);