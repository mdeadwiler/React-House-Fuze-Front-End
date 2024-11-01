// src/components/JobDetails.jsx
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getJobPost } from '../../services/jobPosts.js';
import { deleteComment } from '../../services/comments.js';
import { AuthedUserContext } from '../../services/authContext.js';
import PostBid from '../PostBid/PostBid';
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
    return <p className="job-error-message">We can't find that job right now.</p>;
  }

  return (
    <div className="job-details-container">
      <h2 className="job-title">Job Details</h2>
      <div className="job-info">
        <span className="job-info-label">Title:</span>
        <span className="job-info-value">{jobPost.title}</span>
        <span className="job-info-label">Description:</span>
        <span className="job-info-value">{jobPost.content}</span>
        <span className="job-info-label">Category:</span>
        <span className="job-info-value">{jobPost.category}</span>
        <span className="job-info-label">Location:</span>
        <span className="job-info-value">{jobPost.location}</span>
        <span className="job-info-label">Status:</span>
        <span className="job-info-value">{jobPost.status}</span>
        <span className="job-info-label">Date Created:</span>
        <span className="job-info-value">{new Date(jobPost.dateCreated).toLocaleDateString()}</span>
        <span className="job-info-label">Posted By:</span>
        <span className="job-info-value">{jobPost.postedBy.username}</span>
      </div>

      {/* Submitted Bids Section */}
      <h3 className="bid-title">Submitted Bids</h3>
      {bids.length > 0 ? (
        bids.map((bid) => (
          <div key={bid._id} className="bid-info">
            <span className="bid-info-label">Contractor:</span> <span className="bid-info-value">{bid.contractor.contractorCompany}</span><br/>
            <span className="bid-info-label">Bid Amount:</span> <span className="bid-info-value">${bid.bidAmount}</span>
          </div>
        ))
      ) : (
        <p>No bids available yet.</p>
      )}

      {/* Bid Form Section */}
      <div className="bid-form-container">
        <PostBid jobPostId={jobPostId} setToggle={setToggle} />
      </div>

      {/* Comments Section */}
      <h3 className="comment-title">Comments</h3>
      <div className="comment-section">
        <CommentForm jobPostId={jobPostId} setToggle={setToggle} />
        {comments.map((comment) => (
          <div key={comment._id} className="comment">
            <p className="comment-content">{comment.content}</p>
            <p className="comment-author">Posted By: {comment.userId.username}</p>
            {comment.userId === user._id && (
              <button onClick={() => deleteComment(comment._id)} className="delete-comment-button">Delete</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
