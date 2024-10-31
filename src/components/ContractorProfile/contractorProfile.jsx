import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ContractorProfile.css";

const ContractorProfile = () => {
  const { id } = useParams(); // Get the contractor ID from the URL
  const [contractor, setContractor] = useState(null);

  // Simulate fetching contractor data (mock data for now)
  useEffect(() => {
    const mockContractor = {
      id: 1,
      username: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      company: "JD Plumbing Services",
      skills: "Plumbing, Electrical Repair, HVAC",
    };
    setContractor(mockContractor);
  }, [id]);

  // Display loading state until data is fetched
  if (!contractor) return <p>Loading...</p>;

  return (
    <div className="contractor-profile">
      <div className="profile-header">
        <div className="profile-picture">
          <img src="https://via.placeholder.com/100" alt="Contractor" />
        </div>
        <button className="edit-button">Edit</button>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <label>Username</label>
          <div>{contractor.username}</div>
        </div>
        <div className="detail-item">
          <label>Email</label>
          <div>{contractor.email}</div>
        </div>
        <div className="detail-item">
          <label>Phone</label>
          <div>{contractor.phone}</div>
        </div>
        <div className="detail-item">
          <label>Company</label>
          <div>{contractor.company}</div>
        </div>
        <div className="detail-item skills">
          <label>Skills</label>
          <textarea readOnly value={contractor.skills} />
        </div>
      </div>

      <div className="profile-actions">
        <button className="update-button">Update Profile</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default ContractorProfile;
