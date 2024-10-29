import { useEffect, useState, useContext } from "react";
import { AuthedUserContext } from "../../App.jsx";

const JobListings = () => {
  const [jobListings, setJobListings] = useState([]);
  const { user } = useContext(AuthedUserContext);

  useEffect(() => {
    // Mock data fetching for demonstration purposes
    const mockJobs = [
      { _id: 1, title: "Plumbing Fix", description: "Fix kitchen sink leak", location: "New York, NY", homeownerName: "John Doe", createdAt: "2024-10-01" },
      { _id: 2, title: "Painting Job", description: "Paint living room", location: "Los Angeles, CA", homeownerName: "Jane Smith", createdAt: "2024-10-15" },
    ];
    setJobListings(mockJobs);
  }, []);

  // Restrict access if user is not a contractor
  if (!user || user.isHomeowner) {
    return <p>Access restricted: Only contractors can view job listings.</p>;
  }

  return (
    <div className="container">
      <h1>Available Job Listings</h1>
      {jobListings.length > 0 ? (
        jobListings.map((job) => (
          <div key={job._id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Posted by:</strong> {job.homeownerName}</p>
            <p><strong>Posted on:</strong> {new Date(job.createdAt).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No job listings available at the moment.</p>
      )}
    </div>
  );
};

export default JobListings;
