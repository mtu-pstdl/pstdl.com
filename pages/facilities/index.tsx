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
	return <Layout title={"Facilities"}>
		<h2>Facilities</h2>
		<p>Interested in running tests in one of our facilities? Contact <a href="pjvansus@mtu.edu"> Dr Paul van Susante</a></p>
		<DetailItemPage base={"facilities"} items={facilities}/>
	</Layout>
}