import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {

  let [alert , setAlert] = useState(true)

  useEffect(()=>{
    // 어려운 연산
    // 서버에서 데이터 가져오는 작업
    // 타이머
    console.log('useEffect hook은 html 요소들이 렌더링 되고난 후 실행됨');
    setTimeout(()=>{
      setAlert(false)
    }, 2000)
  })

  // url parameter 사용한 것 받아와서 사용하기
  let { id } = useParams();
  // 1. find()는 array 뒤에 붙일 수 있으며 return 조건식 적으면 됩니다. 그럼 조건식에 맞는 자료 남겨줌
  // 2. find() 콜백함수에 파라미터 넣으면 array자료에 있던 자료를 뜻합니다. 전 x라고 작명해봤음
  // 3. x.id == id 라는 조건식을 써봤습니다. 그럼 array자료.id == url에입력한번호 일 경우 결과를 변수에 담아줍니다.
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="container">
      { alert === true ? 
      <div className="alert alert-warning">
        2초이내 구매시 할인
      </div>
      : null
      }
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
    </div>
  );
}

export default Detail;
