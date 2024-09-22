import React, { useEffect } from 'react';

export const MapPage = () => {
  
  const center = [-84.65196258847374, 9.994401308690808]; 

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
