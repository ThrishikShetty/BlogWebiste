import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PostCard({ $id, title, featuredImage, author }) {
  return (
    // <Link to={`/post/${$id}`} className="p-6">
    //   <motion.div
    //     className="w-full justify-between  bg-gray-100 p-4 sm:w-auto md:w-[350px] lg:w-[350px] h-[450px]  bg-base-100 shadow-xl rounded-xl border  border-gray-400 capitalize text-center"
    //     animate={{ scale: 1, y: 0 }}
    //     initial={{ scale: 0, y: 1000 }}
    //     transition={{ type: "spring", duration: 2 }}
    //   >
    //     <figure>
    //       {/* Render the image only if filePreview is available */}
    //       <img
    //         className=" w-30% w-full flex justify-center mb-4"
    //         src={appwriteService?.getFilePreview(featuredImage)}
    //         alt={title}
    //       />
    //     </figure>
    //     <div className="card-body gap-0 ">
    //       <h2 className="text-lg font-bold"> Title: {title}</h2>
    //       <p className="text-base "> author : {author}</p>
    //       {/* <p className="text-xs sm:hidden   "> Created at  : {getDate($createdAt)}</p> */}

    //       <div className=" justify-end animate-pulse">Read more</div>
    //     </div>
    //   </motion.div>
    // </Link>

    <Link to={`/post/${$id}`}>
      <motion.div
        className="w-full bg-gray-100 rounded-xl p-4"
        animate={{ scale: 1, y: 0 }}
        initial={{ scale: 0, y: 1000 }}
        transition={{ type: "spring", duration: 2 }}
      >
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl text-center font-bold">{title}</h2>
        <p className="text-base text-center  text-black/60  ">
          author : {author}
        </p>
        <div className=" justify-end text-center animate-pulse">Read more</div>
      </motion.div>
    </Link>
  );
}

export default PostCard;
