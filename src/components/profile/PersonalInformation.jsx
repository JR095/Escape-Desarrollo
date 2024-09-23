import "../../index.css"
//import { Sidebar } from "../navigation/Sidebar";
import { Navigation } from "../navigation/Navigation";
import { SearchDropdown } from "../dropdown/SearchDropdown";
import { CarouselCard } from "../carousel/CarouselCard";
import { useFetchMenubar } from "../hooks/useFetchMenubar.js";
import { useEffect } from "react";
import { useUser } from '../../context/UserContext.jsx';
import { NavLink, useNavigate } from "react-router-dom";
import { CardInformation } from "../cards/CardInformation";
("use client");

import { Drawer } from "flowbite-react";
import { useState } from "react";
export function PersonalInformation() {

    const { isMobile } = useFetchMenubar();

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const [darkMode, setDarkMode] = useState(true);
    const { user } = useUser();

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [darkMode]);
      
        const toggleDarkMode = () => {
          console.log(darkMode);
          setDarkMode(!darkMode);
        };

    const [id, setId] = useState(0);
    const openCard = (id) => () => {
        setIsOpen(true);
        console.log(id);
        setId(id);
    };

    return (

        <div className="flex overflow-x-hidden dark:bg-[#2a2a2a]">

            <div className="flex-shrink-0 fixed top-0 left-0 z-10 h-full">
                <Navigation darkMode={toggleDarkMode}/>
            </div>

            <Drawer open={isOpen} onClose={handleClose} position="right">
                <Drawer.Items>
                    <CardInformation id={id} />
                </Drawer.Items>
            </Drawer>

            <main className="flex flex-col lg:px-12 px-5 overflow-x-hidden transition-all duration-500"
                style={{
                    marginLeft: isMobile ? '0px' : '80px',
                }}>
                <div className="flex pt-4 justify-between">
                    <h1 className="font-black text-3xl lg:text-4xl mt-2 dark:text-white">ESCAPE</h1>
                    <SearchDropdown />
                </div>

                <div className="grid grid-cols-1 items-center lg:grid-cols-2 dark:bg-[#2a2a2a]">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile_Img" className="rounded-full h-[7rem] w-[7rem] mt-[2rem]" />
                        <h3 className="font-bold lg:text-2xl text-xl mt-[2rem] dark:text-white">{user.name}</h3>
                        <h4 className=" text-[#606060] font-semibold  pt-[1rem] lg:hidden">Soda</h4>
                        <div className="col-span-3 text-left lg:pt-[2rem] pt-[1rem] dark:text-white">
                            <p>{user.description}</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 text-center lg:align-center">
                        <div className="hidden lg:block">
                            <h4 className=" text-[#606060] font-semibold lg:py-[0.5rem] pt-[2rem] dark:text-white">Soda</h4>
                            <p className="pt-[2rem] dark:text-white">1</p>
                            <h4 className="dark:text-white">Publicaciones</h4>
                        </div>

                        <div className="hidden lg:block">
                        <button className="bg-[#E0E1E3] font-semibold rounded-xl px-[4rem] py-[0.5rem] mt-[1rem] lg:mt-[0rem] dark:text-white"><NavLink to="/accountSettings">Editar</NavLink></button>
                            <p className="pt-[2rem] dark:text-white">1</p>
                            <h4 className="dark:text-white">Seguidores</h4>
                        </div>

                        <div className="hidden lg:block">
                            <button className="bg-[#E0E1E3] font-semibold rounded-xl px-[4rem] py-[0.5rem] mt-[1rem] lg:mt-[0rem] dark:text-white dark:bg-[#404040]">Compartir</button>
                            <p className="pt-[2rem] dark:text-white">1</p>
                            <h4 className="dark:text-white">Siguiendo</h4>
                        </div>

                        <div className="grid grid-cols-2 gap-3 lg:hidden">
                            <button className="bg-[#E0E1E3] font-semibold rounded-xl px-[2rem] py-[0.5rem] mt-4">Editar</button>
                            <button className="bg-[#E0E1E3] font-semibold rounded-xl px-[2rem] py-[0.5rem] mt-4">Compartir</button>
                        </div>

                        <div className="grid grid-cols-3 gap-3 lg:hidden">
                            <div>
                                <p className="pt-[2rem] dark:text-white">1</p>
                                <h4 className="dark:text-white">Publicaciones</h4>
                            </div>

                            <div>
                                <p className="pt-[2rem] dark:text-white">1</p>
                                <h4 className="dark:text-white">Seguidores</h4>
                            </div>

                            <div>
                                <p className="pt-[2rem] dark:text-white">1</p>
                                <h4 className="dark:text-white">Siguiendo</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pb-[5rem]">
                    <h2 className="font-bold lg:text-2xl text-xl mb-8 dark:text-white">
                        Post
                    </h2>
                    <CarouselCard setIsOpen={openCard} />
                </div>
            </main>
        </div>
    );
}
