import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Username from './Username'
import SignUpForm from './SignUpForm'
import ShoppingListForm from './ShoppingListForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShoppingListForm/>
    {/* <SignUpForm/>
      <Username/>
      <h1>Hello World</h1> */}
    </>
  )
}

export default App
