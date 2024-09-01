import "../../../index.css";
import logo from '../../../assets/imgs/logo-celeste.png';
import play from '../../../assets/imgs/Play.svg';
import ola from '../../../assets/imgs/ola.png';


import { NavLink } from "react-router-dom";

export function HeaderLanding() {
    return (
        <header className="bg-[url('./assets/imgs/escape.jpg')] bg-cover bg-center text-white">
            <div className=" bg-[url('./assets/imgs/a.svg')] bg-cover p-8">
            <div className="flex justify-between bg-[#132443] bg-opacity-10 items-center rounded-full px-8 py-3 ">
                <img className="md:w-[7rem] w-[6rem]" src={logo} alt="Logo" />
                <div className="flex md:gap-8 gap-4">
                <NavLink className="text-white md:text-xl" to="/signIn">Log in</NavLink>
                <NavLink className="text-white md:text-xl" to="/signUpUser">Sign up</NavLink>
                </div>
            </div>
                <h1 className="text-5xl md:text-8xl font-bold lg:w-[20ch] mt-20 mb-16 md:mb-28">MÁS QUE UN DESTINO,
                ES UN ESCAPE</h1>
                <NavLink className="text-white text-3xl font-bold bg-[#132443] bg-opacity-10 px-6 py-4 rounded-full " to="/signUpUser">Empieza <img className="inline-block" src={play} alt="arrow" /></NavLink>
                <h2 className="text-white md:text-8xl text-5xl font-bold md:m-20 mt-8  grid justify-end ">100+ <span className="md:text-3xl text-xl md:ml-4 ml-2 mb-8">Actividades</span></h2>
                </div>
        </header>
    )
}