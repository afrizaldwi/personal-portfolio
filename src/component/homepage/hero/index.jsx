import { Element } from "react-scroll";
import Text from "./Text";
import person from "/images/person.png";

const index = () => {
  return (
    <Element
      name="home"
      className="w-full lg:h-screen flex px-8 lg:px-52 lg:flex-row flex-col justify-between items-center gap-8 mt-8 lg:mt-0 lg:gap-0"
    >
      <div className="lg:order-1 text-center lg:text-left order-2 w-full lg:w-auto">
        <Text />
      </div>
      <div className="lg:order-2 relative">
        <img src={person} alt="person" />
      </div>
    </Element>
  );
};

export default index;
