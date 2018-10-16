(function () {
    "use strict";

    // fade in images
    $('.fadedIn-image').fadeIn(1500);
    $('.fadedIn-image').parent().parent().parent().find('p') ? $('img').parent().parent().parent().find('p').fadeIn(1600) : null;

})();