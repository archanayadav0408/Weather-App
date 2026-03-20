 async function weather(){
    let cityName = document.getElementById('city').value ;
    //alert(cityName)
    let key='d4eafee61e6d9f056a9a9e652151ab1b';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    
    let res = await fetch(url);
    // console.log(res)
    let data = await res.json();
    console.log(data)
    let temp = data.main.temp;
    let city= data.name;
    let wind = data.wind.speed;
    let humidity = data.main.humidity;

    //console.log(humidity);
    document.getElementById('cn').innerHTML= `${city}`                                                                                                                                                                 
    document.getElementById('tp').innerHTML= ` Temp-${temp}℃`
    document.getElementById('ws').innerHTML= ` Wind Speed- ${wind}km/hr`
    document.getElementById('hs').innerHTML= ` Humidity- ${humidity}`
    let a = data.weather[0].main;
    let img = document.getElementById('img');
    if(a=='Clouds'){
        img.setAttribute('src','images/clouds.png');
    }
    if(a=='Rain'){
        img.setAttribute('src','images/rain.png');
    }
    if(a=='Snow'){
        img.setAttribute('src','images/snow.png')
    }
    if(a=='Mist'){
        img.setAttribute('src','images/mist.png')
    }
    
}
//https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=d4eafee61e6d9f056a9a9e652151ab1b

