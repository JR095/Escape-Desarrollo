import propTypes from "prop-types";
import "../../index.css";
import start from "../../assets/imgs/start.svg";
import location from "../../assets/imgs/location.svg";

export function CardLocation({ image, name, city ,starts}) {
    return (
       
        <div className="w-[303px]  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#404040] dark:border-gray-700 ">
            <a className="" href="">
                <img className="px-3 py-2 rounded-2xl w-full h-[15rem] " src={image} alt={name} />
            </a>
            <div className="p-3">
                <div className="grid grid-cols-[auto_auto] items-center justify-between">
                    <h5 className="text-2xl font-semibold tracking-tight dark:text-white">{name}</h5>
                    <div className="flex items-center gap-1">
                        <img src={start} alt="start" />
                        <p className="text-[#9A9797] font-semibold text-base dark:text-[#BCBCBC]">{starts}</p>
                    </div>
                </div>  
                <div className="flex items-center gap-2 my-3">
                <img src={location} alt="location" />
                <p className="text-[#9A9797] font-semibold text-lg dark:text-[#BCBCBC]">{city}</p>
                </div>
                </div>
        </div>

    )
}

CardLocation.propTypes = {
    image: propTypes.string,
    name: propTypes.string,
    city: propTypes.string,
    starts: propTypes.string
};
    
  