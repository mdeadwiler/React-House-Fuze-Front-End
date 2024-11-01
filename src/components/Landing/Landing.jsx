// src/components/Landing.jsx
import "./Landing.css";
import electrical from "../Images/electrical.jpg"
import flooring from "../Images/flooring.jpg"
//import general from "../Images/general.jpg"
import landscaping from "../Images/landscaping.jpg"
import plumbing from "../Images/plumber.jpg"
import roofer from "../Images/roofer.jpg"


const Landing = () => {
  return (
    <div>
      <div className="landing-container">
        <div className="teal-section">
          <div className="content-overlay">
            <h1 className="landing-title">Home Fuze</h1>
            <p className="landing-subtitle">Connecting Your Home Needs with Trusted Pros</p>
          </div>
        </div>
        <div className="services-section">
          <div className="service-icon">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${plumbing})` }}></div>
            <p className="service-title">Plumbing</p>
          </div>
          <div className="service-icon">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${electrical})` }}></div>
            <p className="service-title">Electrical</p>
          </div>
          <div className="service-icon">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${roofer})` }}></div>
            <p className="service-title">Roofing</p>
          </div>
          <div className="service-icon">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${flooring})` }}></div>
            <p className="service-title">Flooring</p>
          </div>
          <div className="service-icon">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${landscaping})` }}></div>
            <p className="service-title">Landscaping</p>
          </div>
          <div className="service-icon">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${electrical})` }}></div>
            <p className="service-title">General</p>
          </div>
        </div>
        <div className="about-section">
          <h2>About Us</h2>
          <p>
            House Fuze is a dynamic platform designed to bridge the gap between
            homeowners and trusted contractors, making it easier than ever to
            connect, communicate, and complete home improvement projects.
            Whether you're a homeowner in need of repairs, renovations, or
            routine maintenance, House Fuze offers a seamless experience where
            you can browse a wide range of services, view contractor profiles,
            and select the right professional for the job. Our intuitive
            interface empowers homeowners to post jobs, review bids, and manage
            projects all in one place, fostering transparency and trust every
            step of the way.
          </p>
          <p>
            For contractors, House Fuze is a comprehensive platform to showcase
            your skills, bid on local projects, and build a strong professional
            reputation. Contractors can create detailed profiles, highlight
            specific services, and communicate directly with potential clients
            to understand their needs. With tools for managing bids, receiving
            client reviews, and organizing projects, House Fuze supports
            contractors in growing their business and connecting with homeowners
            seeking reliable expertise. From quick fixes to full-scale
            renovations, House Fuze is here to connect communities with the
            trusted experts they need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;










