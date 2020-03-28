
"use strict";

// $(document).ready(function() {
//     $('.left-part').fadeIn(1000)
// });




// contact map custom
function initMap() {
    if (google && google.maps && google.maps.Map) {
        new google.maps.Map(document.getElementById("map"), {
            center: new google.maps.LatLng(47.500772, 19.0715065),
            zoom: 17,
            mapTypeControl: !1,
            scrollwheel: !1,
            fullscreenControl: !1,
            zoomControl: !1,
            streetViewControl: !1,
            styles: [{
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{saturation: 36}, {color: "#000000"}, {lightness: 40}]
            }, {
                featureType: "all",
                elementType: "labels.text.stroke",
                stylers: [{visibility: "on"}, {color: "#000000"}, {lightness: 16}]
            }, {
                featureType: "all",
                elementType: "labels.icon",
                stylers: [{visibility: "off"}]
            }, {
                featureType: "administrative",
                elementType: "geometry.fill",
                stylers: [{color: "#000000"}, {lightness: 20}]
            }, {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{color: "#000000"}, {lightness: 17}, {weight: 1.2}]
            }, {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{color: "#000000"}, {lightness: 20}]
            }, {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{color: "#000000"}, {lightness: 21}]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{color: "#000000"}, {lightness: 17}]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{color: "#000000"}, {lightness: 29}, {weight: .2}]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{color: "#000000"}, {lightness: 18}]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{color: "#000000"}, {lightness: 16}]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{color: "#000000"}, {lightness: 19}]
            }, {featureType: "water", elementType: "geometry", stylers: [{color: "#000000"}, {lightness: 17}]}]
        })
    }
}

let speed = 100;
let h2 = document.querySelector('h2');
let p = document.querySelector('p');
// let cursor = document.getElementById('animItemCursor')
let delay = h2.innerHTML.length * speed + speed;

typeEffect(h2, speed);
// cursor.style.display ="block";


// type effect
setTimeout(function(){
    p.style.display = "block";
    h2.style.display = "block";
    typeEffect(p, speed);
}, delay);

function typeEffect(element, speed) {
    let h2 = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    let timer = setInterval(function() {
        if (i < h2.length) {
            element.append(h2.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }

        // h2.prepend('');
    }, speed);
}


// const App = {
//
//     eventHandler: function() {
//         $(document).on('click', '.menu-toggle', function () {
//             App.toggleMenu('.menu');
//         });
//     },
//
//     toggleMenu: function (menu) {
//         menu.addClass('active');
//     },
//
// };

let menuIcon = document.getElementsByClassName('menu-toggle')[0];
let menu = document.getElementsByClassName('menu')[0];
let closeIcon = document.getElementsByClassName('menu-close')[0];

clickMenuToggle(menuIcon, menu);
clickMenuClose(closeIcon, menu);

function clickMenuToggle(button, list){
    button.addEventListener("click", function(){
        list.classList.add('active');
    });
}

function clickMenuClose(button, list){
    button.addEventListener("click", function(){
        list.classList.remove('active');
    });
}

$(function() {
    initMap();
    // App.eventHandler();

});








