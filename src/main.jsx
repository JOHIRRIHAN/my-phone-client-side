import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';
import Phones from './Phones.jsx';
import Home from './Home.jsx';
import SinglePhone from './SinglePhone.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/phones",
        element: <Phones />,
        loader: ()=> fetch('http://localhost:3000/phones')
      },
      {
        path: "/phones/:id",
        element: <SinglePhone />,
        loader: ({params})=> fetch(`http://localhost:3000/phones/${params.id}`)
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
