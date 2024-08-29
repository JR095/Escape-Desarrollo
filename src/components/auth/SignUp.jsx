import "../../index.css";
import { AuthInput } from "../inputs/AuthInput";
import { Selected } from "../selected/Selected";
import { NavLink } from "react-router-dom";

export function SignUp() {
    const category = [
        { id: "1", name: "Restaurant" },
        { id: "2", name: "Bar" },
        { id: "3", name: "Café" },
        { id: "4", name: "Bakery" },
      ];

    return (
        <div className="flex justify-center items-center">

            <form className="w-full lg:w-1/4 p-3">
                <div className="w-full p-3 mt-8 mb-16 lg:mb-8 bg-sky-500 rounded-xl">
                    <img className="w-1/3 mx-auto" src="../src/assets/imgs/logo-blanco.png" alt="Logo" />
                </div>

                <AuthInput name="name" placeholder="Company Name" type="text" />
                <AuthInput name="email" placeholder="Email" type="email" />
                <AuthInput name="phone" placeholder="Phone" type="text" />
                <Selected options={category} id="category" />
                <AuthInput name="password" placeholder="Password" type="password" />

                <input
                    className="text-white p-3 bg-sky-500 flex rounded-xl items-center justify-center w-full lg:my-8 my-10 font-bold text-lg"
                    type="submit"
                    name="btn-signup"
                    value="Sign Up"
                />

                <p className="text-gray-400 text-center">Already create an account?
                    <NavLink className="text-sky-500 ml-2 font-medium" to="/signIn">Sign In</NavLink>
                </p>
            </form> 

            
        </div>
    );
}