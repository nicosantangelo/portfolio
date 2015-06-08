(function() {
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
})();
