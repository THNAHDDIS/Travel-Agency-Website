import styles from "../styles/Body/Destinations.module.css"


import { FaLocationArrow } from "react-icons/fa";

export  const Destinations = () =>{
    return<>
    <section><div className={styles.section2Main} >
     <h4>Top Selling</h4> 
     <h1>Top Destinations</h1>
     <div className={styles.cardHandler} >
     <div className= {styles.card} data-aos="flip-left" >
     <img src="../src/assets/img/Section2/Rectangle 14.png" className="card-img-top" alt="..." />
     <div className="card-body">
    <pre className="card-text">Rome, Italy                 $5.42k </pre>
    <pre className="card-text"><FaLocationArrow /> 10 Days Trip</pre>
  </div>
</div>
<div className={styles.card} data-aos="flip-left">
     <img src="../src/assets/img/Section2/Rectangle 14.jpg" className="card-img-top" alt="..."/>
     <div className="card-body">
     <pre className="card-text">Rome, Italy                $4.2k </pre>
     <pre className="card-text"><FaLocationArrow /> 10 Days Trip</pre>
  </div>
</div>
<div className={styles.card} data-aos="flip-left">
     <img src="../src/assets/img/Section2/Rectangle 14 (2).png" className="card-img-top" alt="..."/>
     <div className="card-body">  
     <pre className="card-text">Full Europe                    $15k </pre>
     <pre className="card-text"><FaLocationArrow /> 28 Days Trip</pre>
  </div>
</div>
</div>
</div>
 
  </section> 
    </>
}
