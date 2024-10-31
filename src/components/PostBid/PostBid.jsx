//Pete
import { useState } from 'react';

//linked to jobPostId
const PostBid = ({ jobPostId }) => {
  //lft out contractor bc similar to job posting, i dont think it makes sense but lets check
  //i also left out bidDate because i'm pretty sure the default int the backend menas MongoDB will be set it to the current date (Date.now)
  const [bidAmount, setBidAmount] = useState('');
  const [jobStartDate, setJobStartDate] = useState('');
  const [jobEndDate, setJobEndDate] = useState('');
  const [status, setStatus] = useState('pending'); 
 

  const handleSubmit = async (e) => {
    e.preventDefault();

  const bidData = {
      bidAmount,
      jobStartDate,
      jobEndDate,
      status,
    };

    try {
      const response = await fetch(`/api/jobPosts/${jobPostId}/bids`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Ensure JWT is included
        },
        body: JSON.stringify(bidData),
      });

      if (!response.ok) {
        throw new Error('Failed to create bid');
      }

      alert('You have successfully bid on a job!');
      
      
      setBidAmount('');
      setJobStartDate('');
      setJobEndDate('');
      setStatus('pending');

    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit a Bid</h3>

     
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

      
      <label>Bid Status:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
      </select>

     
      <button type="submit">Place Bid</button>
    </form>
  );
};

export default PostBid;



































//Old one

// import { useState } from "react";

// const PostsBid = ({ jobPostId }) => {
//     const [bidAmount, setBidAmount] = useState("");
//     const [bidDescription, setBidDescription] = useState("");
//     const [contractorName, setContractorName] = useState("");
//     const [contactInfo, setContactInfo] = useState("");
//     const [bids, setBids] = useState([]);

  
//   const handleSubmit = (event) => {
//     event.preventDefault();

    
//     const newBid = {
//         amount: bidAmount,
//         description: bidDescription,
//         contractorName,
//         contactInfo,
//         jobPostId,
//       };
    
//     setBids([...bids, newBid]);

//     //clear out bid fields
//     setBidAmount("");
//     setBidDescription("");
//     setContractorName("");
//     setContactInfo("");
//   };


//   return (
//     <div>
//       <h2>Place a Bid</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Bid Amount:</label>
//           <input
//             type="number"
//             value={bidAmount}
//             onChange={(event) => setBidAmount(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Bid Description:</label>
//           <textarea
//             value={bidDescription}
//             onChange={(event) => setBidDescription(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Contractor Name:</label>
//           <input
//             type="text"
//             value={contractorName}
//             onChange={(event) => setContractorName(event.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Contact Info:</label>
//           <input
//             type="text"
//             value={contactInfo}
//             onChange={(event) => setContactInfo(event.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit Bid</button>
//       </form>



//       <h3>Current Bids on Job</h3>
//       <ul>
//         {bids.map((bid, index) => (
//           <li key={index}>
//             <p>Bid Amount: ${bid.amount}</p>
//             <p>Description: {bid.description}</p>
//             <p>Contractor Name: {bid.contractorName}</p>
//             <p>Contact Info: {bid.contactInfo}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostsBid;


//       <h3>Current Bids on Job</h3>
//       <ul>
//         {bids.map((bid, index) => (
//           <li key={index}>
//             <p>Bid Amount: ${bid.amount}</p>
//             <p>Description: {bid.description}</p>
//             <p>Contractor Name: {bid.contractorName}</p>
//             <p>Contact Info: {bid.contactInfo}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostsBid;