import { createSlice } from "@reduxjs/toolkit";

const LiveChatMSlice=createSlice({
	name:'LiveChatMSlice',
	initialState:{
		messages:[]
	},
	reducers:{
		addmessages:(state,action)=>{
			console.log(action.payload.result)
			state.messages=[...action?.payload?.result,...state?.messages,]
		}
	}
})
export  const {addmessages}=LiveChatMSlice.actions;
export  const LiveChatMSlice_reducers=LiveChatMSlice.reducer;