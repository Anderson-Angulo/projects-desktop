import { userSlice } from "./states/user";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer:{
    user:userSlice.reducer
  }
})

export type RootState=ReturnType<typeof store.getState >

export default store