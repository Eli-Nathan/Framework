!function s(c,r,u){function l(n,t){if(!r[n]){if(!c[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(i)return i(n,!0);var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}var o=r[n]={exports:{}};c[n][0].call(o.exports,function(t){var e=c[n][1][t];return l(e||t)},o,o.exports,s,c,r,u)}return r[n].exports}for(var i="function"==typeof require&&require,t=0;t<u.length;t++)l(u[t]);return l}({1:[function(t,e,n){"use strict";var a={},o={},l={};a.init=function(){var t=document.querySelectorAll('[data-nav-id="button"]')[0],e=document.querySelectorAll('[data-nav-id="acTouchNav"]')[0],n=document.querySelectorAll(".ac-touchnav__menu"),a=document.querySelectorAll('[data-nav-id="home"]')[0],o=document.querySelectorAll("[data-goto]"),s=document.querySelectorAll(".ac-touchnav__manufacturers")[0];null!=t&&(t.onclick=function(){l.hasClass(e,"ac-touchnav--expanded")?(l.removeClass(e,"ac-touchnav--expanded"),u()):(l.addClass(e,"ac-touchnav--expanded"),a.style.display="block")});for(var c=0;c<o.length;c++)o[c].addEventListener("click",r,!1);function r(){var t=this.getAttribute("data-goto"),e=document.querySelectorAll('[data-nav-id="'+t+'"]')[0];u(),e.style.display="block"}function u(){for(var t=0;t<n.length;t++)n[t].style.display="none"}s.addEventListener("change",function(){var t=this.value;"Manufacturers"!==t&&(window.location.href="https://www.arnoldclark.com"+t)},!1)},o.init=function(){var t=document.getElementsByClassName("ac-subheader__nav")[0],e=document.getElementsByClassName("ac-subnav__button")[0],n=!1,a=this;null!=e&&(e.onclick=function(){n?(n=!1,a.closeSubNav()):(n=!0,a.openSubNav())}),null!=t&&(window.onresize=function(){992<document.body.offsetWidth?a.openSubNav():a.closeSubNav()}),this.closeSubNav=function(){t.style.display="none"},this.openSubNav=function(){t.style.display="block"}},l.hasClass=function(t,e){return-1<t.getAttribute("class").indexOf(e)},l.addClass=function(t,e){t.classList?t.classList.add(e):l.hasClass(t,e)||t.setAttribute("class",t.getAttribute("class")+" "+e)},l.removeClass=function(t,e){t.classList?t.classList.remove(e):l.asClass(t,e)&&t.setAttribute("class",t.getAttribute("class").replace(e," "))};window.addEventListener("load",function(){o.init(),a.init()},!1)},{}]},{},[1]);