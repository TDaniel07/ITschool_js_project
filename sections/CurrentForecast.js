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
    const weatherDay = document.createElement("p");

    weatherForecast.innerHTML = "";

    var currentDay = getDayOfTheWeek(forecast[0].dt);
    weatherDay.classList.add("weather-forecast-day");
    weatherDay.innerHTML = `<strong>${currentDay}</strong>`;
    weatherForecast.append(weatherDay);

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
            const weatherDay = document.createElement("p");
            weatherDay.classList.add("weather-forecast-day");
            weatherDay.innerHTML = `<strong>${currentDay}</strong>`;
            weatherForecast.append(weatherDay);
        }

        const weatherCardContainer = document.createElement("div");
        const weatherCard = document.createElement("div");
        const weatherCardTime = document.createElement("p");
        const weatherCardImg = document.createElement("img");
        const weatherCardTemperature = document.createElement("p");
        const weatherCardSky = document.createElement("p");
        const weatherCardRealFeel = document.createElement("p");
        const strongTemp = document.createElement("strong");
        const strongRealFeel = document.createElement("strong");

        weatherCardContainer.classList.add("weather-forecast-card-container");
        weatherCard.classList.add("weather-forecast-card");
        weatherCardTime.classList.add("weather-forecast-card-time");
        weatherCardImg.classList.add("weather-forecast-card-img");
        weatherCardTemperature.classList.add("weather-forecast-card-temperature");
        weatherCardSky.classList.add("weather-forecast-card-sky");
        weatherCardRealFeel.classList.add("weather-forecast-real-feel");

        weatherCardTime.innerText = `${timeData}`;
        weatherCardImg.setAttribute("src", iconData);
        strongTemp.innerText = `${weatherData}`
        weatherCardTemperature.append(strongTemp);
        weatherCardSky.innerText = `${skyData}`
        weatherCardRealFeel.innerText = "Real feel: ";
        weatherCardRealFeel.append(strongRealFeel);
        strongRealFeel.innerText = `${realFeelData}`;
        
        weatherCard.append(weatherCardTime);
        weatherCard.append(weatherCardImg);
        weatherCard.append(weatherCardTemperature);
        weatherCard.append(weatherCardSky);
        weatherCard.append(weatherCardRealFeel);
        weatherCardContainer.append(weatherCard);
        weatherForecast.append(weatherCardContainer);
        console.log(weatherCardContainer);

        
    }
    

}