const currentCityTag = document.querySelector(".city-name");
let currentCity = localStorage.getItem("city");

if(currentCity == undefined){
    localStorage.setItem("city", "București");
    currentCity = localStorage.getItem("city");
}

currentCityTag.innerText = currentCity;

displayCurrentWeather(currentCity);
displayCurrentForecast(currentCity);