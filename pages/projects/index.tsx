/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement} from "react";
import Layout from "../../components/Layout";
import {DetailItemPage} from "../../components/DetailItemPage";
import {projects} from "../../data/projects";

export default function ProjectsPage(): ReactElement {
	return <Layout title={"Projects"}>
		<h2>Projects</h2>
		<DetailItemPage base={"projects"} items={projects}/>
	</Layout>
}