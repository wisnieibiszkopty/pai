function showLocation(position) {
    console.log("prog 2");
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let output = document.getElementById("geo");
    output.innerHTML = "<p>Szerokość geograficzna: " + latitude + "</p>";
    output.innerHTML += "<p>Długość geograficzna: " + longitude + "</p>";

    let cords = new google.maps.LatLng(latitude,longitude);
    let map_options = {
        zoom: 10,
        center: cords,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(document.getElementById("map"),
        map_options);
}
function errorHandler(error) {
    console.log("prog3");
    let output = document.getElementById("geo");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            output.innerHTML = "Użytkownik nie udostępnił danych.";
            break;
        case error.POSITION_UNAVAILABLE:
            output.innerHTML = "Dane lokalizacyjne niedostępne.";
            break;
        case error.TIMEOUT:
            output.innerHTML = "Przekroczono czas żądania.";
            break;
        case error.UNKNOWN_ERROR:
            output.innerHTML = "Wystąpił nieznany błąd.";
            break;
    }
}
function getLocation() {
    if (navigator.geolocation) {
        console.log("prog 1");
        let options = {timeout: 60000};
        navigator.geolocation.getCurrentPosition(
            showLocation,
            errorHandler,
            options);
    } else { alert("Twoja przeglądarka nie wspiera geolokalizacji!");}
}