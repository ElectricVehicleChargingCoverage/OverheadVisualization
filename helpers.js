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
            display: "Distance",
            method: (vehicle) => {
                return vehicle["strecke"]
                    ? `${(vehicle["strecke"] / 1000).toFixed(0)} km`
                    : "-";
            },
        },
        {
            display: "Distancefactor",
            method: (vehicle, route) => {
                return route["distanceFactor"][vehicle.name]
                    ? `${parseFloat(
                          route["distanceFactor"][vehicle.name].toFixed(3)
                      )}`
                    : "-";
            },
        },
        {
            display: "Distancedifference",
            method: (vehicle, route) => {
                return route["distanceDifference"][vehicle.name]
                    ? `${parseFloat(
                          (
                              route["distanceDifference"][vehicle.name] / 1000
                          ).toFixed(3)
                      )} km`
                    : "-";
            },
        },
        {
            display: "Duration",
            method: (vehicle) => {
                return vehicle["dauer"] ? toHHMMSS(vehicle["dauer"]) : "-";
            },
        },
        {
            display: "Timefactor",
            method: (vehicle, route) => {
                return route["timeFactor"][vehicle.name]
                    ? `${parseFloat(
                          route["timeFactor"][vehicle.name].toFixed(3)
                      )}`
                    : "-";
            },
        },
        {
            display: "Timedifference",
            method: (vehicle, route) => {
                return route["timeDifference"][vehicle.name]
                    ? `${toHHMMSS(
                          route["timeDifference"][vehicle.name]
                      )}`
                    : "-";
            },
        },
        {
            display: "Consumption",
            method: (vehicle) => {
                return vehicle["verbrauch"]
                    ? `${vehicle["verbrauch"].toFixed(2)} ${
                          vehicle.name == "Verbrenner" ? "l" : "kWh"
                      }`
                    : "-";
            },
        },
        {
            display: "Remaining charge",
            method: (vehicle) => {
                return vehicle["restreichweite"]
                    ? `${vehicle["restreichweite"].toFixed(1)} kWh`
                    : "-";
            },
        },
        {
            display: "Charging time",
            method: (vehicle) => {
                return vehicle["ladezeit"]
                    ? toHHMMSS(vehicle["ladezeit"])
                    : "-";
            },
        },
        {
            display: "Charging stops",
            method: (vehicle) => {
                return vehicle["legs"]
                    ? vehicle["legs"].length > 0
                        ? vehicle["legs"].length - 1
                        : "-"
                    : "-";
            },
        },
        {
            display: "Costs",
            method: (vehicle) => {
                return vehicle["costs"]
                    ? `${vehicle["costs"].toFixed(2)} &euro;`
                    : "-";
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
                fahrzeug.strecke ? attribute.method(fahrzeug, route) : "-"
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
            display: "Distance",
            method: (e) => {
                return `${(e / 1000).toFixed(0)} km`;
            },
        },
        {
            name: "travelTimeInSeconds",
            display: "Duration",
            method: (e) => {
                return toHHMMSS(e);
            },
        },
        {
            name: "batteryConsumptionInkWh",
            display: "Consumption",
            method: (e) => {
                return e ? `${e.toFixed(2)} kWh` : "-";
            },
        },
        {
            name: "remainingChargeAtArrivalInkWh",
            display: "Remaining Charge",
            method: (e) => {
                return e ? `${e.toFixed(1)} kWh` : "-";
            },
        },
        {
            name: "chargingTimeInSeconds",
            display: "Charging time",
            method: (e) => {
                return e ? toHHMMSS(e) : "-";
            },
        },
        {
            name: "targetChargeInkWh",
            display: "Target charge",
            method: (e) => {
                return e ? `${e.toFixed(1)} kWh` : "-";
            },
        },
        {
            name: "chargingPowerInkW",
            display: "Chargingpower",
            method: (e) => {
                return e ? `${e} kW` : "-";
            },
        },
    ];
    var table = `<table> <tr>
            <th>Since last stop</th>`;
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
            display: "Timefactor",
            method: (city, vehicle) => {
                return parseFloat(city["timeFactor"][vehicle].toFixed(3));
            },
        },
        {
            display: "Timedifference",
            method: (city, vehicle) => {
                return toHHMMSS(city["timeDifference"][vehicle]);
            },
        },
        {
            display: "Distance-factor",
            method: (city, vehicle) => {
                return parseFloat(city["distanceFactor"][vehicle].toFixed(3));
            },
        },
        {
            display: "Detour",
            method: (city, vehicle) => {
                return `${
                    city["distanceDifference"][vehicle].toFixed(0) / 1000
                } km`;
            },
        },
        {
            display: "Costs",
            method: (city, vehicle) => {
                return `${city["costs"][vehicle].toFixed(2)} &euro;`;
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
    }).filter((value) => value != undefined);
    const sum = mapped.reduce((a, b) => a + b, 0);
    const avg = sum / mapped.length || 0;
    return avg;
}

function getCostsForRoutes() {
    const routes = routeData;
    routes.forEach((route) => {
        route.Fahrzeuge.forEach((fahrzeug) => {
            if (fahrzeug.name == "Verbrenner") {
                const distance = fahrzeug["strecke"];
                fahrzeug["verbrauch"] = (distance * gasConsumption) / 100000;
                fahrzeug["costs"] =
                    ((distance * gasConsumption) / 100000) * gasPrice;
            } else {
                const consumption = fahrzeug["verbrauch"];
                fahrzeug["costs"] = consumption * kWhPrice;
            }
        });
    });
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
            count = 0;
            Vehicles.forEach((vehicle) => {
                city[attribute.name][vehicle] = attribute.method(city, vehicle);
                if (vehicle == "Verbrenner" || city[attribute.name][vehicle] == 0)
                    return;
                sum += city[attribute.name][vehicle];
                count += 1;
            });
            city[attribute.name]["average"] = sum / count;
        });
    });
}

function calculateRouteScores() {
    const attributes = [
        { name: "strecke", new: "distance" },
        { name: "dauer", new: "time" },
    ];
    const routes = routeData;
    getCostsForRoutes();
    routes.forEach((route) => {
        attributes.forEach((attribute) => {
            route[`${attribute.new}Factor`] = {};
            route[`${attribute.new}Difference`] = {};
            sumFactor = 0;
            sumDifference = 0;
            count = 0;
            route.Fahrzeuge.forEach((fahrzeug) => {
                if (fahrzeug.strecke == null) return;
                const combustionAttribute = route.Fahrzeuge[0][attribute.name];
                const vehicleAttribute = fahrzeug[attribute.name];
                route[`${attribute.new}Factor`][fahrzeug.name] =
                    vehicleAttribute / combustionAttribute;
                route[`${attribute.new}Difference`][fahrzeug.name] =
                    vehicleAttribute - combustionAttribute;
                if (fahrzeug.name == "Verbrenner") return;
                sumFactor += route[`${attribute.new}Factor`][fahrzeug.name];
                sumDifference +=
                    route[`${attribute.new}Difference`][fahrzeug.name];
                count += 1;
            });
            route[`${attribute.new}Factor`]["average"] = sumFactor / count;
            route[`${attribute.new}Difference`]["average"] =
                sumDifference / count;
        });
    });
}

function cityCircleSize(city) {
    const score = city[attributeToCompare]["average"];
    switch (attributeToCompare) {
        case "timeFactor":
            return 3000 * Math.pow(score, 5);
        case "distanceFactor":
            return 12000 * Math.pow(((score-1) * 5) + 1, 9);
    }
    return 10000;
}