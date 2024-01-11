import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'

let cart = createSlice({
    name: 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers: {
        addCount(state, action){
            // state.id의 값이 action.payload 인 데이터의 count 값을 1 증가 시킨다.
            let findStock = state.findIndex((a) =>{
                return a.id === action.payload;
            })
            state[findStock].count++;
        },
        addItem(state, action){
            state.push(action.payload)
        }
    }
})

export let { addCount, addItem } = cart.actions

export default configureStore({
    reducer: {
        // slice를 reducer에 등록해야 사용가능
        user: user.reducer,
        cart: cart.reducer
    }
})