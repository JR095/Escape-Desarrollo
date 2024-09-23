import "../../index.css";
import { Navigation } from "../navigation/Navigation";
import { SearchDropdown } from "../dropdown/SearchDropdown";
import { useFetchMenubar } from "../hooks/useFetchMenubar.js";
import { InputProfile } from "../inputs/InputProfile.jsx";
import { Buttons } from "../profile/Buttons.jsx";
import { useUser } from '../../context/UserContext.jsx';
import { useState } from "react";
import Modal from '@mui/material/Modal';
import { ChangePassword } from '../profile/ChangePassword.jsx';
import { useProfile } from '../hooks/useProfile.js';

export function AccountSettings() {

    const { modal, openModal } = useProfile();
    const { isMobile } = useFetchMenubar();
    const { user, setUser } = useUser();
    const [formData, setFormData] = useState({
        name: user ? user.name : '',
        //ubicacion: user ? user.ubicacion : '',
        //canton: user ? user.canton : '',
        //distrito: user ? user.distrito : '',
        //categoria: user ? user.categoria : '',
        email: user ? user.email : '',
        //numeroTelefonico: user ? user.numeroTelefonico : '',
        //presentacion: user ? user.presentacion : ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value  // Actualiza el valor del input correspondiente
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost/escape-desarrollo-backend/public/api/update-user', {
                method: 'POST', // o 'PUT' si prefieres actualizar
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(formData),  // Enviar los datos editados
            });

            const data = await response.json();
            if (response.ok) {
                // Actualizar el contexto del usuario con los nuevos datos
                setUser(data.user);  // data.user es lo que el backend debería devolver después de la actualización
                console.log("Datos actualizados con éxito", data.user);
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

    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="flex-shrink-0 fixed top-0 left-0 z-10 h-full">
                <Navigation />
            </div>
            <main className="flex flex-col lg:px-12 px-5 overflow-x-hidden transition-all duration-500"
                style={{
                    marginLeft: isMobile ? '0px' : '80px',
                }}>
                <div className="flex pt-4 justify-between">
                    <h1 className="font-black text-3xl lg:text-4xl mt-2">ESCAPE</h1>
                    <SearchDropdown />
                </div>
                
                {/* Diseño responsive para móvil y escritorio */}
                <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen gap-8 lg:gap-28">
                    
                    {/* Imagen de perfil y texto, se apilarán en móvil */}
                    <div className="flex flex-col justify-center items-center gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile_Img" className="rounded-full h-[7rem] w-[7rem] mt-[2rem]" />
                        <p className="text-sky-400 font-medium">+ Cambiar imagen</p>
                    </div>

                    {/* Inputs y botones, se apilan en móvil */}
                    <div className="flex flex-col gap-6 w-full lg:w-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputProfile placeholder={user.name} type="text" id="name" label="Name" defaultValue={user.name} value={formData.name} onChange={handleChange}/>
                            <InputProfile placeholder={user.email} type="text" id="email" label="Correo electronico" defaultValue={user.email} value={formData.email} onChange={handleChange}/>
                            <div className='grid '>
                                <InputProfile placeholder="********" type="password" id="password" label="Password" defaultValue="********" readOnly />
                                <a className=' text-blue-700 items-end cursor-pointer' onClick={openModal}>Change</a>
                            </div>
                            <Modal open={modal} onClose={openModal}>
                                {body}
                            </Modal>
                            <InputProfile placeholder="numeroTelefonico" type="text" id="numeroTelefonico" label="Numero telefonico" defaultValue="Numero telefonico"/>
                            <InputProfile placeholder="presentacion" type="text" id="presentacion" label="Presentacion" defaultValue="Presentacion"/>
                        </div>
                        {/* Botones se apilan debajo de los inputs */}
                        <div className="w-full flex justify-center mt-6">
                            <Buttons />
                        </div>
                    </div>
                </div>
            </main>
        </form>
    )
}
