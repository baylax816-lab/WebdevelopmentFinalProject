document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // DATE DISPLAY
    // -----------------------------
    const dateEl = document.getElementById("date");
    if (dateEl) {
        const today = new Date();
        dateEl.textContent = today.toDateString();
    }

    // -----------------------------
    // WEATHER API
    // -----------------------------
    const weatherEl = document.getElementById("weather-data");

    if (weatherEl) {

        const apiKey = "a7e0a0b94bd9af2b7e31a4652f2b8f5d"; // replace if needed
        const city = "Kansas City, US";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {

                if (data.cod !== 200) {
                    weatherEl.textContent = "Weather unavailable.";
                    return;
                }

                const temp = data.main.temp;
                const desc = data.weather[0].description;

                weatherEl.innerHTML = `
                    ${temp}°F <br>
                    ${desc}
                `;
            })
            .catch(() => {
                weatherEl.textContent = "Weather error.";
            });
    }

    // -----------------------------
    // DARK MODE TOGGLE (NEW FEATURE)
    // -----------------------------
    const toggleBtn = document.getElementById("toggleBtn");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

});