const apiKey = "ed74495a7e853041366ce064475dd0a0";

const weatherData = document.getElementById("weather-data");
const cityInput = document.getElementById("city-input");
const form = document.querySelector("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue = cityInput.value;
    getWeatherData(cityValue);
})

async function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&APPID=${apiKey}&units=metric`); 
        
        // unuits=metric used above, returns °C instaed °F

        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        const details = [
            `Feels Like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed}m/s`
        ]

        weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`

        weatherData.querySelector(".temperature").textContent = `${temperature}°C`

        weatherData.querySelector(".description").textContent = `${description}`

        weatherData.querySelector(".details").innerHTML = details.map((detail)=>`  <div>${detail}</div>`).join(""); 

    } catch (error) {
        weatherData.querySelector(".icon").innerHTML = ""

        weatherData.querySelector(".temperature").textContent = ""

        weatherData.querySelector(".description").textContent = "An error occured. Please try again later"

        weatherData.querySelector(".details").innerHTML = ""
    }
}