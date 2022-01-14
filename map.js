var map = L.map("map").setView([51.163361, 10.447683], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

map.setMaxBounds([
    [60, 0],
    [45, 20],
]);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Here is " + e.latlng.toString())
        .openOn(map);
}

map.on("click", onMapClick);

// Visualize cityData:

cityData.forEach((city) => {
    const radius = 100 * (city.Zeitfaktor - 1);
    const circle = L.circleMarker([city.lat, city.long], {
        radius,
        color: "#ff0000",
    });
    circle.bindPopup(
        `<h2>${city.name}</h2>
        Zeitfaktor: ${city.Zeitfaktor.toFixed(2)} <br />
        Zeitunterschied: ${toHHMMSS(city.Zeitunterschied)} <br />
        Distanzfaktor: ${city.Distanzfaktor.toFixed(4)} <br />
        Umweg: ${(city.Umweg / 1000).toFixed(2)} km`
    );
    circle.on("click", (e) => console.log(city.name));
    circle.addTo(map);
});
