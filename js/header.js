(function() {
    var docElem = document.documentElement;

    var scroller = {
        didScroll: false,
        changeHeaderOn: 200,
        header: null,
        start: function() {
            this.header = document.getElementById('main-nav');
            this.scroll();
            setTimeout(function() {
                scroller.enableTransitions();
            }, 550);
        },
        scrollPage: function() {
            if (this.scrollY() >= this.changeHeaderOn) {
                this.header.className = this.header.className.replace(/\bnavbar\-expanded\b/, '');
            }
            else {
                if (!this.header.className.match(/\bnavbar\-expanded\b/)) {
                    this.header.className += ' navbar-expanded';
                }
            }
            this.didScroll = false;
        },
        scrollY: function() {
            return window.pageYOffset || docElem.scrollTop;
        },
        scroll: function() {
            if(!this.didScroll) {
                this.didScroll = true;
                setTimeout(function() {
                    scroller.scrollPage();
                }, 250);
            }
        },
        enableTransitions: function() {
            this.header.className = this.header.className.replace(/\bnotransition\b/, '');
        }
    };

    window.addEventListener('scroll', function(event) {
        scroller.scroll();
    }, false);

    window.scroller = scroller;
})();
