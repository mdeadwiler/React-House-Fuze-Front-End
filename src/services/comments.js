import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

export const updateComment = async (commentId, updatedComment) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/api/comments/${commentId}`,
   {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
   }, updatedComment)

   return response.data
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/api/comments/${commentId}`,
   {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
   })

   return response.data
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
};

//delete comment have an icon on the actual comment, conditional rendering for user, and have it fire the delete function