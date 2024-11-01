import './App.css'
import MainFrame from './components/MainFrame'
import Navbar from './components/Navbar'
import Weather from './Weather'

function App() {
  return (
    <>
    <MainFrame>
       <Navbar />
       <Weather />
    </MainFrame>
    </>
  )
}

export default App
