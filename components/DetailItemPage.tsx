/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement} from "react";
import {DetailItem} from "../interfaces/DetailItem";
import {DetailItemRow} from "./DetailItemRow";

export interface DetailItemPageProps {
	base: string;
	items: DetailItem[];
}

export function DetailItemPage(props: DetailItemPageProps): ReactElement {
	return (<div className={"projects"}>
		{(
			props.items.map((p, i) => {
				return <DetailItemRow base={props.base} item={p} key={i} />
			})
		)}
	</div>);
}