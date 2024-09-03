import "./App.css";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Divider1 from "./components/gradientDividers/Divider1";

export default function App(): any {
	return (
		<div className='App'>
			<Home />
			<Divider1 />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
