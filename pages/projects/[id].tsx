/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement} from "react";
import {DetailItemDetail, DetailItemDetailProps} from "../../components/DetailItemDetail";
import {getProjectByLink, projects} from "../../data/projects";
import {GetStaticPaths, GetStaticProps} from "next";
import {fetchMarkdown} from "../../data/md";

export default function ProjectsDetail(props: DetailItemDetailProps): ReactElement {
	return <DetailItemDetail {...props}/>
}

export const getStaticProps: GetStaticProps<DetailItemDetailProps> = async (context) => {
	const id = context.params.id;
	const item = getProjectByLink(id);
	return {props: {item, md: fetchMarkdown("/projects/" + item.link)}};
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: projects.map(i => {
			return {params: {id: i.link}};
		}),
		fallback: false
	}
}