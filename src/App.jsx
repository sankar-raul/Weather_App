import { useState, useRef } from 'react'
import './App.css'
import MainFrame from './components/MainFrame'
import Navbar from './components/Navbar'
import Weather from './Weather'

function App() {
  const navRef = useRef(null)
  const [count, setCount] = useState(0)
  const [city, setCity] = useState("")

  return (
    <>
    <MainFrame>
       <Navbar ref={navRef}/>
       <Weather />
    </MainFrame>
    </>
  )
}

export default App
