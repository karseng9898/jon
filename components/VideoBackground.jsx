import { useEffect, useState } from 'react';
import Animated from 'react-mount-animation';

const VideoBackground = (open) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  useEffect(() => {
    setInterval(() => {
      setValue1('#' + Math.floor(Math.random() * 16777215).toString(16));
      setValue2('#' + Math.floor(Math.random() * 16777215).toString(16));
    }, 500);
    return () => {
      clearInterval(value1, value2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Animated.div //You can use any HTML element here
      show={open}
      unmountAnim={` 
        0% {opacity: 1}
        100% {opacity: 0}
    `}
    >
      <div
        className="w-screen h-screen p-5"
        style={{ backgroundColor: value1 }}
      >
        <div
          className="w-full h-full rounded-3xl"
          style={{ backgroundColor: value2 }}
        ></div>
      </div>
    </Animated.div>
  );
};

export default VideoBackground;
