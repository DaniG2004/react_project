import React, { useEffect, useState } from 'react';
import './Humans.css';

function Humans() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch('./humans.json')
      .then(response => response.json())
      .then(data => setFacts(data))
      .catch(error => console.error('Error loading humans data:', error));
  }, []);

  return (
    <div className="humans-container">
      <h1>Explore the World of Humans</h1>
      <p>Humans are fascinating creatures — capable of extraordinary creativity, resilience, and adaptation. From the complexity of our brains to the uniqueness of our fingerprints, the human species has evolved to thrive in diverse environments. Here are some incredible facts that highlight just how amazing we really are:

</p>

      <div className="humans-facts">
        {facts.map(fact => (
          <div key={fact.id} className="humans-card">
            <img src={fact.image} alt={fact.title} className="humans-image" />
            <h3>{fact.title}</h3>
            <p>{fact.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Humans;