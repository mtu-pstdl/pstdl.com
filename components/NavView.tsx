/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState} from "react";
import {MenuView} from "./MenuView";
import { Twirl as Hamburger } from "hamburger-react";
import {links} from "../data/links";
import Link from "next/link";

export interface NavViewProps {
	isHome?: boolean;
}

export function NavView(props: PropsWithChildren<NavViewProps>): ReactElement {

	const [open, setOpen] = useState(false);

	return (<div className={"NavView" + (props.isHome ? " NavViewHome" : "")}>
		<Link href={"/"}>
			<div className={"header"}>
				<img className={"mtu"} src={"/mtu.png"} alt={"mtu"}/>
				<img className={"globe"} src={"/logo-new.svg"} alt={"pstdl"}/>
				<h1>PSTDL - HuskyWorks</h1>
			</div>
		</Link>
		<div className={"bar"}>
			{
				(links.map((link, a) => {
					return <Link href={"/" + ((link.link !== undefined) ? link.link : link.name)} key={a}><span className={"link"}>{link.name}</span></Link>
				}))
			}
		</div>
		<div className={"hamburger"}>
			<Hamburger toggled={open} toggle={setOpen} />
		</div>
		<MenuView handleClose={() => setOpen(false)} open={open}/>
	</div>);

}
