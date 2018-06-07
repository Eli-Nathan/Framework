'use strict'
var deals = {}

deals.create = function (vehicle) {
  if (vehicle.salesInfo.pricing.monthlyPayment) {
    var financeStyle = ''
    var monthlyPayment = deals.formatFinance(vehicle.salesInfo.pricing.monthlyPayment)
    var deposit = deals.formatFinance(vehicle.salesInfo.pricing.deposit)
  } else {
    financeStyle = 'blk__hide'
  }

  var vehicleTitle = deals.shortenTitle(vehicle.title.name)


var template = '<h2 class="ch-h3">'+ vehicleTitle +'</h2>'+
'            <h3 class="ch-h5">' + deals.shortenVariant(vehicle.title.variant) + '</h3>'+
'            <div class="product__offer__cash">'+
'              <span>' + vehicle.salesInfo.pricing.cashPricePrefix + '  <span class="product__offer__cash__pound">£</span><span class="product__offer__cash__figure">' + deals.formatPrice(vehicle.salesInfo.pricing.cashPrice) + '</span></span>'+
'            </div>'+
'            <div class="product__offer__figures">'+
'              <table>'+
'                <tr>'+
'                  <td>'+
'                    <p>£' + monthlyPayment + '</p>'+
'                    <span>per month</span>'+
'                  </td>'+
'                  <td>'+
'                    <p>£' + deposit + '</p>'+
'                    <span>deposit</span>'+
'                  </td>'+
'                </tr>'+
'              </table>'+
'            </div>'+
'            <div class="product__offer__delivery-desktop">'+
'              <img src="/cdn/images/delivery-centres/delivery-centre-icon--white.svg" alt="Delivery Centre icon" class="ch-img--responsive">'+
'              <a href="#delivery-centre">'+
'              <span>Available for delivery</span>'+
'            </a>'+
'            </div>'+
'            <a href="/contact-us/vehicle-enquiry/' + vehicle.stockReference + '" class="ch-btn ch-btn--sm ch-btn--cta">Enquire now</a>'+
'            <div class="gallery gallery--desktop">'+
'              <a class="gallery__icon gallery__icon--desktop dynamic" href="#">'+
'              <img class="ch-img--responsive" src="/cdn/images/delivery-centres/delivery-centre-gallery-icon.svg" alt="Delivery Centre icon"/>'+
'            </a>'+
'            </div>';


  deals.add(template)
}

deals.add = function (template) {
  $('[data-id="dcd"]').append(template)
}


deals.formatPrice = function (price) {
  if (price > 9999) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  } else {
    return price
  }
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


deals.getJSON = function () {
  var vehicles = cars.join(" ");
  var url = 'https://www.arnoldclark.com/api/v1/vehicles?keywords=' + vehicles
    $.getJSON(url, function (data) {
      var vehiclesOjb = data.searchResults
      for (var i in vehiclesOjb) {
        deals.create(vehiclesOjb[i])
    }
  })
}

deals.createScrape = function () {
  var scrapeInformation = document.createElement('span')
  scrapeInformation.setAttribute('data-raw-deals', '');
  scrapeInformation.style.display = 'none'
  scrapeInformation.innerHTML = cars
  document.body.appendChild(scrapeInformation)
}

deals.init = function () {
  deals.getJSON()
  deals.createScrape()
}

module.exports = deals
