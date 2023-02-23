import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

const App = () => {
	return <Counter />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
