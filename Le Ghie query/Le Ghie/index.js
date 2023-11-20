"use strict"

/*async function initMap() {
    var myLatLng = { lat: 44.435856, lng: 7.868083 };
    var map = new google.maps.Map(document.getElementById('mappa'), {
        zoom: 12,
        center: myLatLng
    });

    new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'La tua posizione'
    });
}*/

$(document).ready(function(){
    const loader = $(".loader");
    const content = $(".content");

    content.hide();

    $(window).on('load', function() {

        loader.fadeOut();
        content.fadeIn();
    });

    let active = "#content_home";
    $("#navbarNav a").click(function(){
        let name = "#content_" + $(this).html().toLowerCase().split(' ')[0]
        if($(this).html().toLowerCase().split(' ')[0] == "home")
        {
            name="#content_restaurant";
        }
        if($(this).html().toLowerCase() != "contatti")
        {
            $(active).fadeOut().addClass("nascosto");
            $(name).fadeIn().removeClass("nascosto");                              
            active = name;
        }
    })
    $(".navbar-brand").click(function(){
        $(active).fadeOut().addClass("nascosto");
        $("#content_home").fadeIn().removeClass("nascosto");     
        active = $("#content_home");
    })
    
    function handleMediaQueryChange(mediaQuery) {
    const scrittaDaModificare = $("#logo");
    if (mediaQuery.matches) {
        scrittaDaModificare.text("Le Ghie");
    } else {
        scrittaDaModificare.text("Country House Le Ghie");
    }
    }

    const mediaQuery = window.matchMedia("(max-width: 450px)");
    handleMediaQueryChange(mediaQuery);

    mediaQuery.addListener(function() {
    handleMediaQueryChange(mediaQuery);
    });
      
});