var map = L.map("map").setView([51.163361, 10.447683], 7);
var routeLayer = L.layerGroup().addTo(map);
var audiLayer = L.layerGroup().addTo(map);
var peugeotLayer = L.layerGroup().addTo(map);
var fiatLayer = L.layerGroup().addTo(map);
var combustionLayer = L.layerGroup().addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <br />
    <a href="https://github.com/ElectricVehicleChargingCoverage/OverheadVisualization"> GitHub </a><br />
    Cities: ${cityData.length}, Routes: ${routeData.length}`,
}).addTo(map);

var overlayMaps = {
    "Audi E-Tron": audiLayer,
    "Peugeot e208": peugeotLayer,
    "Fiat 500e": fiatLayer,
    Verbrenner: combustionLayer,
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

calculateRouteScores();
calculateCityScores();
calculateGlobalScores();

const cityMinMax = analyzeAttribute(cityData, attributeToCompare);
cityData.forEach((city) => {
    const score = city[attributeToCompare]["average"];
    const radius = cityCircleSize(city);
    const color = getColor(cityMinMax, score);
    const circle = L.circle([city.lat, city.long], {
        radius,
        color,
        fillOpacity: 0.4,
        stroke: false,
    });
    circle.bindPopup(
        `<h2>${city.name} (Score: ${score.toFixed(3)}) </h2>
        ${createCityInfoTable(city)} `,
        { maxWidth: "600", className: "city-popup" }
    );
    circle.bindTooltip(
        `${city.name} (Score: ${score.toFixed(3)}) `,
    );
    circle.on("click", (e) => showRoutesFrom(city.name));
    circle.addTo(map);
});

function showRoutesFrom(startCity) {
    const routes = getRoutesOfCity(startCity);
    getOverheadScores(routes);
    routeLayer.clearLayers(); // Remove previously shown routes
    minmax = analyzeAttribute(routes, attributeToCompare);
    routes.forEach((route) => {
        const score = route[attributeToCompare]["average"];
        const latlngs = [
            [route["start_lat"], route["start_long"]],
            [route["dest_lat"], route["dest_long"]],
        ];
        const color = getColor(minmax, score);
        var polyline = L.polyline(latlngs, { color, opacity: 0.7 });
        polyline.bindTooltip(
            `${score.toFixed(3)}`
        );
        polyline.bindPopup(
            `<h2> ${route.Start} -> ${route.Ziel} (Score: ${score.toFixed(3)})</h2> ${createRouteInfoTable(route)}
            <a href="javascript:void(0)" onclick="calculateRoutes(${latlngs})"> Calculate routes </a>`,
            { maxWidth: "600", className: "route-popup" }
        );
        polyline.addTo(routeLayer);
        polyline.on("click", (e) => {
            showChargingStationsFrom(route);
        });
    });
}

function showChargingStationsFrom(route) {
    clearVehicleLayers();
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

function clearVehicleLayers() {
    audiLayer.clearLayers();
    peugeotLayer.clearLayers();
    fiatLayer.clearLayers();
    combustionLayer.clearLayers();
}

audiLayer.on("add", (e) => {
    audiLayer.eachLayer((marker) =>
        L.DomUtil.addClass(marker._icon, "Audi-marker")
    );
});

peugeotLayer.on("add", (e) => {
    peugeotLayer.eachLayer((marker) =>
        L.DomUtil.addClass(marker._icon, "Peugeot-marker")
    );
});

fiatLayer.on("add", (e) => {
    fiatLayer.eachLayer((marker) =>
        L.DomUtil.addClass(marker._icon, "Fiat-marker")
    );
});

function displayRoute(latlngs, summary, vehicleInfo) {
    const polyline = L.polyline(latlngs);
    polyline.bindPopup(getPopupFromSummary(summary, vehicleInfo), {
        maxWidth: "600",
        className: "route-popup",
    });
    polyline.bindTooltip(vehicleInfo.name);
    const options = { opacity: 0.75 };
    switch (shortVehicleName(vehicleInfo.name)) {
        case "Combustion":
            options.color = "#0000ff";
            options.weight = 5;
            options.opacity = 0.3;
            polyline.addTo(combustionLayer);
            break;
        case "Audi":
            options.color = "#4c9dcb";
            polyline.addTo(audiLayer);
            break;
        case "Peugeot":
            options.color = "#ea53ee";
            polyline.addTo(peugeotLayer);
            break;
        case "Fiat":
            options.color = "#569937";
            polyline.addTo(fiatLayer);
            break;
    }
    polyline.setStyle(options);
}
