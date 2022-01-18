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
				return "Undergraduate Researchers"
			case "ms":
				return "Masters Researchers"
			case "phd":
				return "Ph.D. Researchers"
			case "pi":
				return "Director & Founder"
			case "re":
				return "Research Engineers"
			case "sm":
				return "Student Members"
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
			case MemberType.RE:
				return 1;
			case MemberType.PHD:
				return 2;
			case MemberType.MS:
				return 3;
			case MemberType.BS:
				return 4;
			case MemberType.SM:
					return 5;
			default:
				return -1;
		}
	}

	const res: Members = [{header: "Members", subsections: [
			{subheader: "pi", members: []},
			{subheader: "re", members: []},
			{subheader: "phd", members: []},
			{subheader: "ms", members: []},
			{subheader: "bs", members: []},
			{subheader: "sm", members: []},
		]}, {header: "Alumni", subsections: [
			{subheader: "pi", members: []},
			{subheader: "re", members: []},
			{subheader: "phd", members: []},
			{subheader: "ms", members: []},
			{subheader: "bs", members: []},
			{subheader: "sm", members: []},
		]}];

	for (const m of members) {
		const p = res[(m.alumni === true) ? 1 : 0].subsections[indexForType(m.type)];
		p.members.push(m)
	}

	return { props: { members: res } }
}