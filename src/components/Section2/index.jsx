import { WeatherInfo, ForecastInfo } from "../Section1Componets"
import { useEffect } from "react"
import './section2.css'
export default function Section2(props) {
    useEffect(() => {
        
    }, [])
    return (
        <div className="Section2">
            <ForecastInfo data={props.data} />
            <WeatherInfo data={props.data} />
        </div>
    )
}