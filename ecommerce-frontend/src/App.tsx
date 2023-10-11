import ContextProvider from "./core/context/context";
import Routers from "./core/routes/routes";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ContextProvider>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <Routers />
    </ContextProvider>
  )
}

export default App
