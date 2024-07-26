import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import Viewrest from './Viewrest';



function Restcards({restaurant}) {
    console.log(restaurant);
  return (
    <Col className='mt-2'  sm={12} md={6} lg={4} xl={3}>

   <Link to={`/viewrest/${restaurant.id}`} style={{textDecoration:"none"}}>
      <Card >
      <Card.Img className='p-3'
  variant="top"
  src={restaurant.photographs}
  style={{ height: '300px', width: 'auto' }} // Adjust height as needed
/>

      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
         {restaurant.neighbourhood}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
    </Col>

  )
}

export default Restcards
