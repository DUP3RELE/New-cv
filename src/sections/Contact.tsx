import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
	return (
		<div className='section contact'>
			<h1 className='title1'>SKONTAKTUJ SIĘ ZE MNĄ</h1>
			<h1 className='title2'>title2</h1>
			<div className='contact-container'>
				<ContactForm />
			</div>
			<div className='contact-container'>
				<ContactInfo />
			</div>
		</div>
	);
}
