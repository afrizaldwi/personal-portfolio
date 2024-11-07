import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import "react-photo-view/dist/react-photo-view.css";
import ImageProvider from "./ImageProvider";

const index = () => {
	return (
		<Element name="certificate" className="w-full px-8 lg:px-52">
			<h1 className="text-5xl font-bold text-center mt-20 py-8 capitalize">my certificates</h1>
			<div className="grid xl:grid-cols-2 place-items-center gap-8 p-8">
				<ImageProvider />
			</div>
			<div className="w-full flex justify-center items-center my-4">
				<Link to={"/certificate"} className="btn btn-outline lg:btn-lg btn-primary capitalize">
					see all
				</Link>
			</div>
		</Element>
	);
};

export default index;
