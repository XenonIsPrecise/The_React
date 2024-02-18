import { useState } from 'react'

import Dice from './Dice'
import './App.css'

function App() {

  return (
    <>
    <Dice dice={[1,2,3]} color={"lightcoral"}/>
    <Dice dice={[1,2,3]} />
    </>
  )
}

export default App
