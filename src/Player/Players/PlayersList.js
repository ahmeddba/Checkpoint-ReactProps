import React from 'react'
import {Messi , Ronaldo , Neymar , Benzema} from './PlayerObj';
import PlayerCard from '../PlayerCard/PlayerCard';

const PlayersList = () => {
    const players = [Messi , Ronaldo , Neymar , Benzema];

  return (
<>
{/* Mapping through the players list */}
{
players.map((player , i) => <PlayerCard player={player} />)
}
</>
  )
}

export default PlayersList
