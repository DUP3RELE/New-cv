import smileIcon from "../icons/smile.svg";

export default function Footer(): any {
	return (
		<footer className='section footer'>
			<div className='left-half-footer'>
				<div className='footer-link-box'>
					<a
						className='footer-links'
						href='https://www.linkedin.com/in/krystian-%C5%BCywczak-0152b0287/'
						target='_blank'
						rel='noreferrer'
						title='Strona Github'
					>
						Linkedin
					</a>
					<a
						className='footer-links'
						href='https://github.com/DUP3RELE?tab=overview&from=2024-09-01&to=2024-09-17'
						target='_blank'
						rel='noreferrer'
						title='Strona Github'
					>
						Github
					</a>
				</div>
			</div>
			<div className='right-half-footer'>
				<img
					src={smileIcon}
					alt='smile icon'
					className='smileIcon'
				/>
			</div>
			<p className='footer-text'>
				© 2024 Krystian Żywczak. All rights reserved.
			</p>
		</footer>
	);
}
