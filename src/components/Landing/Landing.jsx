// src/components/Landing.jsx
import { useEffect } from "react";
import "./Landing.css";
import electrical from "../Images/electrical.jpg";
import flooring from "../Images/flooring.jpg";
import general from "../Images/general.jpg";
import landscaping from "../Images/landscaping.jpg";
import plumbing from "../Images/plumber.jpg";
import roofer from "../Images/roofer.jpg";

const Landing = () => {
  useEffect(() => {
    document.querySelectorAll('.fade-in').forEach((element) => {
      element.classList.add('fade-in');
    });
  }, []);

  return (
    <div>
      <div className="landing-container fade-in">
        <div className="teal-section fade-in">
          <div className="content-overlay fade-in">
            <h1 className="landing-title fade-in">Home Fuze</h1>
            <p className="landing-subtitle fade-in">Connecting Your Home Needs with Trusted Pros</p>
          </div>
        </div>
        
        {/* New Title Section */}
        <h2 className="our-services-title fade-in">Our Services</h2>

        <div className="services-section fade-in">
          <div className="service-icon fade-in">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${plumbing})` }}></div>
            <p className="service-title fade-in">Plumbing</p>
          </div>
          <div className="service-icon fade-in">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${electrical})` }}></div>
            <p className="service-title fade-in">Electrical</p>
          </div>
          <div className="service-icon fade-in">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${roofer})` }}></div>
            <p className="service-title fade-in">Roofing</p>
          </div>
          <div className="service-icon fade-in">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${flooring})` }}></div>
            <p className="service-title fade-in">Flooring</p>
          </div>
          <div className="service-icon fade-in">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${landscaping})` }}></div>
            <p className="service-title fade-in">Landscaping</p>
          </div>
          <div className="service-icon fade-in">
            <div className="circle-placeholder" style={{ backgroundImage: `url(${general})` }}></div>
            <p className="service-title fade-in">General</p>
          </div>
        </div>
        
        <div className="about-section fade-in">
          <h2 className="fade-in">About Us</h2>
          <p className="fade-in">
            House Fuze is a dynamic platform designed to bridge the gap between
            homeowners and trusted contractors, making it easier than ever to
            connect, communicate, and complete home improvement projects. Whether
            you're a homeowner in need of repairs, renovations, or routine
            maintenance, House Fuze offers a seamless experience where you can
            browse a wide range of services, view contractor profiles, and select
            the right professional for the job. Our intuitive interface empowers
            homeowners to post jobs, review bids, and manage projects all in one
            place, fostering transparency and trust every step of the way.
          </p>
          <p className="fade-in">
            For contractors, House Fuze is a comprehensive platform to showcase
            your skills, bid on local projects, and build a strong professional
            reputation. Contractors can create detailed profiles, highlight
            specific services, and communicate directly with potential clients to
            understand their needs. With tools for managing bids, receiving client
            reviews, and organizing projects, House Fuze supports contractors in
            growing their business and connecting with homeowners seeking reliable
            expertise. From quick fixes to full-scale renovations, House Fuze is
            here to connect communities with the trusted experts they need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
