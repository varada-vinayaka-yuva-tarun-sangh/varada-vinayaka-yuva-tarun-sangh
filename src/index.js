import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Frame from "./Components/Frame";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Page404 from "./Components/Page404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Frame />}></Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </Router> */}
    {/* For Github Pages */}
    <Frame />
  </>
);
