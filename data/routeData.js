const routeData = [
    {
        "Start": "Berlin",
        "Ziel": "Hamburg",
        "start_lat": 52.5167,
        "start_long": 13.3833,
        "dest_lat": 53.55,
        "dest_long": 10.01,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 284058,
                "dauer": 10027,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 1,
                "legs": [
                    {
                        "lengthInMeters": 284058,
                        "travelTimeInSeconds": 10027,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 290434,
                "dauer": 14101,
                "verbrauch": 89.208784,
                "restreichweite": 16.687254842181822,
                "ladezeit": 3480,
                "routen_id": 91,
                "legs": [
                    {
                        "lengthInMeters": 173550,
                        "travelTimeInSeconds": 6659,
                        "batteryConsumptionInkWh": 52.161362909090904,
                        "remainingChargeAtArrivalInkWh": 14.158637090909103,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.73467593309091,
                        "chargingTimeInSeconds": 3480,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024216894,
                        "chargingParkName": "Neustadt-Glewe Markt"
                    },
                    {
                        "lengthInMeters": 116884,
                        "travelTimeInSeconds": 3962,
                        "batteryConsumptionInkWh": 37.04742109090909,
                        "remainingChargeAtArrivalInkWh": 16.687254842181822,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 292673,
                "dauer": 15473,
                "verbrauch": 65.69120790909092,
                "restreichweite": 9.044616833090911,
                "ladezeit": 4489,
                "routen_id": 92,
                "legs": [
                    {
                        "lengthInMeters": 103824,
                        "travelTimeInSeconds": 4692,
                        "batteryConsumptionInkWh": 19.671773545454545,
                        "remainingChargeAtArrivalInkWh": 16.328226454545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.54874274327273,
                        "chargingTimeInSeconds": 1082,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292853,
                        "chargingParkName": "E.ON Heiligengrabe"
                    },
                    {
                        "lengthInMeters": 70022,
                        "travelTimeInSeconds": 2088,
                        "batteryConsumptionInkWh": 18.003735272727276,
                        "remainingChargeAtArrivalInkWh": 4.545007470545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.35,
                        "chargingTimeInSeconds": 1590,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024216894,
                        "chargingParkName": "Neustadt-Glewe Markt"
                    },
                    {
                        "lengthInMeters": 59596,
                        "travelTimeInSeconds": 1912,
                        "batteryConsumptionInkWh": 14.707282545454548,
                        "remainingChargeAtArrivalInkWh": 4.642717454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.353033378545458,
                        "chargingTimeInSeconds": 1817,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025516788,
                        "chargingParkName": "Gallin Am Heisterbusch"
                    },
                    {
                        "lengthInMeters": 59231,
                        "travelTimeInSeconds": 2292,
                        "batteryConsumptionInkWh": 13.308416545454547,
                        "remainingChargeAtArrivalInkWh": 9.044616833090911,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 286347,
                "dauer": 14802,
                "verbrauch": 59.61119127272728,
                "restreichweite": 7.608883127272726,
                "ladezeit": 4388,
                "routen_id": 93,
                "legs": [
                    {
                        "lengthInMeters": 103824,
                        "travelTimeInSeconds": 4692,
                        "batteryConsumptionInkWh": 17.986308363636365,
                        "remainingChargeAtArrivalInkWh": 12.253691636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.483999999999995,
                        "chargingTimeInSeconds": 2386,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292853,
                        "chargingParkName": "E.ON Heiligengrabe"
                    },
                    {
                        "lengthInMeters": 106646,
                        "travelTimeInSeconds": 2954,
                        "batteryConsumptionInkWh": 25.52451490909091,
                        "remainingChargeAtArrivalInkWh": 3.9594850909090837,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.709251127272726,
                        "chargingTimeInSeconds": 2002,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024814564,
                        "chargingParkName": "Comfort Charge Wittenburg Pappelweg"
                    },
                    {
                        "lengthInMeters": 75877,
                        "travelTimeInSeconds": 2768,
                        "batteryConsumptionInkWh": 16.100368,
                        "remainingChargeAtArrivalInkWh": 7.608883127272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Berlin",
        "Ziel": "Munich",
        "start_lat": 52.5167,
        "start_long": 13.3833,
        "dest_lat": 48.1372,
        "dest_long": 11.5755,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 583909,
                "dauer": 18679,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 2,
                "legs": [
                    {
                        "lengthInMeters": 583909,
                        "travelTimeInSeconds": 18679,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 597034,
                "dauer": 32228,
                "verbrauch": 194.57932072727272,
                "restreichweite": 16.686410331636367,
                "ladezeit": 12625,
                "routen_id": 94,
                "legs": [
                    {
                        "lengthInMeters": 176480,
                        "travelTimeInSeconds": 6651,
                        "batteryConsumptionInkWh": 54.88107927272727,
                        "remainingChargeAtArrivalInkWh": 11.438920727272738,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 37.305,
                        "chargingTimeInSeconds": 2370,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815018,
                        "chargingParkName": "innogy Leuna Nova Eventis"
                    },
                    {
                        "lengthInMeters": 86195,
                        "travelTimeInSeconds": 2595,
                        "batteryConsumptionInkWh": 28.88889818181818,
                        "remainingChargeAtArrivalInkWh": 8.416101818181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 43.108000000000004,
                        "chargingTimeInSeconds": 3001,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306623,
                        "chargingParkName": "Neustadt an der Orla Thomas-M\u00fcntzer-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 87842,
                        "travelTimeInSeconds": 2690,
                        "batteryConsumptionInkWh": 29.615686545454544,
                        "remainingChargeAtArrivalInkWh": 13.49231345454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.056000000000004,
                        "chargingTimeInSeconds": 3467,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023640001,
                        "chargingParkName": "Himmelkron Bernecker Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 132605,
                        "travelTimeInSeconds": 3799,
                        "batteryConsumptionInkWh": 44.56849090909091,
                        "remainingChargeAtArrivalInkWh": 8.487509090909093,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.31157614981819,
                        "chargingTimeInSeconds": 3787,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 113912,
                        "travelTimeInSeconds": 3869,
                        "batteryConsumptionInkWh": 36.62516581818182,
                        "remainingChargeAtArrivalInkWh": 16.686410331636367,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 587696,
                "dauer": 31684,
                "verbrauch": 146.21105927272728,
                "restreichweite": 9.042032156909093,
                "ladezeit": 12008,
                "routen_id": 95,
                "legs": [
                    {
                        "lengthInMeters": 109454,
                        "travelTimeInSeconds": 4247,
                        "batteryConsumptionInkWh": 26.063240636363638,
                        "remainingChargeAtArrivalInkWh": 9.936759363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 1929,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518946,
                        "chargingParkName": "Coswig (Anhalt) Fichtenbreite"
                    },
                    {
                        "lengthInMeters": 98800,
                        "travelTimeInSeconds": 3488,
                        "batteryConsumptionInkWh": 23.238332090909093,
                        "remainingChargeAtArrivalInkWh": 4.661667909090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.35,
                        "chargingTimeInSeconds": 2280,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303802,
                        "chargingParkName": "Mer Teuchern"
                    },
                    {
                        "lengthInMeters": 86291,
                        "travelTimeInSeconds": 2563,
                        "batteryConsumptionInkWh": 23.487381272727276,
                        "remainingChargeAtArrivalInkWh": 4.862618727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2198,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291682,
                        "chargingParkName": "E.ON Berg Am Hohen Rain"
                    },
                    {
                        "lengthInMeters": 87290,
                        "travelTimeInSeconds": 2640,
                        "batteryConsumptionInkWh": 22.83379572727273,
                        "remainingChargeAtArrivalInkWh": 4.61620427272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.35,
                        "chargingTimeInSeconds": 2283,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291955,
                        "chargingParkName": "E.ON Pegnitz"
                    },
                    {
                        "lengthInMeters": 91341,
                        "travelTimeInSeconds": 2747,
                        "batteryConsumptionInkWh": 23.397242272727276,
                        "remainingChargeAtArrivalInkWh": 4.952757727272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.8,
                        "chargingTimeInSeconds": 1601,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 62672,
                        "travelTimeInSeconds": 1961,
                        "batteryConsumptionInkWh": 15.17498881818182,
                        "remainingChargeAtArrivalInkWh": 4.625011181818181,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.05811061145455,
                        "chargingTimeInSeconds": 1717,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295594,
                        "chargingParkName": "E.ON Schweitenkirchen An der Autobahn"
                    },
                    {
                        "lengthInMeters": 51848,
                        "travelTimeInSeconds": 2030,
                        "batteryConsumptionInkWh": 12.016078454545456,
                        "remainingChargeAtArrivalInkWh": 9.042032156909093,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 593169,
                "dauer": 31272,
                "verbrauch": 132.69001599999999,
                "restreichweite": 7.596871659636365,
                "ladezeit": 11631,
                "routen_id": 96,
                "legs": [
                    {
                        "lengthInMeters": 109454,
                        "travelTimeInSeconds": 4247,
                        "batteryConsumptionInkWh": 23.635163636363636,
                        "remainingChargeAtArrivalInkWh": 6.6048363636363625,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1792,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518946,
                        "chargingParkName": "Coswig (Anhalt) Fichtenbreite"
                    },
                    {
                        "lengthInMeters": 92488,
                        "travelTimeInSeconds": 3185,
                        "batteryConsumptionInkWh": 19.06815127272727,
                        "remainingChargeAtArrivalInkWh": 3.989848727272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.971999999999998,
                        "chargingTimeInSeconds": 2556,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521734,
                        "chargingParkName": "Wei\u00dfenfels Selauer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 98076,
                        "travelTimeInSeconds": 2831,
                        "batteryConsumptionInkWh": 24.00402909090909,
                        "remainingChargeAtArrivalInkWh": 3.9679709090909085,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2067,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291682,
                        "chargingParkName": "E.ON Berg Am Hohen Rain"
                    },
                    {
                        "lengthInMeters": 87290,
                        "travelTimeInSeconds": 2641,
                        "batteryConsumptionInkWh": 20.423938909090907,
                        "remainingChargeAtArrivalInkWh": 4.14606109090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2086,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291955,
                        "chargingParkName": "E.ON Pegnitz"
                    },
                    {
                        "lengthInMeters": 91341,
                        "travelTimeInSeconds": 2747,
                        "batteryConsumptionInkWh": 21.02260218181818,
                        "remainingChargeAtArrivalInkWh": 3.9253978181818177,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.766,
                        "chargingTimeInSeconds": 1543,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 62672,
                        "travelTimeInSeconds": 1961,
                        "batteryConsumptionInkWh": 13.66030109090909,
                        "remainingChargeAtArrivalInkWh": 4.105698909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.472701477818184,
                        "chargingTimeInSeconds": 1587,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295594,
                        "chargingParkName": "E.ON Schweitenkirchen An der Autobahn"
                    },
                    {
                        "lengthInMeters": 51848,
                        "travelTimeInSeconds": 2030,
                        "batteryConsumptionInkWh": 10.875829818181819,
                        "remainingChargeAtArrivalInkWh": 7.596871659636365,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Berlin",
        "Ziel": "Cologne",
        "start_lat": 52.5167,
        "start_long": 13.3833,
        "dest_lat": 50.9422,
        "dest_long": 6.9578,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 573812,
                "dauer": 18516,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 3,
                "legs": [
                    {
                        "lengthInMeters": 573812,
                        "travelTimeInSeconds": 18516,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 581997,
                "dauer": 31063,
                "verbrauch": 182.92023272727275,
                "restreichweite": 16.68447542981818,
                "ladezeit": 11735,
                "routen_id": 97,
                "legs": [
                    {
                        "lengthInMeters": 155859,
                        "travelTimeInSeconds": 5826,
                        "batteryConsumptionInkWh": 49.14400145454546,
                        "remainingChargeAtArrivalInkWh": 17.175998545454547,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 51.398,
                        "chargingTimeInSeconds": 3118,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024223970,
                        "chargingParkName": "E.ON Hohe B\u00f6rde Braunschweiger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 141225,
                        "travelTimeInSeconds": 4408,
                        "batteryConsumptionInkWh": 42.955237818181814,
                        "remainingChargeAtArrivalInkWh": 8.442762181818189,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.963,
                        "chargingTimeInSeconds": 2678,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295170,
                        "chargingParkName": "E.ON Garbsen"
                    },
                    {
                        "lengthInMeters": 91453,
                        "travelTimeInSeconds": 2864,
                        "batteryConsumptionInkWh": 30.326820363636365,
                        "remainingChargeAtArrivalInkWh": 8.636179636363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 33.160000000000004,
                        "chargingTimeInSeconds": 2217,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024225638,
                        "chargingParkName": "innogy Stieghorst Detmolder Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 75052,
                        "travelTimeInSeconds": 2133,
                        "batteryConsumptionInkWh": 24.83645818181818,
                        "remainingChargeAtArrivalInkWh": 8.323541818181823,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 52.34219033890909,
                        "chargingTimeInSeconds": 3722,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378440,
                        "chargingParkName": "innogy Hamm Unnaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 118408,
                        "travelTimeInSeconds": 4098,
                        "batteryConsumptionInkWh": 35.65771490909091,
                        "remainingChargeAtArrivalInkWh": 16.68447542981818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 576507,
                "dauer": 30890,
                "verbrauch": 136.32802845454546,
                "restreichweite": 9.054184844181819,
                "ladezeit": 11537,
                "routen_id": 98,
                "legs": [
                    {
                        "lengthInMeters": 96064,
                        "travelTimeInSeconds": 3993,
                        "batteryConsumptionInkWh": 21.81602372727273,
                        "remainingChargeAtArrivalInkWh": 14.183976272727271,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 1627,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296167,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 94645,
                        "travelTimeInSeconds": 3148,
                        "batteryConsumptionInkWh": 22.60673672727273,
                        "remainingChargeAtArrivalInkWh": 4.84326327272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.0,
                        "chargingTimeInSeconds": 3533,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517109,
                        "chargingParkName": "Volkswagen Helmstedt Konrad-Adenauer-Platz"
                    },
                    {
                        "lengthInMeters": 131831,
                        "travelTimeInSeconds": 3997,
                        "batteryConsumptionInkWh": 31.210810272727276,
                        "remainingChargeAtArrivalInkWh": 4.789189727272724,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.55,
                        "chargingTimeInSeconds": 2134,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302799,
                        "chargingParkName": "E.ON Auetal Schafstrift"
                    },
                    {
                        "lengthInMeters": 88054,
                        "travelTimeInSeconds": 2695,
                        "batteryConsumptionInkWh": 21.942674727272728,
                        "remainingChargeAtArrivalInkWh": 4.607325272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.650000000000002,
                        "chargingTimeInSeconds": 2075,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291527,
                        "chargingParkName": "E.ON G\u00fctersloh"
                    },
                    {
                        "lengthInMeters": 76985,
                        "travelTimeInSeconds": 2260,
                        "batteryConsumptionInkWh": 20.65936090909091,
                        "remainingChargeAtArrivalInkWh": 4.990639090909092,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.14660693509091,
                        "chargingTimeInSeconds": 2168,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293359,
                        "chargingParkName": "E.ON Aplerbeck"
                    },
                    {
                        "lengthInMeters": 88928,
                        "travelTimeInSeconds": 3260,
                        "batteryConsumptionInkWh": 18.092422090909093,
                        "remainingChargeAtArrivalInkWh": 9.054184844181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 576543,
                "dauer": 30266,
                "verbrauch": 123.0445498181818,
                "restreichweite": 7.60755872,
                "ladezeit": 10721,
                "routen_id": 99,
                "legs": [
                    {
                        "lengthInMeters": 96064,
                        "travelTimeInSeconds": 3993,
                        "batteryConsumptionInkWh": 19.818551272727273,
                        "remainingChargeAtArrivalInkWh": 10.421448727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 13.985999999999999,
                        "chargingTimeInSeconds": 860,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296167,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 45474,
                        "travelTimeInSeconds": 1702,
                        "batteryConsumptionInkWh": 9.86970909090909,
                        "remainingChargeAtArrivalInkWh": 4.116290909090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.923999999999992,
                        "chargingTimeInSeconds": 1853,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 83405,
                        "travelTimeInSeconds": 2597,
                        "batteryConsumptionInkWh": 18.05784,
                        "remainingChargeAtArrivalInkWh": 3.8661599999999936,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2073,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222760,
                        "chargingParkName": "Bienrode-Waggum-Bevenrode Lilienthalplatz"
                    },
                    {
                        "lengthInMeters": 97633,
                        "travelTimeInSeconds": 3032,
                        "batteryConsumptionInkWh": 20.757038545454545,
                        "remainingChargeAtArrivalInkWh": 3.8129614545454515,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2018,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302799,
                        "chargingParkName": "E.ON Auetal Schafstrift"
                    },
                    {
                        "lengthInMeters": 88054,
                        "travelTimeInSeconds": 2695,
                        "batteryConsumptionInkWh": 19.696928,
                        "remainingChargeAtArrivalInkWh": 4.117071999999997,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999996,
                        "chargingTimeInSeconds": 1912,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291527,
                        "chargingParkName": "E.ON G\u00fctersloh"
                    },
                    {
                        "lengthInMeters": 76985,
                        "travelTimeInSeconds": 2265,
                        "batteryConsumptionInkWh": 18.62512290909091,
                        "remainingChargeAtArrivalInkWh": 4.054877090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.82691872,
                        "chargingTimeInSeconds": 2005,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293359,
                        "chargingParkName": "E.ON Aplerbeck"
                    },
                    {
                        "lengthInMeters": 88928,
                        "travelTimeInSeconds": 3260,
                        "batteryConsumptionInkWh": 16.219359999999998,
                        "remainingChargeAtArrivalInkWh": 7.60755872,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Berlin",
        "Ziel": "Frankfurt",
        "start_lat": 52.5167,
        "start_long": 13.3833,
        "dest_lat": 50.1136,
        "dest_long": 8.6797,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 547433,
                "dauer": 17334,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 4,
                "legs": [
                    {
                        "lengthInMeters": 547433,
                        "travelTimeInSeconds": 17334,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 547849,
                "dauer": 29026,
                "verbrauch": 177.49353236363635,
                "restreichweite": 16.684380250181817,
                "ladezeit": 10908,
                "routen_id": 100,
                "legs": [
                    {
                        "lengthInMeters": 176480,
                        "travelTimeInSeconds": 6651,
                        "batteryConsumptionInkWh": 54.88107927272727,
                        "remainingChargeAtArrivalInkWh": 11.438920727272738,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.056000000000004,
                        "chargingTimeInSeconds": 3590,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815018,
                        "chargingParkName": "innogy Leuna Nova Eventis"
                    },
                    {
                        "lengthInMeters": 131973,
                        "travelTimeInSeconds": 3816,
                        "batteryConsumptionInkWh": 44.43281818181818,
                        "remainingChargeAtArrivalInkWh": 8.623181818181827,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 51.398,
                        "chargingTimeInSeconds": 3631,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222591,
                        "chargingParkName": "TEAG Amt Wachsenburg Th\u00f6reyer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 123414,
                        "travelTimeInSeconds": 3828,
                        "batteryConsumptionInkWh": 42.56950981818182,
                        "remainingChargeAtArrivalInkWh": 8.828490181818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 52.29450534109091,
                        "chargingTimeInSeconds": 3687,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306390,
                        "chargingParkName": "Mer Breitenbach am Herzberg"
                    },
                    {
                        "lengthInMeters": 115982,
                        "travelTimeInSeconds": 3824,
                        "batteryConsumptionInkWh": 35.610125090909094,
                        "remainingChargeAtArrivalInkWh": 16.684380250181817,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 550708,
                "dauer": 30005,
                "verbrauch": 134.1091983636364,
                "restreichweite": 9.035697324909089,
                "ladezeit": 11071,
                "routen_id": 101,
                "legs": [
                    {
                        "lengthInMeters": 109454,
                        "travelTimeInSeconds": 4247,
                        "batteryConsumptionInkWh": 26.063240636363638,
                        "remainingChargeAtArrivalInkWh": 9.936759363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 1929,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518946,
                        "chargingParkName": "Coswig (Anhalt) Fichtenbreite"
                    },
                    {
                        "lengthInMeters": 98800,
                        "travelTimeInSeconds": 3488,
                        "batteryConsumptionInkWh": 23.238332090909093,
                        "remainingChargeAtArrivalInkWh": 4.661667909090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.5,
                        "chargingTimeInSeconds": 1827,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303802,
                        "chargingParkName": "Mer Teuchern"
                    },
                    {
                        "lengthInMeters": 71901,
                        "travelTimeInSeconds": 2331,
                        "batteryConsumptionInkWh": 17.952805181818185,
                        "remainingChargeAtArrivalInkWh": 4.547194818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2252,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303103,
                        "chargingParkName": "Weimar Schustergasse"
                    },
                    {
                        "lengthInMeters": 83430,
                        "travelTimeInSeconds": 2323,
                        "batteryConsumptionInkWh": 23.029217909090914,
                        "remainingChargeAtArrivalInkWh": 4.870782090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.6,
                        "chargingTimeInSeconds": 1745,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023656605,
                        "chargingParkName": "Krauthausen Am Marktrasen"
                    },
                    {
                        "lengthInMeters": 68467,
                        "travelTimeInSeconds": 2407,
                        "batteryConsumptionInkWh": 16.764505545454547,
                        "remainingChargeAtArrivalInkWh": 4.835494454545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.95,
                        "chargingTimeInSeconds": 1852,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306390,
                        "chargingParkName": "Mer Breitenbach am Herzberg"
                    },
                    {
                        "lengthInMeters": 77495,
                        "travelTimeInSeconds": 2350,
                        "batteryConsumptionInkWh": 18.21243454545455,
                        "remainingChargeAtArrivalInkWh": 4.73756545454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.884359779454545,
                        "chargingTimeInSeconds": 1466,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517763,
                        "chargingParkName": "Butzbach Marie-Curie-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 41161,
                        "travelTimeInSeconds": 1788,
                        "batteryConsumptionInkWh": 8.848662454545456,
                        "remainingChargeAtArrivalInkWh": 9.035697324909089,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 554332,
                "dauer": 28722,
                "verbrauch": 121.50564509090908,
                "restreichweite": 7.605940194909088,
                "ladezeit": 10231,
                "routen_id": 102,
                "legs": [
                    {
                        "lengthInMeters": 109454,
                        "travelTimeInSeconds": 4247,
                        "batteryConsumptionInkWh": 23.635163636363636,
                        "remainingChargeAtArrivalInkWh": 6.6048363636363625,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1792,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518946,
                        "chargingParkName": "Coswig (Anhalt) Fichtenbreite"
                    },
                    {
                        "lengthInMeters": 92488,
                        "travelTimeInSeconds": 3185,
                        "batteryConsumptionInkWh": 19.06815127272727,
                        "remainingChargeAtArrivalInkWh": 3.989848727272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1949,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521734,
                        "chargingParkName": "Wei\u00dfenfels Selauer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 83686,
                        "travelTimeInSeconds": 2600,
                        "batteryConsumptionInkWh": 19.06016,
                        "remainingChargeAtArrivalInkWh": 3.9978399999999965,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2065,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303103,
                        "chargingParkName": "Weimar Schustergasse"
                    },
                    {
                        "lengthInMeters": 83430,
                        "travelTimeInSeconds": 2323,
                        "batteryConsumptionInkWh": 20.714840727272726,
                        "remainingChargeAtArrivalInkWh": 3.8551592727272705,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.593999999999998,
                        "chargingTimeInSeconds": 2478,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023656605,
                        "chargingParkName": "Krauthausen Am Marktrasen"
                    },
                    {
                        "lengthInMeters": 110675,
                        "travelTimeInSeconds": 3486,
                        "batteryConsumptionInkWh": 23.617231999999998,
                        "remainingChargeAtArrivalInkWh": 3.976768,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.016037649454542,
                        "chargingTimeInSeconds": 1947,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009007355771,
                        "chargingParkName": "Allego M\u00fccke Gottesrain"
                    },
                    {
                        "lengthInMeters": 74599,
                        "travelTimeInSeconds": 2650,
                        "batteryConsumptionInkWh": 15.410097454545454,
                        "remainingChargeAtArrivalInkWh": 7.605940194909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Berlin",
        "Ziel": "Bremen",
        "start_lat": 52.5167,
        "start_long": 13.3833,
        "dest_lat": 53.1153,
        "dest_long": 8.7975,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 391419,
                "dauer": 12402,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 5,
                "legs": [
                    {
                        "lengthInMeters": 391419,
                        "travelTimeInSeconds": 12402,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 396379,
                "dauer": 20587,
                "verbrauch": 123.28392872727274,
                "restreichweite": 16.655252776727274,
                "ladezeit": 6888,
                "routen_id": 103,
                "legs": [
                    {
                        "lengthInMeters": 141486,
                        "travelTimeInSeconds": 5347,
                        "batteryConsumptionInkWh": 44.34661381818182,
                        "remainingChargeAtArrivalInkWh": 21.973386181818185,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.963,
                        "chargingTimeInSeconds": 1866,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 97233,
                        "travelTimeInSeconds": 3183,
                        "batteryConsumptionInkWh": 30.424713454545454,
                        "remainingChargeAtArrivalInkWh": 8.538286545454547,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.476000000000006,
                        "chargingTimeInSeconds": 2480,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026307073,
                        "chargingParkName": "E.ON Wendeburg"
                    },
                    {
                        "lengthInMeters": 90209,
                        "travelTimeInSeconds": 2904,
                        "batteryConsumptionInkWh": 27.67535781818182,
                        "remainingChargeAtArrivalInkWh": 8.800642181818187,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 37.49249641309091,
                        "chargingTimeInSeconds": 2542,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025357735,
                        "chargingParkName": "Comfort Charge Walsrode Saarstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 67451,
                        "travelTimeInSeconds": 2265,
                        "batteryConsumptionInkWh": 20.837243636363638,
                        "remainingChargeAtArrivalInkWh": 16.655252776727274,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 399409,
                "dauer": 21018,
                "verbrauch": 93.25859772727273,
                "restreichweite": 9.036011825999998,
                "ladezeit": 7081,
                "routen_id": 104,
                "legs": [
                    {
                        "lengthInMeters": 96064,
                        "travelTimeInSeconds": 3993,
                        "batteryConsumptionInkWh": 21.81602372727273,
                        "remainingChargeAtArrivalInkWh": 14.183976272727271,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 1627,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296167,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 94645,
                        "travelTimeInSeconds": 3148,
                        "batteryConsumptionInkWh": 22.60673672727273,
                        "remainingChargeAtArrivalInkWh": 4.84326327272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.25,
                        "chargingTimeInSeconds": 1642,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517109,
                        "chargingParkName": "Volkswagen Helmstedt Konrad-Adenauer-Platz"
                    },
                    {
                        "lengthInMeters": 66929,
                        "travelTimeInSeconds": 2179,
                        "batteryConsumptionInkWh": 15.464491636363636,
                        "remainingChargeAtArrivalInkWh": 4.785508363636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2343,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294750,
                        "chargingParkName": "Volkswagen Lehrte Hermesstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 100371,
                        "travelTimeInSeconds": 3060,
                        "batteryConsumptionInkWh": 24.36543263636364,
                        "remainingChargeAtArrivalInkWh": 4.884567363636361,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.041924826,
                        "chargingTimeInSeconds": 1469,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303503,
                        "chargingParkName": "Total Verden (Aller) Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 41400,
                        "travelTimeInSeconds": 1557,
                        "batteryConsumptionInkWh": 9.005913000000001,
                        "remainingChargeAtArrivalInkWh": 9.036011825999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 413507,
                "dauer": 21594,
                "verbrauch": 86.41635636363637,
                "restreichweite": 7.595717602909092,
                "ladezeit": 7009,
                "routen_id": 105,
                "legs": [
                    {
                        "lengthInMeters": 103824,
                        "travelTimeInSeconds": 4693,
                        "batteryConsumptionInkWh": 17.984554181818183,
                        "remainingChargeAtArrivalInkWh": 12.255445818181816,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.411999999999995,
                        "chargingTimeInSeconds": 1232,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292853,
                        "chargingParkName": "E.ON Heiligengrabe"
                    },
                    {
                        "lengthInMeters": 70022,
                        "travelTimeInSeconds": 2088,
                        "batteryConsumptionInkWh": 16.298785454545452,
                        "remainingChargeAtArrivalInkWh": 4.113214545454543,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.837999999999997,
                        "chargingTimeInSeconds": 2291,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024216894,
                        "chargingParkName": "Neustadt-Glewe Markt"
                    },
                    {
                        "lengthInMeters": 100863,
                        "travelTimeInSeconds": 3096,
                        "batteryConsumptionInkWh": 22.976565818181818,
                        "remainingChargeAtArrivalInkWh": 3.861434181818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999996,
                        "chargingTimeInSeconds": 1927,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378560,
                        "chargingParkName": "Reinbek Grenzweg"
                    },
                    {
                        "lengthInMeters": 90633,
                        "travelTimeInSeconds": 3028,
                        "batteryConsumptionInkWh": 18.857649454545456,
                        "remainingChargeAtArrivalInkWh": 3.8223505454545403,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.894519057454545,
                        "chargingTimeInSeconds": 1559,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377078,
                        "chargingParkName": "EWE Gyhum An der Autobahn"
                    },
                    {
                        "lengthInMeters": 48165,
                        "travelTimeInSeconds": 1681,
                        "batteryConsumptionInkWh": 10.298801454545453,
                        "remainingChargeAtArrivalInkWh": 7.595717602909092,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Berlin",
        "Ziel": "Stuttgart",
        "start_lat": 52.5167,
        "start_long": 13.3833,
        "dest_lat": 48.7761,
        "dest_long": 9.1775,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 631853,
                "dauer": 20275,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 6,
                "legs": [
                    {
                        "lengthInMeters": 631853,
                        "travelTimeInSeconds": 20275,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 644861,
                "dauer": 34653,
                "verbrauch": 209.38163272727274,
                "restreichweite": 16.678645677090906,
                "ladezeit": 13706,
                "routen_id": 106,
                "legs": [
                    {
                        "lengthInMeters": 176480,
                        "travelTimeInSeconds": 6651,
                        "batteryConsumptionInkWh": 54.88107927272727,
                        "remainingChargeAtArrivalInkWh": 11.438920727272738,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.569,
                        "chargingTimeInSeconds": 3398,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815018,
                        "chargingParkName": "innogy Leuna Nova Eventis"
                    },
                    {
                        "lengthInMeters": 118770,
                        "travelTimeInSeconds": 3367,
                        "batteryConsumptionInkWh": 42.10321309090909,
                        "remainingChargeAtArrivalInkWh": 8.465786909090916,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 47.25300000000001,
                        "chargingTimeInSeconds": 3319,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291682,
                        "chargingParkName": "E.ON Berg Am Hohen Rain"
                    },
                    {
                        "lengthInMeters": 115402,
                        "travelTimeInSeconds": 3270,
                        "batteryConsumptionInkWh": 38.183941090909094,
                        "remainingChargeAtArrivalInkWh": 9.069058909090913,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.569,
                        "chargingTimeInSeconds": 3540,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023657881,
                        "chargingParkName": "Schnaittach Festungsstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 127404,
                        "travelTimeInSeconds": 3769,
                        "batteryConsumptionInkWh": 41.470560727272726,
                        "remainingChargeAtArrivalInkWh": 9.098439272727276,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 49.42148422254545,
                        "chargingTimeInSeconds": 3449,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025375981,
                        "chargingParkName": "Kirchberg an der Jagst Crailsheimer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 106805,
                        "travelTimeInSeconds": 3891,
                        "batteryConsumptionInkWh": 32.742838545454546,
                        "remainingChargeAtArrivalInkWh": 16.678645677090906,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 640203,
                "dauer": 34311,
                "verbrauch": 157.14266909090912,
                "restreichweite": 9.05115476309091,
                "ladezeit": 12855,
                "routen_id": 107,
                "legs": [
                    {
                        "lengthInMeters": 109454,
                        "travelTimeInSeconds": 4247,
                        "batteryConsumptionInkWh": 26.063240636363638,
                        "remainingChargeAtArrivalInkWh": 9.936759363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 1929,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518946,
                        "chargingParkName": "Coswig (Anhalt) Fichtenbreite"
                    },
                    {
                        "lengthInMeters": 98800,
                        "travelTimeInSeconds": 3488,
                        "batteryConsumptionInkWh": 23.238332090909093,
                        "remainingChargeAtArrivalInkWh": 4.661667909090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.35,
                        "chargingTimeInSeconds": 2280,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303802,
                        "chargingParkName": "Mer Teuchern"
                    },
                    {
                        "lengthInMeters": 86291,
                        "travelTimeInSeconds": 2563,
                        "batteryConsumptionInkWh": 23.487381272727276,
                        "remainingChargeAtArrivalInkWh": 4.862618727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2198,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291682,
                        "chargingParkName": "E.ON Berg Am Hohen Rain"
                    },
                    {
                        "lengthInMeters": 87290,
                        "travelTimeInSeconds": 2640,
                        "batteryConsumptionInkWh": 22.83379572727273,
                        "remainingChargeAtArrivalInkWh": 4.61620427272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.650000000000002,
                        "chargingTimeInSeconds": 2074,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291955,
                        "chargingParkName": "E.ON Pegnitz"
                    },
                    {
                        "lengthInMeters": 84714,
                        "travelTimeInSeconds": 2656,
                        "batteryConsumptionInkWh": 20.892021181818183,
                        "remainingChargeAtArrivalInkWh": 4.757978818181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2310,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521169,
                        "chargingParkName": "Neuendettelsau Heilsbronner Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97318,
                        "travelTimeInSeconds": 2837,
                        "batteryConsumptionInkWh": 24.05051663636364,
                        "remainingChargeAtArrivalInkWh": 4.749483363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.628536308545456,
                        "chargingTimeInSeconds": 2064,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276008000037277,
                        "chargingParkName": "Neuenstein Robert-Bosch-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 76336,
                        "travelTimeInSeconds": 3024,
                        "batteryConsumptionInkWh": 16.577381545454546,
                        "remainingChargeAtArrivalInkWh": 9.05115476309091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 644860,
                "dauer": 34100,
                "verbrauch": 140.7688029090909,
                "restreichweite": 7.604892363636363,
                "ladezeit": 12646,
                "routen_id": 108,
                "legs": [
                    {
                        "lengthInMeters": 109454,
                        "travelTimeInSeconds": 4247,
                        "batteryConsumptionInkWh": 23.635163636363636,
                        "remainingChargeAtArrivalInkWh": 6.6048363636363625,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1792,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518946,
                        "chargingParkName": "Coswig (Anhalt) Fichtenbreite"
                    },
                    {
                        "lengthInMeters": 92488,
                        "travelTimeInSeconds": 3185,
                        "batteryConsumptionInkWh": 19.07000290909091,
                        "remainingChargeAtArrivalInkWh": 3.9879970909090865,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.545999999999996,
                        "chargingTimeInSeconds": 1832,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521734,
                        "chargingParkName": "Wei\u00dfenfels Selauer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77279,
                        "travelTimeInSeconds": 2391,
                        "batteryConsumptionInkWh": 17.730197818181818,
                        "remainingChargeAtArrivalInkWh": 3.815802181818178,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.545999999999996,
                        "chargingTimeInSeconds": 1842,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026287756,
                        "chargingParkName": "Volkswagen Schleiz Geraer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 81641,
                        "travelTimeInSeconds": 2643,
                        "batteryConsumptionInkWh": 17.547568,
                        "remainingChargeAtArrivalInkWh": 3.9984319999999975,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2124,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025358193,
                        "chargingParkName": "EWE Bayreuth Sophian-Kolb-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 92395,
                        "travelTimeInSeconds": 2675,
                        "batteryConsumptionInkWh": 21.239633454545455,
                        "remainingChargeAtArrivalInkWh": 4.086366545454542,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.617999999999995,
                        "chargingTimeInSeconds": 3149,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377481,
                        "chargingParkName": "Schwabach Wendelsteiner Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 115267,
                        "travelTimeInSeconds": 3289,
                        "batteryConsumptionInkWh": 26.66005527272727,
                        "remainingChargeAtArrivalInkWh": 3.957944727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.49107418181818,
                        "chargingTimeInSeconds": 1907,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276008000037277,
                        "chargingParkName": "Neuenstein Robert-Bosch-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 76336,
                        "travelTimeInSeconds": 3024,
                        "batteryConsumptionInkWh": 14.886181818181818,
                        "remainingChargeAtArrivalInkWh": 7.604892363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Berlin",
        "Ziel": "D\u00fcsseldorf",
        "start_lat": 52.5167,
        "start_long": 13.3833,
        "dest_lat": 51.2311,
        "dest_long": 6.7724,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 571151,
                "dauer": 17780,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 7,
                "legs": [
                    {
                        "lengthInMeters": 571151,
                        "travelTimeInSeconds": 17780,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 581438,
                "dauer": 31235,
                "verbrauch": 183.69168872727272,
                "restreichweite": 16.684092624,
                "ladezeit": 12330,
                "routen_id": 109,
                "legs": [
                    {
                        "lengthInMeters": 155859,
                        "travelTimeInSeconds": 5826,
                        "batteryConsumptionInkWh": 49.14400145454546,
                        "remainingChargeAtArrivalInkWh": 17.175998545454547,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 59.688,
                        "chargingTimeInSeconds": 4008,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024223970,
                        "chargingParkName": "E.ON Hohe B\u00f6rde Braunschweiger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 101805,
                        "travelTimeInSeconds": 3198,
                        "batteryConsumptionInkWh": 31.53639490909091,
                        "remainingChargeAtArrivalInkWh": 28.151605090909094,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 51.398,
                        "chargingTimeInSeconds": 2402,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294750,
                        "chargingParkName": "Volkswagen Lehrte Hermesstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 132975,
                        "travelTimeInSeconds": 4060,
                        "batteryConsumptionInkWh": 42.687023272727274,
                        "remainingChargeAtArrivalInkWh": 8.71097672727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 33.160000000000004,
                        "chargingTimeInSeconds": 2212,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024225638,
                        "chargingParkName": "innogy Stieghorst Detmolder Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 75052,
                        "travelTimeInSeconds": 2128,
                        "batteryConsumptionInkWh": 24.857957090909093,
                        "remainingChargeAtArrivalInkWh": 8.302042909090911,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 52.150404624000004,
                        "chargingTimeInSeconds": 3708,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378440,
                        "chargingParkName": "innogy Hamm Unnaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 115747,
                        "travelTimeInSeconds": 3693,
                        "batteryConsumptionInkWh": 35.466312,
                        "remainingChargeAtArrivalInkWh": 16.684092624,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 563076,
                "dauer": 30271,
                "verbrauch": 132.533996,
                "restreichweite": 9.037030842727273,
                "ladezeit": 11235,
                "routen_id": 110,
                "legs": [
                    {
                        "lengthInMeters": 96064,
                        "travelTimeInSeconds": 3993,
                        "batteryConsumptionInkWh": 21.81602372727273,
                        "remainingChargeAtArrivalInkWh": 14.183976272727271,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 1627,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296167,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 94645,
                        "travelTimeInSeconds": 3148,
                        "batteryConsumptionInkWh": 22.60673672727273,
                        "remainingChargeAtArrivalInkWh": 4.84326327272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.0,
                        "chargingTimeInSeconds": 3533,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517109,
                        "chargingParkName": "Volkswagen Helmstedt Konrad-Adenauer-Platz"
                    },
                    {
                        "lengthInMeters": 131831,
                        "travelTimeInSeconds": 3997,
                        "batteryConsumptionInkWh": 31.21682645454546,
                        "remainingChargeAtArrivalInkWh": 4.783173545454542,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.55,
                        "chargingTimeInSeconds": 2134,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302799,
                        "chargingParkName": "E.ON Auetal Schafstrift"
                    },
                    {
                        "lengthInMeters": 88054,
                        "travelTimeInSeconds": 2695,
                        "batteryConsumptionInkWh": 21.942674727272728,
                        "remainingChargeAtArrivalInkWh": 4.607325272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.150000000000002,
                        "chargingTimeInSeconds": 2423,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291527,
                        "chargingParkName": "E.ON G\u00fctersloh"
                    },
                    {
                        "lengthInMeters": 101750,
                        "travelTimeInSeconds": 3200,
                        "batteryConsumptionInkWh": 25.436313000000006,
                        "remainingChargeAtArrivalInkWh": 4.713686999999997,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.552452206363636,
                        "chargingTimeInSeconds": 1518,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025357823,
                        "chargingParkName": "Riemke Herner Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 50732,
                        "travelTimeInSeconds": 2003,
                        "batteryConsumptionInkWh": 9.515421363636364,
                        "remainingChargeAtArrivalInkWh": 9.037030842727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 563105,
                "dauer": 29602,
                "verbrauch": 119.62711127272728,
                "restreichweite": 7.597153498181818,
                "ladezeit": 10464,
                "routen_id": 111,
                "legs": [
                    {
                        "lengthInMeters": 96064,
                        "travelTimeInSeconds": 3993,
                        "batteryConsumptionInkWh": 19.818551272727273,
                        "remainingChargeAtArrivalInkWh": 10.421448727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 13.985999999999999,
                        "chargingTimeInSeconds": 860,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296167,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 45474,
                        "travelTimeInSeconds": 1702,
                        "batteryConsumptionInkWh": 9.86970909090909,
                        "remainingChargeAtArrivalInkWh": 4.116290909090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.923999999999992,
                        "chargingTimeInSeconds": 1853,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 83405,
                        "travelTimeInSeconds": 2597,
                        "batteryConsumptionInkWh": 18.059106909090907,
                        "remainingChargeAtArrivalInkWh": 3.864893090909085,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2103,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222760,
                        "chargingParkName": "Bienrode-Waggum-Bevenrode Lilienthalplatz"
                    },
                    {
                        "lengthInMeters": 97633,
                        "travelTimeInSeconds": 3031,
                        "batteryConsumptionInkWh": 20.76444509090909,
                        "remainingChargeAtArrivalInkWh": 4.183554909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 1996,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302799,
                        "chargingParkName": "E.ON Auetal Schafstrift"
                    },
                    {
                        "lengthInMeters": 88054,
                        "travelTimeInSeconds": 2695,
                        "batteryConsumptionInkWh": 19.696928,
                        "remainingChargeAtArrivalInkWh": 4.117071999999997,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2058,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291527,
                        "chargingParkName": "E.ON G\u00fctersloh"
                    },
                    {
                        "lengthInMeters": 86696,
                        "travelTimeInSeconds": 2542,
                        "batteryConsumptionInkWh": 20.40162181818182,
                        "remainingChargeAtArrivalInkWh": 4.168378181818177,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.61390258909091,
                        "chargingTimeInSeconds": 1594,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292251,
                        "chargingParkName": "E.ON Hagen-Nord"
                    },
                    {
                        "lengthInMeters": 65779,
                        "travelTimeInSeconds": 2578,
                        "batteryConsumptionInkWh": 11.01674909090909,
                        "remainingChargeAtArrivalInkWh": 7.597153498181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Berlin",
        "Ziel": "Dortmund",
        "start_lat": 52.5167,
        "start_long": 13.3833,
        "dest_lat": 51.5139,
        "dest_long": 7.4653,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 495339,
                "dauer": 15878,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 8,
                "legs": [
                    {
                        "lengthInMeters": 495339,
                        "travelTimeInSeconds": 15878,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 498906,
                "dauer": 26265,
                "verbrauch": 157.90468654545452,
                "restreichweite": 16.685159220363644,
                "ladezeit": 9485,
                "routen_id": 112,
                "legs": [
                    {
                        "lengthInMeters": 155859,
                        "travelTimeInSeconds": 5826,
                        "batteryConsumptionInkWh": 49.14400145454546,
                        "remainingChargeAtArrivalInkWh": 17.175998545454547,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 51.398,
                        "chargingTimeInSeconds": 3118,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024223970,
                        "chargingParkName": "E.ON Hohe B\u00f6rde Braunschweiger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 141225,
                        "travelTimeInSeconds": 4407,
                        "batteryConsumptionInkWh": 42.95711636363636,
                        "remainingChargeAtArrivalInkWh": 8.440883636363644,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.963,
                        "chargingTimeInSeconds": 2678,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295170,
                        "chargingParkName": "E.ON Garbsen"
                    },
                    {
                        "lengthInMeters": 91453,
                        "travelTimeInSeconds": 2864,
                        "batteryConsumptionInkWh": 30.326820363636365,
                        "remainingChargeAtArrivalInkWh": 8.636179636363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 52.161907584000005,
                        "chargingTimeInSeconds": 3689,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024225638,
                        "chargingParkName": "innogy Stieghorst Detmolder Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 110369,
                        "travelTimeInSeconds": 3683,
                        "batteryConsumptionInkWh": 35.47674836363636,
                        "remainingChargeAtArrivalInkWh": 16.685159220363644,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 495255,
                "dauer": 26544,
                "verbrauch": 118.72965936363637,
                "restreichweite": 9.060293550727273,
                "ladezeit": 9722,
                "routen_id": 113,
                "legs": [
                    {
                        "lengthInMeters": 96064,
                        "travelTimeInSeconds": 3993,
                        "batteryConsumptionInkWh": 21.81602372727273,
                        "remainingChargeAtArrivalInkWh": 14.183976272727271,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 1627,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296167,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 94645,
                        "travelTimeInSeconds": 3148,
                        "batteryConsumptionInkWh": 22.60673672727273,
                        "remainingChargeAtArrivalInkWh": 4.84326327272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.0,
                        "chargingTimeInSeconds": 3533,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517109,
                        "chargingParkName": "Volkswagen Helmstedt Konrad-Adenauer-Platz"
                    },
                    {
                        "lengthInMeters": 131831,
                        "travelTimeInSeconds": 3997,
                        "batteryConsumptionInkWh": 31.216930181818185,
                        "remainingChargeAtArrivalInkWh": 4.783069818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.55,
                        "chargingTimeInSeconds": 2134,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302799,
                        "chargingParkName": "E.ON Auetal Schafstrift"
                    },
                    {
                        "lengthInMeters": 88054,
                        "travelTimeInSeconds": 2695,
                        "batteryConsumptionInkWh": 21.943193363636365,
                        "remainingChargeAtArrivalInkWh": 4.606806636363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.207068914363642,
                        "chargingTimeInSeconds": 2428,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291527,
                        "chargingParkName": "E.ON G\u00fctersloh"
                    },
                    {
                        "lengthInMeters": 84661,
                        "travelTimeInSeconds": 2990,
                        "batteryConsumptionInkWh": 21.14677536363637,
                        "remainingChargeAtArrivalInkWh": 9.060293550727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 496622,
                "dauer": 26277,
                "verbrauch": 107.4935330909091,
                "restreichweite": 7.605707668363637,
                "ladezeit": 9329,
                "routen_id": 114,
                "legs": [
                    {
                        "lengthInMeters": 96064,
                        "travelTimeInSeconds": 3993,
                        "batteryConsumptionInkWh": 19.818551272727273,
                        "remainingChargeAtArrivalInkWh": 10.421448727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 13.985999999999999,
                        "chargingTimeInSeconds": 860,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296167,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 45474,
                        "travelTimeInSeconds": 1702,
                        "batteryConsumptionInkWh": 9.86970909090909,
                        "remainingChargeAtArrivalInkWh": 4.116290909090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.923999999999992,
                        "chargingTimeInSeconds": 1853,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 83405,
                        "travelTimeInSeconds": 2597,
                        "batteryConsumptionInkWh": 18.059106909090907,
                        "remainingChargeAtArrivalInkWh": 3.864893090909085,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2103,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222760,
                        "chargingParkName": "Bienrode-Waggum-Bevenrode Lilienthalplatz"
                    },
                    {
                        "lengthInMeters": 97633,
                        "travelTimeInSeconds": 3031,
                        "batteryConsumptionInkWh": 20.76444509090909,
                        "remainingChargeAtArrivalInkWh": 4.183554909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.349999999999994,
                        "chargingTimeInSeconds": 2629,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302799,
                        "chargingParkName": "E.ON Auetal Schafstrift"
                    },
                    {
                        "lengthInMeters": 106560,
                        "travelTimeInSeconds": 3090,
                        "batteryConsumptionInkWh": 24.371432727272726,
                        "remainingChargeAtArrivalInkWh": 3.9785672727272683,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.215995668363636,
                        "chargingTimeInSeconds": 1884,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024223268,
                        "chargingParkName": "innogy Oelde In der Geist"
                    },
                    {
                        "lengthInMeters": 67486,
                        "travelTimeInSeconds": 2535,
                        "batteryConsumptionInkWh": 14.610287999999999,
                        "remainingChargeAtArrivalInkWh": 7.605707668363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Berlin",
        "Ziel": "Essen",
        "start_lat": 52.5167,
        "start_long": 13.3833,
        "dest_lat": 51.4508,
        "dest_long": 7.0131,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 530791,
                "dauer": 16714,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 9,
                "legs": [
                    {
                        "lengthInMeters": 530791,
                        "travelTimeInSeconds": 16714,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 538329,
                "dauer": 28522,
                "verbrauch": 169.7395229090909,
                "restreichweite": 16.65831689309091,
                "ladezeit": 10755,
                "routen_id": 115,
                "legs": [
                    {
                        "lengthInMeters": 155859,
                        "travelTimeInSeconds": 5826,
                        "batteryConsumptionInkWh": 49.14400145454546,
                        "remainingChargeAtArrivalInkWh": 17.175998545454547,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.056000000000004,
                        "chargingTimeInSeconds": 3246,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024223970,
                        "chargingParkName": "E.ON Hohe B\u00f6rde Braunschweiger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 141225,
                        "travelTimeInSeconds": 4404,
                        "batteryConsumptionInkWh": 42.973814545454545,
                        "remainingChargeAtArrivalInkWh": 10.08218545454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 34.818000000000005,
                        "chargingTimeInSeconds": 2258,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295170,
                        "chargingParkName": "E.ON Garbsen"
                    },
                    {
                        "lengthInMeters": 79091,
                        "travelTimeInSeconds": 2502,
                        "batteryConsumptionInkWh": 25.98216218181818,
                        "remainingChargeAtArrivalInkWh": 8.835837818181826,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.134,
                        "chargingTimeInSeconds": 2590,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227271,
                        "chargingParkName": "Herford Planckstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 86767,
                        "travelTimeInSeconds": 2421,
                        "batteryConsumptionInkWh": 29.06109818181818,
                        "remainingChargeAtArrivalInkWh": 9.072901818181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.23676343854545,
                        "chargingTimeInSeconds": 2661,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378440,
                        "chargingParkName": "innogy Hamm Unnaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 75387,
                        "travelTimeInSeconds": 2615,
                        "batteryConsumptionInkWh": 22.578446545454543,
                        "remainingChargeAtArrivalInkWh": 16.65831689309091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 538303,
                "dauer": 28160,
                "verbrauch": 127.61649345454546,
                "restreichweite": 9.050768897636363,
                "ladezeit": 10184,
                "routen_id": 116,
                "legs": [
                    {
                        "lengthInMeters": 96064,
                        "travelTimeInSeconds": 3995,
                        "batteryConsumptionInkWh": 21.81602372727273,
                        "remainingChargeAtArrivalInkWh": 14.183976272727271,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 1627,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296167,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 94645,
                        "travelTimeInSeconds": 3102,
                        "batteryConsumptionInkWh": 22.655281090909096,
                        "remainingChargeAtArrivalInkWh": 4.7947189090909035,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2307,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517109,
                        "chargingParkName": "Volkswagen Helmstedt Konrad-Adenauer-Platz"
                    },
                    {
                        "lengthInMeters": 106349,
                        "travelTimeInSeconds": 3351,
                        "batteryConsumptionInkWh": 24.135884181818188,
                        "remainingChargeAtArrivalInkWh": 4.664115818181813,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.3,
                        "chargingTimeInSeconds": 1966,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295170,
                        "chargingParkName": "E.ON Garbsen"
                    },
                    {
                        "lengthInMeters": 79091,
                        "travelTimeInSeconds": 2498,
                        "batteryConsumptionInkWh": 19.66938781818182,
                        "remainingChargeAtArrivalInkWh": 4.630612181818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2247,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227271,
                        "chargingParkName": "Herford Planckstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 86767,
                        "travelTimeInSeconds": 2422,
                        "batteryConsumptionInkWh": 22.95546781818182,
                        "remainingChargeAtArrivalInkWh": 4.944532181818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.435217715818183,
                        "chargingTimeInSeconds": 2037,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378440,
                        "chargingParkName": "innogy Hamm Unnaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 75387,
                        "travelTimeInSeconds": 2609,
                        "batteryConsumptionInkWh": 16.38444881818182,
                        "remainingChargeAtArrivalInkWh": 9.050768897636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 537230,
                "dauer": 28436,
                "verbrauch": 115.59005672727272,
                "restreichweite": 7.6162569279999985,
                "ladezeit": 10549,
                "routen_id": 117,
                "legs": [
                    {
                        "lengthInMeters": 96064,
                        "travelTimeInSeconds": 3995,
                        "batteryConsumptionInkWh": 19.818551272727273,
                        "remainingChargeAtArrivalInkWh": 10.421448727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 13.985999999999999,
                        "chargingTimeInSeconds": 860,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296167,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 45474,
                        "travelTimeInSeconds": 1666,
                        "batteryConsumptionInkWh": 9.89368290909091,
                        "remainingChargeAtArrivalInkWh": 4.09231709090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.923999999999996,
                        "chargingTimeInSeconds": 1855,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 83405,
                        "travelTimeInSeconds": 2589,
                        "batteryConsumptionInkWh": 18.070704,
                        "remainingChargeAtArrivalInkWh": 3.8532959999999967,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2074,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222760,
                        "chargingParkName": "Bienrode-Waggum-Bevenrode Lilienthalplatz"
                    },
                    {
                        "lengthInMeters": 97633,
                        "travelTimeInSeconds": 3033,
                        "batteryConsumptionInkWh": 20.751678545454546,
                        "remainingChargeAtArrivalInkWh": 3.818321454545451,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.617999999999995,
                        "chargingTimeInSeconds": 3165,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302799,
                        "chargingParkName": "E.ON Auetal Schafstrift"
                    },
                    {
                        "lengthInMeters": 115465,
                        "travelTimeInSeconds": 3373,
                        "batteryConsumptionInkWh": 26.486976,
                        "remainingChargeAtArrivalInkWh": 4.1310239999999965,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.184720927999997,
                        "chargingTimeInSeconds": 2595,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026287534,
                        "chargingParkName": "Volkswagen Beckum Neubeckumer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 99189,
                        "travelTimeInSeconds": 3230,
                        "batteryConsumptionInkWh": 20.568464,
                        "remainingChargeAtArrivalInkWh": 7.6162569279999985,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Hamburg",
        "Ziel": "Berlin",
        "start_lat": 53.55,
        "start_long": 10.01,
        "dest_lat": 52.5167,
        "dest_long": 13.3833,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 285000,
                "dauer": 10194,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 10,
                "legs": [
                    {
                        "lengthInMeters": 285000,
                        "travelTimeInSeconds": 10194,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 298584,
                "dauer": 14556,
                "verbrauch": 90.87087927272728,
                "restreichweite": 16.68362006545454,
                "ladezeit": 3547,
                "routen_id": 118,
                "legs": [
                    {
                        "lengthInMeters": 171982,
                        "travelTimeInSeconds": 5485,
                        "batteryConsumptionInkWh": 55.64084654545455,
                        "remainingChargeAtArrivalInkWh": 10.679153454545457,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 51.91365279272727,
                        "chargingTimeInSeconds": 3547,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026288031,
                        "chargingParkName": "Volkswagen Pritzwalk Fritz-Reuter-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 126602,
                        "travelTimeInSeconds": 5524,
                        "batteryConsumptionInkWh": 35.23003272727273,
                        "remainingChargeAtArrivalInkWh": 16.68362006545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 289627,
                "dauer": 14615,
                "verbrauch": 67.7738440909091,
                "restreichweite": 9.092105875454546,
                "ladezeit": 4204,
                "routen_id": 119,
                "legs": [
                    {
                        "lengthInMeters": 116141,
                        "travelTimeInSeconds": 3896,
                        "batteryConsumptionInkWh": 28.394199909090915,
                        "remainingChargeAtArrivalInkWh": 7.605800090909085,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2174,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024216894,
                        "chargingParkName": "Neustadt-Glewe Markt"
                    },
                    {
                        "lengthInMeters": 69199,
                        "travelTimeInSeconds": 1995,
                        "batteryConsumptionInkWh": 19.11216490909091,
                        "remainingChargeAtArrivalInkWh": 10.137835090909089,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.35958514818182,
                        "chargingTimeInSeconds": 2030,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294304,
                        "chargingParkName": "E.ON Heiligengrabe"
                    },
                    {
                        "lengthInMeters": 104287,
                        "travelTimeInSeconds": 4520,
                        "batteryConsumptionInkWh": 20.267479272727275,
                        "remainingChargeAtArrivalInkWh": 9.092105875454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 289627,
                "dauer": 14389,
                "verbrauch": 61.62080145454546,
                "restreichweite": 7.612265384727269,
                "ladezeit": 3970,
                "routen_id": 120,
                "legs": [
                    {
                        "lengthInMeters": 116141,
                        "travelTimeInSeconds": 3896,
                        "batteryConsumptionInkWh": 25.811031272727273,
                        "remainingChargeAtArrivalInkWh": 4.428968727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.167999999999996,
                        "chargingTimeInSeconds": 1776,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024216894,
                        "chargingParkName": "Neustadt-Glewe Markt"
                    },
                    {
                        "lengthInMeters": 69199,
                        "travelTimeInSeconds": 1996,
                        "batteryConsumptionInkWh": 17.285902545454544,
                        "remainingChargeAtArrivalInkWh": 3.882097454545452,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.136133021090906,
                        "chargingTimeInSeconds": 2194,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294304,
                        "chargingParkName": "E.ON Heiligengrabe"
                    },
                    {
                        "lengthInMeters": 104287,
                        "travelTimeInSeconds": 4527,
                        "batteryConsumptionInkWh": 18.523867636363637,
                        "remainingChargeAtArrivalInkWh": 7.612265384727269,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Hamburg",
        "Ziel": "Munich",
        "start_lat": 53.55,
        "start_long": 10.01,
        "dest_lat": 48.1372,
        "dest_long": 11.5755,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 777675,
                "dauer": 24720,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 11,
                "legs": [
                    {
                        "lengthInMeters": 777675,
                        "travelTimeInSeconds": 24720,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 780948,
                "dauer": 42800,
                "verbrauch": 246.02537527272727,
                "restreichweite": 16.686409079272728,
                "ladezeit": 16863,
                "routen_id": 121,
                "legs": [
                    {
                        "lengthInMeters": 176909,
                        "travelTimeInSeconds": 5806,
                        "batteryConsumptionInkWh": 54.35404290909091,
                        "remainingChargeAtArrivalInkWh": 11.9659570909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 3237,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226692,
                        "chargingParkName": "Hildesheim Frankenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 133024,
                        "travelTimeInSeconds": 4926,
                        "batteryConsumptionInkWh": 40.37453381818182,
                        "remainingChargeAtArrivalInkWh": 8.536466181818184,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 37.305,
                        "chargingTimeInSeconds": 2544,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519040,
                        "chargingParkName": "Kaufungen Leipziger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 81167,
                        "travelTimeInSeconds": 2674,
                        "batteryConsumptionInkWh": 28.262716363636365,
                        "remainingChargeAtArrivalInkWh": 9.042283636363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 3413,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304777,
                        "chargingParkName": "Mer Burghaun"
                    },
                    {
                        "lengthInMeters": 126665,
                        "travelTimeInSeconds": 3781,
                        "batteryConsumptionInkWh": 40.386013818181816,
                        "remainingChargeAtArrivalInkWh": 8.524986181818186,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 54.714000000000006,
                        "chargingTimeInSeconds": 3894,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024218034,
                        "chargingParkName": "Unterfr\u00e4nkische \u00dcberlandzentrale Gerolzhofen Dingolsh\u00e4user Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 149271,
                        "travelTimeInSeconds": 4887,
                        "batteryConsumptionInkWh": 46.023528727272726,
                        "remainingChargeAtArrivalInkWh": 8.69047127272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.310948715636364,
                        "chargingTimeInSeconds": 3775,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 113912,
                        "travelTimeInSeconds": 3864,
                        "batteryConsumptionInkWh": 36.624539636363636,
                        "remainingChargeAtArrivalInkWh": 16.686409079272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 799065,
                "dauer": 44011,
                "verbrauch": 188.05723427272727,
                "restreichweite": 9.052987624,
                "ladezeit": 17166,
                "routen_id": 122,
                "legs": [
                    {
                        "lengthInMeters": 130318,
                        "travelTimeInSeconds": 4409,
                        "batteryConsumptionInkWh": 29.601274181818187,
                        "remainingChargeAtArrivalInkWh": 6.398725818181813,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2246,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518632,
                        "chargingParkName": "Lidl Wedemark Wedemarkstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 109125,
                        "travelTimeInSeconds": 4283,
                        "batteryConsumptionInkWh": 22.808901181818182,
                        "remainingChargeAtArrivalInkWh": 6.441098818181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.5,
                        "chargingTimeInSeconds": 1721,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024221661,
                        "chargingParkName": "Kalefeld Wiesengrund"
                    },
                    {
                        "lengthInMeters": 84028,
                        "travelTimeInSeconds": 3169,
                        "batteryConsumptionInkWh": 17.69815472727273,
                        "remainingChargeAtArrivalInkWh": 4.80184527272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2342,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024218767,
                        "chargingParkName": "EAM Lohfelden Alexander-von-Humboldt-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 78144,
                        "travelTimeInSeconds": 2526,
                        "batteryConsumptionInkWh": 20.19300309090909,
                        "remainingChargeAtArrivalInkWh": 9.056996909090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2087,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304777,
                        "chargingParkName": "Mer Burghaun"
                    },
                    {
                        "lengthInMeters": 95889,
                        "travelTimeInSeconds": 2989,
                        "batteryConsumptionInkWh": 23.27463663636364,
                        "remainingChargeAtArrivalInkWh": 5.975363363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.5,
                        "chargingTimeInSeconds": 4486,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518191,
                        "chargingParkName": "Euerbach"
                    },
                    {
                        "lengthInMeters": 131087,
                        "travelTimeInSeconds": 3924,
                        "batteryConsumptionInkWh": 32.74140990909091,
                        "remainingChargeAtArrivalInkWh": 7.758590090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2164,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93112,
                        "travelTimeInSeconds": 2655,
                        "batteryConsumptionInkWh": 24.246042545454547,
                        "remainingChargeAtArrivalInkWh": 5.0039574545454535,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.546799624000002,
                        "chargingTimeInSeconds": 2120,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215657,
                        "chargingParkName": "Ingolstadt Manchinger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77362,
                        "travelTimeInSeconds": 2891,
                        "batteryConsumptionInkWh": 17.493812000000002,
                        "remainingChargeAtArrivalInkWh": 9.052987624,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 793815,
                "dauer": 41826,
                "verbrauch": 164.33272727272725,
                "restreichweite": 7.6098342836363635,
                "ladezeit": 14875,
                "routen_id": 123,
                "legs": [
                    {
                        "lengthInMeters": 88371,
                        "travelTimeInSeconds": 3208,
                        "batteryConsumptionInkWh": 17.82229236363636,
                        "remainingChargeAtArrivalInkWh": 12.417707636363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1424,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295558,
                        "chargingParkName": "Bad Fallingbostel Allermannstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93252,
                        "travelTimeInSeconds": 3104,
                        "batteryConsumptionInkWh": 19.107815272727272,
                        "remainingChargeAtArrivalInkWh": 3.950184727272724,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.766,
                        "chargingTimeInSeconds": 1541,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226692,
                        "chargingParkName": "Hildesheim Frankenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 79811,
                        "travelTimeInSeconds": 3301,
                        "batteryConsumptionInkWh": 13.957537454545454,
                        "remainingChargeAtArrivalInkWh": 3.808462545454544,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999993,
                        "chargingTimeInSeconds": 2077,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302741,
                        "chargingParkName": "Mer N\u00f6rten-Hardenberg Unter dem Pferdestiege"
                    },
                    {
                        "lengthInMeters": 91021,
                        "travelTimeInSeconds": 2781,
                        "batteryConsumptionInkWh": 20.43193018181818,
                        "remainingChargeAtArrivalInkWh": 4.138069818181812,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.034,
                        "chargingTimeInSeconds": 1706,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522415,
                        "chargingParkName": "EAM Kn\u00fcllwald"
                    },
                    {
                        "lengthInMeters": 73974,
                        "travelTimeInSeconds": 2302,
                        "batteryConsumptionInkWh": 16.15309090909091,
                        "remainingChargeAtArrivalInkWh": 3.880909090909089,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.703999999999997,
                        "chargingTimeInSeconds": 2160,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024813105,
                        "chargingParkName": "Allego Eichenzell Fuldaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 100823,
                        "travelTimeInSeconds": 3080,
                        "batteryConsumptionInkWh": 21.691822545454546,
                        "remainingChargeAtArrivalInkWh": 4.012177454545451,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.545999999999996,
                        "chargingTimeInSeconds": 1830,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024218034,
                        "chargingParkName": "Unterfr\u00e4nkische \u00dcberlandzentrale Gerolzhofen Dingolsh\u00e4user Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 94974,
                        "travelTimeInSeconds": 3386,
                        "batteryConsumptionInkWh": 17.40694109090909,
                        "remainingChargeAtArrivalInkWh": 4.139058909090906,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2028,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 86806,
                        "travelTimeInSeconds": 2614,
                        "batteryConsumptionInkWh": 20.404155636363637,
                        "remainingChargeAtArrivalInkWh": 3.78784436363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.966976101818183,
                        "chargingTimeInSeconds": 2109,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517171,
                        "chargingParkName": "Lenting Am Pfannenstiel"
                    },
                    {
                        "lengthInMeters": 84783,
                        "travelTimeInSeconds": 3177,
                        "batteryConsumptionInkWh": 17.35714181818182,
                        "remainingChargeAtArrivalInkWh": 7.6098342836363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Hamburg",
        "Ziel": "Cologne",
        "start_lat": 53.55,
        "start_long": 10.01,
        "dest_lat": 50.9422,
        "dest_long": 6.9578,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 425349,
                "dauer": 14533,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 12,
                "legs": [
                    {
                        "lengthInMeters": 425349,
                        "travelTimeInSeconds": 14533,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 431909,
                "dauer": 22236,
                "verbrauch": 130.09261236363636,
                "restreichweite": 16.659342578909097,
                "ladezeit": 7277,
                "routen_id": 124,
                "legs": [
                    {
                        "lengthInMeters": 168599,
                        "travelTimeInSeconds": 5410,
                        "batteryConsumptionInkWh": 52.71866472727273,
                        "remainingChargeAtArrivalInkWh": 13.601335272727276,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 33.989000000000004,
                        "chargingTimeInSeconds": 1983,
                        "chargingPowerInkW": 11,
                        "chargingParkExternalId": 276009025521844,
                        "chargingParkName": "EWE Emstek Europa-Allee"
                    },
                    {
                        "lengthInMeters": 90366,
                        "travelTimeInSeconds": 3578,
                        "batteryConsumptionInkWh": 25.044768,
                        "remainingChargeAtArrivalInkWh": 8.944232000000003,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.134,
                        "chargingTimeInSeconds": 2583,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227019,
                        "chargingParkName": "Ladbergen Dorfstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93739,
                        "travelTimeInSeconds": 2985,
                        "batteryConsumptionInkWh": 29.237890181818184,
                        "remainingChargeAtArrivalInkWh": 8.896109818181817,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.75063203345455,
                        "chargingTimeInSeconds": 2711,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292251,
                        "chargingParkName": "E.ON Hagen-Nord"
                    },
                    {
                        "lengthInMeters": 79205,
                        "travelTimeInSeconds": 2986,
                        "batteryConsumptionInkWh": 23.091289454545453,
                        "remainingChargeAtArrivalInkWh": 16.659342578909097,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 434693,
                "dauer": 21630,
                "verbrauch": 95.99025545454546,
                "restreichweite": 9.043633705999998,
                "ladezeit": 6724,
                "routen_id": 125,
                "legs": [
                    {
                        "lengthInMeters": 129104,
                        "travelTimeInSeconds": 4200,
                        "batteryConsumptionInkWh": 30.384415090909094,
                        "remainingChargeAtArrivalInkWh": 5.615584909090906,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2293,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215827,
                        "chargingParkName": "EWE Delmenhorst Niedersachsendamm"
                    },
                    {
                        "lengthInMeters": 118863,
                        "travelTimeInSeconds": 4406,
                        "batteryConsumptionInkWh": 24.122607090909092,
                        "remainingChargeAtArrivalInkWh": 5.127392909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2322,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291563,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 97798,
                        "travelTimeInSeconds": 2976,
                        "batteryConsumptionInkWh": 23.72948072727273,
                        "remainingChargeAtArrivalInkWh": 5.52051927272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.797386251454547,
                        "chargingTimeInSeconds": 2109,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293359,
                        "chargingParkName": "E.ON Aplerbeck"
                    },
                    {
                        "lengthInMeters": 88928,
                        "travelTimeInSeconds": 3324,
                        "batteryConsumptionInkWh": 17.75375254545455,
                        "remainingChargeAtArrivalInkWh": 9.043633705999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 430041,
                "dauer": 21889,
                "verbrauch": 86.23177745454547,
                "restreichweite": 7.60654850618182,
                "ladezeit": 6877,
                "routen_id": 126,
                "legs": [
                    {
                        "lengthInMeters": 101128,
                        "travelTimeInSeconds": 3293,
                        "batteryConsumptionInkWh": 22.641419636363636,
                        "remainingChargeAtArrivalInkWh": 7.598580363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.387999999999998,
                        "chargingTimeInSeconds": 1293,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220449,
                        "chargingParkName": "Oyten Rosa-Luxemburg-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 68029,
                        "travelTimeInSeconds": 2334,
                        "batteryConsumptionInkWh": 13.489755636363636,
                        "remainingChargeAtArrivalInkWh": 3.898244363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.631999999999998,
                        "chargingTimeInSeconds": 1456,
                        "chargingPowerInkW": 11,
                        "chargingParkExternalId": 276009025521844,
                        "chargingParkName": "EWE Emstek Europa-Allee"
                    },
                    {
                        "lengthInMeters": 74158,
                        "travelTimeInSeconds": 3095,
                        "batteryConsumptionInkWh": 12.56832290909091,
                        "remainingChargeAtArrivalInkWh": 4.0636770909090885,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.703999999999997,
                        "chargingTimeInSeconds": 2149,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291563,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 97798,
                        "travelTimeInSeconds": 2966,
                        "batteryConsumptionInkWh": 21.62272727272727,
                        "remainingChargeAtArrivalInkWh": 4.081272727272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.516100506181818,
                        "chargingTimeInSeconds": 1979,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293359,
                        "chargingParkName": "E.ON Aplerbeck"
                    },
                    {
                        "lengthInMeters": 88928,
                        "travelTimeInSeconds": 3324,
                        "batteryConsumptionInkWh": 15.909551999999998,
                        "remainingChargeAtArrivalInkWh": 7.60654850618182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Hamburg",
        "Ziel": "Frankfurt",
        "start_lat": 53.55,
        "start_long": 10.01,
        "dest_lat": 50.1136,
        "dest_long": 8.6797,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 494648,
                "dauer": 16220,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 13,
                "legs": [
                    {
                        "lengthInMeters": 494648,
                        "travelTimeInSeconds": 16220,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 498059,
                "dauer": 26147,
                "verbrauch": 155.98606545454547,
                "restreichweite": 16.660505607272732,
                "ladezeit": 9248,
                "routen_id": 127,
                "legs": [
                    {
                        "lengthInMeters": 176909,
                        "travelTimeInSeconds": 5810,
                        "batteryConsumptionInkWh": 54.34214545454545,
                        "remainingChargeAtArrivalInkWh": 11.977854545454555,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 3236,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226692,
                        "chargingParkName": "Hildesheim Frankenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 133024,
                        "travelTimeInSeconds": 4917,
                        "batteryConsumptionInkWh": 40.37140290909091,
                        "remainingChargeAtArrivalInkWh": 8.53959709090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 47.25300000000001,
                        "chargingTimeInSeconds": 3315,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519040,
                        "chargingParkName": "Kaufungen Leipziger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 113527,
                        "travelTimeInSeconds": 3517,
                        "batteryConsumptionInkWh": 38.43629236363636,
                        "remainingChargeAtArrivalInkWh": 8.816707636363645,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.49673033454546,
                        "chargingTimeInSeconds": 2697,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009007355771,
                        "chargingParkName": "Allego M\u00fccke Gottesrain"
                    },
                    {
                        "lengthInMeters": 74599,
                        "travelTimeInSeconds": 2655,
                        "batteryConsumptionInkWh": 22.83622472727273,
                        "remainingChargeAtArrivalInkWh": 16.660505607272732,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 520864,
                "dauer": 29040,
                "verbrauch": 115.43517745454547,
                "restreichweite": 9.043509440727275,
                "ladezeit": 10257,
                "routen_id": 128,
                "legs": [
                    {
                        "lengthInMeters": 130318,
                        "travelTimeInSeconds": 4409,
                        "batteryConsumptionInkWh": 29.600651818181824,
                        "remainingChargeAtArrivalInkWh": 6.399348181818176,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2246,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518632,
                        "chargingParkName": "Lidl Wedemark Wedemarkstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 110287,
                        "travelTimeInSeconds": 4291,
                        "batteryConsumptionInkWh": 22.885659363636368,
                        "remainingChargeAtArrivalInkWh": 6.364340636363632,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.0,
                        "chargingTimeInSeconds": 3442,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024221661,
                        "chargingParkName": "Kalefeld Wiesengrund"
                    },
                    {
                        "lengthInMeters": 114203,
                        "travelTimeInSeconds": 4203,
                        "batteryConsumptionInkWh": 25.084366363636363,
                        "remainingChargeAtArrivalInkWh": 10.915633636363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.0,
                        "chargingTimeInSeconds": 3169,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305649,
                        "chargingParkName": "EAM Homberg (Efze) Hans-Staden-Allee"
                    },
                    {
                        "lengthInMeters": 107957,
                        "travelTimeInSeconds": 3614,
                        "batteryConsumptionInkWh": 25.109779545454547,
                        "remainingChargeAtArrivalInkWh": 10.890220454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.79822980436364,
                        "chargingTimeInSeconds": 1400,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294328,
                        "chargingParkName": "Volkswagen Lich Gie\u00dfener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 58099,
                        "travelTimeInSeconds": 2266,
                        "batteryConsumptionInkWh": 12.754720363636364,
                        "remainingChargeAtArrivalInkWh": 9.043509440727275,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 505041,
                "dauer": 26211,
                "verbrauch": 103.13244218181818,
                "restreichweite": 7.612482318545455,
                "ladezeit": 8726,
                "routen_id": 129,
                "legs": [
                    {
                        "lengthInMeters": 88371,
                        "travelTimeInSeconds": 3208,
                        "batteryConsumptionInkWh": 17.821707636363637,
                        "remainingChargeAtArrivalInkWh": 12.418292363636361,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1424,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295558,
                        "chargingParkName": "Bad Fallingbostel Allermannstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93252,
                        "travelTimeInSeconds": 3099,
                        "batteryConsumptionInkWh": 19.121556363636365,
                        "remainingChargeAtArrivalInkWh": 3.936443636363631,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.144,
                        "chargingTimeInSeconds": 1571,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226692,
                        "chargingParkName": "Hildesheim Frankenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 80973,
                        "travelTimeInSeconds": 3311,
                        "batteryConsumptionInkWh": 13.990866909090908,
                        "remainingChargeAtArrivalInkWh": 4.15313309090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2056,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302741,
                        "chargingParkName": "Mer N\u00f6rten-Hardenberg Unter dem Pferdestiege"
                    },
                    {
                        "lengthInMeters": 91021,
                        "travelTimeInSeconds": 2781,
                        "batteryConsumptionInkWh": 20.432027636363635,
                        "remainingChargeAtArrivalInkWh": 4.1379723636363615,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.411999999999995,
                        "chargingTimeInSeconds": 1735,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522415,
                        "chargingParkName": "EAM Kn\u00fcllwald"
                    },
                    {
                        "lengthInMeters": 76825,
                        "travelTimeInSeconds": 2432,
                        "batteryConsumptionInkWh": 16.502855272727274,
                        "remainingChargeAtArrivalInkWh": 3.9091447272727216,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.875910682181818,
                        "chargingTimeInSeconds": 1940,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009007355771,
                        "chargingParkName": "Allego M\u00fccke Gottesrain"
                    },
                    {
                        "lengthInMeters": 74599,
                        "travelTimeInSeconds": 2655,
                        "batteryConsumptionInkWh": 15.263428363636363,
                        "remainingChargeAtArrivalInkWh": 7.612482318545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Hamburg",
        "Ziel": "Bremen",
        "start_lat": 53.55,
        "start_long": 10.01,
        "dest_lat": 53.1153,
        "dest_long": 8.7975,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 123054,
                "dauer": 4219,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 14,
                "legs": [
                    {
                        "lengthInMeters": 123054,
                        "travelTimeInSeconds": 4219,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 123054,
                "dauer": 4135,
                "verbrauch": 38.60640509090909,
                "restreichweite": 27.713594909090915,
                "ladezeit": null,
                "routen_id": 130,
                "legs": [
                    {
                        "lengthInMeters": 123054,
                        "travelTimeInSeconds": 4135,
                        "batteryConsumptionInkWh": 38.60640509090909,
                        "remainingChargeAtArrivalInkWh": 27.713594909090915,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 125257,
                "dauer": 5244,
                "verbrauch": 29.270280454545457,
                "restreichweite": 9.039553282545453,
                "ladezeit": 779,
                "routen_id": 131,
                "legs": [
                    {
                        "lengthInMeters": 77092,
                        "travelTimeInSeconds": 2716,
                        "batteryConsumptionInkWh": 18.181835000000003,
                        "remainingChargeAtArrivalInkWh": 17.818164999999997,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.12799873709091,
                        "chargingTimeInSeconds": 779,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377078,
                        "chargingParkName": "EWE Gyhum An der Autobahn"
                    },
                    {
                        "lengthInMeters": 48165,
                        "travelTimeInSeconds": 1749,
                        "batteryConsumptionInkWh": 11.088445454545456,
                        "remainingChargeAtArrivalInkWh": 9.039553282545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 125257,
                "dauer": 5370,
                "verbrauch": 26.57254109090909,
                "restreichweite": 7.595299133090908,
                "ladezeit": 905,
                "routen_id": 132,
                "legs": [
                    {
                        "lengthInMeters": 77092,
                        "travelTimeInSeconds": 2716,
                        "batteryConsumptionInkWh": 16.482974545454546,
                        "remainingChargeAtArrivalInkWh": 13.757025454545452,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.684865678545453,
                        "chargingTimeInSeconds": 905,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377078,
                        "chargingParkName": "EWE Gyhum An der Autobahn"
                    },
                    {
                        "lengthInMeters": 48165,
                        "travelTimeInSeconds": 1749,
                        "batteryConsumptionInkWh": 10.089566545454545,
                        "remainingChargeAtArrivalInkWh": 7.595299133090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Hamburg",
        "Ziel": "Stuttgart",
        "start_lat": 53.55,
        "start_long": 10.01,
        "dest_lat": 48.7761,
        "dest_long": 9.1775,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 666911,
                "dauer": 21631,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 15,
                "legs": [
                    {
                        "lengthInMeters": 666911,
                        "travelTimeInSeconds": 21631,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 665486,
                "dauer": 36575,
                "verbrauch": 212.01243127272727,
                "restreichweite": 16.653106642909087,
                "ladezeit": 14223,
                "routen_id": 133,
                "legs": [
                    {
                        "lengthInMeters": 176909,
                        "travelTimeInSeconds": 5811,
                        "batteryConsumptionInkWh": 54.339431999999995,
                        "remainingChargeAtArrivalInkWh": 11.980568000000012,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 3236,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226692,
                        "chargingParkName": "Hildesheim Frankenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 133024,
                        "travelTimeInSeconds": 4917,
                        "batteryConsumptionInkWh": 40.37140290909091,
                        "remainingChargeAtArrivalInkWh": 8.53959709090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 37.305,
                        "chargingTimeInSeconds": 2544,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519040,
                        "chargingParkName": "Kaufungen Leipziger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 81167,
                        "travelTimeInSeconds": 2655,
                        "batteryConsumptionInkWh": 28.278997090909094,
                        "remainingChargeAtArrivalInkWh": 9.026002909090906,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.08200000000001,
                        "chargingTimeInSeconds": 3350,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304777,
                        "chargingParkName": "Mer Burghaun"
                    },
                    {
                        "lengthInMeters": 123766,
                        "travelTimeInSeconds": 3803,
                        "batteryConsumptionInkWh": 39.29583127272727,
                        "remainingChargeAtArrivalInkWh": 8.786168727272738,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.134,
                        "chargingTimeInSeconds": 2593,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302718,
                        "chargingParkName": "Mer W\u00fcrzburg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 87392,
                        "travelTimeInSeconds": 2545,
                        "batteryConsumptionInkWh": 29.753446545454544,
                        "remainingChargeAtArrivalInkWh": 8.380553454545456,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.62642809745454,
                        "chargingTimeInSeconds": 2500,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302873,
                        "chargingParkName": "Neuenstadt am Kocher Wilhelm-Maybach-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 63228,
                        "travelTimeInSeconds": 2620,
                        "batteryConsumptionInkWh": 19.973321454545456,
                        "remainingChargeAtArrivalInkWh": 16.653106642909087,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 681176,
                "dauer": 37611,
                "verbrauch": 155.83923218181818,
                "restreichweite": 9.046198673999998,
                "ladezeit": 13548,
                "routen_id": 134,
                "legs": [
                    {
                        "lengthInMeters": 36,
                        "travelTimeInSeconds": 19,
                        "batteryConsumptionInkWh": 0.002282,
                        "remainingChargeAtArrivalInkWh": 35.997718,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.0,
                        "chargingTimeInSeconds": 0,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215756,
                        "chargingParkName": "Stromnetz Hamburg Hamburg H\u00fchnerposten"
                    },
                    {
                        "lengthInMeters": 130282,
                        "travelTimeInSeconds": 4390,
                        "batteryConsumptionInkWh": 29.59536172727273,
                        "remainingChargeAtArrivalInkWh": 6.404638272727269,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2246,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518632,
                        "chargingParkName": "Lidl Wedemark Wedemarkstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 109125,
                        "travelTimeInSeconds": 4283,
                        "batteryConsumptionInkWh": 22.808901181818182,
                        "remainingChargeAtArrivalInkWh": 6.441098818181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.0,
                        "chargingTimeInSeconds": 3438,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024221661,
                        "chargingParkName": "Kalefeld Wiesengrund"
                    },
                    {
                        "lengthInMeters": 114203,
                        "travelTimeInSeconds": 4203,
                        "batteryConsumptionInkWh": 25.084470090909093,
                        "remainingChargeAtArrivalInkWh": 10.915529909090907,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 1975,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305649,
                        "chargingParkName": "EAM Homberg (Efze) Hans-Staden-Allee"
                    },
                    {
                        "lengthInMeters": 102949,
                        "travelTimeInSeconds": 3542,
                        "batteryConsumptionInkWh": 24.343546181818184,
                        "remainingChargeAtArrivalInkWh": 4.9064538181818165,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.5,
                        "chargingTimeInSeconds": 1813,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303521,
                        "chargingParkName": "Volkswagen Bad Br\u00fcckenau R\u00f6mershager Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 73961,
                        "travelTimeInSeconds": 2460,
                        "batteryConsumptionInkWh": 16.667935454545457,
                        "remainingChargeAtArrivalInkWh": 5.832064545454543,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2280,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302718,
                        "chargingParkName": "Mer W\u00fcrzburg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 87392,
                        "travelTimeInSeconds": 2545,
                        "batteryConsumptionInkWh": 23.237398545454546,
                        "remainingChargeAtArrivalInkWh": 6.012601454545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.145535673999998,
                        "chargingTimeInSeconds": 1796,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302873,
                        "chargingParkName": "Neuenstadt am Kocher Wilhelm-Maybach-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 63228,
                        "travelTimeInSeconds": 2620,
                        "batteryConsumptionInkWh": 14.099337,
                        "remainingChargeAtArrivalInkWh": 9.046198673999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 671875,
                "dauer": 36111,
                "verbrauch": 141.43714618181815,
                "restreichweite": 7.600438885818182,
                "ladezeit": 13343,
                "routen_id": 135,
                "legs": [
                    {
                        "lengthInMeters": 88371,
                        "travelTimeInSeconds": 3208,
                        "batteryConsumptionInkWh": 17.818686545454543,
                        "remainingChargeAtArrivalInkWh": 12.421313454545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1424,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295558,
                        "chargingParkName": "Bad Fallingbostel Allermannstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93252,
                        "travelTimeInSeconds": 3099,
                        "batteryConsumptionInkWh": 19.121556363636365,
                        "remainingChargeAtArrivalInkWh": 3.936443636363631,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.239999999999995,
                        "chargingTimeInSeconds": 3073,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226692,
                        "chargingParkName": "Hildesheim Frankenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 137722,
                        "travelTimeInSeconds": 4970,
                        "batteryConsumptionInkWh": 26.275109818181818,
                        "remainingChargeAtArrivalInkWh": 3.964890181818177,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.923999999999996,
                        "chargingTimeInSeconds": 1862,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024218767,
                        "chargingParkName": "EAM Lohfelden Alexander-von-Humboldt-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 78144,
                        "travelTimeInSeconds": 2522,
                        "batteryConsumptionInkWh": 17.942843636363637,
                        "remainingChargeAtArrivalInkWh": 3.9811563636363587,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.617999999999995,
                        "chargingTimeInSeconds": 3155,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304777,
                        "chargingParkName": "Mer Burghaun"
                    },
                    {
                        "lengthInMeters": 123766,
                        "travelTimeInSeconds": 3802,
                        "batteryConsumptionInkWh": 26.75205236363636,
                        "remainingChargeAtArrivalInkWh": 3.865947636363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2103,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302718,
                        "chargingParkName": "Mer W\u00fcrzburg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 87392,
                        "travelTimeInSeconds": 2545,
                        "batteryConsumptionInkWh": 20.867454545454546,
                        "remainingChargeAtArrivalInkWh": 4.080545454545451,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.25988179490909,
                        "chargingTimeInSeconds": 1726,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302873,
                        "chargingParkName": "Neuenstadt am Kocher Wilhelm-Maybach-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 63228,
                        "travelTimeInSeconds": 2620,
                        "batteryConsumptionInkWh": 12.65944290909091,
                        "remainingChargeAtArrivalInkWh": 7.600438885818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Hamburg",
        "Ziel": "D\u00fcsseldorf",
        "start_lat": 53.55,
        "start_long": 10.01,
        "dest_lat": 51.2311,
        "dest_long": 6.7724,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 405763,
                "dauer": 13335,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 16,
                "legs": [
                    {
                        "lengthInMeters": 405763,
                        "travelTimeInSeconds": 13335,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 407691,
                "dauer": 20087,
                "verbrauch": 123.040344,
                "restreichweite": 16.674995872000004,
                "ladezeit": 6403,
                "routen_id": 136,
                "legs": [
                    {
                        "lengthInMeters": 168599,
                        "travelTimeInSeconds": 5410,
                        "batteryConsumptionInkWh": 52.71762109090909,
                        "remainingChargeAtArrivalInkWh": 13.602378909090916,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 49.74,
                        "chargingTimeInSeconds": 3203,
                        "chargingPowerInkW": 11,
                        "chargingParkExternalId": 276009025521844,
                        "chargingParkName": "EWE Emstek Europa-Allee"
                    },
                    {
                        "lengthInMeters": 141014,
                        "travelTimeInSeconds": 4905,
                        "batteryConsumptionInkWh": 41.28708945454546,
                        "remainingChargeAtArrivalInkWh": 8.452910545454543,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 45.71062932654546,
                        "chargingTimeInSeconds": 3200,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215443,
                        "chargingParkName": "innogy D\u00fclmen Auf dem Quellberg"
                    },
                    {
                        "lengthInMeters": 98078,
                        "travelTimeInSeconds": 3369,
                        "batteryConsumptionInkWh": 29.035633454545454,
                        "remainingChargeAtArrivalInkWh": 16.674995872000004,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 404267,
                "dauer": 20051,
                "verbrauch": 90.47269063636365,
                "restreichweite": 9.088498448363634,
                "ladezeit": 6454,
                "routen_id": 137,
                "legs": [
                    {
                        "lengthInMeters": 101128,
                        "travelTimeInSeconds": 3294,
                        "batteryConsumptionInkWh": 24.96476881818182,
                        "remainingChargeAtArrivalInkWh": 11.03523118181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 1968,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220449,
                        "chargingParkName": "Oyten Rosa-Luxemburg-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97742,
                        "travelTimeInSeconds": 3395,
                        "batteryConsumptionInkWh": 20.79742190909091,
                        "remainingChargeAtArrivalInkWh": 8.452578090909089,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2123,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303536,
                        "chargingParkName": "E.ON Holdorf"
                    },
                    {
                        "lengthInMeters": 107319,
                        "travelTimeInSeconds": 3539,
                        "batteryConsumptionInkWh": 23.648366000000003,
                        "remainingChargeAtArrivalInkWh": 5.601633999999997,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.150632357454548,
                        "chargingTimeInSeconds": 2363,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215443,
                        "chargingParkName": "innogy D\u00fclmen Auf dem Quellberg"
                    },
                    {
                        "lengthInMeters": 98078,
                        "travelTimeInSeconds": 3369,
                        "batteryConsumptionInkWh": 21.062133909090914,
                        "remainingChargeAtArrivalInkWh": 9.088498448363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 404992,
                "dauer": 20575,
                "verbrauch": 82.19813381818182,
                "restreichweite": 7.602563199999999,
                "ladezeit": 6564,
                "routen_id": 138,
                "legs": [
                    {
                        "lengthInMeters": 101128,
                        "travelTimeInSeconds": 3294,
                        "batteryConsumptionInkWh": 22.64005527272727,
                        "remainingChargeAtArrivalInkWh": 7.599944727272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.387999999999998,
                        "chargingTimeInSeconds": 1293,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220449,
                        "chargingParkName": "Oyten Rosa-Luxemburg-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 68029,
                        "travelTimeInSeconds": 2334,
                        "batteryConsumptionInkWh": 13.489755636363636,
                        "remainingChargeAtArrivalInkWh": 3.898244363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.631999999999998,
                        "chargingTimeInSeconds": 1456,
                        "chargingPowerInkW": 11,
                        "chargingParkExternalId": 276009025521844,
                        "chargingParkName": "EWE Emstek Europa-Allee"
                    },
                    {
                        "lengthInMeters": 74158,
                        "travelTimeInSeconds": 3106,
                        "batteryConsumptionInkWh": 12.544251636363636,
                        "remainingChargeAtArrivalInkWh": 4.087748363636361,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999993,
                        "chargingTimeInSeconds": 2002,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291563,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 89314,
                        "travelTimeInSeconds": 2655,
                        "batteryConsumptionInkWh": 19.80247127272727,
                        "remainingChargeAtArrivalInkWh": 4.011528727272722,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.324163199999997,
                        "chargingTimeInSeconds": 1813,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220571,
                        "chargingParkName": "Marl Carl-Duisberg-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 72363,
                        "travelTimeInSeconds": 2623,
                        "batteryConsumptionInkWh": 13.721599999999999,
                        "remainingChargeAtArrivalInkWh": 7.602563199999999,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Hamburg",
        "Ziel": "Dortmund",
        "start_lat": 53.55,
        "start_long": 10.01,
        "dest_lat": 51.5139,
        "dest_long": 7.4653,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 343456,
                "dauer": 11945,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 17,
                "legs": [
                    {
                        "lengthInMeters": 343456,
                        "travelTimeInSeconds": 11945,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 351212,
                "dauer": 17463,
                "verbrauch": 106.59639200000001,
                "restreichweite": 16.68160376,
                "ladezeit": 5162,
                "routen_id": 139,
                "legs": [
                    {
                        "lengthInMeters": 168599,
                        "travelTimeInSeconds": 5410,
                        "batteryConsumptionInkWh": 52.71762109090909,
                        "remainingChargeAtArrivalInkWh": 13.602378909090916,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.673000000000002,
                        "chargingTimeInSeconds": 1726,
                        "chargingPowerInkW": 11,
                        "chargingParkExternalId": 276009025521844,
                        "chargingParkName": "EWE Emstek Europa-Allee"
                    },
                    {
                        "lengthInMeters": 74158,
                        "travelTimeInSeconds": 3115,
                        "batteryConsumptionInkWh": 20.388897454545454,
                        "remainingChargeAtArrivalInkWh": 10.284102545454548,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.171477214545455,
                        "chargingTimeInSeconds": 3436,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291563,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 108455,
                        "travelTimeInSeconds": 3775,
                        "batteryConsumptionInkWh": 33.48987345454545,
                        "remainingChargeAtArrivalInkWh": 16.68160376,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 354208,
                "dauer": 18180,
                "verbrauch": 78.35215881818182,
                "restreichweite": 9.130337051272726,
                "ladezeit": 5499,
                "routen_id": 140,
                "legs": [
                    {
                        "lengthInMeters": 101128,
                        "travelTimeInSeconds": 3294,
                        "batteryConsumptionInkWh": 24.96476881818182,
                        "remainingChargeAtArrivalInkWh": 11.03523118181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.5,
                        "chargingTimeInSeconds": 1445,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220449,
                        "chargingParkName": "Oyten Rosa-Luxemburg-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 68029,
                        "travelTimeInSeconds": 2334,
                        "batteryConsumptionInkWh": 14.799288636363638,
                        "remainingChargeAtArrivalInkWh": 7.700711363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.5,
                        "chargingTimeInSeconds": 1645,
                        "chargingPowerInkW": 11,
                        "chargingParkExternalId": 276009025521844,
                        "chargingParkName": "EWE Emstek Europa-Allee"
                    },
                    {
                        "lengthInMeters": 90366,
                        "travelTimeInSeconds": 3568,
                        "batteryConsumptionInkWh": 17.237709363636366,
                        "remainingChargeAtArrivalInkWh": 5.262290636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.48072905127273,
                        "chargingTimeInSeconds": 2409,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227019,
                        "chargingParkName": "Ladbergen Dorfstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 94685,
                        "travelTimeInSeconds": 3485,
                        "batteryConsumptionInkWh": 21.350392000000003,
                        "remainingChargeAtArrivalInkWh": 9.130337051272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 352762,
                "dauer": 17757,
                "verbrauch": 71.48037527272727,
                "restreichweite": 7.594668991999999,
                "ladezeit": 5264,
                "routen_id": 141,
                "legs": [
                    {
                        "lengthInMeters": 101128,
                        "travelTimeInSeconds": 3294,
                        "batteryConsumptionInkWh": 22.64005527272727,
                        "remainingChargeAtArrivalInkWh": 7.599944727272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1732,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220449,
                        "chargingParkName": "Oyten Rosa-Luxemburg-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97742,
                        "travelTimeInSeconds": 3394,
                        "batteryConsumptionInkWh": 18.978103272727274,
                        "remainingChargeAtArrivalInkWh": 4.079896727272722,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2031,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303536,
                        "chargingParkName": "E.ON Holdorf"
                    },
                    {
                        "lengthInMeters": 101826,
                        "travelTimeInSeconds": 3479,
                        "batteryConsumptionInkWh": 20.08772072727273,
                        "remainingChargeAtArrivalInkWh": 4.104279272727268,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.369164991999998,
                        "chargingTimeInSeconds": 1501,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295572,
                        "chargingParkName": "E.ON Ascheberg Zur Davert"
                    },
                    {
                        "lengthInMeters": 52066,
                        "travelTimeInSeconds": 2327,
                        "batteryConsumptionInkWh": 9.774496,
                        "remainingChargeAtArrivalInkWh": 7.594668991999999,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Hamburg",
        "Ziel": "Essen",
        "start_lat": 53.55,
        "start_long": 10.01,
        "dest_lat": 51.4508,
        "dest_long": 7.0131,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 365540,
                "dauer": 12470,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 18,
                "legs": [
                    {
                        "lengthInMeters": 365540,
                        "travelTimeInSeconds": 12470,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 366649,
                "dauer": 18419,
                "verbrauch": 110.57556872727272,
                "restreichweite": 16.68000073454545,
                "ladezeit": 5447,
                "routen_id": 142,
                "legs": [
                    {
                        "lengthInMeters": 168599,
                        "travelTimeInSeconds": 5410,
                        "batteryConsumptionInkWh": 52.717203636363635,
                        "remainingChargeAtArrivalInkWh": 13.602796363636372,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 33.989000000000004,
                        "chargingTimeInSeconds": 1983,
                        "chargingPowerInkW": 11,
                        "chargingParkExternalId": 276009025521844,
                        "chargingParkName": "EWE Emstek Europa-Allee"
                    },
                    {
                        "lengthInMeters": 90366,
                        "travelTimeInSeconds": 3571,
                        "batteryConsumptionInkWh": 25.065431999999998,
                        "remainingChargeAtArrivalInkWh": 8.923568000000007,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 49.47293382545455,
                        "chargingTimeInSeconds": 3464,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227019,
                        "chargingParkName": "Ladbergen Dorfstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 107684,
                        "travelTimeInSeconds": 3990,
                        "batteryConsumptionInkWh": 32.792933090909095,
                        "remainingChargeAtArrivalInkWh": 16.68000073454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 364444,
                "dauer": 18478,
                "verbrauch": 81.05020890909091,
                "restreichweite": 9.042007262363638,
                "ladezeit": 5721,
                "routen_id": 143,
                "legs": [
                    {
                        "lengthInMeters": 101128,
                        "travelTimeInSeconds": 3294,
                        "batteryConsumptionInkWh": 24.964250181818183,
                        "remainingChargeAtArrivalInkWh": 11.035749818181817,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 1968,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220449,
                        "chargingParkName": "Oyten Rosa-Luxemburg-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97742,
                        "travelTimeInSeconds": 3395,
                        "batteryConsumptionInkWh": 20.79742190909091,
                        "remainingChargeAtArrivalInkWh": 8.452578090909089,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2123,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303536,
                        "chargingParkName": "E.ON Holdorf"
                    },
                    {
                        "lengthInMeters": 107319,
                        "travelTimeInSeconds": 3539,
                        "batteryConsumptionInkWh": 23.648677181818183,
                        "remainingChargeAtArrivalInkWh": 5.601322818181817,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.681866898727275,
                        "chargingTimeInSeconds": 1630,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215443,
                        "chargingParkName": "innogy D\u00fclmen Auf dem Quellberg"
                    },
                    {
                        "lengthInMeters": 58255,
                        "travelTimeInSeconds": 2529,
                        "batteryConsumptionInkWh": 11.639859636363637,
                        "remainingChargeAtArrivalInkWh": 9.042007262363638,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 364826,
                "dauer": 18411,
                "verbrauch": 73.63392581818182,
                "restreichweite": 7.601347552000002,
                "ladezeit": 5433,
                "routen_id": 144,
                "legs": [
                    {
                        "lengthInMeters": 101128,
                        "travelTimeInSeconds": 3294,
                        "batteryConsumptionInkWh": 22.63966545454545,
                        "remainingChargeAtArrivalInkWh": 7.6003345454545475,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1732,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220449,
                        "chargingParkName": "Oyten Rosa-Luxemburg-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97742,
                        "travelTimeInSeconds": 3394,
                        "batteryConsumptionInkWh": 18.978103272727274,
                        "remainingChargeAtArrivalInkWh": 4.079896727272722,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1943,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303536,
                        "chargingParkName": "E.ON Holdorf"
                    },
                    {
                        "lengthInMeters": 97281,
                        "travelTimeInSeconds": 3396,
                        "batteryConsumptionInkWh": 18.902381090909092,
                        "remainingChargeAtArrivalInkWh": 4.155618909090904,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.715123552,
                        "chargingTimeInSeconds": 1758,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291296,
                        "chargingParkName": "Nottuln Schulze Frenkings Hof"
                    },
                    {
                        "lengthInMeters": 68675,
                        "travelTimeInSeconds": 2894,
                        "batteryConsumptionInkWh": 13.113776,
                        "remainingChargeAtArrivalInkWh": 7.601347552000002,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Munich",
        "Ziel": "Berlin",
        "start_lat": 48.1372,
        "start_long": 11.5755,
        "dest_lat": 52.5167,
        "dest_long": 13.3833,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 585280,
                "dauer": 19450,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 19,
                "legs": [
                    {
                        "lengthInMeters": 585280,
                        "travelTimeInSeconds": 19450,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 600768,
                "dauer": 32287,
                "verbrauch": 189.92491127272726,
                "restreichweite": 16.654715095272728,
                "ladezeit": 12167,
                "routen_id": 145,
                "legs": [
                    {
                        "lengthInMeters": 179531,
                        "travelTimeInSeconds": 6282,
                        "batteryConsumptionInkWh": 55.849365090909096,
                        "remainingChargeAtArrivalInkWh": 10.470634909090911,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.792,
                        "chargingTimeInSeconds": 2620,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023657881,
                        "chargingParkName": "Schnaittach Festungsstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 90381,
                        "travelTimeInSeconds": 2827,
                        "batteryConsumptionInkWh": 31.32641527272727,
                        "remainingChargeAtArrivalInkWh": 8.46558472727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 54.714,
                        "chargingTimeInSeconds": 3897,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303205,
                        "chargingParkName": "Volkswagen M\u00fcnchberg Bayreuther Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 145908,
                        "travelTimeInSeconds": 4455,
                        "batteryConsumptionInkWh": 45.75489672727273,
                        "remainingChargeAtArrivalInkWh": 8.959103272727269,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 44.766000000000005,
                        "chargingTimeInSeconds": 3097,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291337,
                        "chargingParkName": "Markranst\u00e4dt Markt"
                    },
                    {
                        "lengthInMeters": 115097,
                        "travelTimeInSeconds": 3614,
                        "batteryConsumptionInkWh": 36.21668654545454,
                        "remainingChargeAtArrivalInkWh": 8.549313454545462,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 37.432262731636364,
                        "chargingTimeInSeconds": 2553,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024217937,
                        "chargingParkName": "E.ON Linthe Am Kalkberg"
                    },
                    {
                        "lengthInMeters": 69851,
                        "travelTimeInSeconds": 2943,
                        "batteryConsumptionInkWh": 20.777547636363636,
                        "remainingChargeAtArrivalInkWh": 16.654715095272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 597706,
                "dauer": 31519,
                "verbrauch": 144.62237236363637,
                "restreichweite": 9.037416500727273,
                "ladezeit": 11897,
                "routen_id": 146,
                "legs": [
                    {
                        "lengthInMeters": 114427,
                        "travelTimeInSeconds": 4466,
                        "batteryConsumptionInkWh": 24.89817590909091,
                        "remainingChargeAtArrivalInkWh": 11.10182409090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 1964,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 91109,
                        "travelTimeInSeconds": 2724,
                        "batteryConsumptionInkWh": 24.618319727272727,
                        "remainingChargeAtArrivalInkWh": 4.631680272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2212,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293154,
                        "chargingParkName": "E.ON Pegnitz"
                    },
                    {
                        "lengthInMeters": 87330,
                        "travelTimeInSeconds": 2635,
                        "batteryConsumptionInkWh": 22.76564690909091,
                        "remainingChargeAtArrivalInkWh": 4.684353090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2314,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293291,
                        "chargingParkName": "E.ON Berg"
                    },
                    {
                        "lengthInMeters": 98704,
                        "travelTimeInSeconds": 2810,
                        "batteryConsumptionInkWh": 24.037758181818184,
                        "remainingChargeAtArrivalInkWh": 4.762241818181817,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.55,
                        "chargingTimeInSeconds": 2135,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521734,
                        "chargingParkName": "Wei\u00dfenfels Selauer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93384,
                        "travelTimeInSeconds": 2879,
                        "batteryConsumptionInkWh": 21.993189909090916,
                        "remainingChargeAtArrivalInkWh": 4.556810090909085,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.150000000000002,
                        "chargingTimeInSeconds": 1729,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518946,
                        "chargingParkName": "Coswig (Anhalt) Fichtenbreite"
                    },
                    {
                        "lengthInMeters": 60439,
                        "travelTimeInSeconds": 1686,
                        "batteryConsumptionInkWh": 16.601031363636366,
                        "remainingChargeAtArrivalInkWh": 4.548968636363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.74566686436364,
                        "chargingTimeInSeconds": 1543,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521197,
                        "chargingParkName": "enercity Beelitz Stra\u00dfe nach Fichtenwalde"
                    },
                    {
                        "lengthInMeters": 52313,
                        "travelTimeInSeconds": 2422,
                        "batteryConsumptionInkWh": 9.708250363636365,
                        "remainingChargeAtArrivalInkWh": 9.037416500727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 592656,
                "dauer": 30951,
                "verbrauch": 129.57273745454546,
                "restreichweite": 7.601894272000001,
                "ladezeit": 11178,
                "routen_id": 147,
                "legs": [
                    {
                        "lengthInMeters": 114427,
                        "travelTimeInSeconds": 4466,
                        "batteryConsumptionInkWh": 22.496699636363637,
                        "remainingChargeAtArrivalInkWh": 7.7433003636363615,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.081999999999997,
                        "chargingTimeInSeconds": 1959,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 91109,
                        "travelTimeInSeconds": 2724,
                        "batteryConsumptionInkWh": 22.12520290909091,
                        "remainingChargeAtArrivalInkWh": 3.956797090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2039,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293154,
                        "chargingParkName": "E.ON Pegnitz"
                    },
                    {
                        "lengthInMeters": 87330,
                        "travelTimeInSeconds": 2635,
                        "batteryConsumptionInkWh": 20.359229090909093,
                        "remainingChargeAtArrivalInkWh": 3.832770909090904,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.766,
                        "chargingTimeInSeconds": 1548,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293291,
                        "chargingParkName": "E.ON Berg"
                    },
                    {
                        "lengthInMeters": 63107,
                        "travelTimeInSeconds": 1858,
                        "batteryConsumptionInkWh": 13.958317090909091,
                        "remainingChargeAtArrivalInkWh": 3.8076829090909072,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.923999999999996,
                        "chargingTimeInSeconds": 1872,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220530,
                        "chargingParkName": "TEAG Bad Klosterlausnitz Jenaische Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 88503,
                        "travelTimeInSeconds": 2915,
                        "batteryConsumptionInkWh": 17.799488,
                        "remainingChargeAtArrivalInkWh": 4.124511999999996,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1971,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024814304,
                        "chargingParkName": "E.ON Sandersdorf-Brehna"
                    },
                    {
                        "lengthInMeters": 78329,
                        "travelTimeInSeconds": 2233,
                        "batteryConsumptionInkWh": 19.446664727272726,
                        "remainingChargeAtArrivalInkWh": 3.9893352727272706,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.989030272,
                        "chargingTimeInSeconds": 1789,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024217937,
                        "chargingParkName": "E.ON Linthe Am Kalkberg"
                    },
                    {
                        "lengthInMeters": 69851,
                        "travelTimeInSeconds": 2943,
                        "batteryConsumptionInkWh": 13.387136,
                        "remainingChargeAtArrivalInkWh": 7.601894272000001,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Munich",
        "Ziel": "Hamburg",
        "start_lat": 48.1372,
        "start_long": 11.5755,
        "dest_lat": 53.55,
        "dest_long": 10.01,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 791110,
                "dauer": 24597,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 20,
                "legs": [
                    {
                        "lengthInMeters": 791110,
                        "travelTimeInSeconds": 24597,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 778489,
                "dauer": 42768,
                "verbrauch": 240.26867709090908,
                "restreichweite": 16.651344984727277,
                "ladezeit": 16442,
                "routen_id": 148,
                "legs": [
                    {
                        "lengthInMeters": 170728,
                        "travelTimeInSeconds": 6037,
                        "batteryConsumptionInkWh": 52.81008727272727,
                        "remainingChargeAtArrivalInkWh": 13.509912727272734,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 51.398,
                        "chargingTimeInSeconds": 3338,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023651207,
                        "chargingParkName": "Lauf an der Pegnitz Waldluststra\u00dfe"
                    },
                    {
                        "lengthInMeters": 123522,
                        "travelTimeInSeconds": 3536,
                        "batteryConsumptionInkWh": 43.090075636363636,
                        "remainingChargeAtArrivalInkWh": 8.307924363636367,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.885000000000005,
                        "chargingTimeInSeconds": 3843,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293291,
                        "chargingParkName": "E.ON Berg"
                    },
                    {
                        "lengthInMeters": 143794,
                        "travelTimeInSeconds": 4212,
                        "batteryConsumptionInkWh": 44.848394181818186,
                        "remainingChargeAtArrivalInkWh": 9.036605818181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.569,
                        "chargingTimeInSeconds": 3542,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305183,
                        "chargingParkName": "ChargeIT Mobility Salzatal"
                    },
                    {
                        "lengthInMeters": 133135,
                        "travelTimeInSeconds": 4690,
                        "batteryConsumptionInkWh": 41.544450181818185,
                        "remainingChargeAtArrivalInkWh": 9.024549818181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 47.25300000000001,
                        "chargingTimeInSeconds": 3286,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517109,
                        "chargingParkName": "Volkswagen Helmstedt Konrad-Adenauer-Platz"
                    },
                    {
                        "lengthInMeters": 143712,
                        "travelTimeInSeconds": 5572,
                        "batteryConsumptionInkWh": 38.883177454545454,
                        "remainingChargeAtArrivalInkWh": 8.369822545454554,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 35.74383734836364,
                        "chargingTimeInSeconds": 2433,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219930,
                        "chargingParkName": "Melbeck Am Diemel"
                    },
                    {
                        "lengthInMeters": 63598,
                        "travelTimeInSeconds": 2278,
                        "batteryConsumptionInkWh": 19.092492363636364,
                        "remainingChargeAtArrivalInkWh": 16.651344984727277,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 784814,
                "dauer": 41202,
                "verbrauch": 183.43857000000003,
                "restreichweite": 9.045816542727273,
                "ladezeit": 15355,
                "routen_id": 149,
                "legs": [
                    {
                        "lengthInMeters": 114427,
                        "travelTimeInSeconds": 4466,
                        "batteryConsumptionInkWh": 24.89817590909091,
                        "remainingChargeAtArrivalInkWh": 11.10182409090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 1964,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 91109,
                        "travelTimeInSeconds": 2724,
                        "batteryConsumptionInkWh": 24.618319727272727,
                        "remainingChargeAtArrivalInkWh": 4.631680272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2212,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293154,
                        "chargingParkName": "E.ON Pegnitz"
                    },
                    {
                        "lengthInMeters": 87330,
                        "travelTimeInSeconds": 2635,
                        "batteryConsumptionInkWh": 22.76564690909091,
                        "remainingChargeAtArrivalInkWh": 4.684353090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2314,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293291,
                        "chargingParkName": "E.ON Berg"
                    },
                    {
                        "lengthInMeters": 98704,
                        "travelTimeInSeconds": 2810,
                        "batteryConsumptionInkWh": 24.037758181818184,
                        "remainingChargeAtArrivalInkWh": 4.762241818181817,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2344,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521734,
                        "chargingParkName": "Wei\u00dfenfels Selauer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 99351,
                        "travelTimeInSeconds": 2884,
                        "batteryConsumptionInkWh": 24.679311363636366,
                        "remainingChargeAtArrivalInkWh": 4.570688636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2216,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517825,
                        "chargingParkName": "Bernburg (Saale) Claude-Breda-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 86583,
                        "travelTimeInSeconds": 2478,
                        "batteryConsumptionInkWh": 22.500312545454545,
                        "remainingChargeAtArrivalInkWh": 4.949687454545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.6,
                        "chargingTimeInSeconds": 2437,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517109,
                        "chargingParkName": "Volkswagen Helmstedt Konrad-Adenauer-Platz"
                    },
                    {
                        "lengthInMeters": 143712,
                        "travelTimeInSeconds": 5572,
                        "batteryConsumptionInkWh": 26.030774,
                        "remainingChargeAtArrivalInkWh": 4.5692260000000005,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.95408790636364,
                        "chargingTimeInSeconds": 1868,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219930,
                        "chargingParkName": "Melbeck Am Diemel"
                    },
                    {
                        "lengthInMeters": 63598,
                        "travelTimeInSeconds": 2278,
                        "batteryConsumptionInkWh": 13.908271363636366,
                        "remainingChargeAtArrivalInkWh": 9.045816542727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 787315,
                "dauer": 41725,
                "verbrauch": 165.1214269090909,
                "restreichweite": 7.59262809890909,
                "ladezeit": 15604,
                "routen_id": 150,
                "legs": [
                    {
                        "lengthInMeters": 114427,
                        "travelTimeInSeconds": 4466,
                        "batteryConsumptionInkWh": 22.496699636363637,
                        "remainingChargeAtArrivalInkWh": 7.7433003636363615,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.631999999999998,
                        "chargingTimeInSeconds": 1226,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 55337,
                        "travelTimeInSeconds": 1654,
                        "batteryConsumptionInkWh": 12.562378181818183,
                        "remainingChargeAtArrivalInkWh": 4.069621818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 31.373999999999995,
                        "chargingTimeInSeconds": 3322,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 131072,
                        "travelTimeInSeconds": 4114,
                        "batteryConsumptionInkWh": 27.592695272727273,
                        "remainingChargeAtArrivalInkWh": 3.7813047272727225,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2137,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518191,
                        "chargingParkName": "Euerbach"
                    },
                    {
                        "lengthInMeters": 95632,
                        "travelTimeInSeconds": 3116,
                        "batteryConsumptionInkWh": 21.37295127272727,
                        "remainingChargeAtArrivalInkWh": 3.9530487272727264,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.789999999999996,
                        "chargingTimeInSeconds": 1776,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306930,
                        "chargingParkName": "Mer Burghaun"
                    },
                    {
                        "lengthInMeters": 77071,
                        "travelTimeInSeconds": 2339,
                        "batteryConsumptionInkWh": 16.985060363636364,
                        "remainingChargeAtArrivalInkWh": 3.804939636363631,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.522,
                        "chargingTimeInSeconds": 1609,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024218767,
                        "chargingParkName": "EAM Lohfelden Alexander-von-Humboldt-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 70787,
                        "travelTimeInSeconds": 2270,
                        "batteryConsumptionInkWh": 14.491783272727274,
                        "remainingChargeAtArrivalInkWh": 4.030216727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999993,
                        "chargingTimeInSeconds": 2005,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815013,
                        "chargingParkName": "Northeim Westerlange"
                    },
                    {
                        "lengthInMeters": 104179,
                        "travelTimeInSeconds": 3617,
                        "batteryConsumptionInkWh": 20.014824727272725,
                        "remainingChargeAtArrivalInkWh": 3.7991752727272683,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2107,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220138,
                        "chargingParkName": "enercity Burgwedel Im Klint"
                    },
                    {
                        "lengthInMeters": 93024,
                        "travelTimeInSeconds": 2816,
                        "batteryConsumptionInkWh": 20.850984727272724,
                        "remainingChargeAtArrivalInkWh": 4.097015272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.346677553454544,
                        "chargingTimeInSeconds": 1422,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026288129,
                        "chargingParkName": "Egestorf Bauernworth"
                    },
                    {
                        "lengthInMeters": 45786,
                        "travelTimeInSeconds": 1731,
                        "batteryConsumptionInkWh": 8.754049454545454,
                        "remainingChargeAtArrivalInkWh": 7.59262809890909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Munich",
        "Ziel": "Cologne",
        "start_lat": 48.1372,
        "start_long": 11.5755,
        "dest_lat": 50.9422,
        "dest_long": 6.9578,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 578957,
                "dauer": 19358,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 21,
                "legs": [
                    {
                        "lengthInMeters": 578957,
                        "travelTimeInSeconds": 19358,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 581495,
                "dauer": 30779,
                "verbrauch": 180.71398545454545,
                "restreichweite": 16.654067623272724,
                "ladezeit": 11592,
                "routen_id": 151,
                "legs": [
                    {
                        "lengthInMeters": 183782,
                        "travelTimeInSeconds": 6465,
                        "batteryConsumptionInkWh": 56.34070909090909,
                        "remainingChargeAtArrivalInkWh": 9.97929090909092,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.885000000000005,
                        "chargingTimeInSeconds": 3742,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517910,
                        "chargingParkName": "Erlangen Reutleser Weg"
                    },
                    {
                        "lengthInMeters": 126076,
                        "travelTimeInSeconds": 4315,
                        "batteryConsumptionInkWh": 36.88231781818182,
                        "remainingChargeAtArrivalInkWh": 17.002682181818187,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.963,
                        "chargingTimeInSeconds": 2164,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520925,
                        "chargingParkName": "Wertheim Almosenberg"
                    },
                    {
                        "lengthInMeters": 91083,
                        "travelTimeInSeconds": 2598,
                        "batteryConsumptionInkWh": 30.136043636363635,
                        "remainingChargeAtArrivalInkWh": 8.826956363636366,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 45.59500000000001,
                        "chargingTimeInSeconds": 3168,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220224,
                        "chargingParkName": "Mainova Flughafen Unterschweinstiege"
                    },
                    {
                        "lengthInMeters": 107815,
                        "travelTimeInSeconds": 3250,
                        "batteryConsumptionInkWh": 36.901103272727276,
                        "remainingChargeAtArrivalInkWh": 8.693896727272737,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 37.10787925963636,
                        "chargingTimeInSeconds": 2518,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295810,
                        "chargingParkName": "E.ON Dernbach"
                    },
                    {
                        "lengthInMeters": 72739,
                        "travelTimeInSeconds": 2559,
                        "batteryConsumptionInkWh": 20.45381163636364,
                        "remainingChargeAtArrivalInkWh": 16.654067623272724,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 588135,
                "dauer": 30493,
                "verbrauch": 135.10715845454547,
                "restreichweite": 9.042944127090909,
                "ladezeit": 10796,
                "routen_id": 152,
                "legs": [
                    {
                        "lengthInMeters": 114427,
                        "travelTimeInSeconds": 4466,
                        "batteryConsumptionInkWh": 24.89817590909091,
                        "remainingChargeAtArrivalInkWh": 11.10182409090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 1964,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 115507,
                        "travelTimeInSeconds": 3926,
                        "batteryConsumptionInkWh": 24.413977000000003,
                        "remainingChargeAtArrivalInkWh": 4.836022999999997,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 31.95,
                        "chargingTimeInSeconds": 2616,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026290304,
                        "chargingParkName": "Volkswagen Burghaslach W\u00fcrzburger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 108789,
                        "travelTimeInSeconds": 3400,
                        "batteryConsumptionInkWh": 27.20040272727273,
                        "remainingChargeAtArrivalInkWh": 4.749597272727268,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.150000000000002,
                        "chargingTimeInSeconds": 2414,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519945,
                        "chargingParkName": "Innogy Weibersbrunn"
                    },
                    {
                        "lengthInMeters": 104979,
                        "travelTimeInSeconds": 3173,
                        "batteryConsumptionInkWh": 25.20852790909091,
                        "remainingChargeAtArrivalInkWh": 4.941472090909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.650000000000002,
                        "chargingTimeInSeconds": 2055,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 80240,
                        "travelTimeInSeconds": 2394,
                        "batteryConsumptionInkWh": 20.914011363636366,
                        "remainingChargeAtArrivalInkWh": 4.735988636363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.515007672545455,
                        "chargingTimeInSeconds": 1747,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291769,
                        "chargingParkName": "E.ON Krunkel"
                    },
                    {
                        "lengthInMeters": 64193,
                        "travelTimeInSeconds": 2337,
                        "batteryConsumptionInkWh": 12.472063545454546,
                        "remainingChargeAtArrivalInkWh": 9.042944127090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 583560,
                "dauer": 29585,
                "verbrauch": 120.44114909090908,
                "restreichweite": 7.613945306181815,
                "ladezeit": 10088,
                "routen_id": 153,
                "legs": [
                    {
                        "lengthInMeters": 114427,
                        "travelTimeInSeconds": 4466,
                        "batteryConsumptionInkWh": 22.496699636363637,
                        "remainingChargeAtArrivalInkWh": 7.7433003636363615,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 1812,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 102132,
                        "travelTimeInSeconds": 3383,
                        "batteryConsumptionInkWh": 20.051272727272725,
                        "remainingChargeAtArrivalInkWh": 4.140727272727272,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.301999999999996,
                        "chargingTimeInSeconds": 1882,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220354,
                        "chargingParkName": "M\u00fchlhausen Marktplatz"
                    },
                    {
                        "lengthInMeters": 93585,
                        "travelTimeInSeconds": 3215,
                        "batteryConsumptionInkWh": 18.46432290909091,
                        "remainingChargeAtArrivalInkWh": 3.837677090909086,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2134,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520925,
                        "chargingParkName": "Wertheim Almosenberg"
                    },
                    {
                        "lengthInMeters": 91083,
                        "travelTimeInSeconds": 2598,
                        "batteryConsumptionInkWh": 21.262340363636362,
                        "remainingChargeAtArrivalInkWh": 4.063659636363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999996,
                        "chargingTimeInSeconds": 1915,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220224,
                        "chargingParkName": "Mainova Flughafen Unterschweinstiege"
                    },
                    {
                        "lengthInMeters": 85318,
                        "travelTimeInSeconds": 2635,
                        "batteryConsumptionInkWh": 18.753860363636363,
                        "remainingChargeAtArrivalInkWh": 3.926139636363633,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.026598397090904,
                        "chargingTimeInSeconds": 2345,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 97015,
                        "travelTimeInSeconds": 3201,
                        "batteryConsumptionInkWh": 19.41265309090909,
                        "remainingChargeAtArrivalInkWh": 7.613945306181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Munich",
        "Ziel": "Frankfurt",
        "start_lat": 48.1372,
        "start_long": 11.5755,
        "dest_lat": 50.1136,
        "dest_long": 8.6797,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 394528,
                "dauer": 13976,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 22,
                "legs": [
                    {
                        "lengthInMeters": 394528,
                        "travelTimeInSeconds": 13976,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 398390,
                "dauer": 20359,
                "verbrauch": 122.09397454545453,
                "restreichweite": 16.670668120727274,
                "ladezeit": 6346,
                "routen_id": 154,
                "legs": [
                    {
                        "lengthInMeters": 169543,
                        "travelTimeInSeconds": 6009,
                        "batteryConsumptionInkWh": 52.25132436363636,
                        "remainingChargeAtArrivalInkWh": 14.06867563636365,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 49.74,
                        "chargingTimeInSeconds": 3175,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 139619,
                        "travelTimeInSeconds": 4714,
                        "batteryConsumptionInkWh": 40.77487272727273,
                        "remainingChargeAtArrivalInkWh": 8.965127272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 45.73844557527273,
                        "chargingTimeInSeconds": 3171,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520925,
                        "chargingParkName": "Wertheim Almosenberg"
                    },
                    {
                        "lengthInMeters": 89228,
                        "travelTimeInSeconds": 3291,
                        "batteryConsumptionInkWh": 29.067777454545453,
                        "remainingChargeAtArrivalInkWh": 16.670668120727274,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 399584,
                "dauer": 20716,
                "verbrauch": 88.99167263636363,
                "restreichweite": 9.054030498000003,
                "ladezeit": 6261,
                "routen_id": 155,
                "legs": [
                    {
                        "lengthInMeters": 114870,
                        "travelTimeInSeconds": 4484,
                        "batteryConsumptionInkWh": 24.929294090909092,
                        "remainingChargeAtArrivalInkWh": 11.070705909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.0,
                        "chargingTimeInSeconds": 1791,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 102132,
                        "travelTimeInSeconds": 3383,
                        "batteryConsumptionInkWh": 22.156145454545456,
                        "remainingChargeAtArrivalInkWh": 4.843854545454544,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2304,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220354,
                        "chargingParkName": "M\u00fchlhausen Marktplatz"
                    },
                    {
                        "lengthInMeters": 104394,
                        "travelTimeInSeconds": 3593,
                        "batteryConsumptionInkWh": 23.942951454545458,
                        "remainingChargeAtArrivalInkWh": 4.857048545454543,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.01731213436364,
                        "chargingTimeInSeconds": 2166,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025358224,
                        "chargingParkName": "Esselbach Am B\u00e4rnroth"
                    },
                    {
                        "lengthInMeters": 78188,
                        "travelTimeInSeconds": 2996,
                        "batteryConsumptionInkWh": 17.963281636363636,
                        "remainingChargeAtArrivalInkWh": 9.054030498000003,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 399141,
                "dauer": 20388,
                "verbrauch": 80.27252945454543,
                "restreichweite": 7.607540983272727,
                "ladezeit": 5946,
                "routen_id": 156,
                "legs": [
                    {
                        "lengthInMeters": 114427,
                        "travelTimeInSeconds": 4465,
                        "batteryConsumptionInkWh": 22.49660218181818,
                        "remainingChargeAtArrivalInkWh": 7.743397818181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 1812,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 102132,
                        "travelTimeInSeconds": 3383,
                        "batteryConsumptionInkWh": 20.051272727272725,
                        "remainingChargeAtArrivalInkWh": 4.140727272727272,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2116,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220354,
                        "chargingParkName": "M\u00fchlhausen Marktplatz"
                    },
                    {
                        "lengthInMeters": 104394,
                        "travelTimeInSeconds": 3594,
                        "batteryConsumptionInkWh": 21.514162909090906,
                        "remainingChargeAtArrivalInkWh": 3.8118370909090906,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.818032619636362,
                        "chargingTimeInSeconds": 2018,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025358224,
                        "chargingParkName": "Esselbach Am B\u00e4rnroth"
                    },
                    {
                        "lengthInMeters": 78188,
                        "travelTimeInSeconds": 2999,
                        "batteryConsumptionInkWh": 16.210491636363635,
                        "remainingChargeAtArrivalInkWh": 7.607540983272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Munich",
        "Ziel": "Bremen",
        "start_lat": 48.1372,
        "start_long": 11.5755,
        "dest_lat": 53.1153,
        "dest_long": 8.7975,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 766935,
                "dauer": 23573,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 23,
                "legs": [
                    {
                        "lengthInMeters": 766935,
                        "travelTimeInSeconds": 23573,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 785096,
                "dauer": 41975,
                "verbrauch": 250.35500509090912,
                "restreichweite": 16.688476731636364,
                "ladezeit": 17230,
                "routen_id": 157,
                "legs": [
                    {
                        "lengthInMeters": 170728,
                        "travelTimeInSeconds": 6037,
                        "batteryConsumptionInkWh": 52.810296,
                        "remainingChargeAtArrivalInkWh": 13.509704000000006,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 51.398,
                        "chargingTimeInSeconds": 3338,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023651207,
                        "chargingParkName": "Lauf an der Pegnitz Waldluststra\u00dfe"
                    },
                    {
                        "lengthInMeters": 123522,
                        "travelTimeInSeconds": 3536,
                        "batteryConsumptionInkWh": 43.09028436363637,
                        "remainingChargeAtArrivalInkWh": 8.307715636363632,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.885000000000005,
                        "chargingTimeInSeconds": 3843,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293291,
                        "chargingParkName": "E.ON Berg"
                    },
                    {
                        "lengthInMeters": 143794,
                        "travelTimeInSeconds": 4212,
                        "batteryConsumptionInkWh": 44.848394181818186,
                        "remainingChargeAtArrivalInkWh": 9.036605818181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.569,
                        "chargingTimeInSeconds": 3542,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305183,
                        "chargingParkName": "ChargeIT Mobility Salzatal"
                    },
                    {
                        "lengthInMeters": 133135,
                        "travelTimeInSeconds": 4690,
                        "batteryConsumptionInkWh": 41.54403272727273,
                        "remainingChargeAtArrivalInkWh": 9.024967272727274,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.963,
                        "chargingTimeInSeconds": 2643,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517109,
                        "chargingParkName": "Volkswagen Helmstedt Konrad-Adenauer-Platz"
                    },
                    {
                        "lengthInMeters": 96108,
                        "travelTimeInSeconds": 2818,
                        "batteryConsumptionInkWh": 30.403631999999998,
                        "remainingChargeAtArrivalInkWh": 8.559368000000003,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 54.346842549818184,
                        "chargingTimeInSeconds": 3864,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519500,
                        "chargingParkName": "EWE Langenhagen Br\u00fcsseler Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 117809,
                        "travelTimeInSeconds": 3452,
                        "batteryConsumptionInkWh": 37.65836581818182,
                        "remainingChargeAtArrivalInkWh": 16.688476731636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 767860,
                "dauer": 40709,
                "verbrauch": 171.88449281818185,
                "restreichweite": 9.036557638909091,
                "ladezeit": 14369,
                "routen_id": 158,
                "legs": [
                    {
                        "lengthInMeters": 137015,
                        "travelTimeInSeconds": 5329,
                        "batteryConsumptionInkWh": 30.153103272727275,
                        "remainingChargeAtArrivalInkWh": 5.846896727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2244,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023665114,
                        "chargingParkName": "Hilpoltstein Talstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 130457,
                        "travelTimeInSeconds": 4885,
                        "batteryConsumptionInkWh": 24.128519545454548,
                        "remainingChargeAtArrivalInkWh": 4.671480454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.35,
                        "chargingTimeInSeconds": 2280,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024218034,
                        "chargingParkName": "Unterfr\u00e4nkische \u00dcberlandzentrale Gerolzhofen Dingolsh\u00e4user Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 101578,
                        "travelTimeInSeconds": 3220,
                        "batteryConsumptionInkWh": 23.790991,
                        "remainingChargeAtArrivalInkWh": 4.559009,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.400000000000002,
                        "chargingTimeInSeconds": 1903,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024813105,
                        "chargingParkName": "Allego Eichenzell Fuldaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 75036,
                        "travelTimeInSeconds": 2361,
                        "batteryConsumptionInkWh": 18.75098654545455,
                        "remainingChargeAtArrivalInkWh": 4.649013454545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2351,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522415,
                        "chargingParkName": "EAM Kn\u00fcllwald"
                    },
                    {
                        "lengthInMeters": 103992,
                        "travelTimeInSeconds": 3195,
                        "batteryConsumptionInkWh": 24.746422909090914,
                        "remainingChargeAtArrivalInkWh": 4.503577090909086,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.0,
                        "chargingTimeInSeconds": 2185,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815013,
                        "chargingParkName": "Northeim Westerlange"
                    },
                    {
                        "lengthInMeters": 104179,
                        "travelTimeInSeconds": 3617,
                        "batteryConsumptionInkWh": 22.080943181818185,
                        "remainingChargeAtArrivalInkWh": 4.919056818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.85,
                        "chargingTimeInSeconds": 1917,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220138,
                        "chargingParkName": "enercity Burgwedel Im Klint"
                    },
                    {
                        "lengthInMeters": 74203,
                        "travelTimeInSeconds": 2224,
                        "batteryConsumptionInkWh": 18.95470690909091,
                        "remainingChargeAtArrivalInkWh": 4.895293090909092,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.315377093454547,
                        "chargingTimeInSeconds": 1489,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303503,
                        "chargingParkName": "Total Verden (Aller) Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 41400,
                        "travelTimeInSeconds": 1510,
                        "batteryConsumptionInkWh": 9.278819454545456,
                        "remainingChargeAtArrivalInkWh": 9.036557638909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 772700,
                "dauer": 40420,
                "verbrauch": 157.84108509090908,
                "restreichweite": 7.592011016727273,
                "ladezeit": 14349,
                "routen_id": 159,
                "legs": [
                    {
                        "lengthInMeters": 114870,
                        "travelTimeInSeconds": 4484,
                        "batteryConsumptionInkWh": 22.526520727272725,
                        "remainingChargeAtArrivalInkWh": 7.713479272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 1813,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 102132,
                        "travelTimeInSeconds": 3382,
                        "batteryConsumptionInkWh": 20.052929454545456,
                        "remainingChargeAtArrivalInkWh": 4.1390705454545405,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2087,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220354,
                        "chargingParkName": "M\u00fchlhausen Marktplatz"
                    },
                    {
                        "lengthInMeters": 109944,
                        "travelTimeInSeconds": 3839,
                        "batteryConsumptionInkWh": 20.940545454545454,
                        "remainingChargeAtArrivalInkWh": 4.007454545454543,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.861999999999995,
                        "chargingTimeInSeconds": 2983,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305516,
                        "chargingParkName": "ChargeIT Mobility Oberthulba Hammelburger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 115263,
                        "travelTimeInSeconds": 3483,
                        "batteryConsumptionInkWh": 25.80976436363636,
                        "remainingChargeAtArrivalInkWh": 4.052235636363633,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2004,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522415,
                        "chargingParkName": "EAM Kn\u00fcllwald"
                    },
                    {
                        "lengthInMeters": 90424,
                        "travelTimeInSeconds": 2673,
                        "batteryConsumptionInkWh": 19.849444363636362,
                        "remainingChargeAtArrivalInkWh": 3.9645556363636345,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1950,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302741,
                        "chargingParkName": "Mer N\u00f6rten-Hardenberg Unter dem Pferdestiege"
                    },
                    {
                        "lengthInMeters": 105499,
                        "travelTimeInSeconds": 3768,
                        "batteryConsumptionInkWh": 19.26520436363636,
                        "remainingChargeAtArrivalInkWh": 3.7927956363636355,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2108,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291968,
                        "chargingParkName": "enercity Kirchrode Brabeckstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93168,
                        "travelTimeInSeconds": 2933,
                        "batteryConsumptionInkWh": 20.951168,
                        "remainingChargeAtArrivalInkWh": 3.9968319999999977,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.037519380363637,
                        "chargingTimeInSeconds": 1404,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303503,
                        "chargingParkName": "Total Verden (Aller) Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 41400,
                        "travelTimeInSeconds": 1510,
                        "batteryConsumptionInkWh": 8.445508363636364,
                        "remainingChargeAtArrivalInkWh": 7.592011016727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Munich",
        "Ziel": "Stuttgart",
        "start_lat": 48.1372,
        "start_long": 11.5755,
        "dest_lat": 48.7761,
        "dest_long": 9.1775,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 232696,
                "dauer": 8218,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 24,
                "legs": [
                    {
                        "lengthInMeters": 232696,
                        "travelTimeInSeconds": 8218,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 227585,
                "dauer": 10579,
                "verbrauch": 71.19186327272728,
                "restreichweite": 16.650886202181823,
                "ladezeit": 2078,
                "routen_id": 160,
                "legs": [
                    {
                        "lengthInMeters": 157890,
                        "travelTimeInSeconds": 5489,
                        "batteryConsumptionInkWh": 52.328762181818185,
                        "remainingChargeAtArrivalInkWh": 13.991237818181823,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 35.51398729309091,
                        "chargingTimeInSeconds": 2078,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295432,
                        "chargingParkName": "E.ON Nellingen"
                    },
                    {
                        "lengthInMeters": 69695,
                        "travelTimeInSeconds": 3013,
                        "batteryConsumptionInkWh": 18.86310109090909,
                        "remainingChargeAtArrivalInkWh": 16.650886202181823,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 229196,
                "dauer": 11495,
                "verbrauch": 53.17869072727274,
                "restreichweite": 9.055952564363636,
                "ladezeit": 3081,
                "routen_id": 161,
                "legs": [
                    {
                        "lengthInMeters": 67169,
                        "travelTimeInSeconds": 3029,
                        "batteryConsumptionInkWh": 14.089068000000001,
                        "remainingChargeAtArrivalInkWh": 21.910932,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.2,
                        "chargingTimeInSeconds": 855,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023562085,
                        "chargingParkName": "innogy Friedberg Winterbruckenweg"
                    },
                    {
                        "lengthInMeters": 73035,
                        "travelTimeInSeconds": 1978,
                        "batteryConsumptionInkWh": 20.32121,
                        "remainingChargeAtArrivalInkWh": 4.878789999999999,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.824365291636365,
                        "chargingTimeInSeconds": 2226,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023660944,
                        "chargingParkName": "EnBW Langenau Seligweiler"
                    },
                    {
                        "lengthInMeters": 88992,
                        "travelTimeInSeconds": 3407,
                        "batteryConsumptionInkWh": 18.76841272727273,
                        "remainingChargeAtArrivalInkWh": 9.055952564363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 229196,
                "dauer": 11443,
                "verbrauch": 47.86148654545454,
                "restreichweite": 7.609322842181818,
                "ladezeit": 3028,
                "routen_id": 162,
                "legs": [
                    {
                        "lengthInMeters": 67169,
                        "travelTimeInSeconds": 3029,
                        "batteryConsumptionInkWh": 12.761282909090909,
                        "remainingChargeAtArrivalInkWh": 17.47871709090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.301999999999996,
                        "chargingTimeInSeconds": 974,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023562085,
                        "chargingParkName": "innogy Friedberg Winterbruckenweg"
                    },
                    {
                        "lengthInMeters": 73035,
                        "travelTimeInSeconds": 1978,
                        "batteryConsumptionInkWh": 18.29173090909091,
                        "remainingChargeAtArrivalInkWh": 4.0102690909090875,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.417795569454544,
                        "chargingTimeInSeconds": 2054,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023660944,
                        "chargingParkName": "EnBW Langenau Seligweiler"
                    },
                    {
                        "lengthInMeters": 88992,
                        "travelTimeInSeconds": 3408,
                        "batteryConsumptionInkWh": 16.808472727272726,
                        "remainingChargeAtArrivalInkWh": 7.609322842181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Munich",
        "Ziel": "D\u00fcsseldorf",
        "start_lat": 48.1372,
        "start_long": 11.5755,
        "dest_lat": 51.2311,
        "dest_long": 6.7724,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 618627,
                "dauer": 21305,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 25,
                "legs": [
                    {
                        "lengthInMeters": 618627,
                        "travelTimeInSeconds": 21305,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 620983,
                "dauer": 32940,
                "verbrauch": 191.71433018181818,
                "restreichweite": 16.676843108363634,
                "ladezeit": 12382,
                "routen_id": 163,
                "legs": [
                    {
                        "lengthInMeters": 169100,
                        "travelTimeInSeconds": 5991,
                        "batteryConsumptionInkWh": 52.14946545454546,
                        "remainingChargeAtArrivalInkWh": 14.17053454545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 49.74,
                        "chargingTimeInSeconds": 3169,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 139619,
                        "travelTimeInSeconds": 4714,
                        "batteryConsumptionInkWh": 40.77382909090909,
                        "remainingChargeAtArrivalInkWh": 8.966170909090913,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.963,
                        "chargingTimeInSeconds": 2646,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520925,
                        "chargingParkName": "Wertheim Almosenberg"
                    },
                    {
                        "lengthInMeters": 91083,
                        "travelTimeInSeconds": 2598,
                        "batteryConsumptionInkWh": 30.137087272727275,
                        "remainingChargeAtArrivalInkWh": 8.825912727272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 45.59500000000001,
                        "chargingTimeInSeconds": 3169,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220224,
                        "chargingParkName": "Mainova Flughafen Unterschweinstiege"
                    },
                    {
                        "lengthInMeters": 107815,
                        "travelTimeInSeconds": 3268,
                        "batteryConsumptionInkWh": 36.812394181818185,
                        "remainingChargeAtArrivalInkWh": 8.782605818181828,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.51839729018182,
                        "chargingTimeInSeconds": 3398,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295810,
                        "chargingParkName": "E.ON Dernbach"
                    },
                    {
                        "lengthInMeters": 113366,
                        "travelTimeInSeconds": 3988,
                        "batteryConsumptionInkWh": 31.841554181818182,
                        "remainingChargeAtArrivalInkWh": 16.676843108363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 629205,
                "dauer": 32548,
                "verbrauch": 143.23190827272728,
                "restreichweite": 9.058887008909092,
                "ladezeit": 11422,
                "routen_id": 164,
                "legs": [
                    {
                        "lengthInMeters": 114870,
                        "travelTimeInSeconds": 4483,
                        "batteryConsumptionInkWh": 24.930435090909096,
                        "remainingChargeAtArrivalInkWh": 11.069564909090904,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 1966,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 115507,
                        "travelTimeInSeconds": 3926,
                        "batteryConsumptionInkWh": 24.414495636363636,
                        "remainingChargeAtArrivalInkWh": 4.835504363636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 31.95,
                        "chargingTimeInSeconds": 2616,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026290304,
                        "chargingParkName": "Volkswagen Burghaslach W\u00fcrzburger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 108789,
                        "travelTimeInSeconds": 3400,
                        "batteryConsumptionInkWh": 27.20040272727273,
                        "remainingChargeAtArrivalInkWh": 4.749597272727268,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.150000000000002,
                        "chargingTimeInSeconds": 2414,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519945,
                        "chargingParkName": "Innogy Weibersbrunn"
                    },
                    {
                        "lengthInMeters": 104979,
                        "travelTimeInSeconds": 3156,
                        "batteryConsumptionInkWh": 25.321590636363638,
                        "remainingChargeAtArrivalInkWh": 4.828409363636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.650000000000002,
                        "chargingTimeInSeconds": 2061,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 80240,
                        "travelTimeInSeconds": 2394,
                        "batteryConsumptionInkWh": 20.92147972727273,
                        "remainingChargeAtArrivalInkWh": 4.728520272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.50239146345455,
                        "chargingTimeInSeconds": 2365,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291769,
                        "chargingParkName": "E.ON Krunkel"
                    },
                    {
                        "lengthInMeters": 104820,
                        "travelTimeInSeconds": 3767,
                        "batteryConsumptionInkWh": 20.443504454545458,
                        "remainingChargeAtArrivalInkWh": 9.058887008909092,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 624030,
                "dauer": 32226,
                "verbrauch": 127.38975563636362,
                "restreichweite": 7.598569902545455,
                "ladezeit": 11011,
                "routen_id": 165,
                "legs": [
                    {
                        "lengthInMeters": 114870,
                        "travelTimeInSeconds": 4483,
                        "batteryConsumptionInkWh": 22.527690181818183,
                        "remainingChargeAtArrivalInkWh": 7.712309818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 1814,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 102132,
                        "travelTimeInSeconds": 3382,
                        "batteryConsumptionInkWh": 20.05302690909091,
                        "remainingChargeAtArrivalInkWh": 4.1389730909090865,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.301999999999996,
                        "chargingTimeInSeconds": 1882,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220354,
                        "chargingParkName": "M\u00fchlhausen Marktplatz"
                    },
                    {
                        "lengthInMeters": 93585,
                        "travelTimeInSeconds": 3214,
                        "batteryConsumptionInkWh": 18.464907636363638,
                        "remainingChargeAtArrivalInkWh": 3.8370923636363585,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2134,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520925,
                        "chargingParkName": "Wertheim Almosenberg"
                    },
                    {
                        "lengthInMeters": 91083,
                        "travelTimeInSeconds": 2598,
                        "batteryConsumptionInkWh": 21.26165818181818,
                        "remainingChargeAtArrivalInkWh": 4.064341818181816,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999996,
                        "chargingTimeInSeconds": 1915,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220224,
                        "chargingParkName": "Mainova Flughafen Unterschweinstiege"
                    },
                    {
                        "lengthInMeters": 85318,
                        "travelTimeInSeconds": 2618,
                        "batteryConsumptionInkWh": 18.855797818181816,
                        "remainingChargeAtArrivalInkWh": 3.8242021818181797,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.522,
                        "chargingTimeInSeconds": 1608,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 67540,
                        "travelTimeInSeconds": 2134,
                        "batteryConsumptionInkWh": 14.501723636363636,
                        "remainingChargeAtArrivalInkWh": 4.020276363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.323521175272727,
                        "chargingTimeInSeconds": 1658,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291655,
                        "chargingParkName": "E.ON Siegburg"
                    },
                    {
                        "lengthInMeters": 69502,
                        "travelTimeInSeconds": 2785,
                        "batteryConsumptionInkWh": 11.724951272727273,
                        "remainingChargeAtArrivalInkWh": 7.598569902545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Munich",
        "Ziel": "Dortmund",
        "start_lat": 48.1372,
        "start_long": 11.5755,
        "dest_lat": 51.5139,
        "dest_long": 7.4653,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 605420,
                "dauer": 20527,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 26,
                "legs": [
                    {
                        "lengthInMeters": 605420,
                        "travelTimeInSeconds": 20527,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 613462,
                "dauer": 33443,
                "verbrauch": 189.14406254545455,
                "restreichweite": 16.68898727854546,
                "ladezeit": 12175,
                "routen_id": 166,
                "legs": [
                    {
                        "lengthInMeters": 169543,
                        "travelTimeInSeconds": 6009,
                        "batteryConsumptionInkWh": 52.252576727272725,
                        "remainingChargeAtArrivalInkWh": 14.067423272727282,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.476000000000006,
                        "chargingTimeInSeconds": 2148,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 101182,
                        "travelTimeInSeconds": 3739,
                        "batteryConsumptionInkWh": 27.839000000000002,
                        "remainingChargeAtArrivalInkWh": 8.637000000000004,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.792,
                        "chargingTimeInSeconds": 2730,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024813432,
                        "chargingParkName": "Dettelbach Mainfrankenpark"
                    },
                    {
                        "lengthInMeters": 94656,
                        "travelTimeInSeconds": 2756,
                        "batteryConsumptionInkWh": 31.241254545454545,
                        "remainingChargeAtArrivalInkWh": 8.550745454545456,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 3442,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219196,
                        "chargingParkName": "S\u00fcwag Kleinostheim Kardinal-Faulhaber-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 121522,
                        "travelTimeInSeconds": 3656,
                        "batteryConsumptionInkWh": 39.897592,
                        "remainingChargeAtArrivalInkWh": 9.013407999999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 54.602626551272735,
                        "chargingTimeInSeconds": 3855,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378204,
                        "chargingParkName": "EnBW Dillenburg Stadionstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 126559,
                        "travelTimeInSeconds": 5109,
                        "batteryConsumptionInkWh": 37.91363927272727,
                        "remainingChargeAtArrivalInkWh": 16.68898727854546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 627950,
                "dauer": 33578,
                "verbrauch": 140.818797,
                "restreichweite": 9.043111128000001,
                "ladezeit": 11072,
                "routen_id": 167,
                "legs": [
                    {
                        "lengthInMeters": 137458,
                        "travelTimeInSeconds": 5347,
                        "batteryConsumptionInkWh": 30.185466181818185,
                        "remainingChargeAtArrivalInkWh": 5.814533818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2176,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023665114,
                        "chargingParkName": "Hilpoltstein Talstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 122803,
                        "travelTimeInSeconds": 4667,
                        "batteryConsumptionInkWh": 23.125165636363636,
                        "remainingChargeAtArrivalInkWh": 4.774834363636366,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.7,
                        "chargingTimeInSeconds": 2379,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292666,
                        "chargingParkName": "E.ON Kleinlangheim"
                    },
                    {
                        "lengthInMeters": 93264,
                        "travelTimeInSeconds": 2706,
                        "batteryConsumptionInkWh": 24.918921363636365,
                        "remainingChargeAtArrivalInkWh": 4.781078636363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.150000000000002,
                        "chargingTimeInSeconds": 2412,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023965157,
                        "chargingParkName": "innogy H\u00f6sbach Siemensstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97370,
                        "travelTimeInSeconds": 2781,
                        "batteryConsumptionInkWh": 25.38642018181818,
                        "remainingChargeAtArrivalInkWh": 4.763579818181821,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2344,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296140,
                        "chargingParkName": "ALDI S\u00dcD Linden Carl-Benz-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 104966,
                        "travelTimeInSeconds": 3470,
                        "batteryConsumptionInkWh": 24.64725963636364,
                        "remainingChargeAtArrivalInkWh": 4.602740363636361,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.598675128000004,
                        "chargingTimeInSeconds": 1761,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226535,
                        "chargingParkName": "Drolshagen Vorm Bahnhof"
                    },
                    {
                        "lengthInMeters": 72089,
                        "travelTimeInSeconds": 3533,
                        "batteryConsumptionInkWh": 12.555564000000002,
                        "remainingChargeAtArrivalInkWh": 9.043111128000001,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 621762,
                "dauer": 32787,
                "verbrauch": 125.60682472727272,
                "restreichweite": 7.597547604363633,
                "ladezeit": 10867,
                "routen_id": 168,
                "legs": [
                    {
                        "lengthInMeters": 114870,
                        "travelTimeInSeconds": 4483,
                        "batteryConsumptionInkWh": 22.527690181818183,
                        "remainingChargeAtArrivalInkWh": 7.712309818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.631999999999998,
                        "chargingTimeInSeconds": 1228,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 55337,
                        "travelTimeInSeconds": 1653,
                        "batteryConsumptionInkWh": 12.562378181818183,
                        "remainingChargeAtArrivalInkWh": 4.069621818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1944,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 112398,
                        "travelTimeInSeconds": 4080,
                        "batteryConsumptionInkWh": 19.04797818181818,
                        "remainingChargeAtArrivalInkWh": 4.010021818181816,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1978,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303647,
                        "chargingParkName": "Mer W\u00fcrzburg Randersackerer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 83283,
                        "travelTimeInSeconds": 2443,
                        "batteryConsumptionInkWh": 19.604638545454545,
                        "remainingChargeAtArrivalInkWh": 3.8313614545454513,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2075,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219196,
                        "chargingParkName": "S\u00fcwag Kleinostheim Kardinal-Faulhaber-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 86496,
                        "travelTimeInSeconds": 2525,
                        "batteryConsumptionInkWh": 20.641847272727272,
                        "remainingChargeAtArrivalInkWh": 3.9281527272727246,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2011,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025376870,
                        "chargingParkName": "Garbenheim Am Leitz-Park"
                    },
                    {
                        "lengthInMeters": 97289,
                        "travelTimeInSeconds": 3202,
                        "batteryConsumptionInkWh": 20.00849018181818,
                        "remainingChargeAtArrivalInkWh": 3.805509818181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.811349786181815,
                        "chargingTimeInSeconds": 1631,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226535,
                        "chargingParkName": "Drolshagen Vorm Bahnhof"
                    },
                    {
                        "lengthInMeters": 72089,
                        "travelTimeInSeconds": 3533,
                        "batteryConsumptionInkWh": 11.213802181818181,
                        "remainingChargeAtArrivalInkWh": 7.597547604363633,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Munich",
        "Ziel": "Essen",
        "start_lat": 48.1372,
        "start_long": 11.5755,
        "dest_lat": 51.4508,
        "dest_long": 7.0131,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 635600,
                "dauer": 21373,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 27,
                "legs": [
                    {
                        "lengthInMeters": 635600,
                        "travelTimeInSeconds": 21373,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 649760,
                "dauer": 35376,
                "verbrauch": 199.34706909090912,
                "restreichweite": 16.660180827636363,
                "ladezeit": 12897,
                "routen_id": 169,
                "legs": [
                    {
                        "lengthInMeters": 183782,
                        "travelTimeInSeconds": 6465,
                        "batteryConsumptionInkWh": 56.34196145454546,
                        "remainingChargeAtArrivalInkWh": 9.978038545454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.569,
                        "chargingTimeInSeconds": 3485,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517910,
                        "chargingParkName": "Erlangen Reutleser Weg"
                    },
                    {
                        "lengthInMeters": 136885,
                        "travelTimeInSeconds": 4702,
                        "batteryConsumptionInkWh": 41.597466909090905,
                        "remainingChargeAtArrivalInkWh": 8.971533090909098,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.885000000000005,
                        "chargingTimeInSeconds": 3803,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025358224,
                        "chargingParkName": "Esselbach Am B\u00e4rnroth"
                    },
                    {
                        "lengthInMeters": 140224,
                        "travelTimeInSeconds": 4007,
                        "batteryConsumptionInkWh": 45.10638109090909,
                        "remainingChargeAtArrivalInkWh": 8.778618909090916,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 41.45,
                        "chargingTimeInSeconds": 2850,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026288000,
                        "chargingParkName": "Total Hermannstein Dillfeld"
                    },
                    {
                        "lengthInMeters": 97865,
                        "travelTimeInSeconds": 3246,
                        "batteryConsumptionInkWh": 32.790845818181815,
                        "remainingChargeAtArrivalInkWh": 8.659154181818188,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.170594645818184,
                        "chargingTimeInSeconds": 2759,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519522,
                        "chargingParkName": "Meinerzhagen Heerstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 91004,
                        "travelTimeInSeconds": 4058,
                        "batteryConsumptionInkWh": 23.51041381818182,
                        "remainingChargeAtArrivalInkWh": 16.660180827636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 658118,
                "dauer": 34866,
                "verbrauch": 146.94223281818182,
                "restreichweite": 9.055356132545455,
                "ladezeit": 11547,
                "routen_id": 170,
                "legs": [
                    {
                        "lengthInMeters": 137458,
                        "travelTimeInSeconds": 5347,
                        "batteryConsumptionInkWh": 30.185466181818185,
                        "remainingChargeAtArrivalInkWh": 5.814533818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2176,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023665114,
                        "chargingParkName": "Hilpoltstein Talstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 122803,
                        "travelTimeInSeconds": 4667,
                        "batteryConsumptionInkWh": 23.126099181818187,
                        "remainingChargeAtArrivalInkWh": 4.773900818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.7,
                        "chargingTimeInSeconds": 2379,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292666,
                        "chargingParkName": "E.ON Kleinlangheim"
                    },
                    {
                        "lengthInMeters": 93264,
                        "travelTimeInSeconds": 2706,
                        "batteryConsumptionInkWh": 24.918921363636365,
                        "remainingChargeAtArrivalInkWh": 4.781078636363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.150000000000002,
                        "chargingTimeInSeconds": 2412,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023965157,
                        "chargingParkName": "innogy H\u00f6sbach Siemensstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97370,
                        "travelTimeInSeconds": 2781,
                        "batteryConsumptionInkWh": 25.38642018181818,
                        "remainingChargeAtArrivalInkWh": 4.763579818181821,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2344,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026296140,
                        "chargingParkName": "ALDI S\u00dcD Linden Carl-Benz-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 104966,
                        "travelTimeInSeconds": 3470,
                        "batteryConsumptionInkWh": 24.64725963636364,
                        "remainingChargeAtArrivalInkWh": 4.602740363636361,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.73342240527273,
                        "chargingTimeInSeconds": 2236,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226535,
                        "chargingParkName": "Drolshagen Vorm Bahnhof"
                    },
                    {
                        "lengthInMeters": 102257,
                        "travelTimeInSeconds": 4347,
                        "batteryConsumptionInkWh": 18.678066272727275,
                        "remainingChargeAtArrivalInkWh": 9.055356132545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 641557,
                "dauer": 33039,
                "verbrauch": 131.52182836363636,
                "restreichweite": 7.606828980363634,
                "ladezeit": 11332,
                "routen_id": 171,
                "legs": [
                    {
                        "lengthInMeters": 114870,
                        "travelTimeInSeconds": 4483,
                        "batteryConsumptionInkWh": 22.527690181818183,
                        "remainingChargeAtArrivalInkWh": 7.712309818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 1814,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 102132,
                        "travelTimeInSeconds": 3382,
                        "batteryConsumptionInkWh": 20.053904,
                        "remainingChargeAtArrivalInkWh": 4.138095999999997,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.301999999999996,
                        "chargingTimeInSeconds": 1882,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220354,
                        "chargingParkName": "M\u00fchlhausen Marktplatz"
                    },
                    {
                        "lengthInMeters": 93585,
                        "travelTimeInSeconds": 3214,
                        "batteryConsumptionInkWh": 18.464907636363638,
                        "remainingChargeAtArrivalInkWh": 3.8370923636363585,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2134,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520925,
                        "chargingParkName": "Wertheim Almosenberg"
                    },
                    {
                        "lengthInMeters": 91083,
                        "travelTimeInSeconds": 2598,
                        "batteryConsumptionInkWh": 21.26165818181818,
                        "remainingChargeAtArrivalInkWh": 4.064341818181816,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999996,
                        "chargingTimeInSeconds": 1915,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220224,
                        "chargingParkName": "Mainova Flughafen Unterschweinstiege"
                    },
                    {
                        "lengthInMeters": 85318,
                        "travelTimeInSeconds": 2618,
                        "batteryConsumptionInkWh": 18.857454545454544,
                        "remainingChargeAtArrivalInkWh": 3.822545454545452,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.522,
                        "chargingTimeInSeconds": 1608,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 67540,
                        "travelTimeInSeconds": 2134,
                        "batteryConsumptionInkWh": 14.501723636363636,
                        "remainingChargeAtArrivalInkWh": 4.020276363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.461319162181816,
                        "chargingTimeInSeconds": 1979,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291655,
                        "chargingParkName": "E.ON Siegburg"
                    },
                    {
                        "lengthInMeters": 87029,
                        "travelTimeInSeconds": 3277,
                        "batteryConsumptionInkWh": 15.854490181818182,
                        "remainingChargeAtArrivalInkWh": 7.606828980363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Cologne",
        "Ziel": "Berlin",
        "start_lat": 50.9422,
        "start_long": 6.9578,
        "dest_lat": 52.5167,
        "dest_long": 13.3833,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 574920,
                "dauer": 19277,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 28,
                "legs": [
                    {
                        "lengthInMeters": 574920,
                        "travelTimeInSeconds": 19277,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 577653,
                "dauer": 30412,
                "verbrauch": 183.9488407272727,
                "restreichweite": 16.67185703127273,
                "ladezeit": 11771,
                "routen_id": 172,
                "legs": [
                    {
                        "lengthInMeters": 165301,
                        "travelTimeInSeconds": 5498,
                        "batteryConsumptionInkWh": 52.29682690909091,
                        "remainingChargeAtArrivalInkWh": 14.023173090909097,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.476000000000006,
                        "chargingTimeInSeconds": 2151,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292861,
                        "chargingParkName": "E.ON G\u00fctersloh"
                    },
                    {
                        "lengthInMeters": 84236,
                        "travelTimeInSeconds": 2629,
                        "batteryConsumptionInkWh": 27.98197818181818,
                        "remainingChargeAtArrivalInkWh": 8.494021818181825,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 41.45,
                        "chargingTimeInSeconds": 2867,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219584,
                        "chargingParkName": "Auetal Rehrener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 104052,
                        "travelTimeInSeconds": 3145,
                        "batteryConsumptionInkWh": 32.36692072727273,
                        "remainingChargeAtArrivalInkWh": 9.083079272727275,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.569,
                        "chargingTimeInSeconds": 3539,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222760,
                        "chargingParkName": "Bienrode-Waggum-Bevenrode Lilienthalplatz"
                    },
                    {
                        "lengthInMeters": 126639,
                        "travelTimeInSeconds": 3472,
                        "batteryConsumptionInkWh": 41.95459927272727,
                        "remainingChargeAtArrivalInkWh": 8.61440072727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 46.020372667636366,
                        "chargingTimeInSeconds": 3214,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377112,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 97425,
                        "travelTimeInSeconds": 3897,
                        "batteryConsumptionInkWh": 29.348515636363636,
                        "remainingChargeAtArrivalInkWh": 16.67185703127273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 578115,
                "dauer": 30023,
                "verbrauch": 138.93106436363638,
                "restreichweite": 9.060466567818182,
                "ladezeit": 11063,
                "routen_id": 173,
                "legs": [
                    {
                        "lengthInMeters": 98600,
                        "travelTimeInSeconds": 3824,
                        "batteryConsumptionInkWh": 21.006951000000004,
                        "remainingChargeAtArrivalInkWh": 14.993048999999996,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 1704,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302389,
                        "chargingParkName": "E.ON Unna Hans-B\u00f6ckler-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 95471,
                        "travelTimeInSeconds": 2734,
                        "batteryConsumptionInkWh": 24.676199545454548,
                        "remainingChargeAtArrivalInkWh": 4.573800454545452,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.7,
                        "chargingTimeInSeconds": 2391,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294282,
                        "chargingParkName": "E.ON Heepen"
                    },
                    {
                        "lengthInMeters": 103050,
                        "travelTimeInSeconds": 3305,
                        "batteryConsumptionInkWh": 25.056982363636365,
                        "remainingChargeAtArrivalInkWh": 4.643017636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2246,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305386,
                        "chargingParkName": "enercity Bothfeld Zur Stadtg\u00e4rtnerei"
                    },
                    {
                        "lengthInMeters": 92213,
                        "travelTimeInSeconds": 2742,
                        "batteryConsumptionInkWh": 22.99768481818182,
                        "remainingChargeAtArrivalInkWh": 4.902315181818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2301,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304651,
                        "chargingParkName": "E.ON Helmstedt"
                    },
                    {
                        "lengthInMeters": 91356,
                        "travelTimeInSeconds": 2458,
                        "batteryConsumptionInkWh": 23.959962727272732,
                        "remainingChargeAtArrivalInkWh": 4.840037272727269,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.293750476909093,
                        "chargingTimeInSeconds": 2421,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377112,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 97425,
                        "travelTimeInSeconds": 3897,
                        "batteryConsumptionInkWh": 21.23328390909091,
                        "remainingChargeAtArrivalInkWh": 9.060466567818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 587871,
                "dauer": 30006,
                "verbrauch": 126.83231563636363,
                "restreichweite": 7.598091790545455,
                "ladezeit": 10959,
                "routen_id": 174,
                "legs": [
                    {
                        "lengthInMeters": 118021,
                        "travelTimeInSeconds": 4360,
                        "batteryConsumptionInkWh": 22.860887272727272,
                        "remainingChargeAtArrivalInkWh": 7.379112727272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 1893,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378440,
                        "chargingParkName": "innogy Hamm Unnaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 87707,
                        "travelTimeInSeconds": 2561,
                        "batteryConsumptionInkWh": 20.92992290909091,
                        "remainingChargeAtArrivalInkWh": 4.018077090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.545999999999996,
                        "chargingTimeInSeconds": 1830,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227271,
                        "chargingParkName": "Herford Planckstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 80326,
                        "travelTimeInSeconds": 2417,
                        "batteryConsumptionInkWh": 17.42711418181818,
                        "remainingChargeAtArrivalInkWh": 4.118885818181816,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.144,
                        "chargingTimeInSeconds": 1560,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292405,
                        "chargingParkName": "E.ON Garbsen"
                    },
                    {
                        "lengthInMeters": 65453,
                        "travelTimeInSeconds": 1975,
                        "batteryConsumptionInkWh": 14.325038545454543,
                        "remainingChargeAtArrivalInkWh": 3.8189614545454553,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2047,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292785,
                        "chargingParkName": "Volkswagen Veltenhof-R\u00fchme Carl-Giesecke-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 88524,
                        "travelTimeInSeconds": 2514,
                        "batteryConsumptionInkWh": 20.308747636363638,
                        "remainingChargeAtArrivalInkWh": 3.883252363636359,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1985,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 83500,
                        "travelTimeInSeconds": 2398,
                        "batteryConsumptionInkWh": 19.494709818181818,
                        "remainingChargeAtArrivalInkWh": 3.9412901818181787,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.083987063272726,
                        "chargingTimeInSeconds": 1644,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517580,
                        "chargingParkName": "Kloster Lehnin Kurf\u00fcrstenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 64340,
                        "travelTimeInSeconds": 2821,
                        "batteryConsumptionInkWh": 11.485895272727271,
                        "remainingChargeAtArrivalInkWh": 7.598091790545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Cologne",
        "Ziel": "Hamburg",
        "start_lat": 50.9422,
        "start_long": 6.9578,
        "dest_lat": 53.55,
        "dest_long": 10.01,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 432315,
                "dauer": 14451,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 29,
                "legs": [
                    {
                        "lengthInMeters": 432315,
                        "travelTimeInSeconds": 14451,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 435109,
                "dauer": 21701,
                "verbrauch": 137.8748,
                "restreichweite": 16.647877189818185,
                "ladezeit": 7875,
                "routen_id": 175,
                "legs": [
                    {
                        "lengthInMeters": 165301,
                        "travelTimeInSeconds": 5498,
                        "batteryConsumptionInkWh": 52.29682690909091,
                        "remainingChargeAtArrivalInkWh": 14.023173090909097,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 49.74,
                        "chargingTimeInSeconds": 3178,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292861,
                        "chargingParkName": "E.ON G\u00fctersloh"
                    },
                    {
                        "lengthInMeters": 127965,
                        "travelTimeInSeconds": 3836,
                        "batteryConsumptionInkWh": 41.386652363636365,
                        "remainingChargeAtArrivalInkWh": 8.353347636363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 35.647000000000006,
                        "chargingTimeInSeconds": 2426,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024814864,
                        "chargingParkName": "enercity Langenhagen Rehkamp"
                    },
                    {
                        "lengthInMeters": 84357,
                        "travelTimeInSeconds": 2492,
                        "batteryConsumptionInkWh": 26.832725818181817,
                        "remainingChargeAtArrivalInkWh": 8.814274181818188,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 34.00647209890909,
                        "chargingTimeInSeconds": 2271,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305086,
                        "chargingParkName": "Bispingen Horstfeldweg"
                    },
                    {
                        "lengthInMeters": 57486,
                        "travelTimeInSeconds": 2000,
                        "batteryConsumptionInkWh": 17.358594909090908,
                        "remainingChargeAtArrivalInkWh": 16.647877189818185,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 428560,
                "dauer": 21001,
                "verbrauch": 98.03420136363636,
                "restreichweite": 9.062356893636366,
                "ladezeit": 6857,
                "routen_id": 176,
                "legs": [
                    {
                        "lengthInMeters": 140178,
                        "travelTimeInSeconds": 4938,
                        "batteryConsumptionInkWh": 30.5788,
                        "remainingChargeAtArrivalInkWh": 5.421199999999999,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.650000000000002,
                        "chargingTimeInSeconds": 2026,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519001,
                        "chargingParkName": "innogy Hiltrup Kopenhagener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 95729,
                        "travelTimeInSeconds": 3130,
                        "batteryConsumptionInkWh": 20.894925545454548,
                        "remainingChargeAtArrivalInkWh": 4.755074454545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2310,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519308,
                        "chargingParkName": "EWE Holdorf Zum Hansa Center"
                    },
                    {
                        "lengthInMeters": 102398,
                        "travelTimeInSeconds": 3151,
                        "batteryConsumptionInkWh": 24.278094272727273,
                        "remainingChargeAtArrivalInkWh": 4.521905727272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 31.344738439090914,
                        "chargingTimeInSeconds": 2521,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294571,
                        "chargingParkName": "E.ON Sottrum"
                    },
                    {
                        "lengthInMeters": 90255,
                        "travelTimeInSeconds": 2925,
                        "batteryConsumptionInkWh": 22.282381545454548,
                        "remainingChargeAtArrivalInkWh": 9.062356893636366,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 441581,
                "dauer": 21889,
                "verbrauch": 90.31064,
                "restreichweite": 7.594441143272725,
                "ladezeit": 7151,
                "routen_id": 177,
                "legs": [
                    {
                        "lengthInMeters": 130791,
                        "travelTimeInSeconds": 4728,
                        "batteryConsumptionInkWh": 25.25320145454545,
                        "remainingChargeAtArrivalInkWh": 4.986798545454548,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 1948,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295572,
                        "chargingParkName": "E.ON Ascheberg Zur Davert"
                    },
                    {
                        "lengthInMeters": 98433,
                        "travelTimeInSeconds": 3246,
                        "batteryConsumptionInkWh": 19.761150545454544,
                        "remainingChargeAtArrivalInkWh": 4.052849454545452,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2004,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294605,
                        "chargingParkName": "E.ON Neuenkirchen-V\u00f6rden Hannoversche Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 95484,
                        "travelTimeInSeconds": 2982,
                        "batteryConsumptionInkWh": 19.685233454545454,
                        "remainingChargeAtArrivalInkWh": 4.128766545454543,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.034,
                        "chargingTimeInSeconds": 1706,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306991,
                        "chargingParkName": "Hemelingen Europaallee"
                    },
                    {
                        "lengthInMeters": 67150,
                        "travelTimeInSeconds": 1955,
                        "batteryConsumptionInkWh": 15.950482909090908,
                        "remainingChargeAtArrivalInkWh": 4.0835170909090905,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.25501277963636,
                        "chargingTimeInSeconds": 1493,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023668424,
                        "chargingParkName": "EWE Heidenau Hauptstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 49723,
                        "travelTimeInSeconds": 1826,
                        "batteryConsumptionInkWh": 9.660571636363635,
                        "remainingChargeAtArrivalInkWh": 7.594441143272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Cologne",
        "Ziel": "Munich",
        "start_lat": 50.9422,
        "start_long": 6.9578,
        "dest_lat": 48.1372,
        "dest_long": 11.5755,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 575983,
                "dauer": 18845,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 30,
                "legs": [
                    {
                        "lengthInMeters": 575983,
                        "travelTimeInSeconds": 18845,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 583799,
                "dauer": 31082,
                "verbrauch": 186.78815781818182,
                "restreichweite": 16.66180723054546,
                "ladezeit": 12083,
                "routen_id": 178,
                "legs": [
                    {
                        "lengthInMeters": 144230,
                        "travelTimeInSeconds": 4804,
                        "batteryConsumptionInkWh": 47.5509949090909,
                        "remainingChargeAtArrivalInkWh": 18.769005090909104,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 2829,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 128683,
                        "travelTimeInSeconds": 4013,
                        "batteryConsumptionInkWh": 39.83246909090909,
                        "remainingChargeAtArrivalInkWh": 9.078530909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.056000000000004,
                        "chargingTimeInSeconds": 3731,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520925,
                        "chargingParkName": "Wertheim Almosenberg"
                    },
                    {
                        "lengthInMeters": 140412,
                        "travelTimeInSeconds": 4617,
                        "batteryConsumptionInkWh": 43.94272654545455,
                        "remainingChargeAtArrivalInkWh": 9.113273454545457,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.792,
                        "chargingTimeInSeconds": 2701,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93112,
                        "travelTimeInSeconds": 2669,
                        "batteryConsumptionInkWh": 31.138352,
                        "remainingChargeAtArrivalInkWh": 8.653648,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.98542250327273,
                        "chargingTimeInSeconds": 2822,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215657,
                        "chargingParkName": "Ingolstadt Manchinger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77362,
                        "travelTimeInSeconds": 2896,
                        "batteryConsumptionInkWh": 24.32361527272727,
                        "remainingChargeAtArrivalInkWh": 16.66180723054546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 586790,
                "dauer": 30483,
                "verbrauch": 138.3116050909091,
                "restreichweite": 9.052988038909092,
                "ladezeit": 10921,
                "routen_id": 179,
                "legs": [
                    {
                        "lengthInMeters": 119255,
                        "travelTimeInSeconds": 4196,
                        "batteryConsumptionInkWh": 27.296661636363638,
                        "remainingChargeAtArrivalInkWh": 8.703338363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2003,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025356355,
                        "chargingParkName": "EnBW Offheim An der Meil"
                    },
                    {
                        "lengthInMeters": 105452,
                        "travelTimeInSeconds": 3447,
                        "batteryConsumptionInkWh": 23.368094909090914,
                        "remainingChargeAtArrivalInkWh": 4.531905090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2218,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522513,
                        "chargingParkName": "ALDI S\u00dcD Mainaschaff Johann-Dahlem-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 81997,
                        "travelTimeInSeconds": 2428,
                        "batteryConsumptionInkWh": 22.866573545454546,
                        "remainingChargeAtArrivalInkWh": 4.583426454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2250,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293458,
                        "chargingParkName": "E.ON W\u00fcrzburg"
                    },
                    {
                        "lengthInMeters": 109612,
                        "travelTimeInSeconds": 3926,
                        "batteryConsumptionInkWh": 23.117801000000004,
                        "remainingChargeAtArrivalInkWh": 4.7821989999999985,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2308,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93112,
                        "travelTimeInSeconds": 2669,
                        "batteryConsumptionInkWh": 24.168454545454548,
                        "remainingChargeAtArrivalInkWh": 4.631545454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.547007493454547,
                        "chargingTimeInSeconds": 2142,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215657,
                        "chargingParkName": "Ingolstadt Manchinger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77362,
                        "travelTimeInSeconds": 2896,
                        "batteryConsumptionInkWh": 17.494019454545455,
                        "remainingChargeAtArrivalInkWh": 9.052988038909092,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 581766,
                "dauer": 30329,
                "verbrauch": 122.52121890909089,
                "restreichweite": 7.607834516363635,
                "ladezeit": 10832,
                "routen_id": 180,
                "legs": [
                    {
                        "lengthInMeters": 96464,
                        "travelTimeInSeconds": 3471,
                        "batteryConsumptionInkWh": 19.78424727272727,
                        "remainingChargeAtArrivalInkWh": 10.455752727272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.923999999999996,
                        "chargingTimeInSeconds": 1473,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 85262,
                        "travelTimeInSeconds": 2648,
                        "batteryConsumptionInkWh": 17.980363636363638,
                        "remainingChargeAtArrivalInkWh": 3.943636363636358,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2069,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220224,
                        "chargingParkName": "Mainova Flughafen Unterschweinstiege"
                    },
                    {
                        "lengthInMeters": 92170,
                        "travelTimeInSeconds": 2887,
                        "batteryConsumptionInkWh": 20.41526545454545,
                        "remainingChargeAtArrivalInkWh": 4.154734545454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.617999999999995,
                        "chargingTimeInSeconds": 3145,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520925,
                        "chargingParkName": "Wertheim Almosenberg"
                    },
                    {
                        "lengthInMeters": 133819,
                        "travelTimeInSeconds": 4588,
                        "batteryConsumptionInkWh": 26.588913454545455,
                        "remainingChargeAtArrivalInkWh": 4.02908654545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2122,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305393,
                        "chargingParkName": "F\u00fcrth Leyher Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 94287,
                        "travelTimeInSeconds": 2888,
                        "batteryConsumptionInkWh": 21.39517090909091,
                        "remainingChargeAtArrivalInkWh": 3.9308290909090857,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.965092698181817,
                        "chargingTimeInSeconds": 2023,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024223992,
                        "chargingParkName": "Ingolstadt Hermann-Paul-M\u00fcller-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 79764,
                        "travelTimeInSeconds": 3015,
                        "batteryConsumptionInkWh": 16.35725818181818,
                        "remainingChargeAtArrivalInkWh": 7.607834516363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Cologne",
        "Ziel": "Frankfurt",
        "start_lat": 50.9422,
        "start_long": 6.9578,
        "dest_lat": 50.1136,
        "dest_long": 8.6797,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 191043,
                "dauer": 6612,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 31,
                "legs": [
                    {
                        "lengthInMeters": 191043,
                        "travelTimeInSeconds": 6612,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 194950,
                "dauer": 8653,
                "verbrauch": 61.57162327272728,
                "restreichweite": 16.661007387636364,
                "ladezeit": 1523,
                "routen_id": 181,
                "legs": [
                    {
                        "lengthInMeters": 118187,
                        "travelTimeInSeconds": 4171,
                        "batteryConsumptionInkWh": 37.647929454545455,
                        "remainingChargeAtArrivalInkWh": 28.672070545454552,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.584701205818185,
                        "chargingTimeInSeconds": 1523,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520580,
                        "chargingParkName": "Offheim Limburger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 76763,
                        "travelTimeInSeconds": 2959,
                        "batteryConsumptionInkWh": 23.92369381818182,
                        "remainingChargeAtArrivalInkWh": 16.661007387636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 196385,
                "dauer": 8995,
                "verbrauch": 44.79939418181819,
                "restreichweite": 9.053006502363637,
                "ladezeit": 1899,
                "routen_id": 182,
                "legs": [
                    {
                        "lengthInMeters": 119255,
                        "travelTimeInSeconds": 4197,
                        "batteryConsumptionInkWh": 27.296143000000004,
                        "remainingChargeAtArrivalInkWh": 8.703856999999996,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.55625768418182,
                        "chargingTimeInSeconds": 1899,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025356355,
                        "chargingParkName": "EnBW Offheim An der Meil"
                    },
                    {
                        "lengthInMeters": 77130,
                        "travelTimeInSeconds": 2899,
                        "batteryConsumptionInkWh": 17.503251181818182,
                        "remainingChargeAtArrivalInkWh": 9.053006502363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 196385,
                "dauer": 8961,
                "verbrauch": 40.201266909090904,
                "restreichweite": 7.606899147636366,
                "ladezeit": 1864,
                "routen_id": 183,
                "legs": [
                    {
                        "lengthInMeters": 119255,
                        "travelTimeInSeconds": 4197,
                        "batteryConsumptionInkWh": 24.458167272727273,
                        "remainingChargeAtArrivalInkWh": 5.781832727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.349998784,
                        "chargingTimeInSeconds": 1864,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025356355,
                        "chargingParkName": "EnBW Offheim An der Meil"
                    },
                    {
                        "lengthInMeters": 77130,
                        "travelTimeInSeconds": 2900,
                        "batteryConsumptionInkWh": 15.743099636363635,
                        "remainingChargeAtArrivalInkWh": 7.606899147636366,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Cologne",
        "Ziel": "Bremen",
        "start_lat": 50.9422,
        "start_long": 6.9578,
        "dest_lat": 53.1153,
        "dest_long": 8.7975,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 319949,
                "dauer": 11834,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 32,
                "legs": [
                    {
                        "lengthInMeters": 319949,
                        "travelTimeInSeconds": 11834,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 323977,
                "dauer": 15884,
                "verbrauch": 96.47270181818182,
                "restreichweite": 16.67740625454546,
                "ladezeit": 4441,
                "routen_id": 184,
                "legs": [
                    {
                        "lengthInMeters": 172527,
                        "travelTimeInSeconds": 5918,
                        "batteryConsumptionInkWh": 52.353392,
                        "remainingChargeAtArrivalInkWh": 13.966608000000008,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.699,
                        "chargingTimeInSeconds": 1318,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227019,
                        "chargingParkName": "Ladbergen Dorfstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 39997,
                        "travelTimeInSeconds": 1473,
                        "batteryConsumptionInkWh": 12.100754909090908,
                        "remainingChargeAtArrivalInkWh": 13.598245090909094,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.69596116363637,
                        "chargingTimeInSeconds": 3123,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293927,
                        "chargingParkName": "Bramsche In der Welle"
                    },
                    {
                        "lengthInMeters": 111453,
                        "travelTimeInSeconds": 4052,
                        "batteryConsumptionInkWh": 32.01855490909091,
                        "remainingChargeAtArrivalInkWh": 16.67740625454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 322926,
                "dauer": 15508,
                "verbrauch": 69.7861531818182,
                "restreichweite": 9.055229377818183,
                "ladezeit": 4224,
                "routen_id": 185,
                "legs": [
                    {
                        "lengthInMeters": 140178,
                        "travelTimeInSeconds": 4935,
                        "batteryConsumptionInkWh": 30.58689072727273,
                        "remainingChargeAtArrivalInkWh": 5.413109272727269,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.650000000000002,
                        "chargingTimeInSeconds": 2026,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519001,
                        "chargingParkName": "innogy Hiltrup Kopenhagener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 95729,
                        "travelTimeInSeconds": 3130,
                        "batteryConsumptionInkWh": 20.89637772727273,
                        "remainingChargeAtArrivalInkWh": 4.753622272727274,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.358114105090912,
                        "chargingTimeInSeconds": 2198,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519308,
                        "chargingParkName": "EWE Holdorf Zum Hansa Center"
                    },
                    {
                        "lengthInMeters": 87019,
                        "travelTimeInSeconds": 3218,
                        "batteryConsumptionInkWh": 18.30288472727273,
                        "remainingChargeAtArrivalInkWh": 9.055229377818183,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 324442,
                "dauer": 16431,
                "verbrauch": 63.18709090909091,
                "restreichweite": 7.588592506181818,
                "ladezeit": 4635,
                "routen_id": 186,
                "legs": [
                    {
                        "lengthInMeters": 112645,
                        "travelTimeInSeconds": 4269,
                        "batteryConsumptionInkWh": 21.46290181818182,
                        "remainingChargeAtArrivalInkWh": 8.777098181818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1692,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215293,
                        "chargingParkName": "Kaufland Bergkamen An der Bummannsburg"
                    },
                    {
                        "lengthInMeters": 93782,
                        "travelTimeInSeconds": 3048,
                        "batteryConsumptionInkWh": 19.597329454545456,
                        "remainingChargeAtArrivalInkWh": 3.8386705454545407,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.278,
                        "chargingTimeInSeconds": 1665,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024224474,
                        "chargingParkName": "Wallenhorst Osnabr\u00fccker Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77054,
                        "travelTimeInSeconds": 2569,
                        "batteryConsumptionInkWh": 15.390606545454544,
                        "remainingChargeAtArrivalInkWh": 3.887393454545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 14.324845597090908,
                        "chargingTimeInSeconds": 1278,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291489,
                        "chargingParkName": "E.ON D\u00f6tlingen"
                    },
                    {
                        "lengthInMeters": 40961,
                        "travelTimeInSeconds": 1910,
                        "batteryConsumptionInkWh": 6.7362530909090905,
                        "remainingChargeAtArrivalInkWh": 7.588592506181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Cologne",
        "Ziel": "Stuttgart",
        "start_lat": 50.9422,
        "start_long": 6.9578,
        "dest_lat": 48.7761,
        "dest_long": 9.1775,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 367735,
                "dauer": 12942,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 33,
                "legs": [
                    {
                        "lengthInMeters": 367735,
                        "travelTimeInSeconds": 12942,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 379986,
                "dauer": 18924,
                "verbrauch": 119.13234327272727,
                "restreichweite": 16.675096061090912,
                "ladezeit": 6044,
                "routen_id": 187,
                "legs": [
                    {
                        "lengthInMeters": 178146,
                        "travelTimeInSeconds": 5862,
                        "batteryConsumptionInkWh": 56.511448,
                        "remainingChargeAtArrivalInkWh": 9.808552000000006,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.621,
                        "chargingTimeInSeconds": 2725,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025375856,
                        "chargingParkName": "R\u00fcsselsheim am Main Joseph-Beuys-Weg"
                    },
                    {
                        "lengthInMeters": 104678,
                        "travelTimeInSeconds": 3410,
                        "batteryConsumptionInkWh": 31.65286472727273,
                        "remainingChargeAtArrivalInkWh": 8.968135272727274,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 47.64312660654546,
                        "chargingTimeInSeconds": 3319,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023664718,
                        "chargingParkName": "Karlsdorf-Neuthard Lu\u00dfhardtstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97162,
                        "travelTimeInSeconds": 3608,
                        "batteryConsumptionInkWh": 30.968030545454546,
                        "remainingChargeAtArrivalInkWh": 16.675096061090912,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 382427,
                "dauer": 19381,
                "verbrauch": 85.58267581818183,
                "restreichweite": 9.060802021818187,
                "ladezeit": 5957,
                "routen_id": 188,
                "legs": [
                    {
                        "lengthInMeters": 119255,
                        "travelTimeInSeconds": 4197,
                        "batteryConsumptionInkWh": 27.295935545454547,
                        "remainingChargeAtArrivalInkWh": 8.704064454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.55,
                        "chargingTimeInSeconds": 1899,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025356355,
                        "chargingParkName": "EnBW Offheim An der Meil"
                    },
                    {
                        "lengthInMeters": 95832,
                        "travelTimeInSeconds": 3077,
                        "batteryConsumptionInkWh": 21.725158636363638,
                        "remainingChargeAtArrivalInkWh": 4.824841363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.35,
                        "chargingTimeInSeconds": 1574,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305203,
                        "chargingParkName": "Mer Alsbach-H\u00e4hnlein Autobahnrastst\u00e4tte West"
                    },
                    {
                        "lengthInMeters": 70178,
                        "travelTimeInSeconds": 2547,
                        "batteryConsumptionInkWh": 14.484995000000001,
                        "remainingChargeAtArrivalInkWh": 4.865005,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 31.137388658181823,
                        "chargingTimeInSeconds": 2484,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023664718,
                        "chargingParkName": "Karlsdorf-Neuthard Lu\u00dfhardtstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97162,
                        "travelTimeInSeconds": 3604,
                        "batteryConsumptionInkWh": 22.076586636363636,
                        "remainingChargeAtArrivalInkWh": 9.060802021818187,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 383872,
                "dauer": 19188,
                "verbrauch": 77.24276509090909,
                "restreichweite": 7.602030903272725,
                "ladezeit": 5675,
                "routen_id": 189,
                "legs": [
                    {
                        "lengthInMeters": 119255,
                        "travelTimeInSeconds": 4197,
                        "batteryConsumptionInkWh": 24.45797236363636,
                        "remainingChargeAtArrivalInkWh": 5.782027636363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1871,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025356355,
                        "chargingParkName": "EnBW Offheim An der Meil"
                    },
                    {
                        "lengthInMeters": 95832,
                        "travelTimeInSeconds": 3077,
                        "batteryConsumptionInkWh": 19.610096,
                        "remainingChargeAtArrivalInkWh": 3.8259039999999978,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2018,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305203,
                        "chargingParkName": "Mer Alsbach-H\u00e4hnlein Autobahnrastst\u00e4tte West"
                    },
                    {
                        "lengthInMeters": 98166,
                        "travelTimeInSeconds": 3392,
                        "batteryConsumptionInkWh": 19.816894545454545,
                        "remainingChargeAtArrivalInkWh": 3.9971054545454514,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.959833085090906,
                        "chargingTimeInSeconds": 1786,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517647,
                        "chargingParkName": "EnBW Waldbronn Im Ermlisgrund"
                    },
                    {
                        "lengthInMeters": 70619,
                        "travelTimeInSeconds": 2847,
                        "batteryConsumptionInkWh": 13.357802181818181,
                        "remainingChargeAtArrivalInkWh": 7.602030903272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Cologne",
        "Ziel": "D\u00fcsseldorf",
        "start_lat": 50.9422,
        "start_long": 6.9578,
        "dest_lat": 51.2311,
        "dest_long": 6.7724,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 42706,
                "dauer": 2168,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 34,
                "legs": [
                    {
                        "lengthInMeters": 42706,
                        "travelTimeInSeconds": 2168,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 42706,
                "dauer": 2128,
                "verbrauch": 11.504629818181819,
                "restreichweite": 54.81537018181819,
                "ladezeit": null,
                "routen_id": 190,
                "legs": [
                    {
                        "lengthInMeters": 42706,
                        "travelTimeInSeconds": 2128,
                        "batteryConsumptionInkWh": 11.504629818181819,
                        "remainingChargeAtArrivalInkWh": 54.81537018181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 42706,
                "dauer": 2128,
                "verbrauch": 7.385278090909091,
                "restreichweite": 28.61472190909091,
                "ladezeit": null,
                "routen_id": 191,
                "legs": [
                    {
                        "lengthInMeters": 42706,
                        "travelTimeInSeconds": 2128,
                        "batteryConsumptionInkWh": 7.385278090909091,
                        "remainingChargeAtArrivalInkWh": 28.61472190909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 42706,
                "dauer": 2128,
                "verbrauch": 6.761493818181818,
                "restreichweite": 23.47850618181818,
                "ladezeit": null,
                "routen_id": 192,
                "legs": [
                    {
                        "lengthInMeters": 42706,
                        "travelTimeInSeconds": 2128,
                        "batteryConsumptionInkWh": 6.761493818181818,
                        "remainingChargeAtArrivalInkWh": 23.47850618181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Cologne",
        "Ziel": "Dortmund",
        "start_lat": 50.9422,
        "start_long": 6.9578,
        "dest_lat": 51.5139,
        "dest_long": 7.4653,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 94909,
                "dauer": 4272,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 35,
                "legs": [
                    {
                        "lengthInMeters": 94909,
                        "travelTimeInSeconds": 4272,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 94909,
                "dauer": 4042,
                "verbrauch": 28.64113890909091,
                "restreichweite": 37.678861090909095,
                "ladezeit": null,
                "routen_id": 193,
                "legs": [
                    {
                        "lengthInMeters": 94909,
                        "travelTimeInSeconds": 4042,
                        "batteryConsumptionInkWh": 28.64113890909091,
                        "remainingChargeAtArrivalInkWh": 37.678861090909095,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 94909,
                "dauer": 4042,
                "verbrauch": 19.579352545454547,
                "restreichweite": 16.420647454545453,
                "ladezeit": null,
                "routen_id": 194,
                "legs": [
                    {
                        "lengthInMeters": 94909,
                        "travelTimeInSeconds": 4042,
                        "batteryConsumptionInkWh": 19.579352545454547,
                        "remainingChargeAtArrivalInkWh": 16.420647454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 94909,
                "dauer": 4042,
                "verbrauch": 17.539771636363636,
                "restreichweite": 12.700228363636363,
                "ladezeit": null,
                "routen_id": 195,
                "legs": [
                    {
                        "lengthInMeters": 94909,
                        "travelTimeInSeconds": 4042,
                        "batteryConsumptionInkWh": 17.539771636363636,
                        "remainingChargeAtArrivalInkWh": 12.700228363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Cologne",
        "Ziel": "Essen",
        "start_lat": 50.9422,
        "start_long": 6.9578,
        "dest_lat": 51.4508,
        "dest_long": 7.0131,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 71624,
                "dauer": 3516,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 36,
                "legs": [
                    {
                        "lengthInMeters": 71624,
                        "travelTimeInSeconds": 3516,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 71624,
                "dauer": 3368,
                "verbrauch": 19.85205090909091,
                "restreichweite": 46.4679490909091,
                "ladezeit": null,
                "routen_id": 196,
                "legs": [
                    {
                        "lengthInMeters": 71624,
                        "travelTimeInSeconds": 3368,
                        "batteryConsumptionInkWh": 19.85205090909091,
                        "remainingChargeAtArrivalInkWh": 46.4679490909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 71624,
                "dauer": 3368,
                "verbrauch": 12.746733363636364,
                "restreichweite": 23.253266636363634,
                "ladezeit": null,
                "routen_id": 197,
                "legs": [
                    {
                        "lengthInMeters": 71624,
                        "travelTimeInSeconds": 3368,
                        "batteryConsumptionInkWh": 12.746733363636364,
                        "remainingChargeAtArrivalInkWh": 23.253266636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 71624,
                "dauer": 3368,
                "verbrauch": 11.578866909090907,
                "restreichweite": 18.66113309090909,
                "ladezeit": null,
                "routen_id": 198,
                "legs": [
                    {
                        "lengthInMeters": 71624,
                        "travelTimeInSeconds": 3368,
                        "batteryConsumptionInkWh": 11.578866909090907,
                        "remainingChargeAtArrivalInkWh": 18.66113309090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Frankfurt",
        "Ziel": "Berlin",
        "start_lat": 50.1136,
        "start_long": 8.6797,
        "dest_lat": 52.5167,
        "dest_long": 13.3833,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 550005,
                "dauer": 18244,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 37,
                "legs": [
                    {
                        "lengthInMeters": 550005,
                        "travelTimeInSeconds": 18244,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 560984,
                "dauer": 29817,
                "verbrauch": 181.54952072727272,
                "restreichweite": 16.65471467781818,
                "ladezeit": 11606,
                "routen_id": 199,
                "legs": [
                    {
                        "lengthInMeters": 153843,
                        "travelTimeInSeconds": 5207,
                        "batteryConsumptionInkWh": 51.288048,
                        "remainingChargeAtArrivalInkWh": 15.031952000000004,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.792,
                        "chargingTimeInSeconds": 2346,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517561,
                        "chargingParkName": "EAM Friedewald Schlo\u00dfplatz"
                    },
                    {
                        "lengthInMeters": 93415,
                        "travelTimeInSeconds": 2780,
                        "batteryConsumptionInkWh": 30.865754181818183,
                        "remainingChargeAtArrivalInkWh": 8.926245818181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 52.227000000000004,
                        "chargingTimeInSeconds": 3676,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222591,
                        "chargingParkName": "TEAG Amt Wachsenburg Th\u00f6reyer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 134155,
                        "travelTimeInSeconds": 4012,
                        "batteryConsumptionInkWh": 43.55595490909091,
                        "remainingChargeAtArrivalInkWh": 8.671045090909097,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 43.937000000000005,
                        "chargingTimeInSeconds": 3050,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815018,
                        "chargingParkName": "innogy Leuna Nova Eventis"
                    },
                    {
                        "lengthInMeters": 109720,
                        "travelTimeInSeconds": 3270,
                        "batteryConsumptionInkWh": 35.06242472727273,
                        "remainingChargeAtArrivalInkWh": 8.874575272727277,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 37.43205358690909,
                        "chargingTimeInSeconds": 2534,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024217937,
                        "chargingParkName": "E.ON Linthe Am Kalkberg"
                    },
                    {
                        "lengthInMeters": 69851,
                        "travelTimeInSeconds": 2943,
                        "batteryConsumptionInkWh": 20.77733890909091,
                        "remainingChargeAtArrivalInkWh": 16.65471467781818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 556005,
                "dauer": 28898,
                "verbrauch": 136.8940681818182,
                "restreichweite": 9.047434273272728,
                "ladezeit": 10758,
                "routen_id": 200,
                "legs": [
                    {
                        "lengthInMeters": 120403,
                        "travelTimeInSeconds": 4113,
                        "batteryConsumptionInkWh": 30.79641981818182,
                        "remainingChargeAtArrivalInkWh": 5.203580181818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2213,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306390,
                        "chargingParkName": "Mer Breitenbach am Herzberg"
                    },
                    {
                        "lengthInMeters": 96012,
                        "travelTimeInSeconds": 3105,
                        "batteryConsumptionInkWh": 23.030670090909094,
                        "remainingChargeAtArrivalInkWh": 4.869329909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2198,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024214939,
                        "chargingParkName": "Waltershausen Eisenacher Landstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 87710,
                        "travelTimeInSeconds": 2473,
                        "batteryConsumptionInkWh": 22.659326454545457,
                        "remainingChargeAtArrivalInkWh": 4.790673545454542,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2308,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025357582,
                        "chargingParkName": "Schl\u00f6ben E40"
                    },
                    {
                        "lengthInMeters": 103700,
                        "travelTimeInSeconds": 3271,
                        "batteryConsumptionInkWh": 24.213887090909093,
                        "remainingChargeAtArrivalInkWh": 4.586112909090907,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.1,
                        "chargingTimeInSeconds": 2111,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024814304,
                        "chargingParkName": "E.ON Sandersdorf-Brehna"
                    },
                    {
                        "lengthInMeters": 78329,
                        "travelTimeInSeconds": 2235,
                        "batteryConsumptionInkWh": 21.47662809090909,
                        "remainingChargeAtArrivalInkWh": 4.62337190909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.764570909636365,
                        "chargingTimeInSeconds": 1928,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024217937,
                        "chargingParkName": "E.ON Linthe Am Kalkberg"
                    },
                    {
                        "lengthInMeters": 69851,
                        "travelTimeInSeconds": 2943,
                        "batteryConsumptionInkWh": 14.717136636363637,
                        "remainingChargeAtArrivalInkWh": 9.047434273272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 566676,
                "dauer": 29367,
                "verbrauch": 123.08772218181817,
                "restreichweite": 7.592815211636365,
                "ladezeit": 10668,
                "routen_id": 201,
                "legs": [
                    {
                        "lengthInMeters": 104059,
                        "travelTimeInSeconds": 3561,
                        "batteryConsumptionInkWh": 22.982608,
                        "remainingChargeAtArrivalInkWh": 7.257391999999999,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 1812,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024221721,
                        "chargingParkName": "Romrod H\u00fcgelstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97022,
                        "travelTimeInSeconds": 3288,
                        "batteryConsumptionInkWh": 19.807928727272728,
                        "remainingChargeAtArrivalInkWh": 4.006071272727269,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.789999999999996,
                        "chargingTimeInSeconds": 1773,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024224571,
                        "chargingParkName": "Eisenach Neue Wiese"
                    },
                    {
                        "lengthInMeters": 68362,
                        "travelTimeInSeconds": 2048,
                        "batteryConsumptionInkWh": 16.712187636363637,
                        "remainingChargeAtArrivalInkWh": 4.077812363636358,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2002,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292177,
                        "chargingParkName": "E.ON Grammetal"
                    },
                    {
                        "lengthInMeters": 91097,
                        "travelTimeInSeconds": 2810,
                        "batteryConsumptionInkWh": 19.763586909090908,
                        "remainingChargeAtArrivalInkWh": 4.050413090909089,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2004,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521734,
                        "chargingParkName": "Wei\u00dfenfels Selauer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93384,
                        "travelTimeInSeconds": 2882,
                        "batteryConsumptionInkWh": 19.970385454545454,
                        "remainingChargeAtArrivalInkWh": 3.8436145454545425,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.9,
                        "chargingTimeInSeconds": 1636,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518946,
                        "chargingParkName": "Coswig (Anhalt) Fichtenbreite"
                    },
                    {
                        "lengthInMeters": 60439,
                        "travelTimeInSeconds": 1689,
                        "batteryConsumptionInkWh": 15.003419636363635,
                        "remainingChargeAtArrivalInkWh": 3.896580363636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.440421029818182,
                        "chargingTimeInSeconds": 1441,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521197,
                        "chargingParkName": "enercity Beelitz Stra\u00dfe nach Fichtenwalde"
                    },
                    {
                        "lengthInMeters": 52313,
                        "travelTimeInSeconds": 2422,
                        "batteryConsumptionInkWh": 8.847605818181817,
                        "remainingChargeAtArrivalInkWh": 7.592815211636365,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Frankfurt",
        "Ziel": "Hamburg",
        "start_lat": 50.1136,
        "start_long": 8.6797,
        "dest_lat": 53.55,
        "dest_long": 10.01,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 494726,
                "dauer": 16578,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 38,
                "legs": [
                    {
                        "lengthInMeters": 494726,
                        "travelTimeInSeconds": 16578,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 507668,
                "dauer": 26430,
                "verbrauch": 159.49915418181817,
                "restreichweite": 16.657264907636364,
                "ladezeit": 9531,
                "routen_id": 202,
                "legs": [
                    {
                        "lengthInMeters": 157824,
                        "travelTimeInSeconds": 5130,
                        "batteryConsumptionInkWh": 53.255720000000004,
                        "remainingChargeAtArrivalInkWh": 13.064280000000004,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 49.74,
                        "chargingTimeInSeconds": 3235,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292838,
                        "chargingParkName": "E.ON Kn\u00fcllwald Rastst\u00e4tte Hasselberg"
                    },
                    {
                        "lengthInMeters": 136430,
                        "travelTimeInSeconds": 4612,
                        "batteryConsumptionInkWh": 41.309632,
                        "remainingChargeAtArrivalInkWh": 8.430368000000001,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 51.398,
                        "chargingTimeInSeconds": 3642,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306625,
                        "chargingParkName": "Bockenem Hachumer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 141307,
                        "travelTimeInSeconds": 4656,
                        "batteryConsumptionInkWh": 42.88134836363636,
                        "remainingChargeAtArrivalInkWh": 8.51665163636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.709718725818185,
                        "chargingTimeInSeconds": 2654,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023968203,
                        "chargingParkName": "innogy Soltau Rahrsberg"
                    },
                    {
                        "lengthInMeters": 72107,
                        "travelTimeInSeconds": 2502,
                        "batteryConsumptionInkWh": 22.05245381818182,
                        "remainingChargeAtArrivalInkWh": 16.657264907636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 513040,
                "dauer": 26389,
                "verbrauch": 117.46646863636364,
                "restreichweite": 9.044084089818183,
                "ladezeit": 8805,
                "routen_id": 203,
                "legs": [
                    {
                        "lengthInMeters": 120403,
                        "travelTimeInSeconds": 4113,
                        "batteryConsumptionInkWh": 30.79641981818182,
                        "remainingChargeAtArrivalInkWh": 5.203580181818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.6,
                        "chargingTimeInSeconds": 2422,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306390,
                        "chargingParkName": "Mer Breitenbach am Herzberg"
                    },
                    {
                        "lengthInMeters": 109651,
                        "travelTimeInSeconds": 3579,
                        "batteryConsumptionInkWh": 25.85474881818182,
                        "remainingChargeAtArrivalInkWh": 4.74525118181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.35,
                        "chargingTimeInSeconds": 2275,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306959,
                        "chargingParkName": "EAM J\u00fchnde Dorfstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 123754,
                        "travelTimeInSeconds": 4707,
                        "batteryConsumptionInkWh": 23.79223572727273,
                        "remainingChargeAtArrivalInkWh": 4.5577642727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2322,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294409,
                        "chargingParkName": "enercity Hannover Oheriedentrift"
                    },
                    {
                        "lengthInMeters": 101746,
                        "travelTimeInSeconds": 3221,
                        "batteryConsumptionInkWh": 23.981019363636367,
                        "remainingChargeAtArrivalInkWh": 4.818980636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.086128998909093,
                        "chargingTimeInSeconds": 1786,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305086,
                        "chargingParkName": "Bispingen Horstfeldweg"
                    },
                    {
                        "lengthInMeters": 57486,
                        "travelTimeInSeconds": 1965,
                        "batteryConsumptionInkWh": 13.04204490909091,
                        "remainingChargeAtArrivalInkWh": 9.044084089818183,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 501201,
                "dauer": 25628,
                "verbrauch": 104.77630545454545,
                "restreichweite": 7.593676320000002,
                "ladezeit": 8847,
                "routen_id": 204,
                "legs": [
                    {
                        "lengthInMeters": 78725,
                        "travelTimeInSeconds": 2758,
                        "batteryConsumptionInkWh": 17.721037090909093,
                        "remainingChargeAtArrivalInkWh": 12.518962909090906,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.545999999999996,
                        "chargingTimeInSeconds": 1300,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009007355771,
                        "chargingParkName": "Allego M\u00fccke Gottesrain"
                    },
                    {
                        "lengthInMeters": 80390,
                        "travelTimeInSeconds": 2573,
                        "batteryConsumptionInkWh": 17.659445818181815,
                        "remainingChargeAtArrivalInkWh": 3.8865541818181804,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2072,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292838,
                        "chargingParkName": "E.ON Kn\u00fcllwald Rastst\u00e4tte Hasselberg"
                    },
                    {
                        "lengthInMeters": 99097,
                        "travelTimeInSeconds": 3131,
                        "batteryConsumptionInkWh": 20.54985018181818,
                        "remainingChargeAtArrivalInkWh": 4.020149818181817,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2006,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815013,
                        "chargingParkName": "Northeim Westerlange"
                    },
                    {
                        "lengthInMeters": 104179,
                        "travelTimeInSeconds": 3697,
                        "batteryConsumptionInkWh": 19.695271272727272,
                        "remainingChargeAtArrivalInkWh": 4.118728727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2029,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220138,
                        "chargingParkName": "enercity Burgwedel Im Klint"
                    },
                    {
                        "lengthInMeters": 93024,
                        "travelTimeInSeconds": 2889,
                        "batteryConsumptionInkWh": 20.40961309090909,
                        "remainingChargeAtArrivalInkWh": 3.7823869090909064,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.33476432,
                        "chargingTimeInSeconds": 1440,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026288129,
                        "chargingParkName": "Egestorf Bauernworth"
                    },
                    {
                        "lengthInMeters": 45786,
                        "travelTimeInSeconds": 1734,
                        "batteryConsumptionInkWh": 8.741088,
                        "remainingChargeAtArrivalInkWh": 7.593676320000002,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Frankfurt",
        "Ziel": "Munich",
        "start_lat": 50.1136,
        "start_long": 8.6797,
        "dest_lat": 48.1372,
        "dest_long": 11.5755,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 394428,
                "dauer": 13568,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 39,
                "legs": [
                    {
                        "lengthInMeters": 394428,
                        "travelTimeInSeconds": 13568,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 399887,
                "dauer": 20467,
                "verbrauch": 127.86570109090908,
                "restreichweite": 16.685860126545457,
                "ladezeit": 6779,
                "routen_id": 205,
                "legs": [
                    {
                        "lengthInMeters": 160664,
                        "travelTimeInSeconds": 5576,
                        "batteryConsumptionInkWh": 53.26928727272727,
                        "remainingChargeAtArrivalInkWh": 13.050712727272739,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 47.25300000000001,
                        "chargingTimeInSeconds": 3044,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227107,
                        "chargingParkName": "Geiselwind Am Weingarten"
                    },
                    {
                        "lengthInMeters": 125311,
                        "travelTimeInSeconds": 4153,
                        "batteryConsumptionInkWh": 38.24635054545455,
                        "remainingChargeAtArrivalInkWh": 9.00664945454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.03592339927273,
                        "chargingTimeInSeconds": 3735,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 113912,
                        "travelTimeInSeconds": 3958,
                        "batteryConsumptionInkWh": 36.350063272727276,
                        "remainingChargeAtArrivalInkWh": 16.685860126545457,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 397832,
                "dauer": 20533,
                "verbrauch": 94.11123590909092,
                "restreichweite": 9.051769450909092,
                "ladezeit": 6552,
                "routen_id": 206,
                "legs": [
                    {
                        "lengthInMeters": 117746,
                        "travelTimeInSeconds": 4251,
                        "batteryConsumptionInkWh": 30.35796463636364,
                        "remainingChargeAtArrivalInkWh": 5.64203536363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2151,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293458,
                        "chargingParkName": "E.ON W\u00fcrzburg"
                    },
                    {
                        "lengthInMeters": 109612,
                        "travelTimeInSeconds": 3985,
                        "batteryConsumptionInkWh": 22.80340363636364,
                        "remainingChargeAtArrivalInkWh": 4.646596363636359,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.35,
                        "chargingTimeInSeconds": 2281,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93112,
                        "travelTimeInSeconds": 2762,
                        "batteryConsumptionInkWh": 23.805305363636368,
                        "remainingChargeAtArrivalInkWh": 4.544694636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.196331723636366,
                        "chargingTimeInSeconds": 2120,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215657,
                        "chargingParkName": "Ingolstadt Manchinger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77362,
                        "travelTimeInSeconds": 2982,
                        "batteryConsumptionInkWh": 17.144562272727274,
                        "remainingChargeAtArrivalInkWh": 9.051769450909092,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 398768,
                "dauer": 20462,
                "verbrauch": 83.41183272727272,
                "restreichweite": 7.607304558545454,
                "ladezeit": 6131,
                "routen_id": 207,
                "legs": [
                    {
                        "lengthInMeters": 110972,
                        "travelTimeInSeconds": 4000,
                        "batteryConsumptionInkWh": 25.859855999999997,
                        "remainingChargeAtArrivalInkWh": 4.380144000000001,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2013,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025356140,
                        "chargingParkName": "ChargeIT Mobility Kist Sonnleite"
                    },
                    {
                        "lengthInMeters": 113745,
                        "travelTimeInSeconds": 4251,
                        "batteryConsumptionInkWh": 20.23809309090909,
                        "remainingChargeAtArrivalInkWh": 3.9539069090909074,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2127,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305393,
                        "chargingParkName": "F\u00fcrth Leyher Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 94287,
                        "travelTimeInSeconds": 2978,
                        "batteryConsumptionInkWh": 21.27042909090909,
                        "remainingChargeAtArrivalInkWh": 4.055570909090907,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.650759104,
                        "chargingTimeInSeconds": 1991,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024223992,
                        "chargingParkName": "Ingolstadt Hermann-Paul-M\u00fcller-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 79764,
                        "travelTimeInSeconds": 3103,
                        "batteryConsumptionInkWh": 16.043454545454544,
                        "remainingChargeAtArrivalInkWh": 7.607304558545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Frankfurt",
        "Ziel": "Cologne",
        "start_lat": 50.1136,
        "start_long": 8.6797,
        "dest_lat": 50.9422,
        "dest_long": 6.9578,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 190362,
                "dauer": 6677,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 40,
                "legs": [
                    {
                        "lengthInMeters": 190362,
                        "travelTimeInSeconds": 6677,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 190758,
                "dauer": 8137,
                "verbrauch": 59.909110545454546,
                "restreichweite": 16.65031554181818,
                "ladezeit": 1393,
                "routen_id": 208,
                "legs": [
                    {
                        "lengthInMeters": 118135,
                        "travelTimeInSeconds": 3965,
                        "batteryConsumptionInkWh": 39.867326545454546,
                        "remainingChargeAtArrivalInkWh": 26.45267345454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.69209954181818,
                        "chargingTimeInSeconds": 1393,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295810,
                        "chargingParkName": "E.ON Dernbach"
                    },
                    {
                        "lengthInMeters": 72623,
                        "travelTimeInSeconds": 2779,
                        "batteryConsumptionInkWh": 20.041784,
                        "remainingChargeAtArrivalInkWh": 16.65031554181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 192069,
                "dauer": 8493,
                "verbrauch": 43.97320645454546,
                "restreichweite": 9.04373141709091,
                "ladezeit": 1767,
                "routen_id": 209,
                "legs": [
                    {
                        "lengthInMeters": 123322,
                        "travelTimeInSeconds": 4047,
                        "batteryConsumptionInkWh": 31.107497909090913,
                        "remainingChargeAtArrivalInkWh": 4.892502090909087,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.909439962545456,
                        "chargingTimeInSeconds": 1767,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 68747,
                        "travelTimeInSeconds": 2679,
                        "batteryConsumptionInkWh": 12.865708545454545,
                        "remainingChargeAtArrivalInkWh": 9.04373141709091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 192537,
                "dauer": 8678,
                "verbrauch": 39.40282181818182,
                "restreichweite": 7.6127822836363634,
                "ladezeit": 1871,
                "routen_id": 210,
                "legs": [
                    {
                        "lengthInMeters": 95638,
                        "travelTimeInSeconds": 3346,
                        "batteryConsumptionInkWh": 20.57168,
                        "remainingChargeAtArrivalInkWh": 9.668319999999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.443924101818183,
                        "chargingTimeInSeconds": 1871,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 96899,
                        "travelTimeInSeconds": 3461,
                        "batteryConsumptionInkWh": 18.83114181818182,
                        "remainingChargeAtArrivalInkWh": 7.6127822836363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Frankfurt",
        "Ziel": "Bremen",
        "start_lat": 50.1136,
        "start_long": 8.6797,
        "dest_lat": 53.1153,
        "dest_long": 8.7975,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 448215,
                "dauer": 15987,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 41,
                "legs": [
                    {
                        "lengthInMeters": 448215,
                        "travelTimeInSeconds": 15987,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 455935,
                "dauer": 24593,
                "verbrauch": 138.00274981818183,
                "restreichweite": 16.684341844363644,
                "ladezeit": 8148,
                "routen_id": 211,
                "legs": [
                    {
                        "lengthInMeters": 166913,
                        "travelTimeInSeconds": 5766,
                        "batteryConsumptionInkWh": 54.411860363636364,
                        "remainingChargeAtArrivalInkWh": 11.908139636363643,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.885000000000005,
                        "chargingTimeInSeconds": 3627,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519522,
                        "chargingParkName": "Meinerzhagen Heerstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 153902,
                        "travelTimeInSeconds": 5801,
                        "batteryConsumptionInkWh": 44.73234181818182,
                        "remainingChargeAtArrivalInkWh": 9.152658181818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 41.45,
                        "chargingTimeInSeconds": 2828,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295869,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 17135,
                        "travelTimeInSeconds": 778,
                        "batteryConsumptionInkWh": 4.627066181818182,
                        "remainingChargeAtArrivalInkWh": 36.82293381818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.915823298909096,
                        "chargingTimeInSeconds": 1693,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024224474,
                        "chargingParkName": "Wallenhorst Osnabr\u00fccker Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 117985,
                        "travelTimeInSeconds": 4100,
                        "batteryConsumptionInkWh": 34.23148145454545,
                        "remainingChargeAtArrivalInkWh": 16.684341844363644,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 456144,
                "dauer": 24196,
                "verbrauch": 99.76872881818183,
                "restreichweite": 9.056321625999999,
                "ladezeit": 7576,
                "routen_id": 212,
                "legs": [
                    {
                        "lengthInMeters": 102196,
                        "travelTimeInSeconds": 3727,
                        "batteryConsumptionInkWh": 22.676960090909095,
                        "remainingChargeAtArrivalInkWh": 13.323039909090905,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 1831,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378204,
                        "chargingParkName": "EnBW Dillenburg Stadionstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 118785,
                        "travelTimeInSeconds": 5063,
                        "batteryConsumptionInkWh": 24.61873463636364,
                        "remainingChargeAtArrivalInkWh": 4.631265363636359,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2352,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289980,
                        "chargingParkName": "innogy Schwerte H\u00f6rder Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 101323,
                        "travelTimeInSeconds": 3013,
                        "batteryConsumptionInkWh": 24.655454090909092,
                        "remainingChargeAtArrivalInkWh": 4.5945459090909075,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 13.950000000000001,
                        "chargingTimeInSeconds": 1169,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295869,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 46821,
                        "travelTimeInSeconds": 1734,
                        "batteryConsumptionInkWh": 9.176440636363639,
                        "remainingChargeAtArrivalInkWh": 4.7735593636363625,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.697460989636365,
                        "chargingTimeInSeconds": 2224,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519308,
                        "chargingParkName": "EWE Holdorf Zum Hansa Center"
                    },
                    {
                        "lengthInMeters": 87019,
                        "travelTimeInSeconds": 3084,
                        "batteryConsumptionInkWh": 18.641139363636366,
                        "remainingChargeAtArrivalInkWh": 9.056321625999999,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 455913,
                "dauer": 24017,
                "verbrauch": 89.7803898181818,
                "restreichweite": 7.589308407272725,
                "ladezeit": 7124,
                "routen_id": 213,
                "legs": [
                    {
                        "lengthInMeters": 119093,
                        "travelTimeInSeconds": 4298,
                        "batteryConsumptionInkWh": 24.08014109090909,
                        "remainingChargeAtArrivalInkWh": 6.159858909090907,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 1907,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295107,
                        "chargingParkName": "E.ON Wilnsdorf Rathausstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 112880,
                        "travelTimeInSeconds": 4919,
                        "batteryConsumptionInkWh": 20.340128,
                        "remainingChargeAtArrivalInkWh": 3.8518719999999966,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2045,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302389,
                        "chargingParkName": "E.ON Unna Hans-B\u00f6ckler-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 90804,
                        "travelTimeInSeconds": 2712,
                        "batteryConsumptionInkWh": 20.207297454545454,
                        "remainingChargeAtArrivalInkWh": 3.9847025454545424,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.301999999999996,
                        "chargingTimeInSeconds": 1891,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295869,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 92175,
                        "travelTimeInSeconds": 3138,
                        "batteryConsumptionInkWh": 18.253918545454543,
                        "remainingChargeAtArrivalInkWh": 4.0480814545454535,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 14.488213134545452,
                        "chargingTimeInSeconds": 1281,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291489,
                        "chargingParkName": "E.ON D\u00f6tlingen"
                    },
                    {
                        "lengthInMeters": 40961,
                        "travelTimeInSeconds": 1827,
                        "batteryConsumptionInkWh": 6.898904727272727,
                        "remainingChargeAtArrivalInkWh": 7.589308407272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Frankfurt",
        "Ziel": "Stuttgart",
        "start_lat": 50.1136,
        "start_long": 8.6797,
        "dest_lat": 48.7761,
        "dest_long": 9.1775,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 208943,
                "dauer": 8015,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 42,
                "legs": [
                    {
                        "lengthInMeters": 208943,
                        "travelTimeInSeconds": 8015,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 217675,
                "dauer": 9881,
                "verbrauch": 66.65058400000001,
                "restreichweite": 16.645942288000004,
                "ladezeit": 1761,
                "routen_id": 214,
                "legs": [
                    {
                        "lengthInMeters": 161284,
                        "travelTimeInSeconds": 5611,
                        "batteryConsumptionInkWh": 50.259440000000005,
                        "remainingChargeAtArrivalInkWh": 16.060560000000002,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 33.037086288000005,
                        "chargingTimeInSeconds": 1761,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291698,
                        "chargingParkName": "Pforzheim Karlsruher Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 56391,
                        "travelTimeInSeconds": 2509,
                        "batteryConsumptionInkWh": 16.391144,
                        "remainingChargeAtArrivalInkWh": 16.645942288000004,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 218283,
                "dauer": 10270,
                "verbrauch": 48.02251172727273,
                "restreichweite": 9.063643111818184,
                "ladezeit": 2159,
                "routen_id": 215,
                "legs": [
                    {
                        "lengthInMeters": 121125,
                        "travelTimeInSeconds": 4324,
                        "batteryConsumptionInkWh": 26.708009363636368,
                        "remainingChargeAtArrivalInkWh": 9.291990636363632,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.37814547545455,
                        "chargingTimeInSeconds": 2159,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023664718,
                        "chargingParkName": "Karlsdorf-Neuthard Lu\u00dfhardtstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97158,
                        "travelTimeInSeconds": 3787,
                        "batteryConsumptionInkWh": 21.314502363636365,
                        "remainingChargeAtArrivalInkWh": 9.063643111818184,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 218283,
                "dauer": 10272,
                "verbrauch": 43.47905309090909,
                "restreichweite": 7.615789146181818,
                "ladezeit": 2161,
                "routen_id": 216,
                "legs": [
                    {
                        "lengthInMeters": 121125,
                        "travelTimeInSeconds": 4324,
                        "batteryConsumptionInkWh": 24.36509818181818,
                        "remainingChargeAtArrivalInkWh": 5.874901818181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.729744055272725,
                        "chargingTimeInSeconds": 2161,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023664718,
                        "chargingParkName": "Karlsdorf-Neuthard Lu\u00dfhardtstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97158,
                        "travelTimeInSeconds": 3787,
                        "batteryConsumptionInkWh": 19.113954909090907,
                        "remainingChargeAtArrivalInkWh": 7.615789146181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Frankfurt",
        "Ziel": "D\u00fcsseldorf",
        "start_lat": 50.1136,
        "start_long": 8.6797,
        "dest_lat": 51.2311,
        "dest_long": 6.7724,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 230421,
                "dauer": 8480,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 43,
                "legs": [
                    {
                        "lengthInMeters": 230421,
                        "travelTimeInSeconds": 8480,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 234015,
                "dauer": 10484,
                "verbrauch": 71.41833236363637,
                "restreichweite": 16.66181098763636,
                "ladezeit": 2161,
                "routen_id": 217,
                "legs": [
                    {
                        "lengthInMeters": 148067,
                        "travelTimeInSeconds": 4783,
                        "batteryConsumptionInkWh": 48.661424,
                        "remainingChargeAtArrivalInkWh": 17.65857600000001,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.41871935127273,
                        "chargingTimeInSeconds": 2161,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521407,
                        "chargingParkName": "ALDI S\u00dcD K\u00f6nigswinter K\u00f6nigswinterer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 85948,
                        "travelTimeInSeconds": 3540,
                        "batteryConsumptionInkWh": 22.756908363636366,
                        "remainingChargeAtArrivalInkWh": 16.66181098763636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 232169,
                "dauer": 10581,
                "verbrauch": 51.133707545454556,
                "restreichweite": 9.06236705890909,
                "ladezeit": 2323,
                "routen_id": 218,
                "legs": [
                    {
                        "lengthInMeters": 123294,
                        "travelTimeInSeconds": 4040,
                        "batteryConsumptionInkWh": 31.132807363636367,
                        "remainingChargeAtArrivalInkWh": 4.867192636363633,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.063267240727274,
                        "chargingTimeInSeconds": 2323,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292050,
                        "chargingParkName": "E.ON Willroth Grubenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 108875,
                        "travelTimeInSeconds": 4219,
                        "batteryConsumptionInkWh": 20.000900181818185,
                        "remainingChargeAtArrivalInkWh": 9.06236705890909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 232680,
                "dauer": 11405,
                "verbrauch": 45.94133963636364,
                "restreichweite": 7.596952157090907,
                "ladezeit": 2849,
                "routen_id": 219,
                "legs": [
                    {
                        "lengthInMeters": 95638,
                        "travelTimeInSeconds": 3345,
                        "batteryConsumptionInkWh": 20.582107636363634,
                        "remainingChargeAtArrivalInkWh": 9.657892363636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.522,
                        "chargingTimeInSeconds": 1258,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 67540,
                        "travelTimeInSeconds": 2176,
                        "batteryConsumptionInkWh": 14.443153454545454,
                        "remainingChargeAtArrivalInkWh": 4.078846545454544,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.513030702545453,
                        "chargingTimeInSeconds": 1591,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291655,
                        "chargingParkName": "E.ON Siegburg"
                    },
                    {
                        "lengthInMeters": 69502,
                        "travelTimeInSeconds": 3035,
                        "batteryConsumptionInkWh": 10.916078545454546,
                        "remainingChargeAtArrivalInkWh": 7.596952157090907,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Frankfurt",
        "Ziel": "Dortmund",
        "start_lat": 50.1136,
        "start_long": 8.6797,
        "dest_lat": 51.5139,
        "dest_long": 7.4653,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 223002,
                "dauer": 8323,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 44,
                "legs": [
                    {
                        "lengthInMeters": 223002,
                        "travelTimeInSeconds": 8323,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 227784,
                "dauer": 11401,
                "verbrauch": 68.95472436363636,
                "restreichweite": 16.657691963636363,
                "ladezeit": 2003,
                "routen_id": 220,
                "legs": [
                    {
                        "lengthInMeters": 147630,
                        "travelTimeInSeconds": 5178,
                        "batteryConsumptionInkWh": 46.688742545454545,
                        "remainingChargeAtArrivalInkWh": 19.631257454545462,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.92367378181818,
                        "chargingTimeInSeconds": 2003,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222020,
                        "chargingParkName": "Wenden Koblenzer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 80154,
                        "travelTimeInSeconds": 4220,
                        "batteryConsumptionInkWh": 22.265981818181817,
                        "remainingChargeAtArrivalInkWh": 16.657691963636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 234861,
                "dauer": 11971,
                "verbrauch": 48.88977545454546,
                "restreichweite": 9.054823181818183,
                "ladezeit": 2153,
                "routen_id": 221,
                "legs": [
                    {
                        "lengthInMeters": 140439,
                        "travelTimeInSeconds": 5113,
                        "batteryConsumptionInkWh": 30.893923454545458,
                        "remainingChargeAtArrivalInkWh": 5.106076545454542,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.050675181818182,
                        "chargingTimeInSeconds": 2153,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293960,
                        "chargingParkName": "Siegen Freudenberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 94422,
                        "travelTimeInSeconds": 4705,
                        "batteryConsumptionInkWh": 17.995852,
                        "remainingChargeAtArrivalInkWh": 9.054823181818183,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 229454,
                "dauer": 11899,
                "verbrauch": 42.58266618181818,
                "restreichweite": 7.6109949672727275,
                "ladezeit": 2046,
                "routen_id": 222,
                "legs": [
                    {
                        "lengthInMeters": 128238,
                        "travelTimeInSeconds": 4880,
                        "batteryConsumptionInkWh": 24.645182545454546,
                        "remainingChargeAtArrivalInkWh": 5.594817454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.548478603636365,
                        "chargingTimeInSeconds": 2046,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025516794,
                        "chargingParkName": "Siegen L\u00f6hrtor"
                    },
                    {
                        "lengthInMeters": 101216,
                        "travelTimeInSeconds": 4973,
                        "batteryConsumptionInkWh": 17.937483636363638,
                        "remainingChargeAtArrivalInkWh": 7.6109949672727275,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Frankfurt",
        "Ziel": "Essen",
        "start_lat": 50.1136,
        "start_long": 8.6797,
        "dest_lat": 51.4508,
        "dest_long": 7.0131,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 247948,
                "dauer": 9079,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 45,
                "legs": [
                    {
                        "lengthInMeters": 247948,
                        "travelTimeInSeconds": 9079,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 251542,
                "dauer": 11506,
                "verbrauch": 77.05709963636363,
                "restreichweite": 16.67037757236364,
                "ladezeit": 2598,
                "routen_id": 223,
                "legs": [
                    {
                        "lengthInMeters": 148067,
                        "travelTimeInSeconds": 4784,
                        "batteryConsumptionInkWh": 48.65745818181818,
                        "remainingChargeAtArrivalInkWh": 17.66254181818183,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 45.070019026909094,
                        "chargingTimeInSeconds": 2598,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521407,
                        "chargingParkName": "ALDI S\u00dcD K\u00f6nigswinter K\u00f6nigswinterer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 103475,
                        "travelTimeInSeconds": 4124,
                        "batteryConsumptionInkWh": 28.399641454545453,
                        "remainingChargeAtArrivalInkWh": 16.67037757236364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 253360,
                "dauer": 12391,
                "verbrauch": 55.42531972727273,
                "restreichweite": 9.05816278509091,
                "ladezeit": 3243,
                "routen_id": 224,
                "legs": [
                    {
                        "lengthInMeters": 95638,
                        "travelTimeInSeconds": 3346,
                        "batteryConsumptionInkWh": 22.92652790909091,
                        "remainingChargeAtArrivalInkWh": 13.073472090909089,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.0,
                        "chargingTimeInSeconds": 974,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 54247,
                        "travelTimeInSeconds": 1710,
                        "batteryConsumptionInkWh": 13.404779181818183,
                        "remainingChargeAtArrivalInkWh": 4.595220818181817,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.152175421454547,
                        "chargingTimeInSeconds": 2269,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025521407,
                        "chargingParkName": "ALDI S\u00dcD K\u00f6nigswinter K\u00f6nigswinterer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 103475,
                        "travelTimeInSeconds": 4092,
                        "batteryConsumptionInkWh": 19.094012636363637,
                        "remainingChargeAtArrivalInkWh": 9.05816278509091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 250207,
                "dauer": 12265,
                "verbrauch": 49.568890181818176,
                "restreichweite": 7.6072449163636335,
                "ladezeit": 3131,
                "routen_id": 225,
                "legs": [
                    {
                        "lengthInMeters": 95638,
                        "travelTimeInSeconds": 3346,
                        "batteryConsumptionInkWh": 20.57684509090909,
                        "remainingChargeAtArrivalInkWh": 9.66315490909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.522,
                        "chargingTimeInSeconds": 1258,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 67540,
                        "travelTimeInSeconds": 2176,
                        "batteryConsumptionInkWh": 14.443153454545454,
                        "remainingChargeAtArrivalInkWh": 4.078846545454544,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.15613655272727,
                        "chargingTimeInSeconds": 1873,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291655,
                        "chargingParkName": "E.ON Siegburg"
                    },
                    {
                        "lengthInMeters": 87029,
                        "travelTimeInSeconds": 3613,
                        "batteryConsumptionInkWh": 14.548891636363635,
                        "remainingChargeAtArrivalInkWh": 7.6072449163636335,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Bremen",
        "Ziel": "Berlin",
        "start_lat": 53.1153,
        "start_long": 8.7975,
        "dest_lat": 52.5167,
        "dest_long": 13.3833,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 393595,
                "dauer": 13036,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 46,
                "legs": [
                    {
                        "lengthInMeters": 393595,
                        "travelTimeInSeconds": 13036,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 393596,
                "dauer": 19303,
                "verbrauch": 123.2163010909091,
                "restreichweite": 16.67136777454546,
                "ladezeit": 6431,
                "routen_id": 226,
                "legs": [
                    {
                        "lengthInMeters": 169532,
                        "travelTimeInSeconds": 5291,
                        "batteryConsumptionInkWh": 52.37092509090909,
                        "remainingChargeAtArrivalInkWh": 13.949074909090918,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.569,
                        "chargingTimeInSeconds": 3247,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222760,
                        "chargingParkName": "Bienrode-Waggum-Bevenrode Lilienthalplatz"
                    },
                    {
                        "lengthInMeters": 126639,
                        "travelTimeInSeconds": 3518,
                        "batteryConsumptionInkWh": 41.63691636363637,
                        "remainingChargeAtArrivalInkWh": 8.932083636363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 45.879827410909094,
                        "chargingTimeInSeconds": 3184,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377112,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 97425,
                        "travelTimeInSeconds": 4062,
                        "batteryConsumptionInkWh": 29.208459636363635,
                        "remainingChargeAtArrivalInkWh": 16.67136777454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 394687,
                "dauer": 19531,
                "verbrauch": 93.08101663636364,
                "restreichweite": 9.059927600909091,
                "ladezeit": 6497,
                "routen_id": 227,
                "legs": [
                    {
                        "lengthInMeters": 127836,
                        "travelTimeInSeconds": 4106,
                        "batteryConsumptionInkWh": 29.447550363636367,
                        "remainingChargeAtArrivalInkWh": 6.552449636363633,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.400000000000002,
                        "chargingTimeInSeconds": 1784,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303428,
                        "chargingParkName": "Lehrte Burgdorfer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 78070,
                        "travelTimeInSeconds": 2399,
                        "batteryConsumptionInkWh": 18.789988,
                        "remainingChargeAtArrivalInkWh": 4.610012000000001,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2318,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304651,
                        "chargingParkName": "E.ON Helmstedt"
                    },
                    {
                        "lengthInMeters": 91356,
                        "travelTimeInSeconds": 2471,
                        "batteryConsumptionInkWh": 23.87967781818182,
                        "remainingChargeAtArrivalInkWh": 4.920322181818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.023728055454548,
                        "chargingTimeInSeconds": 2395,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377112,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 97425,
                        "travelTimeInSeconds": 4058,
                        "batteryConsumptionInkWh": 20.963800454545456,
                        "remainingChargeAtArrivalInkWh": 9.059927600909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 402585,
                "dauer": 20335,
                "verbrauch": 85.42875199999999,
                "restreichweite": 7.597614263272725,
                "ladezeit": 6794,
                "routen_id": 228,
                "legs": [
                    {
                        "lengthInMeters": 111995,
                        "travelTimeInSeconds": 3679,
                        "batteryConsumptionInkWh": 23.75863854545454,
                        "remainingChargeAtArrivalInkWh": 6.481361454545457,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 1887,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220138,
                        "chargingParkName": "enercity Burgwedel Im Klint"
                    },
                    {
                        "lengthInMeters": 95467,
                        "travelTimeInSeconds": 3114,
                        "batteryConsumptionInkWh": 20.276197818181817,
                        "remainingChargeAtArrivalInkWh": 3.9158021818181794,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 14.741999999999997,
                        "chargingTimeInSeconds": 1309,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304651,
                        "chargingParkName": "E.ON Helmstedt"
                    },
                    {
                        "lengthInMeters": 47283,
                        "travelTimeInSeconds": 1356,
                        "batteryConsumptionInkWh": 10.680823272727272,
                        "remainingChargeAtArrivalInkWh": 4.061176727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1974,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 83500,
                        "travelTimeInSeconds": 2423,
                        "batteryConsumptionInkWh": 19.465960727272726,
                        "remainingChargeAtArrivalInkWh": 3.97003927272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.84474589963636,
                        "chargingTimeInSeconds": 1624,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517580,
                        "chargingParkName": "Kloster Lehnin Kurf\u00fcrstenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 64340,
                        "travelTimeInSeconds": 2969,
                        "batteryConsumptionInkWh": 11.247131636363637,
                        "remainingChargeAtArrivalInkWh": 7.597614263272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Bremen",
        "Ziel": "Hamburg",
        "start_lat": 53.1153,
        "start_long": 8.7975,
        "dest_lat": 53.55,
        "dest_long": 10.01,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 123564,
                "dauer": 4201,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 47,
                "legs": [
                    {
                        "lengthInMeters": 123564,
                        "travelTimeInSeconds": 4201,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 123564,
                "dauer": 4077,
                "verbrauch": 38.87315854545455,
                "restreichweite": 27.446841454545456,
                "ladezeit": null,
                "routen_id": 229,
                "legs": [
                    {
                        "lengthInMeters": 123564,
                        "travelTimeInSeconds": 4077,
                        "batteryConsumptionInkWh": 38.87315854545455,
                        "remainingChargeAtArrivalInkWh": 27.446841454545456,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 128247,
                "dauer": 5203,
                "verbrauch": 29.888495000000006,
                "restreichweite": 9.038748566363639,
                "ladezeit": 827,
                "routen_id": 230,
                "legs": [
                    {
                        "lengthInMeters": 78524,
                        "travelTimeInSeconds": 2475,
                        "batteryConsumptionInkWh": 19.51421181818182,
                        "remainingChargeAtArrivalInkWh": 16.48578818181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.413031748181822,
                        "chargingTimeInSeconds": 827,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023668424,
                        "chargingParkName": "EWE Heidenau Hauptstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 49723,
                        "travelTimeInSeconds": 1901,
                        "batteryConsumptionInkWh": 10.374283181818184,
                        "remainingChargeAtArrivalInkWh": 9.038748566363639,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 128247,
                "dauer": 5324,
                "verbrauch": 27.131735272727273,
                "restreichweite": 7.593918786909089,
                "ladezeit": 947,
                "routen_id": 231,
                "legs": [
                    {
                        "lengthInMeters": 78524,
                        "travelTimeInSeconds": 2475,
                        "batteryConsumptionInkWh": 17.73234181818182,
                        "remainingChargeAtArrivalInkWh": 12.50765818181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.993312241454543,
                        "chargingTimeInSeconds": 947,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023668424,
                        "chargingParkName": "EWE Heidenau Hauptstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 49723,
                        "travelTimeInSeconds": 1902,
                        "batteryConsumptionInkWh": 9.399393454545454,
                        "remainingChargeAtArrivalInkWh": 7.593918786909089,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Bremen",
        "Ziel": "Munich",
        "start_lat": 53.1153,
        "start_long": 8.7975,
        "dest_lat": 48.1372,
        "dest_long": 11.5755,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 753082,
                "dauer": 23592,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 48,
                "legs": [
                    {
                        "lengthInMeters": 753082,
                        "travelTimeInSeconds": 23592,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 757517,
                "dauer": 41419,
                "verbrauch": 238.69863054545453,
                "restreichweite": 16.686409079272728,
                "ladezeit": 16422,
                "routen_id": 232,
                "legs": [
                    {
                        "lengthInMeters": 152316,
                        "travelTimeInSeconds": 4853,
                        "batteryConsumptionInkWh": 47.02291490909091,
                        "remainingChargeAtArrivalInkWh": 19.2970850909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 2797,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226692,
                        "chargingParkName": "Hildesheim Frankenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 134186,
                        "travelTimeInSeconds": 4945,
                        "batteryConsumptionInkWh": 40.469713454545456,
                        "remainingChargeAtArrivalInkWh": 8.441286545454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 37.305,
                        "chargingTimeInSeconds": 2550,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519040,
                        "chargingParkName": "Kaufungen Leipziger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 81167,
                        "travelTimeInSeconds": 2652,
                        "batteryConsumptionInkWh": 28.290059636363637,
                        "remainingChargeAtArrivalInkWh": 9.014940363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 3414,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304777,
                        "chargingParkName": "Mer Burghaun"
                    },
                    {
                        "lengthInMeters": 126665,
                        "travelTimeInSeconds": 3795,
                        "batteryConsumptionInkWh": 40.267874181818186,
                        "remainingChargeAtArrivalInkWh": 8.643125818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 54.714000000000006,
                        "chargingTimeInSeconds": 3886,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024218034,
                        "chargingParkName": "Unterfr\u00e4nkische \u00dcberlandzentrale Gerolzhofen Dingolsh\u00e4user Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 149271,
                        "travelTimeInSeconds": 4887,
                        "batteryConsumptionInkWh": 46.023528727272726,
                        "remainingChargeAtArrivalInkWh": 8.69047127272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.310948715636364,
                        "chargingTimeInSeconds": 3775,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 113912,
                        "travelTimeInSeconds": 3864,
                        "batteryConsumptionInkWh": 36.624539636363636,
                        "remainingChargeAtArrivalInkWh": 16.686409079272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 768479,
                "dauer": 40462,
                "verbrauch": 175.361431,
                "restreichweite": 9.052987624,
                "ladezeit": 14652,
                "routen_id": 233,
                "legs": [
                    {
                        "lengthInMeters": 128833,
                        "travelTimeInSeconds": 4207,
                        "batteryConsumptionInkWh": 29.18501663636364,
                        "remainingChargeAtArrivalInkWh": 6.814983363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.1,
                        "chargingTimeInSeconds": 1977,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025373935,
                        "chargingParkName": "enercity Kleefeld Kleestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 110037,
                        "travelTimeInSeconds": 4343,
                        "batteryConsumptionInkWh": 21.413354454545455,
                        "remainingChargeAtArrivalInkWh": 4.686645545454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2209,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302741,
                        "chargingParkName": "Mer N\u00f6rten-Hardenberg Unter dem Pferdestiege"
                    },
                    {
                        "lengthInMeters": 91021,
                        "travelTimeInSeconds": 2789,
                        "batteryConsumptionInkWh": 22.866573545454546,
                        "remainingChargeAtArrivalInkWh": 4.583426454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.35,
                        "chargingTimeInSeconds": 2285,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522415,
                        "chargingParkName": "EAM Kn\u00fcllwald"
                    },
                    {
                        "lengthInMeters": 96280,
                        "travelTimeInSeconds": 3089,
                        "batteryConsumptionInkWh": 23.483024727272728,
                        "remainingChargeAtArrivalInkWh": 4.866975272727274,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.05,
                        "chargingTimeInSeconds": 1780,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303521,
                        "chargingParkName": "Volkswagen Bad Br\u00fcckenau R\u00f6mershager Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 76860,
                        "travelTimeInSeconds": 2453,
                        "batteryConsumptionInkWh": 17.484165363636365,
                        "remainingChargeAtArrivalInkWh": 4.565834636363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.85,
                        "chargingTimeInSeconds": 1938,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024218034,
                        "chargingParkName": "Unterfr\u00e4nkische \u00dcberlandzentrale Gerolzhofen Dingolsh\u00e4user Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 94974,
                        "travelTimeInSeconds": 3386,
                        "batteryConsumptionInkWh": 19.175957181818184,
                        "remainingChargeAtArrivalInkWh": 4.674042818181817,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2315,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93112,
                        "travelTimeInSeconds": 2652,
                        "batteryConsumptionInkWh": 24.259527090909092,
                        "remainingChargeAtArrivalInkWh": 4.540472909090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.546799624000002,
                        "chargingTimeInSeconds": 2148,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215657,
                        "chargingParkName": "Ingolstadt Manchinger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77362,
                        "travelTimeInSeconds": 2891,
                        "batteryConsumptionInkWh": 17.493812000000002,
                        "remainingChargeAtArrivalInkWh": 9.052987624,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 768558,
                "dauer": 41106,
                "verbrauch": 162.2595767272727,
                "restreichweite": 7.607834321454543,
                "ladezeit": 14886,
                "routen_id": 234,
                "legs": [
                    {
                        "lengthInMeters": 111995,
                        "travelTimeInSeconds": 3679,
                        "batteryConsumptionInkWh": 23.75863854545454,
                        "remainingChargeAtArrivalInkWh": 6.481361454545457,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999996,
                        "chargingTimeInSeconds": 1770,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220138,
                        "chargingParkName": "enercity Burgwedel Im Klint"
                    },
                    {
                        "lengthInMeters": 100573,
                        "travelTimeInSeconds": 4031,
                        "batteryConsumptionInkWh": 18.89789818181818,
                        "remainingChargeAtArrivalInkWh": 3.7821018181818147,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.9,
                        "chargingTimeInSeconds": 1639,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024221661,
                        "chargingParkName": "Kalefeld Wiesengrund"
                    },
                    {
                        "lengthInMeters": 80492,
                        "travelTimeInSeconds": 3119,
                        "batteryConsumptionInkWh": 15.08177309090909,
                        "remainingChargeAtArrivalInkWh": 3.8182269090909084,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999993,
                        "chargingTimeInSeconds": 1930,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519040,
                        "chargingParkName": "Kaufungen Leipziger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 81167,
                        "travelTimeInSeconds": 2650,
                        "batteryConsumptionInkWh": 18.58399709090909,
                        "remainingChargeAtArrivalInkWh": 4.0960029090909025,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2059,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304777,
                        "chargingParkName": "Mer Burghaun"
                    },
                    {
                        "lengthInMeters": 95889,
                        "travelTimeInSeconds": 3002,
                        "batteryConsumptionInkWh": 20.726048,
                        "remainingChargeAtArrivalInkWh": 3.843951999999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 31.373999999999995,
                        "chargingTimeInSeconds": 3335,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025518191,
                        "chargingParkName": "Euerbach"
                    },
                    {
                        "lengthInMeters": 124391,
                        "travelTimeInSeconds": 3860,
                        "batteryConsumptionInkWh": 27.403243636363634,
                        "remainingChargeAtArrivalInkWh": 3.9707563636363616,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2126,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305393,
                        "chargingParkName": "F\u00fcrth Leyher Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 94287,
                        "travelTimeInSeconds": 2869,
                        "batteryConsumptionInkWh": 21.450817454545454,
                        "remainingChargeAtArrivalInkWh": 3.8751825454545425,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.96499504872727,
                        "chargingTimeInSeconds": 2027,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024223992,
                        "chargingParkName": "Ingolstadt Hermann-Paul-M\u00fcller-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 79764,
                        "travelTimeInSeconds": 3010,
                        "batteryConsumptionInkWh": 16.357160727272728,
                        "remainingChargeAtArrivalInkWh": 7.607834321454543,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Bremen",
        "Ziel": "Cologne",
        "start_lat": 53.1153,
        "start_long": 8.7975,
        "dest_lat": 50.9422,
        "dest_long": 6.9578,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 319845,
                "dauer": 11647,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 49,
                "legs": [
                    {
                        "lengthInMeters": 319845,
                        "travelTimeInSeconds": 11647,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 321281,
                "dauer": 16533,
                "verbrauch": 92.69348581818181,
                "restreichweite": 16.659286222545457,
                "ladezeit": 4252,
                "routen_id": 235,
                "legs": [
                    {
                        "lengthInMeters": 148337,
                        "travelTimeInSeconds": 6173,
                        "batteryConsumptionInkWh": 41.009690909090914,
                        "remainingChargeAtArrivalInkWh": 25.310309090909094,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 37.305,
                        "chargingTimeInSeconds": 1530,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227019,
                        "chargingParkName": "Ladbergen Dorfstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93739,
                        "travelTimeInSeconds": 3089,
                        "batteryConsumptionInkWh": 28.620683636363637,
                        "remainingChargeAtArrivalInkWh": 8.684316363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.72239749527273,
                        "chargingTimeInSeconds": 2722,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292251,
                        "chargingParkName": "E.ON Hagen-Nord"
                    },
                    {
                        "lengthInMeters": 79205,
                        "travelTimeInSeconds": 3019,
                        "batteryConsumptionInkWh": 23.063111272727273,
                        "remainingChargeAtArrivalInkWh": 16.659286222545457,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 318855,
                "dauer": 16064,
                "verbrauch": 64.51639281818183,
                "restreichweite": 9.055700714545456,
                "ladezeit": 3928,
                "routen_id": 236,
                "legs": [
                    {
                        "lengthInMeters": 132129,
                        "travelTimeInSeconds": 5695,
                        "batteryConsumptionInkWh": 24.026866818181823,
                        "remainingChargeAtArrivalInkWh": 11.973133181818177,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 1772,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291563,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 97798,
                        "travelTimeInSeconds": 3079,
                        "batteryConsumptionInkWh": 22.834418090909093,
                        "remainingChargeAtArrivalInkWh": 4.615581909090906,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.710808623636368,
                        "chargingTimeInSeconds": 2156,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293359,
                        "chargingParkName": "E.ON Aplerbeck"
                    },
                    {
                        "lengthInMeters": 88928,
                        "travelTimeInSeconds": 3362,
                        "batteryConsumptionInkWh": 17.655107909090912,
                        "remainingChargeAtArrivalInkWh": 9.055700714545456,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 318855,
                "dauer": 15935,
                "verbrauch": 58.538411636363634,
                "restreichweite": 7.6067679738181795,
                "ladezeit": 3796,
                "routen_id": 237,
                "legs": [
                    {
                        "lengthInMeters": 132129,
                        "travelTimeInSeconds": 5695,
                        "batteryConsumptionInkWh": 21.973368727272728,
                        "remainingChargeAtArrivalInkWh": 8.26663127272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 1809,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291563,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 97798,
                        "travelTimeInSeconds": 3079,
                        "batteryConsumptionInkWh": 20.741056,
                        "remainingChargeAtArrivalInkWh": 3.8289439999999964,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.43075488290909,
                        "chargingTimeInSeconds": 1987,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293359,
                        "chargingParkName": "E.ON Aplerbeck"
                    },
                    {
                        "lengthInMeters": 88928,
                        "travelTimeInSeconds": 3364,
                        "batteryConsumptionInkWh": 15.823986909090909,
                        "remainingChargeAtArrivalInkWh": 7.6067679738181795,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Bremen",
        "Ziel": "Frankfurt",
        "start_lat": 53.1153,
        "start_long": 8.7975,
        "dest_lat": 50.1136,
        "dest_long": 8.6797,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 470055,
                "dauer": 15026,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 50,
                "legs": [
                    {
                        "lengthInMeters": 470055,
                        "travelTimeInSeconds": 15026,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 474623,
                "dauer": 24788,
                "verbrauch": 148.64909309090908,
                "restreichweite": 16.660555284363635,
                "ladezeit": 8806,
                "routen_id": 238,
                "legs": [
                    {
                        "lengthInMeters": 152316,
                        "travelTimeInSeconds": 4853,
                        "batteryConsumptionInkWh": 47.02291490909091,
                        "remainingChargeAtArrivalInkWh": 19.2970850909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 2797,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226692,
                        "chargingParkName": "Hildesheim Frankenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 134186,
                        "travelTimeInSeconds": 4945,
                        "batteryConsumptionInkWh": 40.47033963636364,
                        "remainingChargeAtArrivalInkWh": 8.440660363636361,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 47.25300000000001,
                        "chargingTimeInSeconds": 3321,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519040,
                        "chargingParkName": "Kaufungen Leipziger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 113527,
                        "travelTimeInSeconds": 3530,
                        "batteryConsumptionInkWh": 38.399347636363636,
                        "remainingChargeAtArrivalInkWh": 8.853652363636371,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.417046193454546,
                        "chargingTimeInSeconds": 2688,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009007355771,
                        "chargingParkName": "Allego M\u00fccke Gottesrain"
                    },
                    {
                        "lengthInMeters": 74594,
                        "travelTimeInSeconds": 2654,
                        "batteryConsumptionInkWh": 22.75649090909091,
                        "remainingChargeAtArrivalInkWh": 16.660555284363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 464718,
                "dauer": 25076,
                "verbrauch": 96.01722454545455,
                "restreichweite": 9.055661713090913,
                "ladezeit": 6934,
                "routen_id": 239,
                "legs": [
                    {
                        "lengthInMeters": 133202,
                        "travelTimeInSeconds": 5658,
                        "batteryConsumptionInkWh": 25.009890181818182,
                        "remainingChargeAtArrivalInkWh": 10.990109818181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 1971,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291563,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 107509,
                        "travelTimeInSeconds": 3367,
                        "batteryConsumptionInkWh": 24.694663000000006,
                        "remainingChargeAtArrivalInkWh": 4.555336999999994,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 32.4,
                        "chargingTimeInSeconds": 2735,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292251,
                        "chargingParkName": "E.ON Hagen-Nord"
                    },
                    {
                        "lengthInMeters": 136434,
                        "travelTimeInSeconds": 5808,
                        "batteryConsumptionInkWh": 27.533782181818186,
                        "remainingChargeAtArrivalInkWh": 4.866217818181813,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.834550894909096,
                        "chargingTimeInSeconds": 2228,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026287283,
                        "chargingParkName": "ChargeIT Mobility Herborn Littau"
                    },
                    {
                        "lengthInMeters": 87573,
                        "travelTimeInSeconds": 3309,
                        "batteryConsumptionInkWh": 18.778889181818183,
                        "remainingChargeAtArrivalInkWh": 9.055661713090913,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 456469,
                "dauer": 24490,
                "verbrauch": 85.687104,
                "restreichweite": 7.620016919272729,
                "ladezeit": 6781,
                "routen_id": 240,
                "legs": [
                    {
                        "lengthInMeters": 133202,
                        "travelTimeInSeconds": 5658,
                        "batteryConsumptionInkWh": 22.857476363636366,
                        "remainingChargeAtArrivalInkWh": 7.382523636363633,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 1862,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291563,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 97798,
                        "travelTimeInSeconds": 3079,
                        "batteryConsumptionInkWh": 20.740178909090908,
                        "remainingChargeAtArrivalInkWh": 3.829821090909089,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2075,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293359,
                        "chargingParkName": "E.ON Aplerbeck"
                    },
                    {
                        "lengthInMeters": 110218,
                        "travelTimeInSeconds": 4792,
                        "batteryConsumptionInkWh": 20.422184727272725,
                        "remainingChargeAtArrivalInkWh": 4.1478152727272715,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.287280919272728,
                        "chargingTimeInSeconds": 2844,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295107,
                        "chargingParkName": "E.ON Wilnsdorf Rathausstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 115251,
                        "travelTimeInSeconds": 4180,
                        "batteryConsumptionInkWh": 21.667264,
                        "remainingChargeAtArrivalInkWh": 7.620016919272729,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Bremen",
        "Ziel": "Stuttgart",
        "start_lat": 53.1153,
        "start_long": 8.7975,
        "dest_lat": 48.7761,
        "dest_long": 9.1775,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 642318,
                "dauer": 20469,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 51,
                "legs": [
                    {
                        "lengthInMeters": 642318,
                        "travelTimeInSeconds": 20469,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 640490,
                "dauer": 34739,
                "verbrauch": 203.28450036363637,
                "restreichweite": 16.653106642909087,
                "ladezeit": 13244,
                "routen_id": 241,
                "legs": [
                    {
                        "lengthInMeters": 176391,
                        "travelTimeInSeconds": 6123,
                        "batteryConsumptionInkWh": 53.59678036363636,
                        "remainingChargeAtArrivalInkWh": 12.723219636363645,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.056000000000004,
                        "chargingTimeInSeconds": 3513,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306625,
                        "chargingParkName": "Bockenem Hachumer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 141429,
                        "travelTimeInSeconds": 4837,
                        "batteryConsumptionInkWh": 44.67535927272727,
                        "remainingChargeAtArrivalInkWh": 8.380640727272734,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.885000000000005,
                        "chargingTimeInSeconds": 3838,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522415,
                        "chargingParkName": "EAM Kn\u00fcllwald"
                    },
                    {
                        "lengthInMeters": 135563,
                        "travelTimeInSeconds": 4109,
                        "batteryConsumptionInkWh": 44.91560436363636,
                        "remainingChargeAtArrivalInkWh": 8.969395636363643,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 3417,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815510,
                        "chargingParkName": "Unterfr\u00e4nkische \u00dcberlandzentrale Wasserlosen Kirchstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 123879,
                        "travelTimeInSeconds": 3805,
                        "batteryConsumptionInkWh": 40.12343490909091,
                        "remainingChargeAtArrivalInkWh": 8.78756509090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.62642809745454,
                        "chargingTimeInSeconds": 2476,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302873,
                        "chargingParkName": "Neuenstadt am Kocher Wilhelm-Maybach-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 63228,
                        "travelTimeInSeconds": 2620,
                        "batteryConsumptionInkWh": 19.973321454545456,
                        "remainingChargeAtArrivalInkWh": 16.653106642909087,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 652556,
                "dauer": 34604,
                "verbrauch": 152.97853772727274,
                "restreichweite": 9.046198673999998,
                "ladezeit": 12467,
                "routen_id": 242,
                "legs": [
                    {
                        "lengthInMeters": 130751,
                        "travelTimeInSeconds": 4137,
                        "batteryConsumptionInkWh": 30.227683181818186,
                        "remainingChargeAtArrivalInkWh": 5.772316818181814,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.55,
                        "chargingTimeInSeconds": 2075,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291968,
                        "chargingParkName": "enercity Kirchrode Brabeckstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 110449,
                        "travelTimeInSeconds": 4532,
                        "batteryConsumptionInkWh": 21.689891363636363,
                        "remainingChargeAtArrivalInkWh": 4.860108636363638,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2198,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302741,
                        "chargingParkName": "Mer N\u00f6rten-Hardenberg Unter dem Pferdestiege"
                    },
                    {
                        "lengthInMeters": 91021,
                        "travelTimeInSeconds": 2788,
                        "batteryConsumptionInkWh": 22.872174818181822,
                        "remainingChargeAtArrivalInkWh": 4.577825181818177,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.25,
                        "chargingTimeInSeconds": 1658,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522415,
                        "chargingParkName": "EAM Kn\u00fcllwald"
                    },
                    {
                        "lengthInMeters": 60950,
                        "travelTimeInSeconds": 1916,
                        "batteryConsumptionInkWh": 15.355785454545455,
                        "remainingChargeAtArrivalInkWh": 4.894214545454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.6,
                        "chargingTimeInSeconds": 2440,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303558,
                        "chargingParkName": "Mer Fulda Michelsrombacher Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 111328,
                        "travelTimeInSeconds": 3745,
                        "batteryConsumptionInkWh": 25.698224363636367,
                        "remainingChargeAtArrivalInkWh": 4.9017756363636344,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2231,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377987,
                        "chargingParkName": "ChargeIT Mobility W\u00fcrzburg Virchowstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 84829,
                        "travelTimeInSeconds": 2399,
                        "batteryConsumptionInkWh": 23.03544154545455,
                        "remainingChargeAtArrivalInkWh": 4.8645584545454525,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.145535673999998,
                        "chargingTimeInSeconds": 1865,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302873,
                        "chargingParkName": "Neuenstadt am Kocher Wilhelm-Maybach-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 63228,
                        "travelTimeInSeconds": 2620,
                        "batteryConsumptionInkWh": 14.099337,
                        "remainingChargeAtArrivalInkWh": 9.046198673999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 648613,
                "dauer": 34766,
                "verbrauch": 136.5301149090909,
                "restreichweite": 7.600438885818182,
                "ladezeit": 12312,
                "routen_id": 243,
                "legs": [
                    {
                        "lengthInMeters": 111995,
                        "travelTimeInSeconds": 3679,
                        "batteryConsumptionInkWh": 23.75863854545454,
                        "remainingChargeAtArrivalInkWh": 6.481361454545457,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999996,
                        "chargingTimeInSeconds": 1770,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220138,
                        "chargingParkName": "enercity Burgwedel Im Klint"
                    },
                    {
                        "lengthInMeters": 100573,
                        "travelTimeInSeconds": 4031,
                        "batteryConsumptionInkWh": 18.898288,
                        "remainingChargeAtArrivalInkWh": 3.7817119999999953,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.9,
                        "chargingTimeInSeconds": 1639,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024221661,
                        "chargingParkName": "Kalefeld Wiesengrund"
                    },
                    {
                        "lengthInMeters": 80492,
                        "travelTimeInSeconds": 3119,
                        "batteryConsumptionInkWh": 15.08177309090909,
                        "remainingChargeAtArrivalInkWh": 3.8182269090909084,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.68,
                        "chargingTimeInSeconds": 1930,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519040,
                        "chargingParkName": "Kaufungen Leipziger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 81167,
                        "travelTimeInSeconds": 2650,
                        "batteryConsumptionInkWh": 18.583899636363636,
                        "remainingChargeAtArrivalInkWh": 4.0961003636363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.617999999999995,
                        "chargingTimeInSeconds": 3148,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304777,
                        "chargingParkName": "Mer Burghaun"
                    },
                    {
                        "lengthInMeters": 123766,
                        "travelTimeInSeconds": 3809,
                        "batteryConsumptionInkWh": 26.680618181818183,
                        "remainingChargeAtArrivalInkWh": 3.9373818181818123,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2099,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302718,
                        "chargingParkName": "Mer W\u00fcrzburg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 87392,
                        "travelTimeInSeconds": 2545,
                        "batteryConsumptionInkWh": 20.867454545454546,
                        "remainingChargeAtArrivalInkWh": 4.080545454545451,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.25988179490909,
                        "chargingTimeInSeconds": 1726,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302873,
                        "chargingParkName": "Neuenstadt am Kocher Wilhelm-Maybach-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 63228,
                        "travelTimeInSeconds": 2620,
                        "batteryConsumptionInkWh": 12.65944290909091,
                        "remainingChargeAtArrivalInkWh": 7.600438885818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Bremen",
        "Ziel": "D\u00fcsseldorf",
        "start_lat": 53.1153,
        "start_long": 8.7975,
        "dest_lat": 51.2311,
        "dest_long": 6.7724,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 300259,
                "dauer": 10493,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 52,
                "legs": [
                    {
                        "lengthInMeters": 300259,
                        "travelTimeInSeconds": 10493,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 294879,
                "dauer": 14835,
                "verbrauch": 85.99584509090909,
                "restreichweite": 16.657055345454545,
                "ladezeit": 3738,
                "routen_id": 244,
                "legs": [
                    {
                        "lengthInMeters": 133202,
                        "travelTimeInSeconds": 5658,
                        "batteryConsumptionInkWh": 37.35049309090909,
                        "remainingChargeAtArrivalInkWh": 28.969506909090917,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.476000000000006,
                        "chargingTimeInSeconds": 1182,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291563,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 89314,
                        "travelTimeInSeconds": 2729,
                        "batteryConsumptionInkWh": 27.53425818181818,
                        "remainingChargeAtArrivalInkWh": 8.941741818181825,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 37.768149163636366,
                        "chargingTimeInSeconds": 2556,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220571,
                        "chargingParkName": "Marl Carl-Duisberg-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 72363,
                        "travelTimeInSeconds": 2709,
                        "batteryConsumptionInkWh": 21.11109381818182,
                        "remainingChargeAtArrivalInkWh": 16.657055345454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 296026,
                "dauer": 15030,
                "verbrauch": 60.090661272727274,
                "restreichweite": 9.04334098763636,
                "ladezeit": 3568,
                "routen_id": 245,
                "legs": [
                    {
                        "lengthInMeters": 133202,
                        "travelTimeInSeconds": 5658,
                        "batteryConsumptionInkWh": 25.009890181818182,
                        "remainingChargeAtArrivalInkWh": 10.990109818181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 1866,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291563,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 101428,
                        "travelTimeInSeconds": 3354,
                        "batteryConsumptionInkWh": 23.293722454545456,
                        "remainingChargeAtArrivalInkWh": 4.606277545454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.830389624,
                        "chargingTimeInSeconds": 1702,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306739,
                        "chargingParkName": "E.ON Dorsten S\u00fcdwall"
                    },
                    {
                        "lengthInMeters": 61396,
                        "travelTimeInSeconds": 2450,
                        "batteryConsumptionInkWh": 11.787048636363638,
                        "remainingChargeAtArrivalInkWh": 9.04334098763636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 297816,
                "dauer": 15146,
                "verbrauch": 54.349425454545454,
                "restreichweite": 7.61011417309091,
                "ladezeit": 3530,
                "routen_id": 246,
                "legs": [
                    {
                        "lengthInMeters": 110529,
                        "travelTimeInSeconds": 4787,
                        "batteryConsumptionInkWh": 18.26853672727273,
                        "remainingChargeAtArrivalInkWh": 11.97146327272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1459,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293927,
                        "chargingParkName": "Bramsche In der Welle"
                    },
                    {
                        "lengthInMeters": 93429,
                        "travelTimeInSeconds": 3266,
                        "batteryConsumptionInkWh": 19.023224727272726,
                        "remainingChargeAtArrivalInkWh": 4.03477527272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.66777817309091,
                        "chargingTimeInSeconds": 2071,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517314,
                        "chargingParkName": "D\u00fclmen Dammweg"
                    },
                    {
                        "lengthInMeters": 93858,
                        "travelTimeInSeconds": 3564,
                        "batteryConsumptionInkWh": 17.057664,
                        "remainingChargeAtArrivalInkWh": 7.61011417309091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Bremen",
        "Ziel": "Dortmund",
        "start_lat": 53.1153,
        "start_long": 8.7975,
        "dest_lat": 51.5139,
        "dest_long": 7.4653,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 237952,
                "dauer": 9091,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 53,
                "legs": [
                    {
                        "lengthInMeters": 237952,
                        "travelTimeInSeconds": 9091,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 249052,
                "dauer": 12142,
                "verbrauch": 71.9330538181818,
                "restreichweite": 16.659370548363633,
                "ladezeit": 2195,
                "routen_id": 247,
                "legs": [
                    {
                        "lengthInMeters": 172631,
                        "travelTimeInSeconds": 6832,
                        "batteryConsumptionInkWh": 48.932351999999995,
                        "remainingChargeAtArrivalInkWh": 17.387648000000013,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.66007236654545,
                        "chargingTimeInSeconds": 2195,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222157,
                        "chargingParkName": "innogy M\u00fcnster Steinfurter Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 76421,
                        "travelTimeInSeconds": 3115,
                        "batteryConsumptionInkWh": 23.000701818181817,
                        "remainingChargeAtArrivalInkWh": 16.659370548363633,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 245833,
                "dauer": 12109,
                "verbrauch": 48.853574636363646,
                "restreichweite": 9.06944250363636,
                "ladezeit": 2174,
                "routen_id": 248,
                "legs": [
                    {
                        "lengthInMeters": 157754,
                        "travelTimeInSeconds": 6490,
                        "batteryConsumptionInkWh": 29.628243272727275,
                        "remainingChargeAtArrivalInkWh": 6.371756727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.294773867272728,
                        "chargingTimeInSeconds": 2174,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293816,
                        "chargingParkName": "Volkswagen Greven Am Eggenkamp"
                    },
                    {
                        "lengthInMeters": 88079,
                        "travelTimeInSeconds": 3445,
                        "batteryConsumptionInkWh": 19.225331363636368,
                        "remainingChargeAtArrivalInkWh": 9.06944250363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 244533,
                "dauer": 12618,
                "verbrauch": 45.16033890909091,
                "restreichweite": 7.600101498181822,
                "ladezeit": 2817,
                "routen_id": 249,
                "legs": [
                    {
                        "lengthInMeters": 92808,
                        "travelTimeInSeconds": 4000,
                        "batteryConsumptionInkWh": 16.171412363636364,
                        "remainingChargeAtArrivalInkWh": 14.068587636363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.167999999999996,
                        "chargingTimeInSeconds": 1150,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303536,
                        "chargingParkName": "E.ON Holdorf"
                    },
                    {
                        "lengthInMeters": 89529,
                        "travelTimeInSeconds": 3129,
                        "batteryConsumptionInkWh": 17.13289890909091,
                        "remainingChargeAtArrivalInkWh": 4.035101090909087,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.456129134545456,
                        "chargingTimeInSeconds": 1667,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519001,
                        "chargingParkName": "innogy Hiltrup Kopenhagener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 62196,
                        "travelTimeInSeconds": 2672,
                        "batteryConsumptionInkWh": 11.856027636363635,
                        "remainingChargeAtArrivalInkWh": 7.600101498181822,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Bremen",
        "Ziel": "Essen",
        "start_lat": 53.1153,
        "start_long": 8.7975,
        "dest_lat": 51.4508,
        "dest_long": 7.0131,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 260036,
                "dauer": 9637,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 54,
                "legs": [
                    {
                        "lengthInMeters": 260036,
                        "travelTimeInSeconds": 9637,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 257094,
                "dauer": 12880,
                "verbrauch": 74.45051345454544,
                "restreichweite": 16.677066864000004,
                "ladezeit": 2513,
                "routen_id": 250,
                "legs": [
                    {
                        "lengthInMeters": 149410,
                        "travelTimeInSeconds": 6135,
                        "batteryConsumptionInkWh": 41.974219636363635,
                        "remainingChargeAtArrivalInkWh": 24.345780363636372,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 49.15336068218182,
                        "chargingTimeInSeconds": 2513,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227019,
                        "chargingParkName": "Ladbergen Dorfstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 107684,
                        "travelTimeInSeconds": 4231,
                        "batteryConsumptionInkWh": 32.476293818181816,
                        "remainingChargeAtArrivalInkWh": 16.677066864000004,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 258382,
                "dauer": 13323,
                "verbrauch": 52.19099963636365,
                "restreichweite": 9.041188646727273,
                "ladezeit": 3004,
                "routen_id": 251,
                "legs": [
                    {
                        "lengthInMeters": 92808,
                        "travelTimeInSeconds": 4000,
                        "batteryConsumptionInkWh": 17.68000245454546,
                        "remainingChargeAtArrivalInkWh": 18.31999754545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 1342,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303536,
                        "chargingParkName": "E.ON Holdorf"
                    },
                    {
                        "lengthInMeters": 107319,
                        "travelTimeInSeconds": 3608,
                        "batteryConsumptionInkWh": 23.020608545454547,
                        "remainingChargeAtArrivalInkWh": 4.8793914545454555,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.53157728309091,
                        "chargingTimeInSeconds": 1662,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215443,
                        "chargingParkName": "innogy D\u00fclmen Auf dem Quellberg"
                    },
                    {
                        "lengthInMeters": 58255,
                        "travelTimeInSeconds": 2710,
                        "batteryConsumptionInkWh": 11.490388636363638,
                        "remainingChargeAtArrivalInkWh": 9.041188646727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 259201,
                "dauer": 13362,
                "verbrauch": 47.63656145454545,
                "restreichweite": 7.596123988363635,
                "ladezeit": 3011,
                "routen_id": 252,
                "legs": [
                    {
                        "lengthInMeters": 110529,
                        "travelTimeInSeconds": 4787,
                        "batteryConsumptionInkWh": 18.269413818181818,
                        "remainingChargeAtArrivalInkWh": 11.970586181818181,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1459,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293927,
                        "chargingParkName": "Bramsche In der Welle"
                    },
                    {
                        "lengthInMeters": 90417,
                        "travelTimeInSeconds": 2858,
                        "batteryConsumptionInkWh": 18.91397818181818,
                        "remainingChargeAtArrivalInkWh": 4.144021818181816,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.04929344290909,
                        "chargingTimeInSeconds": 1552,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215443,
                        "chargingParkName": "innogy D\u00fclmen Auf dem Quellberg"
                    },
                    {
                        "lengthInMeters": 58255,
                        "travelTimeInSeconds": 2707,
                        "batteryConsumptionInkWh": 10.453169454545455,
                        "remainingChargeAtArrivalInkWh": 7.596123988363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Stuttgart",
        "Ziel": "Hamburg",
        "start_lat": 48.7761,
        "start_long": 9.1775,
        "dest_lat": 53.55,
        "dest_long": 10.01,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 666396,
                "dauer": 21630,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 56,
                "legs": [
                    {
                        "lengthInMeters": 666396,
                        "travelTimeInSeconds": 21630,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 660680,
                "dauer": 36193,
                "verbrauch": 209.69681090909089,
                "restreichweite": 16.648035822545456,
                "ladezeit": 14257,
                "routen_id": 255,
                "legs": [
                    {
                        "lengthInMeters": 145871,
                        "travelTimeInSeconds": 5170,
                        "batteryConsumptionInkWh": 47.44350036363637,
                        "remainingChargeAtArrivalInkWh": 18.87649963636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 49.74,
                        "chargingTimeInSeconds": 2887,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291226,
                        "chargingParkName": "W\u00fcrzburg Walther-von-der-Vogelweide-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 126002,
                        "travelTimeInSeconds": 4288,
                        "batteryConsumptionInkWh": 41.32173818181818,
                        "remainingChargeAtArrivalInkWh": 8.418261818181819,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 57.20100000000001,
                        "chargingTimeInSeconds": 4093,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306930,
                        "chargingParkName": "Mer Burghaun"
                    },
                    {
                        "lengthInMeters": 133192,
                        "travelTimeInSeconds": 3964,
                        "batteryConsumptionInkWh": 43.34868872727272,
                        "remainingChargeAtArrivalInkWh": 13.852311272727285,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 43.108000000000004,
                        "chargingTimeInSeconds": 2675,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302741,
                        "chargingParkName": "Mer N\u00f6rten-Hardenberg Unter dem Pferdestiege"
                    },
                    {
                        "lengthInMeters": 117538,
                        "travelTimeInSeconds": 4136,
                        "batteryConsumptionInkWh": 34.21060872727273,
                        "remainingChargeAtArrivalInkWh": 8.897391272727276,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 34.818000000000005,
                        "chargingTimeInSeconds": 2329,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220138,
                        "chargingParkName": "enercity Burgwedel Im Klint"
                    },
                    {
                        "lengthInMeters": 80591,
                        "travelTimeInSeconds": 2429,
                        "batteryConsumptionInkWh": 25.934363636363635,
                        "remainingChargeAtArrivalInkWh": 8.88363636363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 34.08594709527273,
                        "chargingTimeInSeconds": 2273,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305086,
                        "chargingParkName": "Bispingen Horstfeldweg"
                    },
                    {
                        "lengthInMeters": 57486,
                        "travelTimeInSeconds": 1949,
                        "batteryConsumptionInkWh": 17.437911272727273,
                        "remainingChargeAtArrivalInkWh": 16.648035822545456,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 668023,
                "dauer": 35702,
                "verbrauch": 157.56629127272728,
                "restreichweite": 9.044096951999999,
                "ladezeit": 13393,
                "routen_id": 256,
                "legs": [
                    {
                        "lengthInMeters": 61802,
                        "travelTimeInSeconds": 2720,
                        "batteryConsumptionInkWh": 12.972132727272728,
                        "remainingChargeAtArrivalInkWh": 23.02786727272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 942,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302873,
                        "chargingParkName": "Neuenstadt am Kocher Wilhelm-Maybach-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 84696,
                        "travelTimeInSeconds": 2537,
                        "batteryConsumptionInkWh": 22.725193272727275,
                        "remainingChargeAtArrivalInkWh": 4.724806727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2242,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291226,
                        "chargingParkName": "W\u00fcrzburg Walther-von-der-Vogelweide-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 100241,
                        "travelTimeInSeconds": 3486,
                        "batteryConsumptionInkWh": 23.257729090909095,
                        "remainingChargeAtArrivalInkWh": 4.642270909090907,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.400000000000002,
                        "chargingTimeInSeconds": 1898,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024813105,
                        "chargingParkName": "Allego Eichenzell Fuldaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 75036,
                        "travelTimeInSeconds": 2349,
                        "batteryConsumptionInkWh": 18.852950454545457,
                        "remainingChargeAtArrivalInkWh": 4.547049545454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2357,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522415,
                        "chargingParkName": "EAM Kn\u00fcllwald"
                    },
                    {
                        "lengthInMeters": 103992,
                        "travelTimeInSeconds": 3214,
                        "batteryConsumptionInkWh": 24.628070090909095,
                        "remainingChargeAtArrivalInkWh": 4.621929909090905,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.0,
                        "chargingTimeInSeconds": 2178,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815013,
                        "chargingParkName": "Northeim Westerlange"
                    },
                    {
                        "lengthInMeters": 104179,
                        "travelTimeInSeconds": 3624,
                        "batteryConsumptionInkWh": 22.051588363636366,
                        "remainingChargeAtArrivalInkWh": 4.948411636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.75,
                        "chargingTimeInSeconds": 1984,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220138,
                        "chargingParkName": "enercity Burgwedel Im Klint"
                    },
                    {
                        "lengthInMeters": 80591,
                        "travelTimeInSeconds": 2429,
                        "batteryConsumptionInkWh": 20.030151272727277,
                        "remainingChargeAtArrivalInkWh": 4.719848727272723,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.092572952,
                        "chargingTimeInSeconds": 1792,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305086,
                        "chargingParkName": "Bispingen Horstfeldweg"
                    },
                    {
                        "lengthInMeters": 57486,
                        "travelTimeInSeconds": 1949,
                        "batteryConsumptionInkWh": 13.048476000000003,
                        "remainingChargeAtArrivalInkWh": 9.044096951999999,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 676068,
                "dauer": 35478,
                "verbrauch": 142.27164945454544,
                "restreichweite": 7.599178408727273,
                "ladezeit": 12691,
                "routen_id": 257,
                "legs": [
                    {
                        "lengthInMeters": 61802,
                        "travelTimeInSeconds": 2720,
                        "batteryConsumptionInkWh": 11.648546909090907,
                        "remainingChargeAtArrivalInkWh": 18.59145309090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 1034,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302873,
                        "chargingParkName": "Neuenstadt am Kocher Wilhelm-Maybach-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 84696,
                        "travelTimeInSeconds": 2537,
                        "batteryConsumptionInkWh": 20.408443636363636,
                        "remainingChargeAtArrivalInkWh": 3.783556363636361,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2108,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291226,
                        "chargingParkName": "W\u00fcrzburg Walther-von-der-Vogelweide-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 100241,
                        "travelTimeInSeconds": 3486,
                        "batteryConsumptionInkWh": 20.835781818181818,
                        "remainingChargeAtArrivalInkWh": 4.112218181818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.789999999999996,
                        "chargingTimeInSeconds": 1766,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024813105,
                        "chargingParkName": "Allego Eichenzell Fuldaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 75036,
                        "travelTimeInSeconds": 2350,
                        "batteryConsumptionInkWh": 16.785376,
                        "remainingChargeAtArrivalInkWh": 4.004623999999996,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2007,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522415,
                        "chargingParkName": "EAM Kn\u00fcllwald"
                    },
                    {
                        "lengthInMeters": 90424,
                        "travelTimeInSeconds": 2685,
                        "batteryConsumptionInkWh": 19.782688,
                        "remainingChargeAtArrivalInkWh": 4.031311999999996,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1946,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302741,
                        "chargingParkName": "Mer N\u00f6rten-Hardenberg Unter dem Pferdestiege"
                    },
                    {
                        "lengthInMeters": 105499,
                        "travelTimeInSeconds": 3773,
                        "batteryConsumptionInkWh": 19.23626036363636,
                        "remainingChargeAtArrivalInkWh": 3.8217396363636347,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2135,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291968,
                        "chargingParkName": "enercity Kirchrode Brabeckstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 99199,
                        "travelTimeInSeconds": 3187,
                        "batteryConsumptionInkWh": 21.54534836363636,
                        "remainingChargeAtArrivalInkWh": 3.780651636363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.628382772363636,
                        "chargingTimeInSeconds": 1695,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295320,
                        "chargingParkName": "Bispingen Borsteler Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 59171,
                        "travelTimeInSeconds": 2049,
                        "batteryConsumptionInkWh": 12.029204363636364,
                        "remainingChargeAtArrivalInkWh": 7.599178408727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Stuttgart",
        "Ziel": "Munich",
        "start_lat": 48.7761,
        "start_long": 9.1775,
        "dest_lat": 48.1372,
        "dest_long": 11.5755,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 228089,
                "dauer": 8536,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 57,
                "legs": [
                    {
                        "lengthInMeters": 228089,
                        "travelTimeInSeconds": 8536,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 229586,
                "dauer": 10682,
                "verbrauch": 75.10821309090909,
                "restreichweite": 16.649895582545458,
                "ladezeit": 2295,
                "routen_id": 258,
                "legs": [
                    {
                        "lengthInMeters": 171115,
                        "travelTimeInSeconds": 5619,
                        "batteryConsumptionInkWh": 57.26328363636364,
                        "remainingChargeAtArrivalInkWh": 9.056716363636369,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 34.49482503709091,
                        "chargingTimeInSeconds": 2295,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815335,
                        "chargingParkName": "innogy Dasing Laimeringer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 58471,
                        "travelTimeInSeconds": 2768,
                        "batteryConsumptionInkWh": 17.844929454545454,
                        "remainingChargeAtArrivalInkWh": 16.649895582545458,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 230623,
                "dauer": 11664,
                "verbrauch": 55.68640127272728,
                "restreichweite": 9.042885624909088,
                "ladezeit": 3141,
                "routen_id": 259,
                "legs": [
                    {
                        "lengthInMeters": 122852,
                        "travelTimeInSeconds": 4341,
                        "batteryConsumptionInkWh": 29.887457727272732,
                        "remainingChargeAtArrivalInkWh": 6.112542272727268,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.0,
                        "chargingTimeInSeconds": 1391,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276008000034166,
                        "chargingParkName": "innogy Jettingen-Scheppach Robert-Bosch-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 49300,
                        "travelTimeInSeconds": 1436,
                        "batteryConsumptionInkWh": 13.304163727272728,
                        "remainingChargeAtArrivalInkWh": 4.695836272727272,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.53766544309091,
                        "chargingTimeInSeconds": 1750,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815335,
                        "chargingParkName": "innogy Dasing Laimeringer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 58471,
                        "travelTimeInSeconds": 2745,
                        "batteryConsumptionInkWh": 12.49477981818182,
                        "remainingChargeAtArrivalInkWh": 9.042885624909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 228663,
                "dauer": 11668,
                "verbrauch": 49.763117090909084,
                "restreichweite": 7.590229352727273,
                "ladezeit": 3112,
                "routen_id": 260,
                "legs": [
                    {
                        "lengthInMeters": 104761,
                        "travelTimeInSeconds": 3954,
                        "batteryConsumptionInkWh": 22.321573818181815,
                        "remainingChargeAtArrivalInkWh": 7.918426181818184,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 1772,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289215,
                        "chargingParkName": "E.ON Leipheim An der Bundesautobahn"
                    },
                    {
                        "lengthInMeters": 79808,
                        "travelTimeInSeconds": 2251,
                        "batteryConsumptionInkWh": 19.88686690909091,
                        "remainingChargeAtArrivalInkWh": 3.927133090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 15.144905716363636,
                        "chargingTimeInSeconds": 1340,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226988,
                        "chargingParkName": "EDEKA Odelzhausen Rudolf-Diesel-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 44094,
                        "travelTimeInSeconds": 2351,
                        "batteryConsumptionInkWh": 7.554676363636363,
                        "remainingChargeAtArrivalInkWh": 7.590229352727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Stuttgart",
        "Ziel": "Cologne",
        "start_lat": 48.7761,
        "start_long": 9.1775,
        "dest_lat": 50.9422,
        "dest_long": 6.9578,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 367628,
                "dauer": 12670,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 58,
                "legs": [
                    {
                        "lengthInMeters": 367628,
                        "travelTimeInSeconds": 12670,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 373586,
                "dauer": 18810,
                "verbrauch": 114.28486109090909,
                "restreichweite": 16.65503611781818,
                "ladezeit": 5695,
                "routen_id": 261,
                "legs": [
                    {
                        "lengthInMeters": 184318,
                        "travelTimeInSeconds": 6740,
                        "batteryConsumptionInkWh": 54.810320727272725,
                        "remainingChargeAtArrivalInkWh": 11.509679272727283,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.082,
                        "chargingTimeInSeconds": 3201,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222654,
                        "chargingParkName": "innogy B\u00fcttelborn Mainzer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 116529,
                        "travelTimeInSeconds": 3742,
                        "batteryConsumptionInkWh": 39.16391563636364,
                        "remainingChargeAtArrivalInkWh": 8.91808436363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.96566084509091,
                        "chargingTimeInSeconds": 2494,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295810,
                        "chargingParkName": "E.ON Dernbach"
                    },
                    {
                        "lengthInMeters": 72739,
                        "travelTimeInSeconds": 2633,
                        "batteryConsumptionInkWh": 20.310624727272728,
                        "remainingChargeAtArrivalInkWh": 16.65503611781818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 379270,
                "dauer": 19383,
                "verbrauch": 82.23975327272728,
                "restreichweite": 9.044905817272726,
                "ladezeit": 5695,
                "routen_id": 262,
                "legs": [
                    {
                        "lengthInMeters": 133641,
                        "travelTimeInSeconds": 5418,
                        "batteryConsumptionInkWh": 27.200610181818185,
                        "remainingChargeAtArrivalInkWh": 8.799389818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.55,
                        "chargingTimeInSeconds": 1893,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520733,
                        "chargingParkName": "Heddesheim Edekastra\u00dfe"
                    },
                    {
                        "lengthInMeters": 99928,
                        "travelTimeInSeconds": 3463,
                        "batteryConsumptionInkWh": 21.861041363636364,
                        "remainingChargeAtArrivalInkWh": 4.688958636363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.75,
                        "chargingTimeInSeconds": 2000,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 76838,
                        "travelTimeInSeconds": 2296,
                        "batteryConsumptionInkWh": 19.933062545454547,
                        "remainingChargeAtArrivalInkWh": 4.816937454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.28994499909091,
                        "chargingTimeInSeconds": 1802,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 68863,
                        "travelTimeInSeconds": 2511,
                        "batteryConsumptionInkWh": 13.245039181818184,
                        "remainingChargeAtArrivalInkWh": 9.044905817272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 378002,
                "dauer": 19146,
                "verbrauch": 73.95981381818181,
                "restreichweite": 7.5962446370909085,
                "ladezeit": 5422,
                "routen_id": 263,
                "legs": [
                    {
                        "lengthInMeters": 133641,
                        "travelTimeInSeconds": 5418,
                        "batteryConsumptionInkWh": 24.57179927272727,
                        "remainingChargeAtArrivalInkWh": 5.66820072727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 1907,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520733,
                        "chargingParkName": "Heddesheim Edekastra\u00dfe"
                    },
                    {
                        "lengthInMeters": 99928,
                        "travelTimeInSeconds": 3462,
                        "batteryConsumptionInkWh": 19.868155636363635,
                        "remainingChargeAtArrivalInkWh": 3.945844363636361,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999996,
                        "chargingTimeInSeconds": 1922,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 80240,
                        "travelTimeInSeconds": 2436,
                        "batteryConsumptionInkWh": 18.518117818181818,
                        "remainingChargeAtArrivalInkWh": 4.161882181818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.597985727999998,
                        "chargingTimeInSeconds": 1593,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291769,
                        "chargingParkName": "E.ON Krunkel"
                    },
                    {
                        "lengthInMeters": 64193,
                        "travelTimeInSeconds": 2408,
                        "batteryConsumptionInkWh": 11.00174109090909,
                        "remainingChargeAtArrivalInkWh": 7.5962446370909085,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Stuttgart",
        "Ziel": "Frankfurt",
        "start_lat": 48.7761,
        "start_long": 9.1775,
        "dest_lat": 50.1136,
        "dest_long": 8.6797,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 210987,
                "dauer": 7805,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 59,
                "legs": [
                    {
                        "lengthInMeters": 210987,
                        "travelTimeInSeconds": 7805,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 214327,
                "dauer": 10252,
                "verbrauch": 63.16379490909091,
                "restreichweite": 16.665571000727276,
                "ladezeit": 1647,
                "routen_id": 264,
                "legs": [
                    {
                        "lengthInMeters": 133641,
                        "travelTimeInSeconds": 5418,
                        "batteryConsumptionInkWh": 38.73602472727273,
                        "remainingChargeAtArrivalInkWh": 27.58397527272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 41.09334118254546,
                        "chargingTimeInSeconds": 1647,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520733,
                        "chargingParkName": "Heddesheim Edekastra\u00dfe"
                    },
                    {
                        "lengthInMeters": 80686,
                        "travelTimeInSeconds": 3187,
                        "batteryConsumptionInkWh": 24.427770181818182,
                        "remainingChargeAtArrivalInkWh": 16.665571000727276,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 214327,
                "dauer": 10525,
                "verbrauch": 45.11825181818182,
                "restreichweite": 9.059551693272727,
                "ladezeit": 1926,
                "routen_id": 265,
                "legs": [
                    {
                        "lengthInMeters": 133641,
                        "travelTimeInSeconds": 5418,
                        "batteryConsumptionInkWh": 27.200610181818185,
                        "remainingChargeAtArrivalInkWh": 8.799389818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.977193329636364,
                        "chargingTimeInSeconds": 1926,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520733,
                        "chargingParkName": "Heddesheim Edekastra\u00dfe"
                    },
                    {
                        "lengthInMeters": 80686,
                        "travelTimeInSeconds": 3181,
                        "batteryConsumptionInkWh": 17.917641636363637,
                        "remainingChargeAtArrivalInkWh": 9.059551693272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 214327,
                "dauer": 10517,
                "verbrauch": 40.91726545454545,
                "restreichweite": 7.607810932363634,
                "ladezeit": 1918,
                "routen_id": 266,
                "legs": [
                    {
                        "lengthInMeters": 133641,
                        "travelTimeInSeconds": 5418,
                        "batteryConsumptionInkWh": 24.57179927272727,
                        "remainingChargeAtArrivalInkWh": 5.66820072727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.953277114181816,
                        "chargingTimeInSeconds": 1918,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520733,
                        "chargingParkName": "Heddesheim Edekastra\u00dfe"
                    },
                    {
                        "lengthInMeters": 80686,
                        "travelTimeInSeconds": 3181,
                        "batteryConsumptionInkWh": 16.345466181818182,
                        "remainingChargeAtArrivalInkWh": 7.607810932363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Stuttgart",
        "Ziel": "Bremen",
        "start_lat": 48.7761,
        "start_long": 9.1775,
        "dest_lat": 53.1153,
        "dest_long": 8.7975,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 642221,
                "dauer": 20535,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 60,
                "legs": [
                    {
                        "lengthInMeters": 642221,
                        "travelTimeInSeconds": 20535,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 642860,
                "dauer": 34507,
                "verbrauch": 204.41705454545456,
                "restreichweite": 16.688476731636364,
                "ladezeit": 13436,
                "routen_id": 267,
                "legs": [
                    {
                        "lengthInMeters": 145871,
                        "travelTimeInSeconds": 5170,
                        "batteryConsumptionInkWh": 47.443709090909095,
                        "remainingChargeAtArrivalInkWh": 18.876290909090912,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 49.74,
                        "chargingTimeInSeconds": 2887,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291226,
                        "chargingParkName": "W\u00fcrzburg Walther-von-der-Vogelweide-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 126002,
                        "travelTimeInSeconds": 4287,
                        "batteryConsumptionInkWh": 41.322990545454545,
                        "remainingChargeAtArrivalInkWh": 8.417009454545457,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 52.227000000000004,
                        "chargingTimeInSeconds": 3707,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306930,
                        "chargingParkName": "Mer Burghaun"
                    },
                    {
                        "lengthInMeters": 133192,
                        "travelTimeInSeconds": 3963,
                        "batteryConsumptionInkWh": 43.34994109090909,
                        "remainingChargeAtArrivalInkWh": 8.877058909090913,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 43.108000000000004,
                        "chargingTimeInSeconds": 2973,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302741,
                        "chargingParkName": "Mer N\u00f6rten-Hardenberg Unter dem Pferdestiege"
                    },
                    {
                        "lengthInMeters": 119986,
                        "travelTimeInSeconds": 4197,
                        "batteryConsumptionInkWh": 34.642048,
                        "remainingChargeAtArrivalInkWh": 8.465952000000001,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 54.346842549818184,
                        "chargingTimeInSeconds": 3869,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519500,
                        "chargingParkName": "EWE Langenhagen Br\u00fcsseler Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 117809,
                        "travelTimeInSeconds": 3452,
                        "batteryConsumptionInkWh": 37.65836581818182,
                        "remainingChargeAtArrivalInkWh": 16.688476731636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 664669,
                "dauer": 35370,
                "verbrauch": 144.81167463636365,
                "restreichweite": 9.055889705636364,
                "ladezeit": 11434,
                "routen_id": 268,
                "legs": [
                    {
                        "lengthInMeters": 133641,
                        "travelTimeInSeconds": 5418,
                        "batteryConsumptionInkWh": 27.200610181818185,
                        "remainingChargeAtArrivalInkWh": 8.799389818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.7,
                        "chargingTimeInSeconds": 2137,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520733,
                        "chargingParkName": "Heddesheim Edekastra\u00dfe"
                    },
                    {
                        "lengthInMeters": 103555,
                        "travelTimeInSeconds": 3321,
                        "batteryConsumptionInkWh": 24.893093272727274,
                        "remainingChargeAtArrivalInkWh": 4.806906727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2307,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293451,
                        "chargingParkName": "E.ON Ober-M\u00f6rlen"
                    },
                    {
                        "lengthInMeters": 110784,
                        "travelTimeInSeconds": 3916,
                        "batteryConsumptionInkWh": 24.162957000000002,
                        "remainingChargeAtArrivalInkWh": 4.6370429999999985,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2352,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024216430,
                        "chargingParkName": "Wenden K\u00f6lner Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 121177,
                        "travelTimeInSeconds": 4815,
                        "batteryConsumptionInkWh": 24.562514454545454,
                        "remainingChargeAtArrivalInkWh": 4.687485545454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.7,
                        "chargingTimeInSeconds": 2384,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295572,
                        "chargingParkName": "E.ON Ascheberg Zur Davert"
                    },
                    {
                        "lengthInMeters": 108493,
                        "travelTimeInSeconds": 3434,
                        "batteryConsumptionInkWh": 25.04764690909091,
                        "remainingChargeAtArrivalInkWh": 4.652353090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.000742523818186,
                        "chargingTimeInSeconds": 2254,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519308,
                        "chargingParkName": "EWE Holdorf Zum Hansa Center"
                    },
                    {
                        "lengthInMeters": 87019,
                        "travelTimeInSeconds": 3033,
                        "batteryConsumptionInkWh": 18.944852818181822,
                        "remainingChargeAtArrivalInkWh": 9.055889705636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 652266,
                "dauer": 34366,
                "verbrauch": 138.09513745454547,
                "restreichweite": 7.592011016727273,
                "ladezeit": 12371,
                "routen_id": 269,
                "legs": [
                    {
                        "lengthInMeters": 61802,
                        "travelTimeInSeconds": 2720,
                        "batteryConsumptionInkWh": 11.648449454545455,
                        "remainingChargeAtArrivalInkWh": 18.591550545454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 1034,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302873,
                        "chargingParkName": "Neuenstadt am Kocher Wilhelm-Maybach-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 84696,
                        "travelTimeInSeconds": 2537,
                        "batteryConsumptionInkWh": 20.408443636363636,
                        "remainingChargeAtArrivalInkWh": 3.783556363636361,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2108,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291226,
                        "chargingParkName": "W\u00fcrzburg Walther-von-der-Vogelweide-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 100241,
                        "travelTimeInSeconds": 3486,
                        "batteryConsumptionInkWh": 20.837243636363635,
                        "remainingChargeAtArrivalInkWh": 4.110756363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.789999999999996,
                        "chargingTimeInSeconds": 1766,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024813105,
                        "chargingParkName": "Allego Eichenzell Fuldaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 75036,
                        "travelTimeInSeconds": 2350,
                        "batteryConsumptionInkWh": 16.785376,
                        "remainingChargeAtArrivalInkWh": 4.004623999999996,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2007,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522415,
                        "chargingParkName": "EAM Kn\u00fcllwald"
                    },
                    {
                        "lengthInMeters": 90424,
                        "travelTimeInSeconds": 2685,
                        "batteryConsumptionInkWh": 19.782688,
                        "remainingChargeAtArrivalInkWh": 4.031311999999996,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.057999999999996,
                        "chargingTimeInSeconds": 1946,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302741,
                        "chargingParkName": "Mer N\u00f6rten-Hardenberg Unter dem Pferdestiege"
                    },
                    {
                        "lengthInMeters": 105499,
                        "travelTimeInSeconds": 3773,
                        "batteryConsumptionInkWh": 19.23626036363636,
                        "remainingChargeAtArrivalInkWh": 3.8217396363636347,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2106,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291968,
                        "chargingParkName": "enercity Kirchrode Brabeckstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93168,
                        "travelTimeInSeconds": 2933,
                        "batteryConsumptionInkWh": 20.951168,
                        "remainingChargeAtArrivalInkWh": 3.9968319999999977,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.037519380363637,
                        "chargingTimeInSeconds": 1404,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026303503,
                        "chargingParkName": "Total Verden (Aller) Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 41400,
                        "travelTimeInSeconds": 1510,
                        "batteryConsumptionInkWh": 8.445508363636364,
                        "remainingChargeAtArrivalInkWh": 7.592011016727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Stuttgart",
        "Ziel": "D\u00fcsseldorf",
        "start_lat": 48.7761,
        "start_long": 9.1775,
        "dest_lat": 51.2311,
        "dest_long": 6.7724,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 414027,
                "dauer": 14329,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 61,
                "legs": [
                    {
                        "lengthInMeters": 414027,
                        "travelTimeInSeconds": 14329,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 414213,
                "dauer": 21129,
                "verbrauch": 125.48829745454546,
                "restreichweite": 16.677028458181827,
                "ladezeit": 6566,
                "routen_id": 270,
                "legs": [
                    {
                        "lengthInMeters": 184318,
                        "travelTimeInSeconds": 6740,
                        "batteryConsumptionInkWh": 54.81052945454546,
                        "remainingChargeAtArrivalInkWh": 11.509470545454548,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.082,
                        "chargingTimeInSeconds": 3201,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222654,
                        "chargingParkName": "innogy B\u00fcttelborn Mainzer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 116529,
                        "travelTimeInSeconds": 3743,
                        "batteryConsumptionInkWh": 39.16182836363636,
                        "remainingChargeAtArrivalInkWh": 8.92017163636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.19296809454546,
                        "chargingTimeInSeconds": 3365,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295810,
                        "chargingParkName": "E.ON Dernbach"
                    },
                    {
                        "lengthInMeters": 113366,
                        "travelTimeInSeconds": 4080,
                        "batteryConsumptionInkWh": 31.515939636363637,
                        "remainingChargeAtArrivalInkWh": 16.677028458181827,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 418629,
                "dauer": 21451,
                "verbrauch": 89.76132900000002,
                "restreichweite": 9.058040594363636,
                "ladezeit": 6280,
                "routen_id": 271,
                "legs": [
                    {
                        "lengthInMeters": 133641,
                        "travelTimeInSeconds": 5418,
                        "batteryConsumptionInkWh": 27.200610181818185,
                        "remainingChargeAtArrivalInkWh": 8.799389818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.55,
                        "chargingTimeInSeconds": 1893,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520733,
                        "chargingParkName": "Heddesheim Edekastra\u00dfe"
                    },
                    {
                        "lengthInMeters": 99928,
                        "travelTimeInSeconds": 3463,
                        "batteryConsumptionInkWh": 21.864983000000006,
                        "remainingChargeAtArrivalInkWh": 4.685016999999995,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.650000000000002,
                        "chargingTimeInSeconds": 2070,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 80240,
                        "travelTimeInSeconds": 2435,
                        "batteryConsumptionInkWh": 20.727406000000002,
                        "remainingChargeAtArrivalInkWh": 4.922594,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.026370412545457,
                        "chargingTimeInSeconds": 2317,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291769,
                        "chargingParkName": "E.ON Krunkel"
                    },
                    {
                        "lengthInMeters": 104820,
                        "travelTimeInSeconds": 3855,
                        "batteryConsumptionInkWh": 19.96832981818182,
                        "remainingChargeAtArrivalInkWh": 9.058040594363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 420718,
                "dauer": 21150,
                "verbrauch": 81.30048,
                "restreichweite": 7.609833309090909,
                "ladezeit": 5988,
                "routen_id": 272,
                "legs": [
                    {
                        "lengthInMeters": 133641,
                        "travelTimeInSeconds": 5418,
                        "batteryConsumptionInkWh": 24.57179927272727,
                        "remainingChargeAtArrivalInkWh": 5.66820072727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 1907,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520733,
                        "chargingParkName": "Heddesheim Edekastra\u00dfe"
                    },
                    {
                        "lengthInMeters": 99928,
                        "travelTimeInSeconds": 3462,
                        "batteryConsumptionInkWh": 19.869812363636363,
                        "remainingChargeAtArrivalInkWh": 3.9441876363636332,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1981,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 85579,
                        "travelTimeInSeconds": 2541,
                        "batteryConsumptionInkWh": 19.50221381818182,
                        "remainingChargeAtArrivalInkWh": 3.933786181818178,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.966487854545456,
                        "chargingTimeInSeconds": 2100,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024218210,
                        "chargingParkName": "EnBW Neustadt (Wied) Rasthausstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 101570,
                        "travelTimeInSeconds": 3741,
                        "batteryConsumptionInkWh": 17.356654545454546,
                        "remainingChargeAtArrivalInkWh": 7.609833309090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Stuttgart",
        "Ziel": "Dortmund",
        "start_lat": 48.7761,
        "start_long": 9.1775,
        "dest_lat": 51.5139,
        "dest_long": 7.4653,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 417143,
                "dauer": 14969,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 62,
                "legs": [
                    {
                        "lengthInMeters": 417143,
                        "travelTimeInSeconds": 14969,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 423818,
                "dauer": 22280,
                "verbrauch": 129.0251810909091,
                "restreichweite": 16.68826508218182,
                "ladezeit": 6841,
                "routen_id": 273,
                "legs": [
                    {
                        "lengthInMeters": 180983,
                        "travelTimeInSeconds": 6307,
                        "batteryConsumptionInkWh": 54.754799272727276,
                        "remainingChargeAtArrivalInkWh": 11.565200727272732,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 45.595000000000006,
                        "chargingTimeInSeconds": 3004,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293436,
                        "chargingParkName": "E.ON Weiterstadt"
                    },
                    {
                        "lengthInMeters": 116288,
                        "travelTimeInSeconds": 3852,
                        "batteryConsumptionInkWh": 36.613268363636365,
                        "remainingChargeAtArrivalInkWh": 8.98173163636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 54.345378536727274,
                        "chargingTimeInSeconds": 3837,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378204,
                        "chargingParkName": "EnBW Dillenburg Stadionstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 126547,
                        "travelTimeInSeconds": 5280,
                        "batteryConsumptionInkWh": 37.65711345454545,
                        "remainingChargeAtArrivalInkWh": 16.68826508218182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 432962,
                "dauer": 23217,
                "verbrauch": 91.4267740909091,
                "restreichweite": 9.050545676545456,
                "ladezeit": 6409,
                "routen_id": 274,
                "legs": [
                    {
                        "lengthInMeters": 133641,
                        "travelTimeInSeconds": 5418,
                        "batteryConsumptionInkWh": 27.200713909090915,
                        "remainingChargeAtArrivalInkWh": 8.799286090909085,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.7,
                        "chargingTimeInSeconds": 2137,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520733,
                        "chargingParkName": "Heddesheim Edekastra\u00dfe"
                    },
                    {
                        "lengthInMeters": 103555,
                        "travelTimeInSeconds": 3321,
                        "batteryConsumptionInkWh": 24.893404454545454,
                        "remainingChargeAtArrivalInkWh": 4.806595545454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2307,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293451,
                        "chargingParkName": "E.ON Ober-M\u00f6rlen"
                    },
                    {
                        "lengthInMeters": 110784,
                        "travelTimeInSeconds": 3936,
                        "batteryConsumptionInkWh": 23.995230000000003,
                        "remainingChargeAtArrivalInkWh": 4.804769999999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.387971403818185,
                        "chargingTimeInSeconds": 1965,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024216430,
                        "chargingParkName": "Wenden K\u00f6lner Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 84982,
                        "travelTimeInSeconds": 4134,
                        "batteryConsumptionInkWh": 15.337425727272729,
                        "remainingChargeAtArrivalInkWh": 9.050545676545456,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 432280,
                "dauer": 22611,
                "verbrauch": 82.2697629090909,
                "restreichweite": 7.6081077789090905,
                "ladezeit": 6044,
                "routen_id": 275,
                "legs": [
                    {
                        "lengthInMeters": 140385,
                        "travelTimeInSeconds": 5581,
                        "batteryConsumptionInkWh": 25.687069090909088,
                        "remainingChargeAtArrivalInkWh": 4.552930909090911,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1945,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305712,
                        "chargingParkName": "Hemsbach Berliner Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 91701,
                        "travelTimeInSeconds": 2972,
                        "batteryConsumptionInkWh": 19.503090909090908,
                        "remainingChargeAtArrivalInkWh": 3.9329090909090887,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2069,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293451,
                        "chargingParkName": "E.ON Ober-M\u00f6rlen"
                    },
                    {
                        "lengthInMeters": 105772,
                        "travelTimeInSeconds": 3666,
                        "batteryConsumptionInkWh": 20.585713454545456,
                        "remainingChargeAtArrivalInkWh": 3.984286545454541,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.101997233454544,
                        "chargingTimeInSeconds": 2030,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293960,
                        "chargingParkName": "Siegen Freudenberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 94422,
                        "travelTimeInSeconds": 4348,
                        "batteryConsumptionInkWh": 16.493889454545453,
                        "remainingChargeAtArrivalInkWh": 7.6081077789090905,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Stuttgart",
        "Ziel": "Essen",
        "start_lat": 48.7761,
        "start_long": 9.1775,
        "dest_lat": 51.4508,
        "dest_long": 7.0131,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 424825,
                "dauer": 15382,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 63,
                "legs": [
                    {
                        "lengthInMeters": 424825,
                        "travelTimeInSeconds": 15382,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 433872,
                "dauer": 22106,
                "verbrauch": 131.98368145454546,
                "restreichweite": 16.680575569454554,
                "ladezeit": 7066,
                "routen_id": 276,
                "legs": [
                    {
                        "lengthInMeters": 184318,
                        "travelTimeInSeconds": 6740,
                        "batteryConsumptionInkWh": 54.81052945454546,
                        "remainingChargeAtArrivalInkWh": 11.509470545454548,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 52.227000000000004,
                        "chargingTimeInSeconds": 3522,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222654,
                        "chargingParkName": "innogy B\u00fcttelborn Mainzer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 130457,
                        "travelTimeInSeconds": 4056,
                        "batteryConsumptionInkWh": 43.46536727272727,
                        "remainingChargeAtArrivalInkWh": 8.761632727272733,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.388360296727285,
                        "chargingTimeInSeconds": 3544,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024218210,
                        "chargingParkName": "EnBW Neustadt (Wied) Rasthausstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 119097,
                        "travelTimeInSeconds": 4244,
                        "batteryConsumptionInkWh": 33.70778472727273,
                        "remainingChargeAtArrivalInkWh": 16.680575569454554,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 442649,
                "dauer": 22696,
                "verbrauch": 94.92912545454546,
                "restreichweite": 9.059284699272727,
                "ladezeit": 6680,
                "routen_id": 277,
                "legs": [
                    {
                        "lengthInMeters": 133641,
                        "travelTimeInSeconds": 5418,
                        "batteryConsumptionInkWh": 27.200713909090915,
                        "remainingChargeAtArrivalInkWh": 8.799286090909085,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2067,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520733,
                        "chargingParkName": "Heddesheim Edekastra\u00dfe"
                    },
                    {
                        "lengthInMeters": 110615,
                        "travelTimeInSeconds": 3813,
                        "batteryConsumptionInkWh": 24.068876363636363,
                        "remainingChargeAtArrivalInkWh": 4.7311236363636375,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2241,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522179,
                        "chargingParkName": "Lidl Bad Camberg Beuerbacher Landstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93261,
                        "travelTimeInSeconds": 2882,
                        "batteryConsumptionInkWh": 23.01718554545455,
                        "remainingChargeAtArrivalInkWh": 4.8828144545454535,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.701634335636363,
                        "chargingTimeInSeconds": 2372,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520185,
                        "chargingParkName": "RheinEnergie K\u00f6nigswinter Dollendorfer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 105132,
                        "travelTimeInSeconds": 3902,
                        "batteryConsumptionInkWh": 20.642349636363637,
                        "remainingChargeAtArrivalInkWh": 9.059284699272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 436010,
                "dauer": 21905,
                "verbrauch": 84.46551127272727,
                "restreichweite": 7.612671575272724,
                "ladezeit": 6215,
                "routen_id": 278,
                "legs": [
                    {
                        "lengthInMeters": 140385,
                        "travelTimeInSeconds": 5581,
                        "batteryConsumptionInkWh": 25.687069090909088,
                        "remainingChargeAtArrivalInkWh": 4.552930909090911,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1945,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305712,
                        "chargingParkName": "Hemsbach Berliner Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97232,
                        "travelTimeInSeconds": 3310,
                        "batteryConsumptionInkWh": 19.598206545454545,
                        "remainingChargeAtArrivalInkWh": 3.8377934545454515,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2075,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522179,
                        "chargingParkName": "Lidl Bad Camberg Beuerbacher Landstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93261,
                        "travelTimeInSeconds": 2886,
                        "batteryConsumptionInkWh": 20.502097454545453,
                        "remainingChargeAtArrivalInkWh": 4.067902545454544,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.290809757090905,
                        "chargingTimeInSeconds": 2195,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520185,
                        "chargingParkName": "RheinEnergie K\u00f6nigswinter Dollendorfer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 105132,
                        "travelTimeInSeconds": 3913,
                        "batteryConsumptionInkWh": 18.67813818181818,
                        "remainingChargeAtArrivalInkWh": 7.612671575272724,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "D\u00fcsseldorf",
        "Ziel": "Berlin",
        "start_lat": 51.2311,
        "start_long": 6.7724,
        "dest_lat": 52.5167,
        "dest_long": 13.3833,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 573680,
                "dauer": 18661,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 64,
                "legs": [
                    {
                        "lengthInMeters": 573680,
                        "travelTimeInSeconds": 18661,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 576413,
                "dauer": 30105,
                "verbrauch": 183.2097374545455,
                "restreichweite": 16.671856196363642,
                "ladezeit": 11728,
                "routen_id": 279,
                "legs": [
                    {
                        "lengthInMeters": 164061,
                        "travelTimeInSeconds": 5211,
                        "batteryConsumptionInkWh": 51.66814036363637,
                        "remainingChargeAtArrivalInkWh": 14.651859636363639,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 36.476000000000006,
                        "chargingTimeInSeconds": 2113,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292861,
                        "chargingParkName": "E.ON G\u00fctersloh"
                    },
                    {
                        "lengthInMeters": 84236,
                        "travelTimeInSeconds": 2632,
                        "batteryConsumptionInkWh": 27.973211636363637,
                        "remainingChargeAtArrivalInkWh": 8.50278836363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 41.45,
                        "chargingTimeInSeconds": 2867,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219584,
                        "chargingParkName": "Auetal Rehrener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 104052,
                        "travelTimeInSeconds": 3151,
                        "batteryConsumptionInkWh": 32.32392290909091,
                        "remainingChargeAtArrivalInkWh": 9.126077090909092,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.569,
                        "chargingTimeInSeconds": 3537,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222760,
                        "chargingParkName": "Bienrode-Waggum-Bevenrode Lilienthalplatz"
                    },
                    {
                        "lengthInMeters": 126639,
                        "travelTimeInSeconds": 3487,
                        "batteryConsumptionInkWh": 41.896364363636366,
                        "remainingChargeAtArrivalInkWh": 8.672635636363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 46.01995437818182,
                        "chargingTimeInSeconds": 3211,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377112,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 97425,
                        "travelTimeInSeconds": 3897,
                        "batteryConsumptionInkWh": 29.34809818181818,
                        "remainingChargeAtArrivalInkWh": 16.671856196363642,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 569258,
                "dauer": 29559,
                "verbrauch": 134.37525881818183,
                "restreichweite": 9.060466567818182,
                "ladezeit": 10713,
                "routen_id": 280,
                "legs": [
                    {
                        "lengthInMeters": 105170,
                        "travelTimeInSeconds": 4267,
                        "batteryConsumptionInkWh": 20.30948881818182,
                        "remainingChargeAtArrivalInkWh": 15.69051118181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 1545,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378440,
                        "chargingParkName": "innogy Hamm Unnaer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 87707,
                        "travelTimeInSeconds": 2564,
                        "batteryConsumptionInkWh": 23.170805636363635,
                        "remainingChargeAtArrivalInkWh": 4.729194363636367,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2206,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227271,
                        "chargingParkName": "Herford Planckstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 95387,
                        "travelTimeInSeconds": 2898,
                        "batteryConsumptionInkWh": 22.817199363636366,
                        "remainingChargeAtArrivalInkWh": 4.632800636363633,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2247,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305386,
                        "chargingParkName": "enercity Bothfeld Zur Stadtg\u00e4rtnerei"
                    },
                    {
                        "lengthInMeters": 92213,
                        "travelTimeInSeconds": 2747,
                        "batteryConsumptionInkWh": 22.958994545454548,
                        "remainingChargeAtArrivalInkWh": 4.941005454545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2299,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304651,
                        "chargingParkName": "E.ON Helmstedt"
                    },
                    {
                        "lengthInMeters": 91356,
                        "travelTimeInSeconds": 2472,
                        "batteryConsumptionInkWh": 23.88548654545455,
                        "remainingChargeAtArrivalInkWh": 4.91451345454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.293750476909093,
                        "chargingTimeInSeconds": 2416,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377112,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 97425,
                        "travelTimeInSeconds": 3897,
                        "batteryConsumptionInkWh": 21.23328390909091,
                        "remainingChargeAtArrivalInkWh": 9.060466567818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 576729,
                "dauer": 29616,
                "verbrauch": 122.88560145454547,
                "restreichweite": 7.598091595636362,
                "ladezeit": 10725,
                "routen_id": 281,
                "legs": [
                    {
                        "lengthInMeters": 58712,
                        "travelTimeInSeconds": 2466,
                        "batteryConsumptionInkWh": 9.573057454545454,
                        "remainingChargeAtArrivalInkWh": 20.666942545454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 932,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306199,
                        "chargingParkName": "innogy Langendreer"
                    },
                    {
                        "lengthInMeters": 94624,
                        "travelTimeInSeconds": 3052,
                        "batteryConsumptionInkWh": 20.89308509090909,
                        "remainingChargeAtArrivalInkWh": 4.054914909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2004,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024217844,
                        "chargingParkName": "innogy Rheda-Wiedenbr\u00fcck Bielefelder Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 89016,
                        "travelTimeInSeconds": 2713,
                        "batteryConsumptionInkWh": 19.966682181818182,
                        "remainingChargeAtArrivalInkWh": 3.847317818181814,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2133,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219584,
                        "chargingParkName": "Auetal Rehrener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 98013,
                        "travelTimeInSeconds": 2911,
                        "batteryConsumptionInkWh": 21.233006545454543,
                        "remainingChargeAtArrivalInkWh": 4.092993454545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2031,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292785,
                        "chargingParkName": "Volkswagen Veltenhof-R\u00fchme Carl-Giesecke-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 88524,
                        "travelTimeInSeconds": 2523,
                        "batteryConsumptionInkWh": 20.265575272727272,
                        "remainingChargeAtArrivalInkWh": 3.9264247272727246,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1983,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 83500,
                        "travelTimeInSeconds": 2406,
                        "batteryConsumptionInkWh": 19.46839709090909,
                        "remainingChargeAtArrivalInkWh": 3.967602909090907,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.08388941381818,
                        "chargingTimeInSeconds": 1642,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517580,
                        "chargingParkName": "Kloster Lehnin Kurf\u00fcrstenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 64340,
                        "travelTimeInSeconds": 2821,
                        "batteryConsumptionInkWh": 11.485797818181819,
                        "remainingChargeAtArrivalInkWh": 7.598091595636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "D\u00fcsseldorf",
        "Ziel": "Hamburg",
        "start_lat": 51.2311,
        "start_long": 6.7724,
        "dest_lat": 53.55,
        "dest_long": 10.01,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 401669,
                "dauer": 13580,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 65,
                "legs": [
                    {
                        "lengthInMeters": 401669,
                        "travelTimeInSeconds": 13580,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 406492,
                "dauer": 19830,
                "verbrauch": 123.51540727272726,
                "restreichweite": 16.688870391272722,
                "ladezeit": 6430,
                "routen_id": 282,
                "legs": [
                    {
                        "lengthInMeters": 180288,
                        "travelTimeInSeconds": 6168,
                        "batteryConsumptionInkWh": 53.97582909090909,
                        "remainingChargeAtArrivalInkWh": 12.34417090909092,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.621,
                        "chargingTimeInSeconds": 2572,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024224474,
                        "chargingParkName": "Wallenhorst Osnabr\u00fccker Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 106864,
                        "travelTimeInSeconds": 3444,
                        "batteryConsumptionInkWh": 31.579810181818182,
                        "remainingChargeAtArrivalInkWh": 9.04118981818182,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 54.648638391272726,
                        "chargingTimeInSeconds": 3858,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304697,
                        "chargingParkName": "EnBW Stuhr Bremer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 119340,
                        "travelTimeInSeconds": 3788,
                        "batteryConsumptionInkWh": 37.959768000000004,
                        "remainingChargeAtArrivalInkWh": 16.688870391272722,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 409833,
                "dauer": 20244,
                "verbrauch": 91.9619030909091,
                "restreichweite": 9.05503955690909,
                "ladezeit": 6393,
                "routen_id": 283,
                "legs": [
                    {
                        "lengthInMeters": 143137,
                        "travelTimeInSeconds": 5129,
                        "batteryConsumptionInkWh": 30.31388054545455,
                        "remainingChargeAtArrivalInkWh": 5.686119454545452,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.6,
                        "chargingTimeInSeconds": 2393,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293816,
                        "chargingParkName": "Volkswagen Greven Am Eggenkamp"
                    },
                    {
                        "lengthInMeters": 119306,
                        "travelTimeInSeconds": 4038,
                        "batteryConsumptionInkWh": 25.821971,
                        "remainingChargeAtArrivalInkWh": 4.778029,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.05,
                        "chargingTimeInSeconds": 1785,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291489,
                        "chargingParkName": "E.ON D\u00f6tlingen"
                    },
                    {
                        "lengthInMeters": 70658,
                        "travelTimeInSeconds": 2187,
                        "batteryConsumptionInkWh": 17.30627309090909,
                        "remainingChargeAtArrivalInkWh": 4.74372690909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.574818011454546,
                        "chargingTimeInSeconds": 2215,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377078,
                        "chargingParkName": "EWE Gyhum An der Autobahn"
                    },
                    {
                        "lengthInMeters": 76732,
                        "travelTimeInSeconds": 2498,
                        "batteryConsumptionInkWh": 18.519778454545456,
                        "remainingChargeAtArrivalInkWh": 9.05503955690909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 412190,
                "dauer": 20293,
                "verbrauch": 81.91980363636364,
                "restreichweite": 7.608683345454544,
                "ladezeit": 6029,
                "routen_id": 284,
                "legs": [
                    {
                        "lengthInMeters": 130586,
                        "travelTimeInSeconds": 4723,
                        "batteryConsumptionInkWh": 25.12163781818182,
                        "remainingChargeAtArrivalInkWh": 5.118362181818178,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 1940,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222157,
                        "chargingParkName": "innogy M\u00fcnster Steinfurter Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 110499,
                        "travelTimeInSeconds": 4098,
                        "batteryConsumptionInkWh": 19.855486545454546,
                        "remainingChargeAtArrivalInkWh": 3.95851345454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2039,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517568,
                        "chargingParkName": "Vechta Lange Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 94375,
                        "travelTimeInSeconds": 2946,
                        "batteryConsumptionInkWh": 20.161006545454544,
                        "remainingChargeAtArrivalInkWh": 4.030993454545452,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.390356072727272,
                        "chargingTimeInSeconds": 2050,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377078,
                        "chargingParkName": "EWE Gyhum An der Autobahn"
                    },
                    {
                        "lengthInMeters": 76730,
                        "travelTimeInSeconds": 2498,
                        "batteryConsumptionInkWh": 16.781672727272728,
                        "remainingChargeAtArrivalInkWh": 7.608683345454544,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "D\u00fcsseldorf",
        "Ziel": "Munich",
        "start_lat": 51.2311,
        "start_long": 6.7724,
        "dest_lat": 48.1372,
        "dest_long": 11.5755,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 615069,
                "dauer": 20418,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 66,
                "legs": [
                    {
                        "lengthInMeters": 615069,
                        "travelTimeInSeconds": 20418,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 624520,
                "dauer": 33378,
                "verbrauch": 198.77682618181817,
                "restreichweite": 16.661805978181818,
                "ladezeit": 12875,
                "routen_id": 285,
                "legs": [
                    {
                        "lengthInMeters": 174181,
                        "travelTimeInSeconds": 6124,
                        "batteryConsumptionInkWh": 54.800928000000006,
                        "remainingChargeAtArrivalInkWh": 11.519072000000001,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.056000000000004,
                        "chargingTimeInSeconds": 3585,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522179,
                        "chargingParkName": "Lidl Bad Camberg Beuerbacher Landstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 139453,
                        "travelTimeInSeconds": 4244,
                        "batteryConsumptionInkWh": 44.49376654545455,
                        "remainingChargeAtArrivalInkWh": 8.562233454545456,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.056000000000004,
                        "chargingTimeInSeconds": 3762,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520925,
                        "chargingParkName": "Wertheim Almosenberg"
                    },
                    {
                        "lengthInMeters": 140412,
                        "travelTimeInSeconds": 4595,
                        "batteryConsumptionInkWh": 43.943144,
                        "remainingChargeAtArrivalInkWh": 9.112856000000008,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.792,
                        "chargingTimeInSeconds": 2701,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93112,
                        "travelTimeInSeconds": 2649,
                        "batteryConsumptionInkWh": 31.215998545454546,
                        "remainingChargeAtArrivalInkWh": 8.576001454545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.98479506909091,
                        "chargingTimeInSeconds": 2827,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215657,
                        "chargingParkName": "Ingolstadt Manchinger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77362,
                        "travelTimeInSeconds": 2891,
                        "batteryConsumptionInkWh": 24.32298909090909,
                        "remainingChargeAtArrivalInkWh": 16.661805978181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 629120,
                "dauer": 32641,
                "verbrauch": 145.0534629090909,
                "restreichweite": 9.052987624,
                "ladezeit": 11413,
                "routen_id": 286,
                "legs": [
                    {
                        "lengthInMeters": 135550,
                        "travelTimeInSeconds": 4967,
                        "batteryConsumptionInkWh": 29.544639090909094,
                        "remainingChargeAtArrivalInkWh": 6.455360909090906,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2208,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 106759,
                        "travelTimeInSeconds": 3472,
                        "batteryConsumptionInkWh": 24.168869454545455,
                        "remainingChargeAtArrivalInkWh": 4.631130545454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2317,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023976952,
                        "chargingParkName": "MAINGAU Energie Obertshausen Badstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 89730,
                        "travelTimeInSeconds": 2626,
                        "batteryConsumptionInkWh": 24.023651272727275,
                        "remainingChargeAtArrivalInkWh": 4.776348727272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.150000000000002,
                        "chargingTimeInSeconds": 2412,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291091,
                        "chargingParkName": "Waldb\u00fcttelbrunn"
                    },
                    {
                        "lengthInMeters": 122948,
                        "travelTimeInSeconds": 4340,
                        "batteryConsumptionInkWh": 25.429155818181822,
                        "remainingChargeAtArrivalInkWh": 4.72084418181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.25,
                        "chargingTimeInSeconds": 2347,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305393,
                        "chargingParkName": "F\u00fcrth Leyher Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 96771,
                        "travelTimeInSeconds": 2932,
                        "batteryConsumptionInkWh": 24.393335272727274,
                        "remainingChargeAtArrivalInkWh": 4.856664727272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.546799624000002,
                        "chargingTimeInSeconds": 2129,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215657,
                        "chargingParkName": "Ingolstadt Manchinger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77362,
                        "travelTimeInSeconds": 2891,
                        "batteryConsumptionInkWh": 17.493812000000002,
                        "remainingChargeAtArrivalInkWh": 9.052987624,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 628140,
                "dauer": 32457,
                "verbrauch": 132.6004552727273,
                "restreichweite": 7.6098342836363635,
                "ladezeit": 11455,
                "routen_id": 287,
                "legs": [
                    {
                        "lengthInMeters": 107241,
                        "travelTimeInSeconds": 4164,
                        "batteryConsumptionInkWh": 20.426667636363636,
                        "remainingChargeAtArrivalInkWh": 9.813332363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.545999999999996,
                        "chargingTimeInSeconds": 1483,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77084,
                        "travelTimeInSeconds": 2277,
                        "batteryConsumptionInkWh": 17.565792,
                        "remainingChargeAtArrivalInkWh": 3.9802079999999975,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.167999999999996,
                        "chargingTimeInSeconds": 1803,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 85669,
                        "travelTimeInSeconds": 2785,
                        "batteryConsumptionInkWh": 17.029207272727273,
                        "remainingChargeAtArrivalInkWh": 4.1387927272727225,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2087,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220457,
                        "chargingParkName": "innogy Goldbach Aschaffstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 84064,
                        "travelTimeInSeconds": 2362,
                        "batteryConsumptionInkWh": 21.11927709090909,
                        "remainingChargeAtArrivalInkWh": 3.8287229090909065,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999996,
                        "chargingTimeInSeconds": 1929,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024813432,
                        "chargingParkName": "Dettelbach Mainfrankenpark"
                    },
                    {
                        "lengthInMeters": 102493,
                        "travelTimeInSeconds": 3626,
                        "batteryConsumptionInkWh": 18.67579927272727,
                        "remainingChargeAtArrivalInkWh": 4.004200727272725,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2065,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 86806,
                        "travelTimeInSeconds": 2610,
                        "batteryConsumptionInkWh": 20.42657018181818,
                        "remainingChargeAtArrivalInkWh": 4.143429818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.966976101818183,
                        "chargingTimeInSeconds": 2088,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517171,
                        "chargingParkName": "Lenting Am Pfannenstiel"
                    },
                    {
                        "lengthInMeters": 84783,
                        "travelTimeInSeconds": 3177,
                        "batteryConsumptionInkWh": 17.35714181818182,
                        "remainingChargeAtArrivalInkWh": 7.6098342836363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "D\u00fcsseldorf",
        "Ziel": "Cologne",
        "start_lat": 51.2311,
        "start_long": 6.7724,
        "dest_lat": 50.9422,
        "dest_long": 6.9578,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 42080,
                "dauer": 2175,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 67,
                "legs": [
                    {
                        "lengthInMeters": 42080,
                        "travelTimeInSeconds": 2175,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 42080,
                "dauer": 2178,
                "verbrauch": 11.054196363636363,
                "restreichweite": 55.26580363636364,
                "ladezeit": null,
                "routen_id": 288,
                "legs": [
                    {
                        "lengthInMeters": 42080,
                        "travelTimeInSeconds": 2178,
                        "batteryConsumptionInkWh": 11.054196363636363,
                        "remainingChargeAtArrivalInkWh": 55.26580363636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 42080,
                "dauer": 2178,
                "verbrauch": 6.864359727272729,
                "restreichweite": 29.135640272727272,
                "ladezeit": null,
                "routen_id": 289,
                "legs": [
                    {
                        "lengthInMeters": 42080,
                        "travelTimeInSeconds": 2178,
                        "batteryConsumptionInkWh": 6.864359727272729,
                        "remainingChargeAtArrivalInkWh": 29.135640272727272,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 42080,
                "dauer": 2178,
                "verbrauch": 6.298194909090909,
                "restreichweite": 23.94180509090909,
                "ladezeit": null,
                "routen_id": 290,
                "legs": [
                    {
                        "lengthInMeters": 42080,
                        "travelTimeInSeconds": 2178,
                        "batteryConsumptionInkWh": 6.298194909090909,
                        "remainingChargeAtArrivalInkWh": 23.94180509090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "D\u00fcsseldorf",
        "Ziel": "Frankfurt",
        "start_lat": 51.2311,
        "start_long": 6.7724,
        "dest_lat": 50.1136,
        "dest_long": 8.6797,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 230129,
                "dauer": 8188,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 68,
                "legs": [
                    {
                        "lengthInMeters": 230129,
                        "travelTimeInSeconds": 8188,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 235471,
                "dauer": 10856,
                "verbrauch": 72.97856872727273,
                "restreichweite": 16.660991106909094,
                "ladezeit": 2274,
                "routen_id": 291,
                "legs": [
                    {
                        "lengthInMeters": 158341,
                        "travelTimeInSeconds": 5693,
                        "batteryConsumptionInkWh": 49.06301527272728,
                        "remainingChargeAtArrivalInkWh": 17.25698472727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.57654456145455,
                        "chargingTimeInSeconds": 2274,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025356355,
                        "chargingParkName": "EnBW Offheim An der Meil"
                    },
                    {
                        "lengthInMeters": 77130,
                        "travelTimeInSeconds": 2889,
                        "batteryConsumptionInkWh": 23.915553454545453,
                        "remainingChargeAtArrivalInkWh": 16.660991106909094,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 231327,
                "dauer": 10731,
                "verbrauch": 51.83926045454547,
                "restreichweite": 9.062695251999997,
                "ladezeit": 2406,
                "routen_id": 292,
                "legs": [
                    {
                        "lengthInMeters": 135550,
                        "travelTimeInSeconds": 4967,
                        "batteryConsumptionInkWh": 29.543601818181823,
                        "remainingChargeAtArrivalInkWh": 6.456398181818177,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 31.358353888363638,
                        "chargingTimeInSeconds": 2406,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 95777,
                        "travelTimeInSeconds": 3357,
                        "batteryConsumptionInkWh": 22.29565863636364,
                        "remainingChargeAtArrivalInkWh": 9.062695251999997,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 234754,
                "dauer": 11585,
                "verbrauch": 46.84493818181818,
                "restreichweite": 7.598342248727272,
                "ladezeit": 2919,
                "routen_id": 293,
                "legs": [
                    {
                        "lengthInMeters": 107241,
                        "travelTimeInSeconds": 4164,
                        "batteryConsumptionInkWh": 20.425595636363635,
                        "remainingChargeAtArrivalInkWh": 9.814404363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.9,
                        "chargingTimeInSeconds": 1277,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 67949,
                        "travelTimeInSeconds": 2101,
                        "batteryConsumptionInkWh": 14.905867636363636,
                        "remainingChargeAtArrivalInkWh": 3.9941323636363624,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.11181715781818,
                        "chargingTimeInSeconds": 1642,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522179,
                        "chargingParkName": "Lidl Bad Camberg Beuerbacher Landstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 59564,
                        "travelTimeInSeconds": 2401,
                        "batteryConsumptionInkWh": 11.513474909090908,
                        "remainingChargeAtArrivalInkWh": 7.598342248727272,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "D\u00fcsseldorf",
        "Ziel": "Bremen",
        "start_lat": 51.2311,
        "start_long": 6.7724,
        "dest_lat": 53.1153,
        "dest_long": 8.7975,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 296259,
                "dauer": 10753,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 69,
                "legs": [
                    {
                        "lengthInMeters": 296259,
                        "travelTimeInSeconds": 10753,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 298273,
                "dauer": 13835,
                "verbrauch": 87.87814763636364,
                "restreichweite": 16.6809663069091,
                "ladezeit": 3344,
                "routen_id": 294,
                "legs": [
                    {
                        "lengthInMeters": 180288,
                        "travelTimeInSeconds": 6168,
                        "batteryConsumptionInkWh": 53.97499418181818,
                        "remainingChargeAtArrivalInkWh": 12.345005818181825,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.58411976145455,
                        "chargingTimeInSeconds": 3344,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024224474,
                        "chargingParkName": "Wallenhorst Osnabr\u00fccker Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 117985,
                        "travelTimeInSeconds": 4323,
                        "batteryConsumptionInkWh": 33.90315345454545,
                        "remainingChargeAtArrivalInkWh": 16.6809663069091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 303404,
                "dauer": 14831,
                "verbrauch": 63.82131636363637,
                "restreichweite": 9.033696010909093,
                "ladezeit": 3767,
                "routen_id": 295,
                "legs": [
                    {
                        "lengthInMeters": 143137,
                        "travelTimeInSeconds": 5129,
                        "batteryConsumptionInkWh": 30.31388054545455,
                        "remainingChargeAtArrivalInkWh": 5.686119454545452,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 31.05,
                        "chargingTimeInSeconds": 2428,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293816,
                        "chargingParkName": "Volkswagen Greven Am Eggenkamp"
                    },
                    {
                        "lengthInMeters": 119306,
                        "travelTimeInSeconds": 3962,
                        "batteryConsumptionInkWh": 26.231071363636364,
                        "remainingChargeAtArrivalInkWh": 4.818928636363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 16.310060465454548,
                        "chargingTimeInSeconds": 1339,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291489,
                        "chargingParkName": "E.ON D\u00f6tlingen"
                    },
                    {
                        "lengthInMeters": 40961,
                        "travelTimeInSeconds": 1973,
                        "batteryConsumptionInkWh": 7.276364454545455,
                        "remainingChargeAtArrivalInkWh": 9.033696010909093,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 307360,
                "dauer": 14943,
                "verbrauch": 58.50732363636364,
                "restreichweite": 7.60736829381818,
                "ladezeit": 3745,
                "routen_id": 296,
                "legs": [
                    {
                        "lengthInMeters": 130586,
                        "travelTimeInSeconds": 4723,
                        "batteryConsumptionInkWh": 25.12163781818182,
                        "remainingChargeAtArrivalInkWh": 5.118362181818178,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1911,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222157,
                        "chargingParkName": "innogy M\u00fcnster Steinfurter Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 102849,
                        "travelTimeInSeconds": 3579,
                        "batteryConsumptionInkWh": 19.361002181818183,
                        "remainingChargeAtArrivalInkWh": 4.074997818181814,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.632051930181817,
                        "chargingTimeInSeconds": 1834,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023666460,
                        "chargingParkName": "EWE Bakum Bahnhofstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 73925,
                        "travelTimeInSeconds": 2896,
                        "batteryConsumptionInkWh": 14.024683636363637,
                        "remainingChargeAtArrivalInkWh": 7.60736829381818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "D\u00fcsseldorf",
        "Ziel": "Stuttgart",
        "start_lat": 51.2311,
        "start_long": 6.7724,
        "dest_lat": 48.7761,
        "dest_long": 9.1775,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 406821,
                "dauer": 14659,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 70,
                "legs": [
                    {
                        "lengthInMeters": 406821,
                        "travelTimeInSeconds": 14659,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 419781,
                "dauer": 21343,
                "verbrauch": 130.78329090909094,
                "restreichweite": 16.674959553454546,
                "ladezeit": 6976,
                "routen_id": 297,
                "legs": [
                    {
                        "lengthInMeters": 174181,
                        "travelTimeInSeconds": 6124,
                        "batteryConsumptionInkWh": 54.800928000000006,
                        "remainingChargeAtArrivalInkWh": 11.519072000000001,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.885000000000005,
                        "chargingTimeInSeconds": 3650,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522179,
                        "chargingParkName": "Lidl Bad Camberg Beuerbacher Landstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 148438,
                        "travelTimeInSeconds": 4664,
                        "batteryConsumptionInkWh": 44.97801381818182,
                        "remainingChargeAtArrivalInkWh": 8.906986181818183,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 47.67930864436364,
                        "chargingTimeInSeconds": 3326,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023664718,
                        "chargingParkName": "Karlsdorf-Neuthard Lu\u00dfhardtstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97162,
                        "travelTimeInSeconds": 3579,
                        "batteryConsumptionInkWh": 31.00434909090909,
                        "remainingChargeAtArrivalInkWh": 16.674959553454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 425915,
                "dauer": 21098,
                "verbrauch": 93.080498,
                "restreichweite": 9.058094532545454,
                "ladezeit": 6532,
                "routen_id": 298,
                "legs": [
                    {
                        "lengthInMeters": 131177,
                        "travelTimeInSeconds": 4557,
                        "batteryConsumptionInkWh": 27.400492636363637,
                        "remainingChargeAtArrivalInkWh": 8.599507363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.35,
                        "chargingTimeInSeconds": 2044,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294752,
                        "chargingParkName": "Westfalen Plaidt Ludwig-Erhard-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 104841,
                        "travelTimeInSeconds": 3406,
                        "batteryConsumptionInkWh": 23.483024727272728,
                        "remainingChargeAtArrivalInkWh": 4.866975272727274,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.75,
                        "chargingTimeInSeconds": 1989,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226745,
                        "chargingParkName": "Alzey Galgenwiesenweg"
                    },
                    {
                        "lengthInMeters": 92735,
                        "travelTimeInSeconds": 3021,
                        "batteryConsumptionInkWh": 20.07101981818182,
                        "remainingChargeAtArrivalInkWh": 4.678980181818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 31.184055350727277,
                        "chargingTimeInSeconds": 2499,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023664718,
                        "chargingParkName": "Karlsdorf-Neuthard Lu\u00dfhardtstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97162,
                        "travelTimeInSeconds": 3582,
                        "batteryConsumptionInkWh": 22.125960818181824,
                        "remainingChargeAtArrivalInkWh": 9.058094532545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 442526,
                "dauer": 21926,
                "verbrauch": 86.08569309090909,
                "restreichweite": 7.616387517090907,
                "ladezeit": 6504,
                "routen_id": 299,
                "legs": [
                    {
                        "lengthInMeters": 131177,
                        "travelTimeInSeconds": 4557,
                        "batteryConsumptionInkWh": 24.86815854545454,
                        "remainingChargeAtArrivalInkWh": 5.371841454545457,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2013,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294752,
                        "chargingParkName": "Westfalen Plaidt Ludwig-Erhard-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 108013,
                        "travelTimeInSeconds": 3663,
                        "batteryConsumptionInkWh": 20.981184000000002,
                        "remainingChargeAtArrivalInkWh": 3.9668159999999943,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2038,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024225045,
                        "chargingParkName": "innogy Wallertheim Schimsheimer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 106174,
                        "travelTimeInSeconds": 3626,
                        "batteryConsumptionInkWh": 20.383787636363635,
                        "remainingChargeAtArrivalInkWh": 3.808212363636361,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.468950426181816,
                        "chargingTimeInSeconds": 2453,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023664718,
                        "chargingParkName": "Karlsdorf-Neuthard Lu\u00dfhardtstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97162,
                        "travelTimeInSeconds": 3575,
                        "batteryConsumptionInkWh": 19.85256290909091,
                        "remainingChargeAtArrivalInkWh": 7.616387517090907,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "D\u00fcsseldorf",
        "Ziel": "Dortmund",
        "start_lat": 51.2311,
        "start_long": 6.7724,
        "dest_lat": 51.5139,
        "dest_long": 7.4653,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 70207,
                "dauer": 3351,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 71,
                "legs": [
                    {
                        "lengthInMeters": 70207,
                        "travelTimeInSeconds": 3351,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 70207,
                "dauer": 3360,
                "verbrauch": 19.31416072727273,
                "restreichweite": 47.00583927272728,
                "ladezeit": null,
                "routen_id": 300,
                "legs": [
                    {
                        "lengthInMeters": 70207,
                        "travelTimeInSeconds": 3360,
                        "batteryConsumptionInkWh": 19.31416072727273,
                        "remainingChargeAtArrivalInkWh": 47.00583927272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 70207,
                "dauer": 3360,
                "verbrauch": 12.224674000000002,
                "restreichweite": 23.775326,
                "ladezeit": null,
                "routen_id": 301,
                "legs": [
                    {
                        "lengthInMeters": 70207,
                        "travelTimeInSeconds": 3360,
                        "batteryConsumptionInkWh": 12.224674000000002,
                        "remainingChargeAtArrivalInkWh": 23.775326,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 70207,
                "dauer": 3360,
                "verbrauch": 11.110305454545456,
                "restreichweite": 19.12969454545454,
                "ladezeit": null,
                "routen_id": 302,
                "legs": [
                    {
                        "lengthInMeters": 70207,
                        "travelTimeInSeconds": 3360,
                        "batteryConsumptionInkWh": 11.110305454545456,
                        "remainingChargeAtArrivalInkWh": 19.12969454545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "D\u00fcsseldorf",
        "Ziel": "Essen",
        "start_lat": 51.2311,
        "start_long": 6.7724,
        "dest_lat": 51.4508,
        "dest_long": 7.0131,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 34125,
                "dauer": 1750,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 72,
                "legs": [
                    {
                        "lengthInMeters": 34125,
                        "travelTimeInSeconds": 1750,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 34125,
                "dauer": 1762,
                "verbrauch": 9.782212363636365,
                "restreichweite": 56.537787636363646,
                "ladezeit": null,
                "routen_id": 303,
                "legs": [
                    {
                        "lengthInMeters": 34125,
                        "travelTimeInSeconds": 1762,
                        "batteryConsumptionInkWh": 9.782212363636365,
                        "remainingChargeAtArrivalInkWh": 56.537787636363646,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 34125,
                "dauer": 1762,
                "verbrauch": 6.225814636363637,
                "restreichweite": 29.774185363636363,
                "ladezeit": null,
                "routen_id": 304,
                "legs": [
                    {
                        "lengthInMeters": 34125,
                        "travelTimeInSeconds": 1762,
                        "batteryConsumptionInkWh": 6.225814636363637,
                        "remainingChargeAtArrivalInkWh": 29.774185363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 34125,
                "dauer": 1762,
                "verbrauch": 5.6618167272727264,
                "restreichweite": 24.578183272727273,
                "ladezeit": null,
                "routen_id": 305,
                "legs": [
                    {
                        "lengthInMeters": 34125,
                        "travelTimeInSeconds": 1762,
                        "batteryConsumptionInkWh": 5.6618167272727264,
                        "remainingChargeAtArrivalInkWh": 24.578183272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Dortmund",
        "Ziel": "Berlin",
        "start_lat": 51.5139,
        "start_long": 7.4653,
        "dest_lat": 52.5167,
        "dest_long": 13.3833,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 493854,
                "dauer": 16313,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 73,
                "legs": [
                    {
                        "lengthInMeters": 493854,
                        "travelTimeInSeconds": 16313,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 496211,
                "dauer": 25538,
                "verbrauch": 157.65922327272727,
                "restreichweite": 16.672552928000005,
                "ladezeit": 9376,
                "routen_id": 306,
                "legs": [
                    {
                        "lengthInMeters": 168095,
                        "travelTimeInSeconds": 5531,
                        "batteryConsumptionInkWh": 54.79362254545455,
                        "remainingChargeAtArrivalInkWh": 11.526377454545461,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.621,
                        "chargingTimeInSeconds": 2622,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219584,
                        "chargingParkName": "Auetal Rehrener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 104052,
                        "travelTimeInSeconds": 3220,
                        "batteryConsumptionInkWh": 31.822142545454547,
                        "remainingChargeAtArrivalInkWh": 8.798857454545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 50.569,
                        "chargingTimeInSeconds": 3556,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024222760,
                        "chargingParkName": "Bienrode-Waggum-Bevenrode Lilienthalplatz"
                    },
                    {
                        "lengthInMeters": 126639,
                        "travelTimeInSeconds": 3502,
                        "batteryConsumptionInkWh": 41.765283636363634,
                        "remainingChargeAtArrivalInkWh": 8.803716363636369,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 45.95072747345455,
                        "chargingTimeInSeconds": 3198,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377112,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 97425,
                        "travelTimeInSeconds": 3909,
                        "batteryConsumptionInkWh": 29.278174545454544,
                        "remainingChargeAtArrivalInkWh": 16.672552928000005,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 498514,
                "dauer": 25345,
                "verbrauch": 119.89752472727274,
                "restreichweite": 9.060263884727274,
                "ladezeit": 9013,
                "routen_id": 307,
                "legs": [
                    {
                        "lengthInMeters": 122133,
                        "travelTimeInSeconds": 4220,
                        "batteryConsumptionInkWh": 29.816612000000003,
                        "remainingChargeAtArrivalInkWh": 6.183387999999997,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.45,
                        "chargingTimeInSeconds": 2119,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227271,
                        "chargingParkName": "Herford Planckstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 95387,
                        "travelTimeInSeconds": 2916,
                        "batteryConsumptionInkWh": 22.706003727272726,
                        "remainingChargeAtArrivalInkWh": 4.743996272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.0,
                        "chargingTimeInSeconds": 2170,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305386,
                        "chargingParkName": "enercity Bothfeld Zur Stadtg\u00e4rtnerei"
                    },
                    {
                        "lengthInMeters": 92213,
                        "travelTimeInSeconds": 2808,
                        "batteryConsumptionInkWh": 22.370549727272728,
                        "remainingChargeAtArrivalInkWh": 4.629450272727272,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2317,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304651,
                        "chargingParkName": "E.ON Helmstedt"
                    },
                    {
                        "lengthInMeters": 91356,
                        "travelTimeInSeconds": 2474,
                        "batteryConsumptionInkWh": 23.872416909090912,
                        "remainingChargeAtArrivalInkWh": 4.9275830909090885,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.19220624836364,
                        "chargingTimeInSeconds": 2407,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377112,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 97425,
                        "travelTimeInSeconds": 3915,
                        "batteryConsumptionInkWh": 21.131942363636366,
                        "remainingChargeAtArrivalInkWh": 9.060263884727274,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 500122,
                "dauer": 25569,
                "verbrauch": 108.56670254545455,
                "restreichweite": 7.59890358690909,
                "ladezeit": 9050,
                "routen_id": 308,
                "legs": [
                    {
                        "lengthInMeters": 110316,
                        "travelTimeInSeconds": 3853,
                        "batteryConsumptionInkWh": 24.437604363636364,
                        "remainingChargeAtArrivalInkWh": 5.802395636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1870,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294282,
                        "chargingParkName": "E.ON Heepen"
                    },
                    {
                        "lengthInMeters": 87989,
                        "travelTimeInSeconds": 2827,
                        "batteryConsumptionInkWh": 19.41050909090909,
                        "remainingChargeAtArrivalInkWh": 4.025490909090905,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.766,
                        "chargingTimeInSeconds": 1537,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292405,
                        "chargingParkName": "E.ON Garbsen"
                    },
                    {
                        "lengthInMeters": 65453,
                        "travelTimeInSeconds": 2040,
                        "batteryConsumptionInkWh": 13.771009454545455,
                        "remainingChargeAtArrivalInkWh": 3.9949905454545434,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999993,
                        "chargingTimeInSeconds": 2036,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292785,
                        "chargingParkName": "Volkswagen Veltenhof-R\u00fchme Carl-Giesecke-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 88524,
                        "travelTimeInSeconds": 2546,
                        "batteryConsumptionInkWh": 20.08733090909091,
                        "remainingChargeAtArrivalInkWh": 4.104669090909084,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1972,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 83500,
                        "travelTimeInSeconds": 2417,
                        "batteryConsumptionInkWh": 19.456702545454547,
                        "remainingChargeAtArrivalInkWh": 3.979297454545449,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.00244976872727,
                        "chargingTimeInSeconds": 1635,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517580,
                        "chargingParkName": "Kloster Lehnin Kurf\u00fcrstenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 64340,
                        "travelTimeInSeconds": 2836,
                        "batteryConsumptionInkWh": 11.40354618181818,
                        "remainingChargeAtArrivalInkWh": 7.59890358690909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Dortmund",
        "Ziel": "Hamburg",
        "start_lat": 51.5139,
        "start_long": 7.4653,
        "dest_lat": 53.55,
        "dest_long": 10.01,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 351249,
                "dauer": 11468,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 74,
                "legs": [
                    {
                        "lengthInMeters": 351249,
                        "travelTimeInSeconds": 11468,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 355135,
                "dauer": 16964,
                "verbrauch": 112.45808,
                "restreichweite": 16.64784755054545,
                "ladezeit": 5548,
                "routen_id": 309,
                "legs": [
                    {
                        "lengthInMeters": 168095,
                        "travelTimeInSeconds": 5531,
                        "batteryConsumptionInkWh": 54.79362254545455,
                        "remainingChargeAtArrivalInkWh": 11.526377454545461,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 3264,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219584,
                        "chargingParkName": "Auetal Rehrener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 129556,
                        "travelTimeInSeconds": 3879,
                        "batteryConsumptionInkWh": 40.32068218181818,
                        "remainingChargeAtArrivalInkWh": 8.590317818181823,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 33.99162282327272,
                        "chargingTimeInSeconds": 2284,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305086,
                        "chargingParkName": "Bispingen Horstfeldweg"
                    },
                    {
                        "lengthInMeters": 57484,
                        "travelTimeInSeconds": 2005,
                        "batteryConsumptionInkWh": 17.34377527272727,
                        "remainingChargeAtArrivalInkWh": 16.64784755054545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 351892,
                "dauer": 17357,
                "verbrauch": 79.57147290909093,
                "restreichweite": 9.039276953090907,
                "ladezeit": 5495,
                "routen_id": 310,
                "legs": [
                    {
                        "lengthInMeters": 122746,
                        "travelTimeInSeconds": 4530,
                        "batteryConsumptionInkWh": 26.556360090909095,
                        "remainingChargeAtArrivalInkWh": 9.443639909090905,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.7,
                        "chargingTimeInSeconds": 2098,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024224474,
                        "chargingParkName": "Wallenhorst Osnabr\u00fccker Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 112275,
                        "travelTimeInSeconds": 3535,
                        "batteryConsumptionInkWh": 24.885106272727278,
                        "remainingChargeAtArrivalInkWh": 4.814893727272722,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.05,
                        "chargingTimeInSeconds": 1783,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306991,
                        "chargingParkName": "Hemelingen Europaallee"
                    },
                    {
                        "lengthInMeters": 67150,
                        "travelTimeInSeconds": 1965,
                        "batteryConsumptionInkWh": 17.49153,
                        "remainingChargeAtArrivalInkWh": 4.55847,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.677753498545453,
                        "chargingTimeInSeconds": 1614,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023668424,
                        "chargingParkName": "EWE Heidenau Hauptstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 49721,
                        "travelTimeInSeconds": 1832,
                        "batteryConsumptionInkWh": 10.638476545454546,
                        "remainingChargeAtArrivalInkWh": 9.039276953090907,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 347188,
                "dauer": 17098,
                "verbrauch": 71.75812072727271,
                "restreichweite": 7.608660930909089,
                "ladezeit": 5260,
                "routen_id": 311,
                "legs": [
                    {
                        "lengthInMeters": 122746,
                        "travelTimeInSeconds": 4530,
                        "batteryConsumptionInkWh": 24.146312727272726,
                        "remainingChargeAtArrivalInkWh": 6.093687272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.278,
                        "chargingTimeInSeconds": 1530,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024224474,
                        "chargingParkName": "Wallenhorst Osnabr\u00fccker Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77054,
                        "travelTimeInSeconds": 2586,
                        "batteryConsumptionInkWh": 15.26722909090909,
                        "remainingChargeAtArrivalInkWh": 4.010770909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.656,
                        "chargingTimeInSeconds": 1684,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291489,
                        "chargingParkName": "E.ON D\u00f6tlingen"
                    },
                    {
                        "lengthInMeters": 70658,
                        "travelTimeInSeconds": 2208,
                        "batteryConsumptionInkWh": 15.574113454545454,
                        "remainingChargeAtArrivalInkWh": 4.0818865454545445,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.37912638545454,
                        "chargingTimeInSeconds": 2046,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377078,
                        "chargingParkName": "EWE Gyhum An der Autobahn"
                    },
                    {
                        "lengthInMeters": 76730,
                        "travelTimeInSeconds": 2514,
                        "batteryConsumptionInkWh": 16.77046545454545,
                        "remainingChargeAtArrivalInkWh": 7.608660930909089,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Dortmund",
        "Ziel": "Munich",
        "start_lat": 51.5139,
        "start_long": 7.4653,
        "dest_lat": 48.1372,
        "dest_long": 11.5755,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 607031,
                "dauer": 20484,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 75,
                "legs": [
                    {
                        "lengthInMeters": 607031,
                        "travelTimeInSeconds": 20484,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 623051,
                "dauer": 34432,
                "verbrauch": 196.77721890909092,
                "restreichweite": 16.661805978181818,
                "ladezeit": 12683,
                "routen_id": 312,
                "legs": [
                    {
                        "lengthInMeters": 188668,
                        "travelTimeInSeconds": 7926,
                        "batteryConsumptionInkWh": 56.68072581818181,
                        "remainingChargeAtArrivalInkWh": 9.639274181818195,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.911,
                        "chargingTimeInSeconds": 3377,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219307,
                        "chargingParkName": "M\u00fcnzenberg Burgweg"
                    },
                    {
                        "lengthInMeters": 123497,
                        "travelTimeInSeconds": 3694,
                        "batteryConsumptionInkWh": 40.600168000000004,
                        "remainingChargeAtArrivalInkWh": 8.310831999999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.056000000000004,
                        "chargingTimeInSeconds": 3777,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025520925,
                        "chargingParkName": "Wertheim Almosenberg"
                    },
                    {
                        "lengthInMeters": 140412,
                        "travelTimeInSeconds": 4586,
                        "batteryConsumptionInkWh": 43.97153090909091,
                        "remainingChargeAtArrivalInkWh": 9.084469090909096,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 39.792,
                        "chargingTimeInSeconds": 2703,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93112,
                        "travelTimeInSeconds": 2652,
                        "batteryConsumptionInkWh": 31.20180509090909,
                        "remainingChargeAtArrivalInkWh": 8.590194909090911,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.98479506909091,
                        "chargingTimeInSeconds": 2826,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215657,
                        "chargingParkName": "Ingolstadt Manchinger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77362,
                        "travelTimeInSeconds": 2891,
                        "batteryConsumptionInkWh": 24.32298909090909,
                        "remainingChargeAtArrivalInkWh": 16.661805978181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 629584,
                "dauer": 33674,
                "verbrauch": 145.59139254545454,
                "restreichweite": 9.052987624,
                "ladezeit": 11476,
                "routen_id": 313,
                "legs": [
                    {
                        "lengthInMeters": 143061,
                        "travelTimeInSeconds": 6553,
                        "batteryConsumptionInkWh": 28.28476763636364,
                        "remainingChargeAtArrivalInkWh": 7.7152323636363604,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.7,
                        "chargingTimeInSeconds": 2202,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026287283,
                        "chargingParkName": "ChargeIT Mobility Herborn Littau"
                    },
                    {
                        "lengthInMeters": 103631,
                        "travelTimeInSeconds": 3306,
                        "batteryConsumptionInkWh": 24.851083727272727,
                        "remainingChargeAtArrivalInkWh": 4.848916272727273,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.150000000000002,
                        "chargingTimeInSeconds": 2408,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295536,
                        "chargingParkName": "Alzenau Brentanostra\u00dfe"
                    },
                    {
                        "lengthInMeters": 92080,
                        "travelTimeInSeconds": 2667,
                        "batteryConsumptionInkWh": 25.404987363636366,
                        "remainingChargeAtArrivalInkWh": 4.7450126363636365,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.150000000000002,
                        "chargingTimeInSeconds": 2414,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025356140,
                        "chargingParkName": "ChargeIT Mobility Kist Sonnleite"
                    },
                    {
                        "lengthInMeters": 120338,
                        "travelTimeInSeconds": 4129,
                        "batteryConsumptionInkWh": 25.297214727272728,
                        "remainingChargeAtArrivalInkWh": 4.8527852727272744,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2304,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93112,
                        "travelTimeInSeconds": 2652,
                        "batteryConsumptionInkWh": 24.259527090909092,
                        "remainingChargeAtArrivalInkWh": 4.540472909090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.546799624000002,
                        "chargingTimeInSeconds": 2148,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215657,
                        "chargingParkName": "Ingolstadt Manchinger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77362,
                        "travelTimeInSeconds": 2891,
                        "batteryConsumptionInkWh": 17.493812000000002,
                        "remainingChargeAtArrivalInkWh": 9.052987624,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 619611,
                "dauer": 33232,
                "verbrauch": 129.03391127272727,
                "restreichweite": 7.6098342836363635,
                "ladezeit": 10902,
                "routen_id": 314,
                "legs": [
                    {
                        "lengthInMeters": 143061,
                        "travelTimeInSeconds": 6553,
                        "batteryConsumptionInkWh": 25.335453090909088,
                        "remainingChargeAtArrivalInkWh": 4.904546909090911,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.349999999999994,
                        "chargingTimeInSeconds": 2586,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026287283,
                        "chargingParkName": "ChargeIT Mobility Herborn Littau"
                    },
                    {
                        "lengthInMeters": 111487,
                        "travelTimeInSeconds": 3476,
                        "batteryConsumptionInkWh": 24.249614545454545,
                        "remainingChargeAtArrivalInkWh": 4.1003854545454494,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2059,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219196,
                        "chargingParkName": "S\u00fcwag Kleinostheim Kardinal-Faulhaber-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 83862,
                        "travelTimeInSeconds": 2598,
                        "batteryConsumptionInkWh": 20.683557818181818,
                        "remainingChargeAtArrivalInkWh": 3.886442181818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2102,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293458,
                        "chargingParkName": "E.ON W\u00fcrzburg"
                    },
                    {
                        "lengthInMeters": 109612,
                        "travelTimeInSeconds": 3914,
                        "batteryConsumptionInkWh": 20.99248872727273,
                        "remainingChargeAtArrivalInkWh": 3.955511272727268,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2068,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 86806,
                        "travelTimeInSeconds": 2612,
                        "batteryConsumptionInkWh": 20.41565527272727,
                        "remainingChargeAtArrivalInkWh": 4.154344727272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.966976101818183,
                        "chargingTimeInSeconds": 2087,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517171,
                        "chargingParkName": "Lenting Am Pfannenstiel"
                    },
                    {
                        "lengthInMeters": 84783,
                        "travelTimeInSeconds": 3177,
                        "batteryConsumptionInkWh": 17.35714181818182,
                        "remainingChargeAtArrivalInkWh": 7.6098342836363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Dortmund",
        "Ziel": "Cologne",
        "start_lat": 51.5139,
        "start_long": 7.4653,
        "dest_lat": 50.9422,
        "dest_long": 6.9578,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 95414,
                "dauer": 4099,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 76,
                "legs": [
                    {
                        "lengthInMeters": 95414,
                        "travelTimeInSeconds": 4099,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 95414,
                "dauer": 4031,
                "verbrauch": 27.487712,
                "restreichweite": 38.832288000000005,
                "ladezeit": null,
                "routen_id": 315,
                "legs": [
                    {
                        "lengthInMeters": 95414,
                        "travelTimeInSeconds": 4031,
                        "batteryConsumptionInkWh": 27.487712,
                        "remainingChargeAtArrivalInkWh": 38.832288000000005,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 95414,
                "dauer": 4031,
                "verbrauch": 18.363046545454548,
                "restreichweite": 17.636953454545452,
                "ladezeit": null,
                "routen_id": 316,
                "legs": [
                    {
                        "lengthInMeters": 95414,
                        "travelTimeInSeconds": 4031,
                        "batteryConsumptionInkWh": 18.363046545454548,
                        "remainingChargeAtArrivalInkWh": 17.636953454545452,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 95414,
                "dauer": 4031,
                "verbrauch": 16.446331636363634,
                "restreichweite": 13.793668363636364,
                "ladezeit": null,
                "routen_id": 317,
                "legs": [
                    {
                        "lengthInMeters": 95414,
                        "travelTimeInSeconds": 4031,
                        "batteryConsumptionInkWh": 16.446331636363634,
                        "remainingChargeAtArrivalInkWh": 13.793668363636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Dortmund",
        "Ziel": "Frankfurt",
        "start_lat": 51.5139,
        "start_long": 7.4653,
        "dest_lat": 50.1136,
        "dest_long": 8.6797,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 223674,
                "dauer": 8681,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 77,
                "legs": [
                    {
                        "lengthInMeters": 223674,
                        "travelTimeInSeconds": 8681,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 239089,
                "dauer": 12110,
                "verbrauch": 71.58051345454547,
                "restreichweite": 16.65992075345455,
                "ladezeit": 2181,
                "routen_id": 318,
                "legs": [
                    {
                        "lengthInMeters": 162707,
                        "travelTimeInSeconds": 7060,
                        "batteryConsumptionInkWh": 48.200136727272735,
                        "remainingChargeAtArrivalInkWh": 18.119863272727272,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.040297480727276,
                        "chargingTimeInSeconds": 2181,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026288000,
                        "chargingParkName": "Total Hermannstein Dillfeld"
                    },
                    {
                        "lengthInMeters": 76382,
                        "travelTimeInSeconds": 2869,
                        "batteryConsumptionInkWh": 23.380376727272726,
                        "remainingChargeAtArrivalInkWh": 16.65992075345455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 235348,
                "dauer": 12202,
                "verbrauch": 48.15258572727274,
                "restreichweite": 9.060437939090907,
                "ladezeit": 2142,
                "routen_id": 319,
                "legs": [
                    {
                        "lengthInMeters": 143061,
                        "travelTimeInSeconds": 6553,
                        "batteryConsumptionInkWh": 28.28476763636364,
                        "remainingChargeAtArrivalInkWh": 7.7152323636363604,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.92825603,
                        "chargingTimeInSeconds": 2142,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026287283,
                        "chargingParkName": "ChargeIT Mobility Herborn Littau"
                    },
                    {
                        "lengthInMeters": 92287,
                        "travelTimeInSeconds": 3507,
                        "batteryConsumptionInkWh": 19.867818090909093,
                        "remainingChargeAtArrivalInkWh": 9.060437939090907,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 235348,
                "dauer": 12143,
                "verbrauch": 43.208226909090904,
                "restreichweite": 7.6118420421818165,
                "ladezeit": 2082,
                "routen_id": 320,
                "legs": [
                    {
                        "lengthInMeters": 143061,
                        "travelTimeInSeconds": 6553,
                        "batteryConsumptionInkWh": 25.335453090909088,
                        "remainingChargeAtArrivalInkWh": 4.904546909090911,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.484615860363633,
                        "chargingTimeInSeconds": 2082,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026287283,
                        "chargingParkName": "ChargeIT Mobility Herborn Littau"
                    },
                    {
                        "lengthInMeters": 92287,
                        "travelTimeInSeconds": 3508,
                        "batteryConsumptionInkWh": 17.872773818181816,
                        "remainingChargeAtArrivalInkWh": 7.6118420421818165,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Dortmund",
        "Ziel": "Bremen",
        "start_lat": 51.5139,
        "start_long": 7.4653,
        "dest_lat": 53.1153,
        "dest_long": 8.7975,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 238717,
                "dauer": 9040,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 78,
                "legs": [
                    {
                        "lengthInMeters": 238717,
                        "travelTimeInSeconds": 9040,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 240340,
                "dauer": 11175,
                "verbrauch": 70.47175418181818,
                "restreichweite": 16.676420644363642,
                "ladezeit": 2215,
                "routen_id": 321,
                "legs": [
                    {
                        "lengthInMeters": 128887,
                        "travelTimeInSeconds": 4700,
                        "batteryConsumptionInkWh": 38.632287272727275,
                        "remainingChargeAtArrivalInkWh": 27.687712727272732,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 48.51588755345455,
                        "chargingTimeInSeconds": 2215,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293927,
                        "chargingParkName": "Bramsche In der Welle"
                    },
                    {
                        "lengthInMeters": 111453,
                        "travelTimeInSeconds": 4260,
                        "batteryConsumptionInkWh": 31.839466909090905,
                        "remainingChargeAtArrivalInkWh": 16.676420644363642,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 243566,
                "dauer": 11414,
                "verbrauch": 51.02448272727273,
                "restreichweite": 9.059885695090912,
                "ladezeit": 2325,
                "routen_id": 322,
                "legs": [
                    {
                        "lengthInMeters": 142372,
                        "travelTimeInSeconds": 5182,
                        "batteryConsumptionInkWh": 30.54934145454546,
                        "remainingChargeAtArrivalInkWh": 5.450658545454541,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.535026967818187,
                        "chargingTimeInSeconds": 2325,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294605,
                        "chargingParkName": "E.ON Neuenkirchen-V\u00f6rden Hannoversche Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 101194,
                        "travelTimeInSeconds": 3906,
                        "batteryConsumptionInkWh": 20.475141272727274,
                        "remainingChargeAtArrivalInkWh": 9.059885695090912,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 240340,
                "dauer": 11502,
                "verbrauch": 46.123287272727275,
                "restreichweite": 7.619514053818179,
                "ladezeit": 2557,
                "routen_id": 323,
                "legs": [
                    {
                        "lengthInMeters": 128887,
                        "travelTimeInSeconds": 4700,
                        "batteryConsumptionInkWh": 25.586301090909092,
                        "remainingChargeAtArrivalInkWh": 4.653698909090906,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.15650023563636,
                        "chargingTimeInSeconds": 2557,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026293927,
                        "chargingParkName": "Bramsche In der Welle"
                    },
                    {
                        "lengthInMeters": 111453,
                        "travelTimeInSeconds": 4245,
                        "batteryConsumptionInkWh": 20.536986181818182,
                        "remainingChargeAtArrivalInkWh": 7.619514053818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Dortmund",
        "Ziel": "Stuttgart",
        "start_lat": 51.5139,
        "start_long": 7.4653,
        "dest_lat": 48.7761,
        "dest_long": 9.1775,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 418894,
                "dauer": 15605,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 79,
                "legs": [
                    {
                        "lengthInMeters": 418894,
                        "travelTimeInSeconds": 15605,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 442404,
                "dauer": 23640,
                "verbrauch": 135.91464218181818,
                "restreichweite": 16.682618174545453,
                "ladezeit": 7344,
                "routen_id": 324,
                "legs": [
                    {
                        "lengthInMeters": 188906,
                        "travelTimeInSeconds": 7933,
                        "batteryConsumptionInkWh": 56.43776727272727,
                        "remainingChargeAtArrivalInkWh": 9.882232727272736,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.885000000000005,
                        "chargingTimeInSeconds": 3748,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517763,
                        "chargingParkName": "Butzbach Marie-Curie-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 145140,
                        "travelTimeInSeconds": 4456,
                        "batteryConsumptionInkWh": 45.061504727272734,
                        "remainingChargeAtArrivalInkWh": 8.823495272727271,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 51.097988356363636,
                        "chargingTimeInSeconds": 3596,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023670176,
                        "chargingParkName": "Kronau Kirrlacher Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 108358,
                        "travelTimeInSeconds": 3906,
                        "batteryConsumptionInkWh": 34.41537018181818,
                        "remainingChargeAtArrivalInkWh": 16.682618174545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 444612,
                "dauer": 23176,
                "verbrauch": 97.63785945454546,
                "restreichweite": 9.090074895454546,
                "ladezeit": 6895,
                "routen_id": 325,
                "legs": [
                    {
                        "lengthInMeters": 133796,
                        "travelTimeInSeconds": 6077,
                        "batteryConsumptionInkWh": 26.674194272727274,
                        "remainingChargeAtArrivalInkWh": 9.325805727272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 1965,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025378204,
                        "chargingParkName": "EnBW Dillenburg Stadionstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 105030,
                        "travelTimeInSeconds": 3342,
                        "batteryConsumptionInkWh": 23.239888000000004,
                        "remainingChargeAtArrivalInkWh": 4.660111999999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.150000000000002,
                        "chargingTimeInSeconds": 2419,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220224,
                        "chargingParkName": "Mainova Flughafen Unterschweinstiege"
                    },
                    {
                        "lengthInMeters": 108624,
                        "travelTimeInSeconds": 3306,
                        "batteryConsumptionInkWh": 25.509648181818186,
                        "remainingChargeAtArrivalInkWh": 4.640351818181816,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 31.304203895454545,
                        "chargingTimeInSeconds": 2511,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023664718,
                        "chargingParkName": "Karlsdorf-Neuthard Lu\u00dfhardtstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97162,
                        "travelTimeInSeconds": 3556,
                        "batteryConsumptionInkWh": 22.214129,
                        "remainingChargeAtArrivalInkWh": 9.090074895454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 444681,
                "dauer": 23372,
                "verbrauch": 87.43436654545454,
                "restreichweite": 7.615036992,
                "ladezeit": 6614,
                "routen_id": 326,
                "legs": [
                    {
                        "lengthInMeters": 143061,
                        "travelTimeInSeconds": 6553,
                        "batteryConsumptionInkWh": 25.335453090909088,
                        "remainingChargeAtArrivalInkWh": 4.904546909090911,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2011,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026287283,
                        "chargingParkName": "ChargeIT Mobility Herborn Littau"
                    },
                    {
                        "lengthInMeters": 103663,
                        "travelTimeInSeconds": 3503,
                        "batteryConsumptionInkWh": 20.670596363636363,
                        "remainingChargeAtArrivalInkWh": 3.8994036363636333,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 25.325999999999997,
                        "chargingTimeInSeconds": 2130,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023648700,
                        "chargingParkName": "M\u00f6rfelden-Walldorf Langener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 100795,
                        "travelTimeInSeconds": 3153,
                        "batteryConsumptionInkWh": 21.46982109090909,
                        "remainingChargeAtArrivalInkWh": 3.8561789090909073,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.573532992,
                        "chargingTimeInSeconds": 2473,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023664718,
                        "chargingParkName": "Karlsdorf-Neuthard Lu\u00dfhardtstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97162,
                        "travelTimeInSeconds": 3550,
                        "batteryConsumptionInkWh": 19.958496,
                        "remainingChargeAtArrivalInkWh": 7.615036992,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Dortmund",
        "Ziel": "D\u00fcsseldorf",
        "start_lat": 51.5139,
        "start_long": 7.4653,
        "dest_lat": 51.2311,
        "dest_long": 6.7724,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 69701,
                "dauer": 3180,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 80,
                "legs": [
                    {
                        "lengthInMeters": 69701,
                        "travelTimeInSeconds": 3180,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 69701,
                "dauer": 3312,
                "verbrauch": 18.542496,
                "restreichweite": 47.77750400000001,
                "ladezeit": null,
                "routen_id": 327,
                "legs": [
                    {
                        "lengthInMeters": 69701,
                        "travelTimeInSeconds": 3312,
                        "batteryConsumptionInkWh": 18.542496,
                        "remainingChargeAtArrivalInkWh": 47.77750400000001,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 69701,
                "dauer": 3312,
                "verbrauch": 11.733214181818184,
                "restreichweite": 24.266785818181816,
                "ladezeit": null,
                "routen_id": 328,
                "legs": [
                    {
                        "lengthInMeters": 69701,
                        "travelTimeInSeconds": 3312,
                        "batteryConsumptionInkWh": 11.733214181818184,
                        "remainingChargeAtArrivalInkWh": 24.266785818181816,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 69701,
                "dauer": 3312,
                "verbrauch": 10.668251636363637,
                "restreichweite": 19.57174836363636,
                "ladezeit": null,
                "routen_id": 329,
                "legs": [
                    {
                        "lengthInMeters": 69701,
                        "travelTimeInSeconds": 3312,
                        "batteryConsumptionInkWh": 10.668251636363637,
                        "remainingChargeAtArrivalInkWh": 19.57174836363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Dortmund",
        "Ziel": "Essen",
        "start_lat": 51.5139,
        "start_long": 7.4653,
        "dest_lat": 51.4508,
        "dest_long": 7.0131,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 37197,
                "dauer": 1998,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 81,
                "legs": [
                    {
                        "lengthInMeters": 37197,
                        "travelTimeInSeconds": 1998,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 37197,
                "dauer": 2153,
                "verbrauch": 9.769271272727273,
                "restreichweite": 56.550728727272734,
                "ladezeit": null,
                "routen_id": 330,
                "legs": [
                    {
                        "lengthInMeters": 37197,
                        "travelTimeInSeconds": 2153,
                        "batteryConsumptionInkWh": 9.769271272727273,
                        "remainingChargeAtArrivalInkWh": 56.550728727272734,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 37197,
                "dauer": 2153,
                "verbrauch": 5.766302818181819,
                "restreichweite": 30.23369718181818,
                "ladezeit": null,
                "routen_id": 331,
                "legs": [
                    {
                        "lengthInMeters": 37197,
                        "travelTimeInSeconds": 2153,
                        "batteryConsumptionInkWh": 5.766302818181819,
                        "remainingChargeAtArrivalInkWh": 30.23369718181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 37197,
                "dauer": 2153,
                "verbrauch": 5.2463679999999995,
                "restreichweite": 24.993631999999998,
                "ladezeit": null,
                "routen_id": 332,
                "legs": [
                    {
                        "lengthInMeters": 37197,
                        "travelTimeInSeconds": 2153,
                        "batteryConsumptionInkWh": 5.2463679999999995,
                        "remainingChargeAtArrivalInkWh": 24.993631999999998,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Essen",
        "Ziel": "Berlin",
        "start_lat": 51.4508,
        "start_long": 7.0131,
        "dest_lat": 52.5167,
        "dest_long": 13.3833,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 532556,
                "dauer": 17406,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 82,
                "legs": [
                    {
                        "lengthInMeters": 532556,
                        "travelTimeInSeconds": 17406,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 532351,
                "dauer": 28235,
                "verbrauch": 168.51011927272725,
                "restreichweite": 16.671855778909094,
                "ladezeit": 10801,
                "routen_id": 333,
                "legs": [
                    {
                        "lengthInMeters": 148255,
                        "travelTimeInSeconds": 4892,
                        "batteryConsumptionInkWh": 46.590849454545456,
                        "remainingChargeAtArrivalInkWh": 19.72915054545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 56.37200000000001,
                        "chargingTimeInSeconds": 3349,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294282,
                        "chargingParkName": "E.ON Heepen"
                    },
                    {
                        "lengthInMeters": 128428,
                        "travelTimeInSeconds": 4109,
                        "batteryConsumptionInkWh": 40.83164654545455,
                        "remainingChargeAtArrivalInkWh": 15.54035345454546,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 30.673000000000002,
                        "chargingTimeInSeconds": 1610,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026294750,
                        "chargingParkName": "Volkswagen Lehrte Hermesstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 66887,
                        "travelTimeInSeconds": 2064,
                        "batteryConsumptionInkWh": 21.848318545454546,
                        "remainingChargeAtArrivalInkWh": 8.824681454545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.963,
                        "chargingTimeInSeconds": 2655,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026304651,
                        "chargingParkName": "E.ON Helmstedt"
                    },
                    {
                        "lengthInMeters": 91356,
                        "travelTimeInSeconds": 2475,
                        "batteryConsumptionInkWh": 29.891415272727272,
                        "remainingChargeAtArrivalInkWh": 9.071584727272729,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 46.01974523345455,
                        "chargingTimeInSeconds": 3187,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377112,
                        "chargingParkName": "E.ON Ziesar"
                    },
                    {
                        "lengthInMeters": 97425,
                        "travelTimeInSeconds": 3895,
                        "batteryConsumptionInkWh": 29.347889454545456,
                        "remainingChargeAtArrivalInkWh": 16.671855778909094,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 541971,
                "dauer": 27906,
                "verbrauch": 127.88576945454547,
                "restreichweite": 9.035249430545454,
                "ladezeit": 10117,
                "routen_id": 334,
                "legs": [
                    {
                        "lengthInMeters": 119744,
                        "travelTimeInSeconds": 4184,
                        "batteryConsumptionInkWh": 27.310976000000004,
                        "remainingChargeAtArrivalInkWh": 8.689023999999996,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.0,
                        "chargingTimeInSeconds": 1934,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024217844,
                        "chargingParkName": "innogy Rheda-Wiedenbr\u00fcck Bielefelder Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 89016,
                        "travelTimeInSeconds": 2712,
                        "batteryConsumptionInkWh": 22.27657281818182,
                        "remainingChargeAtArrivalInkWh": 4.723427181818181,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.900000000000002,
                        "chargingTimeInSeconds": 2242,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219584,
                        "chargingParkName": "Auetal Rehrener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 98013,
                        "travelTimeInSeconds": 2950,
                        "batteryConsumptionInkWh": 23.041768909090912,
                        "remainingChargeAtArrivalInkWh": 4.85823109090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.0,
                        "chargingTimeInSeconds": 2164,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292785,
                        "chargingParkName": "Volkswagen Veltenhof-R\u00fchme Carl-Giesecke-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 88524,
                        "travelTimeInSeconds": 2529,
                        "batteryConsumptionInkWh": 22.366400636363636,
                        "remainingChargeAtArrivalInkWh": 4.633599363636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2317,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 97616,
                        "travelTimeInSeconds": 2982,
                        "batteryConsumptionInkWh": 24.26533581818182,
                        "remainingChargeAtArrivalInkWh": 4.534664181818179,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 17.659964703272728,
                        "chargingTimeInSeconds": 1460,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522664,
                        "chargingParkName": "Schwielowsee Beelitzer Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 49058,
                        "travelTimeInSeconds": 2432,
                        "batteryConsumptionInkWh": 8.624715272727274,
                        "remainingChargeAtArrivalInkWh": 9.035249430545454,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 543137,
                "dauer": 27291,
                "verbrauch": 116.7549309090909,
                "restreichweite": 7.598091595636362,
                "ladezeit": 9676,
                "routen_id": 335,
                "legs": [
                    {
                        "lengthInMeters": 119744,
                        "travelTimeInSeconds": 4184,
                        "batteryConsumptionInkWh": 24.73406109090909,
                        "remainingChargeAtArrivalInkWh": 5.505938909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 1917,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024217844,
                        "chargingParkName": "innogy Rheda-Wiedenbr\u00fcck Bielefelder Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 89016,
                        "travelTimeInSeconds": 2712,
                        "batteryConsumptionInkWh": 20.008100363636363,
                        "remainingChargeAtArrivalInkWh": 3.805899636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2107,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219584,
                        "chargingParkName": "Auetal Rehrener Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 98013,
                        "travelTimeInSeconds": 2954,
                        "batteryConsumptionInkWh": 20.87320436363636,
                        "remainingChargeAtArrivalInkWh": 4.0747956363636355,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.191999999999997,
                        "chargingTimeInSeconds": 2032,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026292785,
                        "chargingParkName": "Volkswagen Veltenhof-R\u00fchme Carl-Giesecke-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 88524,
                        "travelTimeInSeconds": 2532,
                        "batteryConsumptionInkWh": 20.201547636363635,
                        "remainingChargeAtArrivalInkWh": 3.9904523636363614,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.435999999999996,
                        "chargingTimeInSeconds": 1979,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024226827,
                        "chargingParkName": "Magdeburg Glindenberger Weg"
                    },
                    {
                        "lengthInMeters": 83500,
                        "travelTimeInSeconds": 2415,
                        "batteryConsumptionInkWh": 19.452219636363637,
                        "remainingChargeAtArrivalInkWh": 3.9837803636363596,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.08388941381818,
                        "chargingTimeInSeconds": 1641,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517580,
                        "chargingParkName": "Kloster Lehnin Kurf\u00fcrstenstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 64340,
                        "travelTimeInSeconds": 2819,
                        "batteryConsumptionInkWh": 11.485797818181819,
                        "remainingChargeAtArrivalInkWh": 7.598091595636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Essen",
        "Ziel": "Hamburg",
        "start_lat": 51.4508,
        "start_long": 7.0131,
        "dest_lat": 53.55,
        "dest_long": 10.01,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 366595,
                "dauer": 12531,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 83,
                "legs": [
                    {
                        "lengthInMeters": 366595,
                        "travelTimeInSeconds": 12531,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 362975,
                "dauer": 18036,
                "verbrauch": 111.17315490909091,
                "restreichweite": 16.684990568727272,
                "ladezeit": 5523,
                "routen_id": 336,
                "legs": [
                    {
                        "lengthInMeters": 169478,
                        "travelTimeInSeconds": 6501,
                        "batteryConsumptionInkWh": 50.44353745454546,
                        "remainingChargeAtArrivalInkWh": 15.876462545454551,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 33.160000000000004,
                        "chargingTimeInSeconds": 1783,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519308,
                        "chargingParkName": "EWE Holdorf Zum Hansa Center"
                    },
                    {
                        "lengthInMeters": 81309,
                        "travelTimeInSeconds": 2513,
                        "batteryConsumptionInkWh": 24.81433309090909,
                        "remainingChargeAtArrivalInkWh": 8.345666909090912,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 52.60027493236363,
                        "chargingTimeInSeconds": 3740,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026306991,
                        "chargingParkName": "Hemelingen Europaallee"
                    },
                    {
                        "lengthInMeters": 112188,
                        "travelTimeInSeconds": 3499,
                        "batteryConsumptionInkWh": 35.91528436363636,
                        "remainingChargeAtArrivalInkWh": 16.684990568727272,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 362258,
                "dauer": 18549,
                "verbrauch": 82.51691254545455,
                "restreichweite": 9.055030428909092,
                "ladezeit": 5717,
                "routen_id": 337,
                "legs": [
                    {
                        "lengthInMeters": 122695,
                        "travelTimeInSeconds": 4933,
                        "batteryConsumptionInkWh": 27.17986472727273,
                        "remainingChargeAtArrivalInkWh": 8.82013527272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.3,
                        "chargingTimeInSeconds": 1717,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295869,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 92175,
                        "travelTimeInSeconds": 3192,
                        "batteryConsumptionInkWh": 19.64884981818182,
                        "remainingChargeAtArrivalInkWh": 4.651150181818181,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.05,
                        "chargingTimeInSeconds": 1793,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291489,
                        "chargingParkName": "E.ON D\u00f6tlingen"
                    },
                    {
                        "lengthInMeters": 70658,
                        "travelTimeInSeconds": 2201,
                        "batteryConsumptionInkWh": 17.172983545454546,
                        "remainingChargeAtArrivalInkWh": 4.877016454545455,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.57024488345455,
                        "chargingTimeInSeconds": 2207,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377078,
                        "chargingParkName": "EWE Gyhum An der Autobahn"
                    },
                    {
                        "lengthInMeters": 76730,
                        "travelTimeInSeconds": 2506,
                        "batteryConsumptionInkWh": 18.515214454545458,
                        "remainingChargeAtArrivalInkWh": 9.055030428909092,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 365270,
                "dauer": 18616,
                "verbrauch": 74.12402472727273,
                "restreichweite": 7.608479665454542,
                "ladezeit": 5515,
                "routen_id": 338,
                "legs": [
                    {
                        "lengthInMeters": 108341,
                        "travelTimeInSeconds": 4618,
                        "batteryConsumptionInkWh": 20.792804363636364,
                        "remainingChargeAtArrivalInkWh": 9.447195636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 1769,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227019,
                        "chargingParkName": "Ladbergen Dorfstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 108205,
                        "travelTimeInSeconds": 3733,
                        "batteryConsumptionInkWh": 20.99317090909091,
                        "remainingChargeAtArrivalInkWh": 3.9548290909090866,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 20.411999999999995,
                        "chargingTimeInSeconds": 1746,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219340,
                        "chargingParkName": "EWE Wildeshausen Glaner Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 71994,
                        "travelTimeInSeconds": 2245,
                        "batteryConsumptionInkWh": 15.560567272727273,
                        "remainingChargeAtArrivalInkWh": 4.851432727272723,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.385961847272725,
                        "chargingTimeInSeconds": 2000,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025377078,
                        "chargingParkName": "EWE Gyhum An der Autobahn"
                    },
                    {
                        "lengthInMeters": 76730,
                        "travelTimeInSeconds": 2505,
                        "batteryConsumptionInkWh": 16.777482181818183,
                        "remainingChargeAtArrivalInkWh": 7.608479665454542,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Essen",
        "Ziel": "Munich",
        "start_lat": 51.4508,
        "start_long": 7.0131,
        "dest_lat": 48.1372,
        "dest_long": 11.5755,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 635895,
                "dauer": 21285,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 84,
                "legs": [
                    {
                        "lengthInMeters": 635895,
                        "travelTimeInSeconds": 21285,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 639313,
                "dauer": 34596,
                "verbrauch": 203.27009818181818,
                "restreichweite": 16.686409079272728,
                "ladezeit": 13362,
                "routen_id": 339,
                "legs": [
                    {
                        "lengthInMeters": 155024,
                        "travelTimeInSeconds": 5670,
                        "batteryConsumptionInkWh": 47.386100363636366,
                        "remainingChargeAtArrivalInkWh": 18.93389963636364,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 51.398,
                        "chargingTimeInSeconds": 3012,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517581,
                        "chargingParkName": "Montabaur Allmannshausen"
                    },
                    {
                        "lengthInMeters": 135376,
                        "travelTimeInSeconds": 4216,
                        "batteryConsumptionInkWh": 42.47078181818182,
                        "remainingChargeAtArrivalInkWh": 8.927218181818183,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 41.45,
                        "chargingTimeInSeconds": 2841,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023965157,
                        "chargingParkName": "innogy H\u00f6sbach Siemensstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 94138,
                        "travelTimeInSeconds": 2855,
                        "batteryConsumptionInkWh": 32.721548363636366,
                        "remainingChargeAtArrivalInkWh": 8.728451636363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.056000000000004,
                        "chargingTimeInSeconds": 3752,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291511,
                        "chargingParkName": "E.ON Kleinlangheim"
                    },
                    {
                        "lengthInMeters": 140863,
                        "travelTimeInSeconds": 4628,
                        "batteryConsumptionInkWh": 44.067128000000004,
                        "remainingChargeAtArrivalInkWh": 8.988872,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.310948715636364,
                        "chargingTimeInSeconds": 3757,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289484,
                        "chargingParkName": "Volkswagen Greding Industriestra\u00dfe"
                    },
                    {
                        "lengthInMeters": 113912,
                        "travelTimeInSeconds": 3864,
                        "batteryConsumptionInkWh": 36.624539636363636,
                        "remainingChargeAtArrivalInkWh": 16.686409079272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 643918,
                "dauer": 33876,
                "verbrauch": 151.039875,
                "restreichweite": 9.052987624,
                "ladezeit": 12372,
                "routen_id": 340,
                "legs": [
                    {
                        "lengthInMeters": 126715,
                        "travelTimeInSeconds": 4868,
                        "batteryConsumptionInkWh": 26.561961363636364,
                        "remainingChargeAtArrivalInkWh": 9.438038636363636,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.3,
                        "chargingTimeInSeconds": 1680,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77084,
                        "travelTimeInSeconds": 2277,
                        "batteryConsumptionInkWh": 19.657770363636367,
                        "remainingChargeAtArrivalInkWh": 4.642229636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2316,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 100753,
                        "travelTimeInSeconds": 3177,
                        "batteryConsumptionInkWh": 23.942329090909094,
                        "remainingChargeAtArrivalInkWh": 4.857670909090906,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.1,
                        "chargingTimeInSeconds": 2095,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289307,
                        "chargingParkName": "Weibersbrunn Hauptstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 82326,
                        "travelTimeInSeconds": 2502,
                        "batteryConsumptionInkWh": 21.185465636363638,
                        "remainingChargeAtArrivalInkWh": 4.914534363636363,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.5,
                        "chargingTimeInSeconds": 1812,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026291511,
                        "chargingParkName": "E.ON Kleinlangheim"
                    },
                    {
                        "lengthInMeters": 86566,
                        "travelTimeInSeconds": 3136,
                        "batteryConsumptionInkWh": 17.939009454545456,
                        "remainingChargeAtArrivalInkWh": 4.560990545454544,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2321,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 93112,
                        "travelTimeInSeconds": 2652,
                        "batteryConsumptionInkWh": 24.259527090909092,
                        "remainingChargeAtArrivalInkWh": 4.540472909090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 26.546799624000002,
                        "chargingTimeInSeconds": 2148,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024215657,
                        "chargingParkName": "Ingolstadt Manchinger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77362,
                        "travelTimeInSeconds": 2891,
                        "batteryConsumptionInkWh": 17.493812000000002,
                        "remainingChargeAtArrivalInkWh": 9.052987624,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 647614,
                "dauer": 33342,
                "verbrauch": 136.34426909090908,
                "restreichweite": 7.6098342836363635,
                "ladezeit": 11679,
                "routen_id": 341,
                "legs": [
                    {
                        "lengthInMeters": 126715,
                        "travelTimeInSeconds": 4868,
                        "batteryConsumptionInkWh": 23.95198836363636,
                        "remainingChargeAtArrivalInkWh": 6.288011636363638,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.545999999999996,
                        "chargingTimeInSeconds": 1694,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77084,
                        "travelTimeInSeconds": 2277,
                        "batteryConsumptionInkWh": 17.56325818181818,
                        "remainingChargeAtArrivalInkWh": 3.9827418181818146,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 21.167999999999996,
                        "chargingTimeInSeconds": 1803,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 85669,
                        "travelTimeInSeconds": 2752,
                        "batteryConsumptionInkWh": 17.222654545454546,
                        "remainingChargeAtArrivalInkWh": 3.94534545454545,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 2098,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024220457,
                        "chargingParkName": "innogy Goldbach Aschaffstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 84064,
                        "travelTimeInSeconds": 2360,
                        "batteryConsumptionInkWh": 21.122688,
                        "remainingChargeAtArrivalInkWh": 3.8253119999999967,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 22.679999999999996,
                        "chargingTimeInSeconds": 1930,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024813432,
                        "chargingParkName": "Dettelbach Mainfrankenpark"
                    },
                    {
                        "lengthInMeters": 102493,
                        "travelTimeInSeconds": 3618,
                        "batteryConsumptionInkWh": 18.71088290909091,
                        "remainingChargeAtArrivalInkWh": 3.969117090909087,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.569999999999997,
                        "chargingTimeInSeconds": 2067,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026302709,
                        "chargingParkName": "Volkswagen Schwaig bei N\u00fcrnberg N\u00fcrnberger Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 86806,
                        "travelTimeInSeconds": 2612,
                        "batteryConsumptionInkWh": 20.41565527272727,
                        "remainingChargeAtArrivalInkWh": 4.154344727272726,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.966976101818183,
                        "chargingTimeInSeconds": 2087,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517171,
                        "chargingParkName": "Lenting Am Pfannenstiel"
                    },
                    {
                        "lengthInMeters": 84783,
                        "travelTimeInSeconds": 3177,
                        "batteryConsumptionInkWh": 17.35714181818182,
                        "remainingChargeAtArrivalInkWh": 7.6098342836363635,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Essen",
        "Ziel": "Cologne",
        "start_lat": 51.4508,
        "start_long": 7.0131,
        "dest_lat": 50.9422,
        "dest_long": 6.9578,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 71985,
                "dauer": 3339,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 85,
                "legs": [
                    {
                        "lengthInMeters": 71985,
                        "travelTimeInSeconds": 3339,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 71985,
                "dauer": 3275,
                "verbrauch": 19.648124363636363,
                "restreichweite": 46.671875636363644,
                "ladezeit": null,
                "routen_id": 342,
                "legs": [
                    {
                        "lengthInMeters": 71985,
                        "travelTimeInSeconds": 3275,
                        "batteryConsumptionInkWh": 19.648124363636363,
                        "remainingChargeAtArrivalInkWh": 46.671875636363644,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 71985,
                "dauer": 3275,
                "verbrauch": 12.751919727272728,
                "restreichweite": 23.24808027272727,
                "ladezeit": null,
                "routen_id": 343,
                "legs": [
                    {
                        "lengthInMeters": 71985,
                        "travelTimeInSeconds": 3275,
                        "batteryConsumptionInkWh": 12.751919727272728,
                        "remainingChargeAtArrivalInkWh": 23.24808027272727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 71985,
                "dauer": 3275,
                "verbrauch": 11.578866909090907,
                "restreichweite": 18.66113309090909,
                "ladezeit": null,
                "routen_id": 344,
                "legs": [
                    {
                        "lengthInMeters": 71985,
                        "travelTimeInSeconds": 3275,
                        "batteryConsumptionInkWh": 11.578866909090907,
                        "remainingChargeAtArrivalInkWh": 18.66113309090909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Essen",
        "Ziel": "Frankfurt",
        "start_lat": 51.4508,
        "start_long": 7.0131,
        "dest_lat": 50.1136,
        "dest_long": 8.6797,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 252538,
                "dauer": 9448,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 86,
                "legs": [
                    {
                        "lengthInMeters": 252538,
                        "travelTimeInSeconds": 9448,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 254945,
                "dauer": 11854,
                "verbrauch": 78.5568050909091,
                "restreichweite": 16.661014066909093,
                "ladezeit": 2609,
                "routen_id": 345,
                "legs": [
                    {
                        "lengthInMeters": 177815,
                        "travelTimeInSeconds": 6372,
                        "batteryConsumptionInkWh": 54.629771636363635,
                        "remainingChargeAtArrivalInkWh": 11.690228363636372,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 40.58804752145455,
                        "chargingTimeInSeconds": 2609,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025356355,
                        "chargingParkName": "EnBW Offheim An der Meil"
                    },
                    {
                        "lengthInMeters": 77130,
                        "travelTimeInSeconds": 2873,
                        "batteryConsumptionInkWh": 23.927033454545455,
                        "remainingChargeAtArrivalInkWh": 16.661014066909093,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 252593,
                "dauer": 12410,
                "verbrauch": 56.03554727272728,
                "restreichweite": 9.037467742,
                "ladezeit": 3224,
                "routen_id": 346,
                "legs": [
                    {
                        "lengthInMeters": 126715,
                        "travelTimeInSeconds": 4843,
                        "batteryConsumptionInkWh": 26.643802181818184,
                        "remainingChargeAtArrivalInkWh": 9.356197818181816,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.3,
                        "chargingTimeInSeconds": 1685,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77084,
                        "travelTimeInSeconds": 2277,
                        "batteryConsumptionInkWh": 19.657874090909093,
                        "remainingChargeAtArrivalInkWh": 4.6421259090909075,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.771338742,
                        "chargingTimeInSeconds": 1539,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 48794,
                        "travelTimeInSeconds": 2066,
                        "batteryConsumptionInkWh": 9.733871,
                        "remainingChargeAtArrivalInkWh": 9.037467742,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 254228,
                "dauer": 12490,
                "verbrauch": 50.37386472727273,
                "restreichweite": 7.598161957818181,
                "ladezeit": 3132,
                "routen_id": 347,
                "legs": [
                    {
                        "lengthInMeters": 126715,
                        "travelTimeInSeconds": 4868,
                        "batteryConsumptionInkWh": 23.95198836363636,
                        "remainingChargeAtArrivalInkWh": 6.288011636363638,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 18.9,
                        "chargingTimeInSeconds": 1489,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 67949,
                        "travelTimeInSeconds": 2100,
                        "batteryConsumptionInkWh": 14.900897454545454,
                        "remainingChargeAtArrivalInkWh": 3.9991025454545444,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 19.119140866909092,
                        "chargingTimeInSeconds": 1643,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025522179,
                        "chargingParkName": "Lidl Bad Camberg Beuerbacher Landstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 59564,
                        "travelTimeInSeconds": 2390,
                        "batteryConsumptionInkWh": 11.52097890909091,
                        "remainingChargeAtArrivalInkWh": 7.598161957818181,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Essen",
        "Ziel": "Bremen",
        "start_lat": 51.4508,
        "start_long": 7.0131,
        "dest_lat": 53.1153,
        "dest_long": 8.7975,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 261185,
                "dauer": 9706,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 87,
                "legs": [
                    {
                        "lengthInMeters": 261185,
                        "travelTimeInSeconds": 9706,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 260612,
                "dauer": 12630,
                "verbrauch": 76.66344000000001,
                "restreichweite": 16.677785303272728,
                "ladezeit": 2587,
                "routen_id": 348,
                "legs": [
                    {
                        "lengthInMeters": 159418,
                        "travelTimeInSeconds": 6192,
                        "batteryConsumptionInkWh": 47.59253163636364,
                        "remainingChargeAtArrivalInkWh": 18.72746836363637,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 45.74869366690909,
                        "chargingTimeInSeconds": 2587,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023973344,
                        "chargingParkName": "innogy Neuenkirchen-V\u00f6rden Hannoversche Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 101194,
                        "travelTimeInSeconds": 3851,
                        "batteryConsumptionInkWh": 29.070908363636363,
                        "remainingChargeAtArrivalInkWh": 16.677785303272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 256535,
                "dauer": 13134,
                "verbrauch": 54.235879090909094,
                "restreichweite": 9.055325636727272,
                "ladezeit": 3076,
                "routen_id": 349,
                "legs": [
                    {
                        "lengthInMeters": 122695,
                        "travelTimeInSeconds": 4951,
                        "batteryConsumptionInkWh": 27.179034909090912,
                        "remainingChargeAtArrivalInkWh": 8.820965090909088,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 13.5,
                        "chargingTimeInSeconds": 881,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026295869,
                        "chargingParkName": "E.ON Tecklenburg"
                    },
                    {
                        "lengthInMeters": 46821,
                        "travelTimeInSeconds": 1777,
                        "batteryConsumptionInkWh": 8.96566681818182,
                        "remainingChargeAtArrivalInkWh": 4.53433318181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.146503000363637,
                        "chargingTimeInSeconds": 2195,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025519308,
                        "chargingParkName": "EWE Holdorf Zum Hansa Center"
                    },
                    {
                        "lengthInMeters": 87019,
                        "travelTimeInSeconds": 3329,
                        "batteryConsumptionInkWh": 18.091177363636366,
                        "remainingChargeAtArrivalInkWh": 9.055325636727272,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 258843,
                "dauer": 13427,
                "verbrauch": 48.32117963636364,
                "restreichweite": 7.58828649890909,
                "ladezeit": 3028,
                "routen_id": 350,
                "legs": [
                    {
                        "lengthInMeters": 108341,
                        "travelTimeInSeconds": 4602,
                        "batteryConsumptionInkWh": 20.793584,
                        "remainingChargeAtArrivalInkWh": 9.446416,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.947999999999997,
                        "chargingTimeInSeconds": 1769,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024227019,
                        "chargingParkName": "Ladbergen Dorfstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 108205,
                        "travelTimeInSeconds": 3733,
                        "batteryConsumptionInkWh": 20.99317090909091,
                        "remainingChargeAtArrivalInkWh": 3.9548290909090866,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 14.122711226181817,
                        "chargingTimeInSeconds": 1259,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219340,
                        "chargingParkName": "EWE Wildeshausen Glaner Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 42297,
                        "travelTimeInSeconds": 2065,
                        "batteryConsumptionInkWh": 6.534424727272727,
                        "remainingChargeAtArrivalInkWh": 7.58828649890909,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Essen",
        "Ziel": "Stuttgart",
        "start_lat": 51.4508,
        "start_long": 7.0131,
        "dest_lat": 48.7761,
        "dest_long": 9.1775,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 426295,
                "dauer": 15443,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 88,
                "legs": [
                    {
                        "lengthInMeters": 426295,
                        "travelTimeInSeconds": 15443,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 438099,
                "dauer": 23072,
                "verbrauch": 134.95992363636367,
                "restreichweite": 16.66044173672727,
                "ladezeit": 7843,
                "routen_id": 351,
                "legs": [
                    {
                        "lengthInMeters": 126715,
                        "travelTimeInSeconds": 4843,
                        "batteryConsumptionInkWh": 38.78027490909091,
                        "remainingChargeAtArrivalInkWh": 27.539725090909094,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 53.056000000000004,
                        "chargingTimeInSeconds": 2577,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 142599,
                        "travelTimeInSeconds": 4235,
                        "batteryConsumptionInkWh": 44.22910036363636,
                        "remainingChargeAtArrivalInkWh": 8.826899636363642,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.963,
                        "chargingTimeInSeconds": 2654,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026305203,
                        "chargingParkName": "Mer Alsbach-H\u00e4hnlein Autobahnrastst\u00e4tte West"
                    },
                    {
                        "lengthInMeters": 98166,
                        "travelTimeInSeconds": 3351,
                        "batteryConsumptionInkWh": 30.401127272727273,
                        "remainingChargeAtArrivalInkWh": 8.561872727272728,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.209862827636364,
                        "chargingTimeInSeconds": 2612,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009025517647,
                        "chargingParkName": "EnBW Waldbronn Im Ermlisgrund"
                    },
                    {
                        "lengthInMeters": 70619,
                        "travelTimeInSeconds": 2801,
                        "batteryConsumptionInkWh": 21.549421090909092,
                        "remainingChargeAtArrivalInkWh": 16.66044173672727,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 440170,
                "dauer": 23067,
                "verbrauch": 99.32187172727274,
                "restreichweite": 9.103680386909087,
                "ladezeit": 8001,
                "routen_id": 352,
                "legs": [
                    {
                        "lengthInMeters": 126715,
                        "travelTimeInSeconds": 4843,
                        "batteryConsumptionInkWh": 26.643802181818184,
                        "remainingChargeAtArrivalInkWh": 9.356197818181816,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 24.3,
                        "chargingTimeInSeconds": 1685,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 77084,
                        "travelTimeInSeconds": 2277,
                        "batteryConsumptionInkWh": 19.657770363636367,
                        "remainingChargeAtArrivalInkWh": 4.642229636363634,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 28.8,
                        "chargingTimeInSeconds": 2316,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009026289978,
                        "chargingParkName": "Idstein Black-und-Decker-Stra\u00dfe"
                    },
                    {
                        "lengthInMeters": 108494,
                        "travelTimeInSeconds": 3437,
                        "batteryConsumptionInkWh": 24.107359181818186,
                        "remainingChargeAtArrivalInkWh": 4.692640818181815,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 38.01662038690909,
                        "chargingTimeInSeconds": 4000,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024815134,
                        "chargingParkName": "EnBW Plankstadt Westende"
                    },
                    {
                        "lengthInMeters": 127877,
                        "travelTimeInSeconds": 4509,
                        "batteryConsumptionInkWh": 28.912940000000003,
                        "remainingChargeAtArrivalInkWh": 9.103680386909087,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 439372,
                "dauer": 22372,
                "verbrauch": 89.50040290909091,
                "restreichweite": 7.616531554909091,
                "ladezeit": 7299,
                "routen_id": 353,
                "legs": [
                    {
                        "lengthInMeters": 126715,
                        "travelTimeInSeconds": 4843,
                        "batteryConsumptionInkWh": 24.02439709090909,
                        "remainingChargeAtArrivalInkWh": 6.215602909090908,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 29.861999999999995,
                        "chargingTimeInSeconds": 2850,
                        "chargingPowerInkW": 43,
                        "chargingParkExternalId": 276009007328356,
                        "chargingParkName": "Allego Oberhonnefeld-Gierend Westerwaldstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 121893,
                        "travelTimeInSeconds": 3692,
                        "batteryConsumptionInkWh": 25.862,
                        "remainingChargeAtArrivalInkWh": 3.9999999999999964,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 23.813999999999997,
                        "chargingTimeInSeconds": 2007,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009024219582,
                        "chargingParkName": "B\u00fcttelborn Berkacher Weg"
                    },
                    {
                        "lengthInMeters": 93602,
                        "travelTimeInSeconds": 2973,
                        "batteryConsumptionInkWh": 19.738248727272726,
                        "remainingChargeAtArrivalInkWh": 4.0757512727272704,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": 27.49228864581818,
                        "chargingTimeInSeconds": 2442,
                        "chargingPowerInkW": 22,
                        "chargingParkExternalId": 276009023664718,
                        "chargingParkName": "Karlsdorf-Neuthard Lu\u00dfhardtstra\u00dfe"
                    },
                    {
                        "lengthInMeters": 97162,
                        "travelTimeInSeconds": 3565,
                        "batteryConsumptionInkWh": 19.87575709090909,
                        "remainingChargeAtArrivalInkWh": 7.616531554909091,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Essen",
        "Ziel": "D\u00fcsseldorf",
        "start_lat": 51.4508,
        "start_long": 7.0131,
        "dest_lat": 51.2311,
        "dest_long": 6.7724,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 34241,
                "dauer": 1753,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 89,
                "legs": [
                    {
                        "lengthInMeters": 34241,
                        "travelTimeInSeconds": 1753,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 34241,
                "dauer": 1783,
                "verbrauch": 9.239521454545455,
                "restreichweite": 57.080478545454554,
                "ladezeit": null,
                "routen_id": 354,
                "legs": [
                    {
                        "lengthInMeters": 34241,
                        "travelTimeInSeconds": 1783,
                        "batteryConsumptionInkWh": 9.239521454545455,
                        "remainingChargeAtArrivalInkWh": 57.080478545454554,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 34241,
                "dauer": 1783,
                "verbrauch": 5.885589181818182,
                "restreichweite": 30.114410818181817,
                "ladezeit": null,
                "routen_id": 355,
                "legs": [
                    {
                        "lengthInMeters": 34241,
                        "travelTimeInSeconds": 1783,
                        "batteryConsumptionInkWh": 5.885589181818182,
                        "remainingChargeAtArrivalInkWh": 30.114410818181817,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 34241,
                "dauer": 1783,
                "verbrauch": 5.354250181818181,
                "restreichweite": 24.885749818181818,
                "ladezeit": null,
                "routen_id": 356,
                "legs": [
                    {
                        "lengthInMeters": 34241,
                        "travelTimeInSeconds": 1783,
                        "batteryConsumptionInkWh": 5.354250181818181,
                        "remainingChargeAtArrivalInkWh": 24.885749818181818,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    },
    {
        "Start": "Essen",
        "Ziel": "Dortmund",
        "start_lat": 51.4508,
        "start_long": 7.0131,
        "dest_lat": 51.5139,
        "dest_long": 7.4653,
        "Fahrzeuge": [
            {
                "name": "Verbrenner",
                "strecke": 37556,
                "dauer": 2084,
                "verbrauch": null,
                "restreichweite": null,
                "ladezeit": null,
                "routen_id": 90,
                "legs": [
                    {
                        "lengthInMeters": 37556,
                        "travelTimeInSeconds": 2084,
                        "batteryConsumptionInkWh": null,
                        "remainingChargeAtArrivalInkWh": null,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Audi E-Tron",
                "strecke": 36627,
                "dauer": 2210,
                "verbrauch": 9.778455272727273,
                "restreichweite": 56.541544727272736,
                "ladezeit": null,
                "routen_id": 357,
                "legs": [
                    {
                        "lengthInMeters": 36627,
                        "travelTimeInSeconds": 2210,
                        "batteryConsumptionInkWh": 9.778455272727273,
                        "remainingChargeAtArrivalInkWh": 56.541544727272736,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Peugeot e208",
                "strecke": 36627,
                "dauer": 2210,
                "verbrauch": 5.846276545454546,
                "restreichweite": 30.153723454545453,
                "ladezeit": null,
                "routen_id": 358,
                "legs": [
                    {
                        "lengthInMeters": 36627,
                        "travelTimeInSeconds": 2210,
                        "batteryConsumptionInkWh": 5.846276545454546,
                        "remainingChargeAtArrivalInkWh": 30.153723454545453,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            },
            {
                "name": "Fiat 500e",
                "strecke": 36627,
                "dauer": 2210,
                "verbrauch": 5.314683636363636,
                "restreichweite": 24.925316363636362,
                "ladezeit": null,
                "routen_id": 359,
                "legs": [
                    {
                        "lengthInMeters": 36627,
                        "travelTimeInSeconds": 2210,
                        "batteryConsumptionInkWh": 5.314683636363636,
                        "remainingChargeAtArrivalInkWh": 24.925316363636362,
                        "totalChargingTimeInSeconds": null,
                        "targetChargeInkWh": null,
                        "chargingTimeInSeconds": null,
                        "chargingPowerInkW": null,
                        "chargingParkExternalId": null,
                        "chargingParkName": null
                    }
                ]
            }
        ]
    }
];