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
            console.log(res)
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

            <main className="max-w-4xl flex w-full flex-1 min-h-screen flex-col items-start justify-center px-10 sm:px-20  text-left overflow-hidden">
                <h1>
                    {tutor === undefined ? '' : tutor.firstname}
                </h1>
            </main >

            <section className='-mt-20 max-w-4xl flex w-full flex-col pb-20 items-start justify-start px-10 sm:px-20 text-center'>

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
