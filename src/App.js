import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
function App() {
  const appRouter=createBrowserRouter([{
     path:"/",
     element:<Body/>,
     children:[{
      path:"/",
      element:<MainContainer/>
     },{
      path:"/watch",
      element:<WatchPage/>
     }]
  }])
  return (
    <div className="App">
      <Provider store={store}>
     <Header/>
     <RouterProvider router={appRouter}/>
     </Provider>
    </div>
  );
}

export default App;
