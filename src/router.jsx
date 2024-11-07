import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Certificates from "./pages/Certificates";
import Portfolio from "./pages/Portfolio";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "/index.html",
		element: <Homepage />,
	},
	{
		path: "certificate",
		element: <Certificates />,
	},
	{
		path: "portfolio",
		element: <Portfolio />,
	},
]);

export default router;
