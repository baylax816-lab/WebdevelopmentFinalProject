document.addEventListener("DOMContentLoaded", () => {


    const dateEl = document.getElementById("date");
    if (dateEl) {
        const today = new Date();
        dateEl.textContent = today.toDateString();
    }



    const weatherEl = document.getElementById("weather-data");

    if (weatherEl) {

        const apiKey = API_KEY;
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


    const toggleBtn = document.getElementById("toggleBtn");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

});