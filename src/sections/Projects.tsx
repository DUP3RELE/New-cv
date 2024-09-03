import Card from "../components/Card";

export default function Projects() {
	const cardData = [
		{
			title: "Projekt 1",
			content: "Content for card 1",
		},
		{
			title: "Card 2 Title",
			content: "Content for card 2",
		},
		{
			title: "Card 3 Title",
			content: "Content for card 3",
		},
	];

	return (
		<section className='section projects'>
			<h1 className='title1'>PROJEKTY</h1>
			<div id='cards'>
				{cardData.map((data, index) => (
					<Card
						key={index}
						title={data.title}
						content={data.content}
					/>
				))}
			</div>
		</section>
	);
}
