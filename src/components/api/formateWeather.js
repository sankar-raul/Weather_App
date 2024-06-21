const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
export function formateWeather(data, isKelvin = false) {
    const d = {}
    if (data.coord) d.coord = data.coord
    d.weather = {...data.weather[0], ...data.main}
    d.weather.visibility = data.visibility
    d.wind = data.wind
    d.clouds = data.clouds.all
    d.sys = data.sys
    if (data.dt && data.dt_txt) {
        d.dt = data.dt
        d.dt_txt = data.dt_txt
        const dateList = data.dt_txt.split(' ')[0].split('-')
        const day = new Date(data.dt_txt.split(' ')[0])
        d.day = days[day.getDay()]
        d.date = day.getDate()
    }
    if (!isKelvin) {
    d.sys.timezone = data.timezone // its
    d.city = data.name // its
    d.code = data.cod // its
    } if (isKelvin) { 
       d.time = checkAMPM(data.dt_txt.slice(11, 13))
    }
    // console.log(data, "  k o k o kok")
    return d
}
function checkAMPM(time = NaN) {
    const timeRes = {} // result
    if (isNaN(time)) {
        return time;
    }
    timeRes.num = time > 12 ? time - 12: (time == 0) ? 12 : time
    timeRes.formate = time > 12 ? "PM" : (time == 0) ? "PM" : "AM"
    return timeRes
}
export function formateForecast(data) {
     const forecasts = data.list
    const forecastsByDay = {};
    const result = {}
        forecasts.forEach(forecast => {
            const dateTime = new Date(forecast.dt_txt);
            const date = dateTime.toISOString().split('T')[0]
            
            if (!forecastsByDay[date]) {
                forecastsByDay[date] = []
            }
            
            forecastsByDay[date].push(forecast);
        })
        for (let i = 0; i < 6; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            const dateString = date.toISOString().split('T')[0];
            const dayForecasts = forecastsByDay[dateString];
            
            if (dayForecasts) {
                dayForecasts.forEach(forecast => {
                    if (result[dateString]) {
                        result[dateString].push(formateWeather(forecast,true))
                        } else {
                            result[dateString] = []
                            result[dateString].push(formateWeather(forecast,true))
                        }
                });
            } else {
                console.log(`No forecasts available for ${dateString}.`);
            }
        }
        return result
}