import { createSlice } from "@reduxjs/toolkit"


// useState()와 같은 역할임
let user = createSlice({
    // State 하나를 Slice라고 부름
    name: 'user',
    // initialState: createSlice()의 초기상태 명명법
    initialState: { name : 'kim', age : 20 },
    /**
     * Redux의 state 변경법
     * 1. state 수정해주는 함수 선언
     * 2. 함수 export
     * 3. 원할 때 해당 함수 실행요청 보내기
     */
    reducers: {
        // state: 기존 state
        // action: state 변경 함수들
        changeName(state){
            // array/object의 경우 직접수정해도 state 변경됨(Immer.js 라이브러리의 도움으로 가능)
            state.name = 'park'
        },
        // state 변경함수에 parameter 뚫는법
        increaseAge(state, action) {
            state.age += action.payload
        }
    }
})

// destructuring 문법사용
export let { changeName, increaseAge } = user.actions

export default user