import Section1 from "./components/Section1"
import Section3 from "./components/Section3"
import Section2 from "./components/Section2"
import "./weather.css"
import useWeather from "./context/WeatherData"
import Error from "./components/Error"

export default function WeatherSection() {
    const { error } = useWeather()

    return (
        <>
            {error ? <Error error={error} /> : (
                <>
                <Section1 />
                <Section2 className="section-2" />
                <Section3 className="section-3" />
                </>
        )}
        </>
    )
}