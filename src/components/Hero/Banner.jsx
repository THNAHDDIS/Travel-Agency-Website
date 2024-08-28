
import styles from "../styles/Hero/Banner.module.css"
import { FaPlay } from "react-icons/fa";
export const Banner = ()=>{

    

    return <>
     <div className={styles.banner} >
        <div className = {styles.titles} data-aos="fade-up">
             <p>BEST DESTINATIONS AROUND THE WORLD</p>
             <h1 className={styles.heading}>Travel, enjoy
             and live a new 
             full life </h1>
             <p></p>
            <div className={styles.findMore}>
              <p id={styles.captions}>Embark on unforgettable journeys with our curated travel experiences. Discover breathtaking destinations,
                 find the perfect hotels, and book seamless flights—all in one place. Adventure awaits, let's explore together!</p>
          <div>
          <button className={styles.find}>Find out more</button>
          <div className={styles.easterEgg}>
          <button className={styles.play}> <FaPlay color="white"  /></button>
          <p>Play Demo</p>
          </div>
          </div>
          </div>
        </div>

        {/* <div className={styles.traveller}>
        <img src="./src/assets/img/Hero/Image (1).png" alt="Traveller" />
        </div> */}
       
      </div>
    </>
}  