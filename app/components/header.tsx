// app/components/Header.tsx

import Link from "next/link";
import styles from '../styles/Header.module.css';
import '../styles/globals.css';
import Cta from './cta';
import Dropdown from "./dropdown";

const Header = () => {
    return (
      <header className={styles.header}>
        <div className={`marge flex ${styles.divheader}`}>
            <img src="./images/Logo.png" alt="Logo Greenscope" width="215px" height="26px"></img>
        <nav>
          <ul className={styles.navList}>
            <li><Link href="/">Solution</Link> <Dropdown/></li>
            <li><Link href="/about">Platform</Link> <Dropdown/></li>
            <li><Link href="/contact">Ressources</Link></li>
            <li><Link href="/contact">About</Link></li>
          </ul>
        </nav>
        <div></div>
        <Cta text="Demander une démo" mode="clair" height={40}></Cta>
        </div>
        
      </header>
    );
  };
  
  export default Header;