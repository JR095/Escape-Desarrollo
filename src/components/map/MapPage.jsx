import React, { useEffect } from 'react';

export const MapPage = () => {
  
  const center = [-84.66461756681288, 9.995518040685974]; 

  useEffect(() => {
    
    const map = tt.map({
      key: '', 
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
