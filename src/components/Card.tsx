import React, { useState } from "react";

interface CardProps {
	title: string;
	icon: string;
	onCardClick: () => void;
}
const Card: React.FC<CardProps> = ({ title, icon, onCardClick }) => {
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
		justifyContent: "center",
		alignItems: "center",
		display: "flex",
		color: "white",
		backgroundImage: "linear-gradient(144deg,#402e7a, #5B42F3 50%,#4b70f5)",
		borderRadius: "10px",
		boxShadow: "rgba(151, 65, 252, 0.2) 0 15px 30px -5px",
		boxSizing: "border-box",
		cursor: "pointer",
		overflow: "hidden",
		maxWidth: "100%",
		minWidth: "140px",
	};

	const beforeStyle: React.CSSProperties = {
		background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, #3dc2ec, transparent 40%)`,
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
			onClick={onCardClick}
		>
			<div style={beforeStyle}></div>
			<div className='card-content'>
				<h3>{title}</h3>
				<img
					src={icon}
					alt='icon'
				/>
			</div>
		</div>
	);
};

export default Card;
