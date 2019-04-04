import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY ="f39f6666345af1a78b637c4c2b01eec8";

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;


        if (city) {
            const api_url = await
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);﻿
            const data = await api_url.json();

            var sunset = data.sys.sunset;
            var date = new Date();
            date.setTime(sunset);
            var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds();

            var sunrise = data.sys.sunrise;
            var date = new Date();
            date.setTime(sunrise);
            var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds();

            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: ""
            })
        }


    }

    render () {
        return (
            <div>
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                />
            </div>
        )
    }
}

export default App;