let getWeatherBtn = document.getElementById("getWeatherBtn")
let setting = document.getElementById("setting")
let displayTheWeather = document.getElementById("displayTheWeather")
let inputfield = document.getElementById("inputfield")
let disImg = document.getElementById("disImg")
let temp = document.getElementById("temp")
let disCity = document.getElementById("disCity")
let disCountry = document.getElementById("disCountry")
let  windSpeed = document.getElementById("windSpeed")
let humidity = document.getElementById("humidity")
let goBack = document.getElementById("goBack")
let popupmessage = document.getElementById("popupmessage")
let getDeviceLocation = document.getElementById("getDeviceLocation")
let getApi;
let response
goBack.addEventListener("click",function(){
    location.reload()
})

getWeatherBtn.addEventListener("click",function(){
    let cityName = inputfield.value
    getWeather(cityName)

})

getDeviceLocation.addEventListener("click",function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess,onError)

    }else{
        alert("your browser not support geolocation api")
    }
})

async function getWeather(city){
     getApi = await fetch(`https://api.weatherapi.com/v1/current.json?key=d4f8b5d0cae44ecaa16122704222309&q=${city}&aqi=no`)
     response = await getApi.json()


    if (response.error) {
        popupmessage.classList.remove("d-none")
    }else{
        popupMess()
        show()
        setTimeout(display,1000)
    }
}

function display(){
    setting.classList.add("d-none")
    displayTheWeather.classList.remove("d-none")
}

async function onSuccess(position){
    const {latitude, longitude} = position.coords;
     getApi = await fetch(`https://api.weatherapi.com/v1/current.json?key=d4f8b5d0cae44ecaa16122704222309&q=${latitude,longitude}&aqi=no`)
     response = await getApi.json()
    console.log(response)
    popupMess()
    show()
    setTimeout(display,1000)

}
function popupMess(){
    popupmessage.classList.remove("warning")
    popupmessage.classList.add("getLocation")
    popupmessage.classList.remove("d-none")
}
function show(){
    disImg.src = response.current.condition.icon
    temp.innerHTML = response.current.feelslike_c
    disCity.innerHTML = response.location.name
    disCountry.innerHTML = response.location.country
    windSpeed.innerHTML = response.current.wind_kph
    humidity.innerHTML = response.current.humidity
}
function onError(){
    popupmessage.classList.remove("d-none")

}