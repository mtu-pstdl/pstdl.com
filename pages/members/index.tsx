/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import Layout from "../../components/Layout";
import React, {ReactElement} from "react";
import {MemberView} from "../../components/MemberView";
import {Members, MembersSubsection, MemberType} from "../../interfaces/Member";
import {GetStaticProps} from "next";
import {members} from "../../data/members";

export function MemberSubsectionView(props: {value: MembersSubsection}): ReactElement {

	function getSubheader(): string {
		switch (props.value.subheader) {
			case "bs":
				return "Undergraduate Students"
			case "ms":
				return "Masters Students"
			case "phd":
				return "PhD Students"
			case "pi":
				return "Director"
			default:
				return ""
		}
	}

	if (props.value.members.length === 0) return <div/>;

	return <div>
		<h3>{getSubheader()}</h3>
		<div className={"members"}>
			{props.value.members
				.sort((a, b) => {
					return a.lastName.localeCompare(b.lastName)
				})
				.map((m, i) => {
					return <MemberView member={m} key={i}/>
				})}
		</div>
	</div>;
}

export function MemberSectionView(props: {value: {header: string, subsections: MembersSubsection[]}}): ReactElement {
	return (<div>
		<h2>{props.value.header}</h2>
		{props.value.subsections.map((x, i) => {
			return <MemberSubsectionView value={x} key={i}/>;
		})}
	</div>)
}

export interface MembersPageProps {
	members: Members
}

export default function MembersPage(props: MembersPageProps): ReactElement {
	return <Layout className={"MembersPage"} title={"Members"}>
		<div>
			{
				(props.members.map((x, i) => {
					return <MemberSectionView value={x} key={i}/>
				}))
			}
		</div>
	</Layout>
}

export const getStaticProps: GetStaticProps<MembersPageProps> = async (context) => {

	function indexForType(major: MemberType): number {
		switch (major) {
			case MemberType.PI:
				return 0;
			case MemberType.PHD:
				return 1;
			case MemberType.MS:
				return 2;
			case MemberType.BS:
				return 3;
			default:
				return -1;
		}
	}

	const res: Members = [{header: "Members", subsections: [
			{subheader: "pi", members: []},
			{subheader: "phd", members: []},
			{subheader: "ms", members: []},
			{subheader: "bs", members: []}
		]}, {header: "Alumni", subsections: [
			{subheader: "pi", members: []},
			{subheader: "phd", members: []},
			{subheader: "ms", members: []},
			{subheader: "bs", members: []}
		]}];

	for (const m of members) {
		const p = res[(m.alumni === true) ? 1 : 0].subsections[indexForType(m.type)];
		p.members.push(m)
	}

	return { props: { members: res } }
}