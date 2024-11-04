import React from "react";
import "../../../index.css";
export function About() {
    return (
        <div className="min-h-screen bg-white text-gray-800 py-16 px-8 lg:px-32">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-4">Acerca de Nosotros</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Somos una plataforma dedicada a conectar a los viajeros y habitantes locales con experiencias y lugares únicos, 
                    adaptados a sus gustos y preferencias. Nuestro objetivo es ayudar a nuestros usuarios a descubrir actividades
                    que realmente disfruten mientras exploran nuevos destinos.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-12 gap-8 mt-12">
                <section className="flex-1 bg-blue-50 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">Nuestra Misión</h3>
                    <p className="text-gray-600">
                        Facilitar el descubrimiento de lugares y actividades que enriquezcan la experiencia de cada persona en función de sus gustos, 
                        brindando una forma sencilla de acceder a recomendaciones personalizadas que hagan cada visita única e inolvidable.
                    </p>
                </section>
                
                <section className="flex-1 bg-blue-50 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">Nuestra Visión</h3>
                    <p className="text-gray-600">
                        Ser la plataforma líder en recomendaciones personalizadas, conectando a miles de usuarios con experiencias que se ajusten a sus intereses 
                        y preferencias en cualquier lugar del mundo.
                    </p>
                </section>
            </div>

            <div className="mt-16 text-center">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">¿Cómo Funciona?</h3>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    Nuestra plataforma utiliza un sistema de recomendaciones personalizadas, en el que los usuarios pueden seleccionar sus preferencias.
                    A partir de estas selecciones mostramos lugares y eventos locales que se ajusten 
                    a esos intereses, ofreciendo una experiencia personalizada en cada visita.
                </p>
            </div>
        </div>
    );
}
