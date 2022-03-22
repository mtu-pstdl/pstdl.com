/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {PropsWithChildren, ReactElement, useState} from "react";
import {Member, MemberType} from "../interfaces/Member";
import {Email, LibraryBooks, LinkedIn, OpenInNew, Twitter} from "@material-ui/icons";
import Link from "next/link";
import Image from "next/image";

export interface MemberViewProps {
	member: Member;
}

export function MemberView(props: PropsWithChildren<MemberViewProps>): ReactElement {

	function getType(): string {
		switch (props.member.type) {
			case MemberType.BS:
				return "Bachelor's"
			case MemberType.MS:
				return "Master's"
			case MemberType.PHD:
				return "PhD"
			case MemberType.PI:
				return "Principal Investigator"
			default:
				return ""
		}
	}

	function getPosition(): string {
		if (props.member.type === MemberType.PI || !props.member.major) return getType();
		return props.member.major
	}

	const [showBio, setShowBio] = useState(false);
	const url: string | undefined = "/members/" + props.member.username + ".jpg";

	return (<Link href={"/members/" + props.member.username}>
		<div className={"MemberView"}>
			<img className={"background"} src={url} alt={""}/>
			<div className={"top"}>
				<div className={"profile-container"}>
					<Image width={200} height={200} alt={"profile"} className={"profile"} src={url}/>
				</div>
				<span className={"name"}>{props.member.firstName + " " + props.member.lastName}</span>
				<span className={"email"}>{props.member.username + "@mtu.edu"}</span>
				<div className={"buttons"}>
					<a rel={"noopener noreferrer"} target={"_blank"}
					   href={"mailto:" + props.member.username + "@mtu.edu"}><Email className={"button"}/></a>
					{props.member.linkedIn &&
                    <a rel={"noopener noreferrer"} target={"_blank"} href={props.member.linkedIn}><LinkedIn
                        className={"button"}/></a>}
					{props.member.twitter &&
                    <a rel={"noopener noreferrer"} target={"_blank"} href={props.member.twitter}><Twitter
                        className={"button"}/></a>}
				</div>
			</div>
			<span className={"bottom"}>{getPosition()}</span>
		</div>
	</Link>)

}


