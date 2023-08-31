var apiKey = "ef04b61f3ad1b2e2026061124be1d7ac";
var language = 'ro';

function geturrentWeatherDataUrl(city)
{
	return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${language}`;
}