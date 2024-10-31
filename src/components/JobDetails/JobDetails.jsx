import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getJobPost } from '../../services/jobPosts.js';
import { deleteComment } from '../../services/comments.js';
import PostBid from '../PostBid/PostBid';

const JobDetails = () => {
  const [jobPost, setJobPost] = useState(null);
  const [bids, setBids] = useState(null);
  const [comments, setComments] = useState(null);
  const [toggle, setToggle] = useState(false)

  const { jobPostId } = useParams();
  const { user } = useContext(AuthedUserContext);

  
  useEffect(() => {
    const fetchJobPost = async () => {
      try {
        const jobPostData = await getJobPost(jobPostId)
        setJobPost(jobPostData.jobPost);
        setBids(jobPostData.bids);
        setComments(jobPostData.comments);
        } catch (err) {
        console.error("Error finding job post:", err);
      }
    };

    fetchJobPost();
  }, [jobPostId, toggle]);

  //probably a better way to do this, lets check it out
  if (!jobPost) {
    return<p>We can't find that job right now.</p>
  }

  return (
    <div>
      <h2>Job Details</h2>
      <div className="job-info">
        <h3>{jobPost.title}</h3>
        <p>Description: {jobPost.content}</p>
        <p>Contractor Category: {jobPost.category}</p>
        <p>Location: {jobPost.location}</p>
        <p>Status: {jobPost.status}</p>
        <p>Date Created: {jobPost.dateCreated}</p>
        <p>Posted By: {jobPost.postedBy.username}</p>
      </div>
      <PostBid jobPostId={jobPostId} bids={bids}/>
      {bids.map((bid) => (
        <div key={bid._id}>
          <p>Contractor: {bid.contractor.contractorCompany}</p>
          <p>Bid Amount: ${bid.bidAmount}</p>
        </div>
      ))}
      {/* should this be its own "div className = blah blah blah"??  */}
      <h3>Comments</h3>
        <CommentForm jobPostId={jobPostId} setToggle={setToggle}/>
        {comments.map((comment) => (
          <div key={comment._id}>
            <p>Comment: {comment.content}</p>
            <p>Posted By: {comment.postedBy.username}</p>
            {comment.userId === user._id ? (<button onClick={() => deleteComment(comment._id)}>TrashBin</button>) : null}
          </div>
        ))}
    </div>
  );
}  

    
     
 

export default JobDetails;