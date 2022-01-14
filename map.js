var map = L.map("map").setView([51.163361, 10.447683], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

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
    circle.addTo(map);
});

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Here is " + e.latlng.toString())
        .openOn(map);
}

map.on("click", onMapClick);



function toHHMMSS(secs){
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}