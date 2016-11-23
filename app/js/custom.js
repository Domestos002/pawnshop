;(function () {
    $(".page-content__b-reviews__slider-list").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        dots: true,
        margin: 75,
        responsive: {

            0: {
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
            zoom: 12,
        });

    }


    $(function numbered() {
        var i = 1;
        $(".advantages-slider-list").find(".owl-dot").each(function () {
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

            0: {
                nav: true,
                items: 1
            }
        }
    });

    $(document).ready(function() {

        var slider = $(".slider-range");
        slider.slider();
        slider.slider({min  : 0, max  : 10, value: 0, tooltip_position:'bottom'});
        slider.on("slide", function(slideEvt) {
            $("#ex6SliderVal").text(slideEvt.value);

        });


        slider.slider({
            tooltip: 'always'
        });

        initMap();

    });
})();

