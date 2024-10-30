// Pete & George
// This is to pull an idividual job /job/:jobID

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostBid from '../PostBid/PostBid';


// we want to figure out how to implement role based access-control so homeowners are only seeing the jobs they've posted

const JobDetails = () => {
  const { jobPostId } = useParams();
  const [jobPost, setJobPost] = useState(null);
  // const [bids, setBids] = useState([]);

  
  useEffect(() => {
    const fetchJobPost = async () => {
      try {
        const response = await fetch(`/api/jobPosts/${jobPostId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`, 
          },
        });

        const data = await response.json();
        setJobPost(data.jobPost);

        // if (data.jobPost.bids) {
        //     const currentUserBid = data.jobPost.bids.find(
        //       bid => bid.contractor === localStorage.getItem('userId')
        //     );
        //     setUserBid(currentUserBid);
        } catch (err) {
        console.error("Error finding job post:", err);
      }
    };

    fetchJobPost();
  }, [jobPostId]);

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
        <p>Posted By: {jobPost.postedBy}</p>
      </div>
{/* 
We want to render any existing bids associated with jobPostId,
as well as providing the option to post a bit to the current job.

We also want to include role based access control so homeowners can't
post bids. */}

      <PostBid jobPostId={jobPostId} />
      </div>
  );
};     

{/* 
      <div className="bid-section">
        {userBid ? (
          <div className="existing-bid">
            <h3>Your Current Bid</h3>
            <p>Amount: ${userBid.bidAmount}</p>
            <p>Start Date: {new Date(userBid.jobStartDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(userBid.jobEndDate).toLocaleDateString()}</p>
            <p>Status: {userBid.status}</p>
          </div>
        ) : ( */}

export default JobDetails;