import React from 'react';
import { styled } from "@stitches/react";

interface BackgroundVideoProps {
  videoSrc: string;
}

const VideoBackground = styled("video", {
  opacity: 0.2,
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 2,
});

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoSrc }) => (
  <VideoBackground autoPlay loop muted playsInline>
    <source src={videoSrc} type="video/mp4" />
  </VideoBackground>
);

export default BackgroundVideo;