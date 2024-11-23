import Image from "next/image";
import styles from "../styles/page.module.css";

import Header from '../components/header';
import Hero from "../components/Hero";
import Partenaires from "../components/Partenaires";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Partenaires />
      </main>
    </div>
  );
}
