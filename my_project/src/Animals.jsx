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
   <div className="animals-text"> <h3>Komodo dragons</h3></div>
    <p> Komodo dragons can have so-called virgin births. As well as mating with males the species is parthenogenetic: in other words, the females can lay fertile eggs without any input from males. This will only reproduce identical young, however. For the species to continue to adapt, it needs to mate.</p>    
  </div>

<div className="animals-facts">
  <div className="animals-card">
    <img src="./Pictures/chicken.jpeg" alt="Chickens" className="animals-image"/>
    <div className="animals-text">  <h3>Chicken</h3> </div>
    <p>A chicken once lived for 18 months without a head. When a chicken’s head is chopped off, the severed nerves send impulses to the muscles of the legs and wings, which can cause the remainder of the bird to run around in a flap.</p>
  </div>
</div>

<div className="animals-facts">
<div className="animals-card">
<img src="./Pictures/octo.jpg" alt="Octopus" className="animals-image"/>
<div className="animals-text"><h3>Octopus</h3></div>
<p>Octopuses dies after giving birth. While parents sacrifice much for their offspring, few routinely give up their lives. But such is the destiny of a female octopus: tending her eggs is the last thing she’ll do.</p>

</div>
</div>

<div className="animals-facts">
  <div className="animals-card">
    <img src="./Pictures/hippo.jpeg" alt="Hippos" className="animals-image"></img>
    <div className="animals-text"> <h3>Hippos</h3></div>
  <p> Hippos can’t swim and instead they sink in water and run along the river bottom. However, as mammals, hippos have lungs just like we do, and therefore can't breathe underwater - they can only last about five minutes between breaths.

</p>
  </div>
</div>

<div className="animals-facts">
  <div className="animals-card">
    <img src="./Pictures/birds.jpg" alt="Birds" className="animals-image"></img>
    <div className="animals-text"> <h3>Birds</h3></div>
    <br></br>
    <p>Birds don't pee. Birds are creatures of the air and therefore need to stay as light as possible. So, instead of excreting waste matter as both urine and faeces, birds (with the exception of the ostrich) ditch their waste in one go through an opening called the cloaca. 
</p>
  </div>
</div>

<div className="animals-facts">
  <div className="animals-card">
    <img src="./Pictures/kangoroo.jpg" alt="" className="animals-image"></img>
    <div className="animals-text"> <h3>Kangoroo</h3></div>
    <br></br>
    <p>Kangaroos are able to hop so easily because of their large, stretchy tendons in their hind legs, which act like giant springs. As these tendons strain and contract, they generate most of the energy needed for each hop. 
</p>
  </div>
</div>


</div>





</div>

    
  )
};

export default Animals;