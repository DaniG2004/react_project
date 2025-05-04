import React from 'react';
import './Plants.css';

function Plants() {
  return (
    <div className="plants-container">
      <h2>Explore the World of Plants</h2>
      <p>Plants are essential for life on Earth. They give us oxygen, food, medicine, and beauty.</p>

      <div className="plant-facts">
        <div className="plant-card">
            <img src="/Pictures/bamboo.jpeg" alt="Bamboo" className="plant-image"/>
          <h3>Bamboo</h3>
          <p>Fastest growing plant on Earth — it can grow up to 91 cm (35 inches) per day!</p>
        </div>

        <div className="plant-card">
        <img src="/Pictures/raf.jpeg" alt="Rafflesia" className="plant-image"/>
          <h3>Rafflesia</h3>
          <p>The largest flower in the world with a smell like rotting flesh to attract insects.</p>
        </div>

        <div className="plant-card">
        <img src="/Pictures/vanillia.jpeg" alt="Vanilla" className="plant-image"/>
          <h3>Vanilla</h3>
          <p>Vanilla flavoring comes from the pod of an orchid, Vanilla planifolia. Though the pods are called vanilla beans, they're not actually in the legume family like green beans.</p>
        </div>

        <div className="plant-card">
        <img src="/Pictures/pin.jpeg" alt="Pineapple" className="plant-image"/>
          <h3>Pineapple</h3>
          <p>The word pineapple comes from European explorers who thought the fruit combined the look of a pinecone with flesh similar to an apple. Pineapples are the only edible members of the bromeliad family.</p>
        </div>

        <div className="plant-card">
        <img src="/Pictures/snap.jpeg" alt="Snapdragon" className="plant-image"/>
          <h3>Snapdragon</h3>
          <p>Snapdragon flowers resemble a dragon, and if you squeeze the sides, the dragon's mouth will appear to open and close.</p>
        </div>

        <div className="plant-card">
        <img src="/Pictures/tor.jpeg" alt="Torenia" className="plant-image"/>
          <h3>Torenia</h3>
          <p>Torenia, a shade-loving annual, is called the wishbone flower. Look for tiny wishbone-shaped stamens inside the purple, blue, or burgundy petals.</p>
        </div>


        <div className="plant-card">
        <img src="/Pictures/fly.jpeg" alt="Venus Flytrap" className="plant-image"/>
          <h3>Venus Flytrap</h3>
          <p>This carnivorous plant snaps shut to trap insects for nutrients.</p>
        </div>

        <div className="plant-card">
        <img src="/Pictures/saf.jpeg" alt="Saffron" className="plant-image"/>
          <h3>Saffron</h3>
          <p> Saffron, used as a flavoring in Mediterranean cooking, is harvested from the stigmas of a type of fall-blooming crocus, Crocus sativus.</p>
        </div>
      </div>
    </div>
  );
}

export default Plants;