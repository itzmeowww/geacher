import { toThai } from '../utils/toThai'
import { TutorStat } from '../models/tutorStat'


const StatCard = ({ name, tutors }: TutorStat) => {




    return (
        <a href={`/search?sub=${name}`} className='z-20'>
            <div className='flex flex-col items-center justify-center font-Prompt w-32 bg-gradient-to-br from-white to-gray-200 hover:from-gray-200 hover:to-gray-200  h-32 rounded-lg'>
                <div className='text-xl'>
                    {toThai.get(name) === undefined ? name : toThai.get(name)}
                </div>
                <div className='text-3xl border-t mt-1 pt-2 border-gray-300 px-2'>
                    {tutors} คน
                </div>

            </div>
        </a>
    );
}


export default StatCard
