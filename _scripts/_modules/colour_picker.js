'use strict'

var cp = {}

cp.web_path

cp.setPath = function () {
  var path = $('.colours__image').attr('src').split('colours-')
  cp.web_path = path[0] + '/'
}

cp.changeImage = function (img) {
  $('.colours__image').attr('src', cp.web_path + 'colours-' + img)
}

cp.clicks = function () {
  $('.colours__list__item').click(function () {
    var img = $(this).data('colour')
    cp.changeImage(img)
    $('.colours__list__item').removeClass('colours__list__item--selected')
    $(this).addClass('colours__list__item--selected')
  })
}

cp.init = function () {
  cp.clicks()
  cp.setPath()
}

module.exports = cp
