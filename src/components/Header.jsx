import React from 'react'
import Container from 'react-bootstrap/Container';
// import restaurant_logo from '../restaurant_logo.png';
import Navbar from './Navbar';



function Header() {
  return (
    <div>
     <Navbar></Navbar>
         {/* <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={restaurant_logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
           I NeeD FooD
          </Navbar.Brand>
        </Container>
      </Navbar>   */}
      
    </div>
  )
}

export default Header
