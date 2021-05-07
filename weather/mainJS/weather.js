
let weatherInput  = document.querySelector('#inp')
let weatherButton = document.querySelector('#but')

function cityName(city) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=4081593430fcd4b816fd9b82f5b49e5b')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log("data", data );
            document.querySelector(".main__second-title").innerHTML = data.name
            document.querySelector(".main__second-piont").innerHTML = "temp : " + Math.round(data.main.temp - 273) + "&deg;"
            document.querySelector(".main__second-state").innerHTML = data.weather[0]["main"];
            document.querySelector(".main__second-img").innerHTML =
                '<img src=" https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png" class="wetherImg">'
            document.querySelector("#main__second-data").innerHTML = data.wind.speed
            document.querySelector("#main__second-humidity").innerHTML = data.main.humidity
            document.querySelector("#main__second-clouds").innerHTML = data.clouds.all
        })
}

weatherButton.addEventListener("click", () => {
    cityName(weatherInput.value);
    weatherInput.value = "";
});

