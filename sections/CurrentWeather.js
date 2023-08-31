function displayCurrentWeather()
{
    const defaultCityWeatherUrl = geturrentWeatherDataUrl("Bucharest");

    fetch(defaultCityWeatherUrl)
    .then((Response) => Response.json())
    .then((data) => {
        debugger;
        const {name, main, weather, wind, dt} = data;

        const currentDayOfTheWeek = getDayOfTheWeek(dt);
        const currentTime = getTime(dt);
        const weatherIcon = getWeatherIcon(weather[0].icon);
        const temp = main.temp;
        const realFeel = main.feels_like;
        const description = main.feels_like;
        const windSpeed = wind.speed;
        

        let weatherContainer = document.querySelector(".current-weather");
    });
}