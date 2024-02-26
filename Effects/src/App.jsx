import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Quotes from './Quotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Quotes/>
      <h1>Click to Increase by 1</h1>
      <Counter/>

    </>
  )
}

export default App
