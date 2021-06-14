/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export interface PDate {
	month: number;
	day: number;
	year: number;
}

export function pDateToString(date: PDate): string {
	return date.month + "-" + date.day + "-" + date.year;
}

export function pDateToTimestamp(date: PDate): number {
	return new Date(date.month + "-" + date.day + "-" + date.year).getTime();
}

export function pDateCompare(a: PDate, b: PDate): number {
	return pDateToTimestamp(b) - pDateToTimestamp(a);
}