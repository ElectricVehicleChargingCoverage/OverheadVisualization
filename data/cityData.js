const cityData = [
    {
        "name": "Aachen",
        "lat": 50.7762,
        "long": 6.0838,
        "Zeitfaktor": 1.2550172917163973,
        "Zeitunterschied": 3974.956896551724,
        "Distanzfaktor": 1.0056810207707785,
        "Umweg": 2852.9137931034484
    },
    {
        "name": "Augsburg",
        "lat": 48.3717,
        "long": 10.8983,
        "Zeitfaktor": 1.3870286066590594,
        "Zeitunterschied": 7118.543103448276,
        "Distanzfaktor": 0.9940850331554096,
        "Umweg": -3123.7155172413795
    },
    {
        "name": "Berlin",
        "lat": 52.5167,
        "long": 13.3833,
        "Zeitfaktor": 1.45713457929378,
        "Zeitunterschied": 7399.853448275862,
        "Distanzfaktor": 1.0090423273921243,
        "Umweg": 4303.629310344828
    },
    {
        "name": "Bielefeld",
        "lat": 52.0167,
        "long": 8.5333,
        "Zeitfaktor": 1.2805108747358152,
        "Zeitunterschied": 3292.9224137931033,
        "Distanzfaktor": 0.9916419816264136,
        "Umweg": -3559.887931034483
    },
    {
        "name": "Bochum",
        "lat": 51.4833,
        "long": 7.2167,
        "Zeitfaktor": 1.2531069602213323,
        "Zeitunterschied": 3371.6293103448274,
        "Distanzfaktor": 1.015512452631151,
        "Umweg": 5159.336206896552
    },
    {
        "name": "Bonn",
        "lat": 50.7339,
        "long": 7.0997,
        "Zeitfaktor": 1.2254995489152285,
        "Zeitunterschied": 3220.439655172414,
        "Distanzfaktor": 1.0236392649599582,
        "Umweg": 5017.586206896552
    },
    {
        "name": "Braunschweig",
        "lat": 52.2692,
        "long": 10.5211,
        "Zeitfaktor": 1.4204735986743153,
        "Zeitunterschied": 4857.482758620689,
        "Distanzfaktor": 1.0198289787453536,
        "Umweg": 5552.7844827586205
    },
    {
        "name": "Bremen",
        "lat": 53.1153,
        "long": 8.7975,
        "Zeitfaktor": 1.3403134875239133,
        "Zeitunterschied": 4850.793103448276,
        "Distanzfaktor": 1.0098109657534733,
        "Umweg": 2257.594827586207
    },
    {
        "name": "Chemnitz",
        "lat": 50.8333,
        "long": 12.9167,
        "Zeitfaktor": 1.4603124581261742,
        "Zeitunterschied": 6833.963963963964,
        "Distanzfaktor": 1.0098946176006625,
        "Umweg": 4475.7657657657655
    },
    {
        "name": "Cologne",
        "lat": 50.9422,
        "long": 6.9578,
        "Zeitfaktor": 1.2273647281436053,
        "Zeitunterschied": 3211.362068965517,
        "Distanzfaktor": 1.005038067425594,
        "Umweg": 2070.0
    },
    {
        "name": "Dortmund",
        "lat": 51.5139,
        "long": 7.4653,
        "Zeitfaktor": 1.238756051066378,
        "Zeitunterschied": 3156.560344827586,
        "Distanzfaktor": 1.0046301778399112,
        "Umweg": 3190.7758620689656
    },
    {
        "name": "Dresden",
        "lat": 51.0493,
        "long": 13.7384,
        "Zeitfaktor": 1.4701947098209645,
        "Zeitunterschied": 7518.387931034483,
        "Distanzfaktor": 1.021203236121203,
        "Umweg": 9648.077586206897
    },
    {
        "name": "Duisburg",
        "lat": 51.4322,
        "long": 6.7611,
        "Zeitfaktor": 1.2389556460017361,
        "Zeitunterschied": 3302.456896551724,
        "Distanzfaktor": 1.0069923756299408,
        "Umweg": 1689.2586206896551
    },
    {
        "name": "D\u00fcsseldorf",
        "lat": 51.2311,
        "long": 6.7724,
        "Zeitfaktor": 1.244558073978941,
        "Zeitunterschied": 3321.396551724138,
        "Distanzfaktor": 1.0070053120520845,
        "Umweg": 2521.2844827586205
    },
    {
        "name": "Essen",
        "lat": 51.4508,
        "long": 7.0131,
        "Zeitfaktor": 1.2329112373844726,
        "Zeitunterschied": 3191.5086206896553,
        "Distanzfaktor": 1.0093456073724456,
        "Umweg": 2722.5344827586205
    },
    {
        "name": "Frankfurt",
        "lat": 50.1136,
        "long": 8.6797,
        "Zeitfaktor": 1.2890114178931271,
        "Zeitunterschied": 3444.155172413793,
        "Distanzfaktor": 1.001722689377547,
        "Umweg": 591.7068965517242
    },
    {
        "name": "Gelsenkirchen",
        "lat": 51.5167,
        "long": 7.1,
        "Zeitfaktor": 1.231902663260873,
        "Zeitunterschied": 3392.1478260869567,
        "Distanzfaktor": 1.001520417244978,
        "Umweg": 1151.7652173913043
    },
    {
        "name": "Hamburg",
        "lat": 53.55,
        "long": 10.01,
        "Zeitfaktor": 1.3760331386713054,
        "Zeitunterschied": 5881.413793103448,
        "Distanzfaktor": 1.007647625264606,
        "Umweg": 2854.9827586206898
    },
    {
        "name": "Hannover",
        "lat": 52.3744,
        "long": 9.7386,
        "Zeitfaktor": 1.3358924802103294,
        "Zeitunterschied": 4046.689655172414,
        "Distanzfaktor": 1.0063749025675266,
        "Umweg": 1433.6120689655172
    },
    {
        "name": "Karlsruhe",
        "lat": 49.0167,
        "long": 8.4,
        "Zeitfaktor": 1.31170338639688,
        "Zeitunterschied": 4686.75,
        "Distanzfaktor": 1.009944117744197,
        "Umweg": 3791.543103448276
    },
    {
        "name": "Kiel",
        "lat": 54.3233,
        "long": 10.1394,
        "Zeitfaktor": 1.3697056995478427,
        "Zeitunterschied": 7026.112068965517,
        "Distanzfaktor": 1.0010005041082561,
        "Umweg": 798.6896551724138
    },
    {
        "name": "Leipzig",
        "lat": 51.35,
        "long": 12.3833,
        "Zeitfaktor": 1.4228430803769627,
        "Zeitunterschied": 5838.974137931034,
        "Distanzfaktor": 1.0098352127782875,
        "Umweg": 3944.293103448276
    },
    {
        "name": "Mannheim",
        "lat": 49.4878,
        "long": 8.4661,
        "Zeitfaktor": 1.3085039620495655,
        "Zeitunterschied": 4177.853448275862,
        "Distanzfaktor": 0.9943983448187955,
        "Umweg": -1222.9741379310344
    },
    {
        "name": "Munich",
        "lat": 48.1372,
        "long": 11.5755,
        "Zeitfaktor": 1.4092454856326593,
        "Zeitunterschied": 7876.448275862069,
        "Distanzfaktor": 1.005434843773861,
        "Umweg": 3399.1637931034484
    },
    {
        "name": "M\u00f6nchengladbach",
        "lat": 51.2,
        "long": 6.4333,
        "Zeitfaktor": 1.2333755346951703,
        "Zeitunterschied": 3501.3826086956524,
        "Distanzfaktor": 1.0040476405848375,
        "Umweg": 2851.060869565217
    },
    {
        "name": "M\u00fcnster",
        "lat": 51.9625,
        "long": 7.6256,
        "Zeitfaktor": 1.2386354925819592,
        "Zeitunterschied": 3364.7844827586205,
        "Distanzfaktor": 1.0029526704403033,
        "Umweg": 1351.344827586207
    },
    {
        "name": "Nuremberg",
        "lat": 49.4528,
        "long": 11.0778,
        "Zeitfaktor": 1.3642400282035814,
        "Zeitunterschied": 5253.206896551724,
        "Distanzfaktor": 1.005373022672986,
        "Umweg": 1441.396551724138
    },
    {
        "name": "Stuttgart",
        "lat": 48.7761,
        "long": 9.1775,
        "Zeitfaktor": 1.3536300262853294,
        "Zeitunterschied": 5537.758620689655,
        "Distanzfaktor": 1.0113516272512264,
        "Umweg": 4533.603448275862
    },
    {
        "name": "Wiesbaden",
        "lat": 50.0825,
        "long": 8.24,
        "Zeitfaktor": 1.2676028728883584,
        "Zeitunterschied": 3401.094827586207,
        "Distanzfaktor": 1.0000747916211816,
        "Umweg": 470.98275862068965
    },
    {
        "name": "Wuppertal",
        "lat": 51.2667,
        "long": 7.1833,
        "Zeitfaktor": 1.2084868448112844,
        "Zeitunterschied": 3020.896551724138,
        "Distanzfaktor": 1.0095534734355218,
        "Umweg": 1986.3103448275863
    }
];