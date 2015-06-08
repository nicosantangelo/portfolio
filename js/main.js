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

    // Package downloads

    $(".js-downloads-count").each(function() {
        var roundToK = function(number) {
            return Math.round(number / 1000);
        };
        var $self = $(this);
        var packageName = $self.data('packageName');

        $.ajax({
          url: 'https://jsonp.afeld.me/?callback=?&url=https%3A%2F%2Fpackagecontrol.io%2Fpackages%2F' + packageName + '.json',
          dataType: 'jsonp'
        }).done(function(packageInfo) {
            var totalDownloads = roundToK(packageInfo.installs.total);
            $self.html('(' + totalDownloads + 'k downloads)').fadeIn();
        });
    });
})();
