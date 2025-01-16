import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
     <Header/>
     <Body/>
     </Provider>
    </div>
  );
}

export default App;
