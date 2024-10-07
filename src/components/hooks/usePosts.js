import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const usePosts = () => {
    const { id } = useParams();
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);
    const [previewFiles, setPreviewFiles] = useState([]);
    const [existingFiles, setExistingFiles] = useState([]);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost/escape-desarrollo-backend/public/api/posts');
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            console.error('Error al obtener las publicaciones:', err);
            setError('Error al obtener las publicaciones. Intente nuevamente más tarde.');
        }
    };

    const handleFileChange = (e) => {
        const selectedFiles = e.target.files;
        updateFiles(selectedFiles);
    };

    // Actualizar archivos
    const updateFiles = (selectedFiles) => {
        setFiles(selectedFiles);
        const filePreviews = Array.from(selectedFiles).map(file => ({
            url: URL.createObjectURL(file),
            type: file.type.startsWith('video/') ? 'video' : 'image',
        }));
        setPreviewFiles(filePreviews);
    };

    // Manejar eventos de arrastrar y soltar
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const droppedFiles = e.dataTransfer.files;
        updateFiles(droppedFiles);
    };

    // Manejar eventos de arrastrar y soltar
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    // Crear publicación
    const handleCreatePost = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('description', description);

        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                formData.append('files[]', files[i]);
            }
        }

        try {
            const response = await fetch('http://localhost/escape-desarrollo-backend/public/api/create/post', {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Publicación creada:', data);
            alert('Publicación creada');

            setDescription('');
            setFiles([]);
            setPreviewFiles([]);

            fetchPosts();
            navigate(`/home`);
        } catch (error) {
            console.error('Error creando la publicación:', error);
        }
    };

    // Mostrar datos de la publicación
    useEffect(() => {
        if (!id) {
            return;
        }
    
        const fetchPostData = async () => {
            try {
                const response = await fetch(`http://localhost/escape-desarrollo-backend/public/api/posts/${id}`);
                if (!response.ok) {
                    throw new Error('Error al obtener la publicación');
                }
                const data = await response.json();
    
                setDescription(data.description);
    
                if (data.files) {
                    const filePreviews = data.files.map(file => {
                        const filePath = `http://localhost/escape-desarrollo-backend/public/storage/${file.file_path}`;
    
                        const fileType = file.file_path.split('.').pop().toLowerCase();
                        const type = ['jpg', 'jpeg', 'png', 'gif'].includes(fileType) ? 'image' :
                                    ['mp4', 'mov', 'avi'].includes(fileType) ? 'video' : null;
    
                        if (!type) return null;
    
                        return {
                            url: filePath,
                            type: type,
                        };
                    }).filter(Boolean);
    
                    setPreviewFiles(filePreviews);
                    setExistingFiles(data.files);
                }
            } catch (error) {
                console.error('Error al obtener la publicación:', error);
                setError('Error al cargar la publicación. Intente nuevamente más tarde.');
            }
        };
        fetchPostData();
    }, [id]);
    

    // Actualizar publicación
    const handleUpdatePost = async () => {
        try {
            const formData = new FormData();
            formData.append('description', description);

            let filesChanged = false;

            if (files.length > 0) {
                if (existingFiles.length !== files.length) {
                    filesChanged = true;
                } else {
                    for (let i = 0; i < files.length; i++) {
                        const existingFile = existingFiles[i];
                        const newFile = files[i];

                        if (existingFile.original_name !== newFile.name || existingFile.size !== newFile.size) {
                            filesChanged = true;
                            break;
                        }
                    }
                }
            }

            if (filesChanged) {
                for (const file of files) {
                    formData.append('files[]', file);
                }
            }

            const response = await fetch(`http://localhost/escape-desarrollo-backend/public/api/update/post/${id}`, {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });

            const responseText = await response.text();

            let data;
            try {
                data = JSON.parse(responseText);
            } catch (parseError) {
                throw new Error(`No se pudo parsear la respuesta JSON: ${responseText}`);
            }

            if (!response.ok) {
                if (response.status === 403) {
                    alert('No tiene permisos para actualizar esta publicación.');
                    return;
                } else {
                    console.error('Error en la respuesta:', data);
                    throw new Error('Error al actualizar la publicación');
                }
            }

            console.log('Publicación actualizada con éxito:', data);
            alert('Publicación actualizada');
            fetchPosts();
            navigate(`/home`);
        } catch (error) {
            console.error('Error al actualizar la publicación:', error);
            setError('Error al actualizar la publicación. Intente nuevamente más tarde.');
        }
    };

    const handleDeletePost = async (id) => {
        if (!id) {
            setError('ID de la publicación no proporcionado. No se puede eliminar la publicación.');
            return;
        }

        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar esta publicación?');
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost/escape-desarrollo-backend/public/api/delete/post/${id}`, {
                method: 'DELETE',
                credentials: 'include',
            });

            
            if (!response.ok) {
                if (response.status === 403) {
                    alert('No tiene permisos para eliminar esta publicación.');
                    return;
                } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            }

            const data = await response.json();
            console.log('Publicación eliminada:', data);

            setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
            
        } catch (error) {
            console.error('Error al eliminar la publicación:', error);
            setError('Error al eliminar la publicación. Intente nuevamente más tarde.');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    return {
        posts,
        setPosts,
        description,
        setDescription,
        previewFiles,
        handleFileChange,
        handleDrop,
        handleDragOver,
        handleCreatePost,
        handleUpdatePost,
        handleDeletePost,
        error,
        setError,
        files,
        setFiles,
        existingFiles,
        setExistingFiles,
    };
};