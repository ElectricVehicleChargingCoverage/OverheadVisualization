const cityData = [
    {
        "name": "Augsburg",
        "lat": 48.3717,
        "long": 10.8983,
        "Zeitfaktor": 1.3738430836178441,
        "Zeitunterschied": 6697.708333333333,
        "Distanzfaktor": 0.9947482082372066,
        "Umweg": -2861.5104166666665
    },
    {
        "name": "Berlin",
        "lat": 52.5167,
        "long": 13.3833,
        "Zeitfaktor": 1.4668379635505688,
        "Zeitunterschied": 7723.197916666667,
        "Distanzfaktor": 1.0088965347715106,
        "Umweg": 4374.791666666667
    },
    {
        "name": "Bielefeld",
        "lat": 52.0167,
        "long": 8.5333,
        "Zeitfaktor": 1.2767960376250123,
        "Zeitunterschied": 3311.8125,
        "Distanzfaktor": 0.9876585100552361,
        "Umweg": -4972.8125
    },
    {
        "name": "Bochum",
        "lat": 51.4833,
        "long": 7.2167,
        "Zeitfaktor": 1.2498517911919087,
        "Zeitunterschied": 3336.6354166666665,
        "Distanzfaktor": 1.0149790372588305,
        "Umweg": 5392.302083333333
    },
    {
        "name": "Bonn",
        "lat": 50.7339,
        "long": 7.0997,
        "Zeitfaktor": 1.2272317874023246,
        "Zeitunterschied": 3107.46875,
        "Distanzfaktor": 1.0268504086496322,
        "Umweg": 5233.635416666667
    },
    {
        "name": "Bremen",
        "lat": 53.1153,
        "long": 8.7975,
        "Zeitfaktor": 1.3515007455329988,
        "Zeitunterschied": 5205.166666666667,
        "Distanzfaktor": 1.0101352403266686,
        "Umweg": 2451.3020833333335
    },
    {
        "name": "Cologne",
        "lat": 50.9422,
        "long": 6.9578,
        "Zeitfaktor": 1.2264820665812164,
        "Zeitunterschied": 3117.6041666666665,
        "Distanzfaktor": 1.0047745953081586,
        "Umweg": 1942.6145833333333
    },
    {
        "name": "Dortmund",
        "lat": 51.5139,
        "long": 7.4653,
        "Zeitfaktor": 1.2430863720897727,
        "Zeitunterschied": 3255.9239130434785,
        "Distanzfaktor": 1.005590433177453,
        "Umweg": 3161.7934782608695
    },
    {
        "name": "Dresden",
        "lat": 51.0493,
        "long": 13.7384,
        "Zeitfaktor": 1.4891474969741811,
        "Zeitunterschied": 7763.3125,
        "Distanzfaktor": 1.0239294471532445,
        "Umweg": 10915.46875
    },
    {
        "name": "Duisburg",
        "lat": 51.4322,
        "long": 6.7611,
        "Zeitfaktor": 1.2246360747125478,
        "Zeitunterschied": 3044.3977272727275,
        "Distanzfaktor": 1.007628252803998,
        "Umweg": 1709.715909090909
    },
    {
        "name": "D\u00fcsseldorf",
        "lat": 51.2311,
        "long": 6.7724,
        "Zeitfaktor": 1.2418301539118028,
        "Zeitunterschied": 3308.318181818182,
        "Distanzfaktor": 1.0074888492028322,
        "Umweg": 2554.715909090909
    },
    {
        "name": "Essen",
        "lat": 51.4508,
        "long": 7.0131,
        "Zeitfaktor": 1.2283892391865698,
        "Zeitunterschied": 3127.8020833333335,
        "Distanzfaktor": 1.010926471983993,
        "Umweg": 2383.1354166666665
    },
    {
        "name": "Frankfurt",
        "lat": 50.1136,
        "long": 8.6797,
        "Zeitfaktor": 1.2764697089535493,
        "Zeitunterschied": 3197.40625,
        "Distanzfaktor": 1.0017489693814097,
        "Umweg": 534.5625
    },
    {
        "name": "Hamburg",
        "lat": 53.55,
        "long": 10.01,
        "Zeitfaktor": 1.3950946912005573,
        "Zeitunterschied": 6322.760416666667,
        "Distanzfaktor": 1.0087290795351576,
        "Umweg": 3968.6458333333335
    },
    {
        "name": "Hannover",
        "lat": 52.3744,
        "long": 9.7386,
        "Zeitfaktor": 1.3537086419485573,
        "Zeitunterschied": 4331.6875,
        "Distanzfaktor": 1.0075271875149416,
        "Umweg": 1743.5208333333333
    },
    {
        "name": "Karlsruhe",
        "lat": 49.0167,
        "long": 8.4,
        "Zeitfaktor": 1.2949369799961752,
        "Zeitunterschied": 4292.854166666667,
        "Distanzfaktor": 1.0097758411795643,
        "Umweg": 3471.1770833333335
    },
    {
        "name": "Leipzig",
        "lat": 51.35,
        "long": 12.3833,
        "Zeitfaktor": 1.4584726662909522,
        "Zeitunterschied": 6260.238095238095,
        "Distanzfaktor": 1.0101586935372253,
        "Umweg": 4352.690476190476
    },
    {
        "name": "Mannheim",
        "lat": 49.4878,
        "long": 8.4661,
        "Zeitfaktor": 1.2898740955423695,
        "Zeitunterschied": 3800.445652173913,
        "Distanzfaktor": 0.9934024079174393,
        "Umweg": -1309.2934782608695
    },
    {
        "name": "Munich",
        "lat": 48.1372,
        "long": 11.5755,
        "Zeitfaktor": 1.397218295588434,
        "Zeitunterschied": 7466.145833333333,
        "Distanzfaktor": 1.0046906733951506,
        "Umweg": 3104.0520833333335
    },
    {
        "name": "M\u00f6nchengladbach",
        "lat": 51.2,
        "long": 6.4333,
        "Zeitfaktor": 1.2337466008662705,
        "Zeitunterschied": 3395.7395833333335,
        "Distanzfaktor": 1.0032495875081873,
        "Umweg": 2555.96875
    },
    {
        "name": "M\u00fcnster",
        "lat": 51.9625,
        "long": 7.6256,
        "Zeitfaktor": 1.2330977935335394,
        "Zeitunterschied": 3370.0208333333335,
        "Distanzfaktor": 1.0039590538392524,
        "Umweg": 1479.7291666666667
    },
    {
        "name": "Nuremberg",
        "lat": 49.4528,
        "long": 11.0778,
        "Zeitfaktor": 1.3534425225063496,
        "Zeitunterschied": 4939.885416666667,
        "Distanzfaktor": 1.0067359443823662,
        "Umweg": 2289.6354166666665
    },
    {
        "name": "Stuttgart",
        "lat": 48.7761,
        "long": 9.1775,
        "Zeitfaktor": 1.3350939194044293,
        "Zeitunterschied": 4956.163043478261,
        "Distanzfaktor": 1.0115797878003572,
        "Umweg": 4459.010869565217
    },
    {
        "name": "Wiesbaden",
        "lat": 50.0825,
        "long": 8.24,
        "Zeitfaktor": 1.2531570838179527,
        "Zeitunterschied": 3122.8854166666665,
        "Distanzfaktor": 0.9991250225818095,
        "Umweg": 79.625
    },
    {
        "name": "Wuppertal",
        "lat": 51.2667,
        "long": 7.1833,
        "Zeitfaktor": 1.2032587016913907,
        "Zeitunterschied": 2923.1041666666665,
        "Distanzfaktor": 1.0100183439821964,
        "Umweg": 1730.1458333333333
    }
];