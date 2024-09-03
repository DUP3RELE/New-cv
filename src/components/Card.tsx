import React, { useState } from "react";

interface CardProps {
	title: string;
	content: string;
}
const Card: React.FC<CardProps> = ({ title, content }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		setMousePosition({
			x: e.clientX - left,
			y: e.clientY - top,
		});
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const cardStyle: React.CSSProperties = {
		position: "relative",
		width: "300px",
		height: "260px",
		color: "white",
		backgroundColor: "rgba(0, 0, 64, 0.7)",
		borderRadius: "10px",
		cursor: "pointer",
		overflow: "hidden",
	};

	const beforeStyle: React.CSSProperties = {
		background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 238, 182, 0.6), transparent 40%)`,
		borderRadius: "inherit",
		content: '""',
		height: "100%",
		left: "0px",
		opacity: isHovered ? "1" : "0",
		position: "absolute",
		top: "0px",
		transition: "opacity 500ms",
		width: "100%",
		zIndex: 3,
		pointerEvents: "none",
	};

	return (
		<div
			className='card'
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={cardStyle}
		>
			<div style={beforeStyle}></div>
			<div className='card-content'>
				<h3>{title}</h3>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Card;
