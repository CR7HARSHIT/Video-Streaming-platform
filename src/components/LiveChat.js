import { useEffect, useState,useRef } from "react"
import MessageBox from "./MessageBox"
import { useDispatch, useSelector } from "react-redux";
import { addmessages, changeScrollState, clearmessage, custommessage } from "../utils/LiveChatMSlice";
import { Send } from "lucide-react";
const LiveChat=()=>{
	let start=1;
	let result=[];
	const Dispatch=useDispatch();
	const [chat,setChat]=useState("")

		const scrollRef = useRef(null);
	  
		const scrollToTop = () => {
			const {scrollHeight,clientHeight,scrollTop}=scrollRef.current
			const scrollBottom = scrollHeight - clientHeight - ((scrollTop)*-1);
			console.log(`scrollBottom:${scrollBottom}\n
				scrollHeight:${scrollHeight}\n
				clientHeight:${clientHeight}
				\nscrollTop:${scrollTop}`)
		    if(scrollBottom<=3) {
			Dispatch(changeScrollState(true))
		  }else{
			Dispatch(changeScrollState(false))
		  }
		}
	
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
			Dispatch(clearmessage())
		}
	},[])
	
	return (
		<div className="border-4 border-black mt-32 m-8 w-full h-[550px]">
			<div>
			<span className="ml-2 mt-8 text-xl font-bold">LiveChat</span>
			<hr className="border-t-2 border-gray-300 my-2" />
            </div>
			<div className="flex flex-col-reverse overflow-y-scroll h-[455px] "
			ref={scrollRef}
			onScroll={scrollToTop}
			>
			{x.map((Message)=><MessageBox data={Message}/>)}
			</div>
			<div className="mb-0 mt-2 w-full">
			<input id="Chat"
			 placeholder="Chat..."
			   className="ml-1 mb-0 border-4 border-black w-[80%]"
			   type="text"
			   value={chat}
			   onChange={(e)=> setChat(e.target.value)}
			   onKeyDown={(e)=>{
				 if(e.key==="Enter")
				 {
					e.preventDefault()
					Dispatch(custommessage({
						"postId": 2,
						"id": 2,
						"name": "Harsh",
						"email": "Eliseo@gardner.biz",
						"body": chat}))
						setChat("")
				 }
				
			   }}
			   
			   />
			   <button
			     className="ml-1 mb-0  hover:cursor-pointer shadow-lg"
				 onClick={()=>{
					Dispatch(custommessage({
						"postId": Math.floor(Math.random() * (2000 - 1500) + 1500),
						"id": Math.floor(Math.random()*(2000 - 1500) + 1500),
						"name": "Harsh",
						"email": "Eliseo@gardner.biz",
						"body": chat}))
						setChat("")
				 }}
				 
			   >
                          <Send size={18} className="mr-1" />
			   </button>
			</div>
	    </div>
	)
} 

export default LiveChat;