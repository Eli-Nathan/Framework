'use strict'
require('es6-promise').polyfill();
var axios = require('axios')
var finance = {
  'blkNo': 0
}

finance.init = function() {
  if (typeof cars === "undefined") { return; }
  axios.get('https://www.arnoldclark.com/used-cars/ref/' + cars[finance.blkNo] + '.json').then(function(response) {
    var title = 'Representative finance example ' + response.data.plate + ' ' + response.data.make + ' ' + response.data.model + ' ' + response.data.variant

    if (response.data.finance.hp) {
      finance.parseRep(response.data.finance.hp.illustration, title);
    }

    if (response.data.finance.pcp) {
      finance.parseRep(response.data.finance.pcp.illustration, title);
    }
  }).catch(function(error) {
    if (finance.blkNo < cars.length - 1) {
      finance.blkNo++
      finance.init()
    } else {
      var illustration = {
        "Description": "Hire purchase (calculated)",
        "Monthly payment": 181,
        "Deposit": 181,
        "Term (months)": 60,
        "Fixed interest rate": "4.7%",
        "Cash price": 8998,
        "Credit amount": 8817,
        "Completion fee": 1,
        "Total amount payable": 11058,
        "apr": "8.9%"
      }
      finance.parseRep(illustration, 'Representative finance example');
    }
  });
}

finance.parseRep = function(rep, title) {
  var repBody = document.querySelectorAll('[data-finance-example="body"]')[0];
  document.querySelectorAll('[data-finance-example="header"]')[0].innerHTML = title;

  for (var key in rep) {
    if (rep.hasOwnProperty(key)) {
      if (key !== 'Description' && key !== 'apr' && key !== 'Fixed interest rate' && key !== 'Excess mileage charge' && key !== 'Term (months)' && key !== 'Contract mileage') {
        repBody.innerHTML += '<div class="ch-finance-example__figure"><span class="ch-finance-example__figure__price"><span>£</span>' + finance.formatPrice(rep[key]) + '</span><span class="ch-finance-example__figure__label">' + key + '</span></div>'
      }
      if (key === 'apr') {
        repBody.innerHTML += '<div class="ch-finance-example__figure"><span class="ch-finance-example__figure__price">' + rep[key] + ' APR</span><span class="ch-finance-example__figure__label">Representative</span></div>'
      }
      if (key === 'Excess mileage charge' || key === 'Term (months)' || key === 'Fixed interest rate' || key === 'Contract mileage') {
        repBody.innerHTML += '<div class="ch-finance-example__figure"><span class="ch-finance-example__figure__price">' + rep[key] + '</span><span class="ch-finance-example__figure__label">' + key + '</span></div>'
      }
    }
  }
}

finance.formatPrice = function(price) {
  price = price.toString()
  var splitPrice = price.split('.')

  if (!splitPrice[1] || splitPrice[1] === '0') {
    price = parseFloat(price).toFixed(0)
  } else {
    price = parseFloat(price).toFixed(2)
  }

  if (price > 9999) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  } else {
    return price
  }
}

module.exports = finance
