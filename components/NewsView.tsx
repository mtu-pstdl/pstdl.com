/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import Markdown from "react-markdown"
import {News} from "../interfaces/News";
import {OpenInNew as Link, Twitter} from "@material-ui/icons";
import {pDateToString} from "../interfaces/Date";

export interface NewsViewProps {
	news: News;
}

export function NewsView(props: PropsWithChildren<NewsViewProps>): ReactElement {

	const content = props.news.content
	const link = props.news.link;

	return (<a className={"NewsView" + (link ? " NewsViewClickable" : "") + (props.news.twitter ? " NewsView-twitter" : "")} href={link} target={"_blank"} rel={"noopener noreferrer"}>
		<div className={"left"}>
			<div className={"top"}>
				<div className={"titleContainer"}>
					<span className={"title"}>{props.news.title}</span>
					{props.news.twitter && <Twitter className={"logo"}/>}
				</div>
				<span className={"date"}>{pDateToString(props.news.date)}</span>
			</div>
			<div className={"bottom"}>
				{content && <Markdown>{content}</Markdown>}
			</div>
		</div>
		<Link style={{display: link ? "block" : "none"}} className={"link"}/>
	</a>);

}
