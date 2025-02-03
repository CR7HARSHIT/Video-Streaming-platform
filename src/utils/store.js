import { configureStore } from "@reduxjs/toolkit";
import { SbInfoSlice_reducers } from "./SbInfoSlice";
import  {lruSlice_reducers} from "./lruSlice";
import { LiveChatMSlice_reducers } from "./LiveChatMSlice";

const store=configureStore({
	reducer:{
      SbInfoSlice:SbInfoSlice_reducers,
	  lruSlice:lruSlice_reducers,
	  LiveChatMSlice:LiveChatMSlice_reducers
	}
})
export default store;