import { useState } from "react";
import Modal from "../components/Modal";
import Card from "../components/Card";
import github from "../icons/github.svg";
import gastrohero from "../icons/trash.svg";
import travelbuddy from "../icons/map.svg";
import ripperdock from "../icons/dollar-sign.svg";
import linkedin from "../icons/linkedin.svg";
import typescript from "../icons/icons8-typescript.svg";
import reactIcon from "../icons/react.svg";
import nextjsIcon from "../icons/icons8-nextjs.svg";
import mongoDBIcon from "../icons/mongodb-icon.svg";
import postmanIcon from "../icons/icons8-postman-api.svg";
import vsStudioIcon from "../icons/icons8-visual-studio.svg";
interface CardData {
	id: number;
	title: string;
	icon: string;
	description: string;
	technologies: { name: string; icon: string }[];
	links: { label: string; url: string; icon: string }[];
}

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

	const cardData: CardData[] = [
		{
			id: 1,
			title: "GastroHero",
			icon: gastrohero,
			description: "Opis projektu 1 - to jest przykładowy projekt.",
			technologies: [
				{ name: "React", icon: github },
				{ name: "TypeScript", icon: linkedin },
			],
			links: [
				{ label: "GitHub", url: "https://github.com/project1", icon: github },
				{
					label: "Live Demo",
					url: "https://project1-demo.com",
					icon: linkedin,
				},
			],
		},
		{
			id: 2,
			title: "Ripperdock shop",
			icon: ripperdock,
			description: "Opis projektu 2 - drugi przykładowy projekt.",
			technologies: [
				{ name: "Typescript", icon: typescript },
				{ name: "React", icon: reactIcon },
				{ name: "NextJS13", icon: nextjsIcon },
				{ name: "MongoDB", icon: mongoDBIcon },
				{ name: "Github", icon: github },
				{ name: "Postman", icon: postmanIcon },
				{ name: "VsStudio", icon: vsStudioIcon },
			],
			links: [
				{ label: "GitHub", url: "https://github.com/project2", icon: github },
				{
					label: "Live Demo",
					url: "https://project2-demo.com",
					icon: linkedin,
				},
			],
		},
		{
			id: 3,
			title: "TravelBuddy",
			icon: travelbuddy,
			description: "Opis projektu 2 - drugi przykładowy projekt.",
			technologies: [{ name: "Node.js", icon: github }],
			links: [
				{ label: "GitHub", url: "https://github.com/project2", icon: github },
				{
					label: "Live Demo",
					url: "https://project2-demo.com",
					icon: linkedin,
				},
			],
		},
	];

	return (
		<section className='section projects'>
			<h1 className='title1'>PROJEKTY</h1>
			<div className='title2'>
				<img
					className='linkIcon'
					src={github}
					alt='github'
					width={50}
					height={50}
				/>
				<img
					className='linkIcon'
					src={linkedin}
					alt='linkedin'
					width={50}
					height={50}
				/>
			</div>
			<div id='cards'>
				{cardData.map((data) => (
					<Card
						key={data.id}
						title={data.title}
						icon={data.icon}
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
								<h4>Technologie:</h4>
								<div>
									{selectedCard.technologies.map((tech) => (
										<img
											className='iconStyle'
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
												src={link.icon}
												alt={link.label}
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
