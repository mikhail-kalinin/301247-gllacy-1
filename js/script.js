/*Модальное окно*/
var link = document.querySelector("#feedback");

var modal = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = modal.querySelector(".btn-close");

var username = modal.querySelector("[name=feedback-name]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  modal.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
});



window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains("modal-content-show")) {
      modal.classList.remove("modal-content-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

/*Интерактивная карта*/
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: {lat: 59.93846771, lng: 30.32543292}
  });

  var image = "img/map-pin.png";
  var iceMarker = new google.maps.Marker({
    position: {lat: 59.93856848, lng: 30.32303502},
    map: map,
    icon: image
  });
}
