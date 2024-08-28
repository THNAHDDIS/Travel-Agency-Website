import { Banner } from "./Banner"
import { Header } from "./Header"
import styles from "../styles/Hero/Hero.module.css"


export const Hero = () =>{

  return <>
   <div className={styles.heroContainer}>
    <Header></Header>
    <Banner></Banner>
   </div>
  
  
  </>
} 