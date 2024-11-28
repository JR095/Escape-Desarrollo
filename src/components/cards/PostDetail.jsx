import "../../index.css";
import { useParams, useNavigate, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import propTypes from "prop-types";
import { useUser } from "../../context/UserContext.jsx";

export function PostDetail() {
    const location = useLocation();
    const post = location.state;
  
    if (!post) return <p>No post data available</p>;
  
    return (
      <div className="items-center py-4 justify-between lg:max-w-sm sm:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-[#404040] dark:border-gray-700">
        <div className="flex items-center px-4">
          <img 
          alt="profile-picture"
          src={post.profilePicture}
          className="inline-block h-10 w-10 rounded-full"
          />
          <div className="flex flex-col ml-3 text-sm">
            <span className="text-black font-semibold text-lg dark:text-white">
              {post.name}
            </span>
          <span className="text-[#9A9797] dark:text-[#BCBCBC]">
            {post.category} - {post.city}
          </span>  
          </div>
        </div>
        <p className="px-4 dark:text-white">{post.info}</p>

        <div className="mt-2">
          {post.media.length > 0 &&
            post.media.map((item, index) => (
              <div key={index}>
                {item.type === "image" ? (
                  <img src={item.url} alt={`Media ${index}`} />
                ) : (
                  <video controls>
                    <source src={item.url} />
                  </video>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }