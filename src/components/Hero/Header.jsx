import {  useState } from "react";
import styles from "../styles/Hero/Header.module.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Header = () =>{
  
    const[lang,setLang] = useState("EN");
   

    
    return <>
    <div className={styles.header}>
        
       <div className={styles.list}>
         <p>Destinations</p>
         <p>Hotels</p>
         <p>Flights</p>
         <p>Bookings</p>
         
       </div>
       
       <div className={styles.login}>
       <p>Login</p>
       <button className = {styles.signBtn}>Sign up</button>
       <div className="dropdown">
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {lang}
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><a className="dropdown-item active" href="#" onClick={()=> {setLang("ES")}}>ES</a></li>
    <li><a className="dropdown-item" href="#"  onClick={()=> {setLang("JP")}}>JP</a></li>
    <li><a className="dropdown-item" href="#"  onClick={()=> {setLang("IN")}}>IN</a></li>

    
  </ul>
    </div>
       </div>
     
     
    </div>
 
    </>
} 