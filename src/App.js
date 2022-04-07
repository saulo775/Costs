import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Contacts } from "./pages/Contacts";
import { NewProject } from "./pages/NewProject";
import { Container } from "./components/Layouts/Container";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Link to={"/"}>Home</Link>
        <Link to={"/company"}>Company</Link>
        <Link to={"/contact"}>Contacts</Link>
        <Link to={"/newproject"}>NewProject</Link>
      </Header>
        <Container 
          min_heigth
          start
          column
        >
          <Routes>
              <Route path="/"exact element={<Home />} />
              <Route path="/company" exact element={<Company/>} />
              <Route path="/contact" exact element={<Contacts />} />
              <Route path="/newproject" exact element={<NewProject />} />
          </Routes>
        </Container>

    </BrowserRouter>
  );
}

const Header = styled.header`
  background-color: red;
`;

export default App;
