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

    // Easter
    var $document = $(document);
    var konamiKeys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var konamiIndex = 0;
    var corny = function(interval) {
        cornify_add();
        setTimeout(function() { corny(interval * 1.5); }, interval);
    };
    $document.on('keydown', function(e) {
        if(e.keyCode === konamiKeys[konamiIndex++]) {
            if(konamiIndex === konamiKeys.length) {
                $document.off('keydown');
                $.getScript('http://www.cornify.com/js/cornify.js',function() {
                    corny(300);
                    $document.on("keydown", cornify_add);
                }); 
            }
        } else {
            konamiIndex = 0;
        }
    });
})();
