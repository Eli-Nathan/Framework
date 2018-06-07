'use strict'

var accordion = {
  init: function () {
    var accordionEl = document.querySelectorAll('[data-accordion]')
  // Add event listener to whole document
    for (var i = 0; i < accordionEl.length; i++) {
      accordionEl[i].addEventListener('click', function (eventArgs) {
      // The target event property returns the element that triggered the event. Like jQuery's $(this)
        var target = eventArgs.target
      // The element on the page we are searching for to add the function to
        var elementToLookFor = 'details'
      // While there are those elements on the page...
        while (target !== null) {
        // IF the element we are looking for is the one that was clicked i.e details...
          if (target.tagName.toLowerCase() === elementToLookFor) {
          // IF the details tag that was clicked does NOT have the open attribute...
            if (target.open === false) {
            // Get all details tags
              var tabs = document.getElementsByTagName('details')
            // Loop through them all
              for (var i = 0; i < tabs.length; i++) {
              // Close them byt removing open attribute
                tabs[i].open = false
              }
            }
          }
        // Also check for the elements parents as the click will be on the summary tag
          target = target.parentElement
        }
      })
    }
  }
}

module.exports = accordion
