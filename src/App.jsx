import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListChar from './components/ListChar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ListChar />
    </>
  )
}

export default App
