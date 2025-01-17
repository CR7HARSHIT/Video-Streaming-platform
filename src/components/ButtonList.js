import ButtonComponent from "./ButtonComponent";

const list=["All","Data Structures","Software Engineering","Podcast","Live","News","AI","Cloud Computing","Cricket","Football","Problem Solving"]
const ButtonList=()=>{
	return(
		<div className="m-2 flex">
			{list.map((data)=>{
                return (
			<ButtonComponent value={data} key={data}/>
                  
				)
			})}
		</div>
	)
}
export default ButtonList;