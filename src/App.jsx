import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Header/>
       <Sidebar/>
    </div>
  
  )
}

export default App
