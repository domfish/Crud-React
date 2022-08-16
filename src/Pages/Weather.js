import React,{useState} from "react";
import WeatherService from '../services/WeatherService'

function Weather() {
    // const api = {
    //     key: '44b7e1c77c7d85ba4f2ea121d5e4cf6e',
    //     base: 'https://api.openweathermap.org/data/2.5/'
    // }
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const getWeather = (e) => {
        if (e.key === 'Enter') {
            // fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log(data);
            //         setWeather(data);
            //         setCity('');
            //     })

            WeatherService.getWeather(city)
            .then(res => {
                console.log(res);
                setWeather(res.data);
                setCity('');
            })
        }
    }
    function date() {
        let today = new Date();
        return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    }
    return (
        <div className="row">
            <div>
                <input placeholder='Your City' className='search-bar' type='text' onChange={e => setCity(e.target.value)} value={city} onKeyPress={getWeather} />
                <div className='location-box'>
                    <div className='location'></div>
                    <div className='date'>{date()}</div>
                </div>
                <div className='weather-box'>
                    <div className='temp'>In {weather.name} it's {weather.weather && weather.weather[0].main}</div>
                </div>
                <div className='weather'>{weather.main && weather.main.temp}°</div>
            </div>
        </div>
    )
}

export default Weather;