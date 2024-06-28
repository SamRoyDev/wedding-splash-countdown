import React from 'react';
import { styled } from "@stitches/react";

interface BackgroundImageProps {
  image: string;
}

const BackgroundImageStyled = styled("div", {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 1,
});

const BackgroundImage: React.FC<BackgroundImageProps> = ({ image }) => {
  return <BackgroundImageStyled style={{ backgroundImage: `url(${image})` }} />;
}

export default BackgroundImage;