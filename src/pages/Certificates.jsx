import Data from "../component/certificates/Data";
import ThemeContextProvider from "../contexts/ThemeContext";

const Certificates = () => {
	return (
		<ThemeContextProvider>
			<Data />
		</ThemeContextProvider>
	);
};

export default Certificates;
