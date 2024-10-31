import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

export const createBid = async (jobPostId, bidData) => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/jobPosts/${jobPostId}/bids`,
        bidData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
  
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  