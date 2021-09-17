import Image from 'next/image';

const SmallSprites = ({ className, open, size, flipped }) => {
  return (
    <div
      className={`fixed ${className ? className : ''} left-0 w-screen z-10 `}
      style={{ height: '-webkit-fill-available', height: '100vh' }}
    >
      <div
        className={`${
          flipped ? 'lil-sprites-flipped' : 'lil-sprites'
        } ${size} `}
      >
        <Image
          draggable={false}
          className=" opacity-50"
          src={flipped ? '/sinchan.gif' : '/sinchan.gif'}
          alt="jon"
          height={!open ? 0 : 494}
          width={658}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default SmallSprites;
