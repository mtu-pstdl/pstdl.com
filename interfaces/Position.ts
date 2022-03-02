/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {DetailItem} from "./DetailItem";
import {MemberMajor} from "./Member";

export enum PositionPayType {
	HOURLY,
	SALARY,
	STIPEND
}

export enum PositionSemester {
	FALL = "Fall",
	SPRING = "Spring",
	SUMMER = "Summer"
}

export enum PositionLevel {
	UNDERGRAD = "Undergraduate Research Assistant",
	GRAD = "Graduate Researcher",
	POSTDOC = "Postdoctoral Research",
	ENGINEER = "Research Engineer"
}

export interface Position {
	key: string;
	title: string;
	projects: DetailItem[];
	level: PositionLevel;
	majors: MemberMajor[];
	pay: {type: PositionPayType, value: number | null};
	hours: number;
	start: {semester: PositionSemester, year: number}
	description: string;
	tasks: string[];
	qualifications: {required: string[], preferred: string[]};
}

export function positionStartString(position: Position): string {
	return position.start.semester + " " + position.start.year;
}

export function positionPayString(position: Position): string {
	if (position.pay.type === PositionPayType.STIPEND) return "Full Support"
	if (position.pay.type === PositionPayType.SALARY) return "$" + position.pay.value + "/year"
	if (position.pay.type === PositionPayType.HOURLY) return "$" + position.pay.value + "/hour"
	return "";
}