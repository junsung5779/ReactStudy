import { configureStore, createSlice } from '@reduxjs/toolkit'

// useState()와 같은 역할임
let user = createSlice({
    // State 하나를 Slice라고 부름
    name: 'user',
    // initialState: createSlice()의 초기상태 명명법
    initialState: 'kim',
    /**
     * Redux의 state 변경법
     * 1. state 수정해주는 함수 선언
     * 2. 함수 export
     * 3. 원할 때 해당 함수 실행요청 보내기
     */
    reducers: {
        // state: 기존 state
        changeName(state){
            return 'john' + state
        }
    }
})
// destructuring 문법사용
export let {changeName} = user.actions

let stock = createSlice({
    name: 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ]
})

export default configureStore({
    reducer: {
        // slice를 reducer에 등록해야 사용가능
        user: user.reducer,
        cart: stock.reducer
    }
})