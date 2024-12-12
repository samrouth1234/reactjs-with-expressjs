import { BrowserRouter } from "react-router-dom";

import AppRouter from "./AppRouter";
import Navbar from "./component/nav/Navbar";

const App = () =>{
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App;
