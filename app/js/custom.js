;(function () {
    var stickyHeader = function () {
        var header = document.getElementById("page-header");
        var logo = document.getElementById("logo");
        if ($(window).scrollTop() > $(logo).outerHeight()) {
            $(header).addClass('navbar-fixed-top');
            $("page-header__row").css({"width": "100%"});
            /*
             $(".page-header__navbar-link").2css({"padding": "40px 0 40px 0"});
             */
        }
        else {
            $(header).removeClass('navbar-fixed-top');
            /*
             $(".page-header__navbar-link").css({"padding": "10px 0 10px 0"});
             */
        }
    };

    var slider_sum_init = function () {
        var slider = $(".my-slider-range.sum-range");
        slider.slider({
            min : "200000",
            max : "12000000",
            step : "1000",
            value : "3",
            tooltip : "hide"
         });

    };



    var slider_d_init = function () {
        var slider = $(".range.days-range");
        slider.slider({
            min : "200000",
            max : "20000000",
            step : "10",
            value : "20",
            tooltip : "hide"
    });

    };


    $(".page-content__b-reviews__slider-list").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: true,
        margin: 20,
        responsive: {
            320: {
                nav: false,
                items: 1
            },

            400: {
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
        var secheltLoc = new google.maps.LatLng(55.706098, 37.618803);


        map = new google.maps.Map(document.getElementById('page-footer__map'), {
            center: secheltLoc,
            scrollwheel: false,
            zoom: 12
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
        slider_sum_init();
        /*slider_d_init();*/

        stickyHeader();
        $(document).scroll(function () {
            stickyHeader();
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


        $(".my-slider-range").each(function () {
            var slider = $(this);
            //slider.slider();
            slider.on("slide", function (slideEvt) {
                slider.closest('.slider-block').find('[data-input-value]').val(slideEvt.value);
            });
            console.log(slider.data('slider'));
            setTimeout(function () {
                slider.closest('.slider-block').find('[data-input-value]').val(slider.data('slider').value[0]);
            }, 500);
        });


        $(".data-input").change(function () {
            var slider = $(this).closest(".input-wrapper").siblings(".slider");
            slider.slider('setValue', $(this).val(), true);
            //slider.val($(this).val());
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

