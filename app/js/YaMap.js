ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("page-footer__map", {
        center: [43.22951682117421,76.93226473976317],
        zoom: 16,
        controls: ['zoomControl']
    });

    myPlacemark = new ymaps.Placemark([43.230332713272844,76.93251150299254], {
        hintContent: 'Тимирязева 17, оф. 10'
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
}