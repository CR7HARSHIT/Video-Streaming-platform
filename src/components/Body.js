import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Header from "./Header";
const Body=()=>{
	const status=useSelector((store)=> store.SbInfoSlice.IsOpen)
   return (
	<>
	<Header/>
	<div id="Body" className=" flex flex-row ">
	
	{status?<Sidebar />:null}
	<Outlet/>
	</div>
	</>
   )
}
export default Body;