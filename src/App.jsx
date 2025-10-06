import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {

  const books = [
        {'Ulysses': 'James Joyce'}, 
        {'The Great Gatsby':'F. Scott Fitzgerald'},
        {'The Catcher And The Rye': 'J.D. Salinger'},
        {'1984': 'George Orwell'},
        {'Moby-Dick': 'Herman Melville'},
        {'The Sound of Fury': 'William Faulkner'},
        {'Don Quixote': 'Miguel de Cervantes'},
        {'Anna Karenina': 'Leo Tolstoy'},
        {'Crime and Punishment':'Fyodor Dostoevsky'},
        {'Pride and Prejudice': 'Jane Austen'}
    ]

  const [count, setCount] = useState(10);

  const [side, setSide] = useState(0);

  function updateSide(e) {
    if (side === 0) {
      setSide(1);
    } else {
      setSide(0);
    }
  }

  const [cardNum, setCardNum] = useState(0);
  // setState is asynchronous — the update takes effect on the next render
  // so this means useState becomes 0 when I click next for the first time

  // prev card
  const decreaseCardNum = (e) => {
      if(cardNum > 0){
        setSide(0);
        setCardNum(cardNum-1);
        // re-reset the guess box and correctness indicator
        setGuessCorrectness(null);
        setAuthorGuess("");
      }
    }

    // next card
    const increaseCardNum = (e) =>{
      if(cardNum < 9){
        setSide(0);
        setCardNum(cardNum+1);
        // re-reset the guess box and correctness indicator
        setGuessCorrectness(null);
        setAuthorGuess("");
      }
    }

    // input box
    const [authorGuess, setAuthorGuess] = useState("");
    const handleTextUpdate = (e) => {
      setAuthorGuess(e.target.value);
    }

    // correctness indicator
    const [guessCorrectness, setGuessCorrectness] = useState(null);
    const handleGuessCheck = (e) => {
      if (authorGuess === Object.values(books[cardNum])[0]){
        setGuessCorrectness(true);
      }
      else{
        setGuessCorrectness(false);
      }
    }

  return (
    <>
      <h1>Name that Author!</h1>
      <h4>With this deck, you'll learn the authors of some famous books!</h4>
      <h4>Number of cards: {count}</h4>
      <div className = "flashcardArea">

        <button onClick={updateSide}><Card numCard = {cardNum} titleOrAuthor={side}
          title={Object.keys(books[cardNum])[0]}
          author={Object.values(books[cardNum])[0]}/></button>
          
        {/* === 0 and === 9 because the new state is used while determining how to re-render the button */}
        <button className='arrowButton' disabled={cardNum === 0} onClick={decreaseCardNum}> back </button>
        <button className='arrowButton' disabled={cardNum === 9} onClick={increaseCardNum}> next </button>
      </div>

      {/* input box filled white if no guess made yet, green if correct guess, red if false guess*/}
      <input type="text" 
        value = {authorGuess}
        onChange = {handleTextUpdate}
        disabled={side === 1} 
        placeholder="Guess the author name here"
        style={{background: guessCorrectness === null ? 'none' : guessCorrectness ? 'lightgreen' : 'lightcoral'}}
        />
      <button className = "submitButton" disabled = {side === 1} onClick={handleGuessCheck}> submit </button>
    </>
  )
}

export default App;
