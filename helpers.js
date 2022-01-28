const MIN_ROUTE_DISTANCE = 0;

function toHHMMSS(secs) {
    var sec_num = parseInt(secs, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
        .map((v) => (v < 10 ? "0" + v : v))
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
}

function analyzeAttribute(data, attribute) {
    reducedData = data.map(function (item) {
        return item[attribute];
    });
    return {
        min: Math.min.apply(null, reducedData),
        max: Math.max.apply(null, reducedData),
    };
}

function getOverheadScores(routes) {
    routes.forEach((route) => {
        const Fahrzeuge = route.Fahrzeuge;
        const timeoverhead =
            (Fahrzeuge[1].dauer + Fahrzeuge[2].dauer + Fahrzeuge[3].dauer) /
            (3 * Fahrzeuge[0].dauer);
        const umweg =
            (Fahrzeuge[1].strecke +
                Fahrzeuge[2].strecke +
                Fahrzeuge[3].strecke) /
            (3 * Fahrzeuge[0].strecke);
        route["timeoverhead"] = timeoverhead;
        route["umweg"] = umweg;
    });
}

function getColor(minmax, value) {
    min = minmax.min;
    max = minmax.max;
    if (value <= min) {
        return "rgb(0, 255, 0)";
    } else if (value >= max) {
        return "rgb(255, 0, 0)";
    } else {
        const v = (value - min) / (max - min);
        const red = Math.round(v * 255);
        const green = 255 - red;
        return `rgb(${red}, ${green}, 0)`;
    }
}

function createRouteInfoTable(route) {
    const attributes = [
        {
            name: "strecke",
            display: "Strecke",
            method: (e) => {
                return e ? `${(e / 1000).toFixed(0)} km` : "-";
            },
        },
        {
            name: "dauer",
            display: "Dauer",
            method: (e) => {
                return e ? toHHMMSS(e) : "-";
            },
        },
        {
            name: "verbrauch",
            display: "Verbrauch",
            method: (e) => {
                return e ? `${e.toFixed(2)} kWh` : "-";
            },
        },
        {
            name: "restreichweite",
            display: "Batteriestand",
            method: (e) => {
                return e ? `${e.toFixed(1)} kWh` : "-";
            },
        },
        {
            name: "ladezeit",
            display: "Ladezeit",
            method: (e) => {
                return e ? toHHMMSS(e) : "-";
            },
        },
        {
            name: "legs",
            display: "Ladestops",
            method: (e) => {
                return e ? (e.length > 0 ? e.length - 1 : "-") : "-";
            },
        },
    ];
    var table = `<table> <tr>
            <th> </th>
            <th>Verbrenner</th>
            <th>Audi E-Tron</th>
            <th>Peugeot e208</th>
            <th>Fiat 500e</th>
        </tr>`;
    attributes.forEach((attribute) => {
        table += `<tr> <td> ${attribute.display} </td>`;
        route.Fahrzeuge.forEach((fahrzeug) => {
            table += `<td> ${
                attribute.method
                    ? attribute.method(fahrzeug[attribute.name])
                    : fahrzeug[attribute.name]
            } </td>`;
        });
        table += "</tr> ";
    });
    table += "</table> ";
    return table;
}

function createChargerInfoTable(chargerInfo) {
    const attributes = [
        {
            name: "lengthInMeters",
            display: "Strecke",
            method: (e) => {
                return `${(e / 1000).toFixed(0)} km`;
            },
        },
        {
            name: "travelTimeInSeconds",
            display: "Dauer",
            method: (e) => {
                return toHHMMSS(e);
            },
        },
        {
            name: "batteryConsumptionInkWh",
            display: "Verbrauch",
            method: (e) => {
                return e ? `${e.toFixed(2)} kWh` : "-";
            },
        },
        {
            name: "remainingChargeAtArrivalInkWh",
            display: "Batteriestand",
            method: (e) => {
                return e ? `${e.toFixed(1)} kWh` : "-";
            },
        },
        {
            name: "chargingTimeInSeconds",
            display: "Ladezeit",
            method: (e) => {
                return e ? toHHMMSS(e) : "-";
            },
        },
        {
            name: "targetChargeInkWh",
            display: "Zielladestand",
            method: (e) => {
                return e ? `${e.toFixed(1)} kWh` : "-";
            },
        },
        {
            name: "chargingPowerInkW",
            display: "Ladepower",
            method: (e) => {
                return e ? `${e} kW` : "-";
            },
        },
    ];
    var table = `<table> <tr>
            <th></th>`;
    chargerInfo.forEach((fahrzeug) => {
        table += `<th> ${fahrzeug.name} </th>`;
    });
    table += `</tr>`;
    attributes.forEach((attribute) => {
        table += `<tr> <td> ${attribute.display} </td>`;
        chargerInfo.forEach((fahrzeug) => {
            table += `<td> ${
                attribute.method
                    ? attribute.method(fahrzeug.leg[attribute.name])
                    : fahrzeug.leg[attribute.name]
            } </td>`;
        });
        table += "</tr> ";
    });
    table += "</table> ";
    return table;
}

function createCityInfoTable(city) {
    const Vehicles = ["Verbrenner", "Audi E-Tron", "Peugeot e208", "Fiat 500e"];
    const attributes = [
        {
            name: "dauer",
            display: "Timefactor",
            get_difference: false,
            method: (a, b, c, d) => {
                return parseFloat(compareVehicleScoresForCity(a, b, c, d).toFixed(3));
            },
        },
        {
            name: "dauer",
            display: "Timedifference",
            get_difference: true,
            method: (a, b, c, d) => {
                return toHHMMSS(compareVehicleScoresForCity(a, b, c, d));
            },
        },
        {
            name: "strecke",
            display: "Distance-factor",
            get_difference: false,
            method: (a, b, c, d) => {
                return parseFloat(compareVehicleScoresForCity(a, b, c, d).toFixed(3));
            },
        },
        {
            name: "strecke",
            display: "Detour",
            get_difference: true,
            method: (a, b, c, d) => {
                return `${compareVehicleScoresForCity(a, b, c, d).toFixed(0)/1000} km`;
            },
        },
    ];
    var table = `<table> <tr>
            <th> </th>
            <th>Verbrenner</th>
            <th>Audi E-Tron</th>
            <th>Peugeot e208</th>
            <th>Fiat 500e</th>
        </tr>`;
    attributes.forEach((attribute) => {
        table += `<tr> <td> ${attribute.display} </td>`;
        Vehicles.forEach((vehicle) => {
            table += `<td> ${attribute.method(city, vehicle, attribute.name, attribute.get_difference)} </td>`;
        });
        table += "</tr> ";
    });
    table += "</table> ";
    return table;
}

function compareVehicleScoresForCity(city, vehicle, attribute, get_difference = true) {
    const routes = getRoutesOfCity(city.name);
    const mapped = routes.map(route => {
        const vehicleAttribute = route.Fahrzeuge.filter((fahrzeug) => {
            return fahrzeug.name == vehicle;
        })[0][attribute];
        const combustionAttribute = route.Fahrzeuge[0][attribute]
        return get_difference
            ? vehicleAttribute - combustionAttribute
            : vehicleAttribute / combustionAttribute;
    })
    const sum = mapped.reduce((a, b) => a + b, 0);
    const avg = sum / mapped.length || 0;
    return avg;
}

function getRoutesOfCity(cityname) {
    return routeData.filter(
        (route) =>
            route.Start == cityname &&
            getDistance(
                [route["start_lat"], route["start_long"]],
                [route["dest_lat"], route["dest_long"]]
            ) >= MIN_ROUTE_DISTANCE
    );
}

function getDistance(latlng1, latlng2) {
    const dy = 111.3 * (latlng1[0] - latlng2[0]);
    const dx = 71.5 * (latlng1[1] - latlng2[1]);
    distance = Math.sqrt(dx * dx + dy * dy);
    return distance; // in km
}

function shortVehicleName(name) {
    return name.split(" ")[0];
}

function httpGetAsync(theUrl, callback, callbackInfo = null) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            if (callbackInfo) callback(xmlHttp.responseText, callbackInfo);
            else callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function httpPostAsync(theUrl, body, callback, callbackInfo = null) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            if (callbackInfo) callback(xmlHttp.responseText, callbackInfo);
            else callback(xmlHttp.responseText);
        } else if (xmlHttp.readyState == 4) {
            console.warn(xmlHttp.status, xmlHttp.responseText);
        }
    };
    xmlHttp.open("POST", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.send(body);
}

function getPopupFromSummary(summary, vehicleInfo) {
    var result = `<h2> ${vehicleInfo.name} </h2>
    <table> <tr> <th> Attribute </th> <th> Value </th> </tr>`;
    Object.keys(summary).forEach((key) => {
        const data = summary[key];
        result += `<tr> <td> ${key} </td> <td> ${data} </td></tr>`;
    });
    result += "</table>";
    return result;
}
