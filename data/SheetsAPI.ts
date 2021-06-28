/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {google} from "googleapis";
import {Member, MemberMajor, MemberType} from "../interfaces/Member";
import {OEnum, OObjectType, OOptional, ORegex, OStandardType} from "@element-ts/oxygen";

export class SheetsAPI {

	private static async auth() {
		return await google.auth.getClient({scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]});
	}

	private static async getRows(table: string): Promise<any[][]> {
		try {
			const auth = await this.auth();
			const sheets = google.sheets({version: "v4", auth});
			const range = `${table}!A2:Z`
			const res = await sheets.spreadsheets.values.get({
				spreadsheetId: process.env.SHEET_ID,
				range
			})
			return res.data.values;
		} catch (e) {
			console.error(e);
			return [];
		}
	}

	public static async members(): Promise<Member[]> {

		const members: Member[] = [];
		const rows = await this.getRows("members");

		for (const row of rows) {

			const o = {
				firstName: row[0],
				lastName: row[1],
				username: row[2],
				major: MemberMajor[row[3]],
				type: MemberType[row[4]],
				alumni: row[5] === "TRUE",
				bio: row[6],
				linkedIn: row[7],
				twitter: row[8]
			}

			const member = OObjectType.follow({
				firstName: OStandardType.string,
				lastName: OStandardType.string,
				username: OStandardType.string,
				major: OEnum.any(
					MemberMajor.ME,
					MemberMajor.CPE,
					MemberMajor.CS,
					MemberMajor.EE,
					MemberMajor.GEO_PHY,
					MemberMajor.CE,
				),
				type: OEnum.any(MemberType.BS, MemberType.MS, MemberType.PHD, MemberType.PI),
				alumni: OOptional.maybe(OStandardType.boolean),
				bio: OOptional.maybe(OStandardType.string),
				linkedIn: OOptional.maybe(ORegex.url()),
				twitter: OOptional.maybe(ORegex.url())
			}).verify(o);

			if (!members) continue;
			members.push(member);

		}

		return members;
	}

}