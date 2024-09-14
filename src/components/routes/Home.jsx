import "../../index.css"
//import { Sidebar } from "../navigation/Sidebar";
import { Navigation } from "../navigation/Navigation";
import { SearchDropdown } from "../search/SearchDropdown";
import map from "../../assets/imgs/locateMap.jpg";
import { CarouselCard } from "../carousel/CarouselCard";
import { useFetchMenubar } from  "../hooks/useFetchMenubar.js";

export function Home() {

    const { isMobile } = useFetchMenubar();
    
    return (

        <div className="flex overflow-x-hidden">

            <div className="flex-shrink-0 fixed top-0 left-0 z-10 h-full">
                <Navigation />
            </div>

            <main className="flex flex-col px-5 overflow-x-hidden transition-all duration-500"
                style={{
                    marginLeft: isMobile ? '0px' : '80px', 
                }}>
                <div className="flex pt-4 justify-between">
                    <h1 className="font-black text-3xl lg:text-4xl mt-2">ESCAPE</h1>
                    <SearchDropdown />
                </div>

                <div className="mt-6 bg-white p-3 rounded-lg shadow-md grid grid-cols-[30%_70%] gap-4 lg:w-1/3 w-full">
                    <div>
                        <img className="rounded-lg" src={map} alt="map" />
                    </div>
                    <section className="justify-center content-center">
                        <h3 className="text-lg text-sky-500 font-bold">Tu ubicación</h3>
                        <p className="text-gray-500 font-semibold">Esparza centro</p>
                    </section>
                </div>

                <div className="mt-10">
                    <h2 className="font-bold lg:text-2xl text-xl mb-8">Categorías</h2>
                </div>

                <div className="mt-10">
                    <h2 className="font-bold lg:text-2xl text-xl mb-8">Recomendaciones</h2>
                    <CarouselCard />
                </div>
            </main>
            
        </div>
    );
}

