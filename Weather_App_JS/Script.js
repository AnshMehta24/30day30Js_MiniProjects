const apiKey = "41644c24e2c0fcf6645d69cb2d26665b";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const icon = document.querySelector(".weather-icon");
const weather = document.querySelector('.weather');
async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data  = await response.json();


    if(response.status === 404) alert("Wrong City Name Try writing in lowercase");
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "Km/H";

    if(data.weather[0].main === "Clouds"){
            icon.src = "images/clouds.png";
    }
    else if(data.weather[0].main === "Clear"){
            icon.src = "images/clear.png";
    }
    else if(data.weather[0].main === "Rain"){
            icon.src = "images/rain.png";
    }
   else if(data.weather[0].main === "Drizzle"){
            icon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
            icon.src = "images/mist.png";
    }
    else if(data.weather[0].main === "Snow"){
            icon.src = "images/snow.png";
    }

    weather.style.display = "block";
    
}

searchBtn.addEventListener('click',()=>{

    checkWeather(searchBox.value);
})