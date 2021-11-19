import Home from "./home";
import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./notFound";
import Header from "./header";
import About from "./about";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          {/* add routes about the * route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
