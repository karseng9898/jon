import { Howl } from 'howler';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Animated from 'react-mount-animation';
import SmallSprites from '../components/SmallSprites';
import VideoBackground from '../components/VideoBackground';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [musicStopped, setMusicStopped] = useState(false);

  const sound = new Howl({
    src: ['music.mpeg'],
    onend: () => {
      setMusicStopped(true);
      setOpen(false);
    },
    preload: true,
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
    }, 3400);
    setTimeout(() => {
      setShow4(true);
    }, 1000);
    setTimeout(() => {
      setShow5(true);
    }, 1800);
  }, []);

  const Button = () => (
    <div
      className="flex justify-center items-center w-screen z-50"
      style={{ height: '-webkit-fill-available', height: '100vh' }}
    >
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
      <Head>
        <title>Trust Me</title>
        <link rel="icon" href="/orange.png" />
      </Head>
      <BigSprite />

      {open ? (
        <>
          <VideoBackground />
        </>
      ) : (
        <>{!musicStopped && <Button />}</>
      )}
      {show1 && <SmallSprites className="s1" open={open} size="medium" />}
      {show2 && <SmallSprites className="s2" open={open} size="large" />}
      {show3 && <SmallSprites className="s3" open={open} size="small" />}
      {show4 && (
        <SmallSprites className="s4" open={open} size="medium" flipped />
      )}
      {show5 && (
        <SmallSprites className="s5" open={open} size="medium" flipped />
      )}
      <Animated.div //You can use any HTML element here
        show={musicStopped}
        className="fixed text-white text-4xl text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        mountAnim={` 
            0% {opacity: 0}
            100% {opacity: 1}
        `}
      >
        What are you waiting for?
      </Animated.div>
    </>
  );
};

export default Home;
