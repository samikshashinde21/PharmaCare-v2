const products = [
  {
    name: "Dettol Antiseptic Liquid Bottle Of 550 Ml",
    image: "/images/dettol_antiseptic.jpg",
    description:
      "Dettol is a brand of cleaning supplies and sanitiser and sterile, presented in 1932 and the producer claimed by the Anglo-Dutch organization Reckitt Benckiser. In Germany, it is sold under the name Sagrotan. Preceding 2002, some Dettol items were marked Detox. Dettol Antiseptic Liquid is a comprehensive use item utilized for security against germs that has been suggested by clinical experts and trusted by moms. Dettol Antiseptic Liquid eliminates germs from skin, shields from contaminations brought about by cuts and scratches and can likewise be utilized as a family sanitiser on home surfaces and in clothing.",
    brand: "Dettol",
    category: "Skin Care",
    price: 180.00,
    countInStock: 10,
    rating: 4.5,
    numReviews: 1159,
  },
  {
    name: "Bpl Smart Oxy Finger Tip Pulse Black Oximeter (Black)",
    image: "/images/bpl_oximeter.jpg",
    description:
      "The BPL Pulse Oximeter is used to measure your pulse rate and oxygen levels in the blood, and it comes in a small, easy-to-use form. Pulse oximeters are used in many medical cases mostly relating to lungs and breathing issues, for example during or after surgery, to check how the lung treatments are progressing, to monitor the body's ability to handle physical activity, to determine whether a person requires a ventilator if their lungs aren’t providing enough oxygen and many other similar situations.",
    brand: "BPL",
    category: "Health Devices",
    price: 1080.00,
    countInStock: 15,
    rating: 4.0,
    numReviews: 294,
  },
  {
    name: "Everherb Ashwagandha - Immunity Booster Capsules - Bottle Of 60",
    image: "/images/everherb_ashwagandha.jpg",
    description:
      "EverHerb Ashwagandha is a health supplement and an ayurvedic formula that contains Ashwagandha extract from roots of the Ashwagandha plant. One of the most revered herbs in Ayurveda, Ashwagandha helps the body resist physiological and psychological stress by enabling it to reserve and sustain vital energy all through the day and promoting a sound sleep during the night.",
    brand: "EverHerb",
    category: "Supplements",
    price: 539.00,
    countInStock: 20,
    rating: 4.2,
    numReviews: 322,
  }
  ,
    {
      name: "Amrutanjan Relief Nasal Inhaler - 0.75g",
      image: "/images/amrutanjan_nasal_inhaler.jpg",
      description:
        "Amrutanjan Relief Nasal Inhaler is known to offer relief from nasal congestion. Enriched with the goodness of mint, camphor and eucalyptus, the inhaler can prove to be your best friend as you try to deal with that fussy, blocked nose. Adults can inhale it as many times as they require for relief from nasal congestion. Prepared with herbal ingredients, it is an excellent way to clear breathing.",
      brand: "Amrutanjan",
      category: "Cold & Cough",
      price: 45.00,
      originalPrice: 38.00,
      offer: 15,
      countInStock: 50,
      rating: 4.0,
      numReviews: 321,
    },
    {
      name: "Dettol Clinical Strength Antiseptic Hand Rub Sanitizer - 500 Ml",
      image: "/images/dettol_hand_sanitizer.jpg",
      description:
        "One of the safest and trusted brands in hygiene is Dettol. This Dettol Hand Sanitizer has an antimicrobial effect. It works against bacteria, fungus, viruses and other germs. Dettol Hand Sanitizer has 99.99% efficacy against killing germs. This is a specially formulated hand sanitiser with ingredients used in premises with the maximum antimicrobial load. It's infused with emollients and humectants to ensure the hands do not feel dry and sticky after use.",
      brand: "Dettol",
      category: "Hand Sanitizers",
      price: 237.00,
      originalPrice: 250.00,
      offer: 5,
      countInStock: 40,
      rating: 4.3,
      numReviews: 331,
    },
    {
      name: "Liveasy Wellness Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
      image: "/images/liveasy_multivitamin.jpg",
      description:
        "Vitamins and Minerals are essential nutrients that our bodies need for healthy functioning. They perform many crucial functions in our body, right from creating vitality to ensuring the proper development of body structures and optimal body functions for overall well-being. Not getting enough of these essentials nutrients can affect our well-being and even result in some incessant illnesses. LivEasy Multivitamin tablet is a health supplement specially formulated to meet our daily nutritional requirement of essential vitamins and minerals. It supports our optimal health and well-being. It comes with added benefits of Ginkgo biloba extract, Grape seed extract, Panax Ginseng & choline. These herbal ingredients help in boosting immunity, offer antioxidant properties against oxidative damage and support nerve and muscle functions.",
      brand: "Liveasy",
      category: "Supplements",
      price: 629.00,
      originalPrice: 699.00,
      offer: 10,
      countInStock: 35,
      rating: 4.4,
      numReviews: 432,
    },
    {
      name: "Pharmeasy All-In-One Vaporizer",
      image: "/images/pharmeasy_vaporizer.jpg",
      description:
        "PharmEasy All In One Vaporizer is made up of good quality copper wire to generate dense steam and contains 3 attachments that can be used for multiple purposes. This device can help relieve the symptoms of a common cold or the flu. It can decongest the lungs, clear away the sinuses, and aid in easier breathing and better sleep. PharmEasy All In One Vaporizer can be utilized for steam therapy that can ease headaches and sinus pain. PharmEasy All In One Vaporizer can also be used to boost the health of facial skin. It opens up pores and unclogs them. Regular usage can be effective in preventing acne and pimples. It soothes the facial skin. Women can use this device after removing makeup and men can use it before shaving to smoothen their beard.",
      brand: "PharmEasy",
      category: "Health Devices",
      price: 269.55,
      originalPrice: 599.00,
      offer: 55,
      countInStock: 25,
      rating: 4.1,
      numReviews: 311,
    },
   
      {
        name: "Becozym C Forte (Vitamin B Complex + Biotin + Vitamin C) - Strip Of 15 Tablets",
        image: "/images/becozym_c_forte.jpg",
        description:
          "Becozym C Forte is a vitamin supplement tablet that contains 3 vital and essential vitamins that are required by the body for regular functioning. These vitamins play an important role in boosting and supporting the immune system, helping with energy requirements as well as improving skin quality. Each Becozym C Forte Tablet contains Vitamin B complex, Biotin (also known as vitamin H) and Vitamin C. As part of a healthy diet, this multivitamin recharges the body's supply of these 3 required vitamins regularly.",
        brand: "Becozym",
        category: "Supplements",
        price: 23.00,
        originalPrice: 25.00,
        offer: 8,
        countInStock: 60,
        rating: 4.5,
        numReviews: 1368,
      },
      {
        name: "Revital H Women Multivitamin With Calcium, Zinc, Ginseng For Immunity, Strong Bones & Energy - 30 Tablets",
        image: "/images/revital_h_women.jpg",
        description:
          "Revital H Woman Health Supplement Tablets are loaded with Vitamins, Minerals, and Ginseng. The supplement includes Vitamin A, B1, B2, B3, B6, B12, C, D3, E, and K1, Zinc, Copper, Iron, Magnesium, Chromium, Phosphorus, Selenium, Calcium, Biotin, Iodine, Manganese, and Folic acid. It is specially made to ensure women get the required nutrients that will help them meet their nutritional needs. It goes a long way in maintaining the physical as well as mental health and well-being of women.",
        brand: "Revital",
        category: "Supplements",
        price: 306.00,
        originalPrice: 360.00,
        offer: 15,
        countInStock: 45,
        rating: 4.2,
        numReviews: 488,
      },

        {
          name: "Pharmeasy Multivitamin Multimineral - Pack Of 60",
          image: "/images/pharmeasy_multivitamin.jpg",
          description:
            "PharmEasy Multivitamin Multimineral tablet is specially formulated to meet our daily nutritional requirement of essential vitamins and minerals. It supports our optimal health and well-being. This health supplement comes with added benefits of Ginkgo biloba extract, Grape seed extract, Panax Ginseng & choline. These herbal ingredients help in boosting immunity, offer antioxidant properties against oxidative damage, and support nerve and muscle functions.",
          brand: "PharmEasy",
          category: "Supplements",
          price: 419.4,
          originalPrice: 699.00,
          offer: 40,
          countInStock: 30,
          rating: 4.1,
          numReviews: 25,
        },
        {
          name: "Savlon Surface Disinfectant Spray 170g",
          image: "/images/savlon_surface_disinfectant.jpg",
          description:
            "The Savlon Surface Disinfectant Spray provides a hygienic environment by cleaning dirt and germs on surfaces like tabletops, chairs, doorknobs, and even curtains. This disinfectant spray is ideal for frequently touched surfaces, ensuring added protection when used alongside Savlon hand sanitizer.",
          brand: "Savlon",
          category: "Disinfectants",
          price: 133.65,
          originalPrice: 165.00,
          offer: 19,
          countInStock: 100,
          rating: 4.4,
          numReviews: 657,
        },
        {
          name: "Sbl No 8 Drops 30 Ml",
          image: "/images/sbl_no8_drops.jpg",
          description:
            "SBL No. 8 Drops are formulated for floor cleaning, children's surfaces, and other germ hotspots. With an ideal composition for safety and protection, it’s a preferred choice for ensuring a clean environment.",
          brand: "SBL",
          category: "Health Care",
          price: 155.00,
          originalPrice: 200.00,
          offer: 5,
          countInStock: 50,
          rating: 4.3,
          numReviews: 563,
        },
        {
          name: "Everherb (By Pharmeasy) Amla Juice-Rich In Vitamin C-Natural Immunity Booster - 1 Litre Bottle",
          image: "/images/everherb_amla_juice.jpg",
          description:
            "EverHerb Amla Juice is made from 99.9% Amla extracts, an excellent source of vitamin C with multiple health benefits. It boosts immunity, supports healthy metabolism, and promotes skin health. Rich in minerals like iron, calcium, and potassium, it aids in various bodily functions, including enzyme secretion and heart rate regulation.",
          brand: "EverHerb",
          category: "Juices",
          price: 199.5,
          originalPrice: 399.00,
          offer: 50,
          countInStock: 40,
          rating: 4.0,
          numReviews: 302,
        },
        
          {
            name: "Revital H Men Multivitamin With Calcium, Zinc & Ginseng For Immunity, Strong Bones & Energy (30 Capsules)",
            image: "/images/revital_h_men_multivitamin.jpg",
           description: "Revital H capsule is a unique and balanced combination of 10 vitamins, 9 minerals and ginseng for your daily needs. It gives you the energy to perform your everyday activities, keeps you active and fit.",
            brand: "REVITAL",
            category: "Supplements",
            price: 263.5,
            originalPrice: 310,
            offer: 15,
            countInStock: 30,
            rating: 4.8,
            numReviews: 484
          },
          {
            name: "Baidyanath Chyawanprash Special - Immunity & Omniprotection | 52 Ayurvedic Ingredients - 500g",
            image: "/images/revital_h_women.jpg",
            description: "Baidyanath Chyawanprash is an excellent immunity booster. It can relieve symptoms of premature ageing, weight loss, indigestion, disability and prevents you from getting viral infections. It is a great source to fulfil your vitamin and mineral requirements.",
            brand: "BAIDYANATH",
            category: "Ayurvedic",
            price: 147,
            originalPrice: 210,
            offer: 30,
            countInStock: 30,
            rating: 4.9,
            numReviews: 533
          },
          {
            name: "Depura, 60000 Iu Vitamin D3 Oral Solution, Helps Bones Healthy, Aids In Boosting Immunity, Sugarfree",
            image: "/images/depura.jpg",
            description: "The Depura 60K Nano Vit D Vitamin Drops Sugar Free Bottle of 5ML contains an active ingredient called Cholecalciferol which helps in absorbing calcium to keep the bones healthy. This Vitamin supplement can help correct and maintain the vitamin levels in your body.",
            category: "Supplements",
            brand: "DEPURA",
            price: 75.99,
            originalPrice: 94.99,
            offer: 20,
            countInStock: 30,
            rating: 4.7,
            numReviews: 669
          },
          {
            name: "Dettol Liquid Disinfectant Cleaner Surface Sanitizer Spray 500ml",
            image: "/images/dettol_disinfectant.jpg",
            description: "Dettol Liquid Disinfectant Cleaner Surface Sanitizer Spray uses a combination of synthetic elements that is lethal to germs and viruses. Its success rate is 99.9% against harmful microbes. It is safe to use on most hard, non-porous surfaces daily.",
            brand: "DETTOL",
            category: "Cleaning & Hygiene",
            price: 104,
            originalPrice: 159,
            offer: 34,
            countInStock: 30,
            rating: 4.7,
            numReviews: 532
          },
          {
            name: "Dettol Liquid Handwash Refill - Original Germ Protection Hand Wash, 175 Ml",
            image: "/images/dettol_liquid_handwash_refill_original.jpg",
            description: "Dettol liquid handwash has gone through rigorous testing and uses a special formula with natural ingredients which offer 100% protection against germs. It has a slight pine fragrance, deeply cleanses your hands and kills harmful germs and bacteria.",
            brand: "DETTOL",
            category: "Handwash",
            price: 40,
            originalPrice: 48,
            offer: 5,
            countInStock: 30,
            rating: 4.2,
            numReviews: 163
          }
        ,
        
          {
            name: "Dettol Disinfectant Sanitizer Spray Bottle - Spring Blossom, 225ml",
            image: "/images/dettol_disinfectant_sanitizer_spray_bottle.jpg",
            description: "Dettol Disinfectant spray sanitizer is an alcohol-based multi-purpose spray that can be used to eliminate harmful bacteria or viruses from various surfaces. It is effective in killing a majority of viruses, including SARS-Cov-2. The spring blossom fragrance leaves the sanitized area smelling fresh. It is great for sanitizing both soft and hard surfaces like furniture, kitchen sinks, toilet areas, dustbins, packages, carpets, and car seats.",
            brand: "DETTOL",
            category: "Cleaning & Hygiene",
            price: 135,
            originalPrice: 159,
            offer: 15,
            countInStock: 30,
            rating: 4.9,
            numReviews: 43
          },
          {
            name: "Vicks Vaporub 25ml, Relief From Cold, Cough, Headache And Body Pain",
            image: "/images/vicks_vaporub.jpg",
            description: "Vicks Vaporub with eucalyptus oil and menthol provides instant relief from cold, cough, headache, body pain, muscle stiffness, and pharyngitis. Its long-lasting formula works for up to 8 hours, making it ideal for uninterrupted sleep or productivity.",
            brand: "VICKS",
            category: "Health & Wellness",
            price: 78,
            originalPrice: 85,
            offer: 8,
            countInStock: 30,
            rating: 4.8,
            numReviews: 278
          },
          {
            name: "Liveasy Wellness Vitamin C (990mg) With Zinc (10mg) - Powerful Immunity Booster - 60 Veg Tablets",
            image: "/images/liveasy_wellness_vitamin_c_990mg_with_zinc_10mg.jpg",
            description: "LivEasy Wellness Vitamin C (990mg) with Zinc (10mg) supports immune health and helps in tissue repair, wound healing, and bone strengthening. Vitamin C protects cells from oxidative damage and prevents common cold and seasonal allergies. Zinc activates the body's defense mechanism and prevents infections.",
            brand: "LIVEASY",
            category: "Supplements",
            price: 719,
            originalPrice: 799,
            offer: 10,
            countInStock: 30,
            rating: 4.7,
            numReviews: 342
          },
          
  
        

];


export default products
