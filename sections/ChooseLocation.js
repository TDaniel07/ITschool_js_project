const bucuresti = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");

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
arad.addEventListener("click", function(){
    updateCity("Arad");
    CityNameElement.innerText = localStorage.getItem("city");
    displayCurrentWeather(localStorage.getItem("city"));
    displayCurrentForecast(localStorage.getItem("city"));
});
sibiu.addEventListener("click", function(){
    updateCity("Sibiu");
    CityNameElement.innerText = localStorage.getItem("city");
    displayCurrentWeather(localStorage.getItem("city"));
    displayCurrentForecast(localStorage.getItem("city"));
});