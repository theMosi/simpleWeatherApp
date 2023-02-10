console.log('Naya Injoor JaHa');
let $ = document;
let father = $.querySelector('body');

let wBtn = $.querySelector('#w-change-btn');
let cName = $.querySelector('#city');

let iconElem = $.querySelector('#w-icon');
let tempElem = $.querySelector('#w-temp');
let maxTempElem = $.querySelector('#w-temp_max');
let minTempElem = $.querySelector('#w-temp_min');
let pressureElem = $.querySelector('#w-pressure');
let humidityElem = $.querySelector('#w-humidity');
let windElem = $.querySelector('#w-wind_speed');
let lonElem = $.querySelector('#w-lon');
let latElem = $.querySelector('#w-lat');


let getWeather = async () => {

    let cNameValue = cName.value;


    let wData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cNameValue}&appid=281491e8a066d857590e3ef0c1b0a679`);
    let wDataParse = await wData.json();

    tempElem.innerHTML = wDataParse.main.temp;
    maxTempElem.innerHTML = wDataParse.main.temp_max;
    minTempElem.innerHTML = wDataParse.main.temp_min;
    pressureElem.innerHTML = wDataParse.main.pressure;
    humidityElem.innerHTML = wDataParse.main.humidity;
    windElem.innerHTML = wDataParse.wind.speed;
    lonElem.innerHTML = wDataParse.coord.lon;
    latElem.innerHTML = wDataParse.coord.lat;


    console.log(wDataParse)

}


wBtn.addEventListener('click', getWeather);