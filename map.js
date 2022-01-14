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
    circle.on("popupclose", (e) => {
        routeLayer.clearLayers();
    });
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
        var polyline = L.polyline(latlngs, { color: "#83CFB2" });
        polyline.bindPopup(
            `<h2> ${route.Start} -> ${route.Ziel}</h2>
        <table>
        <tr>
            <th> </th>
            <th>Verbrenner</th>
            <th>Audi E-Tron</th>
            <th>Peugeot</th>
            <th>Fiat</th>
        </tr>
        <tr>
            <td>Strecke</td>
            <td>${(route.Verbrennerstrecke / 1000).toFixed(0)}</td>
            <td>${(route.Audistrecke / 1000).toFixed(0)}</td>
            <td>${(route.Peugeotstrecke / 1000).toFixed(0)}</td>
            <td>${(route.Fiatstrecke / 1000).toFixed(0)}</td>
        </tr>
        <tr>
            <td>Dauer</td>
            <td>${toHHMMSS(route.Verbrennerdauer)}</td>
            <td>${toHHMMSS(route.Audidauer)}</td>
            <td>${toHHMMSS(route.Peugeotdauer)}</td>
            <td>${toHHMMSS(route.Fiatdauer)}</td>
        </tr>
        <tr>
            <td>Verbrauch</td>
            <td>-</td>
            <td>${route.Audiverbrauch.toFixed(2)}</td>
            <td>${route.Peugeotverbrauch.toFixed(2)}</td>
            <td>${route.Fiatverbrauch.toFixed(2)}</td>
        </tr>
        <tr>
            <td>Ladezeit</td>
            <td>-</td>
            <td>${toHHMMSS(route.Audiladezeit)}</td>
            <td>${toHHMMSS(route.Peugeotladezeit)}</td>
            <td>${toHHMMSS(route.Fiatladezeit)}</td>
        </tr>
        <tr>
            <td>Ladestops</td>
            <td>-</td>
            <td>${route.Audiladestops}</td>
            <td>${route.Peugeotladestops}</td>
            <td>${route.Fiatladestops}</td>
        </tr>
        <tr>
            <td>Restreichweite</td>
            <td>-</td>
            <td>${route.Audirestreichweite.toFixed(1)}</td>
            <td>${route.Peugeotrestreichweite.toFixed(1)}</td>
            <td>${route.Fiatrestreichweite.toFixed(1)}</td>
        </tr>
        </table>`,
            { maxWidth: "600", className: "route-popup" }
        );
        polyline.addTo(routeLayer);
    });
}
