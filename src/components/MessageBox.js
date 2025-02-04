import UserIcon from "../assets/images/usericon.png"
const MessageBox=({data})=>{
	console.log(data)
	return (
		
		<div className="flex flex-row mb-4">
		<img src={UserIcon} alt="usericon" className="w-7 h-7 rounded-full object-cover" />
		<div className="ml-2">
			<span className="mr-3 text-base font-semibold">{data.name.slice(0,10)}</span>
			<span>{data.body.slice(0,70)}</span>
		</div>
        
		</div>
	)
}
export default MessageBox