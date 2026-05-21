import { LanguageProvider } from './context/LanguageContext';
import Navbar              from './components/Navbar';
import Hero                from './components/Hero';
import About               from './components/About';
import AccommodationPhotos from './components/AccommodationPhotos';
import TouristSpots        from './components/TouristSpots';
import MapSection          from './components/MapSection';
import CTA                 from './components/CTA';
import Footer              from './components/Footer';
import WhatsAppButton      from './components/WhatsAppButton';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <AccommodationPhotos />
        <TouristSpots />
        <MapSection />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}
