import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Humans() {
  const [humanFacts, setHumanFacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3005/humans')
      .then(response => {
        setHumanFacts(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Human Facts</h2>
      <ul>
        {humanFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default Humans;