/*-----------------------------------------------------------------------------------
  Landing.js - Google Maps Multi-Marker & Animaciones
-----------------------------------------------------------------------------------*/

// Función para inicializar Google Maps
function initMap() {
    // Coordenadas de las 3 oficinas
    const oficinas = [
        {
            nombre: "Estudio Posca - Merlo",
            coords: { lat: -32.3501868, lng: -65.0132229 },
            direccion: "Güemes N° 486, Villa de Merlo, San Luis",
            url: "merlo-san-luis/"
        },
        {
            nombre: "Estudio Posca - Villa Dolores",
            coords: { lat: -31.943989, lng: -65.191724 },
            direccion: "25 de Mayo N°60, Villa Dolores, Córdoba",
            url: "villa-dolores/"
        },
        {
            nombre: "Estudio Posca - Concarán",
            coords: { lat: -32.5508, lng: -65.2440 }, // COORDENADAS TEMPORALES
            direccion: "Av. Principal 123, Concarán, San Luis",
            url: "concaran/"
        }
    ];

    // Centro del mapa (punto medio aproximado)
    const center = { lat: -32.2, lng: -65.15 };

    // Crear mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: center,
        mapTypeId: 'roadmap',
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#e9e9e9"}, {"lightness": 17}]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{"color": "#f5f5f5"}, {"lightness": 20}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
            }
        ]
    });

    // Crear marcadores
    oficinas.forEach(oficina => {
        const marker = new google.maps.Marker({
            position: oficina.coords,
            map: map,
            title: oficina.nombre,
            animation: google.maps.Animation.DROP
        });

        // InfoWindow
        const infowindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px; max-width: 250px;">
                    <h6 style="margin:0 0 5px 0; color: #dc081c; font-weight: 600;">${oficina.nombre}</h6>
                    <p style="margin:0 0 10px 0; color: #666; font-size: 14px;">${oficina.direccion}</p>
                    <a href="${oficina.url}" style="display: inline-block; padding: 8px 20px; background: #dc081c; color: #fff; text-decoration: none; border-radius: 20px; font-size: 13px;">Ver Oficina</a>
                </div>
            `
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
        });
    });
}

// jQuery ready
$(function() {
    "use strict";

    // Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Background image from data attribute
    var pageSection = $(".bg-img, section");
    pageSection.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    // Preloader
    $(window).on('load', function() {
        $(".loading").fadeOut(500);
    });

    // Smooth scroll para el indicador
    $('.scroll-indicator').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.oficinas').offset().top
        }, 800);
    });
});
