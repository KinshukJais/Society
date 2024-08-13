import React, { useState } from "react";
import "./SignupSociety.css";
import { useHistory } from "react-router-dom";

const SignupSociety = () => {
  const history = useHistory();

  // State variables to store the form data
  const [formData, setFormData] = useState({
    name: "",
    dateOfEstablishment: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    numberOfWings: "",
    registrationNumber: "",
  });
console.log(formData)
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleNext = async (e) => {
    e.preventDefault(); // Prevent the form from submitting

    try {
      const response = await fetch("https://your-backend-api.com/society", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Redirect to the Wing Information page if the POST request is successful
      history.push("/signup/wing-information");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div className="signup-container">
      <header className="header">
        <div className="brand">COLONY</div>
        <div className="profile">Profile</div>
      </header>
      <div className="form-container">
        <h1>Society Registration Form (1/4):</h1>
        <h2>Basic Information:</h2>
        <form className="form" onSubmit={handleNext}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="NAME" value={formData.name} onChange={handleChange} />
            <label>Date of Establishment</label>
            <input type="date" name="dateOfEstablishment" value={formData.dateOfEstablishment} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" placeholder="ADDRESS" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" placeholder="CITY" value={formData.city} onChange={handleChange} />
            <label>State</label>
            <input type="text" name="state" placeholder="STATE" value={formData.state} onChange={handleChange} />
            <label>Pincode</label>
            <input type="text" name="pincode" placeholder="PINCODE" value={formData.pincode} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="phoneNumber" placeholder="PHONE NUMBER" value={formData.phoneNumber} onChange={handleChange} />
            <label>Registration Number</label>
            <input type="text" name="registrationNumber" placeholder="REGISTRATION NUMBER" value={formData.registrationNumber} onChange={handleChange} />
            <label>NUMBER OF WINGS</label>
            <input type="number" name="numberOfWings" placeholder="NUMBER OF WINGS" value={formData.numberOfWings} onChange={handleChange} />
          </div>
          
          {/* New fields for Email Address and Password */}
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" placeholder="EMAIL ADDRESS" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="PASSWORD" value={formData.password} onChange={handleChange} required />
          </div>

          <button className="next-button" type="submit">NEXT</button>
        </form>
      </div>
      <footer className="footer">
        <div className="footer-logo">
          <img src="footer-logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Use cases</h3>
            <p>UI design</p>
            <p>UX design</p>
            <p>Wireframing</p>
            <p>Diagramming</p>
            <p>Brainstorming</p>
            <p>Online whiteboard</p>
            <p>Team collaboration</p>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <p>Design</p>
            <p>Prototyping</p>
            <p>Development features</p>
            <p>Design systems</p>
            <p>Collaboration features</p>
            <p>Design process</p>
            <p>FigJam</p>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <p>Blog</p>
            <p>Best practices</p>
            <p>Colors</p>
            <p>Color wheel</p>
            <p>Support</p>
            <p>Developers</p>
            <p>Resource library</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignupSociety;
