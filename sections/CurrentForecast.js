function displayCurrentForecast(city)
{
    const cityForecastUrl = getCurrentForecastDataUrl(city);

    fetch(cityForecastUrl)
    .then((Response) => Response.json())
    .then((data) => {
        const{cnt, list} = data;
        
        populateDOMForecast(list, cnt);
    })
    
}

function populateDOMForecast(forecast, cnt)
{
    const weatherForecast = document.querySelector(".weather-forecast");

    weatherForecast.innerHTML = "";

    var currentDay = getDayOfTheWeek(forecast[0].dt);
    weatherForecast.innerHTML += `<h3 class = "weather-forecast-day">${currentDay}</h3>`;

    for(var i = 0; i < cnt; ++i)
    {
        var weatherData = Math.round(forecast[i].main.temp);
        var realFeelData = Math.round(forecast[i].main.feels_like)
        var skyData = forecast[i].weather[0].description;
        var timeData = getTime(forecast[i].dt);
        var iconData = getWeatherIcon(forecast[i].weather[0].icon);

        if(getDayOfTheWeek(forecast[i].dt) != currentDay)
        {
            currentDay = getDayOfTheWeek(forecast[i].dt);
            weatherForecast.innerHTML += `<h3 class = "weather-forecast-day">${currentDay}</h3>`;
        }
        console.log("salut");
        weatherForecast.innerHTML += `
        <div class = "weather-forecast-card-container">
            <div class = "weather-forecast-card container">
                <div class = "row justify-content-between">
                    <div class = "col">
                        <p class = "weather-forecast-card-time">${timeData}</p>
                    </div>
                    <div class = "col">
                        <img src = "${iconData}" class = "weather-forecast-card-img">
                    </div>
                    <div class = "col">
                        <p class = "weather-forecast-card-temperature"><strong>${weatherData}°C</strong></p>
                    </div>
                    <div class = "col">
                        <p class = "weather-forecast-card-sky">${skyData}</p>
                    </div>
                    <div class = "col">
                        <p class = "weather-forecast-real-feel">Real feel: <strong>${realFeelData}</strong></p>
                    </div>
                </div>
            </div>
      </div>`
    }
}