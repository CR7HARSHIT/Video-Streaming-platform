import UserIcon from "../assets/images/usericon.png"
import CommentList from "./CommentList"
import { Reply } from "lucide-react"; 

const CommentMessage = ({ data }) => {
  return (
    <div className="flex space-x-3 p-2">
      <img
        src={UserIcon}
        alt="User Icon"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-gray-800">{data.name}</span>
          <span className="text-xs text-gray-500">• 2 hours ago</span> 
        </div>
        <p className="text-sm text-gray-700">{data.message}</p>
        <button className="flex items-center text-blue-500 hover:text-blue-700 text-sm mt-1">
          <Reply size={16} className="mr-1" /> Reply
        </button>
        {data?.replies?.length > 0 && (
          <div className="mt-2 pl-12 border-l border-gray-300">
            <CommentList arr={data.replies} />
          </div>
        )}
      </div>
    </div>
  );
};

  
  

export default CommentMessage