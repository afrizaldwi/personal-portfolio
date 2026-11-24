import Hero from "../component/homepage/hero";
import About from "../component/homepage/about";
import Skills from "../component/homepage/skill";
import FeaturedProjects from "../component/homepage/portfolio";
import Certifications from "../component/homepage/certificates";
import Contact from "../component/homepage/contact";

function Homepage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <About />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}

export default Homepage;
