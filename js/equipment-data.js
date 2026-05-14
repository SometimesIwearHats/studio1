/*
 * Equipment Data
 *
 * Each equipment item supports multiple images and optional manufacturer/source links.
 * Recommended folder convention for equipment images:
 *   assets/images/equipment/c-401-leg-press/01-main.webp
 *   assets/images/equipment/c-401-leg-press/02-side.webp
 *   assets/images/equipment/c-401-leg-press/03-detail.webp
 *
 * For unknown equipment names, keep the folder slug as the model code:
 *   assets/images/equipment/c-423/01-main.webp
 *   assets/images/equipment/u-157/01-main.webp
 *
 * Recommended image file names:
 *   01-main.webp
 *   02-side.webp
 *   03-detail.webp
 *   04-in-use.webp
 *
 * Update uncertain equipment entries later once photos and specifications are confirmed.
 */

window.EQUIPMENT_ITEMS = [
    {
        code: "C-401",
        name: "40 Degree Leg Press",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "A heavy-duty lower-body machine designed for controlled leg pressing movements.",
        bestFor: "Quads, glutes, hamstrings",
        images: [
            {
                src: "assets/images/equipment/c-401-leg-press/01-main.webp",
                alt: "Atlantis C-401 40 Degree Leg Press at Studio 1"
            },
            {
                src: "assets/images/equipment/c-401-leg-press/02-side.webp",
                alt: "Side view of the Atlantis C-401 Leg Press at Studio 1"
            },
            {
                src: "assets/images/equipment/c-401-leg-press/03-detail.webp",
                alt: "Detail view of the Atlantis C-401 Leg Press at Studio 1"
            },
            {
                src: "assets/images/equipment/c-401-leg-press/04-extra.webp",
                alt: "Additional view of the Atlantis C-401 Leg Press at Studio 1"
            }
        ],
        sourceUrl: "https://atlantisstrength.com/gym-equipment/c401"
    },
    {
        code: "M-118",
        name: "Atlantis M-118",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/m-118/01-main.webp",
                alt: "Atlantis M-118 at Studio 1"
            },
            {
                src: "assets/images/equipment/m-118/02-side.webp",
                alt: "Side view of the Atlantis M-118 at Studio 1"
            },
            {
                src: "assets/images/equipment/m-118/03-detail.webp",
                alt: "Detail view of the Atlantis M-118 at Studio 1"
            },
            {
                src: "assets/images/equipment/m-118/04-extra.webp",
                alt: "Additional view of the Atlantis M-118 at Studio 1"
            }
        ]
    },
    {
        code: "C-423",
        name: "Atlantis C-423",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/c-423/01-main.jpg",
                alt: "Atlantis C-423 at Studio 1"
            },
            {
                src: "assets/images/equipment/c-423/02-side.jpg",
                alt: "Side view of the Atlantis C-423 at Studio 1"
            }
        ]
    },
    {
        code: "C-329",
        name: "Atlantis C-329",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/c-329/01-main.webp",
                alt: "Atlantis C-329 at Studio 1"
            },
            {
                src: "assets/images/equipment/c-329/02-side.webp",
                alt: "Side view of the Atlantis C-329 at Studio 1"
            },
            {
                src: "assets/images/equipment/c-329/03-detail.webp",
                alt: "Detail view of the Atlantis C-329 at Studio 1"
            },
            {
                src: "assets/images/equipment/c-329/04-extra.webp",
                alt: "Additional view of the Atlantis C-329 at Studio 1"
            }
        ]
    },
    {
        code: "C-118",
        name: "Atlantis C-118",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/c-118/01-main.webp",
                alt: "Atlantis C-118 at Studio 1"
            },
            {
                src: "assets/images/equipment/c-118/02-side.webp",
                alt: "Side view of the Atlantis C-118 at Studio 1"
            },
            {
                src: "assets/images/equipment/c-118/03-detail.webp",
                alt: "Detail view of the Atlantis C-118 at Studio 1"
            },
            {
                src: "assets/images/equipment/c-118/04-extra.webp",
                alt: "Additional view of the Atlantis C-118 at Studio 1"
            }
        ]
    },
    {
        code: "U-403",
        name: "Atlantis U-403",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/u-403/01-main.webp",
                alt: "Atlantis U-403 at Studio 1"
            },
            {
                src: "assets/images/equipment/u-403/02-side.webp",
                alt: "Side view of the Atlantis U-403 at Studio 1"
            },
            {
                src: "assets/images/equipment/u-403/03-detail.webp",
                alt: "Detail view of the Atlantis U-403 at Studio 1"
            },
            {
                src: "assets/images/equipment/u-403/04-extra.webp",
                alt: "Additional view of the Atlantis U-403 at Studio 1"
            }
        ]
    },
    {
        code: "M-219",
        name: "Atlantis M-219",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/m-219/01-main.webp",
                alt: "Atlantis M-219 at Studio 1"
            },
            {
                src: "assets/images/equipment/m-219/02-side.webp",
                alt: "Side view of the Atlantis M-219 at Studio 1"
            },
            {
                src: "assets/images/equipment/m-219/03-detail.webp",
                alt: "Detail view of the Atlantis M-219 at Studio 1"
            },
            {
                src: "assets/images/equipment/m-219/04-extra.webp",
                alt: "Additional view of the Atlantis M-219 at Studio 1"
            }
        ]
    },
    {
        code: "C-106 / C-406",
        name: "Atlantis C-106 / C-406",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/c-106-c-406/01-main.webp",
                alt: "Atlantis C-106 / C-406 at Studio 1"
            },
            {
                src: "assets/images/equipment/c-106-c-406/02-side.webp",
                alt: "Side view of the Atlantis C-106 / C-406 at Studio 1"
            },
            {
                src: "assets/images/equipment/c-106-c-406/03-detail.webp",
                alt: "Detail view of the Atlantis C-106 / C-406 at Studio 1"
            },
            {
                src: "assets/images/equipment/c-106-c-406/04-extra.webp",
                alt: "Additional view of the Atlantis C-106 / C-406 at Studio 1"
            }
        ]
    },
    {
        code: "U-105",
        name: "Atlantis U-105",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/u-105/01-main.webp",
                alt: "Atlantis U-105 at Studio 1"
            },
            {
                src: "assets/images/equipment/u-105/02-side.webp",
                alt: "Side view of the Atlantis U-105 at Studio 1"
            },
            {
                src: "assets/images/equipment/u-105/03-detail.webp",
                alt: "Detail view of the Atlantis U-105 at Studio 1"
            },
            {
                src: "assets/images/equipment/u-105/04-extra.webp",
                alt: "Additional view of the Atlantis U-105 at Studio 1"
            }
        ]
    },
    {
        code: "U-106",
        name: "Atlantis U-106",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/u-106/01-main.webp",
                alt: "Atlantis U-106 placeholder image"
            }
        ]
    },
    {
        code: "D-131",
        name: "Atlantis D-131",
        brand: "Atlantis",
        category: "Free Weights",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/d-131/01-main.png",
                alt: "Atlantis D-131 at Studio 1"
            }
        ]
    },
    {
        code: "U-149",
        name: "Atlantis U-149",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/u-149/01-main.webp",
                alt: "Atlantis U-149 at Studio 1"
            },
            {
                src: "assets/images/equipment/u-149/02-side.webp",
                alt: "Side view of the Atlantis U-149 at Studio 1"
            },
            {
                src: "assets/images/equipment/u-149/03-detail.webp",
                alt: "Detail view of the Atlantis U-149 at Studio 1"
            }
        ]
    },
    {
        code: "U-140",
        name: "Atlantis U-140",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/u-140/01-main.jpg",
                alt: "Atlantis U-140 at Studio 1"
            }
        ]
    },
    {
        code: "NM-510",
        name: "Atlantis NM-510",
        brand: "Atlantis",
        category: "Functional Training",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/nm-510/01-main.webp",
                alt: "Atlantis NM-510 at Studio 1"
            },
            {
                src: "assets/images/equipment/nm-510/02-side.webp",
                alt: "Side view of the Atlantis NM-510 at Studio 1"
            },
            {
                src: "assets/images/equipment/nm-510/03-detail.webp",
                alt: "Detail view of the Atlantis NM-510 at Studio 1"
            },
            {
                src: "assets/images/equipment/nm-510/04-extra.webp",
                alt: "Additional view of the Atlantis NM-510 at Studio 1"
            }
        ]
    },
    {
        code: "U-157",
        name: "Atlantis U-157",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/u-157/01-main.webp",
                alt: "Atlantis U-157 placeholder image"
            }
        ]
    },
    {
        code: "E-154 / E-155",
        name: "Atlantis E-154 / E-155",
        brand: "Atlantis",
        category: "Cardio Equipment",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/e-154-e-155/01-main.webp",
                alt: "Atlantis E-154 / E-155 at Studio 1"
            },
            {
                src: "assets/images/equipment/e-154-e-155/02-side.webp",
                alt: "Side view of the Atlantis E-154 / E-155 at Studio 1"
            },
            {
                src: "assets/images/equipment/e-154-e-155/03-detail.webp",
                alt: "Detail view of the Atlantis E-154 / E-155 at Studio 1"
            },
            {
                src: "assets/images/equipment/e-154-e-155/04-extra.webp",
                alt: "Additional view of the Atlantis E-154 / E-155 at Studio 1"
            }
        ]
    },
    {
        code: "Bench Press",
        name: "Atlantis Bench Press",
        brand: "Atlantis",
        category: "Benches & Racks",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/bench-press/01-main.jpg",
                alt: "Atlantis Bench Press placeholder image"
            }
        ]
    },
    {
        code: "P-156",
        name: "Atlantis P-156",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/p-156/01-main.webp",
                alt: "Atlantis P-156 at Studio 1"
            },
            {
                src: "assets/images/equipment/p-156/02-side.webp",
                alt: "Side view of the Atlantis P-156 at Studio 1"
            },
            {
                src: "assets/images/equipment/p-156/03-detail.webp",
                alt: "Detail view of the Atlantis P-156 at Studio 1"
            },
            {
                src: "assets/images/equipment/p-156/04-extra.webp",
                alt: "Additional view of the Atlantis P-156 at Studio 1"
            }
        ]
    },
    {
        code: "NM-500",
        name: "Atlantis NM-500",
        brand: "Atlantis",
        category: "Functional Training",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/nm-500/01-main.webp",
                alt: "Atlantis NM-500 at Studio 1"
            },
            {
                src: "assets/images/equipment/nm-500/02-side.webp",
                alt: "Side view of the Atlantis NM-500 at Studio 1"
            },
            {
                src: "assets/images/equipment/nm-500/03-detail.webp",
                alt: "Detail view of the Atlantis NM-500 at Studio 1"
            },
            {
                src: "assets/images/equipment/nm-500/04-extra.webp",
                alt: "Additional view of the Atlantis NM-500 at Studio 1"
            }
        ]
    },
    {
        code: "D-132",
        name: "Atlantis D-132",
        brand: "Atlantis",
        category: "Free Weights",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/d-132/01-main.webp",
                alt: "Atlantis D-132 at Studio 1"
            },
            {
                src: "assets/images/equipment/d-132/02-side.webp",
                alt: "Side view of the Atlantis D-132 at Studio 1"
            },
            {
                src: "assets/images/equipment/d-132/03-detail.webp",
                alt: "Detail view of the Atlantis D-132 at Studio 1"
            },
            {
                src: "assets/images/equipment/d-132/04-extra.webp",
                alt: "Additional view of the Atlantis D-132 at Studio 1"
            }
        ]
    },
    {
        code: "D-512",
        name: "Atlantis D-512",
        brand: "Atlantis",
        category: "Free Weights",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/d-512/01-main.png",
                alt: "Atlantis D-512 at Studio 1"
            }
        ]
    },
    {
        code: "D-126",
        name: "Atlantis D-126",
        brand: "Atlantis",
        category: "Free Weights",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/d-126/01-main.webp",
                alt: "Atlantis D-126 at Studio 1"
            },
            {
                src: "assets/images/equipment/d-126/02-side.webp",
                alt: "Side view of the Atlantis D-126 at Studio 1"
            },
            {
                src: "assets/images/equipment/d-126/03-detail.webp",
                alt: "Detail view of the Atlantis D-126 at Studio 1"
            },
            {
                src: "assets/images/equipment/d-126/04-extra.webp",
                alt: "Additional view of the Atlantis D-126 at Studio 1"
            }
        ]
    },
    {
        code: "P-443 / P-543",
        name: "Atlantis P-443 / P-543",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/p-443-p-543/01-main.webp",
                alt: "Atlantis P-443 / P-543 at Studio 1"
            },
            {
                src: "assets/images/equipment/p-443-p-543/02-side.webp",
                alt: "Side view of the Atlantis P-443 / P-543 at Studio 1"
            },
            {
                src: "assets/images/equipment/p-443-p-543/03-detail.webp",
                alt: "Detail view of the Atlantis P-443 / P-543 at Studio 1"
            },
            {
                src: "assets/images/equipment/p-443-p-543/04-extra.webp",
                alt: "Additional view of the Atlantis P-443 / P-543 at Studio 1"
            }
        ]
    },
    {
        code: "E-449 / E-549",
        name: "Atlantis E-449 / E-549",
        brand: "Atlantis",
        category: "Cardio Equipment",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/e-449-e-549/01-main.webp",
                alt: "Atlantis E-449 / E-549 at Studio 1"
            },
            {
                src: "assets/images/equipment/e-449-e-549/02-side.webp",
                alt: "Side view of the Atlantis E-449 / E-549 at Studio 1"
            },
            {
                src: "assets/images/equipment/e-449-e-549/03-detail.webp",
                alt: "Detail view of the Atlantis E-449 / E-549 at Studio 1"
            },
            {
                src: "assets/images/equipment/e-449-e-549/04-extra.webp",
                alt: "Additional view of the Atlantis E-449 / E-549 at Studio 1"
            }
        ]
    },
    {
        code: "P-441",
        name: "Atlantis P-441",
        brand: "Atlantis",
        category: "Strength Machines",
        description: "Equipment details will be updated once Studio 1 photos and specifications are added.",
        bestFor: "To be confirmed",
        images: [
            {
                src: "assets/images/equipment/p-441/01-main.webp",
                alt: "Atlantis P-441 placeholder image"
            }
        ]
    },
    {
        code: "CR-210",
        name: "Performance Treadmill",
        brand: "NordicTrack",
        category: "Cardio Equipment",
        description: "High-performance treadmill with built-in coaching programs and variable incline.",
        bestFor: "Running, speed work, endurance",
        images: [
            {
                src: "assets/images/equipment/cr-210-treadmill/01-main.jpg",
                alt: "Studio 1 NordicTrack Performance Treadmill"
            }
        ],
        sourceUrl: "https://www.nordictrack.com/treadmills"
    },
    // Misc images have been added as general Studio 1 cardio or functional equipment cards.
    {
        code: "Arc Trainer",
        name: "Arc Trainer",
        brand: "Studio 1",
        category: "Cardio Equipment",
        description: "Low-impact cardio machine for total-body interval and endurance work.",
        bestFor: "Cardio, endurance, low-impact training",
        images: [
            {
                src: "assets/images/equipment/Arc-trainer/01-main.webp",
                alt: "Studio 1 Arc Trainer"
            },
            {
                src: "assets/images/equipment/Arc-trainer/02-side.webp",
                alt: "Side view of the Studio 1 Arc Trainer"
            }
        ]
    },
    {
        code: "Studio 1 Cardio Machines",
        name: "Studio 1 Cardio Machines",
        brand: "Studio 1",
        category: "Cardio Equipment",
        description: "A selection of cardio machines that support warmups, conditioning, and interval training.",
        bestFor: "Cardio circuits and conditioning",
        images: [
            {
                src: "assets/images/equipment/misc/cardiomachines.jpg",
                alt: "Studio 1 cardio machines"
            }
        ]
    },
    {
        code: "Studio 1 Bikes",
        name: "Studio 1 Bikes",
        brand: "Studio 1",
        category: "Cardio Equipment",
        description: "Indoor bikes for cycling, endurance, and interval training at Studio 1.",
        bestFor: "Cycling, endurance, HIIT",
        images: [
            {
                src: "assets/images/equipment/misc/bikes.jpg",
                alt: "Studio 1 bikes"
            }
        ]
    },
    {
        code: "Studio 1 Elliptical",
        name: "Studio 1 Elliptical",
        brand: "Studio 1",
        category: "Cardio Equipment",
        description: "Elliptical trainer for low-impact cardio and total-body conditioning.",
        bestFor: "Cardio, low-impact training",
        images: [
            {
                src: "assets/images/equipment/misc/elyptical.jpg",
                alt: "Studio 1 elliptical machine"
            }
        ]
    },
    {
        code: "Studio 1 Rowing Machine",
        name: "Studio 1 Rowing Machine",
        brand: "Studio 1",
        category: "Cardio Equipment",
        description: "Rowing machine for full-body cardio and conditioning workouts.",
        bestFor: "Rowing, conditioning, total-body cardio",
        images: [
            {
                src: "assets/images/equipment/misc/row.jpg",
                alt: "Studio 1 rowing machine"
            }
        ]
    },
    {
        code: "Studio 1 Step Trainer",
        name: "Studio 1 Step Trainer",
        brand: "Studio 1",
        category: "Cardio Equipment",
        description: "Step trainer for leg endurance, cardio intervals, and plyometric conditioning.",
        bestFor: "Step training, cardio, endurance",
        images: [
            {
                src: "assets/images/equipment/misc/steptrainer.jpg",
                alt: "Studio 1 step trainer"
            }
        ]
    },
    {
        code: "Studio 1 Bag & Rope Training",
        name: "Studio 1 Bag & Rope Training",
        brand: "Studio 1",
        category: "Functional Training",
        description: "Functional bag and rope equipment for conditioning, agility, and strength drills.",
        bestFor: "Functional training, conditioning",
        images: [
            {
                src: "assets/images/equipment/misc/bag and rope.jpg",
                alt: "Studio 1 bag and rope functional training"
            }
        ]
    },
    {
        code: "Studio 1 Monkey Bars",
        name: "Studio 1 Monkey Bars",
        brand: "Studio 1",
        category: "Functional Training",
        description: "Monkey bars for bodyweight movement, grip strength, and functional agility training.",
        bestFor: "Grip strength, agility, bodyweight training",
        images: [
            {
                src: "assets/images/equipment/misc/monkeybars.jpg",
                alt: "Studio 1 monkey bars"
            }
        ]
    },
    {
        code: "Studio 1 Sled & Agility Ladder",
        name: "Studio 1 Sled & Agility Ladder",
        brand: "Studio 1",
        category: "Functional Training",
        description: "Sled and agility ladder tools for speed, conditioning, and functional drills.",
        bestFor: "Speed, agility, conditioning",
        images: [
            {
                src: "assets/images/equipment/misc/sledandladder.jpg",
                alt: "Studio 1 sled and agility ladder"
            }
        ]
    },
    {
        code: "Studio 1 Inner Leg Machine",
        name: "Studio 1 Inner Leg Machine",
        brand: "Studio 1",
        category: "Strength Machines",
        description: "Inner leg machine for adductor and hip stability training.",
        bestFor: "Inner thigh strength, hip stability",
        images: [
            {
                src: "assets/images/equipment/misc/insideleg.jpg",
                alt: "Studio 1 inner leg machine"
            }
        ]
    },
    {
        code: "FW-120",
        name: "Adjustable Dumbbells",
        brand: "Bowflex",
        category: "Free Weights",
        description: "Space-saving adjustable dumbbells for progressive strength training.",
        bestFor: "Free weight circuits, strength, toning",
        images: [
            {
                src: "assets/images/equipment/fw-120-dumbbells/01-main.jpg",
                alt: "Studio 1 Bowflex adjustable dumbbells"
            }
        ]
    },
    {
        code: "FN-310",
        name: "Functional Trainer",
        brand: "Hoist",
        category: "Functional Training",
        description: "Dual-adjustable pulley machine for cable-based functional strength training.",
        bestFor: "Core, pull movements, resistance training",
        images: [
            {
                src: "assets/images/equipment/fn-310-functional-trainer/01-main.webp",
                alt: "Hoist functional trainer at Studio 1"

            }
        ]
    },
    {
        code: "BW-205",
        name: "Olympic Power Rack",
        brand: "Rogue",
        category: "Benches & Racks",
        description: "Heavy-duty power rack with safety bars and pull-up station.",
        bestFor: "Squats, bench press, powerlifting",
        images: [
            {
                src: "assets/images/equipment/bw-205-power-rack/01-main.webp",
                alt: "Studio 1 Rogue Olympic Power Rack"
            },
            {
                src: "assets/images/equipment/bw-205-power-rack/02-side.webp",
                alt: "Rogue power rack safety bar setup at Studio 1"
            }
        ],
        sourceUrl: "https://www.roguefitness.com/"
    }
];
