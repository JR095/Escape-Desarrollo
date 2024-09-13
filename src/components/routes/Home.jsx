import "../../index.css"
import { Sidebar } from "../navigation/Sidebar";
import { SearchDropdown } from "../search/SearchDropdown";
import map from "../../assets/imgs/locateMap.jpg";
import { CarouselCard } from "../carousel/CarouselCard";
export function Home() {
    return (
        <div className="flex overflow-x-hidden">
            <div className="flex-shrink-0">
                <Sidebar />
            </div>

            <main className="flex flex-col lg:mx-12 mx-5 overflow-x-hidden">
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

