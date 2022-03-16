import { useState } from "react"

type ImageHolderProps = {
    url: string
    alt: string
}


const ImageHolder = ({ url, alt }: ImageHolderProps) => {
    const [loading, setLoading] = useState(true)

    return (
        <div className='w-full h-full'>
            {loading ? <div className='w-full h-full bg-slate-400 animate-pulse absolute'></div> : <></>}
            <img alt={alt} src={url} width="1080" className='z-10 absolute' onLoad={() => {
                setLoading(false)
            }} />
        </div>

    );
}


export default ImageHolder
