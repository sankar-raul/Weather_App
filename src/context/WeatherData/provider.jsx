import { useEffect, useState } from "react"
import { WeatherContext } from "."
import { node } from 'prop-types'
import getLocation from "../../Coord"
import { getCityInfo, getCoordLocation, getCountyName } from '../../api/weather'
export const WeatherProvider = ({children}) => {
    const [ coordinates, setCoordinates ] = useState(null)
    const [ citySearch, setCitySearch ] = useState(null)
    const [ weatherData, setWeatherData ] = useState(null)
    const [ forecastData, setForecastData ] = useState(null)
    const [isPathChanged, setIsisPathChanged] = useState(false)
    const [ county, setCounty ] = useState(null)
    const [error, seterror] = useState(null)


    const handlePathChange = () => {
        console.log(location.pathname)
        setIsisPathChanged(prev => !prev)
    }
    useEffect(() => {
        console.log(error)
    }, [error])
    useEffect(() => {
        if (coordinates) {
            getCountyName(coordinates.latitude, coordinates.longitude).then(setCounty)
            getCoordLocation(coordinates).then(data => {
                setWeatherData(data)
        })
            getCoordLocation({...coordinates, forecast: true}).then(setForecastData)
        }
    }, [coordinates])

    useEffect(() => {
        if (citySearch) {
            setWeatherData(null)
            setForecastData(null)
            setCounty(null)
            const controller = new AbortController()
            ;(async () => {
                try {
                const data = await getCityInfo(citySearch,false,controller.signal)
                // console.log(data)
                setWeatherData(data)
                setCounty(data.city)
                } catch (error) {
                    console.log(error.message)
                    seterror(prev => error.message !== "Request aborted" ? error.message : prev)
                }
            })()
            getCityInfo(citySearch, true, controller.signal).then(setForecastData).catch(() => {
                // console.log('')
            })
            return () => {
                setWeatherData(null)
                seterror(null)
                setForecastData(null)
                controller.abort()
            }
        }
    }, [citySearch])
    
    useEffect(() => {
        if (weatherData) {
            // console.log(weatherData)
        }
    }, [weatherData])

    useEffect(() => {
        // forecastData && console.log(forecastData)
    }, [forecastData])

    useEffect(() => {
        // requensing and setting coordinates of user if user is in homepage ('/' route) and if user cordinates location is never asigned a value
        setWeatherData(null)
        setForecastData(null)
        setCounty(null)
        if (location.pathname === '/') {
            setCitySearch(null)
            if (!coordinates) {
                (async () => {
            console.log("op")
            const data = await getLocation()
            setCoordinates({latitude: data?.latitude, longitude: data?.longitude})
        })()
        } else {
            console.log(coordinates)
            getCountyName(coordinates.latitude, coordinates.longitude).then(setCounty)
            getCoordLocation(coordinates).then(setWeatherData)
            getCoordLocation({...coordinates, forecast: true}).then(setForecastData) 
    }
    } else {
        // console.log(pathname)
    }
    }, [isPathChanged])
    useEffect(() => {
        county && console.log(county)
    }, [county])
    useEffect(() => {
        // Listen for URL changes
        window.addEventListener("popstate", handlePathChange)
        return () => {
            window.removeEventListener("popstate", handlePathChange)
        }
    }, [])
  return (
    <WeatherContext.Provider value={{
        coordinates,
        setCoordinates,
        weatherData,
        forecastData,
        county,
        setCitySearch,
        citySearch,
        error,
        setIsisPathChanged
    }}>
        {children}
    </WeatherContext.Provider>
  )
}
WeatherProvider.propTypes = {
    children: node.isRequired
}
export default WeatherProvider
