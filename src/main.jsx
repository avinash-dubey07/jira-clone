import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
// import SideBar from "./components/SideBar.jsx";
// import NotFoundPage from "./components/pages/NotFound.jsx";
// import MainBoard from "./MainBoard.jsx";
// import Kanban from "./components/Kanban.jsx";
import "./index.css";
//import "bootstrap/dist/css/bootstrap.min.css";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: '/sidebar',
//     element: <SideBar />
//   },
//   {

//   }

// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
