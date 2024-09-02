import "./App.css";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App(): any {
	return (
		<div className='App'>
			<Home />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
