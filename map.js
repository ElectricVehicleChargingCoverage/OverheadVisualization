var map = L.map("map").setView([51.163361, 10.447683], 7);
var routeLayer = L.layerGroup().addTo(map);
var audiChargingStops = L.layerGroup().addTo(map);
var peugeotChargingStops = L.layerGroup().addTo(map);
var fiatChargingStops = L.layerGroup().addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <br />
    <a href="https://github.com/ElectricVehicleChargingCoverage/OverheadVisualization"> GitHub </a><br />
    Cities: ${cityData.length}, Routes: ${routeData.length}`,
}).addTo(map);

var overlayMaps = {
    "Audi E-Tron": audiChargingStops,
    "Peugeot e208": peugeotChargingStops,
    "Fiat 500e": fiatChargingStops,
};
L.control.layers({}, overlayMaps).addTo(map);

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
    const radius = 5000 * Math.pow(city.Zeitfaktor, 5);
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
            `<h2> ${route.Start} -> ${route.Ziel} (Score: ${route[
                "timeoverhead"
            ].toFixed(3)})</h2> ${createRouteInfoTable(route)}`,
            { maxWidth: "600", className: "route-popup" }
        );
        polyline.addTo(routeLayer);
        polyline.on("click", (e) => {
            showChargingStationsFrom(route);
        });
    });
}

function showChargingStationsFrom(route) {
    audiChargingStops.clearLayers();
    peugeotChargingStops.clearLayers();
    fiatChargingStops.clearLayers();
    markerList = {};
    route.Fahrzeuge.forEach((fahrzeug) => {
        const legs = fahrzeug.legs;
        if (legs.length > 1) {
            legs.forEach((leg) => {
                if (leg.chargingParkExternalId == null) return;
                entry = markerList[leg.chargingParkExternalId];
                entry
                    ? entry.push({ name: fahrzeug.name, leg })
                    : (markerList[leg.chargingParkExternalId] = [
                          { name: fahrzeug.name, leg },
                      ]);
            });
        }
    });
    Object.keys(markerList).forEach((key) => {
        markerList[key].forEach((entry) => {
            var marker = L.marker(entry.leg.latlong, {
                title: entry.leg.chargingParkName,
                opacity: 0.5,
            }).addTo(overlayMaps[entry.name]);
            L.DomUtil.addClass(
                marker._icon,
                `${shortVehicleName(entry.name)}-marker`
            );
            marker.bindPopup(
                `<h2> ${entry.leg.chargingParkName} (${
                    entry.leg.chargingParkExternalId
                }) </h2> ${createChargerInfoTable(markerList[key])}`,
                { maxWidth: "600", className: "charger-popup" }
            );
        });
    });
}

audiChargingStops.on("add", (e) => {
    audiChargingStops.eachLayer((marker) =>
        L.DomUtil.addClass(marker._icon, "Audi-marker")
    );
});

peugeotChargingStops.on("add", (e) => {
    peugeotChargingStops.eachLayer((marker) =>
        L.DomUtil.addClass(marker._icon, "Peugeot-marker")
    );
});

fiatChargingStops.on("add", (e) => {
    fiatChargingStops.eachLayer((marker) =>
        L.DomUtil.addClass(marker._icon, "Fiat-marker")
    );
});
