import '../App.css';
import Header from './header';
import Footer from './footer';
import HeroSection from './heroSection';
import FeatureSection from './featureSection';
function Home() {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Header />
      {/* Main content section */}
      <div className="flex-1 flex flex-col justify-between">
        <HeroSection/>
        <FeatureSection/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
