import "../../index.css"
//import { Sidebar } from "../navigation/Sidebar";
import { Navigation } from "../navigation/Navigation";
import { SearchDropdown } from "../dropdown/SearchDropdown";
import map from "../../assets/imgs/locateMap.jpg";
import { CarouselCard } from "../carousel/CarouselCard";
import { useFetchMenubar } from "../hooks/useFetchMenubar.js";
import { MapThumbnail } from "../map/MapThumbnail.jsx";
import { useEffect } from "react";
import { CategoriesCarousel } from "../carousel/CategoriesCarousel.jsx"
import { CardInformation } from "../cards/CardInformation";
import { PostCard } from "../cards/PostCard.jsx";
import papa from "../../assets/imgs/papas.jpg";
("use client");
import { Drawer } from "flowbite-react";
import { useState } from "react";

import { use } from "i18next";


export function Home({toggleDarkMode, darkMode}) {

  const { isMobile } = useFetchMenubar();

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const [id, setId] = useState(0);

  const openCard = (id) => () => {
    setIsOpen(true);
    console.log(id);
    setId(id);
  };

  

  
  

  return (

    <div className="flex dark:bg-[#2a2a2a]">

      <div className="flex-shrink-0 fixed top-0 left-0 z-10 h-full">
        <Navigation darkMode={toggleDarkMode} />
      </div>
      

      <Drawer open={isOpen} onClose={handleClose} position="right" className="w-full md:w-1/2 lg:w-1/3 dark:bg-[#2a2a2a]">
        <Drawer.Items>
          <CardInformation id={id} onClose={handleClose} />
        </Drawer.Items>
      </Drawer>

      <main className="flex flex-col lg:px-12 px-5 overflow-x-hidden transition-all duration-500 mb-4"
        style={{
          marginLeft: isMobile ? '0px' : '80px',
        }}>
        <div className="flex pt-4 justify-between">
          <h1 className="font-black dark:text-white text-3xl lg:text-4xl mt-2">ESCAPE</h1>
          <SearchDropdown />
        </div>

        <MapThumbnail />
        
        <div className="mt-10">
          <h2 className="font-bold md:text-2xl text-xl mb-8 dark:text-white">Categorías</h2>
          <CategoriesCarousel />
        </div>

        <div className="mt-10">
          <h2 className="font-bold md:text-2xl text-xl mb-8 dark:text-white">
            Recomendaciones
          </h2>
          <CarouselCard setIsOpen={openCard} />
        </div>
        <PostCard street="Centro" city={"Puntarenas"} name={"Soda Maria"} info={"Pedidos solo por whatsapp, llamadas no atendemos"} category={"Soda"} image={papa} likes="10" comments="10" darkMode={darkMode} />
        
      </main>
    </div>
  );
}
