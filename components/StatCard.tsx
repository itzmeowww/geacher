type StatCardType = {
    name: string,
    tutors: number

}


const StatCard = ({ name, tutors }: StatCardType) => {

    const toThai = new Map()
    toThai.set('Physics', 'ฟิสิกส์')
    toThai.set('Mathematics', 'คณิตศาสตร์')
    toThai.set('English', 'ภาษาอังกฤษ')


    return (
        <a href={`/search?sub=${name}`}>
            <div className='flex flex-col items-center justify-center font-Prompt w-32 bg-white h-32 rounded-lg'>
                <div className='text-xl'>
                    {toThai.get(name) === undefined ? name : toThai.get(name)}
                </div>
                <div className='text-3xl border-t mt-1 pt-2 border-gray-200 px-2'>
                    {tutors} คน
                </div>

            </div>
        </a>
    );
}


export default StatCard
