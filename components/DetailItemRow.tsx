/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {DetailItem} from "../interfaces/DetailItem";
import Link from "next/link";
import Image from "next/image";

export interface DetailItemRowProps {
	base: string;
	item: DetailItem;
}

export function DetailItemRow(props: PropsWithChildren<DetailItemRowProps>): ReactElement {

	const url: string = "/" + props.base + "/" + props.item.link + "/icon.jpg";
	const title = props.item.title;
	const description = props.item.description;

	return (<Link href={"/" + props.base + "/" + props.item.link}>
		<div className={"ProjectRow"}>
			{url && <img alt={"profile"} className={"background"} src={url}/>}
			{url && <div className={"dark"}/>}
			<Image alt={"profile"} className={"logo"} width={200} height={200} src={url}/>
			<span className={"name"}>{title}</span>
			<span className={"summary"}>{description}</span>
		</div>
	</Link>);

}
