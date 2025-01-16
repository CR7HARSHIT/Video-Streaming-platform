import { configureStore } from "@reduxjs/toolkit";
import { SbInfoSlice_reducers } from "./SbInfoSlice";
const store=configureStore({
	reducer:{
      SbInfoSlice:SbInfoSlice_reducers
	}
})
export default store;