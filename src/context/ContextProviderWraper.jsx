import PropTypes from 'prop-types'
import WeatherProvider from './WeatherData/provider'
export const ContextProviderWraper = ({children}) => {
  return (
    <WeatherProvider>
        {children}
    </WeatherProvider>
  )
}
ContextProviderWraper.propTypes = {
    children: PropTypes.node.isRequired
}
export default ContextProviderWraper