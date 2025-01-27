import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { APIKEY, SINGLEVEDIOAPI } from "../utils/Constants";
import { closeSidebar } from "../utils/SbInfoSlice";
import { useDispatch } from "react-redux";
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
		<div>WatchPage</div>

	)
}
export default WatchPage;