/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {Position, PositionLevel, PositionPayType, PositionSemester} from "../interfaces/Position";
import {MemberMajor} from "../interfaces/Member";
import {hoplite, lustr20, lustr21, mre, nasaClass, redWater} from "./projects";

export const positions: Position[] = [
	{
		key: "lustr20-mech-cone",
		title: "R&D Test Engineer",
		projects: [lustr20],
		level: PositionLevel.UNDERGRAD,
		majors: [MemberMajor.ME],
		pay: {type: PositionPayType.HOURLY, value: 15},
		hours: 40,
		start: {semester: PositionSemester.SPRING, year: 2021},
		description: "Develop science instruments that survey the lunar surface for resources and determine their properties in-situ & develop a large semi-automous field rover. Funded by NASA",
		tasks: [
			"Testing cone penetrometer (atmosphere, vacuum).",
			"Design and fabrication of test support fixtures.",
			"Design and fabrication of new testing facilities.",
			"Communicating results to NASA stakeholders/",
			"Data collection and analysis.",
		],
		qualifications: {
			required: [
				"Can lift 50lbs.",
				"CAD Design (NX, Inventor, SolidWorks)",
				"Machine shop training."
			],
			preferred: [
				"3D Printing",
				"LabVIEW",
				"Electronics Experience"
			]
		}
	},
	{
		key: "lustr20-mech",
		title: "Mechanical Engineer",
		projects: [lustr20, hoplite],
		level: PositionLevel.UNDERGRAD,
		majors: [MemberMajor.ME],
		pay: {type: PositionPayType.HOURLY, value: 15},
		hours: 40,
		start: {semester: PositionSemester.SPRING, year: 2021},
		description: "Develop science instruments that survey the lunar surface for resources and determine their properties in-situ & develop a large semi-automous field rover. Funded by NASA",
		tasks: [
			"Become familiar with mechanical workings of the HOPLITe rover.",
			"Integrate science instrument payloads onto HOPLITE.",
			"Test HOPLITE in the field at the KRC.",
			"Maintain HOPLITE mechanical subsystems.",
			"Support fabrication of test equipment for other programs."
		],
		qualifications: {
			required: [
				"Adept CAD skills (preferebly NX)",
				"Machine Shop Training (mill, lathe, bandsaw, drill press, etc.)",
				"3D Printing",
				"Team Communication Experience"
			],
			preferred: [
				"CNC Mill Experience",
				"Robotics related experiences."
			]
		}
	},
	{
		key: "lustr20-sfw",
		title: "Software Engineer",
		projects: [lustr20, hoplite],
		level: PositionLevel.UNDERGRAD,
		majors: [MemberMajor.CS, MemberMajor.CPE],
		pay: {type: PositionPayType.HOURLY, value: 15},
		hours: 40,
		start: {semester: PositionSemester.SPRING, year: 2021},
		description: "Design and implement software for use with robotics systems at the PSTDL as well as internal tools.",
		tasks: [
			"Design mission control components for robotics subsystems using Web Technologies.",
			"Manage the communication between robotic systems and ground stations.",
			"Develop internal CLI & Application tools.",
			"Test robotic systems.",
			"Maintain PSTDL software.",
			"Write documentation on software systems."
		],
		qualifications: {
			required: [
				"JavaScript (TypeScript preferred)",
				"ReactJS",
				"NextJS",
				"WebSocket Protocol",
				"Web Design (CSS/SASS/SCSS/HTML)",
				"REST API",
				"SQL",
				"MongoDB",
				"NodeJS",
				"git",
				"Linux Experience"
			],
			preferred: [
				"ROS",
				"OpenCV",
				"Systems Programming",
				"ElectronJS",
				"Academic Writing",
				"C++",
				"Python",
				"TypeScript",
			]
		}
	},
	{
		key: "lustr20-electrical",
		title: "Electrical Engineer",
		projects: [lustr20, hoplite],
		level: PositionLevel.UNDERGRAD,
		majors: [MemberMajor.EE, MemberMajor.CPE],
		pay: {type: PositionPayType.HOURLY, value: 15},
		hours: 40,
		start: {semester: PositionSemester.SPRING, year: 2021},
		description: "Maintain/upgrade the electrical system subsystem of the HOPLITE field rover.",
		tasks: [
			"Adding various sensors (temperature, current, voltage) to the Electrical Power System (EPS) on the rover, and integrating them into the software/firmware.",
			"Diagnosing and fixing any issues with the EPS, as they arise."
		],
		qualifications: {
			required: [
				"Basic understanding of basic circuit theory and design.",
				"Understanding of common test equipment (Oscilloscopes, DMM's, signal generators, etc.).",
				"Understanding of electrical schematics (experience with electrical CAD software - Eagle/KiCad).",
				"Experience with wiring in electrical systems (vehicles, for example).",
				"Experience with circuit assembly (Through hole and SMD soldering).",
				"Python",
				"C++",
				"Arduino"
			],
			preferred: [
				"ROS",
				"Firmware Development",
				"Linux Experience"
			]
		}
	},
	{
		key: "lustr21-mech-grad",
		title: "R&D Mechanical Engineer (Ph.D. or Masters)",
		projects: [lustr21],
		level: PositionLevel.GRAD,
		majors: [MemberMajor.ME],
		pay: {type: PositionPayType.STIPEND, value: null},
		hours: 40,
		start: {semester: PositionSemester.SUMMER, year: 2022},
		description: "For this project under leadership of the Colorado School of Mines, we at MTU are developing an attachment for a rover to be built by Lunar Outpost that will compact layers of lunar sand and dust using vibratory needles. This will result in a site preparation for a lunar landing pad construction where the underlaying sand and dust needs to by compacted to 90% relative density over a large area within a given time.",
		tasks: [
			"Design, build, and test vibratory compaction device for a moon rover.",
			"Work independently and communicate results with lab and stakeholders.",
			"Analyze vibration data to determine optimal compactor configuration.",
			"Test compaction device in lunar regolith simulant (atmospheric, vacuum)."
		],
		qualifications: {
			required: [
				"Commit to a 2-year NASA research grant.",
				"3D Printing Experience",
				"Machine Shop Experience (including CNC Mill and lathe)",
				"Data Analysis Experience",
				"Data Collection Experience",
				"CAD Experience",
				"Independent worker."
			],
			preferred: [
				"Experience in collection of vibratory data.",
				"Experience in producing reports on collected data.",
				"Experience in effectively communicating results."
			]
		}
	},
	{
		key: "lustr21-mech",
		title: "R&D Mechanical Engineer",
		projects: [lustr21],
		level: PositionLevel.UNDERGRAD,
		majors: [MemberMajor.ME],
		pay: {type: PositionPayType.HOURLY, value: 15},
		hours: 40,
		start: {semester: PositionSemester.SUMMER, year: 2022},
		description: "For this project under leadership of the Colorado School of Mines, we at MTU are developing an attachment for a rover to be built by Lunar Outpost that will compact layers of lunar sand and dust using vibratory needles. This will result in a site preparation for a lunar landing pad construction where the underlaying sand and dust needs to by compacted to 90% relative density over a large area within a given time.",
		tasks: [
			"Design, build, and test vibratory compaction device for a moon rover.",
			"Communicate results with lab and stakeholders."
		],
		qualifications: {
			required: [
				"Machine Shop Experience.",
				"Mechanical Design Experience.",
				"CAD Experience.",
				"Excel and matlab data analysis."
			],
			preferred: [
				"Machine Shop Experience (including CNC Mill and lathe).",
				"Experience working with small, intricate mechanical devices.",
				"3D Printing Experience."
			]
		}
	},
	{
		title: "Research Engineer",
		key: "class",
		projects: [nasaClass],
		level: PositionLevel.UNDERGRAD,
		majors: [MemberMajor.ME, MemberMajor.CE, MemberMajor.GEO_PHY, MemberMajor.CE],
		pay: {type: PositionPayType.HOURLY, value: 15},
		hours: 20,
		start: {semester: PositionSemester.SPRING, year: 2021},
		description: "CLASS is a NASA Solar System Exploration Virtual Institute led by the University of Central Florida. CLASS stands for Center for Lunar and Asteroid Surface Science and isa consortium of universities and commercial partners researching rocky and atmosphereless bodies. MTU is a node in CLASS and our focus is on ISRU on the lunar surface with a focus on developing and characterizing our own MTU lunar regolith simulant - currently being used on multiple contracts. Near term goals are to study wear of systems due to exposure with lunar simulant as well as to support simulant prep for other experiments such as the LuSTR and MRE research.",
		tasks: [
			"Study the interaction between lunar regolith and mechanisms (Mechanism forces, wear, wheel sinkage, traction, etc.).",
			"Support other projects which do testing in lunar regolith simulant.",
			"Design and fabricate test support equipment as needed.",
			"Maintain simulant bucket database.",
			"Simulant production as needed.",
		],
		qualifications: {
			required: [
				"Excel and matlab data analysis.",
				"Interpret information from research papers.",
				"Must be able to carry 50 lbs.",
			],
			preferred: [
				"Experience with statistics.",
				"Basic shop experience.",
			]
		}
	},
	{
		title: "R&D Mechanical Engineer",
		projects: [mre],
		key: "mre",
		level: PositionLevel.UNDERGRAD,
		majors: [MemberMajor.ME],
		pay: {type: PositionPayType.HOURLY, value: 15},
		hours: 40,
		start: {semester: PositionSemester.SPRING, year: 2021},
		description: "NASA KSC is developing a molten regolith electrolysis reactor to produce oxygen on the lunar surface. This reactor needs to be supplied with 10-100 kg of lunar regolith in a given time and MTU is responsible for characterizing the transport and delivery mechanisms. This will be done through experiments to measure the friction of different materials impacted through regolith interaction and study hopper flow. Three methods of material transport will also be investigated. These experiments will be designed and built for testing with lunar regolith simulant under atmospheric conditions with the project maturing to vacuum testing in our dusty thermal vacuum chamber.",
		tasks: [
			"CAD Design",
			"Construction and and Assembly of Conveying Systems",
			"Conveying System Testing (Atmospheric and Vacuum)",
			"Data Collection",
			"Data Analysis"
		],
		qualifications: {
			required: [
				"CAD (NX, Autodesk Inventor)",
				"Shop Experience (High/Competent)",
				"Data Analysis Software (Excel, MatLab)",
			],
			preferred: [
				"Some Electrical Knowledge (Basic Motor Wiring, Arduino)",
				"Labview Experience"
			]
		}
	},
	{
		title: "R&D Test Engineer",
		projects: [redWater],
		key: "redwater",
		level: PositionLevel.UNDERGRAD,
		majors: [MemberMajor.ME],
		pay: {type: PositionPayType.HOURLY, value: 15},
		hours: 40,
		start: {semester: PositionSemester.SPRING, year: 2021},
		description: "RedWater is a project under leadership from Honeybee Robotics where our lab is investigating the efficiency of ice melt probes for melting glacier ice on Mars. The PSTDL uses the smaller of our vacuum chambers to do thermal melt tests under Martian pressure and temperature conditions. Classifying these probes requires ice block preperations, ogranizing test setups, and the use of passive and active actuated melt probes to melt ice. Measurement of power use, displacement rate, and total volume of melted water under different power levels and with different probes materials/geometries are major goals of this project.",
		tasks: [
			"Maintenance and troubleshooting of microcontroller and DAQ.",
			"System Testing (Vacuum and/or Atmospheric)",
			"Data Collection",
			"Data Analysis",
		],
		qualifications: {
			required: [
				"Microcontroller Experience (Arduino) (High/Competent)",
				"Data Analysis Software (Excel, MatLab)",
				"Test Procedure Composition and Documentation (High/Competent)",
				"Mechanical System Repair/Maintenance (Competent)",
			],
			preferred: [
				"Some Electrical Knowledge (Basic Wiring)",
				"Machine Shop Experience",
				"LabJack Experience",
			]
		}
	}
];