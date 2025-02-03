import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { APIKEY, SINGLEVEDIOAPI } from "../utils/Constants";
import { closeSidebar } from "../utils/SbInfoSlice";
import { useDispatch } from "react-redux";
import LiveChat from "./LiveChat";
import Comments from "./Comments";
const WatchPage=()=>{
	const location=useLocation();
     const queryParams = new URLSearchParams(location.search);
	 const id=queryParams.get('v');
	 const Dispatch=useDispatch();
	 useEffect(()=>{
    async  function getvediodata (){
		try {
         const response=await fetch(`${SINGLEVEDIOAPI}&id=${id}&key=${APIKEY}`)
         const data=await response.json();
		 console.log(data,"Data is here")      			
		} catch (error) {
			
		}

	  }
	  function CloseSB(){
		Dispatch(closeSidebar());
	  }
	  getvediodata()
      CloseSB()
	 },[])
	return (
		<div className="w-full">
		<div className="flex flex-row ">
		<div className="mt-32 m-8">
			<iframe 
			
			width="1050"
			 height="550"
			  src={`https://www.youtube.com/embed/${id}`}
			   title="YouTube video player"
			    frameBorder="0"
				 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture; web-share"
			 referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
			 </iframe>
			 
		</div>
		<LiveChat/>
		</div>
		<Comments/>
		</div>

	)
}
export default WatchPage;