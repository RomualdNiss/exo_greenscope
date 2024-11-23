// app/components/Consultant.tsx


import styles from '../styles/Consultant.module.css';
import '../styles/globals.css';
import Cardconsult from './Cardconsult';


const Consultant= () => {
    return (
      <div className={`centered ${styles.consultantcontainer}`}>
        <div className={`marge`}>
          <div className={`${styles.title}`}>
            <h2> A solution for everyone</h2>
            <div>
            <button>
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1999 4.99927H12.3999" stroke="#F4F8EF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.20081 8.99951L1.20081 4.99951" stroke="#F4F8EF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.20081 0.999512L1.20081 4.99951" stroke="#F4F8EF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9982 9.99927H4.79822" stroke="#F4F8EF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.9989 13.9993L15.9989 9.99927" stroke="#F4F8EF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.9989 5.99951L15.9989 9.99951" stroke="#F4F8EF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><defs><clipPath id="clip0_919_1709"><rect width="19.2" height="19.2" fill="white" transform="translate(0.799927 0.399902)"/></clipPath></defs>
              </svg>
            </button>
            </div>
          </div>
          <div className='flex'>
            <Cardconsult
              img="img1" 
              title="For Companies" 
              text="Elevate your ESG strategy to its full potential: measure all your impacts, lead CSRD initiatives, assess your risks and shape your sustainable strategy"
            />
            <Cardconsult
              img="img2" 
              title="For Customers" 
              text="Elevate your ESG strategy to its full potential: measure all your impacts, lead CSRD initiatives, assess your risks and shape your sustainable strategy"
            />
            <Cardconsult
              img="img1" 
              title="For Companies" 
              text="Elevate your ESG strategy to its full potential: measure all your impacts, lead CSRD initiatives, assess your risks and shape your sustainable strategy"
            />
          </div>

        </div>
      </div>
    
    );
  };
  
  export default Consultant;