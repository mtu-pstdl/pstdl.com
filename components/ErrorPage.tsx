/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {PropsWithChildren, ReactElement} from "react";
import Layout from "./Layout";

export interface ErrorPageProps {
	msg: string;
}

export function ErrorPage(props: PropsWithChildren<ErrorPageProps>): ReactElement {
	return <Layout title={"Error"}>
		<h1>ERROR!{" " + props.msg}</h1>
	</Layout>
}