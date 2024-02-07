import Dog from './Dog'
import './App.css'
import Die from './Die';
import ListPicker from './ListPicker';
import DiceGame from './DiceGame';
import SlotMachine from './SlotMachine';
import Properties from './Properties';

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  
  return(
    <>
   <Dog name="Husky"/>
   <Die sides={12}/>
   <ListPicker arry={[1,2,3]}/>
   <ListPicker arry={["Sujal","Acharya","Sandesh","MacBook"]}/>
   <DiceGame />
   <SlotMachine icons={["🍒","🍒","🍒",]}/>
   <SlotMachine icons={["🍒","🍒","🍌",]}/>
   <Properties properties={properties}/>
   </>
   );
}

export default App;
