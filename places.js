const places = [

/* =========================
   CINCINNATI, OH
========================= */

{
  name: "Condado Tacos – The Banks",
  city: "Cincinnati",
   neighborhood: "The Banks",
  state: "OH",
  type: "full",
  whatToExpect:
    "Casual restaurant with a bar-centric layout and active social atmosphere. Louder and more crowded during peak meal times and game nights.",
  environment: {
    parking: "Street + nearby garages; tight during events.",
    restrooms: {
      capacity: "Limited capacity",
      waits: "Possible during peak times",
      location: "Inside main area"
    },
    noise: "Moderate to Loud when busy.",
    exits: "Street-level; easy step outside."
  },
  insights: [
    "Bar area tends to be louder than dining tables.",
    "Crowds increase significantly on game days."
  ]
},
   
   {
name: "Delwood",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Neighborhood restaurant with a structured dining room and bar seating. Typically calmer during weekday afternoons and busier during dinner hours and weekends.",
environment: {
parking: "Street parking around Mt. Lookout Square.",
restrooms: {
capacity: "Indoor accessible restrooms",
waits: "Occasional waits during busy dinner hours",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as dinner-focused with steady evening traffic.",
"First-timers note activity builds after typical work hours.",
"Weekend evenings bring fuller seating."
]
},

{
name: "Zip's Cafe",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Classic neighborhood restaurant with bar seating and table service. Typically steady during lunch hours and busier during dinner periods and weekends.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible waits during peak meal times",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as consistently busy during lunch and dinner.",
"First-timers note activity increases around midday.",
"Weekend evenings bring steady dining traffic."
]
},

{
name: "Sago",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Restaurant with table seating and a compact dining layout. Typically calmer earlier in the day and busier during dinner service and weekends.",
environment: {
parking: "Street parking around Mt. Lookout Square.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Occasional waits during dinner rush",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as dinner-oriented.",
"First-timers notice activity increases after 5 pm.",
"Weekends bring fuller dining rooms."
]
},

{
name: "Mt. Lookout Tavern",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Large bar with multiple floors and outdoor patio seating. Typically lighter earlier in the day and significantly busier during evening hours and weekends.",
environment: {
parking: "Street parking around Mt. Lookout Square.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible waits during peak nightlife hours",
location: "Inside venue"
},
noise: "High.",
exits: "Patio and street-level access available."
},
insights: [
"Often described as nightlife-oriented, especially on weekends.",
"First-timers note activity increases significantly later in the evening.",
"Weekend nights bring the highest crowd levels."
]
},

{
name: "The Vault Mt. Lookout",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Restaurant and bar with a modern interior and bar seating. Typically calmer earlier in the day and busier during dinner hours and weekend evenings.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible waits during dinner hours",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as bar-forward during evening hours.",
"First-timers notice activity builds steadily through dinner service.",
"Weekends bring the most consistent traffic."
]
},

{
name: "Vinology",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Restaurant and wine bar with indoor seating and patio space. Typically calmer during weekday afternoons and busier during dinner hours and weekends.",
environment: {
parking: "Street parking around Mt. Lookout Square.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible waits during peak dinner hours",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Patio and street-level access available."
},
insights: [
"Often described as evening-focused with steady dinner traffic.",
"First-timers note patio seating draws visitors during warm weather.",
"Weekends bring fuller dining rooms."
]
},

{
name: "Ichiban",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Restaurant with a traditional dining layout and sushi bar seating. Typically steady during lunch hours and busier during dinner periods.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Low to Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as steady during lunch and dinner.",
"First-timers note activity increases during evening service.",
"Weekend evenings bring slightly higher traffic."
]
},

{
name: "Ramundo's Pizzeria",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Casual restaurant with counter ordering and dining tables. Typically busiest during lunch hours and dinner periods.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as quick-service with steady dining traffic.",
"First-timers notice lunch and dinner bring the most activity.",
"Weekend evenings bring slightly higher traffic."
]
},

{
name: "Guardia",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Restaurant with a structured dining room and bar seating. Typically calmer earlier in the evening and busier during dinner hours and weekends.",
environment: {
parking: "Street parking around Mt. Lookout Square.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible waits during peak dinner hours",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as dinner-focused with steady evening traffic.",
"First-timers notice activity builds after typical work hours.",
"Weekend evenings bring fuller seating."
]
},

{
name: "Cloud 9 Sushi",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Restaurant with dining tables and bar seating. Typically calmer during weekday afternoons and busier during dinner hours.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible waits during dinner hours",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as steady during dinner service.",
"First-timers note evenings bring the most activity.",
"Weekends bring fuller seating."
]
},

{
name: "Lookout Joe",
city: "Cincinnati",
neighborhood: "Mt. Lookout",
state: "OH",
type: "full",
whatToExpect:
"Small café with counter ordering and limited seating. Typically busiest during morning hours and early afternoons.",
environment: {
parking: "Street parking around Mt. Lookout Square.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Low to Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as morning-focused with short visits.",
"First-timers note breakfast hours bring the most activity.",
"Traffic decreases later in the afternoon."
]
},
   
   {
name: "Hummus Republic",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Counter-service restaurant with a straightforward ordering line and casual seating. Typically busiest during lunch hours and early evening periods.",
environment: {
parking: "Street parking along nearby Clifton streets.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Low to Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as quick-stop oriented with short visits.",
"Lunch hours bring the most consistent activity.",
"Evening traffic increases slightly but remains steady."
]
},

{
name: "Good Plates Eatery",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Small restaurant with a casual dining layout and counter ordering. Typically calmer mid-afternoon and busier during lunch and early dinner periods.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Low to Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as steady during midday hours.",
"First-time visitors note traffic builds around lunch.",
"Activity tapers slightly later in the evening."
]
},

{
name: "Hangry Joe's Hot Chicken & Wings",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Fast-casual restaurant with counter ordering and limited seating. Typically busiest during lunch and late evening hours.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as quick-service with short visit times.",
"Lunch and late-night hours bring the most traffic.",
"Activity tends to be consistent rather than event-driven."
]
},

{
name: "Avalanche Crepes & Waffles",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Compact café-style space with counter ordering and small seating areas. Typically busiest during dessert hours and late evenings.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Low to Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as dessert-focused with short visits.",
"First-timers notice increased activity after dinner hours.",
"Weekend evenings bring the most foot traffic."
]
},

{
name: "Clifton Indian Restaurant & Bar",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Dining-focused restaurant with table seating and a bar area. Typically calmer during weekday afternoons and busier during dinner hours.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor accessible restrooms",
waits: "Occasional waits during dinner rush",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as dinner-oriented.",
"First-timers note traffic increases steadily after 5 pm.",
"Weekends bring fuller dining rooms."
]
},

{
name: "Martino’s on Vine",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Street-level restaurant with a traditional dining layout. Typically steady during lunch hours and busier during dinner periods.",
environment: {
parking: "Street parking along Vine Street.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as steady throughout the day.",
"First-timers note activity increases during evening service.",
"Weekends bring slightly higher table occupancy."
]
},

{
name: "HangOverEasy",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Casual restaurant with bar seating and a compact dining room. Typically busiest during breakfast, brunch, and weekend mornings.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible during brunch rush",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as morning-focused with high brunch traffic.",
"First-timers notice weekend mornings bring the most activity.",
"Afternoons are generally calmer."
]
},

{
name: "Alabama Que",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Small counter-service restaurant with limited seating. Typically busiest during lunch and early evening hours.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Low to Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as quick-stop oriented.",
"Lunch hours bring the most consistent traffic.",
"Activity remains steady throughout the afternoon."
]
},

{
name: "Cincy Steak and Lemonade",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Fast-casual restaurant with counter ordering and limited seating. Typically busiest during lunch hours and late evenings.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as quick-service with shorter visits.",
"Lunch and late-night hours bring the most traffic.",
"Activity remains consistent throughout the day."
]
},

{
name: "Izen’s Drunken Bento",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Restaurant with a mix of counter ordering and dining tables. Typically calmer mid-afternoon and busier during lunch and dinner periods.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as lunch and dinner focused.",
"First-timers note activity increases around midday.",
"Evening hours bring moderate traffic."
]
},

{
name: "Baladi Restaurant & Bakery",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Casual restaurant and bakery with counter ordering and dining tables. Typically steady during lunch hours and early evenings.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Low to Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as consistent throughout the day.",
"First-timers note lunch brings the most activity.",
"Evening hours remain steady but less crowded."
]
},

{
name: "Keystone’s Mac Shack",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Restaurant with bar seating and a compact dining area. Typically calmer during weekday afternoons and busier during dinner hours and weekends.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible during peak dinner hours",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as dinner-focused with steady traffic.",
"First-timers note evenings bring fuller tables.",
"Weekend nights show the highest activity."
]
},

{
name: "Sichuan Palace",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Dining-focused restaurant with a traditional table layout. Typically calm during weekday afternoons and busier during dinner service.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Low to Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as steady during lunch and dinner hours.",
"First-timers note dinner brings the most activity.",
"Weekends show slightly higher traffic."
]
},

{
name: "Mz Jade’s Soul Station",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Small restaurant with counter service and limited seating. Typically busiest during lunch and early evening hours.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Low to Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as lunch-driven with quick visits.",
"First-timers notice midday traffic peaks.",
"Activity remains steady during the afternoon."
]
},

{
name: "Drunken Tacos",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Restaurant and bar with casual seating and counter service. Typically calmer earlier in the day and busier during evening hours.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible during evening rush",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as bar-forward during evening hours.",
"First-timers notice activity increases after dinner time.",
"Weekends bring the most consistent traffic."
]
},

{
name: "El Taco Veloz",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Counter-service restaurant with limited seating. Typically busiest during lunch hours and late evenings.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Rarely long waits",
location: "Inside venue"
},
noise: "Low to Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as quick-service with short visits.",
"Lunch hours bring the most consistent activity.",
"Late-night traffic increases slightly."
]
},

{
name: "Adriatico’s",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Large pizza restaurant with dining tables and bar seating. Typically steady during lunch hours and busier during evenings and weekends.",
environment: {
parking: "Street parking and nearby lots.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible during dinner rush",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as high-traffic during evenings.",
"First-timers note activity increases around dinner time.",
"Weekend nights bring fuller seating."
]
},

{
name: "Mio’s Pizzeria Pub",
city: "Cincinnati",
neighborhood: "Clifton",
state: "OH",
type: "full",
whatToExpect:
"Casual restaurant with dining tables and bar seating. Typically calmer during weekday afternoons and busier during dinner hours and weekends.",
environment: {
parking: "Street parking nearby.",
restrooms: {
capacity: "Indoor restroom available",
waits: "Possible during peak dinner hours",
location: "Inside venue"
},
noise: "Moderate.",
exits: "Street-level entrance."
},
insights: [
"Often described as steady neighborhood traffic.",
"First-timers note evenings bring fuller tables.",
"Weekend activity is slightly higher than weekdays."
]
},
   
   {
  name: "Montgomery Inn – The Boathouse",
  city: "Cincinnati",
      neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Large riverfront restaurant with multiple dining rooms and patio seating. Generally calmer earlier in the day, with increased activity during dinner hours, weekends, and nearby events.",
  environment: {
    parking: "Valet only.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Uncommon except during peak dinner hours",
      location: "Inside main building"
    },
    noise: "Moderate; higher when dining rooms are full.",
    exits: "Multiple exits and patio access."
  },
  insights: [
    "Spacious layout with steady dining traffic.",
    "Activity increases around dinner hours.",
    "Weekend evenings bring the fullest seating."
  ]
},

{
  name: "Bow Tie Cafe",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Small café with counter service and limited seating. Typically busiest during morning and early afternoon hours.",
  environment: {
    parking: "Street parking in Mt. Adams.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Uncommon",
      location: "Inside venue"
    },
    noise: "Low to Moderate; generally quiet outside peak coffee hours.",
    exits: "Direct sidewalk access."
  },
  insights: [
    "Morning-focused traffic pattern.",
    "Breakfast hours bring the most activity.",
    "Traffic decreases steadily through the afternoon."
  ]
},

{
  name: "Luca Bistro",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Compact restaurant with a structured dining room and bar seating. Generally calm earlier in the evening and busier during peak dinner hours and weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during peak dinner hours",
      location: "Inside venue"
    },
    noise: "Moderate; increases as the dining room fills.",
    exits: "Street-level entrance."
  },
  insights: [
    "Intimate atmosphere due to smaller size.",
    "Dinner hours gradually increase activity.",
    "Weekends bring fuller seating."
  ]
},

{
  name: "Al'Lupo Ristorante",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Small dining-focused restaurant with closely arranged tables. Typically quieter midweek and busier during dinner hours and weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during peak dinner hours",
      location: "Inside venue"
    },
    noise: "Moderate; higher when dining room is full.",
    exits: "Street-level entrance."
  },
  insights: [
    "Compact dining layout.",
    "Reservations shape the evening pace.",
    "Weekend dinners bring the highest occupancy."
  ]
},

{
  name: "El Barril",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Street-level restaurant with bar seating and dining tables. Generally lighter during weekday hours and busier during evening service and weekends.",
  environment: {
    parking: "Street parking in Mt. Adams.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during peak evening hours",
      location: "Inside venue"
    },
    noise: "Moderate; higher during peak dinner and bar hours.",
    exits: "Direct sidewalk access."
  },
  insights: [
    "Bar-forward layout influences traffic patterns.",
    "Activity increases noticeably after dinner hours.",
    "Weekend evenings bring the most consistent traffic."
  ]
},

{
  name: "Mt. Adams Bar & Grill",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Neighborhood bar and restaurant with indoor seating and patio space. Typically steady during the day and busier during evening hours and weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during peak evening hours",
      location: "Inside venue"
    },
    noise: "Moderate; higher during weekend evenings.",
    exits: "Patio and street access available."
  },
  insights: [
    "Locally driven neighborhood spot.",
    "Activity builds gradually through the evening.",
    "Weekend nights bring the most noticeable crowd levels."
  ]
},

{
  name: "City View Tavern",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Small bar and restaurant with indoor seating and a patio overlooking the city. Typically calmer earlier in the day and busier during evening hours and weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during busy evenings",
      location: "Inside venue"
    },
    noise: "Moderate; higher during weekend evenings.",
    exits: "Patio access available."
  },
  insights: [
    "Patio and city views drive visitor traffic.",
    "Outdoor seating draws many first-time visitors.",
    "Evening hours bring the most activity."
  ]
},

{
  name: "The Hilltop",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Bar with indoor seating and a rooftop patio area. Typically quieter earlier in the evening and busier later at night, especially on weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during weekend nights",
      location: "Inside venue"
    },
    noise: "Moderate to High; increases late at night.",
    exits: "Street and rooftop access available."
  },
  insights: [
    "Nightlife-oriented traffic pattern.",
    "Activity increases after dinner hours.",
    "Weekend nights bring the highest crowd levels."
  ]
},

{
  name: "Your Mom’s Pizzeria",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Small counter-service pizza spot with limited seating. Typically busiest during late-night hours and weekend evenings.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Uncommon",
      location: "Inside venue"
    },
    noise: "Moderate; varies depending on crowd size.",
    exits: "Street-level entrance."
  },
  insights: [
    "Quick-stop oriented layout.",
    "Late-night hours bring the most activity.",
    "Traffic remains steady rather than event-driven."
  ]
},

{
  name: "The Blind Lemon",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Small bar with indoor seating and a secluded outdoor patio. Typically calm earlier in the evening and busier during live music nights and weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during busy nights",
      location: "Inside venue"
    },
    noise: "Moderate; higher during live music.",
    exits: "Patio and street access available."
  },
  insights: [
    "Patio-centered layout shapes the experience.",
    "Live music strongly influences activity.",
    "Weekend evenings bring the most visitors."
  ]
},

{
  name: "Crowley’s Highland House Cafe",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Neighborhood bar with a compact interior and traditional bar layout. Generally steady during the day and busier during evening hours.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during busy evenings",
      location: "Inside venue"
    },
    noise: "Moderate; higher during weekend evenings.",
    exits: "Street-level entrance."
  },
  insights: [
    "Locally driven with consistent traffic.",
    "Activity builds gradually through the evening.",
    "Weekends bring the fullest seating."
  ]
},

{
  name: "Monk’s Cove",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Bar with a small interior and close seating arrangement. Typically quieter earlier in the evening and busier later at night.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during weekend nights",
      location: "Inside venue"
    },
    noise: "Moderate to High; higher during weekend nights.",
    exits: "Street-level entrance."
  },
  insights: [
    "Night-focused bar traffic.",
    "Activity increases later in the evening.",
    "Weekend nights bring the highest crowd levels."
  ]
},

{
  name: "The View at Mt. Adams",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Restaurant and bar with large windows and outdoor seating overlooking the city. Typically lighter earlier in the day and busier during dinner hours and weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak evenings",
      location: "Inside venue"
    },
    noise: "Moderate; higher during weekend evenings.",
    exits: "Patio and street access available."
  },
  insights: [
    "View-driven destination spot.",
    "Window and patio seating attract most visitors.",
    "Evenings bring the most consistent traffic."
  ]
},

{
  name: "Hi-Fi Cincy",
  city: "Cincinnati",
   neighborhood: "Mt. Adams",
  state: "OH",
  type: "full",
  whatToExpect:
    "Bar with indoor seating and an entertainment-focused layout. Typically quiet during the day and busier during evening hours and weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during busy nights",
      location: "Inside venue"
    },
    noise: "High; especially during late-night hours.",
    exits: "Street-level entrance."
  },
  insights: [
    "Music and nightlife oriented environment.",
    "Activity increases significantly after dinner hours.",
    "Weekend nights bring the highest crowd levels."
  ]
},
   
{
  name: "Court Street Kitchen",
  city: "Cincinnati",
   neighborhood: "Downtown",
  state: "OH",
  type: "full",
  whatToExpect:
    "Street-level restaurant with a compact dining room and bar seating. Typically calmer during weekday afternoons and busier during dinner hours and weekends.",
  environment: {
    parking: "Street parking and nearby downtown garages.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during peak dinner hours",
      location: "Inside main dining area"
    },
    noise: "Moderate; increases as tables fill.",
    exits: "Direct sidewalk access."
  },
  insights: [
    "Neighborhood-oriented and steady in pace.",
    "Activity builds gradually into the evening.",
    "Weekends bring fuller seating compared to midweek."
  ]
},

{
  name: "Alcove by MadTree Brewing",
  city: "Cincinnati",
   neighborhood: "OTR",
  state: "OH",
  type: "full",
  whatToExpect:
    "Modern restaurant with indoor seating and patio space in a mixed-use development. Generally calm earlier in the day and busier during dinner service and weekends.",
  environment: {
    parking: "Dedicated lot and shared development parking available.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner hours",
      location: "Inside main building"
    },
    noise: "Moderate; higher during peak dinner service.",
    exits: "Patio and street-level access available."
  },
  insights: [
    "Open, contemporary layout.",
    "Evenings bring a noticeable increase in traffic.",
    "Structured atmosphere rather than nightlife-driven."
  ]
},

{
  name: "The Eagle OTR",
  city: "Cincinnati",
   neighborhood: "OTR",
  state: "OH",
  type: "full",
  whatToExpect:
    "Two-level restaurant with bar seating and closely arranged dining tables. Typically lighter during weekday afternoons and noticeably busier during dinner hours and weekends.",
  environment: {
    parking: "Street parking and nearby OTR garages.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Common during peak dinner hours",
      location: "Inside venue"
    },
    noise: "Moderate to High; increases during peak dinner service.",
    exits: "Street-level entrance."
  },
  insights: [
    "High traffic during dinner hours.",
    "Weekend wait times are common.",
    "Activity increases steadily after 5 pm."
  ]
},

{
  name: "Ruth’s Chris Steak House",
  city: "Cincinnati",
   neighborhood: "The Banks",
  state: "OH",
  type: "full",
  whatToExpect:
    "Upscale, structured dining room with traditional table seating. Generally calm during weekday evenings and busier during weekend dinner hours.",
  environment: {
    parking: "Valet and nearby downtown garages.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Uncommon",
      location: "Inside main dining area"
    },
    noise: "Low to Moderate; conversation-friendly.",
    exits: "Street-level access."
  },
  insights: [
    "Reservation-driven and paced environment.",
    "Consistent, controlled atmosphere.",
    "Weekend evenings bring fuller dining rooms."
  ]
},

{
  name: "The Precinct",
  city: "Cincinnati",
   neighborhood: "Columbia Tusculum",
  state: "OH",
  type: "full",
  whatToExpect:
    "Multi-room steakhouse set in a historic building with structured table layouts. Generally calm earlier in the evening, with busier dinner hours and weekends.",
  environment: {
    parking: "Valet. On-site parking lot available.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Uncommon",
      location: "Inside building"
    },
    noise: "Low to Moderate; conversation-friendly throughout most hours.",
    exits: "Multiple building exits."
  },
  insights: [
    "Steady and organized even when full.",
    "Multi-room layout changes the feel depending on seating.",
    "Dinner hours shape most of the activity."
  ]
},

{
  name: "Jeff Ruby’s Steakhouse",
  city: "Cincinnati",
   neighborhood: "Downtown",
  state: "OH",
  type: "full",
  whatToExpect:
    "Large, multi-level dining space with a formal layout and prominent bar area. Generally calmer midweek and busier during weekend dinner hours.",
  environment: {
    parking: "Valet and nearby downtown garages.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner hours",
      location: "Inside main levels"
    },
    noise: "Moderate; higher during peak dinner service.",
    exits: "Street-level entrance."
  },
  insights: [
    "Structured and reservation-shaped flow.",
    "Evenings bring the most noticeable increase in activity.",
    "Weekends feel fuller but remain organized."
  ]
},

{
  name: "Red Roost Tavern",
  city: "Cincinnati",
   neighborhood: "Downtown",
  state: "OH",
  type: "full",
  whatToExpect:
    "Neighborhood bar with a compact interior and bar-focused seating. Typically calmer during the day and busier during evening hours and weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during peak evenings",
      location: "Inside venue"
    },
    noise: "Moderate; higher during weekend evenings.",
    exits: "Street-level entrance."
  },
  insights: [
    "Locally driven and consistent atmosphere.",
    "Compact layout fills quickly.",
    "Activity remains steady rather than event-driven."
  ]
},

{
  name: "The 1931",
  city: "Cincinnati",
   neighborhood: "Downtown",
  state: "OH",
  type: "full",
  whatToExpect:
    "Restaurant and bar located within a larger venue space with structured seating. Generally lighter earlier in the day and busier during dinner hours and special events.",
  environment: {
    parking: "Street parking and nearby garages.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during events",
      location: "Inside venue"
    },
    noise: "Moderate; higher during events and weekend evenings.",
    exits: "Street-level access available."
  },
  insights: [
    "Event-influenced activity tied to nearby attractions.",
    "Noticeable shift during weekend evenings.",
    "Weekday hours feel more controlled and steady."
  ]
},
   
{
  name: "Biscuit Love Cincinnati",
  city: "Cincinnati",
   neighborhood: "OTR",
  state: "OH",
  type: "full",
  whatToExpect:
    "Bright daytime restaurant with compact seating. Busiest during breakfast and weekend brunch hours.",
  environment: {
    parking: "Street + garages; competitive during brunch.",
    restrooms: {
      capacity: "Limited capacity",
      waits: "Possible during brunch peak",
      location: "Inside restaurant"
    },
    noise: "Moderate; higher during brunch rush.",
    exits: "Street-level entrance."
  },
  insights: [
    "Bright and bustling during mornings.",
    "Weekend brunch drives steady traffic."
  ]
},

{
  name: "Jefferson Social",
  city: "Cincinnati",
   neighborhood: "The Banks",
  state: "OH",
  type: "full",
  whatToExpect:
    "Large bar with extensive outdoor seating. Quieter earlier; more energetic evenings and game days.",
  environment: {
    parking: "Street + garages; tight during games.",
    restrooms: {
      capacity: "Multiple stalls",
      waits: "Possible during busy nights",
      location: "Inside main building"
    },
    noise: "High evenings and weekends.",
    exits: "Direct access to The Banks."
  },
  insights: [
    "Energy closely tied to game schedules.",
    "Outdoor seating is a major draw."
  ]
},

{
  name: "Krueger’s Tavern",
  city: "Cincinnati",
   neighborhood: "OTR",
  state: "OH",
  type: "full",
  whatToExpect:
    "Casual tavern with indoor and small outdoor seating. Calmer midday; busier on weekends.",
  environment: {
    parking: "Street + garages; tighter on weekends.",
    restrooms: {
      capacity: "Limited capacity",
      waits: "Possible during peak hours",
      location: "Inside venue"
    },
    noise: "Moderate; louder late evenings.",
    exits: "Street-level entrance."
  },
  insights: [
    "Neighborhood-style relaxed feel.",
    "Energy increases later in the evening."
  ]
},

{
  name: "Bakersfield OTR",
  city: "Cincinnati",
   neighborhood: "OTR",
  state: "OH",
  type: "full",
  whatToExpect:
    "Spacious taco and tequila spot with indoor and outdoor seating. Livelier in evenings and on Taco Tuesdays.",
  environment: {
    parking: "Street + garages; tight at peak.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during busy times",
      location: "Inside main area"
    },
    noise: "Moderate; louder evenings.",
    exits: "Street-level on Vine St."
  },
  insights: [
    "Energy builds in the evenings.",
    "Music contributes to lively atmosphere."
  ]
},

{
  name: "MadTree Brewing - Oakley",
  city: "Cincinnati",
   neighborhood: "Oakley",
  state: "OH",
  type: "full",
  whatToExpect:
    "Large brewery with expansive indoor and outdoor seating. Calmer daytime; lively evenings and weekends.",
  environment: {
    parking: "On-site lot + street; fills quickly.",
    restrooms: {
      capacity: "Multiple; accessible",
      waits: "Possible on busy nights",
      location: "Inside main building"
    },
    noise: "Low to Moderate daytime; High evenings.",
    exits: "Large patio and multiple exits."
  },
  insights: [
    "Open, social layout.",
    "Crowds increase on weekends."
  ]
},

{
  name: "Maplewood Kitchen + Bar",
  city: "Cincinnati",
   neighborhood: "Downtown",
  state: "OH",
  type: "full",
  whatToExpect:
    "Bright café focused on breakfast and lunch. Busier during brunch and weekday lunch rush.",
  environment: {
    parking: "Street + downtown garages.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during brunch peak",
      location: "Inside restaurant"
    },
    noise: "Moderate; higher during brunch.",
    exits: "Open layout; quick street exit."
  },
  insights: [
    "Bright and airy setting.",
    "Weekend brunch draws steady crowds."
  ]
},

{
  name: "Moerlein Lager House",
  city: "Cincinnati",
   neighborhood: "The Banks",
  state: "OH",
  type: "full",
  whatToExpect:
    "Large riverfront restaurant with multi-level seating and patio space. Activity increases around games.",
  environment: {
    parking: "Garages + street; limited during events.",
    restrooms: {
      capacity: "Multiple; accessible",
      waits: "Possible during peak events",
      location: "Inside multiple levels"
    },
    noise: "Moderate daytime; High during events.",
    exits: "Multiple exits + patio access."
  },
  insights: [
    "Crowds track with stadium schedules.",
    "Spacious layout accommodates groups."
  ]
},

{
  name: "O’Malley’s in the Alley",
  city: "Cincinnati",
   neighborhood: "Downtown",
  state: "OH",
  type: "full",
  whatToExpect:
    "Historic Irish pub below street level. Calmer weekdays; busier before games.",
  environment: {
    parking: "Street + garages; tight on game days.",
    restrooms: {
      capacity: "Indoor; tighter layout",
      waits: "Possible pre-game",
      location: "Inside lower level"
    },
    noise: "Moderate; louder during pre-game.",
    exits: "Alley entrance."
  },
  insights: [
    "Classic old-school pub feel.",
    "Guests linger during slower hours."
  ]
},

{
  name: "Pepp & Dolores",
  city: "Cincinnati",
   neighborhood: "OTR",
  state: "OH",
  type: "full",
  whatToExpect:
    "Modern restaurant with smaller dining room and reservation-driven flow.",
  environment: {
    parking: "OTR street + garages; competitive at dinner.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during full dinner service",
      location: "Inside main floor"
    },
    noise: "Moderate; increases at full capacity.",
    exits: "Street-level entrance."
  },
  insights: [
    "Intimate and structured dining experience.",
    "Energy shifts as tables fill."
  ]
},

{
  name: "Red Leprechaun",
  city: "Cincinnati",
   neighborhood: "The Banks",
  state: "OH",
  type: "full",
  whatToExpect:
    "Cozy Irish-style pub with lively bar atmosphere. Busier on weekends and game nights.",
  environment: {
    parking: "Street meters + garages; tight on game nights.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak evenings",
      location: "Inside venue"
    },
    noise: "Moderate to High evenings.",
    exits: "Street-level access."
  },
  insights: [
    "Energetic pre-game gathering spot.",
    "Friendly, social environment."
  ]
},

{
  name: "Rhinegeist Brewery",
  city: "Cincinnati",
   neighborhood: "OTR",
  state: "OH",
  type: "full",
  whatToExpect:
    "Large multi-level brewery with rooftop space. Increasingly busy through evenings and weekends.",
  environment: {
    parking: "Street + garages; fills at peak times.",
    restrooms: {
      capacity: "Multiple; accessible",
      waits: "Possible during busy nights",
      location: "Multiple levels"
    },
    noise: "Moderate daytime; High evenings.",
    exits: "Multiple exits including rooftop."
  },
  insights: [
    "Open industrial layout.",
    "Energy builds gradually throughout the day."
  ]
},

{
  name: "Samuel Adams Cincinnati Taproom",
  city: "Cincinnati",
   neighborhood: "OTR",
  state: "OH",
  type: "full",
  whatToExpect:
    "Modern taproom with structured layout and outdoor seating.",
  environment: {
    parking: "Street + garages; varies with events.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak times",
      location: "Inside main floor"
    },
    noise: "Moderate; higher evenings.",
    exits: "Outdoor seating; street-level exit."
  },
  insights: [
    "Polished, organized flow.",
    "Predictable atmosphere even when busy."
  ]
},

{
  name: "The Pitch Cincy",
  city: "Cincinnati",
   neighborhood: "OTR",
  state: "OH",
  type: "full",
  whatToExpect:
    "Soccer-focused bar with open layout. Much busier during live matches.",
  environment: {
    parking: "Street + garages; limited during matches.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during live games",
      location: "Inside venue"
    },
    noise: "High during matches.",
    exits: "Direct street access."
  },
  insights: [
    "Energy closely tied to match schedules.",
    "Communal atmosphere during games."
  ]
},

{
  name: "Yard House",
  city: "Cincinnati",
   neighborhood: "The Banks",
  state: "OH",
  type: "full",
  whatToExpect:
    "Large bar and restaurant with high energy during evenings and game days.",
  environment: {
    parking: "Downtown street + garages; tight at peak.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during busy nights",
      location: "Inside main level"
    },
    noise: "Moderate lunch; High evenings/game nights.",
    exits: "Large entrance + riverfront access."
  },
  insights: [
    "Energy tracks with downtown events.",
    "Calmer earlier in the day."
  ]
},
  
  /* =========================
   COVINGTON, KY
========================= */

  {
  name: "Otto’s",
  city: "Covington",
     neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Compact, street-level restaurant with a traditional dining layout. Calmer earlier in the evening, with fuller tables during peak dinner hours and weekends.",
  environment: {
    parking: "Street parking along Main + nearby public lots; may require short walk during peak times.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Uncommon except during peak dinner",
      location: "Inside main dining area"
    },
    noise: "Moderate; increases when fully seated.",
    exits: "Street-level entrance."
  },
  insights: [
    "Cozy and intimate layout.",
    "Clear shift between early evening and weekend peak.",
    "Full but controlled on busy nights."
  ]
},
   
{
  name: "The Gruff",
  city: "Covington",
    neighborhood: "Roebling/Riverfront",
  state: "KY",
  type: "full",
  whatToExpect:
    "Multi-level restaurant and bar with indoor seating and a rooftop patio. Typically lighter earlier in the day and busier during dinner hours and weekends, especially in warmer weather.",
  environment: {
    parking: "Street parking and nearby public lots; may require short walk during peak times.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner hours",
      location: "Inside main level"
    },
    noise: "Moderate; higher on rooftop and weekend evenings.",
    exits: "Street-level entrance and rooftop access."
  },
  insights: [
    "Seating level changes the overall experience.",
    "Rooftop traffic increases seasonally.",
    "Activity builds steadily into the evening."
  ]
},

{
  name: "Blinkers Tavern",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Traditional dining restaurant with a structured table layout and bar area. Generally calm earlier in the evening, with fuller tables during peak dinner hours and weekends.",
  environment: {
    parking: "Street parking along Pike Street and nearby public lots.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Uncommon except during peak dinner hours",
      location: "Inside main dining area"
    },
    noise: "Low to Moderate; conversation-friendly even when busy.",
    exits: "Street-level entrance."
  },
  insights: [
    "Reservation-shaped dinner flow.",
    "Consistent pace rather than sharp crowd spikes.",
    "Weekends bring fuller seating but remain controlled."
  ]
},

{
  name: "Carmelo’s Restaurant",
  city: "Covington",
   neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Intimate, street-level dining space with closely arranged tables. Typically quieter midweek and earlier in the evening, with busier dinner service on weekends.",
  environment: {
    parking: "Street parking and nearby public lots.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during peak dinner hours",
      location: "Inside venue"
    },
    noise: "Moderate; increases as the dining room fills.",
    exits: "Direct sidewalk access."
  },
  insights: [
    "Compact and dining-focused layout.",
    "Smaller footprint fills quickly.",
    "Activity builds gradually through dinner hours."
  ]
},

{
  name: "Coppin’s Restaurant & Bar",
  city: "Covington",
   neighborhood: "Roebling/Riverfront",
  state: "KY",
  type: "full",
  whatToExpect:
    "Hotel-based restaurant and bar with a structured, open dining room. Generally calm during weekday hours and busier during dinner and weekend periods.",
  environment: {
    parking: "Hotel parking garage available on-site; easy access.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Uncommon",
      location: "Inside hotel main level"
    },
    noise: "Moderate; typically steady rather than loud.",
    exits: "Lobby and street-level access available."
  },
  insights: [
    "Influenced by hotel traffic patterns.",
    "Predictable flow throughout the day.",
    "Weekends bring moderate increases in activity."
  ]
},

{
  name: "Anchor Grill",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Small, traditional diner with counter seating and a straightforward layout. Generally steady throughout the day, with more activity during breakfast and late-night hours.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Uncommon",
      location: "Inside venue"
    },
    noise: "Low to Moderate; conversation-friendly due to smaller footprint.",
    exits: "Street-level entrance."
  },
  insights: [
    "Routine-driven, especially during breakfast.",
    "Activity spreads across the day rather than peaking sharply.",
    "Late-night hours maintain steady traffic."
  ]
},

{
  name: "Wiseguy Lounge – Mainstrasse",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Compact lounge-style bar with a dark, enclosed interior and close seating. Typically quieter earlier in the evening and busier during weekend nights.",
  environment: {
    parking: "Street parking in Mainstrasse Village; fills on weekends.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during weekend evenings",
      location: "Inside venue"
    },
    noise: "Moderate to High; higher during weekend nightlife hours.",
    exits: "Street-level entrance."
  },
  insights: [
    "Intimate and nightlife-oriented atmosphere.",
    "Activity increases noticeably after dinner hours.",
    "Weekend evenings bring the highest crowd levels."
  ]
},
   
{
  name: "Mama’s on Main",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Street-level Italian restaurant with compact, enclosed dining room. Quieter midweek and earlier evenings; fuller during weekend dinner service.",
  environment: {
    parking: "Street parking along Main + nearby public lots.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner",
      location: "Inside main area"
    },
    noise: "Moderate; increases as dining room fills.",
    exits: "Direct sidewalk access."
  },
  insights: [
    "Smaller layout fills quickly.",
    "Energy shifts noticeably during peak hours.",
    "Intimate feel when fully seated."
  ]
},

{
  name: "Cedar",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Modern restaurant with clean, open dining layout and bar seating. Generally calm during weekdays; busier during weekend dinners.",
  environment: {
    parking: "Street parking + nearby lots; varies by time.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Uncommon except peak dinner",
      location: "Inside main floor"
    },
    noise: "Moderate; conversation-friendly earlier.",
    exits: "Street-level entrance."
  },
  insights: [
    "Bright, organized layout.",
    "Steady pacing rather than high turnover.",
    "Predictable flow during most hours."
  ]
},

{
  name: "Cock & Bull",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Neighborhood pub with bar seating and traditional dining tables. Quieter earlier in the day; busier evenings and weekends.",
  environment: {
    parking: "Street parking + nearby lots; fills during peak hours.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during busy evenings",
      location: "Inside venue"
    },
    noise: "Moderate; higher during evening bar activity.",
    exits: "Street-level access."
  },
  insights: [
    "Bar-driven layout influences feel.",
    "Steady local foot traffic.",
    "Clear daytime vs evening shift."
  ]
},

{
  name: "Doubt It Bar",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Small bar with compact interior and close seating. Quieter earlier in the day; more active late at night, especially weekends.",
  environment: {
    parking: "Street parking nearby; may require short walk.",
    restrooms: {
      capacity: "Single restroom",
      waits: "Possible during peak nights",
      location: "Inside main area"
    },
    noise: "Moderate to High late evenings.",
    exits: "Street-level entrance."
  },
  insights: [
    "Tight footprint shapes atmosphere.",
    "Late-night energy most noticeable.",
    "Timing impacts comfort more than size."
  ]
},

{
  name: "Zazou",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Restaurant and bar with contemporary layout and both dining and lounge seating. Calmer earlier; fuller on weekend evenings.",
  environment: {
    parking: "Street parking along Main + nearby public lots.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner",
      location: "Inside main floor"
    },
    noise: "Moderate; higher during weekends.",
    exits: "Street-level entrance."
  },
  insights: [
    "Stylish, social atmosphere on weekends.",
    "Clear shift between early and peak hours.",
    "Layout supports both dining and bar visits."
  ]
},

{
  name: "Libby’s Southern Comfort",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Neighborhood restaurant with bar seating and traditional dining layout. Calmer earlier; steady dinner and weekend activity.",
  environment: {
    parking: "Street parking + nearby lots; may require short walk during peak hours.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner",
      location: "Inside main area"
    },
    noise: "Moderate; increases during dinner service.",
    exits: "Street-level entrance."
  },
  insights: [
    "Activity builds gradually.",
    "Weekends noticeably busier than weekdays.",
    "Dining-focused rather than nightlife-driven."
  ]
},

{
  name: "Agave & Rye",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Large, open restaurant with prominent bar area and bold interior. Lighter afternoons; energetic evenings and weekends.",
  environment: {
    parking: "Street parking + nearby garages; fills faster weekends.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner",
      location: "Inside main area"
    },
    noise: "Moderate to High evenings.",
    exits: "Street-level access."
  },
  insights: [
    "Energy shifts after 6 pm.",
    "Bar-forward layout influences atmosphere.",
    "Weekend evenings most active."
  ]
},

{
  name: "Bouquet Restaurant",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Smaller dining-focused restaurant with structured layout. Calm earlier; fuller during peak dinner hours.",
  environment: {
    parking: "Street parking + nearby public lots.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Uncommon except peak dinner",
      location: "Inside main floor"
    },
    noise: "Low to Moderate; conversation-friendly.",
    exits: "Street-level entrance."
  },
  insights: [
    "Reservation-driven pacing.",
    "Steady energy even when full.",
    "Measured midweek flow."
  ]
},

{
  name: "Eishaus",
  city: "Covington",
    neighborhood: "MainStrasse",
  state: "KY",
  type: "full",
  whatToExpect:
    "Small dessert shop with limited seating and quick visit layout. Busiest evenings and warm weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "No public restroom",
      waits: "N/A",
      location: "Counter-service layout"
    },
    noise: "Low; brief visits.",
    exits: "Direct sidewalk access."
  },
  insights: [
    "Short stays rather than lingering.",
    "Warm evenings increase foot traffic.",
    "Activity builds after dinner hours."
  ]
},

/* =========================
   NEWPORT, KY
========================= */

{
  name: "Hofbräuhaus Newport",
  city: "Newport",
    neighborhood: "The Levee",
  state: "KY",
  type: "full",
  whatToExpect:
    "Large multi-level beer hall with communal seating. Calmer earlier; significantly busier evenings, weekends, and events.",
  environment: {
    parking: "Riverfront garages + lots; fills quickly on weekends.",
    restrooms: {
      capacity: "Multiple; accessible",
      waits: "Possible during peak events",
      location: "Inside multiple levels"
    },
    noise: "High during live music and peak hours.",
    exits: "Large entrance + patio access."
  },
  insights: [
    "Event-driven energy.",
    "Communal layout shapes experience.",
    "Weekends bring highest volume."
  ]
},
   
{
  name: "Brio Italian Grille",
  city: "Newport",
   neighborhood: "The Levee",
  state: "KY",
  type: "full",
  whatToExpect:
    "Large, traditional dining restaurant with multiple seating areas inside Newport on the Levee. Generally calmer during weekday afternoons and busier during dinner hours and weekends.",
  environment: {
    parking: "Levee garage parking directly adjacent; easy access.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner hours",
      location: "Inside main dining area"
    },
    noise: "Moderate; higher during peak dinner service.",
    exits: "Direct access to Levee walkways and exterior exits."
  },
  insights: [
    "Structured and reservation-driven, especially at dinner.",
    "Activity increases steadily after 5–6 pm.",
    "Weekends bring fuller dining rooms but remain organized."
  ]
},
   
{
  name: "Pepper Pod",
  city: "Newport",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Casual diner-style restaurant with a straightforward counter and table layout. Typically steady during breakfast and lunch hours, with lighter traffic later in the day.",
  environment: {
    parking: "Street parking nearby; may require short walk.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Uncommon except during peak breakfast hours",
      location: "Inside main dining area"
    },
    noise: "Low to Moderate; generally conversation-friendly.",
    exits: "Street-level entrance."
  },
  insights: [
    "Routine-driven, especially during morning hours.",
    "Breakfast brings the most consistent activity.",
    "Pace remains steady rather than event-driven."
  ]
},

{
  name: "Mi Cozumel",
  city: "Newport",
   neighborhood: "The Levee",
  state: "KY",
  type: "full",
  whatToExpect:
    "Traditional sit-down restaurant with a full dining room and bar seating. Generally calmer midweek and earlier in the day, with busier dinner hours and weekends.",
  environment: {
    parking: "Street parking and nearby public lots.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner service",
      location: "Inside main dining area"
    },
    noise: "Moderate; increases during peak dinner service.",
    exits: "Street-level access."
  },
  insights: [
    "Family-oriented earlier in the evening.",
    "Activity builds gradually after 5 pm.",
    "Weekend nights bring fuller dining rooms."
  ]
},

{
  name: "Par 3 Newport",
  city: "Newport",
   neighborhood: "The Levee",
  state: "KY",
  type: "full",
  whatToExpect:
    "Golf-themed bar with open interior space and entertainment-focused seating. Typically lighter during weekday afternoons and busier in the evenings and on weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during peak evening hours",
      location: "Inside venue"
    },
    noise: "Moderate to High; higher during peak evenings.",
    exits: "Street-level entrance."
  },
  insights: [
    "Activity centers around entertainment areas.",
    "Evenings bring the most noticeable increase in crowd energy.",
    "Weeknights tend to be calmer than weekends."
  ]
},

{
  name: "Mansion Hill Tavern",
  city: "Newport",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Small neighborhood bar with close seating and a traditional pub layout. Generally steady during the day and busier in the evenings, especially on weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during peak evening hours",
      location: "Inside venue"
    },
    noise: "Moderate; increases as the space fills.",
    exits: "Street-level entrance."
  },
  insights: [
    "Compact and locally driven atmosphere.",
    "Smaller footprint shapes the overall feel.",
    "Evenings bring the most noticeable change in activity."
  ]
},

{
  name: "Cov Yard",
  city: "Covington",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Outdoor bar and seating area with an open-air layout. Typically lighter earlier in the day and busier in the evenings, particularly during warm weather.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "On-site restroom facilities",
      waits: "Possible during peak evenings",
      location: "On-site outdoor facilities"
    },
    noise: "Moderate; varies based on crowd size and events.",
    exits: "Fully open outdoor layout."
  },
  insights: [
    "Weather-dependent traffic patterns.",
    "Open layout creates a different feel than enclosed bars.",
    "Weekend evenings bring the most consistent activity."
  ]
},

{
  name: "Doner House",
  city: "Newport",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Small counter-service restaurant with limited indoor seating. Typically busiest during lunch hours, with lighter traffic mid-afternoon and later evening.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Uncommon",
      location: "Inside venue"
    },
    noise: "Low; generally quick visits with light background activity.",
    exits: "Street-level entrance."
  },
  insights: [
    "Quick-stop oriented with shorter visit times.",
    "Lunch brings the most consistent flow.",
    "Activity remains steady rather than event-driven."
  ]
},

{
  name: "Purple Poulet",
  city: "Newport",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Small restaurant with a casual, enclosed dining layout. Generally calmer during weekday hours and busier during dinner and weekend periods.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during peak dinner hours",
      location: "Inside main dining area"
    },
    noise: "Moderate; increases during peak dinner hours.",
    exits: "Street-level entrance."
  },
  insights: [
    "Intimate due to smaller footprint.",
    "Activity builds gradually through the evening.",
    "Weekends bring fuller seating compared to weekdays."
  ]
},

{
  name: "McCollum’s on York",
  city: "Newport",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Neighborhood bar with bar-focused seating and a compact interior. Typically steady earlier in the day and busier during evening hours and weekends.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Indoor; limited capacity",
      waits: "Possible during weekend evenings",
      location: "Inside venue"
    },
    noise: "Moderate; higher during weekend evenings.",
    exits: "Street-level entrance."
  },
  insights: [
    "Locally driven with consistent regular patrons.",
    "Space fills quickly due to compact layout.",
    "Activity remains steady rather than event-driven."
  ]
},
   
{
  name: "Sake Bomb Sushi & Korean BBQ",
  city: "Newport",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Large dining space with a mix of table seating and grill tables inside Newport on the Levee. Typically lighter earlier in the day and noticeably busier during dinner hours and weekends.",
  environment: {
    parking: "Levee garage parking available on-site; easy access.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner hours",
      location: "Inside main dining area"
    },
    noise: "Moderate to High; increases during peak dinner hours due to table activity.",
    exits: "Located within the Levee with clear access to exterior walkways."
  },
  insights: [
    "Group-oriented layout centered around shared tables.",
    "Noticeable increase in movement and conversation during dinner hours.",
    "Weekends bring the most significant crowd levels."
  ]
},
   
{
  name: "The Baker’s Table",
  city: "Newport",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Small reservation-focused dining space with structured layout. Calm earlier; fuller during peak dinner.",
  environment: {
    parking: "Street parking along Monmouth + nearby lots.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Uncommon except peak dinner",
      location: "Inside main floor"
    },
    noise: "Low to Moderate.",
    exits: "Street-level entrance."
  },
  insights: [
    "Reservation pacing shapes flow.",
    "Steady energy even when full.",
    "Intimate layout."
  ]
},

{
  name: "Shiners on the Levee",
  city: "Newport",
   neighborhood: "The Levee",
  state: "KY",
  type: "full",
  whatToExpect:
    "Large entertainment-focused bar near riverfront. Quiet daytime; high-energy late nights.",
  environment: {
    parking: "Riverfront garages + lots; tight nightlife hours.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible late-night peaks",
      location: "Inside main building"
    },
    noise: "High during live music and late evenings.",
    exits: "Multiple access points + outdoor space."
  },
  insights: [
    "Nightlife-centered activity.",
    "Clear shift after dark.",
    "Weekend evenings busiest."
  ]
},

{
  name: "Bridgeview Box Park",
  city: "Newport",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Open-air container park with multiple vendors and outdoor seating. Lighter earlier; busier warm-weather evenings.",
  environment: {
    parking: "Shared riverfront parking nearby.",
    restrooms: {
      capacity: "Shared facilities; accessible",
      waits: "Possible peak evenings",
      location: "On-site shared restrooms"
    },
    noise: "Moderate; varies by event.",
    exits: "Fully outdoor layout."
  },
  insights: [
    "Weather-dependent traffic.",
    "Casual vendor flow.",
    "Gradual evening build."
  ]
},

{
  name: "Jerry’s Jug House",
  city: "Newport",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Small historic bar with compact interior. Steady daytime; moderate evening activity.",
  environment: {
    parking: "Street parking nearby.",
    restrooms: {
      capacity: "Single restroom",
      waits: "Possible when full",
      location: "Inside main area"
    },
    noise: "Moderate; increases as space fills.",
    exits: "Street-level entrance."
  },
  insights: [
    "Tight footprint shapes energy.",
    "Consistent local presence.",
    "Steady rather than event-driven."
  ]
},

{
  name: "New Riff Distilling",
  city: "Newport",
   neighborhood: "",
  state: "KY",
  type: "full",
  whatToExpect:
    "Modern distillery with tasting room and tours across multiple levels. Calm weekdays; busier weekend tours and events.",
  environment: {
    parking: "Dedicated on-site parking lot available.",
    restrooms: {
      capacity: "Multiple; accessible",
      waits: "Uncommon except peak tours",
      location: "Inside main building"
    },
    noise: "Low to Moderate depending on tours.",
    exits: "Multiple entrances + patio access."
  },
  insights: [
    "Tour schedule shapes traffic.",
    "Structured, organized flow.",
    "Weekends bring stronger group activity."
  ]
}

];

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}
function showRandomPlace() {

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const randomPlace = places[Math.floor(Math.random() * places.length)];

  const patternsHTML =
    randomPlace.insights && randomPlace.insights.length
      ? `<ul>${randomPlace.insights.map(i => `<li>${i}</li>`).join("")}</ul>`
      : "<p>No observed patterns yet.</p>";

  resultDiv.innerHTML = `
    <div class="card">

      <div class="label">Featured CalmPath Profile</div>

      <h2>${randomPlace.name}</h2>
      <div style="font-size:0.9rem;color:#666;margin-bottom:12px;">
        <p>${randomPlace.neighborhood ? randomPlace.neighborhood + " • " : ""}${randomPlace.city}, ${randomPlace.state}</p>
      </div>

      <div class="snapshot">
        <div class="snapshot-grid">

          <div class="snapshot-item">
            <div class="snapshot-label">Parking</div>
            <div class="snapshot-value">${randomPlace.environment.parking}</div>
          </div>

          <div class="snapshot-item">
            <div class="snapshot-label">Noise</div>
            <div class="snapshot-value">${randomPlace.environment.noise}</div>
          </div>

          <div class="snapshot-item">
            <div class="snapshot-label">Restrooms</div>
            <div class="snapshot-value">${randomPlace.environment.restrooms.capacity}</div>
          </div>

          <div class="snapshot-item">
            <div class="snapshot-label">Exits</div>
            <div class="snapshot-value">${randomPlace.environment.exits}</div>
          </div>

        </div>
      </div>

      <h3>What to expect</h3>
      <p>${randomPlace.whatToExpect}</p>

      <h3>Observed patterns</h3>
      ${patternsHTML}

    </div>
  `;
}

function searchPlace() {
  const inputRaw = document.getElementById("search").value;

    if (typeof gtag !== "undefined") {
    gtag('event', 'search', {
      search_term: inputRaw
    });
  }
   
  const input = normalize(inputRaw);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (input.length === 0) {
    showRandomPlace();
    return;
  }

  if (input.length === 1) {
    resultDiv.innerHTML = `
      <p style="margin-top:16px; color:#666;">
        Keep typing to search.
      </p>
    `;
    return;
  }

  const matches = places.filter(place =>
    normalize(place.name).includes(input)
  );

  if (matches.length === 0) {
    resultDiv.innerHTML = `
      <p style="margin-top:16px;">
        We don’t have a CalmPath profile for that place yet.
      </p>
    `;

    // Track unsuccessful search
    if (typeof gtag !== "undefined") {
      gtag('event', 'search_performed', {
        search_term: inputRaw,
        results_count: 0
      });
    }

    return;
  }

  // Track successful search
  if (typeof gtag !== "undefined") {
    gtag('event', 'search_performed', {
      search_term: inputRaw,
      results_count: matches.length
    });
  }

  matches.forEach(place => {

    // Track venue viewed
    if (typeof gtag !== "undefined") {
      gtag('event', 'venue_viewed', {
        venue_name: place.name,
        city: place.city
      });
    }

    const patternsHTML =
      place.insights && place.insights.length
        ? `<ul>${place.insights.map(i => `<li>${i}</li>`).join("")}</ul>`
        : "<p>No observed patterns yet.</p>";

    resultDiv.innerHTML += `
      <div class="card">
        <div class="label">CalmPath profile</div>

        <h2>${place.name}</h2>
        <div class="location">
          <p>${place.neighborhood ? place.neighborhood + " • " : ""}${place.city}, ${place.state}</p>
        </div>

        <div class="snapshot">
          <div class="snapshot-grid">

            <div class="snapshot-item">
              <div class="snapshot-label">Parking</div>
              <div class="snapshot-value">${place.environment.parking}</div>
            </div>

            <div class="snapshot-item">
              <div class="snapshot-label">Noise</div>
              <div class="snapshot-value">${place.environment.noise}</div>
            </div>

            <div class="snapshot-item">
              <div class="snapshot-label">Restrooms</div>
              <div class="snapshot-value">${place.environment.restrooms.capacity}</div>
            </div>

            <div class="snapshot-item">
              <div class="snapshot-label">Exits</div>
              <div class="snapshot-value">${place.environment.exits}</div>
            </div>

          </div>
        </div>

        <h3>What to expect</h3>
        <p>${place.whatToExpect}</p>

        <h3>Observed patterns</h3>
        ${patternsHTML}
      </div>
    `;
  });
}

/* =========================
   ROTATING PLACEHOLDER
========================= */

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");

  if (!searchInput || !places || places.length === 0) return;

  // Pull names automatically
  const examplePlaces = places.map(place => place.name);

  // Shuffle properly
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const shuffledPlaces = shuffleArray(examplePlaces);
  let exampleIndex = 0;

  function rotatePlaceholder() {
    searchInput.placeholder = `Try "${shuffledPlaces[exampleIndex]}"`;
    exampleIndex = (exampleIndex + 1) % shuffledPlaces.length;
  }

  rotatePlaceholder();
  setInterval(rotatePlaceholder, 2500);
});

showRandomPlace();
