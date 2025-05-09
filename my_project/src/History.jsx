import React from 'react';
import './History.css';

function History() {
  return (
    <div className="history-container">
      <h1>Explore Fascinating Historical Facts</h1>
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
        <img src="/Pictures/ta.jpeg" alt="The Tallest Married Couple" className="history-image" />
         <h3>The Tallest Married Couple</h3>
          <p>Anna Swan (7'11") and Martin Bates (7'9") hold the record. Their baby weighed 22 pounds at birth!</p>
        </div>

        <div className="history-card">
        <img src="/Pictures/vol.jpeg" alt="Krakatoa" className="history-image" />
      

          <h3>Krakatoa Volcanic Eruption</h3>
          <p>In 1883, Krakatoa’s eruption was so loud it was heard 3,000 miles away and circled the globe four times.</p>
        </div>


        <div className="history-card">
        <img src="/Pictures/his.jpg" alt="History" className="history-image" />
        <div className="history-text">  <h3>The history</h3> </div> 
          <p>It’s believed that roughly 97% of history has been lost over time. Written accounts of history only started roughly 6,000 years ago. Modern humans first appeared around 200,000 years ago.</p>
        </div>

        <div className="history-card">
        <img src="/Pictures/ce.jpg" alt="Augustus Caesar" className="history-image" />
          <h3>Augustus Caesar</h3> 
          <p>Augustus Caesar was the wealthiest man to ever live in history. Nephew and heir of Julius Caesar, Emperor Augustus had an estimated net worth of $.46 trillion when counting for inflation.</p>
        </div>

        <div className="history-card">
        <img src="/Pictures/laugh.jpeg" alt="Laughing people" className="history-image" />
          <h3>Can't stop laughing</h3> 
          <p>In 1962, a mysterious epidemic of laughter broke out in a girls’ school in Tanganyika (now Tanzania). The laughter quickly spread to other schools and eventually to the surrounding villages, affecting thousands of people. The epidemic lasted for several months and was so severe that many schools were forced to close.</p>
        </div>

        <div className="history-card">
        <img src="/Pictures/tsunami.jpeg" alt="Tsunami" className="history-image" />
         <h3>Tallest tsunami</h3> 
          <p>In July 1958 the tallest tsunami ever recorded crashed through the quiet fjord of Lituya Bay in Alaska. At 1,720 feet, the megatsunami was higher than the Empire State Building.</p>
        </div>

        <div className="history-card">
        <img src="/Pictures/war.jpeg" alt="Anglo-Zanzibar war" className="history-image" />
          <h3>Shortest war</h3> 
          <p>The shortest war in history is the Anglo-Zanzibar war, on 27 August 1896. It started at 9.02 am and ended at 9.40am. 1 British soldier was injured. It followed the refusal of the Zanzibari Sultan to step down after the British issued an ultimatum. British warships then fired on his position and the Sultan surrendered.</p>
        </div>

        <div className="history-card">
        <img src="/Pictures/painting.jpeg" alt="Artworks" className="history-image" />
        <h3>The first known artworks</h3> 
          <p> The first known artworks date back roughly 100,000 years ago. It is believed to have begun with the Homo Sapiens during the Upper Paleolithic era. The oldest known artworks were found in a cave in what is now France.</p>
        </div>


      </div>
    </div>
  );
}

export default History;