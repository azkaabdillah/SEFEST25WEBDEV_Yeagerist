import React, { useState } from "react";
import axios from "axios";
import "./styling/weather.css";

const API_KEY = "242f9ee3261247758dd21721251402";
const API_URL = "https://api.weatherapi.com/v1/forecast.json";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: { key: API_KEY, q: city, days: 7 },
      });
      
      const { lat, lon } = response.data.location;
      if (lat >= -11 && lat <= 6 && lon >= 95 && lon <= 141) {
        setWeather(response.data);
      } else {
        alert("Weather data is only available for Indonesia.");
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div>
      <div className="container text-center mt-5 weather-container shadow-lg">
        <h2 className="mb-2">Prakiraan Cuaca 7 Hari</h2>
        <p className="text-muted mb-4">Cek cuaca di kota Anda</p>          
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Masukkan Nama Kota"
                value= {city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button className="btn btn-primary" onClick={fetchWeather}>
                Cek Cuaca
              </button>
            </div>
          </div>
        </div>

        {weather && weather.forecast && (
          <div className="forecast-container mt-4">
            <h3 className="mb-3">{weather.location.name}, {weather.location.region}, {weather.location.country}</h3>
            <div className="forecast-list d-flex flex-wrap justify-content-center">
              {weather.forecast.forecastday.map((day, index) => (
                <div key={index} className="card forecast-card mx-2 my-2">
                  <div className="card-body text-center">
                    <h5>{new Date(day.date).toLocaleDateString("id-ID", { weekday: "long" })}</h5>
                    <img src={day.day.condition.icon} alt={day.day.condition.text} />
                    <p>{day.day.condition.text}</p>
                    <h6>{day.day.avgtemp_c}°C</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>    
    </div>
  );
}

export default Weather;