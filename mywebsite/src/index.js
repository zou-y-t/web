import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './app/HomeSite/home';
import User from './app/UserSite/user';
import Contest from './app/ContestSite/contest';
import ErrorPage from './app/ErrorSite/errorPage';
import Tictactoe from './app/ContestSite/theContests/tic-tac-toe'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"contest",
        element:<Contest/>,
        children:[
          {
            path:"tictactoe",
            element:<Tictactoe/>,
          }
        ]
      },
      {
        path:"user",
        element:<User/>,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
