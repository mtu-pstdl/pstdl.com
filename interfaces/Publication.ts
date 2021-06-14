/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {PDate} from "./Date";

export interface Publication {
	authors: string[];
	title: string;
	publication: string;
	date: PDate;
}
