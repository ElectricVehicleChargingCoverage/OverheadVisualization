const cityData = [
    {
        "name": "Aachen",
        "lat": 50.7762,
        "long": 6.0838,
        "Zeitfaktor": 1.1839310910708531,
        "Zeitunterschied": 3182.586956521739,
        "Distanzfaktor": 1.0069789303599608,
        "Umweg": 3368.217391304348
    },
    {
        "name": "Augsburg",
        "lat": 48.3717,
        "long": 10.8983,
        "Zeitfaktor": 1.347212380248034,
        "Zeitunterschied": 6528.49,
        "Distanzfaktor": 0.9861579703720861,
        "Umweg": -7438.64
    },
    {
        "name": "Berlin",
        "lat": 52.5167,
        "long": 13.3833,
        "Zeitfaktor": 1.413144627988474,
        "Zeitunterschied": 6865.5948275862065,
        "Distanzfaktor": 1.0085228456254132,
        "Umweg": 3915.8793103448274
    },
    {
        "name": "Bielefeld",
        "lat": 52.0167,
        "long": 8.5333,
        "Zeitfaktor": 1.2371084126548002,
        "Zeitunterschied": 2956.0344827586205,
        "Distanzfaktor": 0.9895808256288565,
        "Umweg": -4122.827586206897
    },
    {
        "name": "Bochum",
        "lat": 51.4833,
        "long": 7.2167,
        "Zeitfaktor": 1.1982140031172652,
        "Zeitunterschied": 3113.1293103448274,
        "Distanzfaktor": 1.0178405483228696,
        "Umweg": 5850.198275862069
    },
    {
        "name": "Bonn",
        "lat": 50.7339,
        "long": 7.0997,
        "Zeitfaktor": 1.177069673638431,
        "Zeitunterschied": 2895.862068965517,
        "Distanzfaktor": 1.013791938093988,
        "Umweg": 4113.793103448276
    },
    {
        "name": "Braunschweig",
        "lat": 52.2692,
        "long": 10.5211,
        "Zeitfaktor": 1.3349180669062166,
        "Zeitunterschied": 4071.603448275862,
        "Distanzfaktor": 1.0065186462664935,
        "Umweg": 1456.405172413793
    },
    {
        "name": "Bremen",
        "lat": 53.1153,
        "long": 8.7975,
        "Zeitfaktor": 1.3012704675557472,
        "Zeitunterschied": 4439.775862068966,
        "Distanzfaktor": 0.9980589904950821,
        "Umweg": -1165.3103448275863
    },
    {
        "name": "Chemnitz",
        "lat": 50.8333,
        "long": 12.9167,
        "Zeitfaktor": 1.4031291116852287,
        "Zeitunterschied": 6152.401785714285,
        "Distanzfaktor": 1.009953313383196,
        "Umweg": 4924.151785714285
    },
    {
        "name": "Cologne",
        "lat": 50.9422,
        "long": 6.9578,
        "Zeitfaktor": 1.2004053617895762,
        "Zeitunterschied": 3080.0689655172414,
        "Distanzfaktor": 1.0116984554940869,
        "Umweg": 3000.939655172414
    },
    {
        "name": "Dortmund",
        "lat": 51.5139,
        "long": 7.4653,
        "Zeitfaktor": 1.1909368398271598,
        "Zeitunterschied": 2967.1160714285716,
        "Distanzfaktor": 1.0102386575339435,
        "Umweg": 3514.3839285714284
    },
    {
        "name": "Dresden",
        "lat": 51.0493,
        "long": 13.7384,
        "Zeitfaktor": 1.422645967641065,
        "Zeitunterschied": 7013.060344827586,
        "Distanzfaktor": 1.0100850814434241,
        "Umweg": 4811.293103448276
    },
    {
        "name": "Duisburg",
        "lat": 51.4322,
        "long": 6.7611,
        "Zeitfaktor": 1.1844887385708542,
        "Zeitunterschied": 3033.5258620689656,
        "Distanzfaktor": 1.0057144363798434,
        "Umweg": 2622.146551724138
    },
    {
        "name": "D\u00fcsseldorf",
        "lat": 51.2311,
        "long": 6.7724,
        "Zeitfaktor": 1.1795218486311856,
        "Zeitunterschied": 2974.543103448276,
        "Distanzfaktor": 1.0017834280151792,
        "Umweg": 1768.9827586206898
    },
    {
        "name": "Essen",
        "lat": 51.4508,
        "long": 7.0131,
        "Zeitfaktor": 1.1748815453699186,
        "Zeitunterschied": 2901.2327586206898,
        "Distanzfaktor": 0.9936876728378171,
        "Umweg": 1067.594827586207
    },
    {
        "name": "Frankfurt",
        "lat": 50.1136,
        "long": 8.6797,
        "Zeitfaktor": 1.2597263051930552,
        "Zeitunterschied": 3239.5625,
        "Distanzfaktor": 1.0050597803634012,
        "Umweg": 1937.6875
    },
    {
        "name": "Gelsenkirchen",
        "lat": 51.5167,
        "long": 7.1,
        "Zeitfaktor": 1.1768326811540366,
        "Zeitunterschied": 2944.405172413793,
        "Distanzfaktor": 1.022242782859272,
        "Umweg": 6025.853448275862
    },
    {
        "name": "Hamburg",
        "lat": 53.55,
        "long": 10.01,
        "Zeitfaktor": 1.3463394907100485,
        "Zeitunterschied": 5529.137931034483,
        "Distanzfaktor": 1.001045546193565,
        "Umweg": 639.3103448275862
    },
    {
        "name": "Hannover",
        "lat": 52.3744,
        "long": 9.7386,
        "Zeitfaktor": 1.2692056327427226,
        "Zeitunterschied": 3477.7155172413795,
        "Distanzfaktor": 1.0029689418420324,
        "Umweg": 730.5862068965517
    },
    {
        "name": "Karlsruhe",
        "lat": 49.0167,
        "long": 8.4,
        "Zeitfaktor": 1.2829270817248764,
        "Zeitunterschied": 4392.956896551724,
        "Distanzfaktor": 1.0082871089722896,
        "Umweg": 3273.206896551724
    },
    {
        "name": "Kiel",
        "lat": 54.3233,
        "long": 10.1394,
        "Zeitfaktor": 1.3436921315023105,
        "Zeitunterschied": 6626.448275862069,
        "Distanzfaktor": 1.000830761981151,
        "Umweg": 646.5086206896551
    },
    {
        "name": "Leipzig",
        "lat": 51.35,
        "long": 12.3833,
        "Zeitfaktor": 1.3891260838531487,
        "Zeitunterschied": 5670.56,
        "Distanzfaktor": 1.0110433124852989,
        "Umweg": 4157.32
    },
    {
        "name": "Mannheim",
        "lat": 49.4878,
        "long": 8.4661,
        "Zeitfaktor": 1.280027711006986,
        "Zeitunterschied": 3989.875,
        "Distanzfaktor": 1.0021780226575903,
        "Umweg": 1042.544642857143
    },
    {
        "name": "Munich",
        "lat": 48.1372,
        "long": 11.5755,
        "Zeitfaktor": 1.3894432984620393,
        "Zeitunterschied": 7641.3448275862065,
        "Distanzfaktor": 1.0039764591183948,
        "Umweg": 3089.646551724138
    },
    {
        "name": "M\u00f6nchengladbach",
        "lat": 51.2,
        "long": 6.4333,
        "Zeitfaktor": 1.1845853056918534,
        "Zeitunterschied": 3154.9224137931033,
        "Distanzfaktor": 1.0004473767521924,
        "Umweg": 2126.7241379310344
    },
    {
        "name": "M\u00fcnster",
        "lat": 51.9625,
        "long": 7.6256,
        "Zeitfaktor": 1.2070891623470656,
        "Zeitunterschied": 3200.6071428571427,
        "Distanzfaktor": 1.0054303351061074,
        "Umweg": 2557.151785714286
    },
    {
        "name": "Nuremberg",
        "lat": 49.4528,
        "long": 11.0778,
        "Zeitfaktor": 1.3399515489321703,
        "Zeitunterschied": 5033.9051724137935,
        "Distanzfaktor": 1.0049683526136324,
        "Umweg": 1526.7844827586207
    },
    {
        "name": "Stuttgart",
        "lat": 48.7761,
        "long": 9.1775,
        "Zeitfaktor": 1.3248046504676358,
        "Zeitunterschied": 5254.181034482759,
        "Distanzfaktor": 1.0130959476279227,
        "Umweg": 6047.068965517241
    },
    {
        "name": "Wiesbaden",
        "lat": 50.0825,
        "long": 8.24,
        "Zeitfaktor": 1.2453664559472177,
        "Zeitunterschied": 3215.1637931034484,
        "Distanzfaktor": 1.0060288560468267,
        "Umweg": 1672.1637931034484
    },
    {
        "name": "Wuppertal",
        "lat": 51.2667,
        "long": 7.1833,
        "Zeitfaktor": 1.1637100585727815,
        "Zeitunterschied": 2762.2844827586205,
        "Distanzfaktor": 1.0048954288143053,
        "Umweg": 1696.3103448275863
    }
];