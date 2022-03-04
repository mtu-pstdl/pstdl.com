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
	UNDERGRAD = "Undergraduate",
	GRAD = "Graduate",
	POSTDOC = "Postdoc",
	ENGINEER = "Professional"
}

export interface Position {
	key: string;
	title: string;
	projects: DetailItem[];
	levels: PositionLevel[];
	majors: MemberMajor[];
	pay: {type: PositionPayType, value: number | null};
	hours: number;
	semesters: {semester: PositionSemester, year: number}[]
	description: string;
	tasks: string[];
	qualifications: {required: string[], preferred: string[]};
}

export function positionStartString(position: Position): string {
	return position.semesters[0].semester + " " + position.semesters[0].year;
}

export function positionSemestersString(position: Position): string {
	return position.semesters.map(s => s.semester + " " + s.year).join(", ")
}

export function positionPayString(position: Position): string {
	if (position.pay.type === PositionPayType.STIPEND) return "Full Support"
	if (position.pay.type === PositionPayType.SALARY) return "$" + position.pay.value + "/year"
	if (position.pay.type === PositionPayType.HOURLY) return "$" + position.pay.value + "/hour"
	return "";
}