import { configureStore } from "@reduxjs/toolkit";
import { UserSliceReducer } from "./state";

export interface AppStore{
  
}

export default configureStore<AppStore>({
  reducer:{
    user:UserSliceReducer
  }
})