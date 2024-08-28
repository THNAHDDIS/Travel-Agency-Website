import styles from "../styles/Body/BookTrip.module.css"


export const BookTrip = ( ) =>{
    return <>
     <section className={styles.section3Main}>
    <div className= {styles.info}>
      <div className={styles.title} data-aos="flip-up">
        <h5>Easy and Fast</h5>
        <h1>Book Your Next Trip in 3 Easy Steps</h1>
      </div>
      <div className={styles.extraInfo} data-aos="flip-left" >
        <div className={styles.icons}>
          <img src="../src/assets/img/Section 3/Group 7.png" alt="" />
          <img src="../src/assets/img/Section 3/Group 11.png" alt="" />
          <img src="../src/assets/img/Section 3/Group 12.png" alt="" />
        </div>
        <div className={styles.words}> 
        <div className={styles.writtenInfo}>
          <h4>Choose Destination</h4> 
          <p>You can easily choose your holiday place in a sec!!</p>
        </div>
        <div className={styles.writtenInfo}>
          <h4>Make Payment</h4>
          <p>Easy to pay without any disturbance !!</p>
        </div>
        <div className={styles.writtenInfo}>
          <h4>Reach Airport on Select Date</h4>
          <p>Your journey, Your day of choice !!</p>
        </div>
        </div>
      </div>
    
    </div>
    <div className={styles.cardMain} >
      <div className={styles.bigCard} data-aos="flip-left">
      <div className="card" >
    <img src="../src/assets/img/Section 3/Rectangle 17.jpg" className="card-img-top" alt="..."/>
     <div className="card-body">
      
    <div className="card-text">
     <h4>Trip to Greece</h4>
     <p>14-29 June | by Robbin Jason</p>
    </div>
    <img src="../src/assets/img/Section 3/OPTIONS (1).png" className={styles.iconSmall} alt="" />
    <p></p>
  </div>
</div>

      </div>
       <div className={styles.smallCard}  data-aos="flip-right">
        <div className={styles.first}>
        <img src="../src/assets/img/Section 3/Mask Group.png" alt="" />
        <div className={styles.second}>
          <p>Ongoing Tour</p>
          <h4>Trip to home</h4>
        
        
          <p>40% completed</p>
          
        </div>
        

        </div>
       
       </div>
    </div>


  
  </section>
    
    </>
}