console.log('Naya Injoor JaHa');
let father = document.querySelector('body');


let wBtn = document.querySelector('#w-change-btn');
let cName = document.querySelector('#city');
let cNameValue = 'London';

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



let loadFunc = () => {
    let curCity = getLocal();
    if (curCity === null) {
        cNameValue = 'London';
        setDOMFunc();
    } else {
        cNameValue = curCity;
        setDOMFunc();

    }

}


let getWeather = async (wValue) => {
    let wData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${wValue}&appid=281491e8a066d857590e3ef0c1b0a679`);
    let wDataParse = await wData.json();

    return wDataParse;
}


let setDOMFunc = async () => {

    if (cName.value !== '') {
        cNameValue = cName.value;
    }

    const wData = await getWeather(cNameValue)

    locationElem.innerHTML = cNameValue;
    wMainElem.innerHTML = wData.weather[0].main;
    iconElem.setAttribute('src', `http://openweathermap.org/img/wn/${wData.weather[0].icon}@2x.png`)
    tempElem.innerHTML = wData.main.temp;
    maxTempElem.innerHTML = wData.main.temp_max;
    minTempElem.innerHTML = wData.main.temp_min;
    pressureElem.innerHTML = wData.main.pressure;
    humidityElem.innerHTML = wData.main.humidity;
    windElem.innerHTML = wData.wind.speed;
    lonElem.innerHTML = wData.coord.lon;
    latElem.innerHTML = wData.coord.lat;

    $('#locationModal').modal('hide');

    setLocal(cNameValue);
}



let setLocal = (setValue) => {
    localStorage.setItem('city', setValue);
}


let getLocal = () => {
    return localStorage.getItem('city');
}



document.addEventListener('DOMContentLoaded', loadFunc);
wBtn.addEventListener('click', setDOMFunc);