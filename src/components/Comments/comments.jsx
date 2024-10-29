import { useState } from "react";

function comments({ parentType, parentId }) {
  const [commentData, setCommentData] = useState({
    content: "",
    parentId: parentId,
    parentType: parentType // JobPost or Bid
  });

  //comments for mapping
  const [comments, setComments] = useState([]);

  //handle change function
  const handleChange = e => {
    setCommentData({ ...commentData, content: e.target.value });
  };

  // handleSubmit function

  const handleSubmit = e => {
    e.preventDefault();

    console.log("Form Submitted!");
  };

  return (
    <div>
      {/* form to collect data just for the content*/}
      {/* map through comments for specific post */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={commentData.content}
          onChange={handleChange}
          placeholder="Enter your comment"
        />
        <button>Add Comment</button>
      </form>
      <ul>
        {comments.map(() =>
          <li key={comment._id}>
            {comment.content}
          </li>
        )}
      </ul>
    </div>
  );
}

export default comments;
