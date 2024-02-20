import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Welcome from "./Pages/Welcome.jsx";
import Home from "./Pages/Home.jsx";
import SearchPage from "./Pages/Search.jsx";
import Schedule from "./Pages/Schedule.jsx";
import ClassDetails from "./Pages/ClassDetails.jsx";
import ErrorView from "./Pages/ErrorView.jsx";
import Login from "./Pages/Login.jsx";
import Navigation from "./components/Navigation.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/class/:id" element={<ClassDetails />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/login" element={<Login />} />
      <Route path="/navigation" element={<Navigation />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
