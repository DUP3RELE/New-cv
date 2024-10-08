import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
	return (
		<div className='section contact glowing-background'>
			<h1 className='title1'>KONTAKT</h1>
			<div className='contact-container'>
				<ContactInfo />
			</div>
			<div className='contact-container'>
				<ContactForm />
			</div>
		</div>
	);
}
