import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
  }
const initialState: CounterState = {
    value: 0,
  }

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers:{
        increment: (state)=>{
            state.value += 1;
        },
    }
})

export const { increment} = quizSlice.actions
export default quizSlice.reducer