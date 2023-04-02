import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
  name:"user",
  initialState:{},
  reducers:{
    createUser:(state, action)=>{
      return action.payload
    }
  }
})

export default userSlice.reducer

export const {createUser} = userSlice.actions