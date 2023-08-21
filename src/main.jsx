import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import "./assets/styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import SignUp from "./pages/signup/SignUp";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
