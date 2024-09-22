import "../../index.css";
import { AuthInput } from "../inputs/AuthInput";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthCarousel } from "./AuthCaruosel";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function SignIn() {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost/escape-desarrollo-backend/public/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });
        //const content = await response.json();
        //console.log(content);

        if (response.ok) {
            navigate('/home');
        }
    };

    return (
        <div className="grid justify-center items-center h-[100vh] md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
            <form className="w-full lg:w-2/4 " onSubmit={handleSubmit}>
                <img className="w-[15rem] mx-auto mt-8 mb-16 " src="../src/assets/imgs/logo-celeste.png" alt="Logo" />

                <AuthInput name="email" placeholder={t('iEmail')} type="email" onChange={e => setEmail(e.target.value)}/>
                <AuthInput name="password" placeholder={t('iPassword')} type="password" className="mb-4 lg:mb-4" onChange={e => setPassword(e.target.value)}/>
                <div className="text-right">
                    <NavLink className="text-sky-500 font-medium" to="/forgot">{t('forgotPassword')}</NavLink>
                </div>

                <input
                    className="text-white p-3 bg-sky-500 flex rounded-xl items-center justify-center w-full lg:my-8 my-10 font-bold text-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-blue-800 hover:text-white"
                    type="submit"
                    name="btn-signip"
                    value={t('iSignIn')}
                />

                <p className="text-gray-400 text-center">{t('goSignUp')}
                    <NavLink className="text-sky-500 ml-2 font-medium" to="/signUpUser">{t('createAccount')}</NavLink>
                </p>
            </form> 

            
        </div>

        <AuthCarousel />

        </div>
    );
}