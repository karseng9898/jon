import Image from 'next/image';

const SmallSprites = ({ className, open, size }) => {
  let styles = '';
  switch (size) {
    case 'large':
      styles = 'w-72';
      break;
    case 'medium':
      styles = 'w-60';
      break;
    case 'small':
      styles = 'w-32';
      break;
    default:
      break;
  }

  return (
    <div
      className={`fixed w-full top-0 left-0 z-10 ${className ? className : ''}`}
    >
      <div className={`lil-sprites ${styles}`}>
        <div className="">
          <Image
            draggable={false}
            className=" opacity-50"
            src="/jon3.gif"
            alt="jon"
            height={!open ? 0 : 494}
            width={658}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default SmallSprites;
