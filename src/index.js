import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './authenticate/login';
import Register from './authenticate/register.jsx';
import GeneralInstructions from './dashboard/general_instructions.jsx';
import AdditionalInstructions from './dashboard/additonal_instructions.jsx';
import ExamPage from './dashboard/exam_page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Login></Login>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/generalinstruction',
        element:<GeneralInstructions></GeneralInstructions>
      },
      {
        path:'/additionalinstructions',
        element:<AdditionalInstructions></AdditionalInstructions>
      },
      {
        path:'/exampage',
        element:<ExamPage></ExamPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
