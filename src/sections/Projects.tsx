import { useState } from "react";
import Modal from "../components/Modal";
import Card from "../components/Card";
interface CardData {
	id: number;
	title: string;
	description: string;
	technologies: string[]; // Lista technologii
	links: { label: string; url: string }[]; // Lista linków
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
			title: "Projekt 1",
			description: "Opis projektu 1 - to jest przykładowy projekt.",
			technologies: ["React", "TypeScript", "CSS"],
			links: [
				{ label: "GitHub", url: "https://github.com/project1" },
				{ label: "Live Demo", url: "https://project1-demo.com" },
			],
		},
		{
			id: 2,
			title: "Projekt 2",
			description: "Opis projektu 2 - drugi przykładowy projekt.",
			technologies: ["Node.js", "Express", "MongoDB"],
			links: [
				{ label: "GitHub", url: "https://github.com/project2" },
				{ label: "Live Demo", url: "https://project2-demo.com" },
			],
		},
		{
			id: 3,
			title: "Projekt 3",
			description: "Opis projektu 3 - trzeci przykładowy projekt.",
			technologies: ["Vue", "JavaScript", "Bootstrap"],
			links: [
				{ label: "GitHub", url: "https://github.com/project3" },
				{ label: "Live Demo", url: "https://project3-demo.com" },
			],
		},
	];

	return (
		<section className='section projects'>
			<h1 className='title1'>PROJEKTY</h1>
			<div id='cards'>
				{cardData.map((data) => (
					<Card
						key={data.id}
						title={data.title}
						content={data.description} // Przekazujemy krótki opis do karty
						onCardClick={() => handleCardClick(data)}
					/>
				))}
			</div>

			{/* Modal */}
			<Modal
				isVisible={isModalVisible}
				onClose={handleCloseModal}
			>
				{selectedCard && (
					<div>
						<h2>{selectedCard.title}</h2>
						<p>{selectedCard.description}</p>
						<h4>Technologie:</h4>
						<ul>
							{selectedCard.technologies.map((tech, index) => (
								<li key={index}>{tech}</li>
							))}
						</ul>
						<h4>Linki:</h4>
						<ul>
							{selectedCard.links.map((link, index) => (
								<li key={index}>
									<a
										href={link.url}
										target='_blank'
										rel='noopener noreferrer'
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</Modal>
		</section>
	);
}
