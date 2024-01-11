import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increaseAge } from './../store/userSlice.js';
import { addCount } from '../store.js';


function Cart() {
    // Redux store 가져와줌
    // 단, 컴포넌트간 state 공유가 필요없으면 그냥 useState() 사용하는게 더 나을 듯
    let state = useSelector((state)=> state)
    console.log(state);
    // dispatch: store.js에 요청 보내주는 함수
    let dispatch = useDispatch()

    return(
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={()=>{
                dispatch(increaseAge(10))
            }}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.count}</td>
                                    <td>
                                        <button onClick={()=> {
                                            dispatch(addCount(a.id))
                                        }}>
                                            +
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart