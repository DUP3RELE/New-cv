import "./App.css";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Divider1 from "./components/gradientDividers/Divider1";
import Divider2 from "./components/gradientDividers/Divider2";
import Divider3 from "./components/gradientDividers/Divider3";

export default function App(): any {
	return (
		<div className='App'>
			<Home />
			<Divider1 />
			<Projects />
			<Divider2 />
			<Contact />
			<Divider3 />
			<Footer />
		</div>
	);
}
