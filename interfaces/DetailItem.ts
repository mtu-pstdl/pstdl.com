/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export interface DetailItem {
	title: string;
	description?: string;
	link: string;
}

export function getDetailItemByLink(id: string | string[], arr: DetailItem[]): DetailItem | undefined {
	if (Array.isArray(id)) id = id.join("/")
	for (const i of arr) {
		if (i.link === id) {
			return i;
		}
	}
	return undefined;
}