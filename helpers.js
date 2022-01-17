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

function createInfoTable(route) {
    const attributes = [
        {
            name: "strecke",
            display: "Strecke",
            method: (e) => {
                return (e / 1000).toFixed(0);
            },
        },
        {
            name: "dauer",
            display: "Dauer",
            method: (e) => {
                return toHHMMSS(e);
            },
        },
        {
            name: "verbrauch",
            display: "Verbrauch",
            method: (e) => {
                return e ? e.toFixed(2) : "-";
            },
        },
        {
            name: "restreichweite",
            display: "Restreichweite",
            method: (e) => {
                return e ? e.toFixed(1) : "-";
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
                return e ? e.length - 1 : "-";
            },
        },
    ];
    var table = `<table> <tr>
            <th> </th>
            <th>Verbrenner</th>
            <th>Audi E-Tron</th>
            <th>Peugeot</th>
            <th>Fiat</th>
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
