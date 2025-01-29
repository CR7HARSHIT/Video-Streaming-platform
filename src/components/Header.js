import HamburgerMenuIcon from "../assets/images/HamburgerMenuIcon.png"
import YTLogo from "../assets/images/YouTubeLogo.png"
import SearchIcon from "../assets/images/SearchIcon.png"
import BellIcon from "../assets/images/bellicon.png"
import UserIcon from "../assets/images/usericon.png"
import { useDispatch } from "react-redux"
import { toggleSidebar } from "../utils/SbInfoSlice"
import { useEffect, useState } from "react"
const Header=()=>{
	const [searchQuery,setSearchQuery]=useState("");
	const [suggestions,setSuggestions]=useState([]);
	const Dispatch=useDispatch();
	function ChangeStatus (){
		Dispatch(toggleSidebar())
	}
	async function getSuggestions(){
		const targetUrl=`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;
        const proxyUrl=`http://localhost:5000/proxy?url=${encodeURIComponent(targetUrl)}`;
        const response=await fetch(proxyUrl);
		const data=await response.json();
        console.log(`API CALL ${searchQuery}, data ${data}`)
        setSuggestions(data[1]);
	 }
	useEffect(()=>{
     const Call=setTimeout(()=> getSuggestions(),200);
	 return ()=>{
		clearTimeout(Call)
	 }
	},[searchQuery])

	return (
		<div className="m-2 ml-0 mr-0 grid grid-flow-col grid-cols-12 border border-solid shadow-xl">
		 
			<div id="left" className="m-4 flex flex-row justify-start col-span-3 h-[40px]">
             <button className="cursor-pointer hover:bg-slate-200 rounded-full"
			  onClick={ChangeStatus}
			 ><img src={HamburgerMenuIcon} alt="HamburgerMenuIcon" className="h-[40px]" /></button>
			 <img src={YTLogo} alt="YTLogo" className="ml-3"/>
			</div>
			<div id="Middle" className="m-4 flex flex-row justify-items-center col-span-6 h-[40px]">
			
            <input id="SearchBox"
			 placeholder="Search"
			  Style="text-indent: 10px"
			   type="text"
			   value={searchQuery}
			   onChange={(e)=> setSearchQuery(e.target.value)}
			    className="border-2 border-black rounded-l-full w-2/3"/>
			<button className="h-[40px] w-14 border-2 border-black rounded-r-full cursor-pointer hover:bg-slate-200">
			<img src={SearchIcon} alt="searchicon" className="h-[40px]" />
			</button>
			
			<div>
				{suggestions.map((item)=> <div className="">{item}</div>)}
			</div>
			</div>
			<div id="Right" className="m-4 flex flex-row justify-evenly col-span-3 h-[40px] ">
				<img src={BellIcon} alt="bellicon"/>
				<img src={UserIcon} alt="usericon"/>
			</div>
		 
		</div>
		
	)
}
export default Header;