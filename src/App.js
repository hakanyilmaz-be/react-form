import "./App.css";
import { ToastContainer } from "react-toastify";
import { StoreProvider } from "./store";
import ConfigBody from "./config-body/ConfigBody";

const App = () => {
  return (
    <StoreProvider>
      <ConfigBody />
      <ToastContainer />
    </StoreProvider>
  );
};

export default App;
