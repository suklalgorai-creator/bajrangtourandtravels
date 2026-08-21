const siteData = {
    // ============================
    // BRAND INFO (Change this to rebrand for any client)
    // ============================
    brand: {
        name: "Ghatsila Tours",
        fullName: "Ghatsila Tour and Travel",
        tagline: "Experience the pristine beauty of Ghatshila with the top-rated local tour operator.",
        phone: "",
        displayPhone: "",
        email: "booking@theghatsila.com",
        address: "Burudih Dam Road, Ghatshila, Jharkhand 832303",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14698.927!2d86.473!3d22.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f65d2f3b35b3b3%3A0x3c3c3c3c3c3c3c3c!2sGhatshila%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1691900000000!5m2!1sen!2sin",
        rating: "4.2",
        totalReviews: "94",
        experienceYears: "20+",
        happyTourists: "10000",
        established: "2002",
        heroImages: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Burudih_Dam.jpg/1280px-Burudih_Dam.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sunset_at_Burudih_Lake%2C_Ghatshila._Jharkhand_%2C_India.jpg/1280px-Sunset_at_Burudih_Lake%2C_Ghatshila._Jharkhand_%2C_India.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Subarnarekha_River%2C_Ghatshila.jpg/1280px-Subarnarekha_River%2C_Ghatshila.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Spring_in_the_Forest%21_a_view_from_Siddeswari_Tample%2C_Ghatshila_.jpg/1280px-Spring_in_the_Forest%21_a_view_from_Siddeswari_Tample%2C_Ghatshila_.jpg"
        ],
        heroSlides: [
            { heading: "Escape to Ghatshila", sub: "Jharkhand's best-kept secret — pristine lakes, lush hills, and golden sunsets await you." },
            { heading: "Sunset at Burudih", sub: "Watch the sky paint itself in breathtaking shades of gold over the serene Burudih Lake." },
            { heading: "The Golden River", sub: "Sit by the banks of Subarnarekha — the river of gold — and feel the breeze of pure nature." },
            { heading: "Into the Wild", sub: "Trek through ancient teak forests and discover the true soul of the Chotanagpur Plateau." }
        ]
    },

    // ============================
    // TOUR PACKAGES
    // ============================
    packages: [
        {
            id: 1,
            title: "Ghatshila Day Tour",
            price: "₹1,500",
            unit: "per person",
            duration: "1 Day",
            description: "Experience the magic of Ghatshila in a single day! Boating at Burudih Lake, temple darshan, and a mesmerizing sunset—all covered.",
            inclusions: ["8 Hours Sightseeing", "Local Transport", "Lunch Included"],
            popular: false
        },
        {
            id: 2,
            title: "Standard Weekend (2N/3D)",
            price: "₹9,500",
            unit: "per person",
            duration: "2 Nights / 3 Days",
            description: "Our best-seller! Enjoy a premium AC hotel stay, a dedicated SUV for hassle-free sightseeing, and authentic local meals. Perfect for families.",
            inclusions: ["Premium Hotel Stay", "Dedicated SUV (Bolero/Scorpio)", "All Meals Included", "Guided Tour", "Station Pickup & Drop"],
            popular: true
        },
        {
            id: 3,
            title: "Budget Getaway (2N/3D)",
            price: "₹5,500",
            unit: "per person",
            duration: "2 Nights / 3 Days",
            description: "A pocket-friendly escape to nature! Includes comfortable clean accommodation, essential local sightseeing, and station transfers without breaking the bank.",
            inclusions: ["Budget Accommodation", "Local Sightseeing", "Station Pickup/Drop"],
            popular: false
        }
    ],

    // ============================
    // TOURIST PLACES
    // ============================
    places: [
        {
            name: "Burudih Lake",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Burudih_Dam.jpg/1280px-Burudih_Dam.jpg",
            desc: "A serene paradise nestled amidst Dalma Hills. Enjoy peaceful boating, paddle-boarding, or a relaxed family picnic by the crystal-clear waters."
        },
        {
            name: "Siddheswar Hill",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Siddheswar_Hill%2C_Ghatshila_01.jpg/1280px-Siddheswar_Hill%2C_Ghatshila_01.jpg",
            desc: "Embark on a gentle trek to the hilltop Siddheshwari Temple. The 360° panoramic view of the winding river and dense forests is a photographer's dream."
        },
        {
            name: "Subarnarekha River",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Subarnarekha_River%2C_Ghatshila.jpg/1280px-Subarnarekha_River%2C_Ghatshila.jpg",
            desc: "'The Streak of Gold' — sit by the rocky banks of this iconic river. A perfect spot for evening strolls and enjoying the cool breeze."
        },
        {
            name: "Sunset at Burudih",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Sunset_at_Burudih_Lake%2C_Ghatshila._Jharkhand_%2C_India.jpg/1280px-Sunset_at_Burudih_Lake%2C_Ghatshila._Jharkhand_%2C_India.jpg",
            desc: "Witness magic unfold as the sky turns into a canvas of vibrant orange and gold over the calm waters of Burudih Lake. Truly unforgettable."
        },
        {
            name: "Chotanagpur Teak Forests",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spring_in_Teak_forest_of_Chotonagpur_Plateau%21_.jpg/1280px-Spring_in_Teak_forest_of_Chotonagpur_Plateau%21_.jpg",
            desc: "Take a tranquil walk through the dense, towering Teak forests. The fresh forest air and singing birds offer the ultimate detox from city life."
        },
        {
            name: "Copper Mining Hills View",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Subarnarekha_river_from_copper_mines.jpg/1280px-Subarnarekha_river_from_copper_mines.jpg",
            desc: "Get an aerial perspective of the Subarnarekha river meandering gracefully through the majestic copper mining hills of the region."
        }
    ],

    // ============================
    // TESTIMONIALS (from Google Maps reviews)
    // ============================
    testimonials: [
        {
            name: "Sumanta Halder",
            rating: 5,
            text: "It provides best travel experience. Very professional service and the driver was very knowledgeable about all the local spots. Highly recommended!",
            date: "2 months ago"
        },
        {
            name: "Rajesh Kumar",
            rating: 5,
            text: "Amazing trip to Burudih Dam and Phuldungri Hills. The package was value for money and everything was well organized. Will definitely come back!",
            date: "1 month ago"
        },
        {
            name: "Priya Sharma",
            rating: 4,
            text: "Good experience there. The team arranged everything from station pickup to hotel. Very comfortable journey. Only wish the food options were more varied.",
            date: "3 weeks ago"
        },
        {
            name: "Amit Das",
            rating: 5,
            text: "Best tour operator in Ghatshila! We had a family trip with kids and they took care of everything. The sunset at Burudih Lake was unforgettable.",
            date: "1 week ago"
        }
    ],

    // ============================
    // HOW TO REACH
    // ============================
    howToReach: [
        {
            mode: "By Train",
            icon: "ph-fill ph-train-simple",
            details: "Ghatshila Railway Station (GTS) is well-connected. Take Steel Express, Ispat Express, or Kurla Express from Howrah. Journey: ~3.5 hours."
        },
        {
            mode: "By Road",
            icon: "ph-fill ph-car",
            details: "Ghatshila is ~45 km from Jamshedpur and ~280 km from Kolkata via NH-33. State buses and private cabs are available."
        },
        {
            mode: "By Air",
            icon: "ph-fill ph-airplane",
            details: "Nearest airport is Sonari Airport, Jamshedpur (~50 km). Netaji Subhash Chandra Bose Airport, Kolkata (~280 km) for major flights."
        }
    ],

    // ============================
    // FAQs
    // ============================
    faqs: [
        {
            question: "When is the best time to visit Ghatshila?",
            answer: "The ideal time to visit is between October and March. The weather is very pleasant during these months, and the peak season is from 15th December to 15th January."
        },
        {
            question: "How do I reach Ghatshila from Kolkata?",
            answer: "Ghatshila is well-connected by train from Howrah. You can take the Steel Express, Ispat Express, or Kurla Express. The journey takes about 3.5 to 4 hours."
        },
        {
            question: "Are your packages customizable?",
            answer: "Yes, 100%! We can tailor the packages based on your group size, hotel preferences, and places you wish to visit. Just contact us for a custom quote."
        },
        {
            question: "Do you provide car rental without a package?",
            answer: "Yes, we offer Bolero, Scorpio, and Auto rentals for local sightseeing in Ghatshila and nearby areas like Mosabani and Narwa."
        },
        {
            question: "Is Ghatshila safe for families and solo travelers?",
            answer: "Absolutely! Ghatshila is one of the safest small towns in Jharkhand. It's popular with families, couples, and solo travelers alike. We ensure complete safety during all our tours."
        },
        {
            question: "What should I carry for the trip?",
            answer: "Carry comfortable walking shoes, sunscreen, a hat, mosquito repellent, and a water bottle. During winters (Nov-Feb), carry light woolens. A camera is a must for the stunning views!"
        }
    ]
};
