import "../../index.css";
import { CardLocation } from "../cards/CardLocation";
//import logo from "../../assets/imgs/Place1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import propTypes from "prop-types";
import { Pagination ,Navigation,} from 'swiper/modules';
import useFetchData from "../hooks/useFetchData";

export function CarouselCard({setIsOpen}) {

  const url = `http://localhost/escape-desarrollo-backend/public/api/companies`;
  const { data: companies, loading, error } = useFetchData(url);

  if (loading) {
    return <p>Loading...</p>; // Mostrar un mensaje mientras se cargan los datos
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>; // Mostrar error si hay uno
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,  
        }}
        breakpoints={{
          554: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          915: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        
          1115: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
         {companies.map(company => (
          <SwiperSlide key={company.id} className="pb-[3rem]">
            <CardLocation
              image={(`/src/assets/imgs/${company.image}`)} 
              name={company.name}
              city={company.canton_id}
              starts="4.2"
              setIsOpen={setIsOpen}
              id={company.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

CarouselCard.propTypes = {
  
  setIsOpen: propTypes.func

};


