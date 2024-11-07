import { Link } from "react-router-dom";
import data from "./datas";

const Data = () => {
	return (
		<div className="mx-8 lg:mx-52 relative">
			<div className="text-sm lg:text-lg my-8 breadcrumbs">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/certificate">Certificates</Link>
					</li>
				</ul>
			</div>
			<div className="">
				{data.map((item, index) => (
					<div className="my-8 card lg:card-side bg-base-100 shadow-xl" key={index}>
						<figure>
							<img src={item.src} alt={item.name} className="w-full lg:w-96 lg:h-96" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">{item.name}</h2>
							<p>{item.desc}</p>
							<div className="card-actions justify-end">
								<Link to={item.link} target="_blank" className="btn btn-primary">
									View
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Data;
