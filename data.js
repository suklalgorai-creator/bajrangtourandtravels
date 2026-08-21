const siteData = {
    // ============================
    // BRAND INFO (Change this to rebrand for any client)
    // ============================
    brand: {
        name: "Bajrang Tour And Travels",
        fullName: "Bajrang Tour And Travels",
        tagline: "Safe Journey • Comfortable Ride • Affordable Fare. Your Travel Partner from Ghatsila.",
        phone: "9304963169", // Primary WhatsApp number
        phone2: "9199042017", // Secondary number
        displayPhone: "+91 9304963169",
        email: "contact@bajrangtourandtravels.in",
        address: "Ghatshila, Jharkhand",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14698.927!2d86.473!3d22.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f65d2f3b35b3b3%3A0x3c3c3c3c3c3c3c3c!2sGhatshila%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1691900000000!5m2!1sen!2sin",
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
            title: "Basic",
            duration: "1 Day / Budget",
            description: "Experience the magic of Ghatshila! Perfect for a quick getaway. Essential local sightseeing and comfortable transport—all covered.",
            inclusions: ["8 Hours Sightseeing", "Local Transport", "Lunch Included"],
            popular: false,
            tag: "Affordable"
        },
        {
            id: 2,
            title: "Premium",
            duration: "2 Nights / 3 Days",
            description: "Our best-seller! Enjoy a comfortable stay, a dedicated SUV for hassle-free sightseeing, and authentic meals. Perfect for families.",
            inclusions: ["Premium Hotel Stay", "Dedicated SUV (Bolero/Scorpio)", "All Meals Included", "Guided Tour", "Station Pickup & Drop"],
            popular: true,
            tag: "Most Popular"
        },
        {
            id: 3,
            title: "Pro",
            duration: "3 Nights / 4 Days",
            description: "The ultimate luxury experience. Top-tier accommodation, exclusive private tours, special dinners, and priority support.",
            inclusions: ["Luxury Resort Stay", "Private AC SUV", "Exclusive Dining", "Custom Itinerary", "VIP Station Transfers"],
            popular: false,
            tag: "Luxury"
        }
    ],

    // ============================
    // TOURIST PLACES (Sightseeing)
    // ============================
    places: {
        ghatsilaImage: "", // PHOTO LINK YA FILE PATH YAHAN DAALE (e.g., "ghatsila.jpg")
        ghatsila: [
            "Burudi Dam", "Dharagiri Fall", "Phuldungri Hill", "Rankini Mandir",
            "Raat Mohona", "Subarnarekha Riverside", "Galudih Barrage",
            "Gouri Kunj (Bibhutibhushan Memorial)", "Panch Pandav Rock",
            "Ghatshila Rajbari", "Rankini Mandir (Rohinibera)",
            "Galudih Bridge / Subarnarekha View Point", "Siddheshwar Nath Temple",
            "Jadugoda Hills"
        ],
        jamshedpurImage: "", // PHOTO LINK YA FILE PATH YAHAN DAALE (e.g., "jamshedpur.jpg")
        jamshedpur: [
            "Jubilee Park", "Dimna Lake", "Dalma Wildlife Sanctuary", "Tata Steel Zoological Park"
        ]
    },

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
