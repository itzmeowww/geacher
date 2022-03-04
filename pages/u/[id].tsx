import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'



type Tutor = {
    firstname: string
    lastname: string
    subjects: string[]
    batch: number
    poster: string
    id: string
    tel?: string
    ig?: string
    line?: string
    fb?: string
}


const TutorPage = () => {

    const [tutor, setTutor] = useState<Tutor>()
    const router = useRouter()

    const { id } = router.query

    useEffect(() => {

        if (id === undefined) return

        const url = "https://geacher.vercel.app/api/getTutor/" + id
        fetch(url).then((res) => {
            res.json().then((data) => {
                setTutor(data)

            })
        })
    }, [id])


    return (
        <div className="flex w-screen overflow-hidden min-h-screen flex-col items-center justify-center bg-gray-900">
            <Head>
                <title>Geacher</title>
                <link rel="icon" href="/icon.jpg" />
            </Head>

            <main className="max-w-4xl flex flex-1 w-full  flex-col items-start justify-start px-10 sm:px-20 pt-20  text-left overflow-hidden">


                <div className='bg-gray-900 z-10 pr-4'>
                    <h1 className="text-4xl sm:text-6xl font-bold text-pink-500 ">
                        {tutor === undefined ? <div className='animate-pulse w-36 h-6 sm:h-10 bg-slate-700 rounded' /> : `${tutor.firstname} ${tutor.lastname} #${tutor.batch}`}
                    </h1>
                </div>
                <div className='w-full border-t border-4 border-pink-500 mt-3'></div>


                <div className='w-full my-6 md:mt-20'>
                    <div className='w-72 md:w-96 h-72 md:h-96 mx-auto'>
                        {tutor === undefined ? <div className='w-full h-full bg-slate-300 animate-pulse' ></div> : <Image src={tutor.poster} alt="" className='w-full' />}
                    </div>
                </div>
            </main >

            <section className='max-w-4xl flex w-full flex-col pb-20 items-end justify-start px-10 sm:px-20 text-center'>
                <div className='bg-gray-900 z-10 pl-4'>
                    <h1 className="text-4xl sm:text-6xl font-bold text-blue-400 mr-0">
                        CONTACTS
                    </h1>
                </div>
                <div className='w-full border-t border-4 border-blue-400 -mt-3 '></div>

                <div className='w-full flex flex-col gap-4 items-start justify-middle mt-10'>
                    {(tutor && tutor.tel) ? <a href={`tel:${tutor.tel}`} className=''><button className='px-4 py-1 bg-white rounded text-lg'> <Image src="/phoneIcon.svg" alt="Phone Logo" height={16} /> : {tutor.tel}</button> </a> : <></>}
                    {(tutor && tutor.ig) ? <a href={`https://instagram.com/${tutor.ig}`} className=''><button className='px-4 py-1 bg-white rounded text-lg'> <Image src="/igIcon.svg" alt="Instagram Logo" height={16} /> Instagram </button></a> : <></>}
                    {(tutor && tutor.fb) ? <a href={`${tutor.fb}`} className=''><button className='px-4 py-1 bg-white rounded text-lg'><Image src="/fbIcon.svg" alt="Facebook Logo" height={16} />Facebook</button> </a> : <></>}
                    {(tutor && tutor.line) ? <a className=''><button className='px-4 py-1 bg-white rounded text-lg'> <Image src="/lineIcon.svg" alt="Line Logo" height={16} /> {tutor.line} </button></a> : <></>}
                </div>
            </section>
            <footer className="text-white flex h-24 w-full items-center justify-center border-t">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </a>
            </footer>
        </div >
    )
}



export default TutorPage
