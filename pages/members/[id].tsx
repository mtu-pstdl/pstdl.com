/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import React, {PropsWithChildren, ReactElement} from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import {getMemberByLink, members} from "../../data/members";
import {getMemberTypeString, Member} from "../../interfaces/Member";
import Layout from "../../components/Layout";
import {Email, LinkedIn, Twitter} from "@material-ui/icons";
import {DetailItemRow} from "../../components/DetailItemRow";
import {getProjectsForUser} from "../../data/projects";
import {getFacilitiesForUsername} from "../../data/facilities";

export interface MembersDetailPageProps {
	member: Member;
}

export default function MembersDetailPageProps(props: PropsWithChildren<MembersDetailPageProps>): ReactElement {

	const projects = getProjectsForUser(props.member);
	const facilities = getFacilitiesForUsername(props.member);

	return (<Layout className={"MemberDetailPage"} title={props.member.username}>
		<div className={"top"}>
			<img alt={"profile"} className={"profile"} src={"/members/" + props.member.username + ".jpg"}/>
			<div className={"right"}>
				<span className={"name"}>{props.member.firstName + " " + props.member.lastName}</span>
				<span className={"email"}>{props.member.username + "@mtu.edu"}</span>
				<span className={"type"}>{(props.member.alumni ? "Alumni " : "") + getMemberTypeString(props.member.type)}</span>
				<div className={"buttons"}>
					<a rel={"noopener noreferrer"} target={"_blank"} href={"mailto:" + props.member.username + "@mtu.edu"}><Email className={"button"}/></a>
					{props.member.linkedIn && <a rel={"noopener noreferrer"} target={"_blank"} href={props.member.linkedIn}><LinkedIn className={"button"}/></a>}
					{props.member.twitter && <a rel={"noopener noreferrer"} target={"_blank"} href={props.member.twitter}><Twitter className={"button"}/></a>}
				</div>
			</div>
		</div>
		{props.member.bio && <p className={"bio"}>{props.member.bio}</p>}
		{projects.length !== 0 && <div>
            <h2>{props.member.alumni ? "Past " : ""}Projects</h2>
            <div className={"projects"}>
				{
					projects.map((p, i) => {
						return <DetailItemRow base={"projects"} item={p} key={i} />
					})
				}
            </div>
		</div>}
		{
			facilities.length !== 0 && <div>
                <h2>Facilities</h2>
                <div className={"projects"}>
					{
						facilities.map((p, i) => {
							return <DetailItemRow base={"facilities"} item={p} key={i} />
						})
					}
                </div>
			</div>
		}
	</Layout>)

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