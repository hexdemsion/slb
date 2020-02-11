var DATASET = {
    "extender": {
        "type": {
            "uphole": [
            	{"id": 1, "name": "MEXM-BA", "min": 28.13, "max": 31.65, "tolerance": 0, "require_crossover": true}, 
            	{"id": 2, "name": "MEXM-AA", "min": 31.63, "max": 35.15, "tolerance": 0, "require_crossover": true}, 
            	{"id": 3, "name": "MEXM-DA", "min": 34.13, "max": 37.65, "tolerance": 0, "require_crossover": true}, 

            	{"id": 4, "name": "EXTM-CB", "min": 11.25, "max": 13.75, "tolerance": 0, "require_crossover": false}, 
            	{"id": 5, "name": "EXTM-BB", "min": 13.37, "max": 15.87, "tolerance": 0, "require_crossover": false}, 
            	{"id": 6, "name": "EXTM-FA", "min": 15.49, "max": 17.99, "tolerance": 0, "require_crossover": false}, 
            	{"id": 7, "name": "EXTM-GB", "min": 17.58, "max": 20.14, "tolerance": 0, "require_crossover": false}, 
            	
            	{"id": 8, "name": "RTLM-CC", "min": 29.54, "max": 32.28, "tolerance": 0, "require_crossover": false}, 
            	{"id": 9, "name": "RTLM-BD", "min": 39.28, "max": 42.02, "tolerance": 0, "require_crossover": false}
            ],
            "downhole": [
            	{"id": 1, "name": "EXTF-AA", "min": 12.82, "max": 15.16, "tolerance": 0, "require_crossover": false}, 
            	{"id": 2, "name": "EXTF-BA", "min": 10.41, "max": 12.75, "tolerance": 0, "require_crossover": false}, 
            	{"id": 3, "name": "EXTF-CA", "min": 8.06, "max": 10.40, "tolerance": 0, "require_crossover": false}, 
            	{"id": 4, "name": "EXTF-DA", "min": 12.82, "max": 15.16, "tolerance": 0, "require_crossover": false}, 
            	{"id": 5, "name": "EXTF-DB", "min": 12.82, "max": 15.16, "tolerance": 0, "require_crossover": false}, 
            	
            	{"id": 6, "name": "MEXD-GA", "min": 22.36, "max": 24.36, "tolerance": 26.86, "require_crossover": true}, 
            	{"id": 7, "name": "MEXD-DB", "min": 25.36, "max": 27.76, "tolerance": 30.26, "require_crossover": true}, 
            	{"id": 8, "name": "MEXD-BA", "min": 27.82, "max": 30.16, "tolerance": 32.66, "require_crossover": true}, 
            	{"id": 9, "name": "MEXD-CB", "min": 30.22, "max": 32.56, "tolerance": 35.06, "require_crossover": true}, 
            	{"id": 10, "name": "MEXD-EB", "min": 31.96, "max": 34.36, "tolerance": 36.86, "require_crossover": true}, 
            	
            	{"id": 11, "name": "MXLD-DA", "min": 49.39, "max": 51.73, "tolerance": 54.23, "require_crossover": true}, 
            	{"id": 12, "name": "MXLD-BA", "min": 51.82, "max": 54.16, "tolerance": 56.66, "require_crossover": true}, 
            	{"id": 13, "name": "MXLD-G/BA", "min": 51.82, "max": 54.16, "tolerance": 56.66, "require_crossover": true}, 
            	
            	{"id": 14, "name": "RTLF-CA", "min": 12.85, "max": 13.75, "tolerance": 0, "require_crossover": false}, 
            	{"id": 15, "name": "RTLF-BB", "min": 14.96, "max": 17.58, "tolerance": 0, "require_crossover": false}, 
            	{"id": 16, "name": "RTLF-EA", "min": 28.81, "max": 31.43, "tolerance": 0, "require_crossover": false},

                {"id": 17, "name": "MEXC-MA", "min": 25.56, "max": 27.90, "tolerance": 0, "require_crossover": true},
                {"id": 18, "name": "MEXC-LA", "min": 27.92, "max": 30.26, "tolerance": 0, "require_crossover": true},
                {"id": 19, "name": "MEXC-EA", "min": 30.32, "max": 32.66, "tolerance": 0, "require_crossover": true},
                {"id": 20, "name": "MEXC-BA", "min": 32.11, "max": 33.94, "tolerance": 0, "require_crossover": true},

                {"id": 21, "name": "MEXC-DA", "min": 8.24, "max": 10.12, "tolerance": 0, "require_crossover": false},
                {"id": 22, "name": "MEXC-CA", "min": 10.60, "max": 12.48, "tolerance": 0, "require_crossover": false},
                {"id": 23, "name": "MEXC-AB", "min": 13.00, "max": 14.88, "tolerance": 0, "require_crossover": false}
            ]
        }
    },
    "tool": [
        {
            "id": 1,
            "name": "ADN 4",
            "view": 2,
            "id_uphole": [],
            "id_downhole": [14,15,16],
            "uphole": {},
            "downhole": {
                "box": function(rop2usc, crossover){ return adn4_downhole_box(rop2usc, crossover) },
            }
        },
        {
            "id": 2,
            "name": "ARC 6",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return arc6_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return arc6_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return arc6_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return arc6_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 3,
            "name": "ARC 8",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return arc8_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return arc8_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return arc8_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return arc8_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 4,
            "name": "ARC 9",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return arc9_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return arc9_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return arc9_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return arc9_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 5,
            "name": "Ecoscope",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return ecoscope_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return ecoscope_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return ecoscope_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return ecoscope_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 6,
            "name": "Geosphere Transmitter",
            "view": 0,
            "id_uphole": [8],
            "id_downhole": [14,15,16],
            "uphole": {
                "pin": function(rop2usc, crossover){ return geosphere_transmitter_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc, crossover){ return geosphere_transmitter_downhole_box(rop2usc, crossover) },
            }
        },
        {
            "id": 7,
            "name": "Geosphere Receiver",
            "view": 0,
            "id_uphole": [8],
            "id_downhole": [14,15,16],
            "uphole": {
                "pin": function(rop2usc, crossover){ return geosphere_receiver_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc, crossover){ return geosphere_receiver_downhole_box(rop2usc, crossover) },
            }
        },
        {
            "id": 8,
            "name": "Gyropulse",
            "view": 0,
            "id_uphole": [1,2,3],
            "id_downhole": [1,2,3,4,5,6,7,8,9,10,13],
            "uphole": {
                "box": function(rop2usc, crossover){ return gyropulse_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return gyropulse_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return gyropulse_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return gyropulse_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 9,
            "name": "Impulse",
            "view": 1,
            "id_uphole": [9],
            "id_downhole": [14,15,16],
            "uphole": {
                "pin": function(rop2usc, crossover){ return impulse_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc, crossover){ return impulse_downhole_box(rop2usc, crossover) },
            }
        },
        {
            "id": 10,
            "name": "Microscope 475",
            "view": 0,
            "id_uphole": [8],
            "id_downhole": [14,15,16],
            "uphole": {
                "pin": function(rop2usc, crossover){ return microscope475_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return microscope475_downhole_box(rop2usc) },
            }
        },
        {
            "id": 11,
            "name": "Microscope 675",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return microscope675_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return microscope675_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return microscope675_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return microscope675_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 12,
            "name": "Optidrill 675",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "id_downhole": [6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc){ return optidrill675_uphole_box(rop2usc) },
            },
            "downhole": {
                "pin": function(rop2usc, crossover){ return optidrill675_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 13,
            "name": "Optidrill 900",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "id_downhole": [6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return optidrill900_uphole_box(rop2usc, crossover) },
            },
            "downhole": {
                "pin": function(rop2usc, crossover){ return optidrill900_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 14,
            "name": "Periscope 675",
            "view": 0,
            "id_uphole": [4,5,6,7],
            "id_downhole": [6,7,8,9,10],
            "uphole": {},
            "downhole": {}
        },
        {
            "id": 15,
            "name": "Periscope 475",
            "view": 0,
            "id_uphole": [8],
            "id_downhole": [14,15,16],
            "uphole": {
                "pin": function(rop2usc, crossover){ return periscope475_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return periscope475_downhole_box(rop2usc) },
            }
        },
        {
            "id": 16,
            "name": "Sonicscope 675",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "id_downhole": [1,2,3,4,5,6,7,8,9,10],
            "uphole": {
                "box": function(rop2usc, crossover){ return sonicscope_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return sonicscope_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return sonicscope_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return sonicscope_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 17,
            "name": "Telescope IWOB",
            "view": 0,
            "id_uphole": [1,2,3],
            "id_downhole": [1,2,3,4,5,6,7,8,9,10,13],
            "uphole": {
                "box": function(rop2usc, crossover){ return telescope_iwob_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return telescope_iwob_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return telescope_iwob_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return telescope_iwob_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 18,
            "name": "Telescope Non IWOB",
            "view": 0,
            "id_uphole": [1,2,3],
            "id_downhole": [1,2,3,4,5,6,7,8,9,10,11,13],
            "uphole": {
                "box": function(rop2usc, crossover){ return telescope_non_iwob_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return telescope_non_iwob_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return telescope_non_iwob_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return telescope_non_iwob_downhole_pin(rop2usc, crossover) }
            }
        },
        {
            "id": 19,
            "name": "VPWD",
            "view": 0,
            "id_uphole": [8],
            "id_downhole": [14,15,16],
            "uphole": {
                "pin": function(rop2usc, crossover){ return vpwd_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return vpwd_downhole_box(rop2usc) },
            }
        },
        {
            "id": 20,
            "name": "Sonicvision",
            "view": 0,
            "id_uphole": [1,2,3],
            "id_downhole": [11,12],
            "uphole": {},
            "downhole": {}
        },
        {
            "id": 21,
            "name": "Digiscope",
            "view": 0,
            "id_uphole": [9],
            "id_downhole": [14,15,16],
            "uphole": {
                "pin": function(rop2usc, crossover){ return digiscope_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc, crossover){ return digiscope_downhole_box(rop2usc, crossover) },
            }
        },
        {
            "id": 22,
            "name": "Stethoscope 4",
            "view": 0,
            "id_uphole": [8],
            "id_downhole": [14,15,16],
            "uphole": {
                "box": function(rop2usc, crossover){ return stethoscope4_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return stethoscope4_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return stethoscope4_downhole_box(rop2usc) },
            }
        },
        {
            "id": 23,
            "name": "Stethoscope 6",
            "view": 0,
            "id_uphole": [1,2,3,4,5,6,7],
            "id_downhole": [17,18,19,20,21,22,23],
            "uphole": {
                "box": function(rop2usc, crossover){ return stethoscope6_uphole_box(rop2usc, crossover) },
                "pin": function(rop2usc, crossover){ return stethoscope6_uphole_pin(rop2usc, crossover) }
            },
            "downhole": {
                "box": function(rop2usc){ return stethoscope6_downhole_box(rop2usc) },
                "pin": function(rop2usc, crossover){ return stethoscope6_downhole_pin(rop2usc, crossover) }
            }
        }
    ]
}