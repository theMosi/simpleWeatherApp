console.log('Naya Injoor JaHa');
let $ = document;
let father = $.querySelector('body');

let wBtn = $.querySelector('#w-change-btn');
let sName = $.querySelector('#state');
let cName = $.querySelector('#city');

let getWeather = async () => {


    let sNameValue = sName.value;
    let cNameValue = cName.value;


    let wData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cNameValue}&appid=281491e8a066d857590e3ef0c1b0a679`);

    let wDataParse = await wData.json();

    console.log(wDataParse);
}


wBtn.addEventListener('click', getWeather);