const apiKey = 'e8b27c92d5af45882b6036e460c2daeb'; // Replace with your actual API key

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultBox = document.getElementById('weatherResult');

  if (!city) {
    resultBox.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      resultBox.innerHTML = `<p>City not found!</p>`;
    } else {
      resultBox.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    }
  } catch (error) {
    resultBox.innerHTML = `<p>Failed to fetch data. Please try again.</p>`;
  }
}



