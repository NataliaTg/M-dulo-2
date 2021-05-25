
// // Objetivo 1 [Datos del hotel]
// var hotel = {
//     name: "Mencey",
//     location: "Tenerife",
//     img:
//       "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
// };

// document.getElementById('name-hotel').innerHTML = "Hotel " + hotel.name;
// document.getElementById('location-hotel').innerHTML = "Ubicado en " + hotel.location;
// document.getElementById('img-hotel').src = hotel.img;




// // Objetivo 2 [Puntuación del hotel]
// var rating = prompt("Puntuación: del 1 al 5");

// document.getElementById("rating").innerHTML = rating + " estrellas";

//Objetivo 3 [Usuario anónimo]
// var anonymous = confirm('¿Quieres publicar tu reseña de forma de anónima?');

// document.getElementById('anonymous').checked = anonymous;




//Objetivo 4 [Varios hoteles]
var hoteles = {
    Mencey: {
      name: "Mencey",
      location: "Tenerife",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2f/e9/d7/iberostar-grand-mencey.jpg",
    },
    Lani: {
      name: "Lani's Suites Deluxe",
      location: "Lanzarote",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/49/47/e3/lani-s-suites-deluxe.jpg",
    },
};


var selectedHotel = prompt("Indique el hotel sobre el que quiere hacer la reseña: Mencey o Lani",);
// var rating = prompt("Puntuación: del 1 al 5");
// document.getElementById("rating").innerHTML = rating + " estrellas";

var anonymous = confirm('¿Quieres publicar tu reseña de forma de anónima?');

document.getElementById('anonymous').checked = anonymous;

document.getElementById('name-hotel').innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById('location-hotel').innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById('img-hotel').src = hoteles[selectedHotel].img;


var stars = {
  1:
    "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  2:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
  3:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
  4:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
  5:
    "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
document.getElementById('rating').innerHTML = stars[rating];



//** Nota: dejo código comentado con los pasos previos a la parte final del ejercicio :) **//