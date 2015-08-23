(function() {
    "use strict";
    
    // Keep the background image from resizing when the scrollbar on mobile moves
    var windowHeight = $(window).height();
    $("#top").height(windowHeight);
    $("#langy").height(windowHeight);

    // Highlights the navigation menu items while scrolling.
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Slider
    var $slider = $('.bxslider');
    $slider.bxSlider({
        pager: false
    });

    // Animate CSS on scroll
    new WOW().init();

    // Animate anchor links
    var $html = $('html,body');
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $html.animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });

    // Package downloads

    var packages = {}; // Pseudo set
    $(".js-downloads-count").each(function() {
        var packageName = $(this).data('packageName');
        packages[packageName] = 0;
    });

    $.each(packages, function(packageName, downloads) {
        var $downloadCounters = $("[data-package-name='" + packageName + "']");
        var roundToK = function(number) {
            return Math.round(number / 1000);
        };

        $.ajax({
          url: 'https://jsonp.afeld.me/?callback=?&url=https%3A%2F%2Fpackagecontrol.io%2Fpackages%2F' + packageName + '.json',
          dataType: 'jsonp'
        }).done(function(packageInfo) {
            var totalDownloads = roundToK(packageInfo.installs.total);
            $downloadCounters.html('(' + totalDownloads + 'k downloads)').fadeIn();
        });
    });
})();
