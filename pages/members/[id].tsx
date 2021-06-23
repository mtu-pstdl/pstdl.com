/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {PropsWithChildren, ReactElement} from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import {getMemberByLink, members} from "../../data/members";
import {Member} from "../../interfaces/Member";

export interface MembersDetailPageProps {
	member: Member;
}

export function MembersDetailPageProps(props: PropsWithChildren<MembersDetailPageProps>): ReactElement {

	return (<div className={"MembersDetailPageProps"}>
		<span>Hello, {props.member.firstName}.</span>
	</div>)

}

export const getStaticProps: GetStaticProps<MembersDetailPageProps> = async (context) => {
	const id = context.params.id;
	const item = getMemberByLink(id);
	return {props: {member: item}};
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: members.map(i => {
			return {params: {id: i.username}};
		}),
		fallback: false
	}
}