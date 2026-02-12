import ScrollLinked from '@/components/common/ScrollLinked';
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
      <ScrollLinked>
        <Navbar />
        <main>
          <Header />
          <AboutSection />
          <CVSection />
          <PortfolioSection />
        </main>
        <Footer />
      </ScrollLinked>
    </>
  );
};

export default HomePage;
