import { BrowserRouter } from "react-router-dom";

import AppRouter from "./AppRouter";
import Navbar from "./component/nav/Navbar";
import { AuthProvider } from "./hooks/Auth";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
