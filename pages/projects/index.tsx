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
	const completed = projects.filter(p =>
		p.link === "btic" || p.link === "class"
	  );
	  const ongoing = projects.filter(p =>
		p.link !== "btic" && p.link !== "class"
	  );
	return <Layout title={"Projects"}>
		<h2>Projects</h2>
		<h2>Ongoing Projects</h2>
		<DetailItemPage base={"projects"} items={ongoing}/>
		<h2>Completed Projects</h2>
		<DetailItemPage base={"projects"} items={completed}/>
	</Layout>
}