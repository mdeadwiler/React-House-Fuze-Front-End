//Pete


import React, { useState } from 'react';

const PostJob = () => {
  // left out postedBy b/c i dont think we need it, i dont think the user fills that in
  const [title, setTitle] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('roofing');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('open');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare job post data to match the backend schema
    const jobData = {
      title,
      dateCreated,
      content,
      category,
      location,
      status,
    };

    try {
      //fetch for hTTP request to backend
      const response = await fetch('/api/jobPosts', {
        method: 'POST',
        //this could be wrong
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, //def want the JWT token header
        },
        //jobData object into JSON string
        body: JSON.stringify(jobData),
      });

      if (!response.ok) {
        throw new Error('Failed to create job post');
      }

      alert('Job post created successfully!');
      
      setTitle('');
      setDateCreated('');
      setContent('');
      setCategory('roofing');
      setLocation('');
      setStatus('open');


    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
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
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
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

  
      <label>Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit">Post Job</button>
    </form>
  );
};

export default PostJob;














//OLD ONE

// import { useState } from "react";

// const PostJob = () => {
//   const [jobTitle, setJobTitle] = useState("");
//   const [jobDescription, setJobDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [budget, setBudget] = useState("");
//   const [location, setLocation] = useState("");
//   const [jobPosts, setJobPosts] = useState([]);

//   //form submission handler
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // creating the new job post listing 
//     const newJobPost = {
//       title: jobTitle,
//       description: jobDescription,
//       category,
//       budget,
//       location,
//     };

    
//     setJobPosts([...jobPosts, newJobPost]);

//     //reset form 
//     setJobTitle("");
//     setJobDescription("");
//     setCategory("");
//     setBudget("");
//     setLocation("");
//   };

//   return (
//     <div>
//       <h2>Create a Job Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Job Title:</label>
//           <input
//             type="text"
//             value={jobTitle}
//             onChange={(event) => setJobTitle(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Job Description:</label>
//           <input
//             type="text"
//             value={jobDescription}
//             onChange={(event) => setJobDescription(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Category:</label>
//           <input
//             type="text"
//             value={category}
//             onChange={(event) => setCategory(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Budget:</label>
//           <input
//             type="number"
//             value={budget}
//             onChange={(event) => setBudget(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Location:</label>
//           <input
//             type="text"
//             value={location}
//             onChange={(event) => setLocation(event.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Create Job Post</button>
//       </form>

//       <h3>Job Posts</h3>
//       <ul>
//         {jobPosts.map((post, index) => (
//           <li key={index}>
//             <h4>{post.title}</h4>
//             <p>Description: {post.description}</p>
//             <p>Category: {post.category}</p>
//             <p>Budget: ${post.budget}</p>
//             <p>Location: {post.location}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostJob;
