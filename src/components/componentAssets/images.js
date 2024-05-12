import thunderstormRain from './weather/thunderstorm-rain.png';
import thunderstorm from './weather/thunderstorm.png';
import sunRain from './weather/sun-rain.png';
import sunrain2 from './weather/sun-rain2.png';
import rain3 from './weather/rain3.png';
import rain from './weather/rain.png';
import rain2 from './weather/rain2.png';
import snow from './weather/snow.png';
import snowCloud from './weather/snow-cloud.png';
import snowRain from './weather/snow-rain.png';
import sunCloud from './weather/sun-cloud.png';
import sun from './weather/sun.png';

const images = {
  "thunderstorm-rain": thunderstormRain,
  "thunderstorm": thunderstorm,
  "sun-rain": sunRain,
  "sunrain2": sunrain2,
  "rain3": rain3,
  "rain": rain,
  "rain2": rain2,
  "snow": snow,
  "snow-cloud": snowCloud,
  "snow-rain": snowRain,
  "sun-cloud": sunCloud,
  "sun": sun
};

function getImage(icon) {
  return images[icon] || images[sunCloud];
}

export default getImage;
