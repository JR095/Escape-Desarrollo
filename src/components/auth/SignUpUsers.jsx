import "../../index.css";
import { AuthInput } from "../inputs/AuthInput";
import { NavLink, useNavigate } from "react-router-dom";
import { Selected } from "../selected/Selected";
import { AuthCarousel } from "./AuthCaruosel";
import { useTranslation } from 'react-i18next';
import { useState } from "react";

export function SignUpUsers() {

    const { t } = useTranslation();
    
    const [isTooltipVisible, setTooltipVisible] = useState(false);

    const handleTooltipToggle = () => {
        setTooltipVisible(!isTooltipVisible);
    };
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();

    if (document.getElementById('share-location').checked) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude
            const longitude = position.coords.longitude

            console.log(latitude, longitude);
    
            const response = await fetch('http://localhost/escape-desarrollo-backend/public/api/register', {
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    password_confirmation,
                    latitude: latitude || null,
                    longitude: longitude || null
                })
            });
    
            navigate('/signIn');
            
        }, (error) => {
            console.error("Error al obtener la ubicación:", error);
        });
    } 
};
   
    return (
        <div className="grid justify-center items-center h-[100vh] md:grid-cols-2 gap-4">

        <div className="flex justify-center items-center">

            <form className="w-full lg:w-2/4" onSubmit={handleSubmit}>
                <img className="w-[15rem] mx-auto mt-8 mb-16" src="../src/assets/imgs/logo-celeste.png" alt="Logo" />

                <AuthInput name="name" placeholder={t('iName')} type="text" onChange={e => setName(e.target.value)}/>
                <AuthInput name="email" placeholder={t('iEmail')} type="email" onChange={e => setEmail(e.target.value)}/>
                <AuthInput name="password" placeholder={t('iPassword')} type="password" onChange={e => setPassword(e.target.value)}/>
                <AuthInput name="passwordConfirm" placeholder={t('iConfirmPassword')} type="password" onChange={e => setPassword_confirmation(e.target.value)}/>

                <div className="flex items-center relative">
                    <input className="shadow-md p-3 rounded-lg border-none" type="checkbox" id="share-location" name="shareLocation" />
                    <label htmlFor="share-location" className="ml-4 text-sky-500 font-medium">Share Location</label>
                    <div className="ml-2 relative">
                        <svg onClick={handleTooltipToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-gray-400 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>

                        {/* Tooltip */}
                        {isTooltipVisible && (
                            <div className="absolute left-0 top-10 z-10 w-48 bg-white shadow-lg p-3 rounded-lg text-sm text-gray-700">
                                <p>We need your location to recommend places nearby that you might enjoy.</p>
                                <button 
                                    className="text-sky-500 mt-2"
                                    onClick={handleTooltipToggle}
                                >
                                    Got it!
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <input
                    className="text-white p-3 bg-sky-500 flex rounded-xl items-center justify-center w-full lg:my-8 my-10 font-bold text-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-blue-800 hover:text-white"
                    type="submit"
                    name="btn-signup"
                    value={t('signup')}
                />

                <p className="text-gray-400 text-center">{t('goSignIn')}
                    <NavLink className="text-sky-500 ml-2 mb-3 font-medium" to="/signIn">{t('iSignIn')}</NavLink>
                </p>
            </form> 

            
        </div>

        <AuthCarousel />

        </div>
    );
}