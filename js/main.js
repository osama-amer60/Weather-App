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


goBack.addEventListener("click",function(){
    location.reload()
})

getWeatherBtn.addEventListener("click",function(){
    let cityName = inputfield.value
    getWeather(cityName)

})



async function getWeather(city){
    let getApi = await fetch(`https://api.weatherapi.com/v1/current.json?key=d4f8b5d0cae44ecaa16122704222309&q=${city}&aqi=no`)
    let response = await getApi.json()


    if (response.error) {
        popupmessage.classList.remove("d-none")
    }else{
        popupmessage.classList.remove("warning")
        popupmessage.classList.add("getLocation")
        popupmessage.classList.remove("d-none")


        disImg.src = response.current.condition.icon
        temp.innerHTML = response.current.feelslike_c
        disCity.innerHTML = response.location.name
        disCountry.innerHTML = response.location.country
        windSpeed.innerHTML = response.current.wind_kph
        humidity.innerHTML = response.current.humidity
        setTimeout(display,1000)
    }
}

function display(){
    setting.classList.add("d-none")
    displayTheWeather.classList.remove("d-none")
}
