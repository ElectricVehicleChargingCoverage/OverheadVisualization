const key = "*";
const url = `https://api.tomtom.com/routing/1/calculateRoute/52.50931%2C13.42936%3A52.50274%2C13.43872/json?maxAlternatives=0&language=de-DE&computeBestOrder=false&routeRepresentation=polyline&computeTravelTimeFor=all&sectionType=travelMode&departAt=now&routeType=fastest&traffic=false&avoid=unpavedRoads&travelMode=car&vehicleMaxSpeed=0&vehicleWeight=0&vehicleAxleWeight=0&vehicleLength=0&vehicleWidth=0&vehicleHeight=0&vehicleCommercial=false&vehicleEngineType=combustion&key=${key}`;

httpGetAsync(url, displayAPIResult);

function displayAPIResult(response) {
    const json = JSON.parse(response);
    console.log(json);
}
