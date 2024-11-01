import { WeatherInfo, ForecastInfo } from "../Section1Componets"
import { useEffect } from "react"
import './section2.css'
export default function Section2() {
    useEffect(() => {
        
    }, [])
    return (
        <div className="Section2">
            <ForecastInfo />
            <WeatherInfo />
        </div>
    )
}