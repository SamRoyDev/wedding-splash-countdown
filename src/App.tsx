import React from "react";
import "./App.css";
import { styled } from "@stitches/react";
import BackgroundVideo from "./components/BackgroundVideo";
import TitleSection from "./components/TitleSection";
import BackgroundImage from "./components/BackgroundImage";

const Layout = styled("div", {
  position: "relative",
  width: "100%",
  height: "100vh",  // This ensures the parent container fills the viewport
  overflow: "hidden",
});

const ContentWrapper = styled("div", {
  marginTop: "15%", // Add more top margin
  width: "100%",
  position: "relative", // ensure it respects the layout positioning
});

const App: React.FC = () => {
  return (
    <Layout>
      <BackgroundImage image="./assets/0108.jpg" />
      <BackgroundVideo videoSrc="./assets/BackgroundVideo.mp4" />
      <ContentWrapper>
        <TitleSection
          names="Sam Roy & Julie Voorhes"
          date="06.21.2025"
          location="Cedar City, Utah"
          content="Check back for more information soon"
        />
      </ContentWrapper>
      
    </Layout>
  );
};

export default App;
