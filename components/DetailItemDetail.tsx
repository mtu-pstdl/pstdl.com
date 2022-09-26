/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { ReactElement } from "react";
import React, * as react from 'react'
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { DetailItem } from "../interfaces/DetailItem";
import Layout from "./Layout";
import { pjvansus } from "../data/members";
import { Member } from "../interfaces/Member";
import { MemberSmallView } from "./MemberSmallView";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

export interface DetailItemDetailProps {
	item: DetailItem;
	md?: string;
}

export function DetailItemDetail(props: DetailItemDetailProps): ReactElement {

	const title = props.item.title;

	function fetchImages(): ReactImageGalleryItem[] {
		if (!props.item.images || props.item.images.length === 0) return [];
		return props.item.images.map(i => {
			return { original: i.src, thumbnail: i.thumb ?? i.src };
		});
	}

	const imageGalleryItems: ReactImageGalleryItem[] = fetchImages();

	function sort(arr: Member[]): Member[] {
		return arr.sort((a, b) => a.lastName.localeCompare(b.lastName));
	}

	const members = sort(props.item.members.filter(m => (m.alumni !== true)));
	members.splice(0, 0, pjvansus);
	const alumni = sort(props.item.alumni.concat(props.item.members.filter(m => (m.alumni === true))));

	return (<Layout title={title} className={"ProjectDetail main"}>
		<h2>{title}</h2>
		<em>{props.item.description}</em>
		{imageGalleryItems.length !== 0 && <h3>Media</h3>}
		{imageGalleryItems.length !== 0 && <ImageGallery showFullscreenButton={false} additionalClass={"imagesContainer"} autoPlay items={imageGalleryItems} />}
		{(members.length + alumni.length) > 0 && <h3>Members</h3>}
		{members.length > 0 && <h4>Active</h4>}
		{
			members && <div className={"members"}>
				{members.map((m, i) => {
					return <MemberSmallView member={m} key={i} />
				})}
			</div>
		}
		{alumni.length > 0 && <h4>Alumni</h4>}
		{
			alumni && <div className={"members"}>
				{alumni.map((m, i) => {
					return <MemberSmallView member={m} key={i} />
				})}
			</div>
		}
		<ReactMarkdown
			className={"md"}
			// @ts-ignore - ignore gfm type error
			plugins={[gfm]}
			children={props.md ?? "Content coming soon..."}
			renderers={{
				// @ts-ignore - ignore gfm type error
				link: props => <a href={props.href} target="_blank">{props.children}</a>,
				// @ts-ignore - ignore gfm type error
				heading: props => <h3>{props.children}</h3>,
			}}
		/>
	</Layout>);
}
