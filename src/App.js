import { BrowserRouter, Routes, Route } from "react-router-dom";
import urls from "./components/utils/urls";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import Home from "./components/utils/pages/Home";
import Login from "./components/utils/pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* AppBar */}
        <Routes>
          <Route path={urls.login} element={<Login/>} />
          <Route path={urls.home} element={<Home/>} />
        </Routes>
        {/* Footer */}
      </BrowserRouter>
    </div>
  );
}

const Titulo = () => {
  return (
    <Typography variant="h1" align="center">
      <FormattedMessage id="Title" />
    </Typography>
  );
}

export default App;
