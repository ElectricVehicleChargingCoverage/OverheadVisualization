const baseUrlCombustion = "https://api.tomtom.com/routing/1/calculateRoute";
const baseUrlEV =
    "https://api.tomtom.com/routing/1/calculateLongDistanceEVRoute";
const traffic = false;

function calculateRoutes(start_lat, start_long, dest_lat, dest_long) {
    const coordinates = `${start_lat},${start_long}:${dest_lat},${dest_long}`;
    const key = localStorage.getItem("API-Key");
    if (key.match("[a-zA-Z0-9]{30,35}")) {
        if (vehicleData.length == 0) {
            window.alert("Please enter vehicleData suitable for routing to use this feature.");
            return;
        }
        calculateCombustionRoute(coordinates, key);
        calculateEVRoutes(coordinates, key);
    } else if (key == ""){
        window.alert("Make sure to enter a valid API-Key to use this feature.");
    } else {
        window.alert(
            `Invalid API-Key: "${key}". If you are sure, that your key is correct, notify us to adapt the regex for evaluating.`
        );
    }
}

function calculateCombustionRoute(coordinates, key) {
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
    httpGetAsync(url, displayAPIResult, { name: "Combustion" });
}

function calculateEVRoutes(coordinates, key) {
    vehicleData.forEach((vehicle) => {
        const body = JSON.stringify(vehicle.body);
        const url = `${baseUrlEV}/${coordinates}/json?\
vehicleEngineType=electric&avoid=unpavedRoads\
&traffic=${traffic}\
&constantSpeedConsumptionInkWhPerHundredkm=${vehicle.constantSpeedConsumption}\
&currentChargeInkWh=${vehicle.currentChargeInkWh.toFixed(2)}\
&maxChargeInkWh=${vehicle.maxCharge}\
&minChargeAtDestinationInkWh=${vehicle.minChargeAtDestinationInkWh.toFixed(2)}\
&minChargeAtChargingStopsInkWh=${vehicle.minChargeAtChargingStopsInkWh.toFixed(
            2
        )}\
&vehicleWeight=${vehicle.weight}\
&uphillEfficiency=${vehicle.uphillEfficiency}\
&downhillEfficiency=${vehicle.downhillEfficiency}\
&auxiliaryPowerInkW=${vehicle.auxiliaryPower}\
&key=${key}`;
        httpPostAsync(url, body, displayAPIResult, vehicle);
    });
}

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
