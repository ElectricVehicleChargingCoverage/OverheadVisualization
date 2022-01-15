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
        const timeoverhead =
            (route.Audidauer + route.Peugeotdauer + route.Fiatdauer) /
            (3 * route.Verbrennerdauer);
        const umweg =
            (route.Audistrecke + route.Peugeotstrecke + route.Fiatstrecke) /
            (3 * route.Verbrennerstrecke);
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
