import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestRev({ review }) {
    const [open, setOpen] = useState(false);

  return review.map((item) => (
    <Card className="mt-2" style={{ width: "18rem",float: "left" , marginRight: "1rem"  }}>
      <Card.Body>
        <Card.Title>Name: {item.name}</Card.Title>
        <Card.Subtitle>Date: {item.date}</Card.Subtitle>
        <Card.Text>Rating:{item.rating} </Card.Text>
        <Card.Text> <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
         Comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
       {item.comments} 
        </div>
      </Collapse></Card.Text> 
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  ));
}

export default RestRev;
