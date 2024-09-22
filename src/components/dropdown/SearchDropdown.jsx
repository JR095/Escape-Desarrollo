import  { useState } from 'react';
import "../../index.css";
import { useSearchDropdown } from '../hooks/useSearchDropdown';
import { useNavigate } from "react-router-dom";
import { useStoreSearch } from '../hooks/useStoreSearch';
import { useFetchSearchHistory } from '../hooks/useFetchSearchHistory';

export function SearchDropdown() {
  const [search_term, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { storeSearchTerm } = useStoreSearch();
  const { recentSearches: backendRecentSearches, loading: historyLoading, handleDeleteSearch } = useFetchSearchHistory();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search_term) {
      storeSearchTerm(search_term);
      navigate(`/search-results?name=${search_term}`);
    }
  };

  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);

  const {
    query, suggestions, showRecentSearches, isInputFocused, searchRef, handleInputChange,
    handleSuggestionClick, handleFocus, handleBlur, handleBackButtonClick
  } = useSearchDropdown(backendRecentSearches, storeSearchTerm, navigate);

  const toggleMobileSearch = () => {
    setIsMobileSearchVisible(!isMobileSearchVisible);
  };

  return (
    <div ref={searchRef} className={`relative w-full max-w-xs p-2 rounded-md lg:absolute lg:right-12 ${isInputFocused ? 'lg:bg-white border-none lg:shadow-md' : ''}`}>

      {!isMobileSearchVisible && (
        <button
          type="button"
          className="lg:hidden block fixed top-8 right-5 z-20"
          onClick={toggleMobileSearch}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      )}

      <div
        className={`fixed top-0 right-0 z-10 h-full w-full bg-white lg:static lg:translate-x-0 transition-transform duration-300 ${isMobileSearchVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <form className="flex items-center px-4 py-1 rounded-md shadow-md" onSubmit={handleSearchSubmit}>

          {(isMobileSearchVisible || isInputFocused) && (
            <button
              type="button"
              onClick={isMobileSearchVisible ? toggleMobileSearch : handleBackButtonClick}
              className="mr-3 px-2 py-1 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-[1.20rem]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
          )}

          <input
            type="text"
            value={query}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              handleInputChange(event);
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full border-none outline-none focus:ring-0"
          />

          <button type="submit" className="block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </form>

        {showRecentSearches && (
          <ul className="left-0 right-0 w-full mt-2">
            {historyLoading ? (
              <p className="text-center">Cargando...</p>
            ) : backendRecentSearches.length > 0 ? (
              <>
                <h2 className="px-4 py-2 font-bold text-lg">Recientes</h2>
                {backendRecentSearches.map((search) => (
                  <li
                    key={search.id}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-md flex justify-between"
                    onClick={() => handleSuggestionClick(search.search_term)}
                  >
                    <span>{search.search_term}</span>
                    <button onClick={(e) => { e.stopPropagation(); handleDeleteSearch(search.id); }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                ))}
              </>
            ) : (
              <li className="px-4 py-2 text-gray-500 text-center">No hay búsquedas recientes</li>
            )}
          </ul>
        )}

        {suggestions.length > 0 && (
          <ul className="left-0 right-0 w-full mt-2">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

