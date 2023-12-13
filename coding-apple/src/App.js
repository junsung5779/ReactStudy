import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>React blog</div>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순 정렬
      </button>

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
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
            copy[0] = '여자 코트 추천';
            글제목변경(copy);
          }}
        >
          변경!
        </button>
      </div>
      <div className="list">
        <h4>
          {글제목[1]} <span>👍{따봉[1]}</span>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {글제목[2]} <span>👍{따봉[2]}</span>
        </h4>
        <p>2월 17일 발행</p>

        {modal === true ? <Modal /> : null}
      </div>
    </div>
  );
}

/**
 * 컴포넌트화 하면 좋은 case
 * 1. 반복적인 html 축약할 때
 * 2. 큰 페이지들
 * 3. 자주 변경되는 html UI들
 */
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
