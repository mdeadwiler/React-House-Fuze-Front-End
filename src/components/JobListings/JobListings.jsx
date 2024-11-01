// src/components/JobListings.jsx
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../services/authContext.js";
import { getJobPosts } from "../../services/jobPosts.js";
import "./JobListings.css";

const JobListings = () => {
  const [jobListings, setJobListings] = useState([]);
  const { user } = useContext(AuthedUserContext);

  useEffect(() => {
    const fetchJobPosts = async () => {
      const jobPostsData = await getJobPosts();

      if (user?.isHomeOwner) {
        const ownerJobPosts = jobPostsData.filter((job) => job.postedBy._id === user._id);
        setJobListings(ownerJobPosts);
      } else {
        setJobListings(jobPostsData);
      }
    };

    fetchJobPosts();
  }, [user]);

  return (
    <div className="joblistings-container">
      <h1 className="joblistings-title">{user?.isHomeOwner ? "Your Job Listings" : "Available Job Listings"}</h1>
      {jobListings.length > 0 ? (
        jobListings.map((job) => (
          <Link key={job._id} to={`/jobPosts/${job._id}`} className="job-card-link">
            <div className="job-card">
              <h2 className="job-card-title">{job.title}</h2>
              <p className="job-card-content">{job.content}</p>
              <p className="job-card-detail"><strong>Location:</strong> {job.location}</p>
              <p className="job-card-detail"><strong>Posted by:</strong> {job.postedBy.username}</p>
              <p className="job-card-detail"><strong>Posted on:</strong> {new Date(job.dateCreated).toLocaleDateString()}</p>
            </div>
          </Link>
        ))
      ) : (
        <p className="joblistings-no-jobs">No job listings available at the moment.</p>
      )}
    </div>
  );
};

export default JobListings;
