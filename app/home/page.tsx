import '../styles/globals.css';
import Header from '../components/header';
import Hero from "../components/Hero";
import Partenaires from "../components/Partenaires";
import Consultant from '../components/Consultant';

export default function Home() {
  return (
    <div style={{
      height:"100%",
    }}>


      <Header />
      <main className='centered'>
        <Hero />
        <Partenaires />
        <Consultant />
      </main>
    </div>
  );
}
