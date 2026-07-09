/* Generated from data/vehicles.js for the truck application. */
window.WA_DATA = {
  "modes": [
    {
      "id": "truck",
      "label": "Truck Maintainer"
    }
  ],
  "vehicles": [
    {
      "id": "truck-freightliner-cascadia-2018",
      "mode": "truck",
      "type": "Truck Maintainer",
      "make": "Freightliner",
      "model": "Cascadia",
      "year": 2018,
      "trim": "Class 8 diesel tractor",
      "vinExample": "3AKJHHDR0JS000000",
      "systems": [
        {
          "id": "air-brakes",
          "name": "Air brake system",
          "subsystems": [
            {
              "id": "drum-air-brake",
              "name": "Drive axle air drum brake",
              "subtitle": "Chamber, slack adjuster, shoes, drum",
              "diagramKind": "air-brake",
              "parts": [
                {
                  "id": 1,
                  "name": "Brake chamber",
                  "x": 160,
                  "y": 215,
                  "shape": "chamber",
                  "note": "Cage spring brake before disassembly"
                },
                {
                  "id": 2,
                  "name": "Slack adjuster",
                  "x": 315,
                  "y": 250,
                  "shape": "arm",
                  "note": "Check free stroke"
                },
                {
                  "id": 3,
                  "name": "S-cam shaft",
                  "x": 440,
                  "y": 245,
                  "shape": "shaft",
                  "note": "Inspect bushings and seals"
                },
                {
                  "id": 4,
                  "name": "Brake shoes",
                  "x": 590,
                  "y": 250,
                  "shape": "shoe",
                  "note": "Replace axle sets together"
                },
                {
                  "id": 5,
                  "name": "Drum",
                  "x": 735,
                  "y": 250,
                  "shape": "drum",
                  "note": "Measure against discard spec"
                }
              ],
              "tools": {
                "sockets": [
                  "15/16 in socket",
                  "1-1/8 in socket",
                  "1-1/2 in socket",
                  "33mm wheel socket"
                ],
                "wrenches": [
                  "9/16 in wrench",
                  "3/4 in wrench",
                  "15/16 in wrench"
                ],
                "specialty": [
                  "Wheel chocks",
                  "Brake spring tool",
                  "Brake cage bolt",
                  "Dial indicator",
                  "Heavy jack stands"
                ]
              },
              "fasteners": [
                "Brake chamber clamps: size varies by chamber",
                "Slack adjuster pinch bolts: common 9/16-3/4 in",
                "Wheel hardware: verify hub-piloted vs stud-piloted"
              ],
              "caution": "Heavy truck brake service can release stored spring and air energy. Follow the chamber manufacturer's procedure, fleet policy, and applicable FMCSA requirements.",
              "evidence": [
                {
                  "title": "Original WrenchAtlas diagram",
                  "scope": "Visual orientation only",
                  "confidence": "High for part-location teaching aid; not an OEM schematic",
                  "url": ""
                },
                {
                  "title": "NHTSA vPIC API",
                  "scope": "VIN identity data only",
                  "confidence": "Official public vehicle identity source when a VIN is decoded",
                  "url": "https://vpic.nhtsa.dot.gov/api/"
                },
                {
                  "title": "Community source requirement",
                  "scope": "Imported data packs",
                  "confidence": "Not accepted as verified unless source notes are present",
                  "url": ""
                }
              ],
              "sources": [
                {
                  "title": "FMCSA brake regulations - 49 CFR Part 393 Subpart C",
                  "scope": "Commercial brake-system safety requirements",
                  "confidence": "Current federal regulatory source; exact applicability depends on vehicle and operation",
                  "url": "https://www.ecfr.gov/current/title-49/part-393/subpart-C"
                }
              ],
              "quality": {
                "verificationLevel": "Regulated heavy-truck field reference",
                "confidence": "Useful for staging and component orientation; exact chamber, axle, brake, and fleet data control.",
                "lastReviewed": "2026-07-09",
                "measurementNotes": [
                  "Torque conversions use 1 ft-lb = 1.355817948 N-m and are rounded to the nearest whole N-m.",
                  "Socket and wrench sizes describe common fastener heads for the selected reference, not a guarantee for every trim or prior repair.",
                  "VIN decoding identifies vehicle metadata; it does not prove installed component, trim, or fastener variations.",
                  "Air pressure, pushrod travel, lining thickness, drum/rotor limits, and brake balance require calibrated measurement against the exact system standard."
                ],
                "limitations": [
                  "No copied OEM/manufacturer schematics are included.",
                  "Wear limits, fluids, bleed order, torque sequence, and regulated procedures must come from official service information.",
                  "Previously repaired vehicles may have non-original fasteners.",
                  "Brake chamber type, axle family, automatic slack adjuster design, wheel end, and fleet configuration vary substantially.",
                  "This pack does not authorize chamber disassembly, annual inspection sign-off, or return to commercial service."
                ]
              },
              "safety": [
                "Park on a hard level surface, chock the vehicle, follow lockout policy, and verify the parking/emergency brake state before entering the wheel end.",
                "Spring brake chambers store lethal mechanical energy. Never remove a spring-brake clamp band or open a chamber unless the exact approved service procedure authorizes it.",
                "Use stands and lifting equipment rated for the actual axle load; never rely on air suspension or a jack alone.",
                "After service, complete required adjustment, leak, warning-device, balance, inspection, and brake-performance checks before dispatch."
              ],
              "workflow": [
                {
                  "id": "identify",
                  "title": "1. Identify the brake",
                  "items": [
                    "Record VIN, axle, chamber size, slack-adjuster type, brake model, wheel-end configuration, and fleet work order.",
                    "Obtain the exact manufacturer and fleet procedure before releasing stored energy or removing hardware."
                  ]
                },
                {
                  "id": "secure",
                  "title": "2. Secure and measure",
                  "items": [
                    "Chock, isolate, support, and verify system pressure state under the approved lockout procedure.",
                    "Record pushrod travel, lining condition, drum/rotor condition, hoses, leaks, adjuster condition, and paired axle-end findings."
                  ]
                },
                {
                  "id": "service",
                  "title": "3. Service",
                  "items": [
                    "Use the specified spring-brake caging and wheel-end procedure only when authorized for the installed components.",
                    "Keep friction surfaces clean, replace required locking/safety hardware, and service axle ends as matched sets where required."
                  ]
                },
                {
                  "id": "return",
                  "title": "4. Inspect and dispatch",
                  "items": [
                    "Apply exact component torque and adjustment values with calibrated tools, then restore the air system and check leaks and warnings.",
                    "Complete FMCSA/fleet brake inspection and performance requirements, document measurements, and obtain required return-to-service approval."
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "diesel-service",
          "name": "Diesel service",
          "subsystems": [
            {
              "id": "fuel-filter",
              "name": "Fuel filter service",
              "subtitle": "Primary filter, water separator, primer",
              "diagramKind": "oil",
              "parts": [
                {
                  "id": 1,
                  "name": "Oil fill cap",
                  "x": 245,
                  "y": 105,
                  "shape": "cap",
                  "note": "Remove before drain to vent crankcase"
                },
                {
                  "id": 2,
                  "name": "Engine cover",
                  "x": 405,
                  "y": 180,
                  "shape": "engine",
                  "note": "Fasteners are often light torque plastic clips"
                },
                {
                  "id": 3,
                  "name": "Oil filter",
                  "x": 575,
                  "y": 270,
                  "shape": "filter",
                  "note": "Lubricate gasket before install"
                },
                {
                  "id": 4,
                  "name": "Drain plug",
                  "x": 405,
                  "y": 365,
                  "shape": "plug",
                  "note": "Replace crush washer when fitted"
                },
                {
                  "id": 5,
                  "name": "Skid / splash panel",
                  "x": 705,
                  "y": 340,
                  "shape": "panel",
                  "note": "Track fastener locations by size"
                }
              ],
              "tools": {
                "sockets": [
                  "10mm socket",
                  "13mm socket",
                  "15mm socket",
                  "36mm filter socket"
                ],
                "wrenches": [
                  "Filter strap wrench",
                  "13mm combination wrench"
                ],
                "specialty": [
                  "Fuel-safe drain pan",
                  "Priming pump where fitted",
                  "Shop towels",
                  "Eye protection"
                ]
              },
              "fasteners": [
                "Filter caps vary by engine family",
                "Drain valves are light torque plastic on many modules",
                "Bracket bolts commonly 13-15mm"
              ],
              "caution": "Prime and leak-test before returning a diesel vehicle to service.",
              "evidence": [
                {
                  "title": "Original WrenchAtlas diagram",
                  "scope": "Visual orientation only",
                  "confidence": "High for part-location teaching aid; not an OEM schematic",
                  "url": ""
                },
                {
                  "title": "NHTSA vPIC API",
                  "scope": "VIN identity data only",
                  "confidence": "Official public vehicle identity source when a VIN is decoded",
                  "url": "https://vpic.nhtsa.dot.gov/api/"
                },
                {
                  "title": "Community source requirement",
                  "scope": "Imported data packs",
                  "confidence": "Not accepted as verified unless source notes are present",
                  "url": ""
                }
              ],
              "sources": [],
              "quality": {
                "verificationLevel": "Open reference seed pack",
                "confidence": "Planning reference. Verify safety-critical values with official service data before final assembly.",
                "lastReviewed": "2026-07-09",
                "measurementNotes": [
                  "Torque conversions use 1 ft-lb = 1.355817948 N-m and are rounded to the nearest whole N-m.",
                  "Socket and wrench sizes describe common fastener heads for the selected reference, not a guarantee for every trim or prior repair.",
                  "VIN decoding identifies vehicle metadata; it does not prove installed component, trim, or fastener variations."
                ],
                "limitations": [
                  "No copied OEM/manufacturer schematics are included.",
                  "Wear limits, fluids, bleed order, torque sequence, and regulated procedures must come from official service information.",
                  "Previously repaired vehicles may have non-original fasteners."
                ]
              },
              "safety": [
                "Confirm the exact vehicle, installed component, and official procedure before safety-critical work.",
                "Work on a stable surface with rated supports, wheel chocks, eye protection, and appropriate gloves.",
                "Stop if the vehicle configuration, fastener, measurement, or service value does not match the reference pack."
              ],
              "workflow": [
                {
                  "id": "identify",
                  "title": "1. Identify",
                  "items": [
                    "Confirm VIN, year, make, model, engine, drivetrain, and installed component.",
                    "Review the evidence level, limitations, and official service source before disassembly."
                  ]
                },
                {
                  "id": "prepare",
                  "title": "2. Tool up",
                  "items": [
                    "Stage the listed sockets, wrenches, specialty tools, replacement parts, and protective equipment.",
                    "Inspect tools and verify that the torque wrench range covers every required value."
                  ]
                },
                {
                  "id": "repair",
                  "title": "3. Repair",
                  "items": [
                    "Follow official disassembly and installation order; record unexpected parts or prior modifications.",
                    "Keep removed hardware organized and protect hoses, wiring, seals, and machined surfaces."
                  ]
                },
                {
                  "id": "verify",
                  "title": "4. Torque and test",
                  "items": [
                    "Apply only verified service values with clean, serviceable hardware and a calibrated tool.",
                    "Complete the official post-repair inspection and functional test before return to service."
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "truck-ford-f350-2015",
      "mode": "truck",
      "type": "Truck Maintainer",
      "make": "Ford",
      "model": "F-350 Super Duty",
      "year": 2015,
      "trim": "6.7L diesel reference",
      "vinExample": "1FT8W3BT0FEA00000",
      "systems": [
        {
          "id": "air-brakes",
          "name": "Air brake system",
          "subsystems": [
            {
              "id": "drum-air-brake",
              "name": "Drive axle air drum brake",
              "subtitle": "Chamber, slack adjuster, shoes, drum",
              "diagramKind": "air-brake",
              "parts": [
                {
                  "id": 1,
                  "name": "Brake chamber",
                  "x": 160,
                  "y": 215,
                  "shape": "chamber",
                  "note": "Cage spring brake before disassembly"
                },
                {
                  "id": 2,
                  "name": "Slack adjuster",
                  "x": 315,
                  "y": 250,
                  "shape": "arm",
                  "note": "Check free stroke"
                },
                {
                  "id": 3,
                  "name": "S-cam shaft",
                  "x": 440,
                  "y": 245,
                  "shape": "shaft",
                  "note": "Inspect bushings and seals"
                },
                {
                  "id": 4,
                  "name": "Brake shoes",
                  "x": 590,
                  "y": 250,
                  "shape": "shoe",
                  "note": "Replace axle sets together"
                },
                {
                  "id": 5,
                  "name": "Drum",
                  "x": 735,
                  "y": 250,
                  "shape": "drum",
                  "note": "Measure against discard spec"
                }
              ],
              "tools": {
                "sockets": [
                  "15/16 in socket",
                  "1-1/8 in socket",
                  "1-1/2 in socket",
                  "33mm wheel socket"
                ],
                "wrenches": [
                  "9/16 in wrench",
                  "3/4 in wrench",
                  "15/16 in wrench"
                ],
                "specialty": [
                  "Wheel chocks",
                  "Brake spring tool",
                  "Brake cage bolt",
                  "Dial indicator",
                  "Heavy jack stands"
                ]
              },
              "fasteners": [
                "Brake chamber clamps: size varies by chamber",
                "Slack adjuster pinch bolts: common 9/16-3/4 in",
                "Wheel hardware: verify hub-piloted vs stud-piloted"
              ],
              "caution": "Heavy truck brake service can release stored spring and air energy. Follow the chamber manufacturer's procedure, fleet policy, and applicable FMCSA requirements.",
              "evidence": [
                {
                  "title": "Original WrenchAtlas diagram",
                  "scope": "Visual orientation only",
                  "confidence": "High for part-location teaching aid; not an OEM schematic",
                  "url": ""
                },
                {
                  "title": "NHTSA vPIC API",
                  "scope": "VIN identity data only",
                  "confidence": "Official public vehicle identity source when a VIN is decoded",
                  "url": "https://vpic.nhtsa.dot.gov/api/"
                },
                {
                  "title": "Community source requirement",
                  "scope": "Imported data packs",
                  "confidence": "Not accepted as verified unless source notes are present",
                  "url": ""
                }
              ],
              "sources": [
                {
                  "title": "FMCSA brake regulations - 49 CFR Part 393 Subpart C",
                  "scope": "Commercial brake-system safety requirements",
                  "confidence": "Current federal regulatory source; exact applicability depends on vehicle and operation",
                  "url": "https://www.ecfr.gov/current/title-49/part-393/subpart-C"
                }
              ],
              "quality": {
                "verificationLevel": "Regulated heavy-truck field reference",
                "confidence": "Useful for staging and component orientation; exact chamber, axle, brake, and fleet data control.",
                "lastReviewed": "2026-07-09",
                "measurementNotes": [
                  "Torque conversions use 1 ft-lb = 1.355817948 N-m and are rounded to the nearest whole N-m.",
                  "Socket and wrench sizes describe common fastener heads for the selected reference, not a guarantee for every trim or prior repair.",
                  "VIN decoding identifies vehicle metadata; it does not prove installed component, trim, or fastener variations.",
                  "Air pressure, pushrod travel, lining thickness, drum/rotor limits, and brake balance require calibrated measurement against the exact system standard."
                ],
                "limitations": [
                  "No copied OEM/manufacturer schematics are included.",
                  "Wear limits, fluids, bleed order, torque sequence, and regulated procedures must come from official service information.",
                  "Previously repaired vehicles may have non-original fasteners.",
                  "Brake chamber type, axle family, automatic slack adjuster design, wheel end, and fleet configuration vary substantially.",
                  "This pack does not authorize chamber disassembly, annual inspection sign-off, or return to commercial service."
                ]
              },
              "safety": [
                "Park on a hard level surface, chock the vehicle, follow lockout policy, and verify the parking/emergency brake state before entering the wheel end.",
                "Spring brake chambers store lethal mechanical energy. Never remove a spring-brake clamp band or open a chamber unless the exact approved service procedure authorizes it.",
                "Use stands and lifting equipment rated for the actual axle load; never rely on air suspension or a jack alone.",
                "After service, complete required adjustment, leak, warning-device, balance, inspection, and brake-performance checks before dispatch."
              ],
              "workflow": [
                {
                  "id": "identify",
                  "title": "1. Identify the brake",
                  "items": [
                    "Record VIN, axle, chamber size, slack-adjuster type, brake model, wheel-end configuration, and fleet work order.",
                    "Obtain the exact manufacturer and fleet procedure before releasing stored energy or removing hardware."
                  ]
                },
                {
                  "id": "secure",
                  "title": "2. Secure and measure",
                  "items": [
                    "Chock, isolate, support, and verify system pressure state under the approved lockout procedure.",
                    "Record pushrod travel, lining condition, drum/rotor condition, hoses, leaks, adjuster condition, and paired axle-end findings."
                  ]
                },
                {
                  "id": "service",
                  "title": "3. Service",
                  "items": [
                    "Use the specified spring-brake caging and wheel-end procedure only when authorized for the installed components.",
                    "Keep friction surfaces clean, replace required locking/safety hardware, and service axle ends as matched sets where required."
                  ]
                },
                {
                  "id": "return",
                  "title": "4. Inspect and dispatch",
                  "items": [
                    "Apply exact component torque and adjustment values with calibrated tools, then restore the air system and check leaks and warnings.",
                    "Complete FMCSA/fleet brake inspection and performance requirements, document measurements, and obtain required return-to-service approval."
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "diesel-service",
          "name": "Diesel service",
          "subsystems": [
            {
              "id": "fuel-filter",
              "name": "Fuel filter service",
              "subtitle": "Primary filter, water separator, primer",
              "diagramKind": "oil",
              "parts": [
                {
                  "id": 1,
                  "name": "Oil fill cap",
                  "x": 245,
                  "y": 105,
                  "shape": "cap",
                  "note": "Remove before drain to vent crankcase"
                },
                {
                  "id": 2,
                  "name": "Engine cover",
                  "x": 405,
                  "y": 180,
                  "shape": "engine",
                  "note": "Fasteners are often light torque plastic clips"
                },
                {
                  "id": 3,
                  "name": "Oil filter",
                  "x": 575,
                  "y": 270,
                  "shape": "filter",
                  "note": "Lubricate gasket before install"
                },
                {
                  "id": 4,
                  "name": "Drain plug",
                  "x": 405,
                  "y": 365,
                  "shape": "plug",
                  "note": "Replace crush washer when fitted"
                },
                {
                  "id": 5,
                  "name": "Skid / splash panel",
                  "x": 705,
                  "y": 340,
                  "shape": "panel",
                  "note": "Track fastener locations by size"
                }
              ],
              "tools": {
                "sockets": [
                  "10mm socket",
                  "13mm socket",
                  "15mm socket",
                  "36mm filter socket"
                ],
                "wrenches": [
                  "Filter strap wrench",
                  "13mm combination wrench"
                ],
                "specialty": [
                  "Fuel-safe drain pan",
                  "Priming pump where fitted",
                  "Shop towels",
                  "Eye protection"
                ]
              },
              "fasteners": [
                "Filter caps vary by engine family",
                "Drain valves are light torque plastic on many modules",
                "Bracket bolts commonly 13-15mm"
              ],
              "caution": "Prime and leak-test before returning a diesel vehicle to service.",
              "evidence": [
                {
                  "title": "Original WrenchAtlas diagram",
                  "scope": "Visual orientation only",
                  "confidence": "High for part-location teaching aid; not an OEM schematic",
                  "url": ""
                },
                {
                  "title": "NHTSA vPIC API",
                  "scope": "VIN identity data only",
                  "confidence": "Official public vehicle identity source when a VIN is decoded",
                  "url": "https://vpic.nhtsa.dot.gov/api/"
                },
                {
                  "title": "Community source requirement",
                  "scope": "Imported data packs",
                  "confidence": "Not accepted as verified unless source notes are present",
                  "url": ""
                }
              ],
              "sources": [],
              "quality": {
                "verificationLevel": "Open reference seed pack",
                "confidence": "Planning reference. Verify safety-critical values with official service data before final assembly.",
                "lastReviewed": "2026-07-09",
                "measurementNotes": [
                  "Torque conversions use 1 ft-lb = 1.355817948 N-m and are rounded to the nearest whole N-m.",
                  "Socket and wrench sizes describe common fastener heads for the selected reference, not a guarantee for every trim or prior repair.",
                  "VIN decoding identifies vehicle metadata; it does not prove installed component, trim, or fastener variations."
                ],
                "limitations": [
                  "No copied OEM/manufacturer schematics are included.",
                  "Wear limits, fluids, bleed order, torque sequence, and regulated procedures must come from official service information.",
                  "Previously repaired vehicles may have non-original fasteners."
                ]
              },
              "safety": [
                "Confirm the exact vehicle, installed component, and official procedure before safety-critical work.",
                "Work on a stable surface with rated supports, wheel chocks, eye protection, and appropriate gloves.",
                "Stop if the vehicle configuration, fastener, measurement, or service value does not match the reference pack."
              ],
              "workflow": [
                {
                  "id": "identify",
                  "title": "1. Identify",
                  "items": [
                    "Confirm VIN, year, make, model, engine, drivetrain, and installed component.",
                    "Review the evidence level, limitations, and official service source before disassembly."
                  ]
                },
                {
                  "id": "prepare",
                  "title": "2. Tool up",
                  "items": [
                    "Stage the listed sockets, wrenches, specialty tools, replacement parts, and protective equipment.",
                    "Inspect tools and verify that the torque wrench range covers every required value."
                  ]
                },
                {
                  "id": "repair",
                  "title": "3. Repair",
                  "items": [
                    "Follow official disassembly and installation order; record unexpected parts or prior modifications.",
                    "Keep removed hardware organized and protect hoses, wiring, seals, and machined surfaces."
                  ]
                },
                {
                  "id": "verify",
                  "title": "4. Torque and test",
                  "items": [
                    "Apply only verified service values with clean, serviceable hardware and a calibrated tool.",
                    "Complete the official post-repair inspection and functional test before return to service."
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "brakes",
          "name": "Braking system",
          "subsystems": [
            {
              "id": "front-disc",
              "name": "Front disc brake",
              "subtitle": "Caliper, pads, rotor, hub",
              "diagramKind": "brake",
              "parts": [
                {
                  "id": 1,
                  "name": "Caliper assembly",
                  "x": 145,
                  "y": 250,
                  "shape": "caliper",
                  "note": "Bracket bolts commonly use larger sockets"
                },
                {
                  "id": 2,
                  "name": "Inner brake pad",
                  "x": 275,
                  "y": 250,
                  "shape": "pad",
                  "note": "Inspect wear pattern before reusing hardware"
                },
                {
                  "id": 3,
                  "name": "Pad retaining clips",
                  "x": 358,
                  "y": 192,
                  "shape": "clip",
                  "note": "Replace if heat damaged or loose"
                },
                {
                  "id": 4,
                  "name": "Brake rotor",
                  "x": 475,
                  "y": 250,
                  "shape": "rotor",
                  "note": "Measure thickness and runout"
                },
                {
                  "id": 5,
                  "name": "Wheel hub and bearing",
                  "x": 675,
                  "y": 250,
                  "shape": "hub",
                  "note": "Clean mating face before rotor install"
                },
                {
                  "id": 6,
                  "name": "Caliper mounting bolts",
                  "x": 640,
                  "y": 375,
                  "shape": "bolt",
                  "note": "Use threadlocker where specified"
                },
                {
                  "id": 7,
                  "name": "Dust shield",
                  "x": 800,
                  "y": 250,
                  "shape": "shield",
                  "note": "Do not bend into rotor path"
                }
              ],
              "tools": {
                "sockets": [
                  "10mm socket",
                  "12mm socket",
                  "14mm socket",
                  "17mm socket",
                  "19mm lug socket"
                ],
                "wrenches": [
                  "14mm combination wrench",
                  "17mm combination wrench"
                ],
                "specialty": [
                  "Brake caliper compressor",
                  "Torque wrench 10-150 ft-lb",
                  "Brake cleaner",
                  "Wire brush"
                ]
              },
              "fasteners": [
                "Guide pins: common 12-14mm heads",
                "Caliper bracket bolts: common 17-19mm heads",
                "Wheel lug nuts: verify vehicle-specific size"
              ],
              "caution": "Brake torque values vary by exact trim. Verify with an official service source.",
              "evidence": [
                {
                  "title": "Original WrenchAtlas diagram",
                  "scope": "Visual orientation only",
                  "confidence": "High for part-location teaching aid; not an OEM schematic",
                  "url": ""
                },
                {
                  "title": "NHTSA vPIC API",
                  "scope": "VIN identity data only",
                  "confidence": "Official public vehicle identity source when a VIN is decoded",
                  "url": "https://vpic.nhtsa.dot.gov/api/"
                },
                {
                  "title": "Community source requirement",
                  "scope": "Imported data packs",
                  "confidence": "Not accepted as verified unless source notes are present",
                  "url": ""
                }
              ],
              "sources": [],
              "quality": {
                "verificationLevel": "Open reference seed pack",
                "confidence": "Planning reference. Verify safety-critical values with official service data before final assembly.",
                "lastReviewed": "2026-07-09",
                "measurementNotes": [
                  "Torque conversions use 1 ft-lb = 1.355817948 N-m and are rounded to the nearest whole N-m.",
                  "Socket and wrench sizes describe common fastener heads for the selected reference, not a guarantee for every trim or prior repair.",
                  "VIN decoding identifies vehicle metadata; it does not prove installed component, trim, or fastener variations."
                ],
                "limitations": [
                  "No copied OEM/manufacturer schematics are included.",
                  "Wear limits, fluids, bleed order, torque sequence, and regulated procedures must come from official service information.",
                  "Previously repaired vehicles may have non-original fasteners."
                ]
              },
              "safety": [
                "Confirm the exact vehicle, installed component, and official procedure before safety-critical work.",
                "Work on a stable surface with rated supports, wheel chocks, eye protection, and appropriate gloves.",
                "Stop if the vehicle configuration, fastener, measurement, or service value does not match the reference pack."
              ],
              "workflow": [
                {
                  "id": "identify",
                  "title": "1. Identify",
                  "items": [
                    "Confirm VIN, year, make, model, engine, drivetrain, and installed component.",
                    "Review the evidence level, limitations, and official service source before disassembly."
                  ]
                },
                {
                  "id": "prepare",
                  "title": "2. Tool up",
                  "items": [
                    "Stage the listed sockets, wrenches, specialty tools, replacement parts, and protective equipment.",
                    "Inspect tools and verify that the torque wrench range covers every required value."
                  ]
                },
                {
                  "id": "repair",
                  "title": "3. Repair",
                  "items": [
                    "Follow official disassembly and installation order; record unexpected parts or prior modifications.",
                    "Keep removed hardware organized and protect hoses, wiring, seals, and machined surfaces."
                  ]
                },
                {
                  "id": "verify",
                  "title": "4. Torque and test",
                  "items": [
                    "Apply only verified service values with clean, serviceable hardware and a calibrated tool.",
                    "Complete the official post-repair inspection and functional test before return to service."
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "schemaVersion": "wrenchatlas.open-reference.v1.5",
  "sources": {
    "nhtsa": "https://vpic.nhtsa.dot.gov/api/",
    "policy": "https://developer.chrome.com/docs/webstore/program-policies/policies",
    "freedomToFix": "https://www.whitehouse.gov/presidential-actions/2026/06/lowering-the-cost-of-living-by-promoting-the-freedom-to-fix/",
    "warranty": "https://consumer.ftc.gov/articles/auto-warranties-and-auto-service-contracts",
    "vehicleSoftwareRepair": "https://www.copyright.gov/title37/201/37cfr201-40.html",
    "commercialBrakes": "https://www.ecfr.gov/current/title-49/part-393/subpart-C",
    "hullIdentification": "https://www.ecfr.gov/current/title-33/part-181/subpart-C",
    "aircraftMaintenanceAuthority": "https://www.ecfr.gov/current/title-14/part-43/section-43.3",
    "aircraftPreventiveMaintenance": "https://www.ecfr.gov/current/title-14/part-43/appendix-Appendix%20A%20to%20Part%2043",
    "locomotiveSafety": "https://www.ecfr.gov/current/title-49/part-229",
    "freightBrakes": "https://www.ecfr.gov/current/title-49/part-232",
    "blueSignalProtection": "https://www.ecfr.gov/current/title-49/part-218/subpart-B"
  }
};
