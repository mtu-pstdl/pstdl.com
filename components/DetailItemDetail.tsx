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
import {getMemberByLink, members} from "../data/members";
import {Member} from "../interfaces/Member";
import {MemberSmallView} from "./MemberSmallView";

export interface DetailItemDetailProps {
	item: DetailItem;
	md?: string;
}

export function DetailItemDetail(props: DetailItemDetailProps): ReactElement {

	const title = props.item.title;

	function fetchMembers(): Member[] {
		if (!props.item.members) return [];
		let members: Member[] = [];
		for (const m of props.item.members) members.push(getMemberByLink(m));
		members = members.filter(m => !m.alumni);

		members = members.sort((a, b) => a.lastName.localeCompare(b.lastName));
		return members;
	}

	return (<Layout title={title} className={"ProjectDetail main"}>
		<h2>{title}</h2>
		<em>{props.item.description}</em>
		{
			props.item.members && <div className={"members"}>
				{fetchMembers().map((m, i) => {
					return <MemberSmallView member={m} key={i}/>
				})}
            </div>
		}
		<ReactMarkdown
			allowDangerousHtml={true}
			className={"md"}
			plugins={[gfm]}
			children={props.md ?? "Content coming soon..."}
			renderers={{link: props => <a href={props.href} target="_blank">{props.children}</a>}}
		/>
	</Layout>);
}
