import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body=()=>{
   return (
	<div id="Body" className="flex flex-row flex-wrap ">
	
	<Sidebar />
	<MainContainer/>
	</div>
   )
}
export default Body;