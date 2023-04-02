
import './App.css'
import {Navbar, Banner, About, Home }from './components'
import { Route, BrowserRouter, Routes } from 'react-router-dom';



function App() {


  return (
    <div className="App">
      <BrowserRouter>
<Navbar/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route path='/banner' element={<Banner/>}/>
  <Route path='/about' element={<About/>}/>








</Routes>
</BrowserRouter>
    </div>
  )
}

export default App
