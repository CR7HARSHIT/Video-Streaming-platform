const ButtonComponent=({value})=>{
    return (
       <div>
		<button className="h-[40px] m-2 p-2 font-bold border rounded-md bg-slate-100 hover:bg-slate-200">{value}</button>
	   </div>
	)
}
export default ButtonComponent;