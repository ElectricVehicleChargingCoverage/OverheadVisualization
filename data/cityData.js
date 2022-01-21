const cityData = [
    {
        "name": "Aachen",
        "lat": 50.7762,
        "long": 6.0838,
        "Zeitfaktor": 1.3901084254896177,
        "Zeitunterschied": 6235.423913043478,
        "Distanzfaktor": 1.010057355566719,
        "Umweg": 4541.5
    },
    {
        "name": "Augsburg",
        "lat": 48.3717,
        "long": 10.8983,
        "Zeitfaktor": 1.4263482396429221,
        "Zeitunterschied": 7917.080645161291,
        "Distanzfaktor": 0.9930835399893849,
        "Umweg": -3407.1048387096776
    },
    {
        "name": "Berlin",
        "lat": 52.5167,
        "long": 13.3833,
        "Zeitfaktor": 1.4757036860065402,
        "Zeitunterschied": 7969.191666666667,
        "Distanzfaktor": 1.010818725693899,
        "Umweg": 5285.758333333333
    },
    {
        "name": "Bielefeld",
        "lat": 52.0167,
        "long": 8.5333,
        "Zeitfaktor": 1.3721659209304904,
        "Zeitunterschied": 4977.380952380952,
        "Distanzfaktor": 0.9854444598328305,
        "Umweg": -5984.178571428572
    },
    {
        "name": "Bochum",
        "lat": 51.4833,
        "long": 7.2167,
        "Zeitfaktor": 1.3963621025386923,
        "Zeitunterschied": 5663.547619047619,
        "Distanzfaktor": 1.0203703153852592,
        "Umweg": 7864.821428571428
    },
    {
        "name": "Bonn",
        "lat": 50.7339,
        "long": 7.0997,
        "Zeitfaktor": 1.3752007561360693,
        "Zeitunterschied": 5764.575,
        "Distanzfaktor": 1.0150291174021189,
        "Umweg": 6277.3625
    },
    {
        "name": "Braunschweig",
        "lat": 52.2692,
        "long": 10.5211,
        "Zeitfaktor": 1.4470667969395843,
        "Zeitunterschied": 5425.350877192983,
        "Distanzfaktor": 1.019089288105815,
        "Umweg": 5976.236842105263
    },
    {
        "name": "Bremen",
        "lat": 53.1153,
        "long": 8.7975,
        "Zeitfaktor": 1.37965066889503,
        "Zeitunterschied": 5672.125,
        "Distanzfaktor": 1.007825805251673,
        "Umweg": 2236.901785714286
    },
    {
        "name": "Chemnitz",
        "lat": 50.8333,
        "long": 12.9167,
        "Zeitfaktor": 1.4911185788932044,
        "Zeitunterschied": 7399.525423728814,
        "Distanzfaktor": 1.009549978451806,
        "Umweg": 4306.220338983051
    },
    {
        "name": "Cologne",
        "lat": 50.9422,
        "long": 6.9578,
        "Zeitfaktor": 1.3980927816564697,
        "Zeitunterschied": 5994.894736842105,
        "Distanzfaktor": 1.0108241657095856,
        "Umweg": 4282.355263157895
    },
    {
        "name": "Dortmund",
        "lat": 51.5139,
        "long": 7.4653,
        "Zeitfaktor": 1.3816564328578238,
        "Zeitunterschied": 5355.892857142857,
        "Distanzfaktor": 1.0162797834567256,
        "Umweg": 5902.130952380952
    },
    {
        "name": "Dresden",
        "lat": 51.0493,
        "long": 13.7384,
        "Zeitfaktor": 1.5041316973684473,
        "Zeitunterschied": 8230.266666666666,
        "Distanzfaktor": 1.0188173695670664,
        "Umweg": 9572.975
    },
    {
        "name": "Duisburg",
        "lat": 51.4322,
        "long": 6.7611,
        "Zeitfaktor": 1.385636336566252,
        "Zeitunterschied": 5667.25,
        "Distanzfaktor": 1.0089467097809286,
        "Umweg": 3241.5833333333335
    },
    {
        "name": "D\u00fcsseldorf",
        "lat": 51.2311,
        "long": 6.7724,
        "Zeitfaktor": 1.3749002291283483,
        "Zeitunterschied": 5633.928571428572,
        "Distanzfaktor": 1.0100836368018407,
        "Umweg": 4320.726190476191
    },
    {
        "name": "Essen",
        "lat": 51.4508,
        "long": 7.0131,
        "Zeitfaktor": 1.3684762772330221,
        "Zeitunterschied": 5423.619047619048,
        "Distanzfaktor": 1.0088606359401422,
        "Umweg": 3585.5714285714284
    },
    {
        "name": "Frankfurt",
        "lat": 50.1136,
        "long": 8.6797,
        "Zeitfaktor": 1.3330670433581921,
        "Zeitunterschied": 4187.724137931034,
        "Distanzfaktor": 1.0047003283767604,
        "Umweg": 1481.0172413793102
    },
    {
        "name": "Freiburg im Breisgau",
        "lat": 47.9947,
        "long": 7.8497,
        "Zeitfaktor": 1.392487725781492,
        "Zeitunterschied": 7371.484848484848,
        "Distanzfaktor": 1.0122417947587317,
        "Umweg": 6431.810606060606
    },
    {
        "name": "Gelsenkirchen",
        "lat": 51.5167,
        "long": 7.1,
        "Zeitfaktor": 1.3866717412742413,
        "Zeitunterschied": 5707.535714285715,
        "Distanzfaktor": 1.0054894262906895,
        "Umweg": 2127.535714285714
    },
    {
        "name": "Halle",
        "lat": 51.4828,
        "long": 11.9697,
        "Zeitfaktor": 1.4962786744718062,
        "Zeitunterschied": 6738.473214285715,
        "Distanzfaktor": 1.0085136517793034,
        "Umweg": 3975.339285714286
    },
    {
        "name": "Hamburg",
        "lat": 53.55,
        "long": 10.01,
        "Zeitfaktor": 1.4140708932968038,
        "Zeitunterschied": 6650.410256410257,
        "Distanzfaktor": 1.0047058037036067,
        "Umweg": 2807.6923076923076
    },
    {
        "name": "Hannover",
        "lat": 52.3744,
        "long": 9.7386,
        "Zeitfaktor": 1.3753542367028622,
        "Zeitunterschied": 4689.794642857143,
        "Distanzfaktor": 1.0049309379816012,
        "Umweg": 1615.669642857143
    },
    {
        "name": "Karlsruhe",
        "lat": 49.0167,
        "long": 8.4,
        "Zeitfaktor": 1.3657599151974344,
        "Zeitunterschied": 5736.482758620689,
        "Distanzfaktor": 1.0108329632461734,
        "Umweg": 4870.267241379311
    },
    {
        "name": "Kiel",
        "lat": 54.3233,
        "long": 10.1394,
        "Zeitfaktor": 1.3852899343099978,
        "Zeitunterschied": 7327.96875,
        "Distanzfaktor": 0.9989835959497843,
        "Umweg": 143.6484375
    },
    {
        "name": "Krefeld",
        "lat": 51.3333,
        "long": 6.5667,
        "Zeitfaktor": 1.3850578457251164,
        "Zeitunterschied": 6046.571428571428,
        "Distanzfaktor": 1.0133289124078368,
        "Umweg": 5873.047619047619
    },
    {
        "name": "Leipzig",
        "lat": 51.35,
        "long": 12.3833,
        "Zeitfaktor": 1.4649510927701657,
        "Zeitunterschied": 6646.2844827586205,
        "Distanzfaktor": 1.0079383923679999,
        "Umweg": 3541.4224137931033
    },
    {
        "name": "L\u00fcbeck",
        "lat": 53.8697,
        "long": 10.6864,
        "Zeitfaktor": 1.3935644819917694,
        "Zeitunterschied": 7035.677685950413,
        "Distanzfaktor": 0.9945446897469673,
        "Umweg": -1461.5619834710744
    },
    {
        "name": "Magdeburg",
        "lat": 52.1278,
        "long": 11.6292,
        "Zeitfaktor": 1.4556721467156675,
        "Zeitunterschied": 6109.04347826087,
        "Distanzfaktor": 1.0044635012199807,
        "Umweg": 2359.886956521739
    },
    {
        "name": "Mannheim",
        "lat": 49.4878,
        "long": 8.4661,
        "Zeitfaktor": 1.3592650299867775,
        "Zeitunterschied": 4997.933333333333,
        "Distanzfaktor": 0.9998702810816458,
        "Umweg": -302.2416666666667
    },
    {
        "name": "Munich",
        "lat": 48.1372,
        "long": 11.5755,
        "Zeitfaktor": 1.43195909486489,
        "Zeitunterschied": 8396.0703125,
        "Distanzfaktor": 1.005870543963087,
        "Umweg": 3627.7109375
    },
    {
        "name": "M\u00f6nchengladbach",
        "lat": 51.2,
        "long": 6.4333,
        "Zeitfaktor": 1.373971442600866,
        "Zeitunterschied": 5774.627906976744,
        "Distanzfaktor": 1.0092862230691693,
        "Umweg": 4945.406976744186
    },
    {
        "name": "M\u00fcnster",
        "lat": 51.9625,
        "long": 7.6256,
        "Zeitfaktor": 1.385434416048595,
        "Zeitunterschied": 5769.4875,
        "Distanzfaktor": 1.0087360072524783,
        "Umweg": 3577.6125
    },
    {
        "name": "Nuremberg",
        "lat": 49.4528,
        "long": 11.0778,
        "Zeitfaktor": 1.3911022245173368,
        "Zeitunterschied": 5719.5703125,
        "Distanzfaktor": 1.0061644609274596,
        "Umweg": 1697.8984375
    },
    {
        "name": "Stuttgart",
        "lat": 48.7761,
        "long": 9.1775,
        "Zeitfaktor": 1.3960103520602483,
        "Zeitunterschied": 6450.666666666667,
        "Distanzfaktor": 1.011882712261102,
        "Umweg": 4923.25
    },
    {
        "name": "Wiesbaden",
        "lat": 50.0825,
        "long": 8.24,
        "Zeitfaktor": 1.3188337608938114,
        "Zeitunterschied": 4237.267241379311,
        "Distanzfaktor": 1.0046621183241031,
        "Umweg": 1667.3706896551723
    },
    {
        "name": "Wuppertal",
        "lat": 51.2667,
        "long": 7.1833,
        "Zeitfaktor": 1.3586312589349763,
        "Zeitunterschied": 5245.0,
        "Distanzfaktor": 1.0100449802710663,
        "Umweg": 3491.2619047619046
    }
];