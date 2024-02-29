import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, CssBaseline } from '@mui/material'
import ToDoList from './toDoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CssBaseline/>
      <Button variant="contained" onClick={()=>(alert("Hi"))}>Contained</Button>
      <ToDoList />
    </>
  )
}

export default App
