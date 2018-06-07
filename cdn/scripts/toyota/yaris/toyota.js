!function e(n,s,a){function l(t,i){if(!s[t]){if(!n[t]){var r="function"==typeof require&&require;if(!i&&r)return r(t,!0);if(o)return o(t,!0);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}var d=s[t]={exports:{}};n[t][0].call(d.exports,function(e){var s=n[t][1][e];return l(s||e)},d,d.exports,e,n,s,a)}return s[t].exports}for(var o="function"==typeof require&&require,t=0;t<a.length;t++)l(a[t]);return l}({1:[function(e,n,s){"use strict";var a={};a.create=function(e){if(e.salesInfo.pricing.saving){var n=a.getSaving(e.salesInfo.pricing);s=""}else var s="blk__hide";if(e.salesInfo.pricing.monthlyPayment)var l="",o=a.formatFinance(e.salesInfo.pricing.monthlyPayment),t=a.formatFinance(e.salesInfo.pricing.deposit);else l="blk__hide";var i=a.shortenTitle(e.title.name),r='<div class="blks__column">             <a href="https://www.arnoldclark.com/used-cars/ref/'+e.stockReference+'">                <section class="blk">                    <h1 class="blk__model">'+i+'</h1>                    <h2 class="blk__variant">'+a.shortenVariant(e.title.variant)+'</h2>                    <img src="'+e.thumbnails[0]+'" class="blk__img" alt="'+i+'"/>                    <div class="blk__details">                       <p class="blk__details__price">                           <span class="blk__details__price__prefix">'+e.salesInfo.pricing.cashPricePrefix+' </span>                           <span class="blk__details__price__currency">£</span>'+a.formatPrice(e.salesInfo.pricing.cashPrice)+'</p>                       <p class="blk__details__saving '+s+'">'+n+'</p>                       <table class="blk__details__finance '+l+'">                         <tr>                           <td><span class="blk__details__finance__monthly">£'+o+'</span>per month</td>                           <td><span class="blk__details__finance__deposit">£'+t+"</span>deposit</td>                         </tr>                       </table>                   </div>               </section>             </a>           </div>";a.add(r)},a.add=function(e){$(".blks__scrollable").append(e)},a.loading=function(e){!0===e?($("#blks, #blks .blks__loader").show(),$(".blks__scrollable").hide()):($(".blks__loader").hide(),$(".blks__scrollable").fadeIn())},a.formatPrice=function(e){return e>9999?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e},a.formatFinance=function(e){return(e=e.toString()).split(".")[1]?parseFloat(e).toFixed(2):parseFloat(e).toFixed(0)},a.shortenVariant=function(e){return e.length>=30?(e=e.substring(0,27)).concat("..."):e},a.shortenTitle=function(e){return e.length>=37?(e=e.substring(0,35)).concat("..."):e},a.getSaving=function(e){return e.savingSuffix?"Save £"+e.saving+e.savingSuffix:e.savingPrefix?e.savingPrefix+"£"+e.saving:!e.savingPrefix&&e.saving?"Save £"+e.saving:void 0},a.getJSON=function(){var e="https://www.arnoldclark.com/api/v1/vehicles?keywords="+cars.join(" ");$.getJSON(e,function(e){var n=e.searchResults;for(var s in n)a.create(n[s])})},a.createScrape=function(){var e=document.createElement("span");e.setAttribute("data-raw-deals",""),e.style.display="none",e.innerHTML=cars,document.body.appendChild(e)},a.init=function(){cars.length<=2&&$(".blks__scrollable").addClass("blks--two"),a.loading(!1),a.getJSON(),a.createScrape()},n.exports=a},{}],2:[function(e,n,s){"use strict";var a={};a.showOne=function(){$(".models-section").hide(),$(".models-section__one").show()},a.showTwo=function(){$(".models-section").hide(),$(".models-section__two").show()},a.showThree=function(){$(".models-section").hide(),$(".models-section__three").show()},a.showFour=function(){$(".models-section").hide(),$(".models-section__four").show()},a.checkMobile=function(){$(window).width()<=770?($(".mobile-overlay__close").click(function(){$(".mobile-overlay").fadeOut(200)}),$(".model__click").click(function(e){e.preventDefault();var n=$(".data__variant"),s=$(this).data("model-name"),a=$(this).data("model-url");n.text(s),$(".mobile-overlay__new").attr("href","/new-cars/"+a),$(".mobile-overlay__nearly").attr("href","/nearly-new-cars/"+a),$(".mobile-overlay__used").attr("href","/used-cars/"+a),$(".mobile-overlay").show()})):$(".mobile-overlay").hide()},a.init=function(){$("#mc-model-selector").show(),$(".model-nav-btn__one").click(function(){$(".model-nav li").removeClass("model-nav--selected"),$(this).parent().addClass("model-nav--selected"),a.showOne()}),$(".model-nav-btn__two").click(function(){$(".model-nav li").removeClass("model-nav--selected"),$(this).parent().addClass("model-nav--selected"),a.showTwo()}),$(".model-nav-btn__three").click(function(){$(".model-nav li").removeClass("model-nav--selected"),$(this).parent().addClass("model-nav--selected"),a.showThree()}),$(".model-nav-btn__four").click(function(){$(".model-nav li").removeClass("model-nav--selected"),$(this).parent().addClass("model-nav--selected"),a.showFour()}),$(".model-select ").change(function(){$(".mobile-overlay").hide(),"one"==$(this).val()&&($(".model-nav li").removeClass("model-nav--selected"),$(this).parent().addClass("model-nav--selected"),a.showOne()),"two"==$(this).val()&&($(".model-nav li").removeClass("model-nav--selected"),$(".models-section__large").parent().addClass("model-nav--selected"),a.showTwo()),"three"==$(this).val()&&($(".model-nav li").removeClass("model-nav--selected"),$(".models-section__large").parent().addClass("model-nav--selected"),a.showThree()),"four"==$(this).val()&&($(".model-nav li").removeClass("model-nav--selected"),$(".models-section__large").parent().addClass("model-nav--selected"),a.showFour())}),$(window).resize(function(){a.checkMobile()}),a.checkMobile(),a.showOne()},n.exports=a},{}],3:[function(e,n,s){"use strict";var a=e("deals"),l=e("model_selector");window.onload=function(){a.init(),l.init()}},{deals:1,model_selector:2}]},{},[3]);