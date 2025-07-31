import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Headphones from "./components/Headphones.jsx";
import Speakers from "./components/Speakers.jsx";
import Earphones from "./components/Earphones.jsx";
import Productdetail from "./components/productdetail.jsx";
import Checkout from "./components/Checkout.jsx";

// import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/headphones/:id", element: <Headphones /> },
      { path: "/speakers/:id", element: <Speakers /> },
      { path: "/earphones/:id", element: <Earphones /> },
      { path: "/productdetail/:slug", element: <Productdetail /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
