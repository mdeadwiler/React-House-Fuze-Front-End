// src/components/PostJob.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostJob.css";
import { createJobPost } from "../../services/jobPosts";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("roofing");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Job Post data from the backend
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

      setTitle("");
      setContent("");
      setCategory("roofing");
      setLocation("");

      navigate("/homepage");
    } catch (err) {
      setError("There was a problem creating your job post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="postjob-form">
      <h3 className="postjob-title">Create a Job Post</h3>
      
      {error && <p className="postjob-error-message">{error}</p>}

      <label className="postjob-label">Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        minLength={5}
        className="postjob-input"
      />

      <label className="postjob-label">Job Description:</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        minLength={10}
        maxLength={5000}
        className="postjob-textarea"
      />

      <label className="postjob-label">Category:</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="postjob-select"
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

      <label className="postjob-label">Location:</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        minLength={2}
        className="postjob-input"
      />

      <button type="submit" disabled={loading} className="postjob-button">
        {loading ? "Posting..." : "Post Job"}
      </button>
    </form>
  );
};

export default PostJob;
