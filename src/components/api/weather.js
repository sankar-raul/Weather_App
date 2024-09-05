import axios from "axios"
import {formateWeather, formateForecast} from "./formateWeather"
const weatherApi = import.meta.env.VITE_OPEN_WEATHER_API
export async function getCoordLocation(...coord) {
    if (!(coord[0].latitude && coord[0].longitude)) {
        return {msg: "Both query lat and lon is required"}
    }
  const {latitude, longitude, forecast = false} = coord[0]
  const apiForWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherApi}`
    const apiForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherApi}`
    const api = forecast ? apiForecast : apiForWeather
    // console.log(api)
    try {
        const weatherInfo = await axios.get(api)
        const data = await weatherInfo.data
        const formatedData = forecast ? formateForecast(data):formateWeather(data)
        return formatedData
        } catch (error) {
            return {msg: error.message}
        }

}
export async function getCityInfo(city = false) {
    if (city) {
    try {
        const weatherInfo = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApi}`)
        const data = await weatherInfo.data
        return formateWeather(data)
    } catch (error) {
        return {msg: `${city} city's weather info not found`}
    }
} else {
    return {msg: "query city is required"}
}
}
