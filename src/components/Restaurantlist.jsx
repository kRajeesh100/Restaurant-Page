import React, { useEffect, useState } from "react";
import Restcards from "./Restcards";
import Row from "react-bootstrap/Row";



function Restaurantlist() {
  const [restaurantlist, setRestaurantlist] = useState([]);

  //to create a function for API call

  //asyc await
  const getRestaurant = async () => {
    await fetch("/restaurant.json") //asynchronous call
      .then((data) =>
        data.json().then((result) => setRestaurantlist(result.restaurants))
      );
  };

  console.log(restaurantlist);

  useEffect(() => {
    getRestaurant(); //call back function
  }, []);

  //   restaurantlist.map(item=>(
  //     <Restcards restaurant={item}></Restcards>}
  //   ))

  return (
    <Row>
      {
        
          restaurantlist.map((item)=>(
          <Restcards restaurant={item}></Restcards>
          // <h1>{item.name}</h1>
          ))
        
      }
    </Row>
  );
}

export default Restaurantlist;
