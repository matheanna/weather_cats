import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './style/index.css';

import App from './components/App';
import RegistrationForm from './components/RegistrationForm';
import CurrentWeather from './components/CurrentWeather';
import LoginForm from './components/LoginForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/register",
        element: <RegistrationForm />
      },
      {
        path: "/current/:cityName",
        element: <CurrentWeather />,
      },
      {
        path: "/login",
        element: <LoginForm />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
