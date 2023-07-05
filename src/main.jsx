import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp'
import './index.css'
import { MainApp } from './09-useContext/MainApp'
import { LoginPage } from './09-useContext/LoginPage';
import { HomePage } from './09-useContext/HomePage';
import { AboutPage } from './09-useContext/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children:[
      {
        path: "/",
        element:<HomePage/>,
      },
      {
        path: "about",
        element:<AboutPage/>,
      },
      {
        path: "login",
        element:<LoginPage/>,
      },
      {
        path: "*",
        element:<Navigate to="/" replace/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)