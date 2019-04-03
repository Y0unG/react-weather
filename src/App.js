import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY ="f39f6666345af1a78b637c4c2b01eec8";

class App extends React.Component {

    gettingWeather = async (e) => {
        e.preventDefault();
        const api_url = await
            fetch(`api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data);
    }

    render () {
        return (
            <div>
                <Info />
                <Form weatherMethod={this.gettingWeather} />
                <Weather />
            </div>
        )
    }
}

export default App;