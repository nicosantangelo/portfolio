(function() {
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
