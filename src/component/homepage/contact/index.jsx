import { Element } from "react-scroll";
import person from "/images/person 2.jpg";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const index = () => {
  const whatsappLink = "https://wa.me/6281917052146";
  const mailLink = "mailto:afrizaldwiariz@egmail.com";

  return (
    <Element name="contact" className="w-full px-8 py-12 lg:px-52">
      <h1 className="text-5xl font-bold text-center mt-20 py-12 capitalize">contact me</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="w-full flex justify-center">
          <img src={person} alt="person" className="lg:w-2/3 rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-3xl capitalize">Feel free to contact me</p>
          <div className="flex gap-4">
            <Link to={whatsappLink} target="_blank">
              <FaWhatsapp className="text-3xl lg:text-6xl" />
            </Link>
            <Link to={mailLink} target="_blank">
              <MdOutlineMail className="text-3xl lg:text-6xl" />
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default index;
