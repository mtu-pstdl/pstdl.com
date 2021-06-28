import {projects} from "../data/projects";

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
	members?: string[];
	images?: {src: string, thumb?: string}[];
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

export function getDetailsForUsername(username: string, arr: DetailItem[]): DetailItem[] {
	const memProjects: DetailItem[] = [];
	for (const p of arr) {
		if (!p.members) continue;
		if (p.members.indexOf(username) !== -1) memProjects.push(p);
	}
	return memProjects;
}