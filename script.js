async function fetchWeatherData(cityName){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=761588948b2ca457b07f2f7935550797`
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
}

function fetchCity(){
    let cityName = document.getElementById("city_name");
    if(cityName===""){
        alert("Enter a City Name");
    }else{
        fetchWeatherData(cityName.value);
        cityName.value="";
    }
}