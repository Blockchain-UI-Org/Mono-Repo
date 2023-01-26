import React from "react";
import styled from "styled-components";
import Landing from "./pages/landing";

// slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Wrapper>
      <Landing />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
`;
