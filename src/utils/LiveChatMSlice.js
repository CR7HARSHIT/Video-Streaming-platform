import { createSlice } from "@reduxjs/toolkit";

const LiveChatMSlice=createSlice({
	name:'LiveChatMSlice',
	initialState:{
		messages:[],
		scrollTop:false
	},
	reducers:{
		addmessages:(state,action)=>{
			console.log(action.payload.result)
			if(state.scrollTop===false)
			{ 
				if(state.messages.length > 15){
				state.messages=state.messages.slice(0,15)
			   }
			}   
			state.messages=[...action?.payload?.result,...state?.messages]
		},
		custommessage:(state,action)=>{
			if(state.scrollTop===false)
		   {
			  if(state.messages.length > 15){
				state.messages=state.messages.slice(0,15)
			  }
		   }
			state.messages=[action?.payload,...state?.messages]
		},
		clearmessage:(state,action)=>{
			state.messages=state.messages.slice(0,0)
		},
		changeScrollState:(state,action)=>{
           state.scrollTop=action.payload;
		}
	}
})
export  const {addmessages,custommessage,clearmessage,changeScrollState}=LiveChatMSlice.actions;
export  const LiveChatMSlice_reducers=LiveChatMSlice.reducer;