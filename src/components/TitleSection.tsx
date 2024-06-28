import React from 'react';
import { styled } from "@stitches/react";

interface TitleSectionProps {
  names: string;
  date: string;
  location: string;
}

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "100%",
  top: "20%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  textShadow: "-1px 0 #9e9e9e, 0 2px #9e9e9e, 2px 0 #9e9e9e, 0 -1px #9e9e9e",
  animation: "fadein 3s",
  zIndex: 10,
});

const GroomBride = styled("p", {
  fontSize: "9.5vh",
  fontWeight: "bold",
  opacity: 0.9,
  marginBottom: 16,
});

const Schedule = styled("p", {
  fontSize: "5vh",
  opacity: 0.65,
  marginBottom: 24,
});

const TitleSection: React.FC<TitleSectionProps> = ({ names, date, location }) => (
  <TitleWrapper>
    <GroomBride>{names}</GroomBride>
    <Schedule>
      {date}
      <br />
      {location}
    </Schedule>
  </TitleWrapper>
);

export default TitleSection;