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

        // close click listener
        closeBtn.addEventListener('click', function(event) {
            event.preventDefault();
            modal.close(targetElement);
        });

        // open click listener
        element.addEventListener('click', function(event) {
            event.preventDefault();
            modal.open(targetElement);
        });

        $(document).keyup(hideModal);
        $('.rv-vanilla-modal-overlay').click(hideModal);

        // hide modal on esc key press and click on overlay
        function hideModal(e) {
            if (e.keyCode === 27 || e.type === 'click') {
                event.preventDefault();
                modal.close(targetElement);
            }
        }

    });
}, false);
