import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toThai } from '../../utils/toThai'
import { BsLine, BsFacebook, BsInstagram, BsPhone } from 'react-icons/bs'

import { Tutor } from '../../models/tutor'
import ImageHolder from '../../components/ImageHolder'
import Footer from '../../components/Footer'

const site = 'https://geacher.thnsnkmd.com'
type Props = {
    tutor: Tutor
}

const TutorPage = ({ tutor }: Props) => {

    // const [tutor, setTutor] = useState<Tutor>()
    const router = useRouter()

    // const { id } = router.query

    const path = site + router.asPath
    const [isCopied, setIsCopied] = useState(false);
    const [isCopiedLine, setIsCopiedLine] = useState(false);

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
                // console.log(err);
            });
    }

    const handleCopyClickLine = (lineId: string) => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(lineId)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopiedLine(true);
                setTimeout(() => {
                    setIsCopiedLine(false);
                }, 1500);
            })
            .catch((err) => {
                // console.log(err);
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
                    tutor !== undefined && <meta property="og:url" content={path} />
                }

                {
                    tutor !== undefined && <meta property="og:description" content={`ติวเตอร์วิชา${tutor.subjects.map((subject: string) => {
                        if (toThai.get(subject) === undefined) return subject
                        return toThai.get(subject)
                    }).join(', ')} การันตีคุณภาพระดับเทพ ด้วยดีกรีเด็ก KVIS`} />
                }

                {
                    (tutor !== undefined) && <meta name="description" content={`ติวเตอร์วิชา${tutor.subjects.map((subject: string) => {
                        if (toThai.get(subject) === undefined) return subject
                        return toThai.get(subject)
                    }).join(', ')} การันตีคุณภาพระดับเทพ ด้วยดีกรีเด็ก KVIS`} />
                }



                {tutor === undefined ? <meta property="og:title" content={`Geacher`} /> : <meta property="og:title" content={`${tutor.firstname} ${tutor.lastname} #${tutor.batch} | Geacher`} />}
                {tutor !== undefined && <meta property="og:image" content={`${tutor.poster}`} />}

                <meta property="twitter:card" content="summary" />


            </Head>

            <main className="max-w-4xl flex flex-1 w-full  flex-col items-start justify-start px-10 sm:px-20 pt-20 pb-10  text-left overflow-hidden">
                <div className='-left-14 md:-left-16 -top-6 absolute'>
                    <div className='z-10 absolute w-36 h-36 rounded-full animate-h-move' style={{ backgroundImage: "linear-gradient(135deg, #c4b5fd, #8b5cf6)" }}>
                    </div>
                </div>
                <a href="../" className='z-20 text-white text-md font-Prompt underline mb-4'>{"ย้อนกลับ"}</a>
                <div className='z-20 bg-gray-900  '>
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
                    <div className='relative w-72 md:w-96 md:h-96 mx-auto'>
                        {tutor !== undefined &&
                            <ImageHolder width={1080} height={1080} url={tutor.poster} alt={`โปสเตอร์เปิดสอนพิเศษของ ${tutor.firstname} ${tutor.lastname} กำเนิดวิทย์รุ่น ${tutor.batch}`}
                            />
                        }
                        {tutor.active == false && <div className='flex justify-end items-center w-full'>
                            <div className='bg-red-400 text-white shadow -mt-6 -mr-6 -rotate-12 text-sm font-Prompt px-2 py-1 rounded-md'>
                                ปิดรับสมัครแล้ว
                            </div>
                        </div>
                        }
                    </div>

                </div>

                <div className='flex  flex-wrap justify-center items-center mx-auto mb-6 gap-2 text-blue-600'>
                    {tutor !== undefined &&
                        tutor.subjects.map((subject: string) => {
                            return <a href={`../search?sub=${subject}`} key={`tag-${subject}`}>
                                <button className='bg-white rounded px-2 py-1 text-xs font-Prompt'>
                                    {`#${toThai.get(subject) === undefined ? subject : toThai.get(subject)}`}
                                </button>
                            </a>
                        })}
                </div>
                <button className='bg-gradient-to-tl from-blue-500 to-blue-400 text-white text-lg px-4 py-1 mx-auto font-Prompt rounded mb-6' onClick={handleCopyClick}>{isCopied ? 'คัดลอกแล้ว' : 'แชร์เลย'}</button>
            </main >

            <section className='max-w-4xl flex w-full flex-col pb-20 items-end justify-start px-10 sm:px-20 text-center'>
                <div className='relative bg-gray-900 z-10 pl-4'>
                    <h1 className="text-4xl sm:text-6xl font-bold text-orange-400 mr-0">
                        CONTACTS
                    </h1>

                </div>
                <div className='w-full border-t border-4 border-orange-400 -mt-3 '></div>
                <div className='w-full flex items-center justify-center text-md font-bold '>
                    <div className='max-w-lg flex flex-row gap-4 items-center flex-wrap justify-center mt-10 mx-auto'>
                        {(tutor && tutor.tel) &&
                            <a href={`tel:${tutor.tel}`} className=''>
                                <button className='px-2  py-1 bg-white hover:bg-gray-200 rounded text-md flex items-center justify-center gap-2'>
                                    <BsPhone /> <h1 className='tracking-wide font-sans font-medium '>{tutor.tel.split('').map((letter, idx) => {
                                        return <span>{letter}</span>
                                    })}</h1>
                                </button>
                            </a>
                        }
                        {(tutor && tutor.ig) &&
                            <a href={`${tutor.ig}`} className=''>
                                <button className='px-2  py-1 bg-white hover:bg-gray-200 rounded text-md flex items-center justify-center gap-2 '>
                                    <BsInstagram /><h1 className='tracking-wide font-sans font-medium'>Instagram</h1>
                                </button>
                            </a>
                        }
                        {(tutor && tutor.fb) &&
                            <a href={`${tutor.fb}`} className=''>
                                <button className='px-2  py-1 bg-white hover:bg-gray-200 rounded text-md flex items-center justify-center gap-2'>
                                    <BsFacebook /><h1 className='tracking-wide font-sans font-medium'>Facebook</h1>
                                </button>
                            </a>
                        }
                        {(tutor && tutor.line) ? <a className=''>
                            <button className='px-2  py-1 bg-white hover:bg-gray-200 rounded text-md flex items-center justify-center gap-2' onClick={() => handleCopyClickLine(tutor.line)}>
                                <BsLine />
                                <h1 className='tracking-wide font-sans font-medium'>{isCopiedLine ? <h1 className='font-Prompt'>คัดลอกแล้ว</h1> : tutor.line}</h1>
                            </button></a> : <></>}
                    </div>
                </div>
            </section>
            <Footer />
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
    const res = await fetch(`${site}/api/getTutor/${params.id}`)
    const tutor: Tutor = await res.json()

    return { props: { tutor } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${site}/api/getTutors`)
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
