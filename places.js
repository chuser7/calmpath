const places = [
  {
    name: "Condado Tacos – The Banks",
    type: "full",
    whatToExpect:
      "Casual restaurant with a bar-centric layout and an active, social atmosphere. Tends to feel louder and more crowded during peak meal times and game nights.",
    environment: {
      parking: "Street and garage parking nearby; busy during events.",
      restrooms: {
        capacity: "Likely limited capacity",
        waits: "Waits possible during busy times",
        location: "Not enough information yet"
      },
      noise: "Moderate to loud when busy",
      exits: "Easy to step outside near the entrance"
    },
    insights: [
      "Bar area tends to be louder than dining tables",
      "Crowds increase significantly on game days"
    ]
  },

  {
    name: "Biscuit Love Cincinnati",
    type: "full",
    whatToExpect:
      "Bright, casual daytime restaurant with a compact dining area. Usually busiest during breakfast and brunch hours, especially on weekends.",
    environment: {
      parking:
        "Limited street parking nearby; garages available but competitive during brunch.",
      restrooms: {
        capacity: "Likely limited capacity",
        waits: "Waits possible during busy times",
        location: "Not enough information yet"
      },
      noise:
        "Moderate; louder during peak brunch hours.",
      exits:
        "Street-level entrance allows quick access outside."
    },
    insights: [
      "Bright and bustling during morning hours.",
      "Steady guest flow on weekends."
    ]
  },

  {
    name: "Jefferson Social",
    type: "full",
    whatToExpect:
      "Large bar with extensive outdoor seating in a downtown riverfront setting. Typically quieter earlier in the day and more energetic in the evenings or around local events.",
    environment: {
      parking:
        "Limited street parking; garages fill quickly during games or weekends.",
      restrooms: {
        capacity: "Likely multiple stalls",
        waits: "Waits possible during busy times",
        location: "Not enough information yet"
      },
      noise:
        "High during nights, weekends, and events.",
      exits:
        "Direct access to The Banks; stepping outside is straightforward."
    },
    insights: [
      "Atmosphere becomes lively near games and events.",
      "Outdoor seating is a common draw."
    ]
  },

  {
    name: "Krueger’s Tavern",
    type: "full",
    whatToExpect:
      "Casual tavern with indoor seating and a small outdoor area. Calmer during midday and busier on weekend evenings.",
    environment: {
      parking:
        "Limited street parking; nearby garages available but tighter on weekends.",
      restrooms: {
        capacity: "Likely limited capacity",
        waits: "Waits possible during busy times",
        location: "Not enough information yet"
      },
      noise:
        "Moderate; increases later in the evening.",
      exits:
        "Street-level entrance allows quick sidewalk access."
    },
    insights: [
      "Relaxed neighborhood feel during the day.",
      "Energy increases later in the evening."
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

  const matches = places.filter(place => {
    const words = normalize(place.name).split(" ");
    return words.some(word => word.startsWith(input));
  });

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

        <div class="label">
          ${place.type === "full" ? "CalmPath profile" : "Basic overview"}
        </div>

        <h2>${place.name}</h2>

        <div class="snapshot">
          <div class="snapshot-grid">

            <div class="snapshot-item">
              <div class="snapshot-label">Parking</div>
              <div class="snapshot-value">
                ${place.environment.parking}
              </div>
            </div>

            <div class="snapshot-item">
              <div class="snapshot-label">Noise</div>
              <div class="snapshot-value">
                ${place.environment.noise}
              </div>
            </div>

            <div class="snapshot-item">
              <div class="snapshot-label">Restrooms</div>
              <div class="snapshot-value">
                ${place.environment.restrooms.capacity}
              </div>
            </div>

            <div class="snapshot-item">
              <div class="snapshot-label">Exits</div>
              <div class="snapshot-value">
                ${place.environment.exits}
              </div>
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
