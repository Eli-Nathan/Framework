/*!
 *
 * This is a temporary solution until the versioned API
 * handles van blocks by default.
 *
 */
'use strict'
var deals = {}

deals.create = function (vehicle) {
  if (!vehicle.pricing.saving) {
    var savingStyle = 'blk__hide'
  } else {
    var saving = deals.getSaving(vehicle.pricing)
    savingStyle = ''
  }
  if (vehicle.pricing.monthlyPayment) {
    var financeStyle = ''
    var monthlyPayment = deals.formatFinance(vehicle.pricing.monthlyPayment)
    var deposit = deals.formatFinance(vehicle.pricing.deposit)
  } else {
    financeStyle = 'blk__hide'
  }

  var vehicleTitle = deals.shortenTitle(vehicle.plate + ' ' + vehicle.make + ' ' + vehicle.model)

  var template = '<div class="blks__column">' +
    '             <a href="https://www.arnoldclark.com/used-cars/ref/' + vehicle.stockReference + '">' +
    '                <section class="blk">' +
    '                    <h1 class="blk__model">'+ vehicleTitle +'</h1>' +
    '                    <h2 class="blk__variant">' + deals.shortenVariant(vehicle.variant) + '</h2>' +
    '                    <img src="' + vehicle.thumbnails[0] + '" class="blk__img" alt="' + vehicle.make + '&nbsp;' + vehicle.model  + '&nbsp;' +  vehicle.variant + '"/>' +
    '                    <div class="blk__details">' +
    '                       <p class="blk__details__price">' +
    '                           <span class="blk__details__price__prefix">' + vehicle.pricing.cashPricePrefix + ' </span>' +
    '                           <span class="blk__details__price__currency">£</span>' + deals.formatPrice(vehicle.pricing.cashPrice) + '</p>' +
    '                       <p class="blk__details__saving ' + savingStyle + '">' + saving + '</p>' +
    '                       <table class="blk__details__finance ' + financeStyle + '">' +
    '                         <tr>' +
    '                           <td><span class="blk__details__finance__monthly">£' + monthlyPayment + '</span>per month</td>' +
    '                           <td><span class="blk__details__finance__deposit">£' + deposit + '</span>deposit</td>' +
    '                         </tr>' +
    '                       </table>' +
    '                   </div>' +
    '               </section>' +
    '             </a>' +
    '           </div>'
  deals.add(template)
}

deals.add = function (template) {
  $('.blks__scrollable').append(template)
}

deals.loading = function (status) {
  if (status === true) {
    $('#blks, #blks .blks__loader').show()
    $('.blks__scrollable').hide()
  } else {
    $('.blks__loader').hide()
    $('.blks__scrollable').fadeIn()
  }
}
deals.formatPrice = function (price) {
  if (price > 9999) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  } else {
    return price
  }
}

deals.checkURL = function (url) {
  if (url.substring(url.length - 1) === '/') {
    url = url.substring(0, url.length - 1)
  }
  return url
}

deals.formatFinance = function (price) {
  price = price.toString()
  var splitPrice = price.split('.')
  if (!splitPrice[1]) {
    return parseFloat(price).toFixed(0)
  } else {
    return parseFloat(price).toFixed(2)
  }
}

deals.shortenVariant = function (variant) {
  if (variant.length >= 30) {
    variant = variant.substring(0, 27)
    return variant.concat('...')
  } else {
    return variant
  }
}

deals.shortenTitle = function (title) {
  if (title.length >= 37) {
    title = title.substring(0, 35)
    return title.concat('...')
  } else {
    return title
  }
}

deals.getSaving = function (vehicle) {
  if (vehicle.savingSuffix) {
    return 'Save £' + vehicle.saving + vehicle.savingSuffix
  }
  if (vehicle.savingPrefix) {
    return vehicle.savingPrefix + '£' + vehicle.saving
  }
  if (!vehicle.savingPrefix && vehicle.saving) {
    return 'Save £' + vehicle.saving
  }
}

deals.getJSON = function () {
  for (var i = 0, len = cars.length; i < len; i++) {
    var blkNo = cars[i]
    var url = deals.checkURL('https://www.arnoldclark.com/used-cars/ref/' + blkNo)
    $.getJSON(url + '.json', function (data) {
      deals.create(data)
    })
  }
}

deals.createScrape = function () {
  var scrapeInformation = document.createElement('span')
  scrapeInformation.setAttribute('data-raw-deals', '');
  scrapeInformation.style.display = 'none'
  scrapeInformation.innerHTML = cars
  document.body.appendChild(scrapeInformation)
}

deals.init = function () {
  if (cars.length <= 2) {
    $('.blks__scrollable').addClass('blks--two')
  }
  deals.loading(false)
  deals.getJSON()
  deals.createScrape()
}

module.exports = deals
