import React from 'react';
import "../../index.css";
import { usePosts } from '../hooks/usePosts';

export function CreatePost() {
    const {
        description,
        setDescription,
        previewFiles,
        handleFileChange,
        handleDrop,
        handleDragOver,
        handleCreatePost,
    } = usePosts();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleCreatePost} className="max-w-[400px] w-full mx-auto gap-8 p-6 bg-white rounded-lg shadow dark:bg-[#404040]">
                <h1 className='text-center text-xl font-bold mb-8 dark:text-white'>Crear Publicación</h1>

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
                            {previewFiles.length === 0 ? (
                                <>
                                    <svg className="w-8 h-8 mx-auto text-gray-500 dark:text-white justify-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2" />
                                    </svg>
                                    <p className="text-gray-500 dark:text-white">Arrastra y suelta o haz clic aquí para subir imágenes</p>
                                </>
                            ) : (
                                previewFiles.map((file, index) => (
                                    file.type === 'image' ? (
                                        <img key={index} src={file.url} alt={`preview-${index}`} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                                    ) : (
                                        <video key={index} className="w-24 h-24 object-cover rounded-lg shadow-md" controls>
                                            <source src={file.url} type={file.type} />
                                            Your browser does not support the video tag.
                                        </video>
                                    )
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

                <button type="submit" className="text-white bg-sky-400 p-2 rounded-lg w-full mt-4 font-bold text-lg">Publicar</button>
            </form>
        </div>
    );
}
