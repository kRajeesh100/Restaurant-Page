import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import RestRev from './RestRev';

function Viewrest() {
  const urlparams = useParams();
  console.log(urlparams.id);
  const [restaurantlist, setRestaurantlist] = useState([]);
  
  const getRestaurant = async () => {
    const response = await fetch("/restaurant.json");
    const data = await response.json();
    setRestaurantlist(data.restaurants);
  };

  useEffect(() => {
    getRestaurant(); // call the fetch function on component mount
  }, []);

  const viewrest = restaurantlist.find(item => item.id == urlparams.id);
  console.log(viewrest);

  return (
    <div>
      {viewrest ? (
        <Row  className='m-4'>
          <Col md={4} >
            <Image src={viewrest.photographs} style={{ width: '350px', height: '350px' }} />
          </Col>
          <Col md={8}>
            <h1 style={{ color: '#FFA500' }}>{viewrest.name}</h1>
            <ListGroup>
              <ListGroup.Item variant="dark">Id: {viewrest.id}</ListGroup.Item>
              <ListGroup.Item variant="dark">Name: {viewrest.name}</ListGroup.Item>
              <ListGroup.Item variant="dark">Cuisine Type: {viewrest.cuisine_type}</ListGroup.Item>
              <ListGroup.Item variant="dark">Address: {viewrest.address}</ListGroup.Item>
              <ListGroup.Item variant="dark">Neighbourhood: {viewrest.neighbourhood}</ListGroup.Item>
            </ListGroup>
            <RestOp op={viewrest.operating_hours} />
            <RestRev review={viewrest.reviews} />
          </Col>
        </Row>
      ) : 'null'}
    </div>
  );
}

export default Viewrest;
