import "../../index.css"
//import { Sidebar } from "../navigation/Sidebar";
import { Navigation } from "../navigation/Navigation";
import { SearchDropdown } from "../dropdown/SearchDropdown";
import { CarouselCard } from "../carousel/CarouselCard";
import { useFetchMenubar } from "../hooks/useFetchMenubar.js";
import { MapThumbnail } from "../map/MapThumbnail.jsx";
import { CategoriesCarousel } from "../carousel/CategoriesCarousel.jsx"
import { CardInformation } from "../cards/CardInformation";
("use client");
import { Drawer } from "flowbite-react";
import { useState } from "react";
import propTypes from "prop-types";
import { useUser } from '../../context/UserContext.jsx';


import { use } from "i18next";
import { Posts } from "./Posts.jsx";

import { CardComments } from "../cards/CardComments.jsx";

export function Home() {

  const { isMobile } = useFetchMenubar();
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {setIsOpen(false);
  }
  const [hearts, setHearts] = useState(false);

    

  const [id, setId] = useState(0);

  const { user } = useUser();
  const [isOpenComments, setOpenComments] = useState(false);
  const handleCloseComments = () => setOpenComments(false);
  const [postId, setPostId] = useState(null);

  const openCardComments = (postId) => () => {
    if (postId) { 
      setOpenComments(true);
      setPostId(postId);
    } else {
      console.error('Invalid postId:', postId);
    }
  };


  const openCard = (id,favorite) => () => {
    setIsOpen(true);
    console.log(id);
    if (favorite==0){
      setHearts(false);
    }else{
      setHearts(true);
    }
    setId(id);
 

  };

  const favorite  = () => {
    console.log("La id de la card es "+id +" y el id del user es "+user.id);
    fetch("http://localhost/escape-desarrollo-backend/public/api/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_id: id,
        user_id: user.id,
      }),
    });
    setHearts(!hearts);
  
  };

  return (

    <div className="flex dark:bg-[#2a2a2a]">

      <div className="flex-shrink-0 fixed top-0 left-0 z-10 h-full">
        <Navigation />
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right" className="w-full md:w-1/2 lg:w-1/3 dark:bg-[#2a2a2a]">
        <Drawer.Items>
          <CardInformation id={id} onClose={handleClose} favorite={favorite} hearts={hearts} setHearts={setHearts}  />
        </Drawer.Items>
      </Drawer>

      <Drawer open={isOpenComments} onClose={handleCloseComments} position="right" className="w-full md:w-1/2 lg:w-1/3 dark:bg-[#2a2a2a] overflow-hidden">
        <Drawer.Items>
          {postId ? (
            <CardComments postId={postId} onClose={handleCloseComments} />
          ) : (
            <p className="text-center dark:text-white">Cargando comentarios...</p>
          )}
        </Drawer.Items>
      </Drawer>

      <main className="flex flex-col lg:px-12 px-5 overflow-x-hidden transition-all duration-500 lg:mb-10 mb-20"
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
        <h2 className="font-bold md:text-2xl text-xl mb-8 dark:text-white">
            Publicaciones recientes
          </h2>

        <div className="mt-10">
          <Posts setOpenComments={openCardComments}/>
        </div>
      </main>
    </div>
  );
}

Home.propTypes = {
  toggleDarkMode: propTypes.func,
  darkMode: propTypes.bool
};