import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-background">
      <div className="home-content">
        <h1>Welcome to the Facts Site</h1>
        <p>Explore the wonders of the world, discover mind-blowing facts, and satisfy your curiosity about life, history, science, animals, and much more. Our goal is to make learning fun and exciting by offering interesting and surprising facts that will make you see the world in a whole new light.</p>
      <hr></hr>
      <br></br>
      <h2>What you can explore:</h2>
      <ul>
      <li><strong>History:</strong> Dive into the past and uncover fascinating events and people that shaped our world.</li>
      <li><strong>Animals:</strong> Learn about the animal kingdom’s incredible creatures and their extraordinary behaviors.</li>
      <li><strong>Humans:</strong>  Discover amazing facts about the human body, our minds, and our history.</li>
      <li><strong>Plants:</strong> Explore the incredible diversity of plant life, from the smallest flowers to the tallest trees, and learn how they sustain our environment.</li>
      </ul>
      <br></br>

      <h2>Why Explore Facts?</h2>
        <p>
          We believe that knowledge is powerful. Facts help us understand the world, spark our curiosity, and give us new perspectives. Whether you're looking to impress your friends, boost your knowledge, or just learn something new, you’ve come to the right place.
        </p>
      </div>
    </div>
  );
}

export default Home;