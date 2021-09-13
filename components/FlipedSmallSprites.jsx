import Image from 'next/image';

const FlippedSmallSprites = ({ className, open, size }) => {
  const scale =
    size === 'large' ? 2 : size === 'medium' ? 3 : size === 'small' ? 4 : 0;
  return (
    <div
      className={`fixed w-full top-0 left-0 z-10 ${className ? className : ''}`}
    >
      <div className="lil-sprites-flipped">
        <Image
          draggable={false}
          className=" opacity-50"
          src="/jon4.gif"
          alt="jon"
          height={!open ? 0 : 494 / scale}
          width={658 / scale}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default FlippedSmallSprites;
