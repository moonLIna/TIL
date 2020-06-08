import React, { useState } from 'react';
import { Navbar, Nav, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import ProductItem from './product.js';

function App() {
  let listNum = [0,1,2];

  return (
    <div className="App" style={{ marginBottom: 100 + 'px' }}>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Kakao</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <Jumbotron className="image-container">
        <h1>KAKAO Friends SHOP</h1>
        <p>
          중국산 KAKAO FRIENDS를 만나보세요
        </p>
        <p>
          <Button variant="light">more</Button>
        </p>
      </Jumbotron>
      <div className="container">
        <div className="row">
          {
            listNum.map(function(i){
              return(
                <ProductItem />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
