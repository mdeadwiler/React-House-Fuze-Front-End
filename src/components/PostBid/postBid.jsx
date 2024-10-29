//Pete
import { useState } from "react";

const PostsBid = ({ jobPostId }) => {
    const [bidAmount, setBidAmount] = useState("");
    const [bidDescription, setBidDescription] = useState("");
    const [contractorName, setContractorName] = useState("");
    const [contactInfo, setContactInfo] = useState("");
    const [bids, setBids] = useState([]);

  
  const handleSubmit = (event) => {
    event.preventDefault();

    
    const newBid = {
        amount: bidAmount,
        description: bidDescription,
        contractorName,
        contactInfo,
        jobPostId,
      };
    
    setBids([...bids, newBid]);

    //clear out bid fields
    setBidAmount("");
    setBidDescription("");
    setContractorName("");
    setContactInfo("");
  };


  return (
    <div>
      <h2>Place a Bid</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Bid Amount:</label>
          <input
            type="number"
            value={bidAmount}
            onChange={(event) => setBidAmount(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Bid Description:</label>
          <textarea
            value={bidDescription}
            onChange={(event) => setBidDescription(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Contractor Name:</label>
          <input
            type="text"
            value={contractorName}
            onChange={(event) => setContractorName(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact Info:</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(event) => setContactInfo(event.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Bid</button>
      </form>

      <h3>Current Bids on Job</h3>
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>
            <p>Bid Amount: ${bid.amount}</p>
            <p>Description: {bid.description}</p>
            <p>Contractor Name: {bid.contractorName}</p>
            <p>Contact Info: {bid.contactInfo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsBid;


