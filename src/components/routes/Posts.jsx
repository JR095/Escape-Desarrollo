import React from 'react';
import { PostCard } from '../cards/PostCard';
import { usePosts } from '../hooks/usePosts';

export function Posts({ darkMode }) {
  const {
    posts,
    error,
  } = usePosts();


  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(270px,_1fr))] gap-12'>
      {error && <p className="text-center dark:text-white">{error}</p>}
      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            city={post.company.canton.name}
            name={post.company.name}
            info={post.description}
            category={post.company.category.name}          
            media={Array.isArray(post.files) ? post.files.map(file => ({
              url: `http://localhost/escape-desarrollo-backend/public/storage/${file.file_path}`,
              type: file.file_type === 'image' ? 'image' : 'video',
            })) : []}
            likes="10"
            comments="10"
            darkMode={darkMode}
          />
        ))
      ) : (
        <p className="text-center dark:text-white">No hay posts disponibles</p>
      )}
    </div>
  );

}

