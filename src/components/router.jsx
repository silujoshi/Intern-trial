import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Preservation from "../pages/Preservation";
// import Story from "../pages/Story";
function Router() {
  return (
    <BrowserRouter clas>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Preservation" element={<Preservation />} />
        <Route path="/story" element={<Preservation />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;