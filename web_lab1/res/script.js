ymaps.ready(init);
var myMap, myPlacemark;

function init() {
  myMap = new ymaps.Map("map", {
    center: [53.288127, 34.346721],
    zoom: 12,
  });

  bgtuPlacemark = new ymaps.Placemark([53.304653, 34.304003], {
    hintContent: "БГТУ!",
    balloonContent: "БГТУ",
  });

  bguPlacemark = new ymaps.Placemark([53.272624, 34.351792], {
    hintContent: "БГУ им Петровского!",
    balloonContent: "БГУ",
  });

  bguYurFackPlacemark = new ymaps.Placemark([53.270693, 34.342356], {
    hintContent: "БГУ юр фак",
    balloonContent: "БГУ юр фак",
  });

  bgituPlacemark = new ymaps.Placemark([53.249302, 34.342517], {
    hintContent: "БГИТУ!",
    balloonContent: "БГИТУ",
  });

  bgitu2Placemark = new ymaps.Placemark([53.244235, 34.365635], {
    hintContent: "БГИТУ-2й корпус",
    balloonContent: "БГИТУ-2й корпус",
  });

  accNarodHozPlacemark = new ymaps.Placemark([53.264761, 34.359527], {
    hintContent: "Академия народного хозяйства",
    balloonContent: "Академия народного хозяйства",
  });

  myMap.geoObjects.add(bgtuPlacemark);
  myMap.geoObjects.add(bguPlacemark);
  myMap.geoObjects.add(bguYurFackPlacemark);
  myMap.geoObjects.add(bgituPlacemark);
  myMap.geoObjects.add(bgitu2Placemark);
  myMap.geoObjects.add(accNarodHozPlacemark);

  var myGeoObject = new ymaps.GeoObject({
    // Описываем геометрию геообъекта.
    geometry: {
        // Тип геометрии - "Многоугольник".
        type: "Polygon",
        // Указываем координаты вершин многоугольника.
        coordinates: [
            // Координаты вершин внешнего контура.
            [
                [53.272624, 34.351792],
                [53.304653, 34.304003],
                [53.270693, 34.342356],
                [53.249302, 34.342517],
                [53.244235, 34.365635],
                [53.264761, 34.359527]
            ]
        ],
        // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
        fillRule: "nonZero"
    },
    // Описываем свойства геообъекта.
    properties:{
        // Содержимое балуна.
        balloonContent: "Многоугольник"
    }
}, {
    // Описываем опции геообъекта.
    // Цвет заливки.
    fillColor: '#00FF00',
    // Цвет обводки.
    strokeColor: '#0000FF',
    // Общая прозрачность (как для заливки, так и для обводки).
    opacity: 0.5,
    // Ширина обводки.
    strokeWidth: 5,
    // Стиль обводки.
    strokeStyle: 'shortdash'
});

// Добавляем многоугольник на карту.
myMap.geoObjects.add(myGeoObject);
}
