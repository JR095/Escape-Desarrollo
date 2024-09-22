import React from 'react';
import { Link } from 'react-router-dom';
import "../../index.css";
import map from "../../assets/imgs/locateMap.jpg";

export const MapThumbnail = () => {
  
  return (
    <div className="mt-6 bg-white p-3 rounded-lg shadow-md grid grid-cols-[30%_70%] gap-4 lg:w-1/3 w-full">
      <Link to="/map">
        <img className="rounded-lg" src={map} alt="map" />
      </Link>
      <section className="justify-center content-center">
        <h3 className="text-lg text-sky-500 font-bold">Tu ubicación</h3>
        <p className="text-gray-500 font-semibold">Esparza centro</p>
      </section>
    </div>
  );
};

