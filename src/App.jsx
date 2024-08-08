import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About';
import Contact from './component/Contact/Contact';
import Portfolio from './component/Portfolio/Portfolio';
import Home from './component/Home/Home';
import Layout from './component/Layout/Layout';

export default function App() {
  const myRouter = createBrowserRouter(
   
     [
      {
        path: "/first-react-project",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "Home",
            element: <Home />,
          },
          {
            path: "About",
            element: <About />,
          },
          {
            path: "Contact",
            element: <Contact />,
          },
          {
            path: "Portfolio",
            element: <Portfolio />,
          },
        ],
      },
    ],
  );

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}
