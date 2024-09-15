import "../../index.css";
import { AuthInput } from "../inputs/AuthInput";
import { NavLink } from "react-router-dom";
import { Selected } from "../selected/Selected";
import { AuthCarousel } from "./AuthCaruosel";
import { useTranslation } from 'react-i18next';

export function SignUpUsers() {
    const { t } = useTranslation();

    const location = [
        { id: "1", name: "Esparza" },
        { id: "2", name: "San Ramón" },
        { id: "3", name: "Cocal" },
        { id: "4", name: "20 de Noviembre" },
      ];
   
    return (
        <div className="grid justify-center items-center h-[100vh] md:grid-cols-2 gap-4">

        <div className="flex justify-center items-center">

            <form className="w-full lg:w-2/4">
                <img className="w-[15rem] mx-auto mt-8 mb-16" src="../src/assets/imgs/logo-celeste.png" alt="Logo" />

                <AuthInput name="name" placeholder={t('iName')} type="text" />
                <AuthInput name="phone" placeholder={t('iPhone')} type="tel" />
                <AuthInput name="email" placeholder={t('iEmail')} type="email" />
                <AuthInput name="password" placeholder={t('iPassword')} type="password" />
                <AuthInput name="passwordConfirm" placeholder={t('iConfirmPassword')} type="password"/>

                <Selected options={location} name="Location" id="Location" placeholder={t('iLocation')}/>

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