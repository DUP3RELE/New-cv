import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
