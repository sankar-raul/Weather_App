import React, { useState, useEffect } from "react"
import { getCoordLocation } from "./api/weather"
import pressureIcon from "./componentAssets/weather/pressure.png";
import windIcon from "./componentAssets/weather/wind.png";
import humidityIcon from "./componentAssets/weather/humidity.png";
import "./stylesheets/Section1ComponentsStyle.css"
export function WeatherBox(props) {
 return (
    <div className="weatherbox box-shadow">
        <div className="infos">
            <img src={pressureIcon} alt="air pressure" className="icon" />
            <p className="value">{props.pressure}  mb</p>
            <p className="name">Air Pressure</p>
        </div>
        <div className="infos">
        <img src={windIcon} alt="wind speed" className="icon" />
            <p className="value">{props.wind} k/h</p>
            <p className="name">Wind Speed</p>
        </div>
        <div className="infos">
        <img src={humidityIcon} alt="humidity" className="icon" />
            <p className="value">{props.humidity} %</p>
            <p className="name">Humidity</p>
        </div>
    </div>
    )
}
export function WeatherInfo(props) {

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
export function MoreDetails(props) {
    const [forecastInfo, setForecastInfo] = useState(null)
    useEffect(() => {
     let latLon = {latitude: props.data.coord.lat, longitude: props.data.coord.lon}
     getCoordLocation({...latLon, forecast: true})
     .then(data => {
         setForecastInfo(data)
     })
     .catch(error => {
         console.log(error)
     })
    }, [])
     return (
         <div className="more-details">
             {(forecastInfo) ? <Forecast data={forecastInfo} className="forecast-component" /> : <p>Skeleton</p>}
             <div className="bottom">hello</div>
         </div>
     )
 }
 function Forecast(props) {
    const [forecastInfo, setForecastInfo] = useState(null)
    const [keys, setKeys] = useState(null) // keys array
    const [nowAt, setNowAt] = useState(0) // key index
    function ForecastBar({data,index}) {
       
        return (
                <div key={`${data.time.num}-${data.time.formate}-${index}`} className="forecast">
                    {data.time.num} {data.time.formate}
                </div>
        )
    }
    useEffect(() => {
        console.log(props.data)
        setKeys(Object.keys(props.data))
    }, [])
    return (
        <div key={Math.random()} className="forecast-component">
        {
          (keys) ? (
            keys.map(key => {
                var forecastList = props.data[key]
                console.log(forecastList)
                return (
                    <React.Fragment key={key}>
             {   forecastList.map((info, index) => {
                    return (
                        <ForecastBar key={`${key}-${info.time.num}-${info.time.formate}-${index}`} id={index} index={index} data={info} />
                    )
                })
            }
            </React.Fragment>
            )
        })
          ) : (
          <p key={Math.random()}>loading...</p>
        )
        }
        </div>
    )
}