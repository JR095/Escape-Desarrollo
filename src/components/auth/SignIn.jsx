import "../../index.css";
import { AuthInput } from "../inputs/AuthInput";
import { NavLink } from "react-router-dom";

export function SignIn() {
    return (
        <div className="flex justify-center items-center">
            <form className="w-full lg:w-1/4 p-3">
                <img className="w-1/2 mx-auto mt-8 mb-16 lg:mb-8" src="../src/assets/imgs/logo-celeste.png" alt="Logo" />


                <AuthInput name="email" placeholder="Email" type="email" />
                <AuthInput name="password" placeholder="Password" type="password" className="mb-4 lg:mb-4"/>
                <div className="text-right">
                    <NavLink className="text-sky-500 font-medium" to="/forgot">Forgot password?</NavLink>
                </div>

                <input
                    className="text-white p-3 bg-sky-500 flex rounded-xl items-center justify-center w-full lg:my-8 my-10 font-bold text-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-blue-800 hover:text-white"
                    type="submit"
                    name="btn-signip"
                    value="Sign In"
                />

                <p className="text-gray-400 text-center">You don{"'"}t have an account?
                    <NavLink className="text-sky-500 ml-2 font-medium" to="/signUpUser">Create an account</NavLink>
                </p>
            </form> 

            
        </div>
    );
}