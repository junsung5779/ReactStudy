import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>

      <button>가나다순 정렬</button>

      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              let copy = [...따봉];
              copy[0] += 1;
              따봉변경(copy);
            }}
          >
            👍
          </span>
          {따봉[0]}
        </h4>
        <p>2월 17일 발행</p>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자코트 추천";
            글제목변경(copy);
          }}
        >
          변경!
        </button>
      </div>
      <div className="list">
        <h4>
          {글제목[1]}{" "}
          <span
            onClick={() => {
              let copy = [...따봉];
              copy[1] += 1;
              따봉변경(copy);
            }}
          >
            👍
          </span>
          {따봉[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {글제목[2]}{" "}
          <span
            onClick={() => {
              let copy = [...따봉];
              copy[2] += 1;
              따봉변경(copy);
            }}
          >
            👍
          </span>
          {따봉[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
