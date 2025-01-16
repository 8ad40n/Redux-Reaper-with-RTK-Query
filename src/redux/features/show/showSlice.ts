import { createSlice } from "@reduxjs/toolkit";

interface ShowSlice {
    name: string
  }
const initialState: ShowSlice = {
    name: 'BNJ',
  }

export const showSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        setName: (state,action)=>{
            state.name = action.payload;
        }
    }
})

export const { setName } = showSlice.actions
export default showSlice.reducer