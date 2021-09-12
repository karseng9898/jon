import { useState, useEffect } from 'react';
import Image from 'next/image';
import Sound from 'react-sound';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setInterval(() => {
      setValue('#' + Math.floor(Math.random() * 16777215).toString(16));
    }, 500);
    return () => {
      clearInterval(value);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Button = () => (
    <div className="flex justify-center items-center w-screen h-screen">
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Trust Me
      </button>
    </div>
  );

  const VideoBackgound = () => (
    <div className="w-screen h-screen" style={{ backgroundColor: value }}></div>
  );

  const Video = () => {
    return (
      <div className="fixed top-1/2 transform -translate-y-1/2 w-full flex justify-center">
        <div className="w-8/12">
          <Image
            className="rounded-md"
            src="/jon3.gif"
            alt="Jon"
            height={494}
            width={658}
            layout="responsive"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {open ? (
        <>
          <Sound url="jon.mpeg" playStatus={Sound.status.PLAYING} loop={true} />
          <VideoBackgound />
          <Video />
        </>
      ) : (
        <Button />
      )}
    </>
  );
};

export default Home;
