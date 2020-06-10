import React, { useState } from 'react';
import { Navbar, Nav, Button, Jumbotron } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ProductItem from './product.js';
import ProductDetail from './DetailProduct.js';
import data from './data.js';

function App() {
  let [product, changeProduct] = useState(data);
  
  return (
    <div className="App" style={{ marginBottom: 100 + 'px' }}>
      <Navbar bg="light" variant="light">
        <Navbar.Brand><Link to="/">KAKAO</Link></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path="/">
          {
            <MainPage product={ product } />
          }
        </Route>
        <Route exact path="/detail/:id">
          <ProductDetail product={ product }/>
        </Route>
        <Route path="/:id">
          <posRel>
            <h3>적절하지 못한 접근입니다</h3>
          </posRel>
          <div style={{ position: 'relative' }}>
            <h3 style={{
              color: '#fff',
              position: 'absolute',
              fontWeight: 'bold',
              fontSize: '48px',
              top: '38%',
              left: '5%'
            }}></h3>
            <img src="https://t1.kakaocdn.net/friends/new_store/2.0/pc/banner_faq.png" width="100%" />
          </div>
        </Route>
      </Switch>
      {/* <Route path="/example" component={ componentName }></Route> */}
    </div>
  );
}

function MainPage(props){
  return (
    <div>
      <Jumbotron className="image-container">
        <h1>KAKAO Friends SHOP</h1>
        <p>
          중국산 KAKAO FRIENDS를 만나보세요!<br/>
          이미테이션이라고는 믿을 수 없는 퀄리티!<br/>
          저희와 KAKAO FRIENDS는 같은 공장에서 만들어지고 있어요!
        </p>
        <p>
          <Button variant="light">more story</Button>
        </p>
      </Jumbotron>
      <div className="container">
        <div className="row">
          {
            data.map(function(a,i){
              return(
                <ProductItem product={props.product[i]} key={a.id}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App;
