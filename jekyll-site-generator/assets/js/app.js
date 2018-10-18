(function () {
    "use strict";

    // fade in images
    $('.fadedIn-image').on('load', function () {
        $(this).css('opacity', '1');
        $(this).parent().parent().parent().find('p') ? $(this).parent().parent().parent().find('p').fadeIn(1600) : null;
    });

    setTimeout(function () {
        $('.fadedIn-image').css('opacity', '1');
        $('.fadedIn-image').parent().parent().parent().find('p') ? $('.fadedIn-image').parent().parent().parent().find('p').fadeIn(1600) : null;
    }, 2000);

})();