import React from 'react'
import { useState } from 'react'

const Matches = ({ players, matches, addNewMatch, updateMatch }) => {
  // const { players, matches } = props
  const [matchForm, setMatchForm] = useState({
    player1: "",
    player2: "",
    winner: undefined
  })
  const decideWinner = (id, winnerId) => {
    const updatedMatches = [...matches]
    updatedMatches[id].winner = winnerId

    updateMatch(id, updatedMatches[id])
  }

  const parsedMatches = matches.map((match, index) => (
    <li>
      <span onClick={() => decideWinner(index, match.player1)}>Player1: {players[match.player1].name}</span>
      <span onClick={() => decideWinner(index, match.player2)}>Player2: {players[match.player2].name}</span>
      <span>Winner: {players[match.winner] ? players[match.winner].name : "No winner yet"}</span>
    </li>
  ))

  const playerOptions = Object.values(players).map(player => <option value={player.id}>{player.name} - {player.main}</option>)


  const updatePlayer = (event) => {
    const value = event.target.value
    const name = event.target.name
    const newMatchForm = { ...matchForm }
    newMatchForm[name] = value
    // setMatchForm(newMatchForm)
    setMatchForm({ ...matchForm, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    addNewMatch(matchForm)
  }
  return (
    <section className="matches">
      <ul>
        {parsedMatches}
      </ul>
      <form onSubmit={handleSubmit}>
        <select name="player1" onChange={updatePlayer} value={matchForm.player1}>
          {playerOptions}
        </select>
        <select name="player2" onChange={updatePlayer} value={matchForm.player2}>
          {playerOptions}
        </select>
        <input type="submit" value="Add new match!" />
      </form>
    </section>
  )
}

export default Matches