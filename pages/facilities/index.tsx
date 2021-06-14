/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement} from "react";
import Layout from "../../components/Layout";
import {DetailItemPage} from "../../components/DetailItemPage";
import {facilities} from "../../utils/facilities";

export default function FacilitiesPage(): ReactElement {
	return <Layout title={"Facilities"}>
		<h2>Facilities</h2>
		<DetailItemPage base={"facilities"} items={facilities}/>
	</Layout>
}