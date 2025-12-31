import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const {
    user,
    email,
    photo,
    rating,
    review: comment,
    likes,
    date,
  } = review;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // local state for like/dislike
  const [likesCount, setLikesCount] = useState(likes.length); 
  const [dislikesCount, setDislikesCount] = useState(0);

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-14 h-14 rounded-full object-cover border-2 border-yellow-500"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{user}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
        <span className="ml-auto text-sm text-gray-400">{formattedDate}</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 text-yellow-500">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="w-4 h-4" />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">{comment}</p>

      {/* Actions */}
      <div className="flex items-center justify-between mt-2">
        <p className="text-sm text-gray-600">
          👍 {likesCount} people liked this
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setLikesCount(likesCount + 1)}
            className="btn bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-3 py-1 rounded-md"
          >
            <FaThumbsUp className="w-4 h-4" />
            Like ({likesCount})
          </button>
          <button
            onClick={() => setDislikesCount(dislikesCount + 1)}
            className="btn bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 px-3 py-1 rounded-md"
          >
            <FaThumbsDown className="w-4 h-4" />
            Dislike ({dislikesCount})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
