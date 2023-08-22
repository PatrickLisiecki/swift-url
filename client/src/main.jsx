import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import "./assets/styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthProvider from "./contexts/AuthContext";

// Pages
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import ProtectedRoute from "./routes/ProtectedRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/home",
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
