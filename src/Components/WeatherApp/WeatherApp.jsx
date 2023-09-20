import React from 'react'
import './WeatherApp.css' 

import search_icon from '../Assets/search.png'
import cloud_icon from '../Assets/cloud.png'
import humidity_icon from '../Assets/humidity.png'
import wind_icon from '../Assets/wind.png'

import {useState} from "react"
const api = {
  key: '87ed9d491c3622c5c004946a8fdaf907',
  base: 'https://api.openweathermap.org/data/2.5/',
};
const WeatherApp = () => {
    const [search, setSearch] = useState(""); 
    const [weather, setWeather] = useState({});
    const searchPressed = () =>{
  
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
    };
  
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder="search" onChange={(e)=> setSearch(e.target.value)}/>
            <div className="search-icon" onClick={searchPressed}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={cloud_icon} alt="" /> 
        </div>
       
        {typeof weather.main !== "undefined" && weather.wind !==  "undefined"? (
          <div>
                <div className="weather-location">{weather.name}</div>
                <div className="weather-temp">{weather.main.temp}°C</div>
                <div className='data-container'>
                    <div className='element'>
                        <img src={humidity_icon} alt="" className='icon' />
                        <div className="data">
                        <div className="humidity-percent">{weather.main.feels_like}°C</div>
                        <div className="text">Feels like</div>
                    </div>
                </div> 
                    <div className='element'>
                    <img src={wind_icon} alt="" className='icon' />
                    <div className="data">
                    <div className="wind-rate">{weather.wind.speed} km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
         </div>
          
          </div>
        ) : (
          ""
        )}
    </div>
  )
}
export default WeatherApp