import "./App.css";
import { Card, Container, Nav, Navbar } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from './data.js';

function App() {

  let [shoes] = useState(data)

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">장바구니</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>

      <div className="container">
        <div className="row">
          {shoes.map((a,i)=>{
            return(
              <Card shoes={shoes[i]} i={i}></Card>
            )
          })}
        </div>
      </div>
    </div>
  );

  function Card(props) {
    return(
      <div className="col-md-4" key={props.shoes.id}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="80%" alt="" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
      </div>
    );
  }
}

export default App;
