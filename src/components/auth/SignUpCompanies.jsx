import "../../index.css";
import { AuthInput } from "../inputs/AuthInput";
import { Selected } from "../selected/Selected";
import { NavLink } from "react-router-dom";
import { AuthCarousel } from "./AuthCaruosel";
import { useTranslation } from 'react-i18next';

export function SignUpCompanies() {
    const { t } = useTranslation();

    const category = [
        { id: "1", name: "Restaurant" },
        { id: "2", name: "Bar" },
        { id: "3", name: "Café" },
        { id: "4", name: "Bakery" },
      ];

    return (
        <div className="grid justify-center items-center h-[100vh] md:grid-cols-2 gap-4">

        <div className="flex justify-center items-center">

            <form className="ww-full lg:w-2/4">
                <img className="w-[15rem] mx-auto mt-8 mb-16 " src="../src/assets/imgs/logo-celeste.png" alt="Logo" />
                <AuthInput name="name" placeholder={t('iCompanyName')} type="text" />
                <AuthInput name="email" placeholder={t('iEmail')} type="email" />
                <AuthInput name="phone" placeholder={t('iPhone')} type="text" />
                <Selected options={category} placeholder={t('iCategory')} id="category" />
                <AuthInput name="password" placeholder={t('iPassword')} type="password" />

                <input
                    className="text-white p-3 bg-sky-500 flex rounded-xl items-center justify-center w-full lg:my-8 my-10 font-bold text-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-blue-800 hover:text-white"
                    type="submit"
                    name="btn-signup"
                    value={t('signup')}
                />

                <p className="text-gray-400 text-center">{t('goSignIn')}
                    <NavLink className="text-sky-500 ml-2 font-medium" to="/signIn">{t('iSignIn')}</NavLink>
                </p>
            </form> 

            
        </div>

        <AuthCarousel />

        </div>
    );
}