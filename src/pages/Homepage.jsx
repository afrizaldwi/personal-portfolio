import Navbar from "../component/global/navbar/Navbar";
import ThemeContextProvider from "../contexts/ThemeContext";
import Hero from "../component/homepage/hero";
import About from "../component/homepage/about";
import Skill from "../component/homepage/skill";
import Portfolio from "../component/homepage/portfolio";
import Certificates from "../component/homepage/certificates";
import Contact from "../component/homepage/contact";
import Footer from "../component/homepage/footer";

const Homepage = () => {
  return (
    <ThemeContextProvider>
      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Portfolio />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
};

export default Homepage;
