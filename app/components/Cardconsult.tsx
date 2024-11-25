import '../styles/globals.css';
import styles from  '../styles/Carteconsult.module.css'; 
type CardconsultProps = {
    img: string; // Image de la carte
    title: string; // Titre de la carte
    text: string; // Texte de la carte
  };
  
  const Cardconsult: React.FC<CardconsultProps> = ({ img, title, text }) => {

  
    return (
      <div className={`${styles.card}`}>
        <img src={`./images/cards/${img}.png`} alt={`Image de ${title}`} height="500px" />
        <div className={`${styles.details}`}>
          <div className={`flex ${styles.detailsheader}`}>
             <img src="./images/logo2blanc.png" alt="Logo de Greenscope blanc" width="32px" height="32px"/>
          <h3>{title}</h3>
          </div>
          <p>{text}</p>
        </div>
      
      </div>
    );
  };
  
  export default Cardconsult;