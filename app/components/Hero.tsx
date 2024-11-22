// app/components/Hero.tsx


import styles from '../styles/Header.module.css';
import '../styles/globals.css';
import DoubleImage from './doubleImage';


const Hero= () => {
    return (
    <div className='marge'>
        <DoubleImage />
        <div className='flex'>
          <h1> Where ESG can be leveraged</h1>
          <img src="/images/logo2.png" alt="Logo"></img>
        </div>
    </div>
    );
  };
  
  export default Hero;