import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ShadowClues from "./ShadowClues";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shadowclues" element={<ShadowClues />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
