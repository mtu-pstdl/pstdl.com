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
import {getMemberByLink} from "../data/members";
import {Member} from "../interfaces/Member";
import {MemberSmallView} from "./MemberSmallView";
import ImageGallery, {ReactImageGalleryItem} from "react-image-gallery";

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

	function fetchImages(): ReactImageGalleryItem[] {
		if (!props.item.images || props.item.images.length === 0) return [];
		return props.item.images.map(i => {
			return {original: i.src, thumbnail: i.thumb ?? i.src};
		});
	}

	const imageGalleryItems: ReactImageGalleryItem[] = fetchImages();

	return (<Layout title={title} className={"ProjectDetail main"}>
		<h2>{title}</h2>
		<em>{props.item.description}</em>
		<h3>Members</h3>
		{
			props.item.members && <div className={"members"}>
				{fetchMembers().map((m, i) => {
					return <MemberSmallView member={m} key={i}/>
				})}
            </div>
		}
		{imageGalleryItems.length !== 0 && <h3>Media</h3>}
		{imageGalleryItems.length !== 0 && <ImageGallery autoPlay items={imageGalleryItems} />}
		<ReactMarkdown
			allowDangerousHtml={true}
			className={"md"}
			plugins={[gfm]}
			children={props.md ?? "Content coming soon..."}
			renderers={{
				link: props => <a href={props.href} target="_blank">{props.children}</a>,
				heading: props => <h3>{props.children}</h3>,
			}}
		/>
	</Layout>);
}
