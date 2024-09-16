import "../../index.css";
import { CategoryCard } from "../cards/CategoryCard";
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import 'swiper/css/navigation'; 

export function CategoriesCarousel() {

    const categories = ['Sodas', 'Restaurantes', 'Museos', 'Conciertos', 'Parques', 'Comerciales']; 

    return (
        <div className="p-4">
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <CategoryCard title={category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
