import "../../index.css";
import a from "../../assets/imgs/Place1.jpg";
import start from "../../assets/imgs/start.svg";
import location from "../../assets/imgs/location.svg";
import money from "../../assets/imgs/money.svg";
import guide from "../../assets/imgs/guide.svg";
import heart from "../../assets/imgs/heart.svg";
import back from "../../assets/imgs/back.svg";

import propTypes from "prop-types";

export function CardInformation({ id , onClose}) {
  return (
    <div>
        <div className="relative">
        <img className="rounded-lg object-cover h-[50vh]  md:w-full" src={a} alt="" />
        <img className="absolute top-4 right-4 p-2 rounded-lg bg-white dark:bg-[#404040]" src={heart} alt="" />
        <img onClick={onClose} className="absolute top-2 left-2 p-2 rounded-full" src={back} alt="" />
        </div>
      <div className="flex justify-between mt-4">
        <h3 className="text-black font-semibold text-3xl dark:text-white">Soda Maria {id}</h3>
        <div className="flex items-center gap-1">
          <img src={start} alt="start" />
          <p className="text-[#9A9797] font-semibold text-xl dark:text-[#BCBCBC]">
            2.5
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 my-3">
        <img src={location} alt="location" />
        <p className="text-[#9A9797] font-semibold text-xl dark:text-[#BCBCBC]">
          Esparza Centro
        </p>
      </div>
      <div className="flex items-center justify-between bg-white dark:bg-[#404040] dark:border-gray-600 border border-gray-200 rounded-lg shadow  ">
      <div className="flex items-center gap-4 my-3 mx-8">
        <img src={money} alt="location" />
        <p className="text-black font-semibold text-xl md:text-2xl dark:text-[#BCBCBC] grid">
        ₡2500 
          <span className="text-[#9A9797] font-semibold text-base dark:text-[#BCBCBC]">
            /persona
          </span>
        </p>
      </div>
        <div className="flex items-center gap-4 my-3 mx-8">
          <img src={guide} alt="location" />
          <p className="text-black font-semibold text-xl md:text-2xl dark:text-[#BCBCBC]">
            7  <span className="sm:text-base md:text-2xl">min</span>
          </p>
        </div>
      </div>
      <p className="mt-4 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima quibusdam illum exercitationem iste quos provident, quo in tenetur vero facilis omnis dolorem, beatae alias labore eos laboriosam saepe pariatur.</p>
      <div className="flex align-bottom ">
      <button className="w-full bg-sky-500 text-white font-bold py-2 rounded-lg mt-4 text-lg">Ir</button>

      </div>
    </div>
  );
}

CardInformation.propTypes = {
  id: propTypes.number,
  onClose: propTypes.func
};
