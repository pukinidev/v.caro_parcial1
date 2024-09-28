import { BrowserRouter, Routes, Route } from "react-router-dom";
import urls from "./components/utils/urls";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={urls.login} element={<Login/>} />
          <Route path={urls.home} element={<Home/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
