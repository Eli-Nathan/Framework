!function i(s,l,c){function o(a,n){if(!l[a]){if(!s[a]){var e="function"==typeof require&&require;if(!n&&e)return e(a,!0);if(_)return _(a,!0);var t=new Error("Cannot find module '"+a+"'");throw t.code="MODULE_NOT_FOUND",t}var r=l[a]={exports:{}};s[a][0].call(r.exports,function(n){var e=s[a][1][n];return o(e||n)},r,r.exports,i,s,l,c)}return l[a].exports}for(var _="function"==typeof require&&require,n=0;n<c.length;n++)o(c[n]);return o}({1:[function(n,e,a){"use strict";var c={create:function(n){if(n.pricing.saving){var e=c.getSaving(n.pricing);a=""}else var a="blk__hide";if(n.pricing.monthlyPayment)var t="",r=c.formatFinance(n.pricing.monthlyPayment),i=c.formatFinance(n.pricing.deposit);else t="blk__hide";var s=c.shortenTitle(n.plate+" "+n.make+" "+n.model),l='<div class="blks__column">             <a href="https://www.arnoldclark.com/used-cars/ref/'+n.stockReference+'">                <section class="blk">                    <h1 class="blk__model">'+s+'</h1>                    <h2 class="blk__variant">'+c.shortenVariant(n.variant)+'</h2>                    <img src="'+n.thumbnails[0]+'" class="blk__img" alt="'+n.make+"&nbsp;"+n.model+"&nbsp;"+n.variant+'"/>                    <div class="blk__details">                       <p class="blk__details__price">                           <span class="blk__details__price__prefix">'+n.pricing.cashPricePrefix+' </span>                           <span class="blk__details__price__currency">£</span>'+c.formatPrice(n.pricing.cashPrice)+'</p>                       <p class="blk__details__saving '+a+'">'+e+'</p>                       <table class="blk__details__finance '+t+'">                         <tr>                           <td><span class="blk__details__finance__monthly">£'+r+'</span>per month</td>                           <td><span class="blk__details__finance__deposit">£'+i+"</span>deposit</td>                         </tr>                       </table>                   </div>               </section>             </a>           </div>";c.add(l)},add:function(n){$(".blks__scrollable").append(n)},loading:function(n){!0===n?($("#blks, #blks .blks__loader").show(),$(".blks__scrollable").hide()):($(".blks__loader").hide(),$(".blks__scrollable").fadeIn())},formatPrice:function(n){return 9999<n?n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):n},checkURL:function(n){return"/"===n.substring(n.length-1)&&(n=n.substring(0,n.length-1)),n},formatFinance:function(n){return(n=n.toString()).split(".")[1]?parseFloat(n).toFixed(2):parseFloat(n).toFixed(0)},shortenVariant:function(n){return 30<=n.length?(n=n.substring(0,27)).concat("..."):n},shortenTitle:function(n){return 37<=n.length?(n=n.substring(0,35)).concat("..."):n},getSaving:function(n){return n.savingSuffix?"Save £"+n.saving+n.savingSuffix:n.savingPrefix?n.savingPrefix+"£"+n.saving:!n.savingPrefix&&n.saving?"Save £"+n.saving:void 0},getJSON:function(){for(var n=0,e=cars.length;n<e;n++){var a=cars[n],t=c.checkURL("https://www.arnoldclark.com/used-cars/ref/"+a);$.getJSON(t+".json",function(n){c.create(n)})}},createScrape:function(){var n=document.createElement("span");n.setAttribute("data-raw-deals",""),n.style.display="none",n.innerHTML=cars,document.body.appendChild(n)},init:function(){cars.length<=2&&$(".blks__scrollable").addClass("blks--two"),c.loading(!1),c.getJSON(),c.createScrape()}};e.exports=c},{}],2:[function(n,e,a){"use strict";var t=n("van_deals");window.onload=function(){t.init()}},{van_deals:1}]},{},[2]);