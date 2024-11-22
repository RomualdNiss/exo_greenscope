// app/components/DoubleImage.tsx


import styles from '../styles/DoubleImage.module.css';
import '../styles/globals.css';


const DoubleImage= () => {
    return (
<div className={styles.container}>
<img src="/images/hero1.png" alt="image d'illustration"></img>
<img src="/images/hero2.png" alt="Graphique d'illustration"></img>
</div>
    );
  };
  
  export default DoubleImage;