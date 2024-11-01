import { useState } from "react";
import { createBid } from "../../services/bid";
import "./PostBid.css";

//linked to jobPostId
const PostBid = ({ jobPostId, setToggle }) => {
  const [bidAmount, setBidAmount] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bidData = {
      bidAmount,
      jobStartDate,
      jobEndDate,
    };

    try {
      const response = await createBid(jobPostId, bidData);

      if (response.status !== 201) {
        throw new Error("Failed to create bid");
      }

      setToggle((prev) => !prev);
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
    <>
          <h3 className="postbid_head">Submit a Bid</h3>

    <div className="postbid_form">

      <form onSubmit={handleSubmit}>
        <label>Bid Amount ($):</label>
        <input
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          required
        />

        <label>Job Start Date:</label>
        <input
          type="date"
          value={jobStartDate}
          onChange={(e) => setJobStartDate(e.target.value)}
          required
        />

        <label>Job End Date:</label>
        <input
          type="date"
          value={jobEndDate}
          onChange={(e) => setJobEndDate(e.target.value)}
          required
        />

        <button type="submit" className="postbid_btn">
          Place Bid
        </button>
      </form>
    </div>
    </>
  );
};

export default PostBid;
