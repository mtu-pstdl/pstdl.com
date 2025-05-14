/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement} from "react";
import Layout from "../../components/Layout";
import {DetailItemPage} from "../../components/DetailItemPage";
import {facilities} from "../../data/facilities";

export default function FacilitiesPage(): ReactElement {
	const facility = facilities.filter(p =>
			p.link === "dtvac" || p.link === "sandbox" || p.link === "irgo" || p.link === "containers" || p.link === "mtvac" || p.link === "dredge"
		);
		const robots = facilities.filter(p =>
			p.link !== "dtvac" && p.link !== "sandbox" && p.link !== "irgo" && p.link !== "containers" && p.link !== "mtvac" && p.link !== "dredge"
		);

	return <Layout title={"Facilities"}>
		<h2>Facilities</h2>
		<DetailItemPage base={"facilities"} items={facility}/>
		<h2>Robots</h2>
		<DetailItemPage base={"facilities"} items={robots}/>
	</Layout>
}