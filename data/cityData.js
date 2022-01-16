const cityData = [
    {
        "name": "Augsburg",
        "lat": 48.3717,
        "long": 10.8983,
        "Zeitfaktor": 1.334736487174802,
        "Zeitunterschied": 6097.20652173913,
        "Distanzfaktor": 0.9835242728751826,
        "Umweg": -8937.032608695652
    },
    {
        "name": "Berlin",
        "lat": 52.5167,
        "long": 13.3833,
        "Zeitfaktor": 1.4253033519769691,
        "Zeitunterschied": 7213.791666666667,
        "Distanzfaktor": 1.0087189839734452,
        "Umweg": 4052.3854166666665
    },
    {
        "name": "Bielefeld",
        "lat": 52.0167,
        "long": 8.5333,
        "Zeitfaktor": 1.2350666564102812,
        "Zeitunterschied": 2999.7083333333335,
        "Distanzfaktor": 0.985689079927471,
        "Umweg": -5486.0625
    },
    {
        "name": "Bochum",
        "lat": 51.4833,
        "long": 7.2167,
        "Zeitfaktor": 1.1959449656518035,
        "Zeitunterschied": 3093.1354166666665,
        "Distanzfaktor": 1.0199388937426872,
        "Umweg": 6110.385416666667
    },
    {
        "name": "Bonn",
        "lat": 50.7339,
        "long": 7.0997,
        "Zeitfaktor": 1.173374632358186,
        "Zeitunterschied": 2758.5,
        "Distanzfaktor": 1.0144521672223357,
        "Umweg": 4073.5208333333335
    },
    {
        "name": "Bremen",
        "lat": 53.1153,
        "long": 8.7975,
        "Zeitfaktor": 1.3080470433751878,
        "Zeitunterschied": 4741.09375,
        "Distanzfaktor": 0.9969142442156244,
        "Umweg": -1433.1666666666667
    },
    {
        "name": "Cologne",
        "lat": 50.9422,
        "long": 6.9578,
        "Zeitfaktor": 1.1972752666929518,
        "Zeitunterschied": 2959.6458333333335,
        "Distanzfaktor": 1.012228847679778,
        "Umweg": 2814.25
    },
    {
        "name": "Dortmund",
        "lat": 51.5139,
        "long": 7.4653,
        "Zeitfaktor": 1.1829107325201607,
        "Zeitunterschied": 2891.4105263157894,
        "Distanzfaktor": 1.0108638810386275,
        "Umweg": 3561.7473684210527
    },
    {
        "name": "Dresden",
        "lat": 51.0493,
        "long": 13.7384,
        "Zeitfaktor": 1.4398050503554998,
        "Zeitunterschied": 7227.802083333333,
        "Distanzfaktor": 1.010732540090307,
        "Umweg": 5187.75
    },
    {
        "name": "Duisburg",
        "lat": 51.4322,
        "long": 6.7611,
        "Zeitfaktor": 1.182740013394722,
        "Zeitunterschied": 2969.5208333333335,
        "Distanzfaktor": 1.0053066220223885,
        "Umweg": 2340.6041666666665
    },
    {
        "name": "D\u00fcsseldorf",
        "lat": 51.2311,
        "long": 6.7724,
        "Zeitfaktor": 1.1774839107819395,
        "Zeitunterschied": 2886.9479166666665,
        "Distanzfaktor": 1.001402780439556,
        "Umweg": 1696.7291666666667
    },
    {
        "name": "Essen",
        "lat": 51.4508,
        "long": 7.0131,
        "Zeitfaktor": 1.1704004123023255,
        "Zeitunterschied": 2843.1770833333335,
        "Distanzfaktor": 0.9931501254250404,
        "Umweg": 877.71875
    },
    {
        "name": "Frankfurt",
        "lat": 50.1136,
        "long": 8.6797,
        "Zeitfaktor": 1.242730252961881,
        "Zeitunterschied": 2947.705263157895,
        "Distanzfaktor": 1.0014784998147321,
        "Umweg": 760.2947368421053
    },
    {
        "name": "Hamburg",
        "lat": 53.55,
        "long": 10.01,
        "Zeitfaktor": 1.3653870509558568,
        "Zeitunterschied": 5916.3125,
        "Distanzfaktor": 1.003130948798122,
        "Umweg": 1149.3125
    },
    {
        "name": "Hannover",
        "lat": 52.3744,
        "long": 9.7386,
        "Zeitfaktor": 1.277750298268089,
        "Zeitunterschied": 3676.351063829787,
        "Distanzfaktor": 1.0031305160247947,
        "Umweg": 735.4148936170212
    },
    {
        "name": "Karlsruhe",
        "lat": 49.0167,
        "long": 8.4,
        "Zeitfaktor": 1.2678969848368724,
        "Zeitunterschied": 4045.6979166666665,
        "Distanzfaktor": 1.0080694951680602,
        "Umweg": 3037.1458333333335
    },
    {
        "name": "Leipzig",
        "lat": 51.35,
        "long": 12.3833,
        "Zeitfaktor": 1.4015787048808834,
        "Zeitunterschied": 5730.301075268817,
        "Distanzfaktor": 1.0092628970878452,
        "Umweg": 3808.1075268817203
    },
    {
        "name": "Mannheim",
        "lat": 49.4878,
        "long": 8.4661,
        "Zeitfaktor": 1.2652931907119953,
        "Zeitunterschied": 3634.9166666666665,
        "Distanzfaktor": 1.0025086291781817,
        "Umweg": 1121.7395833333333
    },
    {
        "name": "Munich",
        "lat": 48.1372,
        "long": 11.5755,
        "Zeitfaktor": 1.37655437541845,
        "Zeitunterschied": 7244.208333333333,
        "Distanzfaktor": 1.0029451733513526,
        "Umweg": 2791.0416666666665
    },
    {
        "name": "M\u00f6nchengladbach",
        "lat": 51.2,
        "long": 6.4333,
        "Zeitfaktor": 1.1836386275701754,
        "Zeitunterschied": 3074.1666666666665,
        "Distanzfaktor": 0.9993181406342019,
        "Umweg": 1984.875
    },
    {
        "name": "M\u00fcnster",
        "lat": 51.9625,
        "long": 7.6256,
        "Zeitfaktor": 1.1960428951247344,
        "Zeitunterschied": 3166.776595744681,
        "Distanzfaktor": 1.006027700030107,
        "Umweg": 2673.7659574468084
    },
    {
        "name": "Nuremberg",
        "lat": 49.4528,
        "long": 11.0778,
        "Zeitfaktor": 1.3283764398910165,
        "Zeitunterschied": 4726.125,
        "Distanzfaktor": 1.006148981241675,
        "Umweg": 2260.28125
    },
    {
        "name": "Stuttgart",
        "lat": 48.7761,
        "long": 9.1775,
        "Zeitfaktor": 1.3079412651119486,
        "Zeitunterschied": 4838.802083333333,
        "Distanzfaktor": 1.0127978245530072,
        "Umweg": 5797.4375
    },
    {
        "name": "Wiesbaden",
        "lat": 50.0825,
        "long": 8.24,
        "Zeitfaktor": 1.229754760133758,
        "Zeitunterschied": 2940.90625,
        "Distanzfaktor": 1.0052040990761475,
        "Umweg": 1209.4166666666667
    },
    {
        "name": "Wuppertal",
        "lat": 51.2667,
        "long": 7.1833,
        "Zeitfaktor": 1.1585815983242658,
        "Zeitunterschied": 2688.3333333333335,
        "Distanzfaktor": 1.0045077248638237,
        "Umweg": 1423.9479166666667
    }
];