import React, { useState } from 'react';
import Matches from './Matches'
import './App.css';

const player = {
  id: 1,
  name: "Bryan Gomes",
  main: "King K Rool"
}

const playersSource = {
  1: {
    id: 1,
    name: "Bryan Gomes",
    main: "King K Rool"
  },
  2: {
    id: 2,
    name: "Charlie Hayes",
    main: "Captain Falcon"
  },
  3: {
    id: 3,
    name: "Eileen Li",
    main: "King Dedede"
  },
  1337: {
    id: 1337,
    name: "Francis Bourgouin",
    main: "Inkling"
  }
}

const match = {
  player1: 2,
  player2: 1,
  winner: 2
}

const matchesSource = [
  {
    player1: 2,
    player2: 1,
    winner: 2
  },
  {
    player1: 1,
    player2: 2,
    winner: 1
  },
  {
    player1: 3,
    player2: 1337,
    winner: 3
  },
  {
    player1: 1337,
    player2: 1,
    winner: 1337
  }
]

function App() {
  const [intro, setIntro] = useState(false)
  const [tourneyStatus, setTourneyStatus] = useState('in_progress')
  const [players, setPlayers] = useState(playersSource)
  const [matches, setMatches] = useState(matchesSource)

  const h1Class = intro ? "title intro_start" : "title"
  const startTourney = () => setTourneyStatus('in_progress')
  const addNewMatch = match => {
    // setMatches([...matches, match])
    setMatches([...matches, match])
    // matches.push(match)
    // setMatches(matches)
    // matches.push(match) BAAAD
    // setMatches(matches) 
  }
  const breakQuestionMark = () => {
    const modifiedPlayers = { ...players }
    modifiedPlayers[1] = undefined
    console.log(modifiedPlayers, players)
  }

  const updateMatch = (matchId, matchData) => {
    setMatches(prevState => {
      const newMatchData = [...prevState]
      newMatchData[matchId] = matchData

      return newMatchData
    })
  }
  return (
    <div className="App" onClick={breakQuestionMark}>
      {tourneyStatus === 'pending' &&
        <>
          <h1 className={h1Class}>
            <span className="letter">F</span><span className="text">ighting</span>
            <span className="letter">G</span><span className="text">ame</span>
            <span className="letter">T</span><span className="text">ournament</span>
            <span className="letter">S</span><span className="text">ystem</span>
          </h1>
          <button onClick={startTourney}>Start!</button>
        </>
      }
      {
        // tourneyStatus === 'in_progress' && <Matches players={players} matches={matches}/>
        tourneyStatus === 'in_progress' && <Matches {...{ players, matches, addNewMatch, updateMatch }} />
      }
    </div>
  );
}

export default App;
