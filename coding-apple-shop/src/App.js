import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from 'axios'

function App() {
  let [shoes, setShoes] = useState(data);
  let [clickCount, setClickCount] = useState(0);
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
              {clickCount <= 1 &&
              
                <button onClick={()=>{
                  // axios 라이브러리를 통해 ajax요청 보내기
                  axios.get(`https://codingapple1.github.io/shop/data${clickCount+2}.json`)
                  // 성공 시 실행할 코드
                  .then((res)=>{
                    console.log(res);
                    setClickCount(clickCount+1);
                    console.log('클릭횟수:'+clickCount);
                    // ajax요청으로 가져온 데이터를 shoes 데이터에 추가
                    let copyShoes = [...shoes, ...res.data];
                    // setShoes
                    setShoes(copyShoes);
                  })
                  // 실패 시 실행할 코드
                  .catch(()=>{
                    console.log('실패함 ㅅㄱ')
                  })
                }}>shoe 추가버튼</button>
              }
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
