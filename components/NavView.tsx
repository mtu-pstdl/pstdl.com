/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren, useState} from "react";
import {MenuView} from "./MenuView";
import { Twirl as Hamburger } from "hamburger-react";
import {links} from "../utils/links";
import Link from "next/link";

export interface NavViewProps {

}

export function NavView(props: PropsWithChildren<NavViewProps>): ReactElement {

	const [open, setOpen] = useState(false);

	return (<div className={"NavView"}>
		<div className={"header"}>
			<img className={"mtu"} src={"/mtu.png"} alt={"mtu"}/>
			<img className={"globe"} src={"/globe.png"} alt={"pstdl"}/>
			<h1>
				{/*<span className={"P"}>P</span>*/}
				{/*<span className={"p"}>lanetary</span>*/}
				{/*<span className={"S"}>S</span>*/}
				{/*<span className={"s"}>urface</span>*/}
				{/*<span className={"T"}>T</span>*/}
				{/*<span className={"t"}>echnology</span>*/}
				{/*<span className={"D"}>D</span>*/}
				{/*<span className={"d"}>evelopment</span>*/}
				{/*<span className={"L"}>L</span>*/}
				{/*<span className={"l"}>ab</span>*/}
				PSTDL
			</h1>
		</div>
		<div className={"bar"}>
			{
				(links.map((link, a) => {
					return <Link href={"/" + ((link.link !== undefined) ? link.link : link.name)} key={a}><span className={"link"}>{link.name}</span></Link>
					// return <NavLink key={a} activeClassName={"link-active"} className={"link"} exact={(link.url !== undefined)} to={"/" + (link.url !== undefined ? link.url : link.name)}>{link.name}</NavLink>
				}))
			}
		</div>
		<div className={"hamburger"}>
			<Hamburger toggled={open} toggle={setOpen} />
		</div>
		<MenuView handleClose={() => setOpen(false)} open={open}/>
	</div>);

}
