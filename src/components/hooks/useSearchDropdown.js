import { useState, useEffect, useRef } from 'react';

export const useSearchDropdown = (items) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Referencia para el contenedor principal
  const searchRef = useRef(null);

  // Manejar cambios en el campo de entrada
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Filtrar sugerencias basadas en el texto ingresado
    if (value === '') {
      setSuggestions([]);
      setShowRecentSearches(true);
    } else {
      const filteredSuggestions = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowRecentSearches(false);
    }
  };

  // Manejar la selección de una sugerencia
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    updateRecentSearches(suggestion);
    setShowRecentSearches(false);
  };

  // Actualizar búsquedas recientes
  const updateRecentSearches = (searchTerm) => {
    const updatedRecentSearches = [searchTerm, ...recentSearches.filter((item) => item !== searchTerm)];
    if (updatedRecentSearches.length > 5) {
      updatedRecentSearches.pop();
    }
    setRecentSearches(updatedRecentSearches);
    setShowRecentSearches(false);
  };

  // Mostrar búsquedas recientes al enfocar el input
  const handleFocus = () => {
    setShowRecentSearches(true);
    setIsInputFocused(true);
  };

  // Manejar el desenfoque del campo de entrada
  const handleBlur = () => {
    setTimeout(() => {
      if (!isInputFocused) {
        setShowRecentSearches(false);
        setSuggestions([]);
      }
    }, 100);
  };

  // Botón de devolverse, restablece el estado original del componente. 
  const handleBackButtonClick = () => {
    setIsInputFocused(false);
    setShowRecentSearches(false);
    setSuggestions([]);
    setQuery('');
  };

  // Manejar clics fuera del componente para restablecer el estado original del componente
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsInputFocused(false);
        setShowRecentSearches(false);
        setSuggestions([]);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return {
    query, suggestions, recentSearches, showRecentSearches, isInputFocused, searchRef,
    handleInputChange, handleSuggestionClick, handleFocus, handleBlur, handleBackButtonClick,
  };
};