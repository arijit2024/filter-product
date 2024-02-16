import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards'
import Nav from './Components/Nav'
function App() {
  const [count, setCount] = useState(0)

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
