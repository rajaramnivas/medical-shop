import React from 'react';
import './Home.css';
import backgroundImage from '../assets/background.png'; // Import the image

const Home = () => {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Inline style for background
    >
      <div className="overlay">
        <h1>Welcome to SRS Pharmacy</h1>
        <p>Your health, our priority. Explore our wide range of medical products.</p>
        <button className="explore-button">Explore Products</button>
      </div>
    </div>
  );
}

export default Home;
