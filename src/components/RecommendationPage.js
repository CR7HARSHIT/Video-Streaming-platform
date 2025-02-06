/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useSearchParams } from "react-router-dom"
import ButtonList from "./ButtonList"
import { useEffect, useState } from "react"
import RPvedio from "./RPvedio"

const RecommendationPage=()=>{
   const [params]=useSearchParams()
   const [arr,setArr]=useState([])
   const info=params.get('v')
   const APIKEY=process.env.REACT_APP_APIKEY
   console.log(`INFO:${info}`)
   async function recommendedvedios()
   {
	try {
		let response=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${info}&type=video&key=${APIKEY}`)
		let data=await response.json()
		setArr(data?.items)
	} catch (error) {
		console.log(`Some Error occured while fetching data of recommended vedios .Error:${error}`)
	}
   }
    useEffect(()=>{
		recommendedvedios()
	},[])
	return (
		<div className="relative  h-screen overflow-hidden ml-4 p-8   w-full">
  
        <div className="fixed  m-11   bg-white">
          <ButtonList />
        </div>

  
         <div className="mt-[140px] ml-[60px] h-[calc(100vh-140px)] overflow-auto p-4">
		 <div className=" flex flex-col">
			{
				 arr.map((vedioinfo)=>{
                    return (<Link to={"/watch?v="+vedioinfo.id.videoId}><RPvedio Info={vedioinfo}/></Link>)
				 })
			}
			</div>
         </div>
        </div>
	)
}
export default RecommendationPage


// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=fun&type=video&key=AIzaSyBjf2rjL-KFnYfl-XfIhq5UebjslgI4IeI