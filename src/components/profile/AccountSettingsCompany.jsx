import "../../index.css";
import { Navigation } from "../navigation/Navigation.jsx";
import { SearchDropdown } from "../dropdown/SearchDropdown.jsx";
import { useFetchMenubar } from "../hooks/useFetchMenubar.js";
import { InputProfile } from "../inputs/InputProfile.jsx";
import { Buttons } from "./Buttons.jsx";
import { useUser } from '../../context/UserContext.jsx';
import { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import { ChangePassword } from './ChangePassword.jsx';
import { useProfile } from '../hooks/useProfile.js';
import { NavLink, useNavigate } from "react-router-dom";

export function AccountSettingsCompany({ toggleDarkMode }) {

    const { modal, openModal } = useProfile();
    const navigate = useNavigate();
    const { isMobile } = useFetchMenubar();
    const { user, setUser } = useUser();
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        //image: null, 
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value  
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost/escape-desarrollo-backend/public/api/update-company', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(formData),  
            });

            const data = await response.json();
            if (response.ok) {
                setUser(data.company); 
                console.log("Datos actualizados con éxito", data.company);
                navigate('/home');
            } else {
                console.error("Error al actualizar los datos:", data.message);
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    const body = (
        <div className="bg-white w-[90%] md:w-[40%] lg:w-[25%] rounded-3xl p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ChangePassword close={openModal} />
        </div>
    );

    useEffect(() => {
        if (!user) {
          navigate('/');
        }
      }, [user, navigate]);

    return (
        user ? (
        <form className="relative pb-10 dark:bg-[#2a2a2a]" onSubmit={handleSubmit}>
            <div className="flex-shrink-0 fixed top-0 left-0 z-10 h-full">
                <Navigation darkMode={toggleDarkMode} />
            </div>
            <main className="flex flex-col lg:px-12 px-5 overflow-x-hidden transition-all duration-500"
                style={{
                    marginLeft: isMobile ? '0px' : '80px',
                }}>
                <div className="flex pt-4 justify-between">
                    <h1 className="font-black text-3xl lg:text-4xl mt-2 dark:text-white">ESCAPE</h1>
                    <SearchDropdown />
                </div>
                
                <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen gap-8 lg:gap-28">
                    
                    <div className="flex flex-col justify-center items-center gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile_Img" className="rounded-full h-[7rem] w-[7rem] mt-[2rem]" />
                        <p className="text-sky-400 font-medium">+ Cambiar imagen</p>
                    </div>

                    <div className="flex flex-col gap-6 w-full lg:w-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputProfile placeholder={user.name} type="text" id="name" label="Name" defaultValue={user.name} value={formData.name} onChange={handleChange}/>
                            <InputProfile placeholder={user.email} type="text" id="email" label="Correo electronico" defaultValue={user.email} value={formData.email} onChange={handleChange}/>
                            <div className='grid '>
                                <InputProfile placeholder="********" type="password" id="password" label="Password" defaultValue="********" readOnly />
                                <a className=' text-blue-700 items-end cursor-pointer dark:text-sky-400' onClick={openModal}>Change</a>
                            </div>
                            <Modal open={modal} onClose={openModal}>
                                {body}
                            </Modal>
                        </div>
                        <div className="w-full flex justify-center mt-6 lg:mt-12 relative z-20">
                            <Buttons />
                        </div>
                    </div>
                </div>
            </main>
        </form>
        ) : (
            <p>Cargando datos...</p>
        )
    )
}
