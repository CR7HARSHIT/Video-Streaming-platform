import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import RecommendationPage from "./components/RecommendationPage";
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
     },{
      path:"/results",
      element:<RecommendationPage/>
     }]
  }])
  return (
    <div className="App">
      <Provider store={store}>
      <RouterProvider router={appRouter}>
    </RouterProvider>
     
     
     </Provider>
    </div>
  );
}

export default App;
