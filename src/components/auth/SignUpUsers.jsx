import "../../index.css";
import { AuthInput } from "../inputs/AuthInput";
import { NavLink, useNavigate } from "react-router-dom";
import { Selected } from "../selected/Selected";
import { AuthCarousel } from "./AuthCaruosel";
import { useTranslation } from 'react-i18next';
import { useState } from "react";

export function SignUpUsers() {
    const { t } = useTranslation();

    const location = [
        { id: "1", name: "Esparza" },
        { id: "2", name: "San Ramón" },
        { id: "3", name: "Cocal" },
        { id: "4", name: "20 de Noviembre" },
    ];
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost/escape-desarrollo-backend/public/api/register', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password,
                password_confirmation,
                location
            })
        });
        //const content = await response.json();
        //console.log(content);
        navigate('/signIn');
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