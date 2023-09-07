const bucuresti = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const CityNameElement = document.querySelector(".city-name");


function updateCity(currentCity)
{
    localStorage.setItem("city", currentCity);
}

bucuresti.addEventListener("click", function(){
    updateCity("București");
    CityNameElement.innerText = localStorage.getItem("city");
    displayCurrentWeather(localStorage.getItem("city"));
    displayCurrentForecast(localStorage.getItem("city"));
});
timisoara.addEventListener("click", function(){
    updateCity("Timișoara");
    CityNameElement.innerText = localStorage.getItem("city");
    displayCurrentWeather(localStorage.getItem("city"));
    displayCurrentForecast(localStorage.getItem("city"));
});
oradea.addEventListener("click", function(){
    updateCity("Oradea");
    CityNameElement.innerText = localStorage.getItem("city");
    displayCurrentWeather(localStorage.getItem("city"));
    displayCurrentForecast(localStorage.getItem("city"));
});