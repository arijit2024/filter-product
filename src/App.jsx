import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import Nav from './Components/Nav'
function App() {
  
  return (
    <>
    <div className='container'>
      <Nav/>
      <Cards/>
    </div>
    </>
  )
}

export default App
