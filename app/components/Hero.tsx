// app/components/Hero.tsx


import styles from '../styles/Hero.module.css';
import '../styles/globals.css';
import DoubleImage from './doubleImage';
import Cta from './cta';


const Hero= () => {
    return (
    <div className='marge'>
        <div className={styles.doubleImage}>
          <DoubleImage />
        </div>
        <div className={`flex ${styles.details}`}>
          <div>
            <h1> Where ESG <br/> can be leveraged</h1>
          </div>
          <div className={`flex ${styles.logo2}`}>
            <img src="./images/logo2.png" alt="Logo" height="64px" ></img>
          </div>
          <div className={`flex ${styles.herodetails}`}>
            <p>+500 companies use Greenscope </p>
            <Cta text="Get a demo" mode="fonce" height={50}></Cta>

          </div>
        </div>
    </div>
    );
  };
  
  export default Hero;