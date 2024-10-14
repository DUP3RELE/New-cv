import { useState } from "react";
import Modal from "../components/Modal";
import Card from "../components/Card";
import github from "../icons/github.svg";
import linkedin from "../icons/linkedin.svg";
import { cardData, CardData } from "../components/CardData";

export default function Projects() {
	const [isModalVisible, setModalVisible] = useState<boolean>(false);
	const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

	const handleCardClick = (cardData: CardData) => {
		setSelectedCard(cardData);
		setModalVisible(true);
	};

	const handleCloseModal = () => {
		setModalVisible(false);
		setSelectedCard(null);
	};

	return (
		<section className='section projects'>
			<h1 className='title1'>PROJEKTY</h1>
			<div className='title2'>
				<a
					href='https://github.com/DUP3RELE?tab=overview&from=2024-09-01&to=2024-09-17'
					target='_blank'
					rel='noreferrer'
					title='Strona Github'
				>
					<img
						className='linkIcon'
						src={github}
						alt='github'
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/krystian-%C5%BCywczak-0152b0287/'
					target='_blank'
					rel='noreferrer'
					title='Strona linedin'
				>
					<img
						className='linkIcon'
						src={linkedin}
						alt='linkedin'
					/>
				</a>
			</div>
			<div id='cards'>
				{cardData.map((data) => (
					<Card
						id={data.id}
						key={data.id}
						title={data.title}
						icon={data.icon}
						className={`card card-${data.id}`}
						onCardClick={() => handleCardClick(data)}
					/>
				))}
			</div>

			<Modal
				isVisible={isModalVisible}
				onClose={handleCloseModal}
			>
				{selectedCard && (
					<div className='modal-container'>
						<h2>{selectedCard.title}</h2>
						<div className='modal-container__1'>
							<p>{selectedCard.description}</p>
						</div>
						<div className='second-third-wrapper'>
							<div className='modal-container__2'>
								<h4>Użyte technologie:</h4>
								<div>
									{selectedCard.technologies.map((tech) => (
										<img
											className='iconStyle'
											title={tech.name}
											src={tech.icon}
											alt={tech.name}
											width={30}
											height={30}
										/>
									))}
								</div>
							</div>
							<div className='modal-container__3'>
								<h4>Linki:</h4>
								<div>
									{selectedCard.links.map((link) => (
										<a
											href={link.url}
											target='_blank'
											rel='noopener noreferrer'
										>
											<img
												className='iconStyle'
												src={link.icon}
												alt={link.label}
												title={link.label}
												width={30}
												height={30}
											/>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				)}
			</Modal>
		</section>
	);
}
