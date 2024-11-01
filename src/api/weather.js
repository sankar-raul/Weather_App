import axios from "axios"
import {formateWeather, formateForecast} from "./formateWeather"
const weatherApi = import.meta.env.VITE_OPEN_WEATHER_API
export async function getCoordLocation(coord) {
    if (!(coord?.latitude && coord?.longitude)) {
        return {msg: "Both query lat and lon is required"}
    }
  const {latitude, longitude, forecast = false} = coord
  const apiForWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherApi}`
    const apiForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${weatherApi}`
    const api = forecast ? apiForecast : apiForWeather
    // console.log(api)
    try {
        const weatherInfo = await axios.get(api)
        const data = await weatherInfo.data
        const formatedData = forecast ? formateForecast(data) : formateWeather(data)
        return formatedData
        } catch (error) {
            return {msg: error.message}
        }

}
export async function getCityInfo(city, forecast, signal) {
    const [apiForWeather, apiForForecast] = [`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApi}`, `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApi}`]
    const endPoint = forecast ? apiForForecast : apiForWeather

    if (city) {
    try {
        const weatherInfo = await axios.get(endPoint, {signal: signal})
        const data = await weatherInfo.data
        return forecast ? formateForecast(data) : formateWeather(data)
    } catch (error) {
        return null
    }
} else {
    return {msg: "query city is required"}
}
}
export const getCountyName = async (lat, lon) => {
    const _data = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat},${lon}&key=ad486f2f305d4b15ba0d55787d0e4b1e`)
    console.log(_data?.data.results[0].components.county, "county")
    return await _data?.data.results[0].components.county || _data?.data.results[0].components.city || _data?.data.results[0].components.state || _data?.data.results[0].components.country
}
const WeatherAPI = {getCoordLocation, getCityInfo, getCountyName}
export default WeatherAPI