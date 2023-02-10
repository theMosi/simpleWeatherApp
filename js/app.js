console.log('Naya Injoor JaHa');
let father = document.querySelector('body');

let wBtn = document.querySelector('#w-change-btn');
let cName = document.querySelector('#city');

let locationElem = document.querySelector('#w-location');
let wMainElem = document.querySelector('#w-main');
let iconElem = document.querySelector('#w-icon');
let tempElem = document.querySelector('#w-temp');
let maxTempElem = document.querySelector('#w-temp_max');
let minTempElem = document.querySelector('#w-temp_min');
let pressureElem = document.querySelector('#w-pressure');
let humidityElem = document.querySelector('#w-humidity');
let windElem = document.querySelector('#w-wind_speed');
let lonElem = document.querySelector('#w-lon');
let latElem = document.querySelector('#w-lat');


let getWeather = async () => {

    let cNameValue = cName.value;


    let wData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cNameValue}&appid=281491e8a066d857590e3ef0c1b0a679`);
    let wDataParse = await wData.json();

    locationElem.innerHTML = cNameValue;
    wMainElem.innerHTML = wDataParse.weather[0].main;
    iconElem.setAttribute('src', `http://openweathermap.org/img/wn/${wDataParse.weather[0].icon}@2x.png`)
    tempElem.innerHTML = wDataParse.main.temp;
    maxTempElem.innerHTML = wDataParse.main.temp_max;
    minTempElem.innerHTML = wDataParse.main.temp_min;
    pressureElem.innerHTML = wDataParse.main.pressure;
    humidityElem.innerHTML = wDataParse.main.humidity;
    windElem.innerHTML = wDataParse.wind.speed;
    lonElem.innerHTML = wDataParse.coord.lon;
    latElem.innerHTML = wDataParse.coord.lat;

    $('#locationModal').modal('hide');

    console.log(wDataParse)

}


wBtn.addEventListener('click', getWeather);