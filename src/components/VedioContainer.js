/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import Vedio from "./Vedio";
import { Link } from "react-router-dom";
const VedioContainer=()=>{
	const [arr,setarr]=useState([]);
	const APIKEY=process.env.REACT_APP_APIKEY
	const VedioAPIURL=process.env.REACT_APP_VedioAPIURL
	useEffect(()=>{
		const vedioListFn=async ()=>{
		
		
			try {
			  const response = await fetch(VedioAPIURL+APIKEY);
		   console.log("Made API CALL")
			  
			  console.log(response); 
			  const data = await response.json();
			  console.log(`data::${data}`); 
			  setarr(data.items)
			} catch (error) {
			  console.error('Error fetching data:', error);
			}}
	vedioListFn()
	
	},[])
	
	  
	return (
		
			<div className=" flex flex-row flex-wrap">
			{
				arr.map((vedioinfo)=>{
                   return (<Link to={"/watch?v="+vedioinfo.id}><Vedio Info={vedioinfo}/></Link>)
				})
			}
			</div>
		
	)
}
export default VedioContainer; 