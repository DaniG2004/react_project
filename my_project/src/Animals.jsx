import React from 'react';
import './Animals.css';

function Animals(){
  return(
<div className="animals-container">
<h1>Explore the World of Animals</h1>
<p>Animals are some of the most incredible creatures on Earth. From the deepest oceans to the highest mountains, the animal kingdom is full of surprises! Here are some amazing facts that show just how diverse and astonishing animals can be:</p>

<div className="animals-facts">
  <div className="animals-card">
    <img src="./Pictures/dragon.jpeg" alt="Komodo dragon" className="animals-image"/>
    <h3>Komodo dragons</h3>
    <p> Komodo dragons can have so-called virgin births. As well as mating with males the species is parthenogenetic: in other words, the females can lay fertile eggs without any input from males. This will only reproduce identical young, however. For the species to continue to adapt, it needs to mate.</p>    
  </div>

<div className="animals-facts">
  <div className="animals-card">
    <img src="./Pictures/chicken.jpeg" alt="" className="animals-image"/>
    <h3>Chicken</h3>
    <p>A chicken once lived for 18 months without a head. When a chicken’s head is chopped off, the severed nerves send impulses to the muscles of the legs and wings, which can cause the remainder of the bird to run around in a flap.</p>
  </div>
</div>







</div>





</div>

    
  )
};

export default Animals;