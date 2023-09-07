function getWeatherIcon(iconCode)
{
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function windToKmPerHour(mps)
{
    return mps * 3600 / 1000;
}