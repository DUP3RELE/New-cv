import { useEffect, useState } from "react";

interface ModalProps {
	isVisible: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
	useEffect(() => {
		if (!isVisible) {
			onClose();
		}
	}, [isVisible, onClose]);

	if (!isVisible) return null;

	const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className='modal-overlay'
			onClick={handleOverlayClick}
		>
			<div className={`modal-content ${isVisible ? "fade-in" : "fade-out"}`}>
				<button
					className='modal-close-button'
					onClick={() => onClose()}
				>
					Zamknij
				</button>
				{children}
			</div>
		</div>
	);
};
export default Modal;
