import { useState } from "react";

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [jobPosts, setJobPosts] = useState([]);

  //form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    // creating the new job post listing 
    const newJobPost = {
      title: jobTitle,
      description: jobDescription,
      category,
      budget,
      location,
    };

    
    setJobPosts([...jobPosts, newJobPost]);

    //reset form 
    setJobTitle("");
    setJobDescription("");
    setCategory("");
    setBudget("");
    setLocation("");
  };

  return (
    <div>
      <h2>Create a Job Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Job Title:</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(event) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Job Description:</label>
          <input
            type="text"
            value={jobDescription}
            onChange={(event) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Budget:</label>
          <input
            type="number"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            required
          />
        </div>
        <button type="submit">Create Job Post</button>
      </form>

      <h3>Job Posts</h3>
      <ul>
        {jobPosts.map((post, index) => (
          <li key={index}>
            <h4>{post.title}</h4>
            <p>Description: {post.description}</p>
            <p>Category: {post.category}</p>
            <p>Budget: ${post.budget}</p>
            <p>Location: {post.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostJob;
