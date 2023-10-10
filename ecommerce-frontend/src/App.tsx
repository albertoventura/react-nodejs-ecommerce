import ContextProvider from "./core/context/context";
import { RouterProvider } from "react-router-dom";
import { router } from "./core/routes/routes";
import Routess from "./core/routes/routess";
function App() {


  return (
    <ContextProvider>
      {/* <RouterProvider router={router} /> */}
      <Routess />
    </ContextProvider>
  )
}

export default App
