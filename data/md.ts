/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as FS from "fs";
import * as Path from "path";

export function fetchMarkdown(link: string): string | null {
	const path = Path.resolve("./md" + link + ".md");
	if (!FS.existsSync(path)) return null;
	const file = FS.readFileSync(path);
	return file.toString("utf8");
}