(function() {
    "use strict";

    // Keep the background image from resizing when the scrollbar on mobile moves
    // var windowHeight = $(window).height();
    // $("#top").height(windowHeight);
    // $("#langy").height(windowHeight);

    // Highlights the navigation menu items while scrolling.
    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 51
    // });

    // var granim = new Granim({
    //     element: "#logo-canvas",
    //     direction: "left-right",
    //     opacity: [1, 1],
    //     isPausedWhenNotInView: true,
    //     stateTransitionSpeed: 1000,
    //     states: {
    //         "default-state": {
    //             gradients: [
    //                 ["#00d2ff", "#3a7bd5"],
    //                 ["#4776E6", "#8E54E9"],
    //                 ["#000428", "#004e92"],
    //                 ["#FF512F", "#DD2476"],
    //                 ["#fd746c", "#ff9068"],
    //                 ["#6a3093", "#a044ff"],
    //                 ["#76b852", "#8DC26F"],
    //                 ["#005C97", "#363795"]
    //             ],
    //             transitionSpeed: 3000 
    //         },
    //         "github": {
    //             gradients: [['#000000', '#F5F5F5'], ['#F5F5F5', '#000000']],
    //             transitionSpeed: 3000 
    //         },
    //         "twitter": {
    //             gradients: [['#1DA1F3', '#66757F'], ['#66757F', '#1DA1F3']],
    //             transitionSpeed: 3000 
    //         },
    //         "stackoverflow": {
    //             gradients: [['#F48024', '#666666'], ['#666666', '#F48024']],
    //             transitionSpeed: 3000 
    //         },
    //         "email": {
    //             gradients: [['#D14836', '#F5F5F5'], ['#F5F5F5', '#D14836']],
    //             transitionSpeed: 3000 
    //         },
    //     }
    // })

    // $("#logo").on("mouseenter", function() {
    //     granim.changeState("email")
    // }).on("mouseleave", function() {
    //     granim.changeState("default-state")
    // })

    // Slider
    // var $slider = $('.bxslider');
    // $slider.bxSlider({
    //     pager: false
    // });

    // Animate CSS on scroll
    // new WOW().init();

    // Animate anchor links
    // var $html = $('html,body');
    // $('a[href*=#]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $html.animate({
    //                 scrollTop: target.offset().top
    //             }, 800);
    //             return false;
    //         }
    //     }
    // });

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
