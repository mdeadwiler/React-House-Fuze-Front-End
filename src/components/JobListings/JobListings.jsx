// src/components/JobListings.jsx
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthedUserContext } from "../../services/authContext.js";
import { getJobPosts, deleteJobPost } from "../../services/jobPosts.js";
import "./JobListings.css";

const JobListings = () => {
  const [jobListings, setJobListings] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { user } = useContext(AuthedUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobPosts = async () => {
      const jobPostsData = await getJobPosts();

      if (user?.isHomeOwner) {
        // If user is a homeowner, we want to filter all job posts for just that user's job posts
        const ownerJobPosts = jobPostsData.filter((job) => {
          return job.postedBy._id === user._id;
        });

        setJobListings(ownerJobPosts);
      } else {
        setJobListings(jobPostsData);
      }
    };

    fetchJobPosts();
  }, [toggle]);

  const handleDelete = async (jobPostId) => {
    await deleteJobPost(jobPostId);
    setToggle((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>
        {user?.isHomeOwner ? "Your Job Listings" : "Available Job Listings"}
      </h1>
      {jobListings.length > 0 ? (
        jobListings.map((job) => (
          <Link key={job._id} to={`/jobPosts/${job._id}`}>
            <div className="job-card">
              <div className="heading-and-trash">
                <h2>{job.title}</h2>
                {job.postedBy._id === user._id ? (
                  <div>
                    <svg
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/jobPosts/${job._id}/edit`);
                      }}
                      className="svg-icons"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                    </svg>
                    <svg
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(job._id);
                      }}
                      className="svg-icons"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                    </svg>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <p>{job.content}</p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Posted by:</strong> {job.postedBy.username}
              </p>
              <p>
                <strong>Posted on:</strong>{" "}
                {new Date(job.dateCreated).toLocaleDateString()}
              </p>
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
