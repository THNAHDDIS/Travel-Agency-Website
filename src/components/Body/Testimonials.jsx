import styles from "../styles/Body/Testimonial.module.css"

export const Testimonial = ( ) =>{
    return <>
    <section className={styles.section4Main}>

      <div className={styles.texts}  data-aos="flip-up"> 
        <h4>TESTIMONIALS</h4>
        <h1>What People Say About Us?</h1>
      </div>
      <div className={styles.cardsSwap} data-aos="flip-up">
             <img src="../src/assets/img/Section4/Group 64.png" alt="" />
      </div>
 


</section>
   
    </>
}