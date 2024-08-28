import styles from "../styles/Body/Services.module.css"

export const Services = ()=>{
    return<>
    <section className={styles.section1Main}   data-aos="fade-right">
      <div >
    <h4>CATEGORY</h4>
    <h1>We Offer Best Services</h1>
    <div className={styles.cards} data-aos="fade-up"> 
    <div className="card" >
     <img src="./src/assets/img/Section1/Group 48.png" className="card-img-top" alt="..." />
      <div className="card-body">
    <h6>Calculated Weather</h6>
    <p className="card-text">Plan your trip with precision! Get real-time weather forecasts ☀️🌧️</p>
  </div>
</div >
<div className="card" >
  <img src="./src/assets/img/Section1/Group 51.png" className="card-img-top " alt="..."  />
  <div className="card-body">
    <h6>Best Flights</h6>
    <p className="card-text">Fly high! Discover budget-friendly flights for your next adventure✈️✨</p>
  </div> 
</div>
<div className="card" >
  <img src="./src/assets/img/Section1/Group 50.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h6>Local Events</h6>
    <p className="card-text">Experience the heartbeat! Don't miss out on our local events 🎉📍</p>
  </div>
</div>
<div className="card" >
  <img src="./src/assets/img/Section1/Group 49.png" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h6>Customisation</h6>
    <p className="card-text">Your journey, your way. Fit your style with our seamless customization options🎨✈️</p>
  </div>
</div>
</div>
</div>
</section>
    </>
}