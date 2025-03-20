const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city === '') {
        alert('Please enter a city!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
            } else {
                displayWeather(data);
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-info');
    weatherContainer.innerHTML = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
