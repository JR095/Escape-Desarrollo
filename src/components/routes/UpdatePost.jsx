import React, { useEffect, useState } from 'react';
import "../../index.css";

export function UpdatePost({ postId }) {
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);



    const handleFileChange = (e) => {
        const selectedFiles = e.target.files;
        updateFiles(selectedFiles);
    };

    const updateFiles = (selectedFiles) => {
        setFiles(selectedFiles);
        const imagePreviews = Array.from(selectedFiles).map(file =>
            URL.createObjectURL(file)
        );
        setPreviewImages(imagePreviews);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const droppedFiles = e.dataTransfer.files;
        updateFiles(droppedFiles);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleUpdatePost = async (e) => {
        e.preventDefault(); // Evitar el envío del formulario por defecto
        const formData = new FormData();
        formData.append('description', description);
    
        for (let i = 0; i < files.length; i++) {
            formData.append('files[]', files[i]);
        }
    
        try {
            const response = await fetch(`http://localhost/escape-desarrollo-backend/public/api/update/post/${postId}`, {
                method: 'PUT',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });
    
            if (response.ok) {
                const result = await response.json();
                alert(result.message);
                // Redirigir o hacer algo después de la actualización
            } else {
                const error = await response.json();
                console.error('Error details:', error);
                alert(`Error: ${error.message || error.error}`);
            }
        } catch (error) {
            console.error('Error al actualizar la publicación:', error);
            alert('Error al actualizar la publicación. Detalles: ' + error.message);
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="max-w-[400px] w-full mx-auto gap-8 p-6 bg-white rounded-lg shadow dark:bg-[#404040]">
                <h1 className='text-center text-xl font-bold mb-8 dark:text-white'>Actualizar Publicación</h1>

                <div
                    className="w-full mb-4"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragOver}
                >
                    <label className="flex flex-col items-center text-center justify-center w-full border-2 border-sky-500 border-dashed rounded-lg cursor-pointer bg-white dark:bg-[#404040]">
                        <input
                            type="file"
                            multiple
                            accept="image/*,video/*"
                            onChange={handleFileChange}
                            hidden
                        />

                        <div className="bg-cover bg-center bg-no-repeat w-full flex flex-wrap items-center justify-center gap-2 p-2 overflow-y-auto max-h-[112px]">
                            {previewImages.length === 0 ? (
                                <>
                                    <svg className="w-8 h-8 mx-auto text-gray-500 dark:text-white justify-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2" />
                                    </svg>
                                    <p className="text-gray-500 dark:text-white">Arrastra y suelta o haz clic aquí para subir imágenes</p>
                                </>
                            ) : (
                                previewImages.map((src, index) => (
                                    <img key={index} src={src} alt={`preview-${index}`} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                                ))
                            )}
                        </div>
                    </label>
                </div>

                <div className='w-full'>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descripción"
                        className="w-full mt-4 text-base shadow-md p-3 rounded-xl border-none focus:outline-none focus:ring-0 dark:bg-[#404040] dark:text-white dark:placeholder:text-white"
                        required
                    ></textarea>
                </div>

                <button type="submit" onClick={handleUpdatePost} className="text-white bg-sky-400 p-2 rounded-lg w-full mt-4 font-bold text-lg">Actualizar</button>
            </form>
        </div>
    );
}
