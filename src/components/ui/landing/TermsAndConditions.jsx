import React from "react";

export function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-white text-gray-800 py-16 px-8 lg:px-32">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">Términos y Condiciones</h2>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Al utilizar nuestra plataforma, aceptas los siguientes términos y condiciones. Por favor, léelos atentamente.
                </p>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">1. Uso de la Plataforma</h3>
                    <p className="text-gray-600">
                        Nuestra plataforma permite a los usuarios descubrir y disfrutar de recomendaciones personalizadas de lugares y actividades. Te comprometes a utilizar este servicio de forma responsable y a respetar los derechos de los demás usuarios y de los establecimientos promocionados en nuestra plataforma.
                    </p>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">2. Cuenta de Usuario</h3>
                    <p className="text-gray-600">
                        Para acceder a ciertas funciones, es posible que debas crear una cuenta con nosotros. Eres responsable de mantener la confidencialidad de tu cuenta y de toda la actividad que ocurra bajo tu cuenta. Nos reservamos el derecho de suspender o eliminar cuentas que infrinjan estos términos.
                    </p>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">3. Privacidad y Protección de Datos</h3>
                    <p className="text-gray-600">
                        Nos comprometemos a proteger tu privacidad y tus datos personales. Consulta nuestra <a href="/privacy-policy" className="text-blue-600 underline">Política de Privacidad</a> para conocer cómo recopilamos, usamos y protegemos tu información.
                    </p>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">4. Propiedad Intelectual</h3>
                    <p className="text-gray-600">
                        Todo el contenido de la plataforma, incluyendo textos, imágenes, logotipos y software, es propiedad nuestra o de nuestros socios y está protegido por leyes de propiedad intelectual. No está permitido reproducir, distribuir ni modificar ningún contenido sin nuestro permiso expreso.
                    </p>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">5. Limitación de Responsabilidad</h3>
                    <p className="text-gray-600">
                        No somos responsables de ningún daño o pérdida derivados del uso de nuestra plataforma, ni garantizamos que todos los servicios o recomendaciones cumplan con tus expectativas. Nuestra plataforma se proporciona "tal cual" sin garantías de ningún tipo.
                    </p>
                </section>

                <section className="mb-10">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-4">6. Cambios en los Términos y Condiciones</h3>
                    <p className="text-gray-600">
                        Nos reservamos el derecho de actualizar o modificar estos términos en cualquier momento. Te notificaremos sobre cambios importantes y te recomendamos revisar esta página regularmente para mantenerte informado.
                    </p>
                </section>

                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        Última actualización: <span className="font-semibold">4 de Noviembre, 2024</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
