import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import AdvancedScoreKeeper from './AdvancedScoreKeeper'

function App() {

  return (
    <>
    <AdvancedScoreKeeper numPlayers={4} target ={10}/>
    <AdvancedScoreKeeper numPlayers={10} target={5}/>
    {/* <EmojiClicker/>
    <ScoreKeeper/> */}
    </>
  )
}

export default App
