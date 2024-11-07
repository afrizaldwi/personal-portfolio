import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Data = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const certificateNumber = 10;

		const newData = [];
		for (let i = 1; i <= certificateNumber; i++) {
			newData.push({
				alt: `certificate ${i}`,
				src: `/images/certificates/certificate ${i}.png`,
			});
		}

		setData(newData);
	}, []);

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
			<div className="grid lg:grid-cols-3 gap-8">
				<PhotoProvider>
					{data.map((item, index) => (
						<div key={index} className="cursor-pointer hover:brightness-75 transition">
							<PhotoView src={item.src}>
								<img src={item.src} alt={item.alt} />
							</PhotoView>
						</div>
					))}
				</PhotoProvider>
			</div>
		</div>
	);
};

export default Data;
