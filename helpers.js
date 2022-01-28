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
        return item[attribute]["average"];
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
        route["timeoverhead"] = {};
        route["timeoverhead"]["average"] = timeoverhead;
        route["umweg"] = {};
        route["umweg"]["average"] = umweg;
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
            display: "Distance",
            method: (e) => {
                return e ? `${(e / 1000).toFixed(0)} km` : "-";
            },
        },
        {
            name: "dauer",
            display: "Duration",
            method: (e) => {
                return e ? toHHMMSS(e) : "-";
            },
        },
        {
            name: "verbrauch",
            display: "Consumption",
            method: (e) => {
                return e ? `${e.toFixed(2)} kWh` : "-";
            },
        },
        {
            name: "restreichweite",
            display: "Battery on dest",
            method: (e) => {
                return e ? `${e.toFixed(1)} kWh` : "-";
            },
        },
        {
            name: "ladezeit",
            display: "Charging time",
            method: (e) => {
                return e ? toHHMMSS(e) : "-";
            },
        },
        {
            name: "legs",
            display: "Charing stops",
            method: (e) => {
                return e ? (e.length > 0 ? e.length - 1 : "-") : "-";
            },
        },
    ];
    var table = `<table> <tr>
            <th> </th>
            <th>Combustion</th>
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
            method: (city, vehicle) => {
                return parseFloat(city["timeFactor"][vehicle].toFixed(3));
            },
        },
        {
            name: "dauer",
            display: "Timedifference",
            method: (city, vehicle) => {
                return toHHMMSS(city["timeDifference"][vehicle]);
            },
        },
        {
            name: "strecke",
            display: "Distance-factor",
            method: (city, vehicle) => {
                return parseFloat(city["distanceFactor"][vehicle].toFixed(3));
            },
        },
        {
            name: "strecke",
            display: "Detour",
            method: (city, vehicle) => {
                return `${city["distanceDifference"][vehicle].toFixed(0) / 1000} km`;
            },
        },
        {
            name: "strecke",
            display: "Costs",
            method: (city, vehicle) => {
                return `${city["costs"][vehicle].toFixed(2)} euro`;
            },
        },
    ];
    var table = `<table> <tr>
            <th>Averages</th>
            <th>Combustion</th>
            <th>Audi E-Tron</th>
            <th>Peugeot e208</th>
            <th>Fiat 500e</th>
        </tr>`;
    attributes.forEach((attribute) => {
        table += `<tr> <td> ${attribute.display} </td>`;
        Vehicles.forEach((vehicle) => {
            table += `<td> ${attribute.method(city, vehicle)} </td>`;
        });
        table += "</tr> ";
    });
    table += "</table> ";
    return table;
}

function compareVehicleScoresForCity(
    city,
    vehicle,
    attribute,
    get_difference = true
) {
    const routes = getRoutesOfCity(city.name);
    const mapped = routes.map((route) => {
        return route[`${attribute}${get_difference ? "Difference" : "Factor"}`][
            vehicle
        ];
    });
    const sum = mapped.reduce((a, b) => a + b, 0);
    const avg = sum / mapped.length || 0;
    return avg;
}

function getCostsForCity(city, vehicle) {
    const routes = getRoutesOfCity(city.name);
    if (vehicle == "Verbrenner") {
        const mapped = routes.map((route) => route.Fahrzeuge[0]["strecke"]);
        const sum = mapped.reduce((a, b) => a + b, 0);
        const avg = sum / mapped.length || 0;
        return ((avg * gasConsumption) / 100000) * gasPrice;
    } else {
        const mapped = routes.map((route) => {
            return route.Fahrzeuge.filter((fahrzeug) => {
                return fahrzeug.name == vehicle;
            })[0]["verbrauch"];
        });
        const sum = mapped.reduce((a, b) => a + b, 0);
        const avg = sum / mapped.length || 0;
        return avg * kWhPrice;
    }
}

function getRoutesOfCity(cityname) {
    return routeData.filter(
        (route) =>
            route.Start == cityname &&
            getDistance(
                [route["start_lat"], route["start_long"]],
                [route["dest_lat"], route["dest_long"]]
            ) >= minRouteDistance
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

function calculateCityScores() {
    const Vehicles = ["Verbrenner", "Audi E-Tron", "Peugeot e208", "Fiat 500e"];
    attributes = [
        {
            name: "timeFactor",
            method: (a, b) => {
                return compareVehicleScoresForCity(a, b, "time", false);
            },
        },
        {
            name: "timeDifference",
            method: (a, b) => {
                return compareVehicleScoresForCity(a, b, "time", true);
            },
        },
        {
            name: "distanceFactor",
            method: (a, b) => {
                return compareVehicleScoresForCity(a, b, "distance", false);
            },
        },
        {
            name: "distanceDifference",
            method: (a, b) => {
                return compareVehicleScoresForCity(a, b, "distance", true);
            },
        },
        {
            name: "costs",
            method: (a, b) => {
                return getCostsForCity(a, b);
            },
        },
    ];
    cityData.forEach((city) => {
        // const routes = getRoutesOfCity(city.name);
        attributes.forEach((attribute) => {
            city[attribute.name] = {};
            sum = 0;
            Vehicles.forEach((vehicle) => {
                city[attribute.name][vehicle] = attribute.method(city, vehicle);
                if (vehicle == "Verbrenner") return;
                sum += city[attribute.name][vehicle];
            });
            city[attribute.name]["average"] = sum / 3;
        });
    });
    console.log(cityData);
}

function calculateRouteScores() {
    const attributes = [
        { name: "strecke", new: "distance" },
        { name: "dauer", new: "time" },
    ];
    const routes = routeData;
    routes.forEach((route) => {
        attributes.forEach((attribute) => {
            route[`${attribute.new}Factor`] = {};
            route[`${attribute.new}Difference`] = {};
            sumFactor = 0;
            sumDifference = 0;
            route.Fahrzeuge.forEach((fahrzeug) => {
                const combustionAttribute = route.Fahrzeuge[0][attribute.name];
                const vehicleAttribute = fahrzeug[attribute.name];
                sumFactor += route[`${attribute.new}Factor`][fahrzeug.name] =
                    vehicleAttribute / combustionAttribute;
                sumDifference += route[`${attribute.new}Difference`][
                    fahrzeug.name
                ] = vehicleAttribute - combustionAttribute;
            });
            route[`${attribute.new}Factor`]["average"] = (sumFactor - 1) / 3;
            route[`${attribute.new}Difference`]["average"] = sumDifference / 3;
        });
    });
}
