import { useState, useEffect } from "react";
import "../../index.css";
//import a from "../../assets/imgs/Place1.jpg";
import start from "../../assets/imgs/start.svg";
import location from "../../assets/imgs/location.svg";
import money from "../../assets/imgs/money.svg";
import guide from "../../assets/imgs/guide.svg";
import heart from "../../assets/imgs/heart.svg";
import fav from "../../assets/imgs/favorite.svg";
import { useFetchTravelTime } from "../hooks/useFetchTravelTime.js";
import back from "../../assets/imgs/back.svg";
import { useTranslation } from 'react-i18next';

import propTypes from "prop-types";

export function CardInformation({  onClose, favorite, hearts, setHearts, placeData }) {

  const { t } = useTranslation();
  const [travelMode, setTravelMode] = useState('pedestrian');
  const [placeLocation, setPlaceLocation] = useState([]);
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (placeData && placeData.length > 0) {
      const data = placeData[0];
      setPlace(data);
      setPlaceLocation([data.latitude, data.longitude]);
    }
  }, [placeData]);

  const { travelTime } = useFetchTravelTime(placeLocation, travelMode);

  const close = () => {
    setHearts(false);
    onClose();
  };

  const handleTravelModeChange = (mode) => {
    console.log(mode);
    setTravelMode(mode);
  };
 
  if (!place) return <div>Loading...</div>; 

  return (
    <div>
        <div className="relative">
        <img className="rounded-lg object-cover h-[50vh]  md:w-full" src={place.image} alt="" />
        <img onClick={favorite} className="absolute top-4 right-4 p-2 rounded-lg bg-white dark:bg-[#404040]" src={hearts == false ?  heart : fav} alt="" />
        <img onClick={close} className="absolute top-2 left-2 p-2 rounded-full" src={back} alt="" />
        </div>
      <div className="flex justify-between mt-4">
        <h3 className="text-black font-semibold text-3xl dark:text-white">{place.name}</h3>
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
          {place.canton_id}
        </p>
      </div>

      <div className="flex gap-2 my-4">
        <button
          className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300"
          onClick={() => handleTravelModeChange('pedestrian')} // Modo caminar
        >
          Caminando
        </button>
        <button 
          className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300"
          onClick={() => handleTravelModeChange('bicycle')} // Modo bicicleta
        >
          Bicicleta
        </button>
        <button 
          className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300"
          onClick={() => handleTravelModeChange('car')} // Modo carro
        >
          Auto
        </button>
      </div>

      <div className="flex items-center justify-between bg-white dark:bg-[#404040] dark:border-gray-600 border border-gray-200 rounded-lg shadow  ">
      <div className="flex items-center gap-4 my-3 mx-8">
        <img src={money} alt="location" />
        <p className="text-black font-semibold text-xl md:text-2xl dark:text-[#BCBCBC] grid">
        ₡2500 
          <span className="text-[#9A9797] font-semibold text-base dark:text-[#BCBCBC]">
            {t('pPerson')}
          </span>
        </p>
      </div>
        <div className="flex items-center gap-4 my-3 mx-8">
          <img src={guide} alt="location" />
          <p className="text-black font-semibold text-xl md:text-2xl dark:text-[#BCBCBC]">
          {travelTime ? travelTime : 'Calculando...'}
          </p>
        </div>
      </div>
      <p className="mt-4 dark:text-white">{place.description}</p>
      <div className="flex align-bottom ">
      <button className="w-full bg-sky-500 text-white font-bold py-2 rounded-lg mt-4 text-lg">{t('Go')}</button>

      </div>
    </div>
  );
}

CardInformation.propTypes = {
  id: propTypes.number,
  onClose: propTypes.func,
  favorite: propTypes.func,
  placeData: propTypes.array,
  hearts: propTypes.bool,
  setHearts: propTypes.func
};
