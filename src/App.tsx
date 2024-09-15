import './App.css'
import DigitalClock from './components/DigitalClock'

function App() {

  return (
    <>
       <DigitalClock
        className="custom-clock"
        textColor="black"
        fontSize="16px"
        fontWeight="bold"
      />
    </>
  )
}

export default App
