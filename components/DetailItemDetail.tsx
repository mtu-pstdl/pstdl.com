/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {DetailItem} from "../interfaces/DetailItem";
import Layout from "./Layout";

export interface DetailItemDetailProps {
	item: DetailItem;
	md?: string;
}

export function DetailItemDetail(props: DetailItemDetailProps): ReactElement {

	const title = props.item.title;

	return (<Layout title={title} className={"ProjectDetail main"}>
		<h2>{title}</h2>
		<em>{props.item.description}</em>
		<ReactMarkdown
			allowDangerousHtml={true}
			className={"md"}
			plugins={[gfm]}
			children={props.md ?? "Content coming soon..."}
			renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}
		/>
	</Layout>);
}
