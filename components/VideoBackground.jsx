import { useEffect, useState } from 'react';

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
    <div
      className="w-full h-screen p-5"
      style={{
        backgroundColor: value1,
        height: '-webkit-fill-available',
        height: '100vh',
      }}
    >
      <div
        className="w-full h-full rounded-3xl"
        style={{ backgroundColor: value2 }}
      ></div>
    </div>
  );
};

export default VideoBackground;
