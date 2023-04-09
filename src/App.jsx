import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-524px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
