import PropTypes from 'prop-types'
import styles from './error.module.css'
import { useNavigate } from 'react-router-dom'
import useWeather from '../../context/WeatherData'
export const Error = ({error = "Something went wrong"}) => {
    const { setIsisPathChanged, citySearch } = useWeather()
    const navigate = useNavigate()
    const handleClick = () => {
        setIsisPathChanged(prev => !prev)
        navigate('/', {replace: true})
    }
    return (
        <div className={styles.error}>
            <div className={styles.error_section}>
                Opps! {error === "City not found" && citySearch ? `${citySearch} ` : ''} {error}
            </div>
            <div className={styles.error_section}>
                <button onClick={handleClick} className={styles.button}>
                    Home
                </button>
            </div>
        </div>
    )
}
Error.propTypes = {
    error: PropTypes.string
}
export default Error