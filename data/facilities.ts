/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {DetailItem, getDetailItemByLink, getDetailsForUsername} from "../interfaces/DetailItem";
import {projects} from "./projects";
import {Member} from "../interfaces/Member";
import {bdwiegan, dfpaglia, dkbrouse, ejcobb, georgejo, mcguadag, pjvansus, tawavrun, tcgronda, ajgoddu, hjmcgill, eavanhor, nbmckenz, mysalem, roccoc, cnorton, collinmi, 
	rdauster, mkoujiri, mrkrause, ajsweene, ljfrank, austinmc, mmdecker, bjengle, audreyal, leifchri, cmdinkel, psbradsh, hlgoetz, jbprimea, smzeqlam, wdjennes, gtredlon,
	msmille3, fdgaertn
} from "./members";

export const facilities: DetailItem[] = [
	{
		title: "Dusty Thermal Vacuum Chamber (DTVAC)",
		description: "Perform rapid testing of lunar surface systems and science instruments. This facility consists of a thermal vacuum chamber, removable regolith beds, and supporting equipment.",
		link: "dtvac",
		members: [
			mcguadag,
			georgejo
		],
		alumni: [bdwiegan],
		images: [
			{src: "/facilities/dtvac/icon.jpg"},
			{src: "/facilities/dtvac/dtvac-real2.jpg"},
			{src: "/facilities/dtvac/dtvac-real3.jpg"},
			{src: "/facilities/dtvac/dtvac-real4.jpg"},
			{src: "/facilities/dtvac/dtvac-real5.jpg"},
			{src: "/facilities/dtvac/feedthrough_diagram.png"},
		]
	},
	{
		title: "Lunar Simulant Sandbox",
		description: "Large 'Airlocked' lunar simulant chamber with autonomous gravity offloading.",
		link: "sandbox",
		members: [
			georgejo
		],
		alumni: [tcgronda],
		images: [
			{src: "/facilities/sandbox/icon.jpg"},
			{src: "/facilities/sandbox/sandbox-9.jpg"},
			{src: "/facilities/sandbox/sandbox-8.jpg"},
			{src: "/facilities/sandbox/Sandbox_2.JPG"},
			{src: "/facilities/sandbox/Sandbox_4.JPG"},
			{src: "/facilities/sandbox/Sandbox_5.PNG"},
			{src: "/facilities/sandbox/Sandbox_6.PNG"},
			{src: "/facilities/sandbox/enclosure.png"},
			{src: "/facilities/sandbox/Sandbox_CAD_2.PNG"},
		]
	},
	{
		title: "IRGO",
		description: "A 3-axis autonomous gravity offloading device located within a lunar simulant chamber.",
		link: "irgo",
		members: [
			tawavrun,
			georgejo
		],
		alumni: [ejcobb,
			dkbrouse],
		images: [
			{src: "/facilities/irgo/irgo-1.jpg"},
			{src: "/facilities/irgo/irgo-2.jpg"},
			{src: "/facilities/irgo/icon.jpg"},
		]
	},
	{
		title: "Mini Thermal Vacuum Chamber (MTVAC)",
		description: "A Martian pressure rated vacuum chamber featuring a LN2 feedthrough port to allow tests to be conducted at cryogenic temperatures.",
		link: "mtvac",
		members: [georgejo],
		alumni: [],
		images: [
			{src: "/facilities/mtvac/icon.jpg"},
			{src: "/facilities/mtvac/mtvac1.png"},
			{src: "/facilities/mtvac/mtvac2.png"},
		]
	},
	{
		title: "HOPLITE",
		description: "A modular robotic system that enables the field testing of ISRU technologies.",
		link: "hoplite",
		members: [
		],
		alumni: [
			hjmcgill,
			eavanhor,
			nbmckenz,
			mysalem,
			ejcobb,
			roccoc,
			cnorton,
			collinmi,
			ajgoddu
		],
		images: [
			{src: "/facilities/hoplite/icon.jpg"},
		]
	},
	{
		title: "PRIMROSE",
		description: "The PSTDL’s Prototype Regolith In-situ Mining Rover with Onboard Surface Excavator (PRIMROSE) is a highly capable mining rover purpose-built to meet the demands of the NASA Break the Ice Centennial Challenge. PRIMROSE leverages proven terrestrial technology and the PSTDL’s experience with regolith excavation.",
		link: "primrose",
		members: [
			rdauster,
			mcguadag,
			mkoujiri,
			mrkrause,
			ajsweene,
			ljfrank,
			austinmc,
			ajgoddu,
			mmdecker,
			bjengle,
			audreyal,
			leifchri,
			cmdinkel
		],
		alumni: [
			psbradsh,
			hlgoetz,
			hjmcgill,
			collinmi,
			tcgronda,
			jbprimea,
			smzeqlam,
			dkbrouse,
			wdjennes,
			georgejo,
			gtredlon,
			msmille3
		],
		images: [
			{src: "/facilities/primrose/icon.jpg"},
			{src: "/facilities/primrose/BTIC1.jpg"},
			{src: "/facilities/primrose/BTIC2.jpg"},
			{src: "/facilities/primrose/BTIC3.jpg"},
		]
	},
	{
		title: "Regolith Freezing & Heating Containers",
		description: "Shipping containers refurbished as regolith heating and freezing facilities.",
		link: "containers",
		members: [
			georgejo
		],
		alumni: [bdwiegan],
		images: [
			{src: "/facilities/containers/icon.jpg"},
			{src: "/facilities/containers/container1.png"},
			{src: "/facilities/containers/container2.png"},
		]
	},
	// {
	// 	title: "AR Mapping Sandbox",
	// 	description: "A sandbox featuring projected depth mapping of the terrain.",
	// 	link: "ar-sandbox",
	// 	members: [
	// 		georgejo
	// 	],
	// 	alumni: [
			
	// 	],
	// 	images: [
	// 		{src: "/facilities/ar-sandbox/icon.jpg"},
	// 	]
	// },
	{
		title: "DREDGE",
		description: "Dynamic Response Evaluation for Development of Geotechnical Equipment (DREDGE).",
		link: "dredge",
		members: [
			mmdecker,
			bjengle,
			mcguadag,
			fdgaertn
		],
		alumni: [],
		images: [
			{src: "/facilities/dredge/icon.jpg"},
			{src: "/facilities/dredge/dredge2.jpg"},
			{src: "/facilities/dredge/dredge3.jpg"},
		]
	},
	{
		title: "Industrial Robotic Arm",
		description: "A programmable FANUC robotic arm.",
		link: "arm",
		members: [
			georgejo,
			mcguadag
		],
		alumni: [],
		images: [
			{src: "/facilities/arm/arm.jpg"},
			{src: "/facilities/arm/icon.jpg"},
			{src: "/facilities/arm/arm-trencher-enclosure.jpg"},
		]
	}
]

export function getFacilityByLink(id: string | string[]): DetailItem | undefined {
	return getDetailItemByLink(id, facilities);
}

export function getFacilitiesForUsername(user: Member): DetailItem[] {
	if (user.username === "pjvansus") return facilities;
	return getDetailsForUsername(user, facilities);
}