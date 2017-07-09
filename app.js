   'use strict';
   document.addEventListener('DOMContentLoaded', function() {
       /* global RvVanillaModal */
       var modal = new RvVanillaModal({
           showOverlay: true
       });

       // each method
       modal.each(function(element) {
           console.log('element:', element);
           var target = element.getAttribute('data-rv-vanilla-modal');
           console.log(target);
           // var targetElement = document.querySelector(target);
           var targetElement = document.querySelector('#target-modal');
           var closeBtn = targetElement.querySelector(modal.settings.closeSelector);

           // close click listerner
           closeBtn.addEventListener('click', function(event) {
               event.preventDefault();
               modal.close(targetElement);
           });

           // open click listerner
           element.addEventListener('click', function(event) {
               event.preventDefault();
               modal.open(targetElement);
           });
       });
   }, false);
