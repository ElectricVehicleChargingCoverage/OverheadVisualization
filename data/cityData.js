const cityData = [
    {
        "name": "Aachen",
        "lat": 50.7762,
        "long": 6.0838,
        "Zeitfaktor": 1.2676107004856223,
        "Zeitunterschied": 4241.117647058823,
        "Distanzfaktor": 1.0057814175304587,
        "Umweg": 2928.426470588235
    },
    {
        "name": "Augsburg",
        "lat": 48.3717,
        "long": 10.8983,
        "Zeitfaktor": 1.394072450868197,
        "Zeitunterschied": 7250.301470588235,
        "Distanzfaktor": 0.9940177886041999,
        "Umweg": -3054.860294117647
    },
    {
        "name": "Berlin",
        "lat": 52.5167,
        "long": 13.3833,
        "Zeitfaktor": 1.4433919921626714,
        "Zeitunterschied": 7192.779411764706,
        "Distanzfaktor": 1.0097889319092068,
        "Umweg": 4710.816176470588
    },
    {
        "name": "Bielefeld",
        "lat": 52.0167,
        "long": 8.5333,
        "Zeitfaktor": 1.2894968532967963,
        "Zeitunterschied": 3414.8970588235293,
        "Distanzfaktor": 0.9921306525633408,
        "Umweg": -3553.5661764705883
    },
    {
        "name": "Bochum",
        "lat": 51.4833,
        "long": 7.2167,
        "Zeitfaktor": 1.264610578341762,
        "Zeitunterschied": 3561.580882352941,
        "Distanzfaktor": 1.014573327677219,
        "Umweg": 4969.801470588235
    },
    {
        "name": "Bonn",
        "lat": 50.7339,
        "long": 7.0997,
        "Zeitfaktor": 1.2400587168024286,
        "Zeitunterschied": 3500.705882352941,
        "Distanzfaktor": 1.0219985487016965,
        "Umweg": 5140.720588235294
    },
    {
        "name": "Braunschweig",
        "lat": 52.2692,
        "long": 10.5211,
        "Zeitfaktor": 1.40308090418573,
        "Zeitunterschied": 4712.64705882353,
        "Distanzfaktor": 1.019070365507609,
        "Umweg": 5487.867647058823
    },
    {
        "name": "Bremen",
        "lat": 53.1153,
        "long": 8.7975,
        "Zeitfaktor": 1.3423465609609802,
        "Zeitunterschied": 4851.551470588235,
        "Distanzfaktor": 1.0091619574050694,
        "Umweg": 2278.426470588235
    },
    {
        "name": "Chemnitz",
        "lat": 50.8333,
        "long": 12.9167,
        "Zeitfaktor": 1.4509056812623489,
        "Zeitunterschied": 6778.031007751938,
        "Distanzfaktor": 1.0088998271898677,
        "Umweg": 3961.6124031007753
    },
    {
        "name": "Cologne",
        "lat": 50.9422,
        "long": 6.9578,
        "Zeitfaktor": 1.2425549203254431,
        "Zeitunterschied": 3479.2867647058824,
        "Distanzfaktor": 1.0057989338778737,
        "Umweg": 2475.3529411764707
    },
    {
        "name": "Dortmund",
        "lat": 51.5139,
        "long": 7.4653,
        "Zeitfaktor": 1.2530595775763511,
        "Zeitunterschied": 3367.3823529411766,
        "Distanzfaktor": 1.005865827035203,
        "Umweg": 3534.985294117647
    },
    {
        "name": "Dresden",
        "lat": 51.0493,
        "long": 13.7384,
        "Zeitfaktor": 1.4588572642719004,
        "Zeitunterschied": 7349.77205882353,
        "Distanzfaktor": 1.0192963046279433,
        "Umweg": 8802.801470588236
    },
    {
        "name": "Duisburg",
        "lat": 51.4322,
        "long": 6.7611,
        "Zeitfaktor": 1.255027695358363,
        "Zeitunterschied": 3559.514705882353,
        "Distanzfaktor": 1.0071721567354428,
        "Umweg": 2176.8529411764707
    },
    {
        "name": "D\u00fcsseldorf",
        "lat": 51.2311,
        "long": 6.7724,
        "Zeitfaktor": 1.257139074684746,
        "Zeitunterschied": 3574.8823529411766,
        "Distanzfaktor": 1.0077254532112692,
        "Umweg": 2843.3161764705883
    },
    {
        "name": "Essen",
        "lat": 51.4508,
        "long": 7.0131,
        "Zeitfaktor": 1.246762721695685,
        "Zeitunterschied": 3408.926470588235,
        "Distanzfaktor": 1.0087100316648092,
        "Umweg": 2639.9411764705883
    },
    {
        "name": "Frankfurt",
        "lat": 50.1136,
        "long": 8.6797,
        "Zeitfaktor": 1.30137535227834,
        "Zeitunterschied": 3671.1176470588234,
        "Distanzfaktor": 1.0036567379296597,
        "Umweg": 1272.4558823529412
    },
    {
        "name": "Freiburg im Breisgau",
        "lat": 47.9947,
        "long": 7.8497,
        "Zeitfaktor": 1.3829125387581571,
        "Zeitunterschied": 7165.088235294118,
        "Distanzfaktor": 1.0123747864650257,
        "Umweg": 6310.095588235294
    },
    {
        "name": "Gelsenkirchen",
        "lat": 51.5167,
        "long": 7.1,
        "Zeitfaktor": 1.2457535079516648,
        "Zeitunterschied": 3574.4,
        "Distanzfaktor": 1.0017709223697884,
        "Umweg": 1241.9185185185186
    },
    {
        "name": "Halle",
        "lat": 51.4828,
        "long": 11.9697,
        "Zeitfaktor": 1.4303563680507314,
        "Zeitunterschied": 5677.85294117647,
        "Distanzfaktor": 1.0089738023176795,
        "Umweg": 3572.8088235294117
    },
    {
        "name": "Hamburg",
        "lat": 53.55,
        "long": 10.01,
        "Zeitfaktor": 1.3685064425454285,
        "Zeitunterschied": 5788.992647058823,
        "Distanzfaktor": 1.0052520922159527,
        "Umweg": 2396.110294117647
    },
    {
        "name": "Hannover",
        "lat": 52.3744,
        "long": 9.7386,
        "Zeitfaktor": 1.3283863714985331,
        "Zeitunterschied": 3976.889705882353,
        "Distanzfaktor": 1.0067374851683792,
        "Umweg": 1708.4485294117646
    },
    {
        "name": "Karlsruhe",
        "lat": 49.0167,
        "long": 8.4,
        "Zeitfaktor": 1.3212498296296806,
        "Zeitunterschied": 4945.286764705882,
        "Distanzfaktor": 1.0108094716596618,
        "Umweg": 4367.757352941177
    },
    {
        "name": "Kiel",
        "lat": 54.3233,
        "long": 10.1394,
        "Zeitfaktor": 1.3607058113910804,
        "Zeitunterschied": 6887.691176470588,
        "Distanzfaktor": 0.9992319474761648,
        "Umweg": 151.5441176470588
    },
    {
        "name": "Krefeld",
        "lat": 51.3333,
        "long": 6.5667,
        "Zeitfaktor": 1.2412929518103248,
        "Zeitunterschied": 3792.392592592593,
        "Distanzfaktor": 1.0056864298766321,
        "Umweg": 3636.637037037037
    },
    {
        "name": "Leipzig",
        "lat": 51.35,
        "long": 12.3833,
        "Zeitfaktor": 1.407729471158085,
        "Zeitunterschied": 5736.14705882353,
        "Distanzfaktor": 1.0082427909383969,
        "Umweg": 3233.1617647058824
    },
    {
        "name": "L\u00fcbeck",
        "lat": 53.8697,
        "long": 10.6864,
        "Zeitfaktor": 1.3647605334729966,
        "Zeitunterschied": 6445.390977443609,
        "Distanzfaktor": 0.9957676593860828,
        "Umweg": -1235.2631578947369
    },
    {
        "name": "Magdeburg",
        "lat": 52.1278,
        "long": 11.6292,
        "Zeitfaktor": 1.4015289260893615,
        "Zeitunterschied": 5273.511111111111,
        "Distanzfaktor": 1.0059871673816305,
        "Umweg": 2299.725925925926
    },
    {
        "name": "Mannheim",
        "lat": 49.4878,
        "long": 8.4661,
        "Zeitfaktor": 1.3219031029373667,
        "Zeitunterschied": 4433.058823529412,
        "Distanzfaktor": 0.9967260156828031,
        "Umweg": -532.0367647058823
    },
    {
        "name": "Munich",
        "lat": 48.1372,
        "long": 11.5755,
        "Zeitfaktor": 1.411780439038559,
        "Zeitunterschied": 7933.5,
        "Distanzfaktor": 1.0058057008668608,
        "Umweg": 3461.279411764706
    },
    {
        "name": "M\u00f6nchengladbach",
        "lat": 51.2,
        "long": 6.4333,
        "Zeitfaktor": 1.2463937329118544,
        "Zeitunterschied": 3729.9626865671644,
        "Distanzfaktor": 1.0049056915980543,
        "Umweg": 3119.6492537313434
    },
    {
        "name": "M\u00fcnster",
        "lat": 51.9625,
        "long": 7.6256,
        "Zeitfaktor": 1.2529555061702842,
        "Zeitunterschied": 3549.1470588235293,
        "Distanzfaktor": 1.003106380040942,
        "Umweg": 1763.5661764705883
    },
    {
        "name": "Nuremberg",
        "lat": 49.4528,
        "long": 11.0778,
        "Zeitfaktor": 1.3756097531787634,
        "Zeitunterschied": 5431.52205882353,
        "Distanzfaktor": 1.006018352809943,
        "Umweg": 1633.514705882353
    },
    {
        "name": "Stuttgart",
        "lat": 48.7761,
        "long": 9.1775,
        "Zeitfaktor": 1.361479331530383,
        "Zeitunterschied": 5765.97794117647,
        "Distanzfaktor": 1.0095695200870427,
        "Umweg": 4160.169117647059
    },
    {
        "name": "Wiesbaden",
        "lat": 50.0825,
        "long": 8.24,
        "Zeitfaktor": 1.2838112743589756,
        "Zeitunterschied": 3680.2426470588234,
        "Distanzfaktor": 1.0022522949986168,
        "Umweg": 1271.514705882353
    },
    {
        "name": "Wuppertal",
        "lat": 51.2667,
        "long": 7.1833,
        "Zeitfaktor": 1.2251905593691939,
        "Zeitunterschied": 3255.2279411764707,
        "Distanzfaktor": 1.0108080464757387,
        "Umweg": 2452.514705882353
    }
];