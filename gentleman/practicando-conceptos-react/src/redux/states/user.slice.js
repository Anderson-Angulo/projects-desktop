import { createSlice } from "@reduxjs/toolkit";

const UserEmptyState={
  email:"",
  password:""
}

export const UserSlice=createSlice({
  name:"user",
  initialState:UserEmptyState,
  reducers:{
    createUser:(state,action)=>{
      return action.payload
  },
  resetUser:()=>{
    return UserEmptyState
  }
 }
})


export const  {createUser,resetUser} = UserSlice.actions