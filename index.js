const currentCityTag = document.querySelector(".city-name");
let currentCity = localStorage.getItem("city");

if(!currentCity){
    localStorage.setItem("city", "București")
}

currentCityTag.innerText = currentCity;

displayCurrentWeather(currentCity);
displayCurrentForecast(currentCity);