import "../../../index.css";
import { CategoryCard } from "../../cards/CategoryCard";
import restaurant from '../../../assets/imgs/icon-restaurant.png';
import park from '../../../assets/imgs/icon-park.png';
import shops from '../../../assets/imgs/icon-shops.png';
import cafe from '../../../assets/imgs/icon-cafe.png';
import museum from '../../../assets/imgs/icon-museum.png';
import beach from '../../../assets/imgs/icon-beach.png';
import { LandingText } from "./LandingText";


export function Categories() {
    return (
        <div className="bg-blue-950 grid lg:p-12 p-8">
            <div className="grid gap-10 w-full grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
                
                <section className="justify-center content-center max-w-[380px] text-center mx-auto">
                    <LandingText title="¿A DÓNDE QUIERES ESCAPAR?" description="Lorem ipsum dolor sit amet consectetur. Et duis at placerat aliquam. Ut massa quam pretium nunc gravida lectus. Consequat morbi a nulla"/>
                    <div className="inline-block p-[0.40rem_1.5rem] bg-sky-500 rounded-full text-center mt-4">
                        <p className="text-white text-base font-bold">Ver más</p>
                    </div>
                </section>

                <div className="grid gap-8 lg:gap-y-8 lg:gap-x-16 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
                    <CategoryCard image={restaurant} title="Restaurantes"/>
                    <CategoryCard image={park} title="Parques"/>
                    <CategoryCard image={shops} title="Tiendas"/>
                    <CategoryCard image={cafe} title="Cafeterias"/>
                    <CategoryCard image={beach} title="Playas"/>
                    <CategoryCard image={museum} title="Museos"/>
                </div> 
            </div>
        </div>
    )
}