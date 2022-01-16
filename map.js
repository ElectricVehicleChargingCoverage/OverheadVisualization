var map = L.map("map").setView([51.163361, 10.447683], 7);
var routeLayer = L.layerGroup().addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <br />
    <a href="https://github.com/ElectricVehicleChargingCoverage/OverheadVisualization"> GitHub </a><br />
    Cities: ${cityData.length}, Routes: ${routeData.length}`,
}).addTo(map);

map.setMaxBounds([
    [60, 0],
    [45, 20],
]);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(
            `${e.latlng.lat.toFixed(5).toString()}, ${e.latlng.lng
                .toFixed(5)
                .toString()}`
        )
        .openOn(map);
    routeLayer.clearLayers();
}

map.on("click", onMapClick);

// Visualize cityData:

const cityMinMax = analyzeAttribute(cityData, ["Zeitfaktor"]);
cityData.forEach((city) => {
    const radius = 5000 * Math.pow(city.Zeitfaktor, 5) ;
    const color = getColor(cityMinMax, city["Zeitfaktor"]);
    const circle = L.circle([city.lat, city.long], {
        radius,
        color,
        fillOpacity: 0.4,
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
    getOverheadScores(routes);
    routeLayer.clearLayers(); // Remove previously shown routes
    minmax = analyzeAttribute(routes, "timeoverhead");
    routes.forEach((route) => {
        const latlngs = [
            [route["start_lat"], route["start_long"]],
            [route["dest_lat"], route["dest_long"]],
        ];
        const color = getColor(minmax, route["timeoverhead"]);
        var polyline = L.polyline(latlngs, { color, opacity: 0.7 });
        polyline.bindTooltip(`${route["timeoverhead"].toFixed(3)}`);
        polyline.bindPopup(
            `<h2> ${route.Start} -> ${route.Ziel} (Score: ${route["timeoverhead"].toFixed(3)})</h2>
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
            <td>${route.Audiladezeit ? toHHMMSS(route.Audiladezeit) : "-"}</td>
            <td>${
                route.Peugeotladezeit ? toHHMMSS(route.Peugeotladezeit) : "-"
            }</td>
            <td>${route.Fiatladezeit ? toHHMMSS(route.Fiatladezeit) : "-"}</td>
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
