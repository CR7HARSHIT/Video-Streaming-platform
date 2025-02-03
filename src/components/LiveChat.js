import { useEffect, useState } from "react"
import MessageBox from "./MessageBox"
import { useDispatch, useSelector } from "react-redux";
import { addmessages } from "../utils/LiveChatMSlice";

const LiveChat=()=>{
	let start=1;
	let result=[];
	const Dispatch=useDispatch();
	const x=useSelector((store)=>store.LiveChatMSlice.messages)
    async function fetchdata()
	{
		try {
			
		const response=await fetch(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=1`)
		console.log("response:",response)
		const data=await response.json();
		   result=data
		   
		   start=start+1
		   
		  } catch (error) {
			console.error('Error:', error); // Handle any errors
		  }
		
	}
	useEffect(()=>{
      
		const x=setInterval(()=>{
         fetchdata()
         Dispatch(addmessages({result}))
		 
		},3000)

		return ()=>{
			clearInterval(x)
		}
	},[])
	return (
		<div className="border-4 border-black mt-32 m-8 w-full h-[550px]">
			<div>
			<span className="ml-2 mt-8 text-xl font-bold">LiveChat</span>
			<hr className="border-t-2 border-gray-300 my-2" />
            </div>
			<div className="flex flex-col-reverse overflow-y-scroll h-[450px] ">
			{x.map((Message)=><MessageBox data={Message}/>)}
			</div>
			
			
			
			
	    </div>
	)
} 
export default LiveChat