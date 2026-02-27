const places = [

/* =========================
   CINCINNATI, OH
========================= */

{
  name: "Condado Tacos – The Banks",
  city: "Cincinnati",
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
  name: "Biscuit Love Cincinnati",
  city: "Cincinnati",
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
  name: "Mama’s on Main",
  city: "Covington",
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
  name: "The Baker’s Table",
  city: "Newport",
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
    <div class="location">
      ${place.city}, ${place.state}
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


/* =========================
   SEARCH LOGIC
========================= */

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

if (input.length === 0) {
  resultDiv.innerHTML = "";
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
    normalize(place.name).startsWith(input)
  );

  if (matches.length === 0) {
    resultDiv.innerHTML = `
      <p style="margin-top:16px;">
        We don’t have a CalmPath profile for that place yet.
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
        <div class="location">
          ${place.city}, ${place.state}
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
