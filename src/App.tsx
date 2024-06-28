import React from "react";
import "./App.css";
import { styled } from "@stitches/react";
import BackgroundVideo from "./components/BackgroundVideo";
import TitleSection from "./components/TitleSection";
import BackgroundImage from "./components/BackgroundImage";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
});

const App: React.FC = () => {
  return (
    <Layout>
      <BackgroundImage image="./assets/72.jpg" />
      <BackgroundVideo videoSrc="./assets/BackgroundVideo.mp4" />
      <TitleSection
        names="Sam Roy and Julie Voorhes"
        date="06.21.2025"
        location="Cedar City, Utah"
      />
    </Layout>
  );
};

export default App;
