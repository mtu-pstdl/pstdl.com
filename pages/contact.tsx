/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement} from "react";
import Layout from "../components/Layout";

export default function ContactPage(): ReactElement {
	return <Layout title={"Contact"} className={"ContactPage"}>
		<h2>Contact</h2>
		<h3>General Inquiries</h3>
		<p>Please direct general inquiries to Dr. Paul van Susante at <a className={"link"} href={"mailto:pjvansus@mtu.edu"}>pjvansus@mtu.edu</a></p>
		<h2>Apply</h2>
		<a target={"_self"} rel={"noreferrer nofollow"} href={"/career"} className={"button"}>Open Positions</a>
		<h3>Enterprise Application</h3>
		<h4>What is Enterprise?</h4>
		<p>The Michigan Tech Enterprise Program is an integrated curriculum that enables interdisciplinary teams of undergraduates to work on complex engineering projects while earning credits towards their degree. Teams perform testing and analyses, make recommendations, manufacture parts, stay within budgets and schedules, and manage multiple projects while faculty and industry members act as coaches and mentors. Teams are often multidisciplinary, mimicking the project team structure in many industries.</p>
		<h4>Mining INnovation Enterprise (MINE)</h4>
		<p>The Mining INnovation Enterprise (MINE) seeks to design, test, and implement mining innovation technologies for industry partners. MINE works in interdisciplinary sub-teams to solve current and future challenges for the mining industry on earth and off-planet. Opportunities include developing autonomous lunar robotic mining missions, undersea mining ROVs, and developing ISRU technology.</p>
		<a target={"_blank"} rel={"noreferrer nofollow"} href={"https://docs.google.com/forms/d/e/1FAIpQLSf1UO5LW3DbGT7rhxr7L_-646cVdU_hrcQEN-D9HKsAH4jDBw/viewform?usp=sf_link"} className={"button"}>Apply</a>
	</Layout>
}