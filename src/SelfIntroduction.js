// src/SelfIntroduction.js
import React from 'react';
import './SelfIntroduction.css'; // Import the CSS file

const SelfIntroduction = () => {
    return (
        <div className="container">
            <h1 className="title">Self Introduction</h1>
            <img 
                src="pic.jpg" // Replace with your image URL
                alt="Shumail Rafaqat"
                className="image"
            />
            <h2 className="section-title"> Shumail Rafaqat</h2>
            <div className="section">
                <h2 className="section-title">Academic Background</h2>
                <p><strong>Major:</strong> Software Engineering</p>
                <p><strong>University:</strong> Jinnah University Karachi</p>
                <p><strong>Current Year of Study:</strong> 6th Semester</p>
            </div>

            <div className="section">
                <h2 className="section-title">Tech Interests</h2>
                <ul>
                    <li>Web Development</li>
                    <li>Blockchain Technology</li>
                    <li>AI-Powered Solutions</li>
                </ul>
            </div>

            <div className="section">
                <h2 className="section-title">Hobbies and Interests</h2>
                <p>I enjoy designing graphics, playing video games, and exploring new technologies.</p>
            </div>

            <div className="section">
                <h2 className="section-title">Thanks for this internship with Internee.pk</h2>
                <p>Thank you for the opportunity to be part of this internship program. I am excited to learn and contribute.</p>
            </div>

            <div className="section">
                <h2 className="section-title">Future Goals</h2>
                <p>During my internship, I hope to gain practical experience in React, work on exciting projects, and expand my professional network.</p>
            </div>
        </div>
    );
};

export default SelfIntroduction;
