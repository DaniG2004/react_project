import React from 'react';
import './History.css';

function History() {
  return (
    <div className="history-container">
      <h2>Explore Fascinating Historical Facts</h2>
      <p>History is full of incredible events, people, and moments that changed the world.</p>

      <div className="history-facts">
        <div className="history-card">
          <img src="/Pictures/cleo.jpeg" alt="Cleopatra" className="history-image" />
          <h3>Cleopatra</h3>
          <p>Cleopatra wasn’t actually Egyptian! She was of Greek origin, descended from Alexander the Great's Macedonian general Ptolemy.</p>
        </div>

        <div className="history-card">
          <img src="/Pictures/ket.jpeg" alt="Ketchup" className="history-image" />
          <h3>Ketchup</h3>
          <p>In the 1830s, ketchup was sold as medicine for stomach issues by an Ohio physician named John Cook.</p>
        </div>

        <div className="history-card">
          <img src="/Pictures/alex.jpeg" alt="Alexander the Great" className="history-image" />
          <h3>Alexander the Great</h3>
          <p>He may have been buried alive due to Guillain-Barré Syndrome, a disorder causing paralysis while fully conscious.</p>
        </div>

        <div className="history-card">
          <img src="/Pictures/fe.jpeg" alt="Ferrets" className="history-image" />
          <h3>Ferrets</h3>
          <p>Ferrets, dogs, and monkeys were popular pets in the Roman Empire. Ferrets were used to hunt mice.</p>
        </div>

        <div className="history-card">
        <img src="/Pictures/ta.jpeg" alt="Ferrets" className="history-image" />
          <h3>The Tallest Married Couple</h3>
          <p>Anna Swan (7'11") and Martin Bates (7'9") hold the record. Their baby weighed 22 pounds at birth!</p>
        </div>

        <div className="history-card">
        <img src="/Pictures/vol.jpeg" alt="Ferrets" className="history-image" />
      

          <h3>Krakatoa Volcanic Eruption</h3>
          <p>In 1883, Krakatoa’s eruption was so loud it was heard 3,000 miles away and circled the globe four times.</p>
        </div>


        <div className="history-card">
        <img src="/Pictures/his.jpg" alt="Ferrets" className="history-image" />
          <h3>The history</h3>
          <p>It’s believed that roughly 97% of history has been lost over time. Written accounts of history only started roughly 6,000 years ago. Modern humans first appeared around 200,000 years ago.</p>
        </div>

        <div className="history-card">
        <img src="/Pictures/ce.jpg" alt="Ferrets" className="history-image" />
          <h3>Augustus Caesar</h3>
          <p>Augustus Caesar was the wealthiest man to ever live in history. Nephew and heir of Julius Caesar, Emperor Augustus had an estimated net worth of $.46 trillion when counting for inflation.</p>
        </div>
      </div>
    </div>
  );
}

export default History;