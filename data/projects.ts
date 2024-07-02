/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {DetailItem, getDetailItemByLink, getDetailsForUsername} from "../interfaces/DetailItem";
import {
	psbradsh,
	jwearly,
	nbmckenz,
	brianjo,
	kjiam,
	rdauster,
	elzimmer,
	esierra,
	mysalem,
	aegulan,
	ajgoddu,
	arajan,
	bdwiegan,
	cjkamins,
	clcarey,
	cnorton,
	colinsch,
	collinmi,
	eavanhor,
	ejcobb,
	georgejo,
	gtredlon,
	hjmcgill,
	jbprimea,
	jnoe,
	jpintore,
	mcguadag,
	msfoetis,
	mvsietse,
	nathanmi,
	nzamora,
	pjvansus,
	roccoc,
	smzerbel,
	tawavrun,
	tcgronda,
	wtwagone,
	mkoujiri,
	smzeqlam,
	mrkrause,
	bhpokorn,
	nsbruurs,
	ajsweene,
	dkbrouse,
	ljfrank,
	austinmc,
	wdjennes,
	nspatter,
	hlgoetz,
	msmille3,
	pstocchi,
	jdpetrin,
	scbennin,
	wjojala,
	jhannahs,
	mchewitt,
	krnielse,
	mmdecker,
	bjengle,
	ircoulin,
	audreyal,
	leifchri,
	cmdinkel
} from "./members";
import {Member} from "../interfaces/Member";

export const lustr20: DetailItem = {
		title: "NASA LuSTR 2020",
	description: "The PSTDL was a recipient of a 2020 NASA’s Lunar Surface Technology Research grant (LuSTR20) for the development of a lunar prospecting instrument known as the Percussive Hot Cone Penetrometer (PHCP) in combination with Ground Penetrating Radar (GPR). The goal of this project is to produce a science instrument that is capable of probing the lunar surface up to a depth of 1 meter to extract the geotechnical properties of the lunar regolith, identifying the vertical and lateral concentrations of volatiles present.",
	link: "lustr",
	members: [
		rdauster,
		nbmckenz,
		jwearly,
		mysalem,
		ejcobb,
		collinmi,
		mcguadag,
		tawavrun,
		arajan,
		bdwiegan,
		georgejo,
		cjkamins,
		roccoc,
		cnorton,
		jbprimea,
		colinsch,
		aegulan,
		mrkrause,
		bhpokorn,
		ajsweene,
		wjojala,
		mchewitt,
		krnielse,
		elzimmer
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
};

export const lustr21: DetailItem = {
	title: "NASA LuSTR 2021",
	description: "This project is working on a NASA’s 2021 Lunar Surface Technology Research grant (LuSTR 21) led by Colorado school of Mines and other partners. The overall project is to build an autonomous site prep rover capable of obstacle removal, leveling, and compaction. The PSTDL is working on a novel compaction system for this system.",
	link: "lustr21",
	members: [
		rdauster,
		psbradsh,
		ljfrank,
		nspatter,
		jdpetrin,
		jhannahs,
		clcarey,
		elzimmer

	],
	alumni: [

	],
	images: [
		{src: "/projects/lustr21/ASPECT Vehicle.png"},
		{src: "/projects/lustr21/icon.jpg"},
		{src: "/projects/lustr21/Compaction Scan.png"},
		{src: "/projects/lustr21/Vibratory Compaction Unit v3.png"},
	]
};

export const trex: DetailItem = {
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
}

export const watts: DetailItem = {
	title: "NASA Watts on the Moon",
	description: "NASA Watts on the Moon Centennial Challenge (Providing power to water extraction plant in PSR 3km from power plant) – \"Wired Watts where-ever, whenever you want – W^5\"",
	link: "watts",
	members: [
		eavanhor,
		mcguadag,
		ajgoddu,
		ejcobb,
		mvsietse,
		tawavrun,
		smzeqlam,
		psbradsh,
		nsbruurs,
		austinmc,
		scbennin,
		ircoulin,
		clcarey
	],
	alumni: [
		collinmi,
		hjmcgill,
		tcgronda,
	],
	images: [
		{src: "/projects/watts/Watts0.png"},
		{src: "/projects/watts/icon.jpg"},
		{src: "/projects/watts/Watts1.png"},
		{src: "/projects/watts/Watts2.png"},
		{src: "/projects/watts/Watts3.png"},
	]
};

export const breakTheIce: DetailItem = {
	title: "NASA Break the Ice",
	description: "NASA’s Break The Ice Lunar Challenge challenges teams to create a solution for mining lunar permafrost. The PSTDL’s Prototype Regolith In-situ Mining Rover with Onboard Surface Excavator (PRIMROSE) is a highly capable mining rover purpose-built to meet the demands of this challenge. PRIMROSE leverages proven terrestrial technology and the PSTDL’s experience with regolith excavation. Future work includes testing excavation of icy regolith in a cold chamber using the PRIMROSE excavator.",
	link: "btic",
	members: [
		collinmi,
		hjmcgill,
		tcgronda,
		rdauster,
		mcguadag,
		mkoujiri,
		smzeqlam,
		jbprimea,
		mrkrause,
		psbradsh,
		ajsweene,
		dkbrouse,
		ljfrank,
		austinmc,
		wdjennes,
		hlgoetz,
		msmille3,
		ajgoddu,
		mmdecker,
		bjengle,
		audreyal,
		gtredlon,
		leifchri,
		cmdinkel
	],
	alumni: [],
	images: [
		{src: "/projects/btic/icon.jpg"},
		{src: "/projects/btic/MineR2.jpg"},
		{src: "/projects/btic/TranspR1.png"},
		{src: "/projects/btic/TranspR2.jpg"},
		{src: "/projects/btic/WEC.jpg"},
		{src: "/projects/btic/CBD.png"},
		{src: "/projects/btic/BTIC1.jpg"},
		{src: "/projects/btic/BTIC2.jpg"},
		{src: "/projects/btic/BTIC3.jpg"},
		{src: "/projects/btic/BTIC4.jpg"},
		{src: "/projects/btic/BTIC5.jpg"},
	]
}

export const esi: DetailItem = {
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
};

export const redWater: DetailItem = {
	title: "NASA RedWater",
	description: "NASA NextSTEP BAA ISRU track 3 (water from buried glaciers on Mars) – \"RedWater : Extraction of Water from Mars' Ice Deposits\" (subcontract from Honeybee Robotics who are principal investigator)",
	link: "redwater",
	members: [
		elzimmer,
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
};

export const mre: DetailItem = {
	title: "NASA GCD MRE",
	link: "mre",
	description: "Provide a regolith feeder and transportation system for the MRE reactor",
	members: [
		psbradsh,
		esierra,
		jnoe,
		bdwiegan
	],
	alumni: [
		jpintore,
	],
	images: [
		{src: "/projects/mre/icon.jpg"},
		{src: "/projects/mre/mre3.png"},
		{src: "/projects/mre/mre4.png"},
		{src: "/projects/mre/mre5.png"},
		{src: "/projects/mre/mre6.png"},
		{src: "/projects/mre/mre7.png"},
		{src: "/projects/mre/mre8.png"},
		{src: "/projects/mre/mre9.png"},
		{src: "/projects/mre/mre10.png"},
		{src: "/projects/mre/mre11.png"},
		{src: "/projects/mre/mre12.png"},
		{src: "/projects/mre/mre13.png"},
		{src: "/projects/mre/mre14.png"},


	]
};

export const hoplite: DetailItem = {
	title: "HOPLITE",
	description: "A modular robotic system that enables the field testing of ISRU technologies.",
	link: "hoplite",
	members: [
		nbmckenz,
		mysalem,
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
};

export const nasaClass: DetailItem = {
	title: "NASA CLASS",
	description: "NASA Solar System Exploration Research Virtual Institute (SSERVI) – \"CLASS (Center for Lunar and Asteroid Surface Science)\" (subcontract from University of Central Florida who are principal investigator)",
	link: "class",
	members: [
		kjiam,
		pjvansus,
		clcarey,
		jbprimea,
		ljfrank
	],
	alumni: [
		nathanmi
	],
};

export const projects: DetailItem[] = [
	lustr20,
	lustr21,
	trex,
	watts,
	breakTheIce,
	esi,
	redWater,
	mre,
	hoplite,
	nasaClass,

];

export function getProjectByLink(id: string | string[]): DetailItem | undefined {
	return getDetailItemByLink(id, projects);
}

export function getProjectsForUser(user: Member): DetailItem[] {
	if (user.username === "pjvansus") return projects;
	return getDetailsForUsername(user, projects);
}