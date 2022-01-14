import React, { useState, useEffect } from "react";

const BgMotion = (props) => {
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [pos, setPos] = useState({
    height: -randomNum(1, 300),
    left: randomNum(1, 95),
    speed: randomNum(1, 2),
    windowHeight: window.innerHeight,
  });

  const style = {
    left: `${pos.left}%`,
    transform: `translateY(${pos.height}px)`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((prev) => {
        if (prev.height > prev.windowHeight + 20) {
          return {
            height: -100,
            left: randomNum(1, 95),
            speed: randomNum(1, 2),
            windowHeight: window.innerHeight,
          };
        } else {
          return {
            height: prev.height + prev.speed,
            left: prev.left,
            speed: prev.speed,
            windowHeight: window.innerHeight,
          };
        }
      });
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={style} className="bg-motion__emoji">
      <img
        src={require(`../assets/images/main_emoji${props.type}.png`)}
        alt=""
      />
    </div>
  );
};

export default BgMotion;
