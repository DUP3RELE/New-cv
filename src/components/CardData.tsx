import github2 from "../icons/github copy.svg";
import gastrohero from "../icons/trash.svg";
import gastrohero2 from "../icons/trash copy.svg";
import travelbuddy from "../icons/map.svg";
import travelbuddy2 from "../icons/map copy.svg";
import ripperdock from "../icons/dollar-sign.svg";
import ripperdock2 from "../icons/dollar-sign copy.svg";
import typescript from "../icons/icons8-typescript.svg";
import reactIcon from "../icons/react.svg";
import nextjsIcon from "../icons/icons8-nextjs.svg";
import mongoDBIcon from "../icons/mongodb-icon.svg";
import postmanIcon from "../icons/icons8-postman-api.svg";
import vsStudioIcon from "../icons/icons8-visual-studio.svg";
import pythonIcon from "../icons/python-brands-solid.svg";
import flaskIcon from "../icons/Flask.svg";
import pcIcon from "../icons/PyCharm.svg";
import gearIcon from "../icons/gear-solid.svg";
import jsIcon from "../icons/js.svg";

export interface CardData {
	id: number;
	title: string;
	icon: string;
	description: string;
	technologies: { name: string; icon: string }[];
	links: { label: string; url: string; icon: string }[];
}

export const cardData: CardData[] = [
	{
		id: 2,
		title: "Ripperdock shop",
		icon: ripperdock,
		description:
			"Sklep internetowy oferujący cybernetyczne wszczepy, utrzymany w klimacie cyberpunkowym. Strona została zbudowana w technologii Next.js i hostowana na Vercelu, z backendem opartym na MongoDB. Użytkownicy mogą tworzyć konta, dodawać produkty do koszyka, a także zarządzać swoimi zamówieniami. Administrator, po zalogowaniu, ma możliwość zarządzania asortymentem sklepu, mogą dodawać, edytować oraz usuwać produkty.",
		technologies: [
			{ name: "Typescript", icon: typescript },
			{ name: "React", icon: reactIcon },
			{ name: "NextJS13", icon: nextjsIcon },
			{ name: "MongoDB", icon: mongoDBIcon },
			{ name: "Github", icon: github2 },
			{ name: "Postman", icon: postmanIcon },
			{ name: "VsStudio", icon: vsStudioIcon },
		],
		links: [
			{
				label: "GitHub",
				url: "https://github.com/DUP3RELE/ripperdoc",
				icon: github2,
			},
			{
				label: "Live Demo",
				url: "https://ripperdoc.vercel.app/",
				icon: ripperdock2,
			},
		],
	},
	{
		id: 3,
		title: "TravelBuddy",
		icon: travelbuddy,
		description:
			"Aplikacja do zarządzania notatkami, umożliwiająca użytkownikom przeglądanie, dodawanie oraz usuwanie notatek.",
		technologies: [
			{ name: "Javascript", icon: jsIcon },
			{ name: "React", icon: reactIcon },
			{ name: "NextJS13", icon: nextjsIcon },
			{ name: "MongoDB", icon: mongoDBIcon },
			{ name: "Github", icon: github2 },
			{ name: "Postman", icon: postmanIcon },
			{ name: "VsStudio", icon: vsStudioIcon },
		],
		links: [
			{ label: "GitHub", url: "https://github.com/project2", icon: github2 },
			{
				label: "Live Demo",
				url: "https://travel-buddy-eight.vercel.app/",
				icon: travelbuddy2,
			},
		],
	},
	{
		id: 1,
		title: "GastroHero",
		icon: gastrohero,
		description:
			"Mój najbardziej ambitny projekt. Aplikacja, która służy do zarządzania restauracją. Można w niej tworzyć konta użytkowników - konto restauracji i konto pracowników. ",
		technologies: [
			{ name: "React", icon: reactIcon },
			{ name: "TypeScript", icon: typescript },
			{ name: "NextJS13", icon: nextjsIcon },
			{ name: "Github", icon: github2 },
			{ name: "Postman", icon: postmanIcon },
			{ name: "VsStudio", icon: vsStudioIcon },
			{ name: "PyCharm", icon: pcIcon },
			{ name: "Python", icon: pythonIcon },
			{ name: "Python Flask", icon: flaskIcon },
		],
		links: [
			{
				label: "GitHub Frontend code",
				url: "https://github.com/DUP3RELE/GastroHero",
				icon: github2,
			},
			{
				label: "GitHub Backend code",
				url: "https://github.com/DUP3RELE/HotpotEngine",
				icon: gearIcon,
			},
		],
	},
];
