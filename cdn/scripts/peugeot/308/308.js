!function r(a,c,s){function l(o,t){if(!c[o]){if(!a[o]){var e="function"==typeof require&&require;if(!t&&e)return e(o,!0);if(u)return u(o,!0);var n=new Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}var i=c[o]={exports:{}};a[o][0].call(i.exports,function(t){var e=a[o][1][t];return l(e||t)},i,i.exports,r,a,c,s)}return c[o].exports}for(var u="function"==typeof require&&require,t=0;t<s.length;t++)l(s[t]);return l}({1:[function(t,e,o){"use strict";var n={};n.web_path,n.setPath=function(){var t=$(".colours__image").attr("src").split("colours-");n.web_path=t[0]+"/"},n.changeImage=function(t){$(".colours__image").attr("src",n.web_path+"colours-"+t)},n.clicks=function(){$(".colours__list__item").click(function(){var t=$(this).data("colour");n.changeImage(t),$(".colours__list__item").removeClass("colours__list__item--selected"),$(this).addClass("colours__list__item--selected")})},n.init=function(){n.clicks(),n.setPath()},e.exports=n},{}],2:[function(t,e,o){"use strict";var n={init:function(){$("a[href*=\\#]:not([href=\\#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if((t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length)return $("html, body").animate({scrollTop:t.offset().top},700),!1}})},offset:function(e){$("a[href*=\\#]:not([href=\\#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if((t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length)return $("html, body").animate({scrollTop:t.offset().top-e},700),!1}})}};e.exports=n},{}],3:[function(t,e,o){"use strict";var f=t("scroll_to"),h=t("colour_picker");window.onload=function(){h.init();var n=document.querySelector("[data-sticky-nav]"),i=document.querySelector("[data-sticky-content]"),r=(document.querySelector("[data-deal-button]"),!1),a=s(),c=n.offsetHeight;function s(){return n.offsetTop}f.offset(c),window.onscroll=function(t){var e=s()-window.pageYOffset,o=window.pageYOffset;e<=0&&!r?(n.style.position="fixed",n.style.top="0px",n.style.width="100%",n.style.zIndex="4",i.style.marginTop=c+"px",r=!0):r&&o<=a&&(n.style.position="static",i.style.marginTop="0px",r=!1),function(){for(var t=l.length,e=0;e<t&&(o=l.item(e),void 0,!(0<o.getBoundingClientRect().top));e++);var o;null!=l.item(e)&&(n=l.item(e).id,Array.prototype.forEach.call(u,function(t){t.classList.remove("mini-nav__desktop--active")}),document.querySelector('a[href="#'+n+'"]').classList.add("mini-nav__desktop--active"));var n}()};var l=document.querySelectorAll("[data-content]"),u=document.querySelectorAll("[data-scrollspy-link]")}},{colour_picker:1,scroll_to:2}]},{},[3]);