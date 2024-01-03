import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap'

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [input1, setInput1] = useState(0);
  let [tab, setTab] = useState(0);
  let [fade, setFade] = useState('');

  // Component mount(load), update, dependencies 실행조건을 충족시킬 때마다 useEffect 실행
  useEffect(() => {
    // 여기적은 코드는 컴포넌트 mount(load) & update 마다 실행됨(라이프사이클 훅 과 동일한 개념)
    // 어려운 연산
    // 서버에서 데이터 가져오는 작업
    // 타이머
    console.log("useEffect hook은 html 요소들이 렌더링 되고난 후 실행됨");
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    let b = setTimeout(()=>{
      setFade('end')
    },100)
    // 숙제
    if (isNaN(input1)) {
      console.log("이러지 마세요");
    }
    /**
     * clean up function
     * useEffect 동작하기 전에 clean up function 내부의 코드부터 먼저 실행된다.
     * 사용법: return ()=>{}
     * component unmount시에도 clean up function이 1회 실행됨
     */
    return () => {
      //타이머 제거x
      clearTimeout(a);
      clearTimeout(b);
      setFade('');
    };
    // useEffect 실행조건 넣을 수 있는 곳은 [실행조건](dependencies)
    // []: Component가 최초 1회 mount 될 때만 실행됨(이후 실행 x)
    // [count]: count라는 state가 변할 때 useEffect 실행됨
  }, [count, input1]);

  // url parameter 사용한 것 받아와서 사용하기
  let { id } = useParams();
  // 1. find()는 array 뒤에 붙일 수 있으며 return 조건식 적으면 됩니다. 그럼 조건식에 맞는 자료 남겨줌
  // 2. find() 콜백함수에 파라미터 넣으면 array자료에 있던 자료를 뜻합니다. 전 x라고 작명해봤음
  // 3. x.id == id 라는 조건식을 써봤습니다. 그럼 array자료.id == url에 입력한 번호일 경우 결과를 변수에 담아줍니다.
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });

  return (
    <div className={`container start ${fade}`}>
      {alert === true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count 상승 버튼
      </button>
      <input
        onKeyUp={(e) => {
          setInput1(e.target.value);
        }}
      />
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} width="100%" alt="" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div>
  );
}

function TabContent({tab}) {
  let [fade, setFade] = useState('');
  /**
   * 팁1. props.~가 귀찮으면
   * function TabContent({tab}) {
   *  if (tab === 0) {
   *    ~
   *  }
   * }
   * 팁2. 배열과 인덱스 접근을 결합한 표현식 사용
   * [요소1, 요소2, 요소3, ...][배열에서 특정 요소에 접근하기 위한 인덱스]
   * [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
   */

  // tab이 변경될 때마다 css 변경 실행
  useEffect(()=>{
    /**
     * 시간차를 둔 이유
     * 리액트 18버전 이상부터는 automatic batch 라는 기능이 생김
     * state 변경함수들이 연달아서 여러개 처리되어야한다면
     * state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링됨.
     * 그래서 묶어서 처리하지 못하게 시간차를 둠
     * automatic batching을 막아주는 flushSync() 이런거 써도 될 것 같음
     */
    let a = setTimeout(()=>{setFade('end')}, 100)
    // use cleanup func
    return(()=>{
      clearTimeout(a)
      setFade('')
    })
  },[tab])

  return(
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  )
}


export default Detail;
