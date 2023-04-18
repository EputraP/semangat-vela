import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { keyframes } from "styled-components";
import velaVideo from "../src/asset/vela.mp4";
import svgimg from "./asset/logo.svg";

const FloatIn = keyframes`
0%{
  right: -100px;

}
100%{
  right: 5px;
}
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const ContentContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;

  h1 {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
  h2 {
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const OverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

function App() {
  return (
    <AppContainer>
      <OverlayContainer />
      <video src={velaVideo} autoPlay loop muted />
      <ContentContainer>
        <h1>Semangat Vela</h1>
        <h2>Kamu pasti bisa!</h2>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
