type TutorCardType = {
    firstname: string,
    lastname: string,
    poster: string
    id: string

}


const TutorCard = ({ firstname, lastname, id, poster }: TutorCardType) => {


    return (
        <div className='w-64 flex flex-col items-center justify-center bg-white rounded-xl p-2'>

            <div className='w-60 h-60 '>
                <img src={poster} alt="" width="240" className='z-10 absolute' />
                <div className='w-60 h-60 bg-slate-300 animate-pulse absolute'></div>
            </div>
            <div className='text-lg font-Prompt mt-2 px-2 text-center truncate'>
                {`${firstname} ${lastname}`}
            </div>
            <a href={`u/${id}`}>
                <button className='font-Prompt bg-blue-500 hover:bg-blue-600 active:bg-blue-700 px-4 py-1 my-2 rounded text-white'>
                    เพิ่มเติม
                </button>
            </a>
        </div>
    );
}


export default TutorCard
