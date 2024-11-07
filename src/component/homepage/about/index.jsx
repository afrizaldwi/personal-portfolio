import { Element } from "react-scroll";
import Sosial from "./Sosial";

const index = () => {
	return (
		<Element
			name="about"
			className="w-full flex flex-col gap-8 px-8 lg:h-screen lg:justify-center lg:items-center lg:px-52">
			<h1 className="text-5xl font-bold text-center mt-20 lg:m-0">About Me</h1>
			<div className="lg:grid grid-rows-2 place-items-center gap-24">
				<div className="flex flex-col gap-4">
					<h2 className="text-secondary text-3xl capitalize font-semibold text-center">welcome</h2>
					<p className="text-lg text-center lg:text-2xl">
						Hi, my name is Afrizal Dwi Ahmad and i am a student of SMK Negeri 1 Cerme. I am 19 years
						old. I created this website to showcase my skills.
					</p>
				</div>
				<Sosial />
			</div>
		</Element>
	);
};

export default index;
