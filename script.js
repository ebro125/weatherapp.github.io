let weather = {
    "apiKey" :"b7a2edb71221230fd8609ff82f59b8b0",
    fetchWeather :function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city + 
            "&units=metric&appid=" 
            + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather : function(data){
         const { name } = data;
         const { icon , description } = data.weather[0];
         const { temp , humidity } = data.main;
         const { speed } = data.wind;
        
         document.querySelector(".city").innerText = " Weather in " + name;
         document.querySelector(".icon").src =
         "https://openweathermap.org/img/wn/" + icon + ".png";
         document.querySelector(".description").innerText = description;
         document.querySelector(".temp").innerText = temp + " °C";
         document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
         document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
         document.querySelector(".weather").classList.remove("loading");
         document.body.style.backgroundImage =
      "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg" + name + "')";
    },
    search : function (){
       this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click" , function(){ 
 weather.search();
})

document
  .querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

  weather.fetchWeather("Kolkata");

//https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=b7a2edb71221230fd8609ff82f59b8b0
