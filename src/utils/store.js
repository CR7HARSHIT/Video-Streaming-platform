import { configureStore } from "@reduxjs/toolkit";
import { SbInfoSlice_reducers } from "./SbInfoSlice";
import  {lruSlice_reducers} from "./lruSlice";
const store=configureStore({
	reducer:{
      SbInfoSlice:SbInfoSlice_reducers,
	  lruSlice:lruSlice_reducers
	}
})
export default store;