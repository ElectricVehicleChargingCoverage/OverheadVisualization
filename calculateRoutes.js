const key = "*";
const baseUrlCombustion = "https://api.tomtom.com/routing/1/calculateRoute";
const traffic = false;

// httpGetAsync(url, displayAPIResult);

function calculateRoutes(start_lat, start_long, dest_lat, dest_long) {
    const coordinates = `${start_lat},${start_long}:${dest_lat},${dest_long}`;
    calculateCombustionRoute(coordinates);
    calculateEVRoutes(coordinates);
}

function calculateCombustionRoute(coordinates) {
    const url = `${baseUrlCombustion}/${coordinates}/json?\
maxAlternatives=0&language=de-DE\
&computeBestOrder=false\
&routeRepresentation=polyline\
&computeTravelTimeFor=all\
&sectionType=travelMode\
&departAt=now\
&routeType=fastest\
&traffic=${traffic}\
&avoid=unpavedRoads\
&travelMode=car\
&vehicleCommercial=false\
&vehicleEngineType=combustion\
&key=${key}`;
    httpGetAsync(url, displayAPIResult, "Combustion");
}

function calculateEVRoutes(coordinates) {}

function displayAPIResult(response, vehicleInfo) {
    const json = JSON.parse(response);
    const route = json.routes[0];
    const legs = route.legs;
    const summary = route.summary;
    const latlngs = [];
    legs.forEach((leg) => {
        const points = leg.points;
        points.forEach((point) => {
            latlngs.push([point.latitude, point.longitude]);
        });
    });
    displayRoute(latlngs, summary, vehicleInfo);
}
