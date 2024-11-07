import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Text = () => {
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ["welcome to my portfolio", "my name is", "afrizal dwi ahmad"],
      smartBackspace: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <p className="lg:text-3xl text-xl">Hi, 👏</p>
      <h1 className="lg:text-6xl text-2xl my-4 text-primary font-semibold">{"I'm Afrizal"}</h1>
      <span ref={ref} className="capitalize lg:text-3xl text-xl" />
    </>
  );
};

export default Text;
