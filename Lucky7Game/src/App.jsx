import { useState } from 'react'

import Dice from './Dice'
import './App.css'
import LuckyN from './LuckyN';
import Die from './Die';
import { lessThan4 } from './utils';

function App() {

  return (
    <>
    <LuckyN winCheck={lessThan4}/>
    </>
  )
}

export default App;
