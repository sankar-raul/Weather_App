import { useState, useEffect, useCallback } from "react"
import getCountry  from "../plainJs/getCountry"
import "./sectionStyle.css"
import axios from "axios"
import getIcon from "../plainJs/getIcon"
import images from "../componentAssets/images"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { WeatherBox, WeatherInfo } from "../Section1Componets"
import { useWeather } from "../../context/WeatherData"
import SectionSkeleton from "../SectionSkeleton"
export default function Section1() {
    const [date, setDate] = useState("")
    const { weatherData, county } = useWeather()
    const [country, setCountry] = useState("")
    const [icon, setIcon] = useState("")
    const [styles, setStyles] = useState({})
    const [ thmeHue, setthmeHue ] = useState(null)
    
    const getColor = useCallback((prevHue) => {
        const hue = (Math.round(Math.random() * 8)) * 45 + 'deg'
        return hue == prevHue || hue == '180deg' ? getColor(prevHue) : hue
    }, [])

    const getDate = () => {
        const day = new Date()
        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const dayString = days[day.getDay()] + ", " + months[day.getMonth()] + " " + day.getDate()
        setDate(dayString)
    }
    const CityNameSkeleton = () => {

        return (
            <Skeleton baseColor="#e3F0fdaa" highlightColor="#07affe11" duration={1.3} width={"60%"} inline={true} height={16}/>
        )
    }

    const handleInitialState = () => {
        setIcon(getIcon(weatherData?.weather.id))
        setCountry(getCountry(weatherData?.sys.country))
        getDate()
    }
    const handlePageTheme = useCallback(() => {
        setthmeHue(prev => getColor(prev))
    }, [getColor])

    useEffect(() => {
        if (icon == 'sun') {
            setStyles({...styles, width: 'clamp(110px,40%,130px)'})
        } else {
            setStyles({...styles, width: 'var(--default-width)'})
        }
    }, [icon])

    useEffect(() => {
        weatherData && handleInitialState()
        weatherData ?? handlePageTheme()
    }, [weatherData, handlePageTheme])

    useEffect(() => {
        // console.log(thmeHue)
        document.documentElement.style.setProperty('--hue', thmeHue)
    }, [thmeHue])
    return (
        <>
   {weatherData ? ( <div className="Section1">
            <div className="cityName">
                {county ? (
                    <>
                    {county}, <br />
                    </>
                ) : <CityNameSkeleton />}
                {country}
                <p className="date">{date}</p>
            </div>
            <div className="weather-main">
                <div className="weather-icon">
                    <img style={styles} src={images(icon)} className="icon-" alt={weatherData?.weather.id} />
                </div>
                <div className="temperature">
                    <p className="temp">{Math.round(weatherData?.weather.temp)}<sup className="tf"><sup>°</sup>C</sup></p>
                    <p className="description">{weatherData?.weather.description}</p>
                </div>
            </div>
            <WeatherBox wind={weatherData?.wind.speed} pressure={weatherData?.weather.pressure} humidity={weatherData?.weather.humidity} />
        </div> ) : (
              <SectionSkeleton className="Section1"/>
        )}
        </>
    )
}
