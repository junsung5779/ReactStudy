import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [idx, setIdx] = useState(0)
  let [input, setInput] =useState('');

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
      {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4 onClick={()=>{
                setIdx(i)
                setModal(!modal)
              }}>
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();  // 상위 요소로의 이벤트 버블링을 막아주는 함수
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            <button onClick={(e)=>{
              e.stopPropagation();
              let copy = [...글제목];
              copy.splice(i,1);
              글제목변경(copy);
            }}>삭제</button>
            </h4>
          </div>
        );
      })}

      <input onChange={(e)=>{
        setInput(e.target.value);
        console.log(input);
      }}>

      </input>
      <button onClick={(e)=>{
        let copy = [...글제목];
        copy.push(input);
        글제목변경(copy);
      }}>발행</button>

      {modal === true ? <Modal 글제목={글제목} 글제목변경={글제목변경} idx={idx} /> : null}
    </div>
  );

  /**
   * 컴포넌트화 하면 좋은 case
   * 1. 반복적인 html 축약할 때
   * 2. 큰 페이지들
   * 3. 자주 변경되는 html UI들
   */
  function Modal(props) {
    return (
      <div className="modal">
        <h4>{props.글제목[props.idx]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글 수정</button>
      </div>
    );
  }
}


export default App;
