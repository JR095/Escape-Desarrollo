// components/MapCard.jsx
import React from 'react';
import { useFetchMenubar } from "../hooks/useFetchMenubar.js";

export const MapCard = ({ inputValue, handleDestinationInput, filteredPlaces, handlePlaceSelect, travelTime, EstimatedHour, handleTravelModeChange  }) => {
  
  const { isMobile } = useFetchMenubar();

  return (

    <div className='absolute right-0 bg-white p-4 rounded shadow-lg z-10 dark:bg-[#2a2a2a] md:w-[25vw] w-full h-[100vh]'>

      <h1 className='dark:text-white'>Buscar Ruta</h1>
    
      <div className="flex gap-2 justify-center m-4">
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

      <div>
        <label htmlFor="destination" className='dark:text-white'>Destino: </label>
        <input
          type="text"
          id="destination"
          value={inputValue}
          placeholder="Escribe el nombre del lugar"
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

      <p className='dark:text-white'>Duración estimada: {travelTime}</p>
      <p className='dark:text-white'>Hora de llegada estimada: {EstimatedHour}</p>
    </div>
  );
};