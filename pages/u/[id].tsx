import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toThai } from '../../utils/toThai'


import { Tutor } from '../../models/tutor'

type Props = {
    tutor: Tutor
}

const TutorPage = ({ tutor }: Props) => {

    // const [tutor, setTutor] = useState<Tutor>()
    const router = useRouter()

    // const { id } = router.query

    const path = 'https://geacher.vercel.app' + router.asPath
    const [isCopied, setIsCopied] = useState(false);

    // This is the function we wrote earlier
    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(path)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="flex w-screen overflow-hidden min-h-screen flex-col items-center justify-center bg-gray-900">
            <Head>
                {
                    tutor === undefined ? <title>Geacher</title> : <title>{`${tutor.firstname} ${tutor.lastname} #${tutor.batch}`} | Geacher</title>
                }

                <link rel="icon" href="/icon.jpg" />
                {
                    tutor === undefined ? <meta property="og:url" content="https://geacher.vercel.app" /> : <meta property="og:url" content={path} />
                }

                {
                    tutor === undefined ? <meta property="og:description" content="" /> : <meta property="og:description" content={`ติวเตอร์วิชา ${tutor.subjects.map((subject: string) => {
                        if (toThai.get(subject) === undefined) return subject
                        return toThai.get(subject)
                    }).join(', ')} การันตีคุณภาพระดับเทพ ด้วยดีกรีเด็ก KVIS`} />
                }



                {tutor === undefined ? <meta property="og:title" content={`Geacher`} /> : <meta property="og:title" content={`${tutor.firstname} ${tutor.lastname} #${tutor.batch} | Geacher`} />}
                {tutor === undefined ? <></> : <meta property="og:image" content={`${tutor.poster}`} />}

                <meta property="twitter:card" content="summary" />


            </Head>

            <main className="max-w-4xl flex flex-1 w-full  flex-col items-start justify-start px-10 sm:px-20 pt-20 pb-10  text-left overflow-hidden">
                <div className='-left-14 md:-left-16 -top-6 absolute'>
                    <div className='z-10 absolute w-36 h-36 rounded-full animate-h-move' style={{ backgroundImage: "linear-gradient(135deg, #c4b5fd, #8b5cf6)" }}>
                    </div>
                </div>
                <a href="../" className='z-20 text-white text-md font-Prompt underline mb-4'>{"ย้อนกลับ"}</a>
                <div className='z-20 bg-gray-900  pr-4'>
                    <h1 className="text-4xl sm:text-6xl font-bold text-pink-500 ">
                        {
                            tutor === undefined ?
                                <div className='animate-pulse w-36 h-6 sm:h-10 bg-slate-700 rounded' />
                                : `${tutor.firstname} ${tutor.lastname} #${tutor.batch}`
                        }
                    </h1>
                </div>
                <div className='w-full border-t border-4 border-pink-500 mt-3'></div>


                <div className='w-full mt-6 mb-4 md:mt-20'>
                    <div className='w-72 md:w-96 h-72 md:h-96 mx-auto'>
                        {tutor === undefined ?
                            <div className='w-full h-full bg-slate-300 animate-pulse' ></div>
                            : <img src={tutor.poster} alt="" className='w-full' />
                        }
                    </div>
                </div>
                <div className='flex justify-center items-center mx-auto mb-6 gap-4 text-blue-600'>
                    {tutor === undefined ?
                        <></> :
                        tutor.subjects.map((subject: string) => {
                            return <a href={`../search/?sub=${subject}`}>
                                <button className='bg-white rounded px-2 py-1 text-xs font-Prompt'>
                                    {`#${toThai.get(subject) === undefined ? subject : toThai.get(subject)}`}
                                </button>
                            </a>
                        })}
                </div>
                <button className='bg-gradient-to-tl from-blue-500 to-blue-400 text-white text-lg px-4 py-1 mx-auto font-Prompt rounded mb-6' onClick={handleCopyClick}>{isCopied ? 'คัดลอกแล้ว' : 'แชร์เลย'}</button>
            </main >

            <section className='max-w-4xl flex w-full flex-col pb-20 items-end justify-start px-10 sm:px-20 text-center'>
                <div className='bg-gray-900 z-10 pl-4'>
                    <h1 className="text-4xl sm:text-6xl font-bold text-orange-400 mr-0">
                        CONTACTS
                    </h1>
                </div>
                <div className='w-full border-t border-4 border-orange-400 -mt-3 '></div>
                <div className='w-full flex items-center justify-center'>
                    <div className='flex flex-row gap-4 items-center flex-wrap justify-center mt-10 mx-auto'>
                        {(tutor && tutor.tel) ? <a href={`tel:${tutor.tel}`} className=''>
                            <button className='px-2 py-1 bg-white hover:bg-gray-200 rounded text-md flex items-center justify-center gap-2'> <Image src="/phoneIcon.svg" alt="Phone Logo" height={32} width={32} /> {tutor.tel}</button> </a> : <></>}
                        {(tutor && tutor.ig) ? <a href={`${tutor.ig}`} className=''>
                            <button className='px-2 py-1 bg-white hover:bg-gray-200 rounded text-md flex items-center justify-center gap-2 '> <Image src="/igIcon.svg" alt="Instagram Logo" height={32} width={32} /> Instagram </button></a> : <></>}
                        {(tutor && tutor.fb) ? <a href={`${tutor.fb}`} className=''>
                            <button className='px-2 py-1 bg-white hover:bg-gray-200 rounded text-md flex items-center justify-center gap-2'><Image src="/fbIcon.svg" alt="Facebook Logo" height={32} width={32} />Facebook</button> </a> : <></>}
                        {(tutor && tutor.line) ? <a className=''>
                            <button className='px-2 py-1 bg-white hover:bg-gray-200 rounded text-md flex items-center justify-center gap-2'> <Image src="/lineIcon.svg" alt="Line Logo" height={32} width={32} /> {tutor.line} </button></a> : <></>}
                    </div>
                </div>
            </section>
            <footer className="p-5 text-white flex flex-col gap-4 w-full items-center justify-center border-t text-center">
                <a
                    className="flex items-center justify-center gap-2"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </a>
                <a href='https://www.freepik.com/vectors/logo'>Logo vector created by rawpixel.com - www.freepik.com</a>
                <a href='https://www.freepik.com/vectors/calendar'>Phone vector created by makyzz - www.freepik.com</a>
            </footer>
        </div >
    )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Fetch data from external API
    if (params === undefined) {
        params = {
            id: "0m000"
        }
    }
    const res = await fetch(`https://geacher.vercel.app/api/getTutor/${params.id}`)
    const tutor: Tutor = await res.json()

    return { props: { tutor } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`https://geacher.vercel.app/api/getTutors`)
    const tutors: Tutor[] = await res.json()
    const paths = tutors.map((tutor) => {
        return ({ params: { id: tutor.id } })
    })
    return {
        paths,
        fallback: false
    }
}

export default TutorPage
