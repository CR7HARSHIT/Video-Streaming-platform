import { COMMENTS } from "../utils/Constants";
import CommentList from "./CommentList";
const Comments=()=>{
	return (
		<div className="border-4 border-black ">
			<span className="m-6 text-2xl font-bold">Comments</span>
		
		<CommentList arr={COMMENTS}/>	
		
		</div>
		
	)
}
export default Comments;