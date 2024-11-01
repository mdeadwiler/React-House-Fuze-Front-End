//Pete
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobPost, editJobPost } from "../../services/jobPosts";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("roofing");
  const [location, setLocation] = useState("");

  const {jobPostId} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchJobPost = async () => {
      try {
        const jobPostData = await getJobPost(jobPostId)

        setTitle(jobPostData.jobPost.title)
        setContent(jobPostData.jobPost.content)
        setCategory(jobPostData.jobPost.category)
        setLocation(jobPostData.jobPost.location)
        
        } catch (err) {
        console.error("Error finding job post:", err);
      }
    };

    fetchJobPost();
  }, [jobPostId]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Job Post data from the backend
    const jobData = {
      title,
      content,
      category,
      location,
    };

    try {
      const response = await editJobPost(jobPostId, jobData);

      if (response.status !== 200) {
        throw new Error("Failed to create job post");
      }

      navigate(`/jobPosts/${jobPostId}`)
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Edit a Job Post</h3>

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

        <button type="submit">Edit Job</button>
      </form>
    </>
  );
};

export default PostJob;
