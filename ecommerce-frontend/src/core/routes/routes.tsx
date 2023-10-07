import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <>a</>
            }
        ],
    }
]);

export { router };