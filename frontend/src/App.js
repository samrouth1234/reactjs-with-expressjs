import { BrowserRouter } from "react-router-dom";

import AppRouter from "./AppRouter";
import Navbar from "./component/nav/Navbar";

const App = () =>{
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
