import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Agency from "./components/Agency";
import ShowCase from "./components/ShowCase";
import Mission from "./components/Mission";
import Counter from "./components/Counter";
import Logo from "./components/Logo";
import CardCarousel from "./components/CardCarousel";
import Call from "./components/Call";
const App = () => {
  return (
    <section
      className="h-screen relative bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <HeroSection />
      <Features />
      <AboutUs />
      <Agency />
      <Mission />
      <ShowCase />
      <Counter />
      <Logo />
      <CardCarousel />
      <Call />
    </section>
  );
};

export default App;
