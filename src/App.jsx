import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(10);

  const [side, setSide] = useState('0');
  function updateSide(e) {
    if (side === '0') {
      setSide('1');
    } else {
      setSide('0');
    }
  }

  const [cardNum, setCardNum] = useState(0);
  function updateCardNum(e){
    setSide('0');
    setCardNum(Math.floor(Math.random() * 10));
  }

  return (
    <>
      <h1>Name that Author!</h1>
      <h4>With this deck, you'll learn the authors of some famous books!</h4>
      <h4>Number of cards: {count}</h4>
      <div className = "flashcardArea">
        <button onClick={updateSide}><Card numCard = {cardNum} titleOrAuthor = {side}/></button>
        <button className='nextButton' onClick={updateCardNum}> next </button>
      </div>
    </>
  )
}

export default App;
