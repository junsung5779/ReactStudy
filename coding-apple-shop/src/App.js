import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from 'axios'
import Cart from "./routes/Cart.js";


function App() {
  let [shoes, setShoes] = useState(data);
  let [clickCount, setClickCount] = useState(0);
  let [loadingState, setLoadingState] = useState(false);
  let [stock] = useState([10, 11, 12])
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
                  // 클릭 시 loading state 띄우기(요청중입니다.)
                  setLoadingState(true);
                  // axios 라이브러리를 통해 ajax요청 보내기
                  // 클라이언트<->서버 간 데이터 전송시에는 문자열로만 전송가능
                  // json형식은 array,object와 같은 형식을 문자열 형태로 변환한 형식
                  // axios는 클라이언트<->서버 간 데이터 전송 시 array,object와 같은 형식을 json화 시켜주는 라이브러리임
                  // 라이브러리 안쓰고 ajax 요청 보내려면 fetch()사용(단, json화 수동으로 시켜줘야 함)
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
                    setLoadingState(false);
                  })
                  // 실패 시 실행할 코드
                  .catch(()=>{
                    console.log('실패함 ㅅㄱ');
                    setLoadingState(false);
                  })
                }}>shoe 추가버튼</button>
              }
              { loadingState === true &&
                <p>요청중입니다.</p>

              }
            </>
          }
        />
        <Route
          // url parameter 사용하기
          path="/detail/:id"
          element={
              <Detail shoes={shoes} />
          }
        />

        <Route path="/cart" element={ <Cart/> } />

        {/* 404 페이지 */}
        <Route path="*" element={<div>없는페이지요</div>} />
      </Routes>
    </div>
  );

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
