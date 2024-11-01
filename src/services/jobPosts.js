import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

export const getJobPosts = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/api/jobPosts`);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getJobPost = async (jobPostId) => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/jobPosts/${jobPostId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createJobPost = async (jobPost) => {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/api/jobPosts`,
      jobPost,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );

    return res;
  } catch (error) {
    console.error("Error creating job post:", error.message);
    return error;
  }
};

export const editJobPost = async (jobPostId, jobPost) => {
  try {
    const res = await axios.put(
      `${BACKEND_URL}/api/jobPosts/${jobPostId}`,
      jobPost,
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    );

    return res;
  } catch (error) {
    console.error("Error creating job post:", error.message);
    return error;
  }
};

export const deleteJobPost = async (jobPostId) => {
  try {
    const response = await axios.delete(
      `${BACKEND_URL}/api/jobPosts/${jobPostId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  
    return response;
  } catch (error) {
    console.error("Error creating job post:", error.message);
    return error;
  }
}

export const addComment = async (jobPostId, commentData) => {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/api/jobPosts/${jobPostId}/comments`,
      commentData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};