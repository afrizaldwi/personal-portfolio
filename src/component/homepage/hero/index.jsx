import HeroText from "./Text";
import profile from "../../../data/profile";

function Hero() {
  return (
    <section id="home" tabIndex={-1} aria-label="Introduction" className="section-shell hero-layout">
      <HeroText />
      <img
        src={import.meta.env.BASE_URL + "images/person.png"}
        alt={`Portrait of ${profile.name}`}
        width="349"
        height="349"
        loading="eager"
        className="hero-portrait"
      />
    </section>
  );
}

export default Hero;
