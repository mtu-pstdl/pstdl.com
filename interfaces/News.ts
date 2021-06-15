/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {PDate} from "./Date";

export interface News {
	title: string;
	date: PDate;
	content?: string;
	link?: string;
	twitter?: boolean;
}