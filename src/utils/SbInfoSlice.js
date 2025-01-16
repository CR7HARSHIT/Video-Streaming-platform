import { createSlice } from "@reduxjs/toolkit";
const SbInfoSlice=createSlice({
	name:'SbInfoSlice',
	initialState:{
		IsOpen:true
	},
   reducers:{
	toggleSidebar:(state)=>{
      state.IsOpen=!state.IsOpen;
	}
   }
})
export const {toggleSidebar}=SbInfoSlice.actions;
export const SbInfoSlice_reducers=SbInfoSlice.reducer;