/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {Member, MemberMajor, MemberType} from "../interfaces/Member";

export const members: Member[] = [
	{
		firstName: "Austen",
		lastName: "Goddu",
		username: "ajgoddu",
		major: MemberMajor.CPE,
		type: MemberType.MS,
		bio: "Austen Goddu is a 5th year Computer Engineering student here at Michigan Tech. Austen joined the Planetary Surface Technology Development Lab after spending several years on the leadership team in Michigan Tech's Aerospace Enterprise. There, Austen gained experience in Systems Engineering and Flight Software Design. Working on the L-SABRE development team, Austen works to design and build L-SABRE's computer system and flight software, assists with the Systems engineering and mission design, and perfoMemberType.MS testing of specific elements of customer hardware.",
		linkedIn: "https://www.linkedin.com/in/austen-g-83a639bb/",
		alumni: false,
	},
	{
		firstName: "Ben",
		lastName: "Wiegand",
		username: "bdwiegan",
		major: MemberMajor.ME,
		type: MemberType.RE,
		bio: "Ben Wiegand received his M.S. in mechanical engineering from Michigan Tech in 2021. His master's degree focused on the commissioning and testing of the PSTDL's dusty thermal vacuum chamber (DTVAC). He has since been hired as a research engineer focusing on the instrumentation of a cone penetrometer for the LuSTR project. His past experiences include robotics and controls for 3D motion platforms, algorithms for plastics manufacturing, and 3D kinematic simulations for military vehicles.",
		linkedIn: "https://www.linkedin.com/in/benjamin-w-48378b175/",
		alumni: false,
	},
	{
		firstName: "Ben",
		lastName: "Chaffee",
		username: "brchaffe",
		major: MemberMajor.ME,
		type: MemberType.PHD,
		bio: "Ben Chaffee received a Bachelor's of Science in Mechanical Engineering from the University of Akron in 2014 and a Master’s in Robotic Systems Development from Carnegie Mellon in 2015. He is now a Senior Engineer at Wecall Inc. in Chardon, OH, a company that fabricates fasteners used on buildings and bridges throughout the US and Canada. At Wecall, Ben leads projects in designing and testing new fasteners to meet customer needs. He also works on developing new machines and processes to increase efficiency and throughput. Ben is now pursuing a ME-EM PhD at MTU and joined the PSTDL in the Fall of 2020. He is looking forward to bringing his collegiate and industry experience to the team to assist with the development of future lunar robots.",
		linkedIn: "https://www.linkedin.com/in/ben-chaffee-464453101/",
		alumni: false
	},
	{
		firstName: "Collin",
		lastName: "Miller",
		username: "collinmi",
		major: MemberMajor.ME,
		type: MemberType.BS,
		linkedIn: "https://www.linkedin.com/in/collin-miller-543a641a3/",
		alumni: false,
	},
	{
		firstName: "Dante",
		lastName: "Paglia",
		username: "dfpaglia",
		major: MemberMajor.CS,
		type: MemberType.MS,
		bio: "Dante Paglia received his B.S. in computer science from Michigan Technological University in the spring of 2020. He is continuing on his education to pursue an accelerated M.S. in computer science at Michigan Tech and will be graduating in the spring of 2021. His experience comes from his past internship at Space Dynamics Laboratory and his time leading the software team of Michigan Tech’s Aerospace Enterprise. Dante joined the PSTDL in the fall of 2020 and is working on adding an augmented reality sandbox to the lab's facilities.",
		linkedIn: "https://www.linkedin.com/in/dante-paglia/",
		alumni: true,
	},
	{
		firstName: "Erik",
		lastName: "VanHorn",
		username: "eavanhor",
		major: MemberMajor.EE,
		type: MemberType.BS,
		linkedIn: "https://www.linkedin.com/in/erik-vanhorn-98aa66172/",
		alumni: false,
	},
	{
		firstName: "Elijah",
		lastName: "Cobb",
		username: "ejcobb",
		major: MemberMajor.CS,
		type: MemberType.BS,
		bio: "Elijah Cobb is finishing his B.S. in Computer Science from Michigan Technological University in the Fall semester of 2021 and has been admitted into Michigan Tech's Computer Science Ph.D. program starting Spring 2022. Elijah got his start with software development working for a startup out of high school developing a suite of applications. Elijah is currently a Research Assistant at the Planetary Surface Technology Development Lab under the direction of Dr. Paul van Susante. At the PSTDL, Elijah designs and develops control software for various projects including T-REX - A NASA BIG Idea 2020 and NASA Watts on the Moon winning Lunar Rover, IRGO - an infrared tracking gravity offloading device housed in a lunar simulant sandbox, LuSTR - adapting a heated percussive cone penetrometer to characterize the strength of lunar soil or regolith for NASA with a partnership from Honeybee Robotics. In addition to the PSTDL, Elijah is an Undergraduate Research Fellow of the Michigan Technological University College of Computing. Working under the direction of Dr. Charles Wallace, Elijah is a member of the \"USDS\" project, supported by the U.S. Navy through ARiA (Applied Research in Acoustics) to develop and validate a common language interface between sensor data streMemberType.MS and validation testing using embedded Systems. Elijah is also a member of a study funded by the National Science Foundation named \"FEW Conscious\" analyzing household food, energy, and water consumption.",
		linkedIn: "https://www.linkedin.com/in/elijahjcobb/",
		twitter: "https://twitter.com/elijahjcobb",
		alumni: false
	},
	{
		firstName: "Eric",
		lastName: "Mosner",
		username: "emmossne",
		major: MemberMajor.ME,
		type: MemberType.BS,
		alumni: true,
	},
	{
		firstName: "George",
		lastName: "Johnson",
		username: "georgejo",
		major: MemberMajor.ME,
		type: MemberType.MS,
		bio: "George Johnson is finishing his senior year B.S. in Mechanical Engineering and Minoring in Manufacturing. Planning to graduate in the Spring of 2021, George is also considering enrolling in graduate school to obtain his M.S. in Mechanical Engineering. His past experience comes from a summer internship at Woodward Inc, Managing the MTU Lunabotics Competition Team, conducting undergraduate research for the PSTDL and Honeybee robotics on the RedWater project. George joined the PSTDL in the summer of 2020 and is continuing research on the RedWater project as well as completing a Lunar Trenching project for his Senior Capstone project.",
		linkedIn: "https://www.linkedin.com/in/george-johnson-a05328195/",
		alumni: false,
	},
	{
		firstName: "Hunter",
		lastName: "McGillivray",
		username: "hjmcgill",
		major: MemberMajor.ME,
		type: MemberType.BS,
		bio: "I am an undergraduate student at Michigan Tech with research experience for the NASA BIG Ideas challenge where our team developed a tethered lunar rover capable of exploring and providing infrastructure to the moon's permanently shaded regions. I did the design and testing for a number of mechanical subSystems, most notably the system that managed the tension and deployment of our superconducting tether. I am also a FIRST robotics alumni with 2 world championship wins and an eagle scout.",
		linkedIn: "https://www.linkedin.com/in/hunter-mcgillivray-31ba051b4/",
		alumni: false,
	},
	{
		firstName: "Marcello",
		lastName: "Guadagno",
		username: "mcguadag",
		major: MemberMajor.ME,
		type: MemberType.PHD,
		bio: "Marcello Guadagno (Chell) has a Bachelor's in Mechanical Engineering with minors in Aerospace Engineering, Electrical Engineering, and International Leadership (MTU 2019). He has 5 years of end-to-end space mission engineering and program management experience. During his undergrad, Marcello led the development of several smallsat missions while at Michigan Tech and worked on the OCULUS-ASR mission launched in 2019. He has previously worked at the Space Dynamics Laboratory and NASA as a Guidance, Navigation & Control Systems engineer. Marcello began his work in the PSTDL in the Spring of 2020. His graduate work focuses on developing In-Situ Lunar robotic mining missions.",
		linkedIn: "https://www.linkedin.com/in/marcelloguadagno/",
		alumni: false,
	},
	{
		firstName: "Nicholas",
		lastName: "Zamora",
		username: "nzamora",
		major: MemberMajor.CPE,
		type: MemberType.BS,
		linkedIn: "https://www.linkedin.com/in/nicholas-zamora-3473aa178/",
		alumni: true,
	},
	{
		firstName: "Dr. Paul",
		lastName: "van Susante",
		username: "pjvansus",
		major: MemberMajor.ME,
		type: MemberType.PI,
		bio: "Dr. van Susante grew up in The Netherlands. He graduated with a MSc in Civil Engineering from Delft University of Technology in 2001 with a thesis topic of building large telescopes in the permanently shaded lunar polar craters. He did his internship at the European Space Agency in Noordwijk (ESTEC), The Netherlands, and led his award winning senior design team with a lunar base design for lunar He 3 surface mining. In 2002 he started at the Colorado School of Mines at the invitation of Mike Duke to continue lunar telescope work and received a MSc in Engineering Systems in 2004. Since 2003 he has been involved with in-situ Resource Utilization studies and hardware development and testing, he led the development of a first prototype of a lunar bucket ladder, backhoe and performed regolith simulant property testing for RESOLVE. He was faculty advisor for 5 student teMemberType.MS participating in the centennial excavation challenge and lunabotics mining competition from 2008-2012 and now a 6 th team at MTU. In 2010 he was a National Space Grant Faculty Fellow at NASA Kennedy Space Center working on lunar landing pad construction methods and testing. His PhD from CSM in 2011 included modeling of lunar regolith excavation forces. He has worked on numerous SBIR/STTR/NIAC and other grants with numerous aerospace companies and NASA centers on ISRU related research, Lunar and Martian economics and architecture studies. After 7 years as a senior lecturer, he is now an assistant professor at MTU and perfoMemberType.MS research in the areas of In-situ resource utilization (ISRU) for space exploration and surface operations on the Moon, Mars and Asteroids. His Planetary Surface Technology Development Lab includes simulation, prototype development and test facilities. His research group and Mining Innovation Enterprise perform research in collaboration with several companies for several funded multi-year NASA grants such as extracting water from gypsum rock and buried glaciers on Mars and water extraction from ice in permanently shadowed craters on the Moon. Other aspects of the research include study and prototyping and testing robotic Systems for excavation and construction for infrastructure placement such as trenching, roads, landing pads, bulk material movement and beneficiation of source material.",
		linkedIn: "https://www.linkedin.com/in/paul-van-susante-ph-d-6612271/",
		twitter: "https://twitter.com/mtu_pstdl",
		alumni: false,
	},
	{
		firstName: "Robert",
		lastName: "Lawrence",
		username: "ralawren",
		major: MemberMajor.CE,
		type: MemberType.BS,
		bio: "Robert Lawrence is finishing up his Senior year B.S. in Chemical Engineering this Academic Year. With plans to graduate in the Spring of 2021. Past experience include rock crushing laboratories, benedict lab research, and a minor in mineral processing. Robert Joined the PSTDL during the summer of 2020, and is presently working on developing a low cost- high volume lunar highland simulant for the testing beds.",
		linkedIn: "https://www.linkedin.com/in/robert-lawrence-380bbb1a3/",
		alumni: true,
	},
	{
		firstName: "Michael",
		lastName: "Foetisch",
		username: "msfoetis",
		linkedIn: "https://www.linkedin.com/in/michael-foetisch-student/",
		major: MemberMajor.ME,
		type: MemberType.PHD,
		alumni: false
	},
	{
		firstName: "Travis",
		lastName: "Wavrunek",
		username: "tawavrun",
		major: MemberMajor.ME,
		type: MemberType.PHD,
		bio: "Travis Wavrunek completed his B.S. in Mechanical Engineering at Michigan Tech in Spring 2020 and joined the PSTDL lab the following summer. His work focuses on creating a gravity offloading system for rover testing in the lunar sandbox as well as thermal modeling of the L-SABRE.",
		linkedIn: "https://www.linkedin.com/in/travis-wavrunek/",
		alumni: false,
	},
	{
		firstName: "Ted",
		lastName: "Gronda",
		username: "tcgronda",
		major: MemberMajor.ME,
		type: MemberType.BS,
		linkedIn: "https://www.linkedin.com/in/ted-gronda-04891015a/",
		alumni: true,
	},
	{
		firstName: "Wyatt",
		lastName: "Wagoner",
		username: "wtwagone",
		major: MemberMajor.ME,
		type: MemberType.BS,
		alumni: true,
		linkedIn: "https://www.linkedin.com/in/wyatt-wagoner/"
	},
	{
		firstName: "Samantha",
		lastName: "Zerbel",
		major: MemberMajor.ME,
		type: MemberType.BS,
		alumni: false,
		username: "smzerbel",
		linkedIn: "https://www.linkedin.com/in/samantha-zerbel-7ab7b51b8/",
		bio: "For my undergraduate research I am continuing the RedWater Ice Project. On campus, I am a leadership member on the aerospace enterprise and part of the husky swim club and InterVarsity. Last summer I had the pleasure of interning at Fincantieri Marinette Marine. I'm from Green Bay, Wisconsin. In my spare time I enjoy swimming, hiking, traveling and cooking/baking."
	},
	{
		lastName: "Kaminski",
		major: MemberMajor.GEO_PHY,
		type: MemberType.MS,
		firstName: "Caleb",
		username: "cjkamins",
		alumni: false,
		linkedIn: "https://www.linkedin.com/in/caleb-kaminski-186b531a0/"
	},
	{
		firstName: "Nathan",
		lastName: "Miller",
		type: MemberType.BS,
		alumni: false,
		major: MemberMajor.ME,
		bio: "Nathan Miller is a 3rd year mechanical engineering undergraduate expected to graduate in the spring of 2023. His past experiences include leadership on MTU’s Mining Innovation Enterprise. He joined the PSTDL in summer of 2021 and is continuing the development of a lunar simulant used for testing beds.",
		linkedIn: "https://www.linkedin.com/in/millernj-110200/",
		username: "nathanmi"
	},
	{
		firstName: "Chuck",
		lastName: "Carey",
		username: "clcarey",
		major: MemberMajor.ME,
		type: MemberType.BS,
		alumni: false,
		linkedIn: "https://www.linkedin.com/in/chuck-carey-9280931b9/"
	},
	{
		firstName: "Jason",
		lastName: "Noe",
		type: MemberType.PHD,
		alumni: false,
		major: MemberMajor.ME,
		username: "jnoe",
		linkedIn: "https://www.linkedin.com/in/jason-noe-233917152/",
		bio: "Jason Bendixen Noe graduated from The Ohio State University with a Bachelor’s in Aerospace Engineering in Spring 2021. Since August 2019, Jason has also been an Engineering Intern at Made In Space mainly working in Research and Development. First, spending a year at the Made In Space headquarters in Jacksonville Florida and then working remotely since the Fall of 2020. Prior to August 2019, Jason worked at the Ohio State Center for Manufacturing Excellence 3D Printing Prototyping Lab (CDME). Jason was also the team lead for the NASA Micro-g NExT team for Ohio State from 2018-2019 and has been a member of the Ohio State Battelle Center for Science, Engineering and Public Policy, run by Dr. Elizabeth Newton and Dr. John Horack (Space SCOPE), since 2017."
	},
	{
		firstName: "Rocco",
		lastName: "Carlson",
		type: MemberType.BS,
		alumni: false,
		major: MemberMajor.EE,
		username: "roccoc",
		linkedIn: "https://www.linkedin.com/in/rocco-carlson-47b85821a/",
		bio: "Rocco Carlson is a second year Electrical Engineering student at Michigan Tech. He joined the PSTDL in the fall of 2021 to work on the NASA LuSTR project."
	},
	{
		firstName: "Jafet",
		lastName: "Pinto",
		type: MemberType.BS,
		alumni: false,
		major: MemberMajor.ME,
		username: "jpintore",
		linkedIn: "https://www.linkedin.com/in/jafet-pinto-reveggino-122a50164/"
	},
	{
		firstName: "Gregory",
		lastName: "Redlon",
		type: MemberType.BS,
		alumni: false,
		major: MemberMajor.ME,
		username: "gtredlon",
		linkedIn: "https://www.linkedin.com/in/gregory-redlon-23701621b/"
	},
]

export function getMemberByLink(id: string | string[]): Member | undefined {
	if (Array.isArray(id)) id = id.join("/")
	for (const i of members) {
		if (i.username === id) {
			return i;
		}
	}
	return undefined;
}