import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import bg from "./assets/img/bg.png";
import "./App.css";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="relative min-w-screen min-h-screen backgroundOverlay text-gray-100">
      <div
        className="absolute h-full w-full bg-no-repeat bg-cover blur-xl opacity-50"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
