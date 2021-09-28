/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {DetailItem, getDetailItemByLink, getDetailsForUsername} from "../interfaces/DetailItem";

export const facilities: DetailItem[] = [
	{
		title: "Dusty Thermal Vacuum Chamber (DTVAC)",
		description: "Perform rapid testing of lunar surface systems and science instruments. This facility consists of a thermal vacuum chamber, removable regolith beds, and supporting equipment.",
		link: "dtvac",
		members: [
			"mcguadag",
			"bdwiegan",
			"pjvansus"
		],
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
			"pjvansus",
			"mcguadag",
			"tawavrun",
			"ejcobb",
			"tcgronda"
		],
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
			"tawavrun",
			"ejcobb"
		],
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
		members: [
			"pjvansus"
		],
		images: [
			{src: "/facilities/mtvac/icon.jpg"},
			{src: "/facilities/mtvac/mtvac1.jpg"},
			{src: "/facilities/mtvac/mtvac2.jpg"},
		]
	},
	{
		title: "AR Mapping Sandbox",
		description: "A sandbox featuring projected depth mapping of the terrain.",
		link: "ar-sandbox",
		members: [
			"dfpaglia"
		],
		images: [
			{src: "/facilities/ar-sandbox/icon.jpg"},
		]
	},
	{
		title: "Industrial Robotic Arm",
		description: "A programmable FANUC robotic arm.",
		link: "arm",
		members: [
			"georgejo",
			"pjvansus",
			"mcguadag"
		],
		images: [
			{src: "/facilities/arm/arm.jpg"},
			{src: "/facilities/arm/icon.jpg"},
			{src: "/facilities/arm/arm-trencher-enclosure.jpg"},
		]
	},
]

export function getFacilityByLink(id: string | string[]): DetailItem | undefined {
	return getDetailItemByLink(id, facilities);
}

export function getFacilitiesForUsername(username: string): DetailItem[] {
	return getDetailsForUsername(username, facilities);
}