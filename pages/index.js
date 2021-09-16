import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Howl, Howler } from 'howler';
import VideoBackground from '../components/VideoBackground';
import SmallSprites from '../components/SmallSprites';
import FlippedSmallSprites from '../components/FlipedSmallSprites';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [musicStopped, setMusicStopped] = useState(false);

  const sound = new Howl({
    src: ['test.mpeg'],
    onend: () => setMusicStopped(true),
  });

  useEffect(() => {
    setTimeout(() => {
      setShow1(true);
    }, 300);
    setTimeout(() => {
      setShow2(true);
    }, 1700);
    setTimeout(() => {
      setShow3(true);
    }, 2400);
    setTimeout(() => {
      setShow4(true);
    }, 1200);
    setTimeout(() => {
      setShow5(true);
    }, 1800);
  }, []);

  const Button = () => (
    <div className="flex justify-center items-center w-screen h-screen z-50">
      <button
        className="z-50"
        onClick={() => {
          sound.play();
          setOpen(true);
        }}
      >
        Trust Me
      </button>
    </div>
  );

  const BigSprite = () => {
    return (
      <div className="fixed top-1/2 transform -translate-y-1/2 w-full flex justify-center z-30">
        <div className="w-7/12">
          <Image
            draggable={false}
            className="rounded-md"
            src="/jon3.gif"
            alt="Jon"
            height={!open ? 0 : 494}
            width={658}
            layout="responsive"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <BigSprite />

      {open ? (
        <>
          <VideoBackground />
        </>
      ) : (
        <Button />
      )}
      {show1 && <SmallSprites className="top-40" open={open} size="small" />}
      {show2 && <SmallSprites className="top-4" open={open} size="large" />}
      {show3 && <SmallSprites className=" top-2/3" open={open} size="medium" />}
      {show4 && (
        <FlippedSmallSprites className=" top-3/4" open={open} size="medium" />
      )}
      {show5 && (
        <FlippedSmallSprites className=" top-1/3" open={open} size="large" />
      )}
    </>
  );
};

export default Home;
