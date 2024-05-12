export default function getIcon(weatherId = 800) {
    const ids = [199,202,232,311,313,321,502,521,531,601,613,622,781,801,804]
    const icons = ["thunderstorm-rain","thunderstorm","sun-rain","sunrain2","rain3","rain3","rain","rain2","snow","snow-cloud","snow-rain","sun-cloud","sun","sun-cloud"]
    const res = icons.filter((icon, index) => {
        return weatherId > ids[index] && weatherId <= ids[index + 1]
    })
    return `${res[0]}.png`
}