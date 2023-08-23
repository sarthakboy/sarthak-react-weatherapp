
import React, { useState } from 'react';

import './WeatherApp.css';

import search_icon from '../Assets/search.png';
import cloud_icon from '../Assets/cloud.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WeatherApp = () => {
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [temperature, setTemperature] = useState('');
    const [location, setLocation] = useState('');

    const api_key = "00ae976d38e004c45c78de347bc839d8";

    const search = async () => {
        const cityInput = document.querySelector(".cityInput");
        if (cityInput.value === "") {
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=Metric&appid=${api_key}`;
        const response = await fetch(url);
        const data = await response.json();

        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setTemperature(data.main.temp);
        setLocation(data.name);
    };

    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search" />
                <div className="search-icon" onClick={search}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">{temperature}°c</div>
            <div className="weather-location">{location}</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" />
                    <div className="data">
                        <div className="humidity-percentage">{humidity}%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" />
                    <div className="data">
                        <div className="wind-rate">{wind} km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
