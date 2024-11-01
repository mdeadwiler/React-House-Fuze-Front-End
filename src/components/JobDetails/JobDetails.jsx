import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getJobPost } from "../../services/jobPosts.js";
import { deleteComment } from "../../services/comments.js";
import { AuthedUserContext } from "../../services/authContext.js";
import PostBid from "../PostBid/PostBid";
import CommentForm from "../Comments/CommentForm.jsx";
import "./JobDetails.css";

const JobDetails = () => {
  const [jobPost, setJobPost] = useState(null);
  const [bids, setBids] = useState(null);
  const [comments, setComments] = useState(null);
  const [toggle, setToggle] = useState(false);

  const { jobPostId } = useParams();
  const { user } = useContext(AuthedUserContext);

  useEffect(() => {
    const fetchJobPost = async () => {
      try {
        const jobPostData = await getJobPost(jobPostId);
        setJobPost(jobPostData.jobPost);
        setBids(jobPostData.bids);
        setComments(jobPostData.comments);
      } catch (err) {
        console.error("Error finding job post:", err);
      }
    };

    fetchJobPost();
  }, [jobPostId, toggle]);

  if (!jobPost) {
    return <p>We can't find that job right now.</p>;
  }

  return (
    <div id="job_details" className="card">
      <h2 className="job_detail_head">Job Details</h2>
      <div className="job-info">
        <h3 className="job_info_head">{jobPost.title}</h3>
        <p>Description: {jobPost.content}</p>
        <p>Contractor Category: {jobPost.category}</p>
        <p>Location: {jobPost.location}</p>
        <p>Status: {jobPost.status}</p>
        <p>Date Created: {jobPost.dateCreated}</p>
        <p>Posted By: {jobPost.postedBy.username}</p>
      </div>
      <div className="submit-bid-container">
        {" "}
        <PostBid jobPostId={jobPostId} setToggle={setToggle} />
      </div>
      {bids.map((bid) => (
        <div key={bid._id} className="bid_div">
          <p>Contractor: {bid.contractor.contractorCompany}</p>
          <p>Bid Amount: ${bid.bidAmount}</p>
        </div>
      ))}
      <h3 className="comment_head">Comments</h3>
      <div className="comment_card">
        {" "}
        <CommentForm jobPostId={jobPostId} setToggle={setToggle} />
      </div>
      {comments.map((comment) => (
        <div key={comment._id} className="comment_div">
          <p>Comment: {comment.content}</p>
          <p>Posted By: {comment.userId.username}</p>
          {comment.userId === user._id ? (
            <button onClick={() => deleteComment(comment._id)}>TrashBin</button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default JobDetails;
