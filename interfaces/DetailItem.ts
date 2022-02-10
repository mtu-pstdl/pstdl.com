import {projects} from "../data/projects";
import {Member} from "./Member";

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
	members: Member[];
	alumni: Member[];
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

export function getDetailsForUsername(user: Member, arr: DetailItem[]): DetailItem[] {
	const memProjects: DetailItem[] = [];
	for (const p of arr) {
		const x = p.members.concat(p.alumni);
		for (const u of x) if (u.username === user.username) memProjects.push(p);
	}
	return memProjects;
}