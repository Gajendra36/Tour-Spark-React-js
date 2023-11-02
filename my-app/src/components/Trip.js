import "./TripStyles.css";
import TripData from "./TripData";
import React from 'react'
import Trip1 from "../assets/santorni.jpg"
import Trip2 from "../assets/malaysia.jpg"
import Trip3 from "../assets/maldives.jpg"

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique
      destinations using Google Maps</p>
      <div className="tripcard">
        <TripData 
            image={Trip1}
            heading = "Santorini, with its stunning sunsets and white-washed buildings perched on the cliffs, is a dream destination. Explore the charming villages of Oia, Fira, and Imerovigli, where you can enjoy breathtaking views of the Aegean Sea. Relax on unique black sand beaches, indulge in delicious Greek cuisine at seaside tavernas, and visit ancient ruins like Akrotiri. Santorini is the epitome of romance and beauty."
        />
        <TripData 
            image={Trip2}
            heading = "Malaysia is a land of breathtaking natural beauty. Dense rainforests, teeming with wildlife, cover vast expanses, including the world's oldest rainforest in Taman Negara. The country is renowned for its stunning beaches and tropical islands like Langkawi and Penang, offering paradisiacal getaways for sun-seekers."
        />
        <TripData 
            image={Trip3}
            heading = "Nestled in the crystal-clear waters of the Indian Ocean, the Maldives is a tropical paradise that embodies the essence of luxury, serenity, and natural beauty. Comprising 26 coral atolls and over 1,000 coral islands, the Maldives is a dream destination for travelers seeking idyllic beaches, vibrant marine life, and the ultimate escape from the everyday"


        />
      </div>
    </div>
  )
}

export default Trip
