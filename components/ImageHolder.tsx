import { useState } from "react"

type ImageHolderProps = {
    url: string
    alt: string
}


const ImageHolder = ({ url, alt }: ImageHolderProps) => {
    const [loading, setLoading] = useState(true)
    const onLoad = () => {
        setLoading(false)
    }
    return (
        <div className='w-full h-full'>
            <div className={`${loading ? 'block' : 'hidden'} w-full h-full bg-slate-400 animate-pulse absolute`}></div>
            <img alt={alt} src={url} width="1080" className='z-10 absolute' onLoad={onLoad} />
        </div>

    );
}


export default ImageHolder
