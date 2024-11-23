import { StrictMode } from 'react'
import './index.css'
import ReactDOM from 'react-dom';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import GadgetCards from './components/GadgetCards.jsx';
import GadgetDetails from './components/GadgetDetails.jsx';
import Dashboard from './components/Dashboard.jsx';
import CartContent from './components/CartContent.jsx';
import Statistics from './components/Statistics.jsx';
import WishContent from './components/WishContent.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import { HelmetProvider } from 'react-helmet-async';
import About from './components/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('../category.json'),

        children:[
          {
            path: '/',
            element: <GadgetCards></GadgetCards>,
            loader: ()=> fetch('../gadget.json'),
          },
          {
            path: '/category/:category',
            element: <GadgetCards></GadgetCards>,
            loader: ()=> fetch('../gadget.json'),
          }
        ]
      },
      {
        path: '/gadget/:id',
        element: <GadgetDetails></GadgetDetails>,
        loader: ()=> fetch('../gadget.json'),
      },
      
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            index: true, 
            element: <CartContent></CartContent>,
          },
          {
            path: 'cart',
            element: <CartContent></CartContent> ,
          },
          {
            path: 'wishlist',
            element: <WishContent></WishContent>,
          }
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)


