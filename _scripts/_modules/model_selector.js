'use strict'

var ms = {}

ms.showOne = function () {
  $('.models-section').hide()
  $('.models-section__one').show()
}

ms.showTwo = function () {
  $('.models-section').hide()
  $('.models-section__two').show()
}

ms.showThree = function () {
  $('.models-section').hide()
  $('.models-section__three').show()
}

ms.showFour = function () {
  $('.models-section').hide()
  $('.models-section__four').show()
}

ms.checkMobile = function () {
  if ($(window).width() <= 770) {
    $('.mobile-overlay__close').click(function () {
      $('.mobile-overlay').fadeOut(200)
    })

    $('.model__click').click(function (e) {
      e.preventDefault()
      var modalTitle = $('.data__variant')
      var modelName = $(this).data('model-name')
      var modelURL = $(this).data('model-url')

      modalTitle.text(modelName)
      $('.mobile-overlay__new').attr('href', '/new-cars/' + modelURL)
      $('.mobile-overlay__nearly').attr('href', '/nearly-new-cars/' + modelURL)
      $('.mobile-overlay__used').attr('href', '/used-cars/' + modelURL)
      $('.mobile-overlay').show()
    })
  } else {
    $('.mobile-overlay').hide()
  }
}

ms.init = function () {
  $('#mc-model-selector').show()

  $('.model-nav-btn__one').click(function () {
    $('.model-nav li').removeClass('model-nav--selected')
    $(this).parent().addClass('model-nav--selected')
    ms.showOne()
  })

  $('.model-nav-btn__two').click(function () {
    $('.model-nav li').removeClass('model-nav--selected')
    $(this).parent().addClass('model-nav--selected')
    ms.showTwo()
  })

  $('.model-nav-btn__three').click(function () {
    $('.model-nav li').removeClass('model-nav--selected')
    $(this).parent().addClass('model-nav--selected')
    ms.showThree()
  })

  $('.model-nav-btn__four').click(function () {
    $('.model-nav li').removeClass('model-nav--selected')
    $(this).parent().addClass('model-nav--selected')
    ms.showFour()
  })

  $('.model-select ').change(function () {
    $('.mobile-overlay').hide()
    if ($(this).val() == 'one') {
      $('.model-nav li').removeClass('model-nav--selected')
      $(this).parent().addClass('model-nav--selected')
      ms.showOne()
    }
    if ($(this).val() == 'two') {
      $('.model-nav li').removeClass('model-nav--selected')
      $('.models-section__large').parent().addClass('model-nav--selected')
      ms.showTwo()
    }
    if ($(this).val() == 'three') {
      $('.model-nav li').removeClass('model-nav--selected')
      $('.models-section__large').parent().addClass('model-nav--selected')
      ms.showThree()
    }
    if ($(this).val() == 'four') {
      $('.model-nav li').removeClass('model-nav--selected')
      $('.models-section__large').parent().addClass('model-nav--selected')
      ms.showFour()
    }
  })

  $(window).resize(function () {
    ms.checkMobile()
  })

  ms.checkMobile()
  ms.showOne()
}

module.exports = ms
