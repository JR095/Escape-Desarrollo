import "../../index.css";

export function Buttons() {
    return (
        <div className='grid gap-6 lg:grid-cols-2 grid-cols-1 lg:w-[27rem] w-full pb-8 '>
            <button type="reset" className="text-black border-2 border-sky-500 p-2 rounded-lg dark:bg-[#404040] dark:text-white transition delay-150 duration-300 ease-in-out hover:bg-sky-500 hover:border-sky-500 dark:hover:bg-sky-500 hover:text-white">Reset</button>
            <button type="submit" className="text-white bg-sky-500 p-2 rounded-lg transition delay-150 duration-300 ease-in-out hover:bg-sky-600 hover:text-white">Save</button>
        </div>
    )
}