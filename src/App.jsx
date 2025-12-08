import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Error from "./Error";
import GetInTouch from "./Get-in-touch";
import WhoAmI from "./Who-am-i";
import RecentWork from "./Recent-work";
import Testimonials from "./Testimonials";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Who-am-I" element={<WhoAmI />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/recent-work" element={<RecentWork />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
