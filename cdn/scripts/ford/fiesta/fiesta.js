!function e(t,s,i){function l(a,n){if(!s[a]){if(!t[a]){var r="function"==typeof require&&require;if(!n&&r)return r(a,!0);if(o)return o(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var g=s[a]={exports:{}};t[a][0].call(g.exports,function(e){var s=t[a][1][e];return l(s||e)},g,g.exports,e,t,s,i)}return s[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)l(i[a]);return l}({1:[function(e,t,s){"use strict";!function(e,t,s,i){function l(t,i){if(this.el=t,this.$el=e(t),this.s=e.extend({},o,i),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in s.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=e(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(e(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var o={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAfUlEQVR4Ae3U1WECAAyEYWaptzgsylgMwAK4Ozx/6ATJE9B/gNjdpfDE/KOlo5op0MZcOV7g2xgzxXiJXxNM/MZLFM0w9h0vUTbHyGe8RMUCAx/xEnUr9L3HSzTtcEwXyK3QC66gej/ie0bGoc+8kfJWzocpH+f4Q/nn+TkBRLKGW3MLVosAAAAASUVORK5CYII="/>',prevHtml:'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAe0lEQVR4Ae2UtZmCARQE+a4EXBvBXZqlDlJc078B3IceJkJu8ue7L/TPz0COAX0fnmUDBPy58DRrYEfBhadYAntKLjzBHDhQceFxpsCRuguPMgZONF14hBFwpm1PFwBXejLcJ/Aj+CX6M3oheSk7SLPyZvJ29g/ln4/kBRvQiHCwFbsyAAAAAElFTkSuQmCC"/>',index:!1,iframeMaxWidth:"100%",download:!1,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};l.prototype.init=function(){var s=this;s.s.preload>s.$items.length&&(s.s.preload=s.$items.length);var i=t.location.hash;i.indexOf("lg="+this.s.galleryId)>0&&(s.index=parseInt(i.split("&slide=")[1],10),e("body").addClass("lg-from-hash"),e("body").hasClass("lg-on")||(setTimeout(function(){s.build(s.index)}),e("body").addClass("lg-on"))),s.s.dynamic?(s.$el.trigger("onBeforeOpen.lg"),s.index=s.s.index||0,e("body").hasClass("lg-on")||setTimeout(function(){s.build(s.index),e("body").addClass("lg-on")})):s.$items.on("click.lgcustom",function(t){try{t.preventDefault(),t.preventDefault()}catch(e){t.returnValue=!1}s.$el.trigger("onBeforeOpen.lg"),s.index=s.s.index||s.$items.index(this),e("body").hasClass("lg-on")||(s.build(s.index),e("body").addClass("lg-on"))})},l.prototype.build=function(t){var s=this;s.structure(),e.each(e.fn.lightGallery.modules,function(t){s.modules[t]=new e.fn.lightGallery.modules[t](s.el)}),s.slide(t,!1,!1),s.s.keyPress&&s.keyPress(),s.$items.length>1&&(s.arrow(),setTimeout(function(){s.enableDrag(),s.enableSwipe()},50),s.s.mousewheel&&s.mousewheel()),s.counter(),s.closeGallery(),s.$el.trigger("onAfterOpen.lg"),s.$outer.on("mousemove.lg click.lg touchstart.lg",function(){s.$outer.removeClass("lg-hide-items"),clearTimeout(s.hideBartimeout),s.hideBartimeout=setTimeout(function(){s.$outer.addClass("lg-hide-items")},s.s.hideBarsDelay)})},l.prototype.structure=function(){var s,i="",l="",o=0,a="",n=this;for(e("body").append('<div class="lg-backdrop"></div>'),e(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),o=0;o<this.$items.length;o++)i+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(l='<div class="lg-actions"><div class="lg-prev">'+this.s.prevHtml+'</div><div class="lg-next">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(a='<div class="lg-sub-html"></div>'),s='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+i+'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAFVBMVEVMaXH////////////////////////zsRG/AAAABnRSTlMA1BXEtRaO1KiVAAAAVElEQVR42uWSSQ4AMQjDGkL5/5N7rSzN5AHlhmyJdb0V7brTckPwqC6uMYTSqJB8GuQ0yGmQ0yhyGiKnAZ6FXCI3mcfMi8qrzsfiubfG/w+z3eupOENZAZe3yBT9AAAAAElFTkSuQmCC"/></span></div>'+l+a+"</div></div>",e("body").append(s),this.$outer=e(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),n.setTop(),e(t).on("resize.lg orientationchange.lg",function(){setTimeout(function(){n.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var r=this.$outer.find(".lg-inner");r.css("transition-timing-function",this.s.cssEasing),r.css("transition-duration",this.s.speed+"ms")}e(".lg-backdrop").addClass("in"),setTimeout(function(){n.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=e(t).scrollTop()},l.prototype.setTop=function(){if("100%"!==this.s.height){var s=e(t).height(),i=(s-parseInt(this.s.height,10))/2,l=this.$outer.find(".lg");s>=parseInt(this.s.height,10)?l.css("top",i+"px"):l.css("top","0px")}},l.prototype.doCss=function(){return!!function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=s.documentElement,i=0;for(i=0;i<e.length;i++)if(e[i]in t.style)return!0}()},l.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.$items.eq(t).attr("data-html"),!e&&s)return{html5:!0};var i=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),l=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),a=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:l?{vimeo:l}:o?{dailymotion:o}:a?{vk:a}:void 0},l.prototype.counter=function(){this.s.counter&&e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},l.prototype.addHtml=function(t){var s,i,l=null;if(this.s.dynamic?this.s.dynamicEl[t].subHtmlUrl?s=this.s.dynamicEl[t].subHtmlUrl:l=this.s.dynamicEl[t].subHtml:(i=this.$items.eq(t)).attr("data-sub-html-url")?s=i.attr("data-sub-html-url"):(l=i.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!l&&(l=i.attr("title")||i.find("img").first().attr("alt"))),!s)if(void 0!==l&&null!==l){var o=l.substring(0,1);"."!==o&&"#"!==o||(l=this.s.subHtmlSelectorRelative&&!this.s.dynamic?i.find(l).html():e(l).html())}else l="";".lg-sub-html"===this.s.appendSubHtmlTo?s?this.$outer.find(this.s.appendSubHtmlTo).load(s):this.$outer.find(this.s.appendSubHtmlTo).html(l):s?this.$slide.eq(t).load(s):this.$slide.eq(t).append(l),void 0!==l&&null!==l&&(""===l?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[t])},l.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.$items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(e-s<0);s++)this.loadContent(e-s,!1,0)},l.prototype.loadContent=function(s,i,l){var o,a,n,r,d,g,h=this,c=!1,u=function(s){for(var i=[],l=[],o=0;o<s.length;o++){var n=s[o].split(" ");""===n[0]&&n.splice(0,1),l.push(n[0]),i.push(n[1])}for(var r=e(t).width(),d=0;d<i.length;d++)if(parseInt(i[d],10)>r){a=l[d];break}};if(h.s.dynamic){if(h.s.dynamicEl[s].poster&&(c=!0,n=h.s.dynamicEl[s].poster),g=h.s.dynamicEl[s].html,a=h.s.dynamicEl[s].src,h.s.dynamicEl[s].responsive){u(h.s.dynamicEl[s].responsive.split(","))}r=h.s.dynamicEl[s].srcset,d=h.s.dynamicEl[s].sizes}else{if(h.$items.eq(s).attr("data-poster")&&(c=!0,n=h.$items.eq(s).attr("data-poster")),g=h.$items.eq(s).attr("data-html"),a=h.$items.eq(s).attr("href")||h.$items.eq(s).attr("data-src"),h.$items.eq(s).attr("data-responsive")){u(h.$items.eq(s).attr("data-responsive").split(","))}r=h.$items.eq(s).attr("data-srcset"),d=h.$items.eq(s).attr("data-sizes")}var m=!1;h.s.dynamic?h.s.dynamicEl[s].iframe&&(m=!0):"true"===h.$items.eq(s).attr("data-iframe")&&(m=!0);var p=h.isVideo(a,s);if(!h.$slide.eq(s).hasClass("lg-loaded")){if(m)h.$slide.eq(s).prepend('<div class="lg-video-cont" style="max-width:'+h.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+a+'"  allowfullscreen="true"></iframe></div></div>');else if(c){var f="";f=p&&p.youtube?"lg-has-youtube":p&&p.vimeo?"lg-has-vimeo":"lg-has-html5",h.$slide.eq(s).prepend('<div class="lg-video-cont '+f+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+n+'" /></div></div>')}else p?(h.$slide.eq(s).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),h.$el.trigger("hasVideo.lg",[s,a,g])):h.$slide.eq(s).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+a+'" /></div>');if(h.$el.trigger("onAferAppendSlide.lg",[s]),o=h.$slide.eq(s).find(".lg-object"),d&&o.attr("sizes",d),r){o.attr("srcset",r);try{picturefill({elements:[o[0]]})}catch(e){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&h.addHtml(s),h.$slide.eq(s).addClass("lg-loaded")}h.$slide.eq(s).find(".lg-object").on("load.lg error.lg",function(){var t=0;l&&!e("body").hasClass("lg-from-hash")&&(t=l),setTimeout(function(){h.$slide.eq(s).addClass("lg-complete"),h.$el.trigger("onSlideItemLoad.lg",[s,l||0])},t)}),p&&p.html5&&!c&&h.$slide.eq(s).addClass("lg-complete"),!0===i&&(h.$slide.eq(s).hasClass("lg-complete")?h.preload(s):h.$slide.eq(s).find(".lg-object").on("load.lg error.lg",function(){h.preload(s)}))},l.prototype.slide=function(t,s,i){var l=this.$outer.find(".lg-current").index(),o=this;if(!o.lGalleryOn||l!==t){var a=this.$slide.length,n=o.lGalleryOn?this.s.speed:0,r=!1,d=!1;if(!o.lgBusy){if(this.s.download){var g;(g=o.s.dynamic?!1!==o.s.dynamicEl[t].downloadUrl&&(o.s.dynamicEl[t].downloadUrl||o.s.dynamicEl[t].src):"false"!==o.$items.eq(t).attr("data-download-url")&&(o.$items.eq(t).attr("data-download-url")||o.$items.eq(t).attr("href")||o.$items.eq(t).attr("data-src")))?(e("#lg-download").attr("href",g),o.$outer.removeClass("lg-hide-download")):o.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[l,t,s,i]),o.lgBusy=!0,clearTimeout(o.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){o.addHtml(t)},n),this.arrowDisable(t),s){var h=t-1,c=t+1;0===t&&l===a-1?(c=0,h=a-1):t===a-1&&0===l&&(c=0,h=a-1),this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),o.$slide.eq(h).addClass("lg-prev-slide"),o.$slide.eq(c).addClass("lg-next-slide"),o.$slide.eq(t).addClass("lg-current")}else o.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),t<l?(d=!0,0!==t||l!==a-1||i||(d=!1,r=!0)):t>l&&(r=!0,t!==a-1||0!==l||i||(d=!0,r=!1)),d?(this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(l).addClass("lg-next-slide")):r&&(this.$slide.eq(t).addClass("lg-next-slide"),this.$slide.eq(l).addClass("lg-prev-slide")),setTimeout(function(){o.$slide.removeClass("lg-current"),o.$slide.eq(t).addClass("lg-current"),o.$outer.removeClass("lg-no-trans")},50);o.lGalleryOn?(setTimeout(function(){o.loadContent(t,!0,0)},this.s.speed+50),setTimeout(function(){o.lgBusy=!1,o.$el.trigger("onAfterSlide.lg",[l,t,s,i])},this.s.speed)):(o.loadContent(t,!0,o.s.backdropDuration),o.lgBusy=!1,o.$el.trigger("onAfterSlide.lg",[l,t,s,i])),o.lGalleryOn=!0,this.s.counter&&e("#lg-counter-current").text(t+1)}}},l.prototype.goToNextSlide=function(e){var t=this;t.lgBusy||(t.index+1<t.$slide.length?(t.index++,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1)):t.s.loop?(t.index=0,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(t.$outer.addClass("lg-right-end"),setTimeout(function(){t.$outer.removeClass("lg-right-end")},400)))},l.prototype.goToPrevSlide=function(e){var t=this;t.lgBusy||(t.index>0?(t.index--,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1)):t.s.loop?(t.index=t.$items.length-1,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1)):t.s.slideEndAnimatoin&&(t.$outer.addClass("lg-left-end"),setTimeout(function(){t.$outer.removeClass("lg-left-end")},400)))},l.prototype.keyPress=function(){var s=this;this.$items.length>1&&e(t).on("keyup.lg",function(e){s.$items.length>1&&(37===e.keyCode&&(e.preventDefault(),s.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),s.goToNextSlide()))}),e(t).on("keydown.lg",function(e){!0===s.s.escKey&&27===e.keyCode&&(e.preventDefault(),s.$outer.hasClass("lg-thumb-open")?s.$outer.removeClass("lg-thumb-open"):s.destroy())})},l.prototype.arrow=function(){var e=this;this.$outer.find(".lg-prev").on("click.lg",function(){e.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){e.goToNextSlide()})},l.prototype.arrowDisable=function(e){!this.s.loop&&this.s.hideControlOnEnd&&(e+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),e>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},l.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.css("left",t):e.css({transform:"translate3d("+t+"px, "+s+"px, 0px)"})},l.prototype.touchMove=function(t,s){var i=s-t;Math.abs(i)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),i,0),this.setTranslate(e(".lg-prev-slide"),-this.$slide.eq(this.index).width()+i,0),this.setTranslate(e(".lg-next-slide"),this.$slide.eq(this.index).width()+i,0))},l.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&t.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){t.$outer.removeClass("lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&t.$el.trigger("onSlideClick.lg"),t.$slide.removeAttr("style")}),setTimeout(function(){t.$outer.hasClass("lg-dragging")||"lg-slide"===t.s.mode||t.$outer.removeClass("lg-slide")},t.s.speed+100)},l.prototype.enableSwipe=function(){var e=this,t=0,s=0,i=!1;e.s.enableSwipe&&e.isTouch&&e.doCss()&&(e.$slide.on("touchstart.lg",function(s){e.$outer.hasClass("lg-zoomed")||e.lgBusy||(s.preventDefault(),e.manageSwipeClass(),t=s.originalEvent.targetTouches[0].pageX)}),e.$slide.on("touchmove.lg",function(l){e.$outer.hasClass("lg-zoomed")||(l.preventDefault(),s=l.originalEvent.targetTouches[0].pageX,e.touchMove(t,s),i=!0)}),e.$slide.on("touchend.lg",function(){e.$outer.hasClass("lg-zoomed")||(i?(i=!1,e.touchEnd(s-t)):e.$el.trigger("onSlideClick.lg"))}))},l.prototype.enableDrag=function(){var s=this,i=0,l=0,o=!1,a=!1;s.s.enableDrag&&!s.isTouch&&s.doCss()&&(s.$slide.on("mousedown.lg",function(t){s.$outer.hasClass("lg-zoomed")||(e(t.target).hasClass("lg-object")||e(t.target).hasClass("lg-video-play"))&&(t.preventDefault(),s.lgBusy||(s.manageSwipeClass(),i=t.pageX,o=!0,s.$outer.scrollLeft+=1,s.$outer.scrollLeft-=1,s.$outer.removeClass("lg-grab").addClass("lg-grabbing"),s.$el.trigger("onDragstart.lg")))}),e(t).on("mousemove.lg",function(e){o&&(a=!0,l=e.pageX,s.touchMove(i,l),s.$el.trigger("onDragmove.lg"))}),e(t).on("mouseup.lg",function(t){a?(a=!1,s.touchEnd(l-i),s.$el.trigger("onDragend.lg")):(e(t.target).hasClass("lg-object")||e(t.target).hasClass("lg-video-play"))&&s.$el.trigger("onSlideClick.lg"),o&&(o=!1,s.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},l.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1,s=this.$slide.length;this.s.loop&&(0===this.index?t=s-1:this.index===s-1&&(e=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),t>-1&&this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")},l.prototype.mousewheel=function(){var e=this;e.$outer.on("mousewheel.lg",function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},l.prototype.closeGallery=function(){var t=this,s=!1;this.$outer.find(".lg-close").on("click.lg",function(){t.destroy()}),t.s.closable&&(t.$outer.on("mousedown.lg",function(t){s=!!(e(t.target).is(".lg-outer")||e(t.target).is(".lg-item ")||e(t.target).is(".lg-img-wrap"))}),t.$outer.on("mouseup.lg",function(i){(e(i.target).is(".lg-outer")||e(i.target).is(".lg-item ")||e(i.target).is(".lg-img-wrap")&&s)&&(t.$outer.hasClass("lg-dragging")||t.destroy())}))},l.prototype.destroy=function(s){var i=this;s||i.$el.trigger("onBeforeClose.lg"),e(t).scrollTop(i.prevScrollTop),s&&(i.s.dynamic||this.$items.off("click.lg click.lgcustom"),e.removeData(i.el,"lightGallery")),this.$el.off(".lg.tm"),e.each(e.fn.lightGallery.modules,function(e){i.modules[e]&&i.modules[e].destroy()}),this.lGalleryOn=!1,clearTimeout(i.hideBartimeout),this.hideBartimeout=!1,e(t).off(".lg"),e("body").removeClass("lg-on lg-from-hash"),i.$outer&&i.$outer.removeClass("lg-visible"),e(".lg-backdrop").removeClass("in"),setTimeout(function(){i.$outer&&i.$outer.remove(),e(".lg-backdrop").remove(),s||i.$el.trigger("onCloseAfter.lg")},i.s.backdropDuration+50)},e.fn.lightGallery=function(t){return this.each(function(){if(e.data(this,"lightGallery"))try{e(this).data("lightGallery").init()}catch(e){console.error("lightGallery has not initiated properly")}else e.data(this,"lightGallery",new l(this,t))})},e.fn.lightGallery.modules={}}(jQuery,window,document),$("#ac-gallery").lightGallery()},{}],2:[function(e,t,s){"use strict";var i={};i.web_path,i.setPath=function(){var e=$(".colours__image").attr("src").split("colours-");i.web_path=e[0]+"/"},i.changeImage=function(e){$(".colours__image").attr("src",i.web_path+"colours-"+e)},i.clicks=function(){$(".colours__list__item").click(function(){var e=$(this).data("colour");i.changeImage(e),$(".colours__list__item").removeClass("colours__list__item--selected"),$(this).addClass("colours__list__item--selected")})},i.init=function(){i.clicks(),i.setPath()},t.exports=i},{}],3:[function(e,t,s){"use strict";var i={};i.init=function(){$("a[href*=\\#]:not([href=\\#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length)return $("html, body").animate({scrollTop:e.offset().top},700),!1}})},i.offset=function(e){$("a[href*=\\#]:not([href=\\#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if((t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length)return $("html, body").animate({scrollTop:t.offset().top-e},700),!1}})},t.exports=i},{}],4:[function(e,t,s){"use strict";var i=e("scroll_to"),l=e("colour_picker");e("_libs/lightgallery.js"),$("#ford_fiesta").lightGallery({selector:".ac-gallery-trigger"}),$(".ac-gallery-open").click(function(){$(".ac-gallery-first").trigger("click")}),window.onload=function(){function e(){return s.offsetTop}function t(){for(var e=d.length,t=0;t<e&&!function(e){return e.getBoundingClientRect().top>0}(d.item(t));t++);null!=d.item(t)&&function(e){Array.prototype.forEach.call(g,function(e){e.classList.remove("mini-nav__desktop--active")}),document.querySelector('a[href="#'+e+'"]').classList.add("mini-nav__desktop--active")}(d.item(t).id)}l.init();var s=document.querySelector("[data-sticky-nav]"),o=document.querySelector("[data-sticky-content]"),a=!1,n=e(),r=s.offsetHeight;i.offset(r),window.onscroll=function(i){var l=e()-window.pageYOffset,r=window.pageYOffset;l<=0&&!a?(s.style.position="fixed",s.style.width="100%",s.style.zIndex="4",a=!0):a&&r<=n&&(s.style.position="static",o.style.marginTop="0px",a=!1),t()};var d=document.querySelectorAll("[data-content]"),g=document.querySelectorAll("[data-scrollspy-link]")};var o=document.getElementById("floating");window.addEventListener("scroll",function(){document.getElementById("fiesta-active");var e=window.screen.availWidth,t=window.scrollY;o.className=e<=320&&t>=4331?"floating-cta hide":e>=320&&t>=4433?"floating-cta hide":e>=500&&t>=4700?"floating-cta hide":e>=768&&t>=3200?"floating-cta hide":"floating-cta show"})},{"_libs/lightgallery.js":1,colour_picker:2,scroll_to:3}]},{},[4]);