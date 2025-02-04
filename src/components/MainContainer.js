import ButtonList from "./ButtonList";
import VedioContainer from "./VedioContainer";

const MainContainer=()=>{
	return (
	<div className="relative  h-screen overflow-hidden ml-4 p-8   w-full">
  
  <div className="fixed  m-11   bg-white">
    <ButtonList />
  </div>

  
  <div className="mt-[140px] ml-[60px] h-[calc(100vh-140px)] overflow-auto p-4">
    <VedioContainer />
  </div>
</div>

	)
}
export default MainContainer;