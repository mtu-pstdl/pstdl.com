/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { ReactElement } from "react";
import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import { News } from "../interfaces/News";
import { NewsView } from "../components/NewsView";
import { news } from "../data/news";
import { pDateCompare } from "../interfaces/Date";
import { fetchTweets } from "../data/twitter";

export interface NewsPageProps {
	news: News[];
}

export default function NewsPage(props: NewsPageProps): ReactElement {
	return <Layout title={"News"} className={"NewsPage"}>
		<h2>News</h2>
		<div className={"elements"}>
			{
				props.news.map((n, i) => {
					return <NewsView key={i} news={n} />
				})
			}
		</div>
	</Layout>
}

export const getStaticProps: GetStaticProps<NewsPageProps> = async () => {

	let tweets: News[];

	try {
		tweets = await fetchTweets();
	} catch (e) {
		console.error(e)
		tweets = [];
	}
	const allNews = [...tweets, ...news];

	return {
		revalidate: 60 * 60, // 1 hr
		props: {
			news: allNews.sort((a, b) => pDateCompare(a.date, b.date))
		}
	}
}
