import { useState, useEffect, useCallback } from "react"
import getCountry  from "../plainJs/getCountry"
import "./sectionStyle.css"
import axios from "axios"
import getIcon from "../plainJs/getIcon"
import images from "../componentAssets/images"
import { WeatherBox, WeatherInfo } from "../Section1Componets"
export default function Section1(props) {
    const [date, setDate] = useState("")
    const [data, setData] = useState(null)
    const [country, setCountry] = useState("")
    const [icon, setIcon] = useState("")
    const [styles, setStyles] = useState({})
    const [county, setCounty] = useState(null)
    const getCountyName = async () => {
        const _data = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${props.data.coord.lat},${props.data.coord.lon}&key=ad486f2f305d4b15ba0d55787d0e4b1e`)
        setCounty(_data.data.results[0].components.county)
    }
    const getDate = () => {
        const day = new Date()
        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const dayString = days[day.getDay()] + ", " + months[day.getMonth()] + " " + day.getDate()
        setDate(dayString)
    }
    useEffect(() => {
        if (icon == 'sun') {
            setStyles({...styles, width: 'clamp(110px,40%,130px)'})
        }
        getCountyName()
        setCountry(props.data ? getCountry(props.data.sys.country) : '')
        setIcon(props.data ? getIcon(props.data.weather.id) : '')
        setData(props.data ? props.data : null)
        getDate()
    }, [])
    return (
        <>
   {data ? ( <div className="Section1">
            <div className="cityName">
                {county || data.city},<br />
                {country}
                <p className="date">{date}</p>
            </div>
            <div className="weather-main">
                <div className="weather-icon">
                    <img style={styles} src={images(icon)} className="icon-" alt={data.weather.id} />
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