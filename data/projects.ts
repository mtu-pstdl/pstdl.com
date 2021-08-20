/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {DetailItem, getDetailItemByLink, getDetailsForUsername} from "../interfaces/DetailItem";

export const projects: DetailItem[] = [
	{
		title: "NASA LuSTR",
		description: "NASA Lunar Surface Technology Research (LuSTR) (Exploration of lunar volatiles and determination of geotechnical properties) – \"Percussive Hot Cone Penetrometer (PHCP) and Ground Penetrating Radar (GPR) for Geotechnical and Volatiles Mapping\"",
		link: "lustr",
		members: [
			"ejcobb",
			"ajgoddu",
			"collinmi",
			"eavanhor",
			"pjvansus",
			"hjmcgill",
			"mcguadag",
			"tawavrun",
			"tcgronda",
			"bdwiegan",
			"georgejo",
			"jnoe",
			"cjkamins"
		],
		images: [
			{src: "/projects/lustr/icon.jpg"}
		]
	},
	{
		title: "NASA T-REX",
		description: "NASA Breakthrough Innovative and Gamechanging (BIG) Idea Challenge 2020 – \"Tethered permanently shaded Region EXplorer (T-REX)\", (power and communication delivery into PSR)",
		link: "t-rex",
		members: [
			"ejcobb",
			"ajgoddu",
			"collinmi",
			"eavanhor",
			"hjmcgill",
			"mcguadag",
			"nzamora",
			"tawavrun",
			"tcgronda",
			"wtwagone",
			"pjvansus"
		],
		images: [
			{src: "/slideshow/slideshow0.jpg"},
			{src: "/slideshow/slideshow1.jpg"},
			{src: "/slideshow/slideshow2.jpg"},
			{src: "/slideshow/slideshow3.jpg"},
			{src: "/slideshow/slideshow4.jpg"},
			{src: "/slideshow/slideshow5.jpg"},
			{src: "/slideshow/slideshow6.jpg"},
		]
	},
	{
		title: "NASA Watts on the Moon",
		description: "NASA Watts on the Moon Centennial Challenge (Providing power to water extraction plant in PSR 1km from power plant) – \"Wired Watts whereever, whenever you want – W^5\"",
		link: "watts",
		members: [
			"collinmi",
			"eavanhor",
			"hjmcgill",
			"pjvansus",
			"tcgronda",
			"mcguadag"
		],
		images: [
			{src: "/projects/watts/Watts0.png"},
			{src: "projects/watts/icon.jpg"},
		]
	},
	{
		title: "NASA Break the Ice",
		description: "The latest centennial challenge from NASA that is designed to develop technologies aiding in the sustained presence on the Moon.",
		link: "btic",
		members: [
			"collinmi",
			"hjmcgill",
			"tcgronda",
			"mcguadag",
			"jnoe",
			"pjvansus"
		],
		images: [
			{src: "/projects/btic/icon.jpg"},
			{src: "/projects/btic/MineR2.jpg"},
			{src: "/projects/btic/TranspR1.png"},
			{src: "/projects/btic/TranspR2.jpg"},
			{src: "/projects/btic/WEC.jpg"},
			{src: "/projects/btic/CBD.png"},
		]
	},
	{
		title: "NASA ESI",
		description: "Early Stage Innovation (water from rock gypsum on Mars) – \"Low mass, low power, non-mechanical excavation of gypsum and other evaporites for water production on Mars\"",
		link: "esi",
		members: [
			"pjvansus"
		],
		images: [
			{src: "/projects/esi/icon.jpg"},
			{src: "/projects/esi/System_Design.PNG"},
			{src: "/projects/esi/Saturated_Water_Recycling_System.png"},
		]
	},
	{
		title: "NASA RedWater",
		description: "NASA NextSTEP BAA ISRU track 3 (water from buried glaciers on Mars) – \"RedWater : Extraction of Water from Mars' Ice Deposits\" (subcontract from Honeybee Robotics who are principal investigator)",
		link: "redwater",
		members: [
			"georgejo",
			"pjvansus",
			"smzerbel"
		],
		images: [
			{src: "/projects/redwater/RW2.jpg)"},
			{src: "/projects/redwater/RW3.jpg)"},
			{src: "/projects/redwater/RW4.jpg)"},
			{src: "/projects/redwater/RW5.JPG)"},
			{src: "/projects/redwater/RW6.jpg)"},
			{src: "/projects/redwater/icon.jpg)"},
		]
	},
	{
		title: "NASA CLASS",
		description: "NASA Solar System Exploration Research Virtual Institute (SSERVI) – \"CLASS (Center for Lunar and Asteroid Surface Science)\" (subcontract from University of Central Florida who are principal investigator)",
		link: "class",
		members: [
			"nathanmi",
			"pjvansus",
			"clcarey"
		]
	}
];

export function getProjectByLink(id: string | string[]): DetailItem | undefined {
	return getDetailItemByLink(id, projects);
}

export function getProjectsForUsername(username: string): DetailItem[] {
	return getDetailsForUsername(username, projects);
}