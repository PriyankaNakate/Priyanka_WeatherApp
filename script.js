async function fetchWeatherData(cityName){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=tuljapur&appid=761588948b2ca457b07f2f7935550797`
    const response = await fetch(url)
    const data = await response.json();
    let city = document.getElementById("city");
    city.innerHTML = data.name;
    let windspeed = document.getElementById("wind_speed");
    windspeed.innerHTML=data.wind.speed+"km/hr";
    let humidity = document.getElementById("humidity");
    humidity.innerHTML=data.main.humidity+" g/kg";
    let temp=document.getElementById("temp");
    temp.innerHTML=Math.round((data.main.temp)-273.15)+"°C";
    console.log(data);
}

function fetchCity(){
    let cityName = document.getElementById("cityname");
    if(cityName.value===""){
        alert("Enter a City Name");
    }else{
        fetchWeatherData(cityName.value);
        cityName.value="";
    }
}