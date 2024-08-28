import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App: React.FC = () => {
	useEffect(() => {
		const sections = document.querySelectorAll(".section");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("active");
					} else {
						entry.target.classList.remove("active");
					}
				});
			},
			{ threshold: 0.5 }
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	return (
		<div className='App'>
			<Home />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
