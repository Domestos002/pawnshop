;(function () {
    var stickyHeader = function () {
        var header = $("#page-header");
        var header_placeholder = $(".page-header__placeholder");

        var hh = header.outerHeight();
        header_placeholder.css({height:hh});

        console.log(hh)
    };


    $(".page-content__b-reviews__slider-list").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: true,
        margin: 20,
        responsive: {
            0: {
                nav: false,
                items: 1
            },

            600: {
                nav: true,
                items: 2
            },

            780: {
                nav: true,
                items: 3
            },

            991: {
                nav: true,
                items: 4
            }
        }
    });

    function initMap() {
        //var secheltLoc = new google.maps.LatLng(43.22945504, 76.93169162);
        var secheltLoc = new google.maps.LatLng(43.22705315, 76.92906439);


        map = new google.maps.Map(document.getElementById('page-footer__map'), {
            center: secheltLoc,
            scrollwheel: false,
            zoom: 18
        });

    }


    $(function numbered() {
        var i = 1;
        $(".advantages-slider-list").find(".owl-dot").find("span").each(function () {
            $(this).append(i);
            i++;
        });
    });

    $(".advantages-slider-list").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        responsive: {
            100: {
                nav: false,
                items: 1
            },

            320: {
                nav: false,
                items: 1
            },

            480: {
                nav: true,
                items: 1
            }
        }
    });


    $(document).ready(function () {

        $(document).on('input', '[data-input-value]', function () {
            var $this = $(this);
            var value = $this.val();

            var slider = $this.closest('.slider-block').find('.slider-range');

            slider.slider('setValue', value);
        });

        stickyHeader();
        var timeout;
        $(window).resize(function () {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                stickyHeader();
            }, 300);
        });

        var doc = $(document);
        doc.on('click', '.navbar-toggle', function (e) {
            var doc_width = doc.outerWidth();

            if ($(this).hasClass("active")) {
                doc.find(".site-wrapper").css("width", "auto");
            } else {
                doc.find(".site-wrapper").toggleClass("ovh").css("width", doc_width);
            }
            doc.find(".site-wrapper-content").toggleClass("active");
            $(this).toggleClass("active");
            e.preventDefault();
        });

        $('input.data-inputmask, .inputmask-phone').mask("+7 (999) 999-99-99");


        $(".slider-range").each(function () {
            var slider = $(this);
            slider.slider();
            slider.on("slide", function (slideEvt) {
                slider.closest('.slider-block').find('[data-input-value]').val(slideEvt.value);
            });
            // console.log(slider.data('slider'));
            setTimeout(function () {
                slider.closest('.slider-block').find('[data-input-value]').val(slider.data('slider').value[0]);
            }, 500);
        });


        $(document).on("click", '.sliding-panel-link', function (e) {
            $('.sliding-panel').toggleClass('active');
            $('.site-wrapper-content').toggleClass('active');
            $(".site-wrapper").css("width", "auto");
            $(".site-wrapper").toggleClass("ovh");

            $('body').removeClass('ovh');
        });

        $(document).on("click", '.navbar-toggle', function (e) {
            $('.sliding-panel').addClass('active');
            $('.site-wrapper-content').addClass('active');
            $(".site-wrapper").css("width", "auto");
            $(".site-wrapper").toggleClass("ovh");
            $('body').addClass('ovh');
            e.preventDefault();
        });

        $(document).on("click", '.sliding-panel__close', function (e) {
            $('.sliding-panel').toggleClass('active');
            $('.site-wrapper-content').toggleClass('active');
            $(".site-wrapper").css("width", "auto");
            $(".site-wrapper").toggleClass("ovh");

            $('body').removeClass('ovh');
            e.preventDefault();
        });

        initMap();

    });
    $(function () {
        $('a.js-scrollScreen[href*="#"]:not([href="#"])').click(function () {
            if ($(this).hasClass('sliding-panel-link')) {
                $('body').removeClass('ovh');
                $('.sliding-panel').removeClass('active');
                $('.site-wrapper-content').removeClass('active');
                $(".site-wrapper").css("width", "auto");
                $(".site-wrapper").toggleClass("ovh");

            }
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
})();

