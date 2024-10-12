import React, { useState, useEffect } from 'react';
import "../../index.css";
import { useUser } from '../../context/UserContext.jsx';
import useFetchData from "../hooks/useFetchData";

export const RouteMap = () => {
  
  const url = `http://localhost/escape-desarrollo-backend/public/api/companies`;
  const { user } = useUser();
  const origin = [user.longitude, user.latitude]; 
  const [destination, setDestination] = useState([]);
  const [travelTime, setTravelTime] = useState(null);
  const [filteredPlaces, setFilteredPlaces] = useState([]); 
  const { data } = useFetchData(url);
  const [inputValue, setInputValue] = useState(''); 

  console.log(data);

  useEffect(() => {
    
    const map = tt.map({
      key: 'dd8qO1N1bSR7yu4ShWlBi4HDup4MKSwi', 
      container: 'map', 
      center: origin, 
      zoom: 15
    });

    //Create a Marker 
    map.on('load', () => {
       
        new tt.Marker().setLngLat(origin).addTo(map);

        if(destination.length > 0){
            new tt.Marker().setLngLat(destination).addTo(map);

            calculateRouteWithTraffic(origin, destination);
        }
       
        console.log(destination);
        console.log(origin);
    });

    function drawRoute(routeCoordinates) {
        map.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    geometry: {
                        type: 'LineString',
                        coordinates: routeCoordinates
                    }
                }
            },
            paint: {
                'line-color': '#4a90e2',
                'line-width': 6
            }
        });
    }

    function calculateRouteWithTraffic(origin, destination) {

        const routeUrl = `https://api.tomtom.com/routing/1/calculateRoute/${origin[1]},${origin[0]}:${destination[1]},${destination[0]}/json?key=dd8qO1N1bSR7yu4ShWlBi4HDup4MKSwi&traffic=false&travelMode=pedestrian`;
    
        fetch(routeUrl)
          .then(response => response.json())
          .then(data => {
    
            const routeCoordinates = data.routes[0].legs[0].points.map(point => [point.longitude, point.latitude]);
    
            /*const travelTimeInSeconds = data.routes[0].summary.travelTimeInSeconds;
            const travelTimeInMinutes = Math.round(travelTimeInSeconds / 60);
            const travelTimeFormatted = convertirMinutosAHoras(travelTimeInMinutes);
            setTravelTime(travelTimeFormatted);*/
    
            // Dibujar la ruta en el mapa
            drawRoute(routeCoordinates);
            
          })
          .catch(error => console.error('Error al calcular la ruta:', error));
    
    }
    
    const convertirMinutosAHoras = (minutos) => {
        const horas = Math.floor(minutos / 60);
        const mins = minutos % 60;
        return `${horas}h ${mins}min`;
      };
    

    return () => {
      map.remove();
    };
  }, [origin, destination]); 

 const handleDestinationInput = (e) => {
    const query = e.target.value.toLowerCase();
    setInputValue(e.target.value);
    const filtered = Array.isArray(data)
      ? data.filter((d) => d.name && d.name.toLowerCase().includes(query))
      : [];
  
    setFilteredPlaces(filtered); 
  };

  const handlePlaceSelect = (d) => {
    setDestination([d.longitude, d.latitude]); 
    setInputValue(d.name);
    setFilteredPlaces([]); 
  };

  return (
    <div>
      {/* Carta sobre el mapa */}
      <div className='absolute top-4 left-4 bg-white p-4 rounded shadow-lg z-10'>
        <h1>Buscar Ruta</h1>
        <div>
          <label htmlFor="destination">Destino: </label>
          <input
            type="text"
            id="destination"
            value={inputValue} 
            placeholder="Escribe el nombre del lugar"
            onChange={handleDestinationInput}
            className="border p-2 rounded w-full"
          />
          {/* Mostrar las sugerencias filtradas */}
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
        <p>Duración estimada: {travelTime}</p>
      </div>

      {/* Contenedor del mapa */}
      <div id="map" className="relative w-full h-screen"></div>
    </div>
  );
  
};


