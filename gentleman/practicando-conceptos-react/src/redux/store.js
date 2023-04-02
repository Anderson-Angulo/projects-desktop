import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./states/user.slice";

const store=configureStore({
  reducer:{
    user:UserSlice.reducer
  }
})


export default store