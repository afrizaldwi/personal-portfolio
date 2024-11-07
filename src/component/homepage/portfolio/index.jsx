import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import data from "../../portfolio/datas";

const index = () => {
	return (
		<Element name="portfolio" className="w-full px-8 lg:px-52">
			<h1 className="text-5xl font-bold text-center mt-20 py-8 capitalize">my portfolio</h1>
			<div className="grid xl:grid-cols-2 place-items-center gap-8 p-8">
				{data.map((item, index) => (
					<div className="card lg:card-side bg-base-100 shadow-xl" key={index}>
						<figure>
							<img src={item.src} alt={item.name} className="w-full lg:w-96 lg:h-96" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">{item.name}</h2>
							<p>{item.desc}</p>
							<div className="card-actions justify-end">
								<Link to={item.github} target="_blank" className="btn btn-neutral">
									Github
								</Link>
								<Link
									to={item.link}
									target={item.link == "https://afrizaldwi.github.io" ? "_self" : "_blank"}
									className="btn btn-primary">
									View
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex justify-center items-center my-4">
				<Link to={"/portfolio"} className="btn btn-outline lg:btn-lg btn-primary capitalize">
					see all
				</Link>
			</div>
		</Element>
	);
};

export default index;
