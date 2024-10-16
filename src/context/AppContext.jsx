import  { createContext, useContext, useState, useEffect } from 'react';

// Crear contextos
const DarkModeContext = createContext();
const SidebarContext = createContext();

// Crear el proveedor para ambos contextos
export const AppProvider = ({ children }) => {
  // Estado para el dark mode (true o false)
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : null;
  });

  const [selecItem, setSelecItem] = useState(() => {
    const savedItem = localStorage.getItem('navItem');
    return savedItem ? JSON.parse(savedItem) : 0; // Por defecto 0 si no hay valor en localStorage
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  
  // Estado para la otra variable que se puede cambiar

  // Función para alternar dark mode
  const toggleDarkMode = (id) => () =>{
    if (id != null) {
      setDarkMode(!darkMode);
      localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    }
  };

  const selectItem = (id) => {
    setSelecItem(id); // Actualiza el estado con el nuevo ítem seleccionado
    localStorage.setItem('navItem', JSON.stringify(id)); // Guarda el valor en localStorage
  };



  // Proveer ambos contextos
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <SidebarContext.Provider value={{ selecItem, selectItem }}>
        {children}
      </SidebarContext.Provider>
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
export const useSidebarContext = () => useContext(SidebarContext);
