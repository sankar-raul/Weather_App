import searchIcon from './componentAssets/search.png'
import menuIcon from './componentAssets/menu2.png'
import "./stylesheets/nav-bar.css"
import { useState, Component } from 'react'
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.city = ""
    }
    getCity() {
        return this.city
    }
  Searchbox() {
        const SButton = () => {
    
            return (
                <>
                <img src={searchIcon} alt="Search" className="SButton" />
                </>
            )
        }
        const SBox = ({handleCityChange}) => {
            const [ city, setCity ] = useState('')
            const cityChanged = (e) => {
                setCity(prevCity => e.target.value)
                handleCityChange(e.target.value)
            }
            return (
            <div className="SBox">
                 <input id="input" key="input" value={city} type="search" placeholder="Search by city name" onChange={cityChanged}/>
            </div>
            )
        }
        return (
        <div className="Searchbox">
        <SBox handleCityChange={(cityName) => this.city = cityName}/>
        <SButton />
        </div>
        )
    }
    // code for menu
    Menu() {

        return (
            <>
            <img src={menuIcon} alt="Menu" className="nav-menu" />
            </>
        )
    }
    render() {
    return (
    <div className="Navbar">
       { this.Menu() }
        { this.Searchbox() }
    </div>
    )
}
}
export default Navbar