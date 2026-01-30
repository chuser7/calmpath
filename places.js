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
