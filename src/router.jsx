import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "./component/global/SiteLayout";
import Homepage from "./pages/Homepage";
import Certificates from "./pages/Certificates";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  [
    {
      element: <SiteLayout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "/index.html",
          element: <Homepage />,
        },
        {
          path: "/certificate",
          element: <Certificates />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/portfolio/:slug",
          element: <ProjectDetails />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export default router;
