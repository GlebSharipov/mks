import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";

import { Home, AboutUs, Services, Objects, Contacts } from "./pages";
import "./assets/styles/fonts.css";

function App() {
  return (
    <Root>
      <Header />

      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/objects" element={<Objects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Content>

      <Footer />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Ubuntu";
  width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  background-color: rgba(97, 94, 94, 0.1);
`;

export default App;
