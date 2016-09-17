(function() {
    "use strict";

    var canvas = document.getElementById('logo-canvas')
    var ctx = canvas.getContext("2d")
    ctx.globalCompositeOperation = 'destination-over'

    var granim = new Granim({
        element: "#logo-canvas",
        direction: "left-right",
        opacity: [1, 1],
        isPausedWhenNotInView: true,
        stateTransitionSpeed: 1000,
        states: {
            'default-state': {
                gradients: [
                    ['#FFA500', '#E04B40'],
                    ['#E04B40', '#FFA500'],
                    ['#587EBF', '#0FA960'],
                    ['#0FA960', '#587EBF'],
                ],
                transitionSpeed: 3000 
            },
            'sublime-text': {
                gradients: [['#FFA500', '#E04B40'], ['#FFA500', '#6A3093'], ['#6A3093', '#E04B40']],
                transitionSpeed: 3000 
            },
            'chrome-extensions': {
                gradients: [['#FF512F', '#DD2476'], ['#000428', '#004E92']],
                transitionSpeed: 3000 
            },
            'projects': {
                gradients: [['#FD746C', '#FF9068'], ['#6A3093', '#A044FF'], ['#76B852', '#8DC26F']],
                transitionSpeed: 3000 
            },
            'profiles': {
                gradients: [['#F48024', '#666666'], ['#666666', '#F48024']],
                gradients: [['#4776e6', '#8e54e9'], ['#000428', '#004E92'], ['#FF512F', '#DD2476']],
                transitionSpeed: 3000 
            }
        }
    });

    $.each(['sublime-text', 'chrome-extensions', 'projects', 'profiles'], function(key) {
        $('.' + key + ' .box').on('mouseenter', function() {
            granim.changeState(key);
        }).on('mouseleave', function() {
            granim.changeState('default-state');
        })
    });

    // Package downloads

    var packages = ['Gulp', 'Jasmine JS', 'Trello', 'Copy from Find Results', 'I18n Rails', 'Jest']
    var promises = []
    var total    = 0
    var roundToK = function(number) {
        return Math.round(number / 1000) + 'k';
    };
    var addDownloads = function($el, amount) {
        $el.html('<strong>' + roundToK(amount) + '</strong> downloads');
        $el.fadeIn();
    }


    $.each(packages, function(index, packageName) {
        var promise = $.ajax({
            url: 'https://jsonp.afeld.me/?callback=?&url=https%3A%2F%2Fpackagecontrol.io%2Fpackages%2F' + encodeURIComponent(packageName) + '.json',
            dataType: 'jsonp'
        }).done(function(packageInfo) {
            var $downloadCounters = $("[data-package-name='" + packageName + "']");
            addDownloads($downloadCounters, packageInfo.installs.total)
            total += packageInfo.installs.total
        });

        promises.push(promise)
    });

    $.when.apply($, promises).done(function() {
        addDownloads($("[data-package-name='Total']"), total)
    })
})();
