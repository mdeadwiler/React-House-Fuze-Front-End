import { useState } from "react";
import axios from "axios";
import { addComment } from "../../services/jobPosts";

/**
* Function to get updated comments
* no component state is used
 */
// export async function refreshComments(postId) {
//    return axios.Promise(`/jobPost/${postId}`).populate(result => result);
//  }

const CommentForm = ({ jobPostId, setToggle }) => {
  const [commentData, setCommentData] = useState({
    content: ""
  });

  //handle change function
  const handleChange = e => {
    setCommentData(prevComment => ({ ...prevComment, content: e.target.value }));
  };

  // handleSubmit function

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addComment(jobPostId, commentData)
    setToggle(prev => !prev)
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
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;
