import { Element } from "react-scroll";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const icon = [
  {
    name: "html",
    icon: <FaHtml5 />,
  },
  {
    name: "css",
    icon: <FaCss3Alt />,
  },
  {
    name: "tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "bootstrap",
    icon: <FaBootstrap />,
  },
  {
    name: "javascript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "react",
    icon: <FaReact />,
  },
];

const index = () => {
  return (
    <Element name="skill" className="w-full bg-primary px-8 lg:px-52">
      <h1 className="text-5xl font-bold text-center mt-20 py-8 capitalize">my skill</h1>
      <div className="grid md:grid-cols-2 place-items-center gap-8 p-8 lg:grid-cols-3">
        {icon.map((item, index) => (
          <div
            key={index}
            className="text-xl capitalize gap-4 flex flex-col items-center lg:text-2xl"
          >
            <p className="text-5xl text-primary-content lg:text-7xl">{item.icon}</p>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default index;
