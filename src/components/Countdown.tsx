import React from "react";
import moment from "moment";

interface CountdownProps {
  timeTillDate: string;
  timeFormat: string;
}

interface CountdownState {
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
}

class Countdown extends React.Component<CountdownProps, CountdownState> {
  interval?: NodeJS.Timeout;

  constructor(props: CountdownProps) {
    super(props);
    this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const duration = moment.duration(then.diff(now));

      const days = Math.floor(duration.asDays()); // Total number of days
      const hours = duration.hours(); // Hours remaining after days calculation
      const minutes = duration.minutes(); // Minutes remaining after hours calculation
      const seconds = duration.seconds(); // Seconds remaining after minutes calculation

      this.setState({
        days: days.toString(),
        hours: hours.toString(),
        minutes: minutes.toString(),
        seconds: seconds.toString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    const daysRadius = mapNumber(parseInt(days || "0"), 30, 0, 0, 360);
    const hoursRadius = mapNumber(parseInt(hours || "0"), 24, 0, 0, 360);
    const minutesRadius = mapNumber(parseInt(minutes || "0"), 60, 0, 0, 360);
    const secondsRadius = mapNumber(parseInt(seconds || "0"), 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      <div>
        <div className="countdown-wrapper">
          {days && (
            <CountdownItem radius={daysRadius} time={days} label="Days" />
          )}
          {hours && (
            <CountdownItem radius={hoursRadius} time={hours} label="Hours" />
          )}
          {minutes && (
            <CountdownItem radius={minutesRadius} time={minutes} label="Minutes" />
          )}
          {seconds && (
            <CountdownItem radius={secondsRadius} time={seconds} label="Seconds" />
          )}
        </div>
      </div>
    );
  }
}

interface CountdownItemProps {
  radius: number;
  time: string;
  label: string;
}

const CountdownItem: React.FC<CountdownItemProps> = ({
  radius,
  time,
  label,
}) => (
  <div className="countdown-item">
    {time}
    <span>{label}</span>
  </div>
);


function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function mapNumber(
  number: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export default Countdown;
