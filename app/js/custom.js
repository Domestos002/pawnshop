;(function () {
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

        $('input.data-inputmask, .inputmask-phone').mask("+7 (999) 999-99-99");


        var slider = $(".slider-range");
        slider.slider();
        var val = slider.slider('getValue');
        console.log(val);
        $("#sum-value").val(val);
        slider.slider({min: 0, max: 10, value: 0, tooltip_position: 'bottom'});
        slider.on("slide", function (slideEvt) {
            $("#ex6SliderVal").text(slideEvt.value);

        });

        $(".accordion-toggle").on('click',function(e){
            if ($(this).closest(".accordion-heading").siblings(".accordion-body").hasClass('in')){
                e.stopPropagation();
                e.preventDefault();
                console.log("fewg");
            }
        });

        $(document).on("click", '.sliding-panel-link', function (e) {
            $('.sliding-panel').removeClass('active');
            $('body').removeClass('ovh');
            e.preventDefault();
        });

        $(document).on("click", '.navbar-toggle', function (e) {
            $('.sliding-panel').addClass('active');
            $('body').addClass('ovh');
            e.preventDefault();
        });

        $(document).on("click", '.sliding-panel__close', function (e) {
            $('.sliding-panel').toggleClass('active');
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

