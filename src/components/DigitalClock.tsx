import { useEffect, useState } from 'react';

interface DigitalClockProps {
  className?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
}

function DigitalClock({ 
  className, 
  textColor = '#000', 
  fontSize = '16px', 
  fontWeight = 'normal' 
}: DigitalClockProps) {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    ampm: 'AM',
  });

  // Clock function to update the state
  function clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = 'AM';

    // Convert 24-hour format to 12-hour format
    if (h >= 12) {
      h = h - 12;
      am = 'PM';
    }
    if (h === 0) h = 12; // Special case for 12AM/PM

    // Add 0 to the beginning if less than 10
    const formattedH = (h < 10) ? '0' + h : h.toString();
    const formattedM = (m < 10) ? '0' + m : m.toString();
    const formattedS = (s < 10) ? '0' + s : s.toString();

    // Update state with the new time values
    setTime({
      hours: formattedH,
      minutes: formattedM,
      seconds: formattedS,
      ampm: am,
    });
  }

  useEffect(() => {
    // Run the clock function every second
    const interval = setInterval(clock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={className} style={{ color: textColor, fontSize, fontWeight }}>
      <div style={{ display: 'flex' }}>
        <h2>{time.hours}</h2>
        <h2>:</h2>
        <h2>{time.minutes}</h2>
        <h2>:</h2>
        <h2>{time.seconds}</h2>
        <sub>{time.ampm}</sub>
      </div>
    </section>
  );
}

export default DigitalClock;
