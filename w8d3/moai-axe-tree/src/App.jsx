import React, { useState, useEffect } from "react";
import { punishingPlayerForBeingLucky, chooseItemRandomlyIGuess, validateResult } from './helpers'
import "./App.scss";

function App() {
  const [playerChoice, setPlayerChoice] = useState(null)
  const [result, setResult] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [cheating, setCheating] = useState(false)

  useEffect(() => {
    if (playerChoice) {
      let computerResult;
      if (cheating) {
        computerResult = punishingPlayerForBeingLucky(playerChoice)
      } else {
        computerResult = chooseItemRandomlyIGuess(Math.floor(Math.random() * 3))
      }
      setResult(validateResult(playerChoice, computerResult))
    }
  }, [playerChoice])

  const resetTheGameData = () => {
    setPlayerChoice(null)
    setResult(null)
  }

  const alternateLoggedState = () => setLoggedIn(!loggedIn)

  const chooseMoai = () => setPlayerChoice('🗿')
  return (
    <div className='App'>
      <h1>Welcome to Moai vs Axe vs Tree</h1>
      {loggedIn && <button class="logout" onClick={alternateLoggedState}>Log out</button>}
      {!loggedIn && <button class="login" onClick={alternateLoggedState}>Log in</button>}
      <section className="game">
        <span onClick={() => setCheating(!cheating)} className={cheating ? "cheating" : null}>
          🤖
        </span>
        {!cheating && <span>🧙‍♀️</span>}
        {cheating && <span>🤦‍♀️</span>}
      </section>
      {!result &&
        <section class="choices">
          <h2>Choose your destiny!</h2>
          <button onClick={() => setPlayerChoice('🌴')}>🌴</button>
          <button onClick={() => setPlayerChoice('🪓')}>🪓</button>
          <button onClick={chooseMoai}>🗿</button>
        </section>
      }
      {result &&
        <>
          <section class="result" data-testid="result">
            {result === "Won" && <h2>Human won, for now.</h2>}
            {result === "Lost" && <h2>Computer won, Skynet FOREVER</h2>}
            {result === "Tied" && <h2>They tied (the knot?)</h2>}
            <button onClick={resetTheGameData} className="rematch">that's fucking cool. Play again! Rematch</button>
          </section>
        </>
      }
    </div>
  );
}

export default App;
