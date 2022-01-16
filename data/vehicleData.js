const vehicleData = [
    {
        "name": "Audi E-Tron",
        "weight": 2420,
        "uphillEfficiency": 0.89,
        "downhillEfficiency": 0.81,
        "constantSpeedConsumption": "30,24:65,20:120,29.6",
        "currentChargeInkWh": 66.32000000000001,
        "maxCharge": 82.9,
        "auxiliaryPower": 0.2,
        "minChargeAtDestinationInkWh": 16.580000000000002,
        "minChargeAtChargingStopsInkWh": 8.290000000000001,
        "body": {
            "chargingModes": [
                {
                    "chargingConnections": [
                        {
                            "facilityType": "Charge_380_to_480V_3_Phase_at_32A",
                            "plugType": "IEC_62196_Type_2_Outlet"
                        }
                    ],
                    "chargingCurve": [
                        {
                            "chargeInkWh": 12.435,
                            "timeToChargeInSeconds": 746.1
                        },
                        {
                            "chargeInkWh": 24.87,
                            "timeToChargeInSeconds": 1492.2
                        },
                        {
                            "chargeInkWh": 58.03,
                            "timeToChargeInSeconds": 4062.1
                        },
                        {
                            "chargeInkWh": 82.9,
                            "timeToChargeInSeconds": 9699.300000000001
                        }
                    ]
                },
                {
                    "chargingConnections": [
                        {
                            "facilityType": "Charge_200_to_240V_1_Phase_at_10A",
                            "plugType": "Standard_Household_Country_Specific"
                        }
                    ],
                    "chargingCurve": [
                        {
                            "chargeInkWh": 12.435,
                            "timeToChargeInSeconds": 32380.74
                        },
                        {
                            "chargeInkWh": 24.87,
                            "timeToChargeInSeconds": 67671.27
                        },
                        {
                            "chargeInkWh": 58.03,
                            "timeToChargeInSeconds": 158015.69
                        },
                        {
                            "chargeInkWh": 82.9,
                            "timeToChargeInSeconds": 226068.30000000002
                        }
                    ]
                }
            ]
        }
    },
    {
        "name": "Peugeot e208",
        "weight": 1530,
        "uphillEfficiency": 0.85,
        "downhillEfficiency": 0.9,
        "constantSpeedConsumption": "30,6.4:65,9.2:120,22.1",
        "currentChargeInkWh": 36.0,
        "maxCharge": 45,
        "auxiliaryPower": 0.2,
        "minChargeAtDestinationInkWh": 9.0,
        "minChargeAtChargingStopsInkWh": 4.5,
        "body": {
            "chargingModes": [
                {
                    "chargingConnections": [
                        {
                            "facilityType": "Charge_380_to_480V_3_Phase_at_32A",
                            "plugType": "IEC_62196_Type_2_Outlet"
                        }
                    ],
                    "chargingCurve": [
                        {
                            "chargeInkWh": 6.75,
                            "timeToChargeInSeconds": 405.0
                        },
                        {
                            "chargeInkWh": 13.5,
                            "timeToChargeInSeconds": 810.0
                        },
                        {
                            "chargeInkWh": 31.499999999999996,
                            "timeToChargeInSeconds": 2204.9999999999995
                        },
                        {
                            "chargeInkWh": 45,
                            "timeToChargeInSeconds": 5265
                        }
                    ]
                },
                {
                    "chargingConnections": [
                        {
                            "facilityType": "Charge_200_to_240V_1_Phase_at_10A",
                            "plugType": "Standard_Household_Country_Specific"
                        }
                    ],
                    "chargingCurve": [
                        {
                            "chargeInkWh": 6.75,
                            "timeToChargeInSeconds": 17577.0
                        },
                        {
                            "chargeInkWh": 13.5,
                            "timeToChargeInSeconds": 36733.5
                        },
                        {
                            "chargeInkWh": 31.499999999999996,
                            "timeToChargeInSeconds": 85774.49999999999
                        },
                        {
                            "chargeInkWh": 45,
                            "timeToChargeInSeconds": 122715
                        }
                    ]
                }
            ]
        }
    },
    {
        "name": "Fiat 500e",
        "weight": 1430,
        "uphillEfficiency": 0.93,
        "downhillEfficiency": 0.93,
        "constantSpeedConsumption": "30,6.2:65,8.7:120,20.2",
        "currentChargeInkWh": 30.24,
        "maxCharge": 37.8,
        "auxiliaryPower": 0.2,
        "minChargeAtDestinationInkWh": 7.56,
        "minChargeAtChargingStopsInkWh": 3.78,
        "body": {
            "chargingModes": [
                {
                    "chargingConnections": [
                        {
                            "facilityType": "Charge_380_to_480V_3_Phase_at_32A",
                            "plugType": "IEC_62196_Type_2_Outlet"
                        }
                    ],
                    "chargingCurve": [
                        {
                            "chargeInkWh": 5.669999999999999,
                            "timeToChargeInSeconds": 340.19999999999993
                        },
                        {
                            "chargeInkWh": 11.339999999999998,
                            "timeToChargeInSeconds": 680.3999999999999
                        },
                        {
                            "chargeInkWh": 26.459999999999997,
                            "timeToChargeInSeconds": 1852.1999999999998
                        },
                        {
                            "chargeInkWh": 37.8,
                            "timeToChargeInSeconds": 4422.599999999999
                        }
                    ]
                },
                {
                    "chargingConnections": [
                        {
                            "facilityType": "Charge_200_to_240V_1_Phase_at_10A",
                            "plugType": "Standard_Household_Country_Specific"
                        }
                    ],
                    "chargingCurve": [
                        {
                            "chargeInkWh": 5.669999999999999,
                            "timeToChargeInSeconds": 14764.679999999997
                        },
                        {
                            "chargeInkWh": 11.339999999999998,
                            "timeToChargeInSeconds": 30856.139999999996
                        },
                        {
                            "chargeInkWh": 26.459999999999997,
                            "timeToChargeInSeconds": 72050.57999999999
                        },
                        {
                            "chargeInkWh": 37.8,
                            "timeToChargeInSeconds": 103080.59999999999
                        }
                    ]
                }
            ]
        }
    }
];