/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {DetailItem, getDetailItemByLink} from "../interfaces/DetailItem";

export const projects: DetailItem[] = [
	{
		title: "NASA T-REX",
		description: "NASA Breakthrough Innovative and Gamechanging (BIG) Idea Challenge 2020 – \"Tethered permanently shaded Region EXplorer (T-REX)\", (power and communication delivery into PSR)",
		link: "t-rex"
	},
	{
		title: "NASA LuSTR",
		description: "NASA Lunar Surface Technology Research (LuSTR) (Exploration of lunar volatiles and determination of geotechnical properties) – \"Percussive Hot Cone Penetrometer (PHCP) and Ground Penetrating Radar (GPR) for Geotechnical and Volatiles Mapping\"",
		link: "lustr"
	},
	{
		title: "NASA Watts on the Moon",
		description: "NASA Watts on the Moon Centennial Challenge (Providing power to water extraction plant in PSR 1km from power plant) – \"Wired Watts whereever, whenever you want – W^5\"",
		link: "watts"
	},
	{
		title: "NASA Break the Ice",
		description: "The latest centennial challenge from NASA that is designed to develop technologies aiding in the sustained presence on the Moon.",
		link: "break-the-ice"
	},
	{
		title: "NASA ESI",
		description: "Early Stage Innovation (water from rock gypsum on Mars) – \"Low mass, low power, non-mechanical excavation of gypsum and other evaporites for water production on Mars\"",
		link: "esi"
	},
	{
		title: "NASA RedWater",
		description: "NASA NextSTEP BAA ISRU track 3 (water from buried glaciers on Mars) – \"RedWater : Extraction of Water from Mars' Ice Deposits\" (subcontract from Honeybee Robotics who are principal investigator)",
		link: "redwater"
	},
	{
		title: "NASA CLASS",
		description: "NASA Solar System Exploration Research Virtual Institute (SSERVI) – \"CLASS (Center for Lunar and Asteroid Surface Science)\" (subcontract from University of Central Florida who are principal investigator)",
		link: "class"
	}
];

export function getProjectByLink(id: string | string[]): DetailItem | undefined {
	return getDetailItemByLink(id, projects);
}