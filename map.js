var map = L.map("map").setView([51.163361, 10.447683], 7);
var routeLayer = L.layerGroup().addTo(map);

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
    const radius = 50000 * (city.Zeitfaktor - 1);
    const circle = L.circle([city.lat, city.long], {
        radius,
        color: "#ff0000",
        stroke: false,
    });
    circle.bindPopup(
        `<h2>${city.name}</h2>
        Zeitfaktor: ${city.Zeitfaktor.toFixed(2)} <br />
        Zeitunterschied: ${toHHMMSS(city.Zeitunterschied)} <br />
        Distanzfaktor: ${city.Distanzfaktor.toFixed(4)} <br />
        Umweg: ${(city.Umweg / 1000).toFixed(2)} km`
    );
    circle.on("click", (e) => showRoutesFrom(city.name));
    circle.addTo(map);
});

function showRoutesFrom(startCity) {
    const routes = routeData.filter((route) => route.Start == startCity);
    routeLayer.clearLayers(); // Remove previously shown routes
    routes.forEach((route) => {
        const latlngs = [
            [route["start_lat"], route["start_long"]],
            [route["dest_lat"], route["dest_long"]],
        ];
        var polyline = L.polyline(latlngs, { color: "#83CFB2" }).addTo(
            routeLayer
        );
    });
}
