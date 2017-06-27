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
        var url = 'https%3A%2F%2Fpackagecontrol.io%2Fpackages%2F' + encodeURIComponent(encodeURIComponent(packageName)) + '.json';
        var query = 'SELECT * FROM json WHERE url="' + url + '"';

        var promise = $.ajax({
            url: 'https://query.yahooapis.com/v1/public/yql?q=' + query,
            data: {
                format: 'json',
                jsonCompat: 'new',
            },
            dataType: 'jsonp',
        }).done(function(data) {
            var results = data.query && data.query.results;

            if (results) {
                var installs = results.json.installs
                var $downloadCounters = $("[data-package-name='" + packageName + "']");
                addDownloads($downloadCounters, installs.total);
                total += installs.total;
            }
        });

        promises.push(promise);
    });

    $.when.apply($, promises).done(function() {
        addDownloads($("[data-package-name='Total']"), total);
    });
})();
