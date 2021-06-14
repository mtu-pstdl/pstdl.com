/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {DetailItem} from "../interfaces/DetailItem";
import Link from "next/link";

export interface DetailItemRowProps {
	base: string;
	item: DetailItem;
}

export function DetailItemRow(props: PropsWithChildren<DetailItemRowProps>): ReactElement {

	const url: string = "/" + props.base + "/" + props.item.link + "/logo.png";
	const title = props.item.title;
	const description = props.item.description;

	return (<Link href={"/" + props.base + "/" + props.item.link}>
		<div className={"ProjectRow"}>
			{url && <object data={url} className={"background"} type="image/jpg">
                <img alt={"profile"} className={"background"} src={"/blank.svg"}/>
            </object>}
			{url && <div className={"dark"}/>}
			<object data={url} className={"logo"} type="image/jpg">
				<img alt={"profile"} className={"logo"} src={"/blank.svg"}/>
			</object>
			<span className={"name"}>{title}</span>
			<span className={"summary"}>{description}</span>
		</div>
	</Link>);

}
