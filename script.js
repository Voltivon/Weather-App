let weather = {
    apiKey: "6961c436be4968ac07248fd384b0bc63",
    fetchWeather: function(city) {
     fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
     ).then((response) => response.json())
     .then(data => this.displayWeather(data));
    },
    displayWeather: function(data){
     const {name} = data;
     const {icon, description} = data.weather[0];
     const {temp, humidity} = data.main;
     const { speed } = data.wind;
     console.log(name, icon, description, temp, humidity, speed);
     document.querySelector(".city").innerText = `Weather in ${name}`;
 
     // Obtain url from https://openweathermap.org/weather-conditions
     document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`
     document.querySelector(".temp").innerText = `${temp}°C`;
     document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
     document.querySelector(".description").innerText = description;
     document.querySelector(".wind").innerText = `Wind Speed: ${speed}km`;
    },
    search: function(){
     this.fetchWeather(document.querySelector(".search-bar").value)
    }
 };
 
 document.querySelector(".search-button").addEventListener("click", function(){
     weather.search()
 })
 
 document.querySelector(".search-bar").addEventListener("keyup", function(e){
     if(e.key == "Enter"){
         weather.search();
     }
 })