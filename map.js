var map = L.map("map").setView([51.163361, 10.447683], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

cityData.forEach((city) => {
    const radius = 100 * (city.Zeitfaktor - 1);
    const circle = L.circleMarker([city.lat, city.long], {
        radius,
        color: "#ff0000",
    });
    circle.bindPopup(
        `${city.name}: <br /> Zeitfaktor: ${city.Zeitfaktor} <br /> Zeitunterschied: ${city.Zeitunterschied} <br /> Distanzfaktor: ${city.Distanzfaktor} <br /> Umweg: ${city.Umweg}`
    );
    circle.addTo(map);
});

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Here is " + e.latlng.toString())
        .openOn(map);
}

map.on("click", onMapClick);
