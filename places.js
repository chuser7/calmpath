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
  }
];

function searchPlace() {
  const input = document.getElementById("search").value.toLowerCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const place = places.find(p =>
    p.name.toLowerCase().includes(input)
  );

  if (!place) return;

  resultDiv.innerHTML = `
    <div class="card">
      <div class="label">${place.type === "full" ? "CalmPath profile" : "Basic overview"}</div>
      <h2>${place.name}</h2>

      <h3>What to expect</h3>
      <p>${place.whatToExpect}</p>

      <h3>Environment details</h3>
      <ul>
        <li><strong>Parking:</strong> ${place.environment.parking}</li>
        <li><strong>Restroom expectations:</strong><br>
          Capacity: ${place.environment.restrooms.capacity}<br>
          Waits: ${place.environment.restrooms.waits}<br>
          Location: ${place.environment.restrooms.location}
        </li>
        <li><strong>Noise level:</strong> ${place.environment.noise}</li>
        <li><strong>Exits:</strong> ${place.environment.exits}</li>
      </ul>

      <h3>Community insights</h3>
      ${
        place.insights.length
          ? `<ul>${place.insights.map(i => `<li>${i}</li>`).join("")}</ul>`
          : "<p>No community insights yet.</p>"
      }

      <h3>Take a moment</h3>
      <p>
        Breathe in for 4 seconds.<br>
        Breathe out for 6 seconds.<br><br>
        You’re allowed to step outside or leave at any time.
      </p>
    </div>
  `;
}
