import { Fragment, useEffect } from "react"
import pressureIcon from "./componentAssets/weather/pressure.png";
import windIcon from "./componentAssets/weather/wind.png";
import getIcon from "./plainJs/getIcon"
import PropTypes from 'prop-types'
import images from "./componentAssets/images"
import { Section2ForecastSkeleton } from "./SectionSkeleton";
import humidityIcon from "./componentAssets/weather/humidity.png";
import "./stylesheets/Section1ComponentsStyle.css"
import useWeather from "../context/WeatherData";
export function WeatherBox({pressure, wind, humidity}) {
 return (
    <div className="weatherbox box-shadow">
        <div className="infos">
            <img src={pressureIcon} alt="air pressure" className="icon" />
            <p className="value">{pressure}  mb</p>
            <p className="name">Air Pressure</p>
        </div>
        <div className="infos">
        <img src={windIcon} alt="wind speed" className="icon" />
            <p className="value">{wind} k/h</p>
            <p className="name">Wind Speed</p>
        </div>
        <div className="infos">
        <img src={humidityIcon} alt="humidity" className="icon" />
            <p className="value">{humidity} %</p>
            <p className="name">Humidity</p>
        </div>
    </div>
    )
}
WeatherBox.propTypes = {
    pressure: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired
}
export function WeatherInfo() {

    return (
        <div className="weather-info">
            <div className="weather-info-tab box-shadow"> 
            </div>
            <div className="weather-info-tab box-shadow">
         
            </div>
            <div className="weather-info-tab box-shadow">
          
            </div>
        </div>
    )
}
export function ForecastInfo() {
    const { forecastData } = useWeather()
    
     return (
         <>
            {forecastData ? <Forecast forecastData={forecastData} className="forecast-container" /> : <Section2ForecastSkeleton />}
         </>
     )
 }
 function Forecast({forecastData, className}) {
    
    return (
        <div key={Math.random()} className={className}>
        {
            Object.keys(forecastData).map(key => {
                const forecastList = forecastData[key]
                return (
                    <Fragment key={key}>
             {   forecastList.map((info, index) => {
                    return (
                        <Fragment key={index}>
                            <ForecastBar data={info} />
                        </Fragment>
                    )
                })
            }
            </Fragment>
            )
        })
        }
        </div>
    )
}
Forecast.propTypes = {
    forecastData: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired
}
function ForecastBar({data}) {
    return (
            <div className="forecast box-shadow">
                <img src={images(getIcon(data.weather.id))} alt={data.weather.id} className="forecast-icon" />
                <p className="percentage">
                    {Math.round(data.weather.temp - 273.15)} <sup>°</sup><sup>c</sup>
                </p>
                <p className="time-stamp">
                    <span className="forecast-time">{data.time.num} {data.time.formate},</span>
                    <span className="forecast-day"> {data.day}</span>
                    <span className="forecast-date"> {data.date}</span>
                </p>
            </div>
        )
}
ForecastBar.propTypes = {
    data: PropTypes.object.isRequired,
}