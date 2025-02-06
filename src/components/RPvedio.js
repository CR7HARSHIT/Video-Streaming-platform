
const RPvedio=({
	Info
	})=>{
		
		const snippet=Info.snippet;

	return (
		<div className="flex flex-row w-full my-3 h-40 p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200">
		{/* Thumbnail */}
		<div className="w-48 flex-shrink-0">
		  <img 
			src={snippet?.thumbnails?.medium?.url} 
			alt={snippet.title} 
			className="w-full h-auto rounded-md"
		  />
		</div>
	  
		{/* Video Details */}
		<div className="ml-4 flex flex-col justify-between">
		  {/* Video Title */}
		  <span className="text-lg font-semibold text-gray-900 line-clamp-2">
			{snippet.title}
		  </span>
	  
		  {/* Channel Name */}
		  <span className="text-sm text-gray-600 mt-1">{snippet.channelTitle}</span>
	  
		  {/* Video Description */}
		  <span className="text-sm text-gray-500 mt-2 line-clamp-2">
			{snippet.description}
		  </span>
		</div>
	  </div>
	  
	)
}
export default RPvedio