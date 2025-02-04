import CommentMessage from "./CommentMessage"


const CommentList = ({ arr }) => {
	return (
	  <div >
		{arr.map((message, index) => (
		  <CommentMessage key={message.id} data={message} />
		))}
	  </div>
	);
  };
  
export default CommentList