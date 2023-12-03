import Properties from '../src/component/Properties'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import Property from '../src/component/Property'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element = {<Properties/>} />
      <Route path='/:id' element = {<Property/>} />
    </Routes>
    </>
  )
}

export default App
