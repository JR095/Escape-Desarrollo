
"use client";
import "../../index.css";

import { Carousel } from "flowbite-react";
import { SignIn } from "./SignIn";
import image from "../../assets/imgs/descarga (4).jpg";
import monteverde from "../../assets/imgs/monteverde.jpg";
import arenal from "../../assets/imgs/arenal.jpg";
import rio from "../../assets/imgs/rio.jpg";

export function CtaSingIn() {
  return (
    <div className="grid justify-center items-center h-full md:grid-cols-2 gap-4">
          <SignIn />
      <Carousel leftControl={<></>} rightControl={<></>} pauseOnHover className="rounded-none h-[100vh] hidden md:block">
        <img className="h-[100vh]" src={image} alt="..." />
        <img className="h-[100vh]" src={monteverde} alt="..." />
        <img className="h-[100vh]" src={arenal} alt="..." />
        <img className="h-[100vh]" src={rio} alt="..." />
      </Carousel>

    
    </div>
  );
}
