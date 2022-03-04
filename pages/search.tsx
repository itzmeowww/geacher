import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


import Checkbox from '../components/Checkbox'

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

const Search = ({ tutors, tutorStat }) => {

    const subjectList = []

    tutorStat.forEach((data) => {
        subjectList.push(data.name)
    })

    const [subjectCheck, setSubjectCheck] = useState(new Map())

    const [matchedTutor, setMatchedTutor] = useState()

    const [reload, setReload] = useState(false)

    useEffect(() => {
        const { sub } = router.query

        let newSubjectCheck = subjectCheck
        newSubjectCheck.set(sub, true)
        setSubjectCheck(newSubjectCheck)
    }, [])

    useEffect(() => {

        const newMatchedTutor = tutors.map((tutor: Tutor) => {
            let match = false
            if (tutor.subjects) tutor.subjects.forEach((subject) => {
                if (subjectCheck.get(subject)) {
                    match = true
                }
            })
            if (match)
                return (

                    <div className='flex flex-col items-center justify-center bg-white rounded-xl p-2'>

                        <div className='w-60 h-60 bg-slate-400'>
                            <img src={tutor.poster} alt="" width="240" />
                        </div>
                        <div className='text-lg font-Prompt  '>
                            {`${tutor.firstname} ${tutor.lastname}`}
                        </div>
                        <a href={`u/${tutor.id}`}>
                            <button className='font-Prompt bg-blue-600 px-4 py-1 rounded text-white'>
                                เพิ่มเติม
                            </button>
                        </a>
                    </div>
                )
        })
        setMatchedTutor(newMatchedTutor)
        return () => {

        }
    }, [subjectCheck, reload])

    const router = useRouter()





    return (
        <div className=" transition-all flex min-h-screen flex-col items-center justify-begin py-2 bg-gray-900">
            <Head>
                <title>Find you tutor | Geacher</title>
                <link rel="icon" href="/icon.jpg" />
            </Head>

            <main className=" text-white font-Prompt max-w-4xl  flex w-full flex-col items-center justify-start  px-20 text-left">
                <h1 className='text-xl my-8'>
                    ค้นหาติวเตอร์ของคุณ
                </h1>
                <div className='grid grid-cols-3 gap-4'>
                    <div>
                        <h1 className='text-lg col-span-1'>
                            วิชา
                        </h1>
                    </div>
                    <div className='col-span-2 flex flex-col'>
                        {
                            subjectList.map((subject, idx) => {
                                return <Checkbox label={subject} onCheckboxChange={() => {
                                    let newSubjectCheck = subjectCheck
                                    newSubjectCheck.set(subject, !newSubjectCheck.get(subject))
                                    setSubjectCheck(newSubjectCheck)
                                    setReload(!reload)
                                }} isSelected={subjectCheck.get(subject) == 0 ? false : subjectCheck.get(subject)} />
                            })
                        }

                    </div>

                </div>

            </main>

            <section className='flex justify-center mt-12 mb-6'>
                <div className='w-full flex justify-center'>
                    <div className='flex flex-row flex-wrap justify-center items-center gap-6'>
                        {
                            matchedTutor
                        }
                    </div>
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
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API

    const res = await fetch(`https://geacher.vercel.app/api/getTutors`)
    const tutors = await res.json()

    const res2 = await fetch(`https://geacher.vercel.app/api/getTutorStat`)
    const tutorStat = await res2.json()



    return { props: { tutors, tutorStat } }
}


export default Search
