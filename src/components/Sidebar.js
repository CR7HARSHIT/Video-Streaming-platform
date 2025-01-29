import { Link } from "react-router-dom";
const Sidebar=()=>{
	return (
		<div className="mt-[100px] w-48 border-2 border-solid shadow-2xl">
		<div>
			<ul className="m-5 ml-3 p-8 font-bold text-lg">
				<li className="cursor-pointer hover:bg-slate-200"><Link to={"/"}>Home</Link></li>
				<li>Shorts</li>
				<li>Subscriptions</li>
			</ul>
			<hr className="border-1 border-black"/>
		</div>
		
		<div>
			<ul className="m-5 ml-3 p-8 font-bold text-lg">
				<li>You  &gt;</li>
				<li>History</li>
				<li>Playlists</li>
				<li>WatchLater</li>

			</ul>
			<hr className="border-1 border-black"/>
		</div>

		<div>
			<ul className="m-5 ml-3 p-8 font-bold text-lg">
				<li>You  &gt;</li>
				<li>History</li>
				<li>Playlists</li>
				<li>WatchLater</li>

			</ul>
			<hr className="border-1 border-black"/>
		</div>
		
		</div>
	)
}
export default Sidebar;