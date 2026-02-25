const places = [

  {
    name: "Condado Tacos – The Banks",
    type: "full",
    whatToExpect:
      "Casual restaurant with a bar-centric layout and an active, social atmosphere. Tends to feel louder and more crowded during peak meal times and game nights.",
    environment: {
      parking: "Street + garage nearby; tight during events.",
      restrooms: {
        capacity: "Limited capacity",
        waits: "Waits possible during busy times",
        location: "Inside main area"
      },
      noise: "Moderate–Loud when busy.",
      exits: "Street-level; easy step outside."
    },
    insights: [
      "Bar area tends to be louder than dining tables.",
      "Crowds increase significantly on game days."
    ]
  },

  {
    name: "Biscuit Love Cincinnati",
    type: "full",
    whatToExpect:
      "Bright, casual daytime restaurant with a compact dining area. Busiest during breakfast and weekend brunch hours.",
    environment: {
      parking: "Street + nearby garages; competitive during brunch.",
      restrooms: {
        capacity: "Limited capacity",
        waits: "Waits possible during peak brunch",
        location: "Inside restaurant"
      },
      noise: "Moderate; higher during brunch rush.",
      exits: "Street-level entrance."
    },
    insights: [
      "Bright and bustling during mornings.",
      "Steady weekend traffic."
    ]
  },

  {
    name: "Jefferson Social",
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
      noise: "High evenings/weekends.",
      exits: "Direct access to The Banks."
    },
    insights: [
      "Energy closely tied to game schedules.",
      "Outdoor seating is a major draw."
    ]
  },

  {
    name: "Krueger’s Tavern",
    type: "full",
    whatToExpect:
      "Casual tavern with indoor and small outdoor seating. Calmer midday; busier on weekends.",
    environment: {
      parking: "Street + nearby garages; tighter on weekends.",
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
    type: "full",
    whatToExpect:
      "Spacious taco and tequila spot with indoor and outdoor seating. Livelier in evenings and on Taco Tuesdays.",
    environment: {
      parking: "Street + garages; tight at peak.",
      restrooms: {
        capacity: "Indoor; accessible",
        waits: "Possible during busy times",
        location: "Inside main dining area"
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
    name: "MadTree Brewing",
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
      noise: "Low–Moderate daytime; High evenings.",
      exits: "Large patio and multiple exits."
    },
    insights: [
      "Open, social layout.",
      "Crowds increase significantly on weekends."
    ]
  },

  {
    name: "Maplewood Kitchen + Bar",
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
      "Crowds track closely with stadium schedules.",
      "Spacious layout accommodates groups."
    ]
  },

  {
    name: "O’Malley’s in the Alley",
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
      noise: "Moderate–High evenings.",
      exits: "Street-level access."
    },
    insights: [
      "Energetic pre-game gathering spot.",
      "Friendly, social environment."
    ]
  },

  {
    name: "Rhinegeist Brewery",
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
      "Noticeably calmer earlier in the day."
    ]
  },
  
  {
  name: "Otto’s",
  type: "full",
  whatToExpect:
    "Compact, street-level restaurant with a traditional dining room layout. Calmer earlier in the evening, with fuller tables and steadier pacing during peak dinner hours and weekends.",
  environment: {
    parking: "Street parking along Main Street + nearby public lots; may require a short walk during peak times.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak dinner hours",
      location: "Inside main dining area"
    },
    noise: "Moderate; conversation-friendly earlier, increasing when fully seated.",
    exits: "Direct Main Street access."
  },
  insights: [
    "Dining flow tends to feel structured and steady.",
    "Weekend evenings reach full capacity but remain controlled.",
    "Earlier dinner hours feel less rushed."
  ]
},

{
  name: "Mama’s on Main",
  type: "full",
  whatToExpect:
    "Street-level Italian restaurant with a compact, enclosed dining room. Typically quieter midweek and earlier in the evening, with closer seating and increased activity during weekend dinner hours.",
  environment: {
    parking: "Street parking along Main Street + nearby public parking.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible as dining room fills",
      location: "Inside main dining area"
    },
    noise: "Moderate; increases during peak dinner service.",
    exits: "Direct sidewalk access."
  },
  insights: [
    "Smaller layout fills quickly during peak hours.",
    "Atmosphere shifts noticeably between early and peak dinner times.",
    "Seating proximity influences overall feel when full."
  ]
},

{
  name: "Cedar",
  type: "full",
  whatToExpect:
    "Modern restaurant with an open dining layout and bar seating. Generally calm during weekday hours, with a steadier dinner crowd on weekends.",
  environment: {
    parking: "Street parking + nearby lots; availability varies by time.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Uncommon except during peak dinner",
      location: "Inside main area"
    },
    noise: "Moderate; conversation-friendly earlier, increasing slightly during peak dinner.",
    exits: "Street-level entrance."
  },
  insights: [
    "Layout supports steady, organized dining flow.",
    "Weekend evenings bring noticeable but controlled activity.",
    "Pacing remains consistent rather than high-turnover."
  ]
},

{
  name: "Cock & Bull",
  type: "full",
  whatToExpect:
    "Neighborhood pub with bar seating and traditional dining tables. Quieter earlier in the day, with increased activity during evenings and weekends.",
  environment: {
    parking: "Street parking + nearby lots; tighter during peak evening hours.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during busy evenings",
      location: "Inside main floor"
    },
    noise: "Moderate; higher during evening bar activity.",
    exits: "Street-level access."
  },
  insights: [
    "Bar-driven layout influences overall energy.",
    "Daytime and evening experiences differ noticeably.",
    "Evening activity centers around bar seating."
  ]
},

{
  name: "Doubt It Bar",
  type: "full",
  whatToExpect:
    "Small bar with a compact interior and close seating. Quieter earlier in the day, with increased activity later at night and on weekends.",
  environment: {
    parking: "Street parking nearby; may require walking during busier nights.",
    restrooms: {
      capacity: "Single restroom",
      waits: "Possible during peak late-night hours",
      location: "Inside main area"
    },
    noise: "Moderate to High; increases as the space fills later in the evening.",
    exits: "Street-level entrance."
  },
  insights: [
    "Compact layout shapes overall energy level.",
    "Late-night hours drive peak activity.",
    "Timing influences comfort more than venue size."
  ]
},

{
  name: "Zazou",
  type: "full",
  whatToExpect:
    "Restaurant and bar with contemporary dining and lounge-style seating. Calmer earlier in the evening, with fuller seating and increased activity on weekends.",
  environment: {
    parking: "Street parking along Main Street + nearby public lots.",
    restrooms: {
      capacity: "Indoor; accessible",
      waits: "Possible during peak weekend dinner hours",
      location: "Inside main level"
    },
    noise: "Moderate; higher during weekend dinner and bar activity.",
    exits: "Direct Main Street access."
  },
  insights: [
    "Layout supports both seated dining and bar-focused visits.",
    "Weekend evenings shift energy noticeably.",
    "Earlier hours feel more predictable and paced."
  ]
}

];

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

function searchPlace() {
  const input = normalize(document.getElementById("search").value);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!input) return;

  const matches = places.filter(place =>
    normalize(place.name).startsWith(input)
  );

  if (matches.length === 0) {
    resultDiv.innerHTML = `
      <p style="margin-top:16px;">
        We don’t have a CalmPath profile for that place yet. Please let me know what place you'd like to see and I'll get it added.
      </p>
    `;
    return;
  }

  matches.forEach(place => {
    const patternsHTML =
      place.insights && place.insights.length
        ? `<ul>${place.insights.map(i => `<li>${i}</li>`).join("")}</ul>`
        : "<p>No observed patterns yet.</p>";

    resultDiv.innerHTML += `
      <div class="card">
        <div class="label">CalmPath profile</div>

        <h2>${place.name}</h2>

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

/* ============================
   Rotating Placeholder Examples
   ============================ */

const searchInput = document.getElementById("search");

const examplePlaces = [
  "Rhinegeist Brewery",
  "Condado Tacos – The Banks",
  "Pepp & Dolores",
  "MadTree Brewing",
  "Moerlein Lager House",
  "Yard House"
];

let exampleIndex = 0;

searchInput.placeholder = `Search a place (ex: ${examplePlaces[0]})`;

const rotatePlaceholder = setInterval(() => {
  if (searchInput.value.length > 0) {
    clearInterval(rotatePlaceholder);
    return;
  }

  exampleIndex = (exampleIndex + 1) % examplePlaces.length;
  searchInput.placeholder = `Search a place (ex: ${examplePlaces[exampleIndex]})`;
}, 3000);
