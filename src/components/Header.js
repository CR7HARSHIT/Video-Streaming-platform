import HamburgerMenuIcon from "../assets/images/HamburgerMenuIcon.png"
import YTLogo from "../assets/images/YouTubeLogo.png"
import SearchIcon from "../assets/images/SearchIcon.png"
import BellIcon from "../assets/images/bellicon.png"
import UserIcon from "../assets/images/usericon.png"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../utils/SbInfoSlice"
import { useEffect, useState } from "react"
import { putItem } from "../utils/lruSlice"
import { Link } from "react-router-dom"
const Header=()=>{
	const [searchQuery,setSearchQuery]=useState("");
	const [suggestions,setSuggestions]=useState([]);
	const [seeSuggestions,setSeeSuggestions]=useState(false);
	const CacheObj=useSelector((store)=> store.lruSlice.cache)
	const Dispatch=useDispatch();
	function ChangeStatus (){
		Dispatch(toggleSidebar())
	}
	
	 
	useEffect(()=>{
		async function getSuggestions(){
		
			if(CacheObj[searchQuery]) {
				 setSuggestions(CacheObj[searchQuery])
				 Dispatch(putItem({searchQuery,value:CacheObj[searchQuery]}))
			}
			else {
			const targetUrl=`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;
			const proxyUrl=`https://video-streaming-platform-server.onrender.com/proxy?url=${encodeURIComponent(targetUrl)}`;
			const response=await fetch(proxyUrl);
			const data=await response.json();
			console.log(`API CALL ${searchQuery}, data ${data}`)
			setSuggestions(data[1]);
			const value=data[1];
			Dispatch(putItem({searchQuery,value}))
		}}
     const Call=setTimeout(()=> getSuggestions(),200);
	 return ()=>{
		clearTimeout(Call)
	 }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[searchQuery])

	return (
		
		<div className="fixed top-0 left-0 w-full z-50 grid grid-flow-col grid-cols-12 border border-solid shadow-xl bg-white p-2">
		 
			<div id="left" className=" m-4 flex flex-row justify-start col-span-3 h-[32px]">
             <button className="cursor-pointer hover:bg-slate-200 rounded-full"
			  onClick={ChangeStatus}
			 ><img src={HamburgerMenuIcon} alt="HamburgerMenuIcon" className="h-[40px]" /></button>
			 <img src={YTLogo} alt="YTLogo" className="ml-3"/>
			</div>
			<div id="Middle" className=" m-4 col-span-6 ">
			<div className=" flex flex-row justify-items-center h-[40px] ">
            <input id="SearchBox"
			 placeholder="Search"
			  Style="text-indent: 10px"
			   type="text"
			   value={searchQuery}
			   onChange={(e)=> setSearchQuery(e.target.value)}
			    className="border-2 border-black rounded-l-full w-2/3"
				onFocus={()=> setSeeSuggestions(true)}
				onBlur={()=> setSeeSuggestions(false)}/>
			<button className="h-[40px] w-14 border-2 border-black rounded-r-full cursor-pointer hover:bg-slate-200">
			<img src={SearchIcon} alt="searchicon" className="h-[40px]" />
			</button>
			</div>
			{seeSuggestions && (
				<div className="fixed pl-5 bg-white w-[32%] rounded-md ">
				{suggestions.map((item)=> (<div className="">{item}</div>)) }
			</div>)}
			</div>
			<div id="Right" className=" m-4 flex flex-row justify-evenly col-span-3 h-[40px] ">
				<img src={BellIcon} alt="bellicon"/>
				<img src={UserIcon} alt="usericon"/>
			</div>
		 
		</div>
		
		
	)
}
export default Header;