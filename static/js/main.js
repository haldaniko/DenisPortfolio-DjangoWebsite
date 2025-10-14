AOS.init({
    duration: 800,
    easing: 'slide'
});

(function ($) {
    "use strict";

    const isMobile = {
        Android: () => /Android/i.test(navigator.userAgent),
        BlackBerry: () => /BlackBerry/i.test(navigator.userAgent),
        iOS: () => /iPhone|iPad|iPod/i.test(navigator.userAgent),
        Opera: () => /Opera Mini/i.test(navigator.userAgent),
        Windows: () => /IEMobile/i.test(navigator.userAgent),
        any: function () {
            return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows();
        }
    };

    const fullHeight = () => {
        const setHeight = () => $('.js-fullheight').css('height', $(window).height());
        setHeight();
        $(window).on('resize', setHeight);
    };
    fullHeight();

    const loader = () => {
        setTimeout(() => $('#ftco-loader').removeClass('show'), 1);
    };
    loader();

    const carousel = () => {
        $('.carousel-testimony').owlCarousel({
            center: true,
            loop: true,
            items: 1,
            margin: 30,
            stagePadding: 0,
            nav: false,
            responsive: {
                0: {items: 1, touchDrag: true, mouseDrag: false},
                600: {items: 2},
                1000: {items: 3}
            }
        });

        $('.carousel-case').owlCarousel({
            center: true,
            loop: true,
            items: 1,
            margin: 30,
            stagePadding: 0,
            nav: true,
            responsive: {
                0: {items: 1, mouseDrag: false, touchDrag: true},
                600: {items: 2},
                1000: {items: 3}
            }
        });
    };
    carousel();

    $('nav .dropdown').hover(
        function () {
            const $this = $(this);
            $this.addClass('show');
            $this.find('> a').attr('aria-expanded', true);
            $this.find('.dropdown-menu').addClass('show');
        },
        function () {
            const $this = $(this);
            $this.removeClass('show');
            $this.find('> a').attr('aria-expanded', false);
            $this.find('.dropdown-menu').removeClass('show');
        }
    );

    const scrollWindow = () => {
        $(window).scroll(function () {
            const st = $(this).scrollTop(),
                navbar = $('.ftco_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) navbar.addClass('scrolled');
            if (st < 150) navbar.removeClass('scrolled sleep');

            if (st > 350) {
                navbar.addClass('awake');
                if (sd.length) sd.addClass('sleep');
            }
            if (st < 350) {
                navbar.removeClass('awake').addClass('sleep');
                if (sd.length) sd.removeClass('sleep');
            }
        });
    };
    if (window.innerWidth > 768) scrollWindow();

    const counter = () => {
        $('#section-counter, .hero-wrap, .ftco-counter').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                const commaStep = $.animateNumber.numberStepFactories.separator(',');
                $('.number').each(function () {
                    const $this = $(this),
                        num = $this.data('number');
                    $this.animateNumber({number: num, numberStep: commaStep}, 7000);
                });
            }
        }, {offset: '95%'});
    };
    counter();

    const contentWayPoint = () => {
        let i = 0;
        $('.ftco-animate').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(() => {
                    $('body .ftco-animate.item-animate').each(function (k) {
                        const el = $(this);
                        setTimeout(() => {
                            const effect = el.data('animate-effect');
                            if (effect === 'fadeIn') el.addClass('fadeIn ftco-animated');
                            else if (effect === 'fadeInLeft') el.addClass('fadeInLeft ftco-animated');
                            else if (effect === 'fadeInRight') el.addClass('fadeInRight ftco-animated');
                            else el.addClass('fadeInUp ftco-animated');
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {offset: '95%'});
    };
    contentWayPoint();

    const OnePageNav = () => {
        $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
            e.preventDefault();
            const hash = this.hash,
                navToggler = $('.navbar-toggler');
            $('html, body').animate({scrollTop: $(hash).offset().top}, 700, 'easeInOutExpo', () => {
                window.location.hash = hash;
            });
            if (navToggler.is(':visible')) navToggler.click();
        });
    };
    OnePageNav();

    $('.image-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        gallery: {enabled: true, navigateByImgClick: true, preload: [0, 1]},
        image: {verticalFit: true},
        zoom: {enabled: true, duration: 300}
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    class TxtRotate {
        constructor(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.isDeleting = false;
            this.tick();
        }

        tick() {
            const i = this.loopNum % this.toRotate.length;
            const fullTxt = this.toRotate[i];
            this.txt = this.isDeleting
                ? fullTxt.substring(0, this.txt.length - 1)
                : fullTxt.substring(0, this.txt.length + 1);
            this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
            let delta = 300 - Math.random() * 100;
            if (this.isDeleting) delta /= 2;
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }
            setTimeout(() => this.tick(), delta);
        }
    }

    window.onload = () => {
        const elements = document.getElementsByClassName('txt-rotate');
        for (let i = 0; i < elements.length; i++) {
            const toRotate = elements[i].getAttribute('data-rotate');
            const period = elements[i].getAttribute('data-period');
            if (toRotate) new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    };

})(jQuery);
