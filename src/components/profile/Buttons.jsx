import "../../index.css";

export function Buttons() {
    return (
        <div className='grid gap-6 lg:grid-cols-2 grid-cols-1 lg:w-[27rem] w-full pb-8 '>
            <button type="submit" className="text-black border-2 border-sky-400 p-2 rounded-lg dark:bg-[#404040] dark:text-white">Reset</button>
            <button type="submit" className="text-white bg-sky-400 p-2 rounded-lg">Save</button>
        </div>
    )
}