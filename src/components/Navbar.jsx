import searchIcon from './componentAssets/search.png'
import menuIcon from './componentAssets/menu2.png'
import "./stylesheets/nav-bar.css"
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams, useLocation, Navigate } from 'react-router-dom'
import useWeather from '../context/WeatherData'
const Navbar = () => {
  
    // code for menu
   
    return (
    <div className="Navbar">
        <Menu />
        <Searchbox />
    </div>
    )
}
const Menu = () => {

    return (
        <>
        <img src={menuIcon} alt="Menu" className="nav-menu" />
        </>
    )
}

const Searchbox = () => {
    const { setCitySearch } = useWeather()
    const navigate = useNavigate()
    const [ searchParams, setSearchParams ] = useSearchParams()
    const pageLocation = useLocation()
    const currentCity = searchParams.get('city')?.trim()
    const [ city, setCity ] = useState(currentCity || '')
    const isSearchPath = pageLocation.pathname.includes('search') && currentCity
    const handleSubmit = (e) => {
        e.preventDefault()
        if (city !== '') {
            isSearchPath ? currentCity !== city && setSearchParams({city: city}) : navigate(`/search?city=${city}`)
        } else {
            isSearchPath && navigate('/')
        }
    }
    useEffect(() => {
        if (isSearchPath) {
            setCity(searchParams.get('city')?.trim())
            // console.log(searchParams.get('city'))
            setCitySearch(searchParams.get('city')?.trim())
        }
    }, [searchParams, isSearchPath, setCitySearch])
    useEffect(() => {
        isSearchPath || navigate('/', {replace: true})
    }, [])
    return (
    <form onSubmit={handleSubmit} className="Searchbox">
    <SBox setCity={setCity} city={city} />
    <SButton onClick={handleSubmit}/>
    </form>
    )
}

const SButton = ({onClick}) => {

    return (
        <>
        <img src={searchIcon} alt="Search" className="SButton" onClick={onClick} />
        </>
    )
}
SButton.propTypes = {
    onClick: PropTypes.func.isRequired
}
const SBox = ({city, setCity}) => {
    return (
    <div className="SBox">
         <input id="input" key="input" value={city} type="search" placeholder="Search by city name" onChange={e => setCity(e.target.value)}/>
    </div>
    )
}
SBox.propTypes = {
    city: PropTypes.string,
    setCity: PropTypes.func.isRequired
}
export default Navbar