// CountUpNumber.jsx
import { useEffect, useState } from "react";

const CountUpNumber = ({ target, duration = 1000 }) => {
  const [displayValue, setDisplayValue] = useState(() =>
    Math.floor(Math.random() * target)
  );

  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      const value = percent * target;
      setDisplayValue(target % 1 === 0 ? Math.floor(value) : value.toFixed(1));

      if (percent < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{displayValue}</span>;
};

export default CountUpNumber;
