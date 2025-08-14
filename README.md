# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![Screenshot preview of my Audiophile solution](public\assets\preview.png)

### Links

- [View code](https://github.com/fidelisobioma/audiophile.git)
- [View live site](https://audiophile-peach.vercel.app/)

## My process

### Built with

- JSX
- [Tailwind CSS](https://tailwindcss.com/) - CSS library
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

It is challenging to build the Audiophile e-commerce website, but in the end, I was able to complete the project and master certain concepts in React, which was the major reason I took this challenge, and at the same time, have something solid to add to my portfolio.

Below is what I learned:

- How the useState hook in React works

```js
const [value, setValue] = useState("");
```

- How the useEffect hook in React works

```js
useEffect(() => {}, []);
```

- How to handle client-side routing using the React router

```js
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
import Loading from "./components/Loading.jsx";

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
      { path: "/loading", element: <Loading /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
```

- Using useOutletContext to share data across components avoiding props drilling

```js
const { value, setValue handleClick} = useOutletContext();
```

- How to render dynamic contents based on the the URL with the useParams hook

```js
const params = useParams();
```

### Continued development

Handling form validation is one of the things I found challenging. Writing your own Form validation with JavaScript can be difficult. The built-in HTML form validation doesn't give you the granular control, especially when you are trying to meet design requirements. However, after much research, I found and learned how to easily validate forms using React hook form. Though I have not gained mastery of how to use the React hook form. This is the area I will practice more and definitely continue to use it in my projects to master the React hook form.

### Useful resources

- [Odin project](https://www.theodinproject.com/) - The Odin project helped me learn JavaScript and React. I have been falling back to it throughout this project whenever I got confused. I do recommend it to anyone who is finding it difficult to learn JavaScript and React.

- [React hook form](https://react-hook-form.com/) - Are you tired of writing your own form validation or using the HTML built-in form validation API then I recommend you learn and use the React hook form.

## Author

- Frontend Mentor - [@fidelisobioma](https://www.frontendmentor.io/profile/fidelisobioma)
- Twitter - [@fidexcode](https://www.twitter.com/fidexcode)
