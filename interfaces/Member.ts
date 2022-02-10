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
	RE = "Robotics Engineering"
}

export enum MemberType {
	BS,
	MS,
	PHD,
	PI,
	RE,
	SM
}

export interface Member {
	firstName: string;
	lastName: string;
	username: string;
	major: MemberMajor;
	type: MemberType
	alumni?: boolean;
	bio?: string;
	linkedIn?: string;
	twitter?: string;
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
		default:
			return ""
	}
}