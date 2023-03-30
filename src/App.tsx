import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Routes/Components/Footer";
import Header from "./Routes/Components/Header/Header";
import EventView from "./Routes/EventView";
import Home from "./Routes/Home";
import Login from "./Routes/Login";

const Wrapper = styled.div`
  min-width: 1280px;
  font-size: 1.6rem;

  @media screen and (max-width: 1280px) {
    /* padding: 1rem; */
  }
`;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/EventView/:eventId" element={<EventView />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
