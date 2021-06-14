/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import Markdown from "react-markdown"
import {News} from "../interfaces/News";
import {OpenInNew as Link} from "@material-ui/icons";
import {pDateToString} from "../interfaces/Date";

export interface NewsViewProps {
	news: News;
}

export function NewsView(props: PropsWithChildren<NewsViewProps>): ReactElement {

	const content = props.news.content
	const link = props.news.link;

	return (<a className={"NewsView" + (link ? " NewsViewClickable" : "")} href={link} target={"_blank"} rel={"noopener noreferrer"}>
		<div className={"left"}>
			<div className={"top"}>
				<span className={"title"}>{props.news.title}</span>
				<span className={"date"}>{pDateToString(props.news.date)}</span>
			</div>
			<div className={"bottom"}>
				{content && <Markdown>{content}</Markdown>}
			</div>
		</div>
		<Link style={{display: link ? "block" : "none"}} className={"link"}/>
	</a>);

}
