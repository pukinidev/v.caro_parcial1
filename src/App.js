import { BrowserRouter, Routes, Route } from "react-router-dom";
import urls from "./components/utils/urls";
import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* AppBar */}
        <Routes>
          <Route path={urls.home} element={<Titulo/>} />
        </Routes>
        {/* Footer */}
      </BrowserRouter>
    </div>
  );
}

const Titulo = () => {
  return (
    <Typography variant="h1" align="center">
      Titulo
    </Typography>
  );
}

export default App;
