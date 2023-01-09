import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Routes/Components/Footer";
import Header from "./Routes/Components/Header/Header";
import EventView from "./Routes/EventView";

import Home from "./Routes/Home";
import Login from "./Routes/Login";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/EventView/:eventId" element={<EventView />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
