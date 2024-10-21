// components/MapCard.jsx
import React from 'react';
import { useFetchMenubar } from "../hooks/useFetchMenubar.js";
import { useTranslation } from "react-i18next";

export const MapCard = ({ inputValue, handleDestinationInput, filteredPlaces, handlePlaceSelect, travelTime, EstimatedHour, handleTravelModeChange  }) => {
  
  const { isMobile } = useFetchMenubar();
  const { t } = useTranslation();

  return (

    <div className='absolute top-4 bg-white p-4 rounded shadow-lg z-10'
      style={{
          marginLeft: isMobile ? '0px' : '100px',
      }}>

      <h1>{t('searchDestination')}</h1>
    
      <div className="flex gap-2 justify-center m-4">
        <button 
          className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300"
          onClick={() => handleTravelModeChange('pedestrian')} // Modo caminar
        >
          {t('Walking')}
        </button>
        <button 
          className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300"
          onClick={() => handleTravelModeChange('bicycle')} // Modo bicicleta
        >
          {t('bicycle')}
        </button>
        <button 
          className="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300"
          onClick={() => handleTravelModeChange('car')} // Modo carro
        >
          Auto
        </button>
      </div>

      <div>
        <label htmlFor="destination">{t('Destination')} </label>
        <input
          type="text"
          id="destination"
          value={inputValue}
          placeholder={t('typePlaceName')}
          onChange={handleDestinationInput}
          className="border p-2 rounded w-full"
        />
        {filteredPlaces.length > 0 && (
          <ul className="mt-2 border p-2 rounded bg-gray-100 max-h-48 overflow-auto">
            {filteredPlaces.map((d) => (
              <li
                key={d.id}
                onClick={() => handlePlaceSelect(d)}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {d.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <p>{t('Duration')} {travelTime}</p>
      <p>{t('arrivalTime')} {EstimatedHour}</p>
    </div>
  );
};