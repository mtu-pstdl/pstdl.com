/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export type MembersSubsection = {
	subheader: string,
	members: Member[]
};

export type Members = {
	header: string,
	subsections: MembersSubsection[]
}[];

export enum MemberMajor {
	ME = "Mechanical Engineering",
	CPE = "Computer Engineering",
	CS = "Computer Science",
	EE = "Electrical Engineering",
	GEO_PHY = "Geophysics",
	CE = "Chemical Engineering",
	CEGE = "Civil and Geological Engineering",
	RE = "Robotics Engineering",
	ENV = "Environmental Engineering",
	CSM = "Computer Science and Mathematics",
	CIV = "Civil Engineering",
	GE = "Geological Engineering",
	BME = "Biomedical Engineering",
	SE = "Software Engineering"
}

export enum MemberType {
	BS,
	MS,
	PHD,
	PI,
	RE,
	SM,
	PD,
	BME,
	SE
}

export interface Member {
	firstName: string;
	lastName: string;
	username: string;
	major: MemberMajor | Array<MemberMajor>;
	type: MemberType
	alumni?: boolean;
	bio?: string;
	linkedIn?: string;
	twitter?: string;
	location?: {lat: number, lng: number};
}

export function getMemberTypeString(type: MemberType): string {
	switch (type) {
		case MemberType.BS:
			return "Undergraduate Researcher"
		case MemberType.MS:
			return "Masters Researcher"
		case MemberType.PHD:
			return "Ph.D. Researcher"
		case MemberType.PI:
			return "Director & Founder"
		case MemberType.RE:
			return "Research Engineer"
		case MemberType.SM:
			return "Student Member"
		case MemberType.PD:
			return "Postdoctoral Researcher"
		default:
			return ""
	}
}