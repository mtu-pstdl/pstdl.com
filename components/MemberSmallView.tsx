/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {Member} from "../interfaces/Member";
import Link from "next/link";

export interface MemberSmallViewProps {
	member: Member;
}

export function MemberSmallView(props: PropsWithChildren<MemberSmallViewProps>): ReactElement {

	if (!props.member) return <div/>;

	return (<Link href={"/members/" + props.member.username}>
		<div className={"MemberSmallView"}>
			<img src={"/members/" + props.member.username + ".jpg"} alt={props.member.username}/>
			<span>{props.member.firstName + " " + props.member.lastName}</span>
		</div>
	</Link>);

}
