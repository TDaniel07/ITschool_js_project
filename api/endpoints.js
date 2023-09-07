var language = 'ro';

function getCurrentWeatherDataUrl(city)
{
	return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=${language}`;
}

function getCurrentForecastDataUrl(city)
{
	return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=${language}`;
}