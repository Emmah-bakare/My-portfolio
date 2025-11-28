import "./App.css";
import "./index.css";
import "./case-study.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Error } from "./Error";
import { GetInTouch } from "./Get-in-touch";
import { CaseStudies } from "./Case-studies";
import { RecentWork } from "./Recent-work";
import { Testimonials } from "./Testimonials";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/recent-work" element={<RecentWork />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
