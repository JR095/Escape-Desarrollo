import "../../index.css";
import propTypes from "prop-types";

export function CardInformation({ id }) {
    return (
        <div className="lg:w-[303px]  lg:max-w-sm sm:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-[#404040] dark:border-gray-700 ">
            <div className="p-3">
                <div className="grid grid-cols-[auto_auto] items-center justify-between">
                    <h5 className="text-2xl font-semibold tracking-tight dark:text-white">{id}</h5>  
                </div>
            </div>
        </div>

    )   

}


CardInformation.propTypes = {
    id: propTypes.number
}