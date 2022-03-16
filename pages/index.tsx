import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import StatCard from '../components/StatCard'

import { TutorStat } from '../models/tutorStat'

import { motion } from "framer-motion"

type Props = {
  tutorStat: TutorStat[]
}
const Home = ({ tutorStat }: Props) => {

  return (
    <div className="flex w-screen overflow-hidden min-h-screen flex-col items-center justify-center bg-gray-900">
      <Head>
        <title>Geacher | Tutors from kvis</title>
        <link rel="icon" href="/icon.jpg" />
        <meta name="description" content="Geacher คือแหล่งรวมติวเตอร์คุณภาพระดับเทพ การันตีด้วยดีกรีเด็ก KVIS" />
        <meta name="keywords" content="Geacher, สอนพิเศษ, เพิ่มเกรด, ติวเตอร์, kvis, กำเนิดวิทย์, ฟิสิกส์, เคมี, ชีวะ, คอมพิวเตอร์, BMAT, สังคม" />

        <meta property="og:url" content="https://geacher.vercel.app" />
        <meta property="og:image" content="https://raw.githubusercontent.com/itzmeowww/geacher/main/public/preview.png" />
        <meta property="og:description" content="Geacher คือแหล่งรวมติวเตอร์คุณภาพระดับเทพ การันตีด้วยดีกรีเด็ก KVIS" />

        <meta property="og:title" content="Geacher | Tutors from kvis" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <main className="max-w-4xl flex w-full flex-1 min-h-screen flex-col items-start justify-center px-10 sm:px-20  text-left overflow-hidden">
        <div className='-left-10 md:-left-6 lg:left-3 top-10 absolute'>
          <div className='z-20 absolute w-36 h-36 rounded-full animate-h-move' style={{ backgroundImage: "linear-gradient(135deg, #a5b4fc, #6366f1)" }}>
          </div>
        </div>


        <div className='bg-gray-900 pr-4 z-10'>
          <motion.h1 transition={{ delay: 0.1 }} initial={{ opacity: 0.5, scale: 0.5, x: -50 }} animate={{ opacity: 1, scale: 1, x: 0 }} className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-pink-500 ">
            GEACHER
          </motion.h1>
        </div>
        <div className='w-full border-t border-4 border-pink-500 -mt-3 '></div>

        <h1 className='z-30 relative font-Prompt text-lg sm:text-3xl text-left text-rose-300 mt-4'>
          แหล่งรวมติวเตอร์คุณภาพระดับเทพ
          <br />
          การันตีด้วยดีกรีเด็ก KVIS
        </h1>
        <a href="/search" className='mx-auto mt-12'>
          <button className='z-30 relative text-xl font-Prompt bg-white hover:bg-slate-200  active:bg-gray-400 px-12 py-1 rounded '>
            ค้นหาเลย
          </button>
        </a>
        <div className='absolute right-16 md:right-32 bottom-40'>
          <div className='z-10 absolute w-12 h-12 animate-v-move' style={{ backgroundImage: "linear-gradient(135deg, #fdba74, #f97316)" }}>
          </div>
        </div>
      </main >

      <section className='relative -mt-20 max-w-4xl flex w-full flex-col pb-20 items-start justify-start px-10 sm:px-20 text-center'>
        <div className='w-full flex flex-col items-end '>
          <div className='bg-gray-900 z-10 pl-4'>
            <h1 className="text-4xl sm:text-6xl font-bold mr-0 text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-500">
              SUBJECTS
            </h1>
          </div>
          <div className='w-full border-t border-4 border-blue-400 -mt-3 '></div>
        </div>

        <div className='text-cyan-100 font-Prompt mx-auto mt-6 mb-8 text-xl'>
          พวกเรามีติวเตอร์
        </div>
        <div className='w-full flex justify-center'>
          <div className='flex flex-row flex-wrap justify-center items-center gap-6'>

            {
              tutorStat.map((subject) => {
                return (
                  <StatCard key={`${subject.name}-stat`} name={subject.name} tutors={subject.tutors} />
                );
              }
              )
            }
          </div>
        </div>
        <div className='absolute -left-8 md:left-8 bottom-48'>
          <div className='rotate-45 z-10 absolute w-16 h-16 animate-h-move' style={{ backgroundImage: "linear-gradient(135deg, #fde047, #eab308)" }}>
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
    </div >
  )
}


export async function getServerSideProps() {
  // Fetch data from external API

  const res = await fetch(`https://geacher.vercel.app/api/getTutorStat`)
  const tutorStat = await res.json()

  return { props: { tutorStat } }
}


export default Home
