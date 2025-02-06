const Vedio=({Info})=>{

	return (
       <div className="flex flex-col m-3 hover:scale-104">
		<img src={Info?.snippet?.thumbnails?.high?.url} alt="img" className="border rounded-2xl h-60 w-70 hover:rounded-none cursor-pointer "/>
		<div className="line-clamp-2 font-bold w-80 text-balance">{Info?.snippet?.title}</div>
		<div className="text-slate-700 ml-1">{Info?.snippet?.channelTitle}</div>
	   </div>
	)
}
export default Vedio;