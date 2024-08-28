import styles from "../styles/Footer/Footer.module.css"


export const Footer =()=>{
    return<>
<section className={styles.footerMain}>
<div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3">
     
        <img src="../src/assets/img/Footer/Jadoo..png" alt="logo" />
      
      <p className="text-body-secondary ">Book your ticket in minutes, getting you free early!!</p>
    </div>


    <div className="col mb-3">
      <h5>Company</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About us</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Career</a></li>
     
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Achievements</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Contact</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Help</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Email</a></li>
      
      </ul>
    </div>

    <div className="col mb-3">
      <h5>More</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Airline Fees</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Destinations</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Cheap Tickets</a></li>

      </ul>
    </div>
    <div>
      <div className={styles.socials}>
        <img src="../src/assets/img/Footer/Outbound.png" alt="" />
      </div>
    </div>
  </footer>
</div>

</section>
    </>
}