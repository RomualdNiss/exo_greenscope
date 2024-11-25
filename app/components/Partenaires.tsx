// app/components/Partenaires.tsx


import styles from '../styles/Partenaires.module.css';
import '../styles/globals.css';



const Partenaires= () => {

  const partners = [
    './images/partenaires/P.png',
    './images/partenaires/P-1.png',
    './images/partenaires/P-2.png',
    './images/partenaires/P-3.png',
    './images/partenaires/S.png',
  ]; 
  return (
    <div className={styles.carouselcontainer}>
    <div className={styles.carousel}>
      <div className={styles.track}>
        {partners.map((partner, index) => (
          <img
            key={`partner-${index}`}
            src={partner}
            alt={`Partenaire ${index + 1}`}
            className={styles.partnerImage}
          />
        ))}
        {partners.map((partner, index) => (
          <img
            key={`partner-duplicate-${index}`}
            src={partner}
            alt={`Partenaire duplicate ${index + 1}`}
            className={styles.partnerImage}
          />
        ))}
        

      </div>
    </div>
    </div>
  );
  };
  
  export default Partenaires;