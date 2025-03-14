import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Preservation from "../pages/Preservation";
import Story from "../pages/Story";
import Templates from "../pages/Templates";
import Reflection from "../pages/Reflection";

function Router() {
  return (
    <BrowserRouter clas>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Preservation" element={<Preservation />} />
        <Route path="/story" element={<Story />} />
        <Route path="/Templates" element={<Templates />} />
        <Route path="/Reflection" element={<Reflection />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;