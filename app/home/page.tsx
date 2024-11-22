import Image from "next/image";
import styles from "../styles/page.module.css";

import Header from '../components/header';
import Hero from "../components/Hero";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <h1>Welcome to my Next.js App!</h1>
        {/* Ton contenu ici */}
      </main>
    </div>
  );
}
