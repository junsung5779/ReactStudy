import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";

function App() {
  let [shoes] = useState(data);
  // hook: 유용한 것들이 들어있는 함수(useNavigate(): 페이지 이동을 도와주는 함수)
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">홈</Link> */}
            {/* <Link to="/detail">/상세페이지</Link> */}
            <Navbar.Brand
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Navbar.Brand>
            <Navbar.Brand
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>

              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route
          // url parameter 사용하기
          path="/detail/:id"
          element={
            <>
              <Detail shoes={shoes} />
            </>
          }
        />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<p>멤버임</p>}></Route>
          <Route path="location" element={<p>위치정보임</p>}></Route>
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>

        {/* 404 페이지 */}
        <Route path="*" element={<div>없는페이지요</div>} />
      </Routes>
    </div>
  );

  function About() {
    return (
      <div>
        <h4>회사 정보임</h4>
        <Outlet></Outlet>
      </div>
    );
  }
  function Event() {
    return (
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>
    );
  }

  function Card(props) {
    return (
      <div className="col-md-4" key={props.i}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width="80%" alt="" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content}</p>
      </div>
    );
  }
}

export default App;
