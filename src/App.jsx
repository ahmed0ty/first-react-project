import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './component/Contact/Contact';
import Portfolio from './component/Portfolio/Portfolio';
import Home from './component/Home/Home';

export default function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/Home" />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/Portfolio",
      element: <Portfolio />,
    },
  ], {
    basename: '/first-react-project',
  });

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}
