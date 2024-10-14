import React, { useEffect } from 'react';
import { useUser } from '../../context/UserContext.jsx';


export const MapPage = () => {
  
  const { user } = useUser();
  const center = [user.longitude, user.latitude]; 

  useEffect(() => {
    
    const map = tt.map({
      key: 'dd8qO1N1bSR7yu4ShWlBi4HDup4MKSwi', 
      container: 'map', 
      center: center, 
      zoom: 15
    });

    //Create a Marker 
    map.on('load', () => {
      new tt.Marker().setLngLat(center).addTo(map);
    });

   
    return () => {
      map.remove();
    };
  }, [center]); 

  return (
    <div>
      {/* Contenedor del mapa */}
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};
