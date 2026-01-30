const places = [
  {
    name: "Condado Tacos – The Banks",
    type: "full",
    whatToExpect: "Casual restaurant with a bar-centric layout and an active, social atmosphere. Tends to feel louder and more crowded during peak meal times and game nights.",
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

  // Paste additional places BELOW this line
  {
  name: "Biscuit Love Cincinnati",
  type: "full",
  whatToExpect: "Bright, casual daytime restaurant with a compact dining area. Usually busiest during breakfast and brunch hours, especially on weekends, with lighter traffic later in the day.",
  environment: {
    parking: "Limited street parking nearby; nearby garages are available but brunch hours can make parking competitive.",
    restrooms: {
      capacity: "Likely limited capacity",
      waits: "Waits possible during busy times",
      location: "Not enough information yet"
    },
    noise: "Moderate; higher during peak brunch times and calmer during off-hours.",
    exits: "Easy to step outside; street-level entrance allows for quick exits."
  },
  insights: [
    "Often described as bright and bustling during morning hours.",
    "Steady flow of guests is common, especially on weekends.",
    "Timing tends to matter more than length of stay for comfort."
  ]
},
{
  name: "Jefferson Social",
  type: "full",
  whatToExpect: "Large bar with extensive outdoor seating in a downtown riverfront setting. Typically quieter earlier in the day and more energetic and busy in the evenings or around local games and events.",
  environment: {
    parking: "Limited street parking nearby; garages are available but fill quickly during games or weekend evenings.",
    restrooms: {
      capacity: "Likely multiple stalls",
      waits: "Waits possible during busy times",
      location: "Not enough information yet"
    },
    noise: "High; background noise can make conversation harder during nights, weekends, and events.",
    exits: "Easy to step outside; direct access to The Banks and nearby walkways makes stepping out straightforward."
  },
  insights: [
    "Atmosphere is commonly described as lively, especially near games and events.",
    "Outdoor seating is frequently mentioned as part of the experience."
  ]
},
{
  name: "Krueger’s Tavern",
  type: "full",
  whatToExpect: "Casual tavern with indoor seating and a small outdoor area along Vine Street. Typically calmer during midday and busier with more background energy on weekend evenings or near local events.",
  environment: {
    parking: "Limited street parking nearby; nearby garages are available but availability drops quickly on weekends and event nights.",
    restrooms: {
      capacity: "Likely limited capacity",
      waits: "Waits possible during busy times",
      location: "Not enough information yet"
    },
    noise: "Moderate; background noise increases later in the evening or on busier nights.",
    exits: "Easy to step outside; street-level entrance allows quick access to the sidewalk."
  },
  insights: [
    "Often described as a neighborhood-style tavern with a relaxed feel.",
    "Background music and energy increase later in the evening.",
    "Outdoor seating in front is mentioned as an option when weather permits."
  ]
}

];

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // remove punctuation
    .trim();
}

function searchPlace() {
  const input = normalize(document.getElementById("search").value);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (!input) return;

  const matches = places.filter(place =>
    normalize(place.name).includes(input)
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
    const insightsHTML = place.insights && place.insights.length
      ? `<ul>${place.insights.map(i => `<li>${i}</li>`).join("")}</ul>`
      : "<p>No community insights yet.</p>";

    resultDiv.innerHTML += `
      <div class="card">
        <div class="label">
          ${place.type === "full" ? "CalmPath profile" : "Basic overview"}
        </div>

        <h2>${place.name}</h2>

        <h3>What to expect</h3>
        <p>${place.whatToExpect}</p>

        <h3>Environment details</h3>
        <ul>
          <li><strong>Parking:</strong> ${place.environment.parking}</li>

          <li>
            <strong>Restroom expectations:</strong><br>
            Capacity: ${place.environment.restrooms.capacity}<br>
            Waits: ${place.environment.restrooms.waits}<br>
            Location: ${place.environment.restrooms.location}
          </li>

          <li><strong>Noise level:</strong> ${place.environment.noise}</li>
          <li><strong>Exits:</strong> ${place.environment.exits}</li>
        </ul>

        <h3>Community insights</h3>
        ${insightsHTML}

        <h3>Take a moment</h3>
        <p>
          Breathe in for 4 seconds.<br>
          Breathe out for 6 seconds.<br><br>
          You’re allowed to step outside or leave at any time.
        </p>
      </div>
    `;
  });
}
