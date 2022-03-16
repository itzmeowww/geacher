import Image from 'next/image'

type ImageHolderProps = {
  url: string
  alt: string
  width: number
  height: number
}


const ImageHolder = ({ url, alt, width, height }: ImageHolderProps) => {


  const convertImage = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#e2e8f0" offset="20%" />
          <stop stop-color="#cbd5e1" offset="50%" />
          <stop stop-color="#e2e8f0" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#e2e8f0" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);
  return (
    <div className='w-full h-full' >
      <Image alt={alt} src={url} width={width} height={height} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(
        convertImage(width, height)
      )}`} />
    </div>

  );
}


export default ImageHolder
