import useWeather from "../../context/WeatherData"
import SectionSkeleton from "../SectionSkeleton"

export default function Section3() {
    const {weatherData} = useWeather()
    return (
        <>
        {weatherData ? <div className="Section3">
            Working on it!
        </div> : <SectionSkeleton className="Section3"/>}
        </>
    )
}