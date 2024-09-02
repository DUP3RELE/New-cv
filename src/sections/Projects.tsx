import React, { useRef, useEffect } from "react";
import "../App.css";

export default function Projects(): any {
	const cardsContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (cardsContainerRef.current) {
				const cards = Array.from(
					cardsContainerRef.current.getElementsByClassName("card")
				) as HTMLElement[];

				cards.forEach((card) => {
					const rect = card.getBoundingClientRect();
					const x = e.clientX - rect.left;
					const y = e.clientY - rect.top;

					card.style.setProperty("--mouse-x", `${x}px`);
					card.style.setProperty("--mouse-y", `${y}px`);
				});
			}
		};

		const container = cardsContainerRef.current;
		container?.addEventListener("mousemove", handleMouseMove);

		return () => {
			container?.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<section className='section projects'>
			<div id='cards'>
				<div className='card'></div>
				<div className='card'></div>
				<div className='card'></div>
				<div className='card'></div>
				<div className='card'></div>
				<div className='card'></div>
			</div>
		</section>
	);
}
