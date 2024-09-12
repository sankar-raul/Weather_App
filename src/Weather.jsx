import { useState, useEffect } from "react"
import axios from "axios"
import getLocation from "./Coord.js"
import { getCoordLocation } from "./components/api/weather.js"
import Section1 from "./components/Section1"
import Section3 from "./components/Section3"
import Section2 from "./components/Section2"
import "./weather.css"
import SectionSkeleton from "./components/SectionSkeleton"
const api = ""
export default function WeatherSection() {
    const [data, setData] = useState(null)
    const isProduction = false
    const fetchData = () => {
        try {
            getLocation()
            .then(async data => {
                // const info = await axios.get(`${host}/weather/coord?lat=${data.latitude}&lon=${data.longitude}`)
                const weatherInfo = await getCoordLocation(data)
                setData(weatherInfo)
            })
            .catch(error => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
       <>
        {data ? (
            <>
                <Section1 data={data}/>
                <Section2 className="section-2" data={data}/>
                <Section3 className="section-3" data={data} />
            </>
            ) : (
                <>
               <SectionSkeleton className="Section1"/>
               <SectionSkeleton className="Section2"/>
               <SectionSkeleton className="Section3"/>
                </>
            )}
       </>
    )
}