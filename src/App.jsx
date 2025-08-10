import { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/Scrolltop";
// import { AnimatePresence, motion } from "framer-motion";
// import Navbar from "./components/shared/Navbar";
function App() {
  // const location = useLocation();
  const [cart, setCart] = useState([]);

  return (
    <>
      <ScrollToTop />
      <Outlet
        context={{
          cart,
          setCart,
        }}
      />
    </>
  );
}

export default App;
