import propTypes from "prop-types";
import "../../index.css";
import like from "../../assets/imgs/ButtonHeartBefore.svg";
import comment from "../../assets/imgs/Comment.svg";
import share from "../../assets/imgs/Share.svg";

export function PostCard({
  image,
  name,
  street,
  city,
  info,
  category,
  likes,
  comments,
}) {
  return (
    <div className=" items-center justify-between  md:w-[333px]  lg:max-w-sm sm:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-[#404040] dark:border-gray-700">
      <div className="flex items-center px-4 pt-4">
        <img
          alt="Tania Andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className=" inline-block h-8 w-8 rounded-full"
        />
        <div className="flex flex-col ml-3 text-sm">
          <span className="text-slate-800 font-semibold text-lg">{name}</span>
          <span className="text-slate-600">
            {category} - {city} {street}
          </span>
        </div>
      </div>
      <p className="px-4">{info}</p>
      <img className="mt-2" src={image} alt="" />
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-4">
          <img src={like} alt="like" />
          <img src={comment} alt="comment" />
        </div>
        <img src={share} alt="share" />
      </div>
      <p className="mt-2 px-4">{likes} Me gusta</p>
      <p className="text-[#7F7B7B] px-4 pb-4">Ver los {comments} comentarios</p>
    </div>
  );
}

PostCard.propTypes = {
  image: propTypes.string,
  name: propTypes.string,
  city: propTypes.string,
  starts: propTypes.string,
  setIsOpen: propTypes.func,
  id: propTypes.number,
  category: propTypes.string,
  likes: propTypes.string,
  comments: propTypes.string,
  street: propTypes.string,
  info: propTypes.string
};
