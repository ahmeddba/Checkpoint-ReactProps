import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import './PlayerCard.css';
// passing a prop to this component
const PlayerCard = ({player}) => {
//declaring style for the card to pass it as an inline style
  const displayInfo = {display: "flex", justifyContent: "space-between", alignItems: "center"};


  return (
    <>
    {/* Card component */}
    <Card className='cardd' style={{ width: '18rem' }}>
      <Card.Img className='imgg' variant="top" src={player.image} />
      <Card.Body>
        <Card.Title><b>{player.name}</b></Card.Title>
        <Card.Text>
          {player.team}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={displayInfo}><b>jerseyNumber :</b> {player.jerseyNumber}</ListGroup.Item>
        <ListGroup.Item style={displayInfo}><b>Nationality :</b> {player.nationality} <img src={player.nationalityImage} alt="Messi's nationality" height={20}/></ListGroup.Item>
        <ListGroup.Item style={displayInfo}><b>Age :</b> {player.age} </ListGroup.Item>
      </ListGroup>

    </Card>
    {/* End of the card */}
    </>

    )
}

export default PlayerCard
