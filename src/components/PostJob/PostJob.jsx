//Pete
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createJobPost } from "../../services/jobPosts";

const PostJob = () => {
  // left out postedBy b/c i dont think we need it, i dont think the user fills that in
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("roofing");
  const [location, setLocation] = useState("");

  const navigate = useNavigate()

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare job post data to match the backend schema
    const jobData = {
      title,
      content,
      category,
      location,
    };

    try {
      const response = await createJobPost(jobData);

      if (response.status !== 201) {
        throw new Error("Failed to create job post");
      }

      navigate("/homepage")
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Create a Job Post</h3>

        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Job Description:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          minLength={10}
          maxLength={5000}
        />

        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="roofing">Roofing</option>
          <option value="electrical">Electrical</option>
          <option value="plumbing">Plumbing</option>
          <option value="flooring">Flooring</option>
          <option value="landscaper">Landscaper</option>
          <option value="carpentry">Carpentry</option>
          <option value="general">General</option>
          <option value="other">Other</option>
        </select>

        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <button type="submit">Post Job</button>
      </form>
    </>
  );
};

export default PostJob;
