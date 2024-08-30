import "../../index.css";
import React, { useState, useEffect, useRef } from 'react';

const SearchDropdown = () => {
  // Estados para manejar el texto de búsqueda, sugerencias y visibilidad de las búsquedas recientes
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [showRecentSearches, setShowRecentSearches] = useState(false);

  // Referencia para el contenedor principal
  const searchRef = useRef(null);

  // Lista de elementos para sugerencias (simulando elementos comunes)
  const items = ['Profile', 'Settings', 'Dashboard', 'Messages', 'Notifications', 'Logout'];

  // Manejar cambios en el campo de entrada
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Filtrar sugerencias basadas en el texto ingresado
    if (value === '') {
      setSuggestions([]); // Si no hay texto, no mostrar sugerencias
      setShowRecentSearches(true); // Mostrar búsquedas recientes si no hay texto
    } else {
      const filteredSuggestions = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions); // Mostrar sugerencias filtradas
      setShowRecentSearches(false); // Ocultar búsquedas recientes cuando se filtran sugerencias
    }
  };

  // Manejar la selección de una sugerencia
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    updateRecentSearches(suggestion);
  };

  // Actualizar búsquedas recientes
  const updateRecentSearches = (searchTerm) => {
    const updatedRecentSearches = [searchTerm, ...recentSearches.filter((item) => item !== searchTerm)];
    
    // Mantener solo las últimas 5 búsquedas
    if (updatedRecentSearches.length > 5) {
      updatedRecentSearches.pop();
    }
    
    setRecentSearches(updatedRecentSearches);
    setShowRecentSearches(false);
  };

  // Mostrar búsquedas recientes al enfocar el campo de entrada
  const handleFocus = () => {
    setShowRecentSearches(true);
  };

  // Manejar clics fuera del componente para ocultar las búsquedas recientes
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowRecentSearches(false);
        setSuggestions([]); // Asegurarse de que se ocultan las sugerencias también
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // Función para manejar el clic en el botón de devolverse
  const handleBackButtonClick = () => {
    setShowRecentSearches(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-xs mx-auto mt-10">
      <div className="relative">
        {/* Campo de entrada para búsqueda */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Search..."
        />
      </div>

      {/* Botón de devolverse */}
      <button onClick={handleBackButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>

      {/* Lista desplegable de búsquedas recientes o sugerencias */}
      {showRecentSearches && recentSearches.length > 0 && (
        <ul className="absolute left-0 right-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          {recentSearches.map((search, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(search)}
            >
              {search}
            </li>
          ))}
        </ul>
      )}

      {/* Mostrar sugerencias filtradas */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;
