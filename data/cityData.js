const cityData = [
    {
        "name": "Aachen",
        "lat": 50.7762,
        "long": 6.0838,
        "Zeitfaktor": 1.1622358684368874,
        "Zeitunterschied": 2310.6774193548385,
        "Distanzfaktor": 1.0159009589963477,
        "Umweg": 4072.4919354838707
    },
    {
        "name": "Augsburg",
        "lat": 48.3717,
        "long": 10.8983,
        "Zeitfaktor": 1.2139858493815612,
        "Zeitunterschied": 3841.4112903225805,
        "Distanzfaktor": 0.9983329218350763,
        "Umweg": -939.0403225806451
    },
    {
        "name": "Berlin",
        "lat": 52.5167,
        "long": 13.3833,
        "Zeitfaktor": 1.2843936148471171,
        "Zeitunterschied": 4425.443548387097,
        "Distanzfaktor": 1.0175158572331306,
        "Umweg": 7568.467741935484
    },
    {
        "name": "Bielefeld",
        "lat": 52.0167,
        "long": 8.5333,
        "Zeitfaktor": 1.1624803230080056,
        "Zeitunterschied": 1821.2845528455284,
        "Distanzfaktor": 0.9967295817720657,
        "Umweg": -818.430894308943
    },
    {
        "name": "Bochum",
        "lat": 51.4833,
        "long": 7.2167,
        "Zeitfaktor": 1.1590871248995773,
        "Zeitunterschied": 1949.6341463414635,
        "Distanzfaktor": 1.0145536920708143,
        "Umweg": 3573.243902439024
    },
    {
        "name": "Bonn",
        "lat": 50.7339,
        "long": 7.0997,
        "Zeitfaktor": 1.1519848402235637,
        "Zeitunterschied": 1963.241935483871,
        "Distanzfaktor": 1.0336341537490725,
        "Umweg": 3880.6612903225805
    },
    {
        "name": "Braunschweig",
        "lat": 52.2692,
        "long": 10.5211,
        "Zeitfaktor": 1.1996079245549993,
        "Zeitunterschied": 2293.910569105691,
        "Distanzfaktor": 1.0058298946529074,
        "Umweg": 1665.4552845528456
    },
    {
        "name": "Bremen",
        "lat": 53.1153,
        "long": 8.7975,
        "Zeitfaktor": 1.1870673710187047,
        "Zeitunterschied": 2550.7479674796746,
        "Distanzfaktor": 1.0067249830970662,
        "Umweg": 1778.8699186991869
    },
    {
        "name": "Chemnitz",
        "lat": 50.8333,
        "long": 12.9167,
        "Zeitfaktor": 1.2413980154078956,
        "Zeitunterschied": 3478.451612903226,
        "Distanzfaktor": 1.0101033246775966,
        "Umweg": 4500.895161290323
    },
    {
        "name": "Cologne",
        "lat": 50.9422,
        "long": 6.9578,
        "Zeitfaktor": 1.1503315895574484,
        "Zeitunterschied": 1900.3951612903227,
        "Distanzfaktor": 1.004588447753815,
        "Umweg": 573.5887096774194
    },
    {
        "name": "Dortmund",
        "lat": 51.5139,
        "long": 7.4653,
        "Zeitfaktor": 1.1639238570281338,
        "Zeitunterschied": 2004.3252032520325,
        "Distanzfaktor": 1.0086991967741241,
        "Umweg": 3454.2195121951218
    },
    {
        "name": "Dresden",
        "lat": 51.0493,
        "long": 13.7384,
        "Zeitfaktor": 1.2667708671466928,
        "Zeitunterschied": 4149.298387096775,
        "Distanzfaktor": 1.0222958404589593,
        "Umweg": 10173.879032258064
    },
    {
        "name": "Duisburg",
        "lat": 51.4322,
        "long": 6.7611,
        "Zeitfaktor": 1.1950765772306147,
        "Zeitunterschied": 2173.8064516129034,
        "Distanzfaktor": 1.0052227341620057,
        "Umweg": 1262.0967741935483
    },
    {
        "name": "D\u00fcsseldorf",
        "lat": 51.2311,
        "long": 6.7724,
        "Zeitfaktor": 1.1855543795239392,
        "Zeitunterschied": 2169.60162601626,
        "Distanzfaktor": 1.0104919467763223,
        "Umweg": 2223.8130081300815
    },
    {
        "name": "Essen",
        "lat": 51.4508,
        "long": 7.0131,
        "Zeitfaktor": 1.1773045708240952,
        "Zeitunterschied": 1980.9435483870968,
        "Distanzfaktor": 1.0001267772988238,
        "Umweg": 1271.717741935484
    },
    {
        "name": "Frankfurt",
        "lat": 50.1136,
        "long": 8.6797,
        "Zeitfaktor": 1.1768798773590254,
        "Zeitunterschied": 2034.774193548387,
        "Distanzfaktor": 1.0032292378893701,
        "Umweg": 1066.0967741935483
    },
    {
        "name": "Gelsenkirchen",
        "lat": 51.5167,
        "long": 7.1,
        "Zeitfaktor": 1.1534553796566371,
        "Zeitunterschied": 1988.0,
        "Distanzfaktor": 1.0182487479488702,
        "Umweg": 3862.776859504132
    },
    {
        "name": "Halle",
        "lat": 51.4828,
        "long": 11.9697,
        "Zeitfaktor": 1.2240689180209978,
        "Zeitunterschied": 2839.298387096774,
        "Distanzfaktor": 1.0052012217878052,
        "Umweg": 2099.4435483870966
    },
    {
        "name": "Hamburg",
        "lat": 53.55,
        "long": 10.01,
        "Zeitfaktor": 1.1934029812157385,
        "Zeitunterschied": 2891.9430894308944,
        "Distanzfaktor": 1.0048497664886324,
        "Umweg": 844.739837398374
    },
    {
        "name": "Hannover",
        "lat": 52.3744,
        "long": 9.7386,
        "Zeitfaktor": 1.1957745819709567,
        "Zeitunterschied": 2227.5934959349593,
        "Distanzfaktor": 1.0056077853223135,
        "Umweg": 1749.1544715447155
    },
    {
        "name": "Karlsruhe",
        "lat": 49.0167,
        "long": 8.4,
        "Zeitfaktor": 1.1789468590793932,
        "Zeitunterschied": 2628.4758064516127,
        "Distanzfaktor": 1.0078333031282214,
        "Umweg": 2907.6612903225805
    },
    {
        "name": "Kiel",
        "lat": 54.3233,
        "long": 10.1394,
        "Zeitfaktor": 1.191599283522818,
        "Zeitunterschied": 3540.008130081301,
        "Distanzfaktor": 1.0057720326846507,
        "Umweg": 2544.2926829268295
    },
    {
        "name": "Leipzig",
        "lat": 51.35,
        "long": 12.3833,
        "Zeitfaktor": 1.2330580316502955,
        "Zeitunterschied": 3149.6209677419356,
        "Distanzfaktor": 1.0086981868225717,
        "Umweg": 2951.016129032258
    },
    {
        "name": "Magdeburg",
        "lat": 52.1278,
        "long": 11.6292,
        "Zeitfaktor": 1.2197169026547525,
        "Zeitunterschied": 2765.4112903225805,
        "Distanzfaktor": 1.0095784698418275,
        "Umweg": 2540.0887096774195
    },
    {
        "name": "Mannheim",
        "lat": 49.4878,
        "long": 8.4661,
        "Zeitfaktor": 1.1826001156885428,
        "Zeitunterschied": 2434.25,
        "Distanzfaktor": 1.0045181305178372,
        "Umweg": 1486.274193548387
    },
    {
        "name": "Munich",
        "lat": 48.1372,
        "long": 11.5755,
        "Zeitfaktor": 1.2370245313228216,
        "Zeitunterschied": 4359.354838709677,
        "Distanzfaktor": 1.0039776558092937,
        "Umweg": 2063.8709677419356
    },
    {
        "name": "M\u00f6nchengladbach",
        "lat": 51.2,
        "long": 6.4333,
        "Zeitfaktor": 1.153379079190623,
        "Zeitunterschied": 2081.8306451612902,
        "Distanzfaktor": 1.0051133228169717,
        "Umweg": 1546.524193548387
    },
    {
        "name": "M\u00fcnster",
        "lat": 51.9625,
        "long": 7.6256,
        "Zeitfaktor": 1.1661971932498194,
        "Zeitunterschied": 2146.8211382113823,
        "Distanzfaktor": 1.004046918229916,
        "Umweg": 1441.2520325203252
    },
    {
        "name": "Nuremberg",
        "lat": 49.4528,
        "long": 11.0778,
        "Zeitfaktor": 1.2106030421195844,
        "Zeitunterschied": 2923.1693548387098,
        "Distanzfaktor": 1.0067449277221139,
        "Umweg": 1987.983870967742
    },
    {
        "name": "Stuttgart",
        "lat": 48.7761,
        "long": 9.1775,
        "Zeitfaktor": 1.2287176549779626,
        "Zeitunterschied": 3413.483870967742,
        "Distanzfaktor": 1.0108805606481233,
        "Umweg": 3808.314516129032
    },
    {
        "name": "Wiesbaden",
        "lat": 50.0825,
        "long": 8.24,
        "Zeitfaktor": 1.1601366592511253,
        "Zeitunterschied": 1999.3225806451612,
        "Distanzfaktor": 1.0035319655262442,
        "Umweg": 1466.241935483871
    },
    {
        "name": "Wuppertal",
        "lat": 51.2667,
        "long": 7.1833,
        "Zeitfaktor": 1.1408570542303975,
        "Zeitunterschied": 1758.8467741935483,
        "Distanzfaktor": 1.0015744278657706,
        "Umweg": 416.93548387096774
    }
];