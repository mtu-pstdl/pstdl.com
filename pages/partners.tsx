/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { ReactElement } from "react";
import Layout from "../components/Layout";
import Image from "next/image";

import nasa from "../public/nasa.png";
import honeybee from "../public/honeybee.png";
import lunarOutpost from "../public/lunar-outpost.png";
import mtu from "../public/mtu.png";
import mines from "../public/mines.png";
import aispacefactory from "../public/aispacefactory.png";

export default function PartnershipsPage(): ReactElement {
	return <Layout title={"Partnerships"} className={"PartnershipsPage"}>
		<h2>Partnerships</h2>
		<div className={"grid"}>
			<Image src={nasa} alt={"nasa"} />
			<Image src={honeybee} alt={"honeybee"} />
			<Image src={lunarOutpost} alt={"lunar-outpost"} />
			<Image src={mtu} alt={"mtu"} />
			<Image src={mines} alt={"mines"} />
			<Image src={aispacefactory} alt={"aispacefactory"} />
		</div>
	</Layout>
}
