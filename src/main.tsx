import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

(() => {
	try {
		const stored = localStorage.getItem("theme");
		const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
		const theme = stored === "light" || stored === "dark" ? stored : (prefersDark ? "dark" : "light");
		if (theme === "dark") document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
	} catch (e) {
	}
})();

createRoot(document.getElementById("root")!).render(<App />);
