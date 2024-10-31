import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobPost } from "../../Services/jobPosts.js";
import PostBid from "../PostBid/PostBid";

const JobDetails = () => {
  const [jobPost, setJobPost] = useState(null);
  const [bids, setBids] = useState(null);
  const [comments, setComments] = useState(null);
  const { jobPostId } = useParams();

  useEffect(
    () => {
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
    },
    [jobPostId]
  );

  //probably a better way to do this, lets check it out
  if (!jobPost) {
    return <p>We can't find that job right now.</p>;
  }

  return (
    <div>
      <h2>Job Details</h2>
      <div className="job-info">
        <h3>
          {jobPost.title}
        </h3>
        <p>
          Description: {jobPost.content}
        </p>
        <p>
          Contractor Category: {jobPost.category}
        </p>
        <p>
          Location: {jobPost.location}
        </p>
        <p>
          Status: {jobPost.status}
        </p>
        <p>
          Date Created: {jobPost.dateCreated}
        </p>
        <p>
          Posted By: {jobPost.postedBy.username}
        </p>
      </div>
      <PostBid jobPostId={jobPostId} bids={bids} />
      {bids.map(bid =>
        <div key={bid._id}>
          <p>
            Contractor: {bid.contractor.contractorCompany}
          </p>
          <p>
            Bid Amount: ${bid.bidAmount}
          </p>
        </div>
      )}
      {comments.map(comment =>
        <div key={comment._id}>
          <p>
            {comment.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
