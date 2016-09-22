(function() {
    "use strict";

    var packages = ['Gulp', 'Jasmine JS', 'Trello', 'Copy from Find Results', 'I18n Rails', 'Jest'];
    var promises = [];
    var total    = 0;
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
            addDownloads($downloadCounters, packageInfo.installs.total);
            total += packageInfo.installs.total;
        });

        promises.push(promise);
    });

    $.when.apply($, promises).done(function() {
        addDownloads($("[data-package-name='Total']"), total);
    });
})();
