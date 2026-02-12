import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import {
  AboutSection,
  CVSection,
  Header,
  PortfolioSection,
} from '@/components/pages/home';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <AboutSection />
        <CVSection />
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
