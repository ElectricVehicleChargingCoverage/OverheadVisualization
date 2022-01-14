var map = L.map("map").setView([51.163361, 10.447683], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const style = {
    color: "#ff0000",
};
L.geoJSON(cityData, {
    style: style,
    pointToLayer: function (feature, latlng) {
        console.log(feature);
        return L.circleMarker(latlng, {
            radius: 80 * (feature.properties.Zeitfaktor -1),
        });
    },
}).addTo(map);
