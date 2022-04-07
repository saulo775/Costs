import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Contacts } from "./pages/Contacts";
import { NewProject } from "./pages/NewProject";
import { Container } from "./components/Layout/Container";
import { Navbar } from "./components/Layout/Navbar";
import { Footer } from "./components/Layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container 
        min_heigth
        start
        column
      >
        <Routes>
            <Route path="/"exact element={<Home />} />
            <Route path="/company" exact element={<Company/>} />
            <Route path="/contact" exact element={<Contacts />} />
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
