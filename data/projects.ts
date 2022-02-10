/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {DetailItem, getDetailItemByLink, getDetailsForUsername} from "../interfaces/DetailItem";
import {
	ajgoddu,
	bdwiegan,
	cjkamins, clcarey,
	cnorton, colinsch, collinmi, eavanhor,
	ejcobb,
	georgejo, gtredlon,
	hjmcgill,
	jbprimea,
	jedecato, jnoe, jpintore,
	mcguadag, msfoetis, mvsietse, nathanmi, nzamora, pjvansus,
	roccoc, smzerbel,
	tawavrun, tcgronda, wtwagone
} from "./members";
import {Member} from "../interfaces/Member";

export const projects: DetailItem[] = [
	{
		title: "NASA LuSTR",
		description: "NASA Lunar Surface Technology Research (LuSTR) (Exploration of lunar volatiles and determination of geotechnical properties) – \"Percussive Hot Cone Penetrometer (PHCP) and Ground Penetrating Radar (GPR) for Geotechnical and Volatiles Mapping\"",
		link: "lustr",
		members: [
			ejcobb,
			collinmi,
			mcguadag,
			tawavrun,
			bdwiegan,
			georgejo,
			cjkamins,
			roccoc,
			cnorton,
			jbprimea,
			colinsch,
			jedecato,
		],
		alumni: [
			ajgoddu,
			eavanhor,
			hjmcgill,
			tcgronda,
		],
		images: [
			{src: "/projects/lustr/icon.jpg"},
			{src: "/projects/lustr/lustr0.jpg"},
			{src: "/projects/lustr/lustr1.jpg"},
			{src: "/projects/lustr/lustr2.jpg"},
			{src: "/projects/lustr/lustr3.jpg"},
			{src: "/projects/lustr/lustr4.jpg"},
		]
	},
	{
		title: "NASA T-REX",
		description: "NASA Breakthrough Innovative and Gamechanging (BIG) Idea Challenge 2020 – \"Tethered permanently shaded Region EXplorer (T-REX)\", (power and communication delivery into PSR)",
		link: "t-rex",
		members: [
			ejcobb,
			ajgoddu,
			collinmi,
			eavanhor,
			hjmcgill,
			mcguadag,
			tawavrun
		],
		alumni: [
			nzamora,
			tcgronda,
			wtwagone,
		],
		images: [
			{src: "/slideshow/slideshow0.jpg"},
			{src: "/slideshow/slideshow7.jpg"},
			{src: "/slideshow/slideshow11.jpg"},
			{src: "/slideshow/slideshow13.jpg"},
			{src: "/slideshow/slideshow15.jpg"},
			{src: "/slideshow/slideshow17.jpg"},
		]
	},
	{
		title: "NASA Watts on the Moon",
		description: "NASA Watts on the Moon Centennial Challenge (Providing power to water extraction plant in PSR 1km from power plant) – \"Wired Watts where-ever, whenever you want – W^5\"",
		link: "watts",
		members: [
			eavanhor,
			mcguadag,
			ajgoddu,
			ejcobb,
			mvsietse,
			tawavrun
		],
		alumni: [
			collinmi,
			hjmcgill,
			tcgronda,
		],
		images: [
			{src: "/projects/watts/Watts0.png"},
			{src: "/projects/watts/icon.jpg"},
		]
	},
	{
		title: "NASA Break the Ice",
		description: "The latest centennial challenge from NASA that is designed to develop technologies aiding in the sustained presence on the Moon.",
		link: "btic",
		members: [
			collinmi,
			hjmcgill,
			tcgronda,
			mcguadag
		],
		alumni: [],
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
			clcarey,
		],
		alumni: [
			msfoetis
		],
		images: [
			{src: "/projects/esi/icon.jpg"},
			{src: "/projects/esi/esi1.jpg"},
			{src: "/projects/esi/esi2.jpg"},
			{src: "/projects/esi/esi3.jpg"},
			{src: "/projects/esi/esi4.jpg"},
			{src: "/projects/esi/esi5.jpg"},
			{src: "/projects/esi/esi6.jpg"},
		]
	},
	{
		title: "NASA RedWater",
		description: "NASA NextSTEP BAA ISRU track 3 (water from buried glaciers on Mars) – \"RedWater : Extraction of Water from Mars' Ice Deposits\" (subcontract from Honeybee Robotics who are principal investigator)",
		link: "redwater",
		members: [
			georgejo,
			smzerbel,
			gtredlon
		],
		alumni: [],
		images: [
			{src: "/projects/redwater/icon.jpg"},
			{src: "/projects/redwater/rw7.jpg"},
			{src: "/projects/redwater/RW2.jpg"},
			{src: "/projects/redwater/RW3.jpg"},
			{src: "/projects/redwater/RW4.jpg"},
			{src: "/projects/redwater/RW5.JPG"},
			{src: "/projects/redwater/RW6.jpg"},
		]
	},
	{
		title: "NASA GCD MRE",
		link: "mre",
		description: "Provide a regolith feeder and transportation system for the MRE reactor",
		members: [
			jnoe,
			clcarey,
			bdwiegan
		],
		alumni: [
			jpintore,
		],
		images: [
			{src: "/projects/mre/icon.jpg"},
			{src: "/projects/mre/mre1.jpg"},
			{src: "/projects/mre/mre2.jpg"},
			{src: "/projects/mre/mre4.jpg"},
			{src: "/projects/mre/mre5.jpg"},
			{src: "/projects/mre/mre6.jpg"},

		]
	},
	{
		title: "HOPLITE",
		description: "A modular robotic system that enables the field testing of ISRU technologies.",
		link: "hoplite",
		members: [
			ejcobb,
			roccoc,
			cnorton,
			collinmi,
		],
		alumni: [
			ajgoddu,
			hjmcgill,
			eavanhor,
		],
		images: [
			{src: "/projects/hoplite/icon.jpg"},
		]
	},
	{
		title: "NASA CLASS",
		description: "NASA Solar System Exploration Research Virtual Institute (SSERVI) – \"CLASS (Center for Lunar and Asteroid Surface Science)\" (subcontract from University of Central Florida who are principal investigator)",
		link: "class",
		members: [
			pjvansus,
			clcarey,
			jbprimea
		],
		alumni: [
			nathanmi
		],
	},
];

export function getProjectByLink(id: string | string[]): DetailItem | undefined {
	return getDetailItemByLink(id, projects);
}

export function getProjectsForUser(user: Member): DetailItem[] {
	if (user.username === "pjvansus") return projects;
	return getDetailsForUsername(user, projects);
}