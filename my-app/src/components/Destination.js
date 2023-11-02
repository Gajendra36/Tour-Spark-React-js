import React from 'react'
import "./DestinationStyle.css"
import Mountain1 from "../assets/parris1.jpg";
import Mountain2 from "../assets/parris2.jpg";
import Mountain3 from "../assets/italy1.jpg";
import Mountain4 from "../assets/italy2.jpg";
import DestinationData from './DestinationData';
const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot within a time frame</p>


    <DestinationData 
      className="first-des"
        heading="Paris, France"
        text= "Known as the City of Love and the City of Light, Paris is a timeless destination that offers a blend of romance, history, and culture. Visitors flock to iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Stroll along the Seine River, savor exquisite pastries in charming cafes, and explore the charming neighborhoods of Montmartre and Le Marais. Paris is a place where art, fashion, and culinary delights converge, making it a must-visit for travelers seeking a touch of elegance and sophistication."
        img1 = {Mountain1}
        img2 = {Mountain2}
    />
    <DestinationData 
     className="first-des-reverse"
        heading="Rome, Italy:"
        text= "Rome, the eternal city, is a living testament to centuries of history. Here, you can walk in the footsteps of emperors in the Roman Forum, marvel at the grandeur of the Colosseum, and make a wish at the Trevi Fountain. Explore Vatican City and visit St. Peter's Basilica and the Sistine Chapel, home to Michelangelo's masterpieces. Be sure to savor authentic Italian cuisine at local trattorias and gelato at charming gelaterias while soaking in the enchanting ambiance of this ancient city."
        img1 = {Mountain3}
        img2 = {Mountain4}
    />
    </div>
  )
}

export default Destination
