import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const serviceId = "service_6u67tlh";
		const templateId = "template_2wzkb0m";
		const userId = "FyB3YITMEeoet6d-C";

		const templateParams = {
			from_name: name,
			from_email: email,
			message: message,
		};

		emailjs.send(serviceId, templateId, templateParams, userId).then(
			(response) => {
				console.log("Wiadomość wysłana!", response.status, response.text);
				alert("Wiadomość wysłana pomyślnie!");
			},
			(err) => {
				console.error("Wystąpił błąd:", err);
				alert("Wystąpił błąd przy wysyłaniu wiadomości.");
			}
		);

		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<div>
			<form
				className='contact-form'
				onSubmit={handleSubmit}
			>
				<label className='contact-label'>
					<p>Imię:</p>
					<input
						className='contact-input'
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</label>
				<label className='contact-label'>
					<p>Email:</p>
					<input
						className='contact-input'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label className='contact-label'>
					<p>Wiadomość:</p>
					<textarea
						className='contact-input textarea'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>
				</label>
				<button
					type='submit'
					className='contact-button'
				>
					WYŚLIJ
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
