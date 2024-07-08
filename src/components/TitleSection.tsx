import React from "react";
import Countdown from "./Countdown";
import "../App.css"; // Ensure the CSS file has the correct path and contains the required styles

interface TitleSectionProps {
  names: string;
  date: string;
  location: string;
  content: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  names,
  date,
  location,
  content
}) => (
  <div className="TitleWrapper">
    <p className="GroomBride">{names}</p>
    <Countdown
      timeTillDate="06 21 2025, 6:00 pm"
      timeFormat="MM DD YYYY, h:mm a"
    />
    <p className="Schedule">
      {date}
      <br />
      {location}
      <p>
      <br />
      {content}
      </p>
    </p>
  </div>
);

export default TitleSection;
