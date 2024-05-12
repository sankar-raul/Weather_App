import { useState, useEffect, useCallback } from "react"
import getCountry  from "./plainJs/getCountry"
import "./stylesheets/sectionStyle.css"
import getIcon from "./plainJs/getIcon"
import images from "./componentAssets/images"
import Section1Skeleton from "./skeleton"
import { WeatherBox, WeatherInfo, MoreDetails } from "./Section1Componets"
export default function Section1(props) {
    const [date, setDate] = useState("")
    const [data, setData] = useState(null)
    const [country, setCountry] = useState("")
    const [icon, setIcon] = useState("")
    const getDate = () => {
        const day = new Date()
        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const dayString = days[day.getDay()] + ", " + months[day.getMonth()] + " " + day.getDate()
        setDate(dayString)
    }
    useEffect(() => {
        setCountry(props.data ? getCountry(props.data.sys.country) : '')
        setIcon(props.data ? getIcon(props.data.weather.id) : '')
        setData(props.data ? props.data : null)
        getDate()
    }, [])
    return (
        <>
   {data ? ( <div className="Section1">
            <div className="cityName">
                {data.city},<br />
                {country}
                <p className="date">{date}</p>
            </div>
            <div className="weather-main">
                <div className="weather-icon">
                    <img src={`${images(icon)}`} className="icon-" alt={data.weather.id} />
                </div>
                <div className="temperature">
                    <p className="temp">{Math.round(data.weather.temp)}<sup className="tf"><sup>°</sup>C</sup></p>
                    <p className="description">{data.weather.description}</p>
                </div>
            </div>
            <WeatherBox wind={data.wind.speed} pressure={data.weather.pressure} humidity={data.weather.humidity} />
        </div> ) : (
            <div className="Section1">
               {/* <Section1Skeleton /> */}
            </div>
        )}
        </>
    )
}

export function Section2(props) {
    return (
            <div className="Section2">
            <MoreDetails data={props.data} />
        </div>
    )
}
export function Section3(props) {

    return (
        <div className="Section3">
            Working on it!
        </div>
    )
}