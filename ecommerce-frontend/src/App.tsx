import ContextProvider from "./core/context/context";
import { RouterProvider } from "react-router-dom";
import { router } from "./core/routes/routesss";
import Routers from "./core/routes/routes";
function App() {


  return (
    <ContextProvider>
      {/* <RouterProvider router={router} /> */}
      <Routers />
    </ContextProvider>
  )
}

export default App
