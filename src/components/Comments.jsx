import { useState } from "react";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };
  return (
    <div className="container w-11/12 mx-auto mt-10 font-poppins">
      <hr />
      <h2 className="mt-10 mb-6 text-3xl">Comments</h2>
      <div className="join mb-6">
        <input
          className="input input-bordered join-item"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add your comment"
        />
        <button className="btn join-item" onClick={handleAddComment}>
          Comment
        </button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li className="mb-2 border-b pb-1" key={index}>
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
