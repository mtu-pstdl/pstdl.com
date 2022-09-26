/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, { ReactElement, PropsWithChildren } from "react";
import { FaChevronRight as ArrowRight } from "react-icons/fa";
import { links } from "../data/links";
import Link from "next/link";

export interface MenuViewProps {
	open: boolean;
	handleClose: () => void;
}

export function MenuView(props: PropsWithChildren<MenuViewProps>): ReactElement {

	return (<div className={"MenuView" + (props.open ? " menuAnimate" : "")}>
		{
			(links.map((link, i) => {
				return (<MenuItemView key={i} name={link.name} link={link.link} />)
			}))
		}
	</div>);

}


export interface MenuItemViewProps {
	link?: string;
	name: string;
}

export function MenuItemView(props: MenuItemViewProps): ReactElement {
	return (<Link href={"/" + (props.link !== undefined ? props.link : props.name)}>
		<a className={"MenuItemView"}>
			<span className={"text"}>{props.name}</span>
			<ArrowRight className={"arrow"} />
		</a>
	</Link>)
}
