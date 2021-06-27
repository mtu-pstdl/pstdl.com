import React, {PropsWithChildren, ReactElement, ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {AstraBackground} from "./Astra";
import {NavView} from "./NavView";

type Props = {
	title?: string
	className?: string;
	disableDefault?: boolean;
	isHome?: boolean;
}

export default function Layout({ title, className, children, disableDefault, isHome }: PropsWithChildren<Props>): ReactElement {
	return <div className={"rootAppContainer"}>
		{ !disableDefault && <AstraBackground/>}
		<Head>
			<title>{"PSTDL" + (title ? (" - " + title) : "")}</title>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			<link rel="icon" href="/favicon-new.png" />
		</Head>
		<header>
			<NavView isHome={isHome}/>
		</header>
		<div className={"page" + (className ? (" " + className) : "") + (!disableDefault ? " main" : "")}>
			{children}
		</div>
	</div>
}