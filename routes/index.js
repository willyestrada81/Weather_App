const express = require("express")
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.render("index")
})
router.post('/', (req, res) => {
    let errors = [];
    let cityName = req.body.location;
    console.log(cityName);
    let location = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    let api = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=7455a3688993204b856820338e22b9c3`;

    axios.get(api)
        .then(response => {
            let err = response.status;
            console.log(err)

            function toFahrenheit(kelvin) {
                let fahrenheit = ((kelvin - 273.15) * 1.8) + 32;
                return fahrenheit.toFixed(2);
            }
            // let city = response.data.city[0].name;
            let temp = toFahrenheit(response.data.list[0].main.temp)
            // console.log(temp)
            let weather = response.data.list[0].weather[0].main;
            // console.log(weather)
            let temp_min = toFahrenheit(response.data.list[0].main.temp_min);
            // console.log(temp_min)
            let temp_max = toFahrenheit(response.data.list[0].main.temp_max);
            let wind = response.data.list[0].wind.speed;
            // console.log(temp_max)

            
            let weatherData = [
                {
                    
                    temp: temp,
                    temp_min: temp_min,
                    temp_max: temp_max,
                    wind: wind,
                    weather: weather
                }
            ]
            res.render("weather", {
                weatherData: weatherData
                
            })
            console.log(weatherData);

        })
        .catch(error => {
            
            console.log(err);
            if (error) {
                errors.push["Please, check the city spelling and try again"]
                res.render("index"
                )
            }

        });


})

module.exports = router; 