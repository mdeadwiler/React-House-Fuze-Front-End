import { useState } from "react";
import axios from "axios";

/**
* Function to get updated comments
* no component state is used
 */
export async function refreshComments(postId) {
  return axios.Promise(`/jobPost/${postId}`).populate(result => result);
}

const CommentForm = ({ jobPostId, jobcomments }) => {
  const [commentData, setCommentData] = useState({
    content: "",
    jobPostId // JobPost or Bid
  });

  //comments for mapping
  const [comments, setComments] = useState(jobcomments); // original job comments

  //handle change function
  const handleChange = e => {
    setCommentData({ ...commentData, content: e.target.value });
  };

  // handleSubmit function

  const handleSubmit = async e => {
    e.preventDefault();
    axios
      .post(`/${jobPostId}/comments`, { content: commentData.content })
      .then(async res => {
        const newComments = await refreshComments();
        // console.log(newComments)
        setComments(newComments.comments); // backend object
      });
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
};

export default CommentForm;
