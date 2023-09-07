function displayCurrentWeather(City)
{
    const CityWeatherUrl = getCurrentWeatherDataUrl(City);
    
    fetch(CityWeatherUrl)
    .then((Response) => Response.json())
    .then((data) => {
        const {name, main, weather, wind, dt} = data;

        const currentDayOfTheWeek = getDayOfTheWeek(dt);
        const currentTime = getTime(dt);
        const weatherIcon = getWeatherIcon(weather[0].icon);
        const temp = Math.round(main.temp);
        const realFeel = Math.round(main.feels_like);
        const description = weather[0].description;
        const windSpeed = Math.round(windToKmPerHour(wind.speed));

        populateDOM(currentDayOfTheWeek, currentTime, weatherIcon, temp, realFeel, description, windSpeed);
    });
}

function populateDOM(currentDayOfTheWeek, currentTime, weatherIcon, temp, realFeel, description, windSpeed)
{
    const cityNameData = document.querySelector(".city-name strong");
    const dateData = document.querySelector(".date-and-time strong");
    const timeData = document.querySelector(".date-and-time p");
    const temperatureData = document.querySelector(".temperature strong");
    const temperatureImage = document.querySelector(".temperature img");
    const realFeelData = document.querySelector(".real-feel strong");
    const skyData = document.querySelector(".sky");
    const windData = document.querySelector(".wind strong");


    cityNameData.innerText = `${localStorage.getItem("city")}`;
    dateData.innerText = `${currentDayOfTheWeek}`;
    timeData.innerText = `${currentTime}`
    temperatureData.innerText = `${temp}°C`;
    temperatureImage.setAttribute("src", weatherIcon);
    realFeelData.innerText = `${realFeel}°C`;
    skyData.innerText = description;
    windData.innerText = `${windSpeed} km/h`;
}