/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import Twitter from "twitter";
import {News} from "../interfaces/News";
import * as FS from "fs";

export interface Tweet {
	created_at: string,
	id_str: string,
	text: string,
	favorite_count: number,
	entities: {
		urls: {
			url: string,
			expanded_url: string,
			display_url: string
		}[]
	},
	user: {
		name: string,
		screen_name: string,
		profile_image_url: string,
	},
	quoted_status?: {
		text: string,
		user: {
			name: string,
			screen_name: string,
			profile_image_url: string,
		},
		entities: {
			urls: {
				url: string,
				expanded_url: string,
				display_url: string
			}[]
		},
	}
}

interface TwitterAuth {consumer_key: string, consumer_secret: string, bearer_token: string}

function fetchCredentials(): TwitterAuth {
	return JSON.parse(FS.readFileSync("./twitter-auth.json").toString("utf8"));

}

export async function fetchTweets(): Promise<News[]> {

	const client = new Twitter(fetchCredentials());

	const news: News[] = [];
	const tweets = await client.get('statuses/user_timeline', {screen_name: "mtu_pstdl"}) as Tweet[];

	for (const t of tweets) {
		const d = new Date(t.created_at);
		news.push({
			title: "@mtu-pstdl on",
			content: t.text,
			link: "https://twitter.com/mtu_pstdl/status/" + t.id_str,
			date: {month: d.getMonth() + 1, day: d.getDate() + 1, year: d.getFullYear()},
			twitter: true
		})
	}

	return news;

}