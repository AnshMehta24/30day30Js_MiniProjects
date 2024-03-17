const apiKey = "41644c24e2c0fcf6645d69cb2d26665b";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data  = await response.json();

    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "Km/H";
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})