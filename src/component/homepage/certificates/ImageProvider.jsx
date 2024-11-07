import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ImageProvider = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const certificateNumber = 4;

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
		<PhotoProvider>
			{data.map((item, index) => (
				<div key={index} className="cursor-pointer hover:brightness-75 transition">
					<PhotoView src={item.src}>
						<img src={item.src} alt={item.alt} />
					</PhotoView>
				</div>
			))}
		</PhotoProvider>
	);
};

export default ImageProvider;
