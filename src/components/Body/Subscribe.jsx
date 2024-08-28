import styles from "../styles/Body/Subscribe.module.css";
import { MdOutlineMail } from "react-icons/md";

export const Subscribe = () => {
  return (
    <section className={styles.section5Main} data-aos="fade-up">
      <div className={styles.design} >
        <form>
          <h5>Subscribe to get information, latest news, and other interesting offers about Jadoo</h5>
          <div className={`${styles.inputContainer} d-flex flex-column flex-sm-row w-100 gap-2`}>
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <div className={styles.inputWrapper}>
            
              <input 
                id="newsletter1"
                type="text"
                className={`htmlForm-control ${styles.inputField}`}
                placeholder="Your Email"
              />
            </div>
            <button className={styles.btn} style={{background: "linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)"}} type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
}
