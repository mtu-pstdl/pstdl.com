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
		]
	},
	{
		title: "Lunar Simulant Sandbox",
		description: "Large 'Airlocked' lunar simulant chamber with autonomous gravity offloading.",
		link: "sandbox",
		members: [
			"pjvansus",
			"mcguadag"
		]
	},
	{
		title: "IRGO",
		description: "A 3-axis autonomous gravity offloading device located within a lunar simulant chamber.",
		link: "irgo",
		members: [
			"tawavrun",
			"ejcobb"
		]
	},
	{
		title: "Mini Thermal Vacuum Chamber (MTVAC)",
		description: "A Martian pressure rated vacuum chamber featuring a LN2 feedthrough port to allow tests to be conducted at cryogenic temperatures.",
		link: "mtvac",
		members: [
			"pjvansus"
		]
	},
	{
		title: "AR Mapping Sandbox",
		description: "A sandbox that projects a contantly updating elevation heat map onto itself.",
		link: "ar-sandbox",
		members: [
			"dfpaglia"
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
		]
	},
]

export function getFacilityByLink(id: string | string[]): DetailItem | undefined {
	return getDetailItemByLink(id, facilities);
}

export function getFacilitiesForUsername(username: string): DetailItem[] {
	return getDetailsForUsername(username, facilities);
}