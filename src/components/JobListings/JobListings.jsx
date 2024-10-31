import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../services/authContext.js";
import { getJobPosts } from "../../services/jobPosts.js";

const JobListings = () => {
  const [ jobListings, setJobListings] = useState([]);
  const { user } = useContext(AuthedUserContext);

  useEffect(() => {
    const fetchJobPosts = async () => {
      const jobPostsData = await getJobPosts()

      if (user?.isHomeOwner) { // If user is a homeowner, we want to filter all job posts for just that user's job posts
        const ownerJobPosts = jobPostsData.filter((job) => {
          return job.postedBy._id === user._id
        })

        setJobListings(ownerJobPosts)
      } else {
        setJobListings(jobPostsData)
      }
    }

    fetchJobPosts()
  }, []);

  return (
    <div className="container">
      <h1>{user?.isHomeOwner ? "Your Job Listings": "Available Job Listings"}</h1>
      {jobListings.length > 0 ? (
        jobListings.map((job) => (
          <Link key={job._id} to={`/jobPosts/${job._id}`}>
            <div  className="job-card">
              <h2>{job.title}</h2>
              <p>{job.content}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Posted by:</strong> {job.postedBy.username}</p>
              <p><strong>Posted on:</strong> {new Date(job.dateCreated).toLocaleDateString()}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No job listings available at the moment.</p>
      )}
    </div>
  );
};

// Zaire

// this is All Jobs.
// use axios method


export default JobListings;


