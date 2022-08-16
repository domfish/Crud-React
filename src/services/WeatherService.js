import axios from 'axios';

const getWeather=(city)=> {
    const api = {
        key: '44b7e1c77c7d85ba4f2ea121d5e4cf6e',
        base: 'https://api.openweathermap.org/data/2.5/'
    }

    return axios.get(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)    
}

const WeatherService ={
getWeather,
}



export default WeatherService