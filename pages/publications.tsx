/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */
import React from "react";
import {ReactElement} from "react";
import Layout from "../components/Layout";
import {Publication} from "../interfaces/Publication";
import {GetServerSideProps, GetStaticProps} from "next";
import {publications} from "../data/publications";
import {pDateCompare, pDateToString} from "../interfaces/Date";
import {AstraBackground} from "../components/Astra";

export interface PublicationsPageProps {
	publications: Publication[];
}
let lastYear: number | null = null;
export default function PublicationsPage(props: PublicationsPageProps): ReactElement {
	return <Layout title={"Publications"} className={"PublicationsPage"}>
		<AstraBackground/>
		<h2>Publications</h2>
		<ol className={"content"}>
			{/*<table className={"publications"}>*/}
			{/*	<thead>*/}
			{/*	<tr className={"header"}>*/}
			{/*		<th className={"title"}>Title</th>*/}
			{/*		<th className={"date"}>Date</th>*/}
			{/*		<th className={"authors"}>Authors</th>*/}
			{/*		<th className={"publications"}>Publication</th>*/}
			{/*	</tr>*/}
			{/*	</thead>*/}
			{/*	<tbody>*/}
			{/*	{props.publications.map((publication, i) => {*/}
			{/*		return (*/}
			{/*			<tr className={"row"} key={i}>*/}
			{/*				<td className={"titleRow"}>{publication.title}</td>*/}
			{/*				<td className={"dateRow"}>{pDateToString(publication.date)}</td>*/}
			{/*				<td>{publication.authors.join(", ")}</td>*/}
			{/*				<td>{publication.publication}</td>*/}
			{/*			</tr>*/}
			{/*		)*/}
			{/*	})}*/}
			{/*	</tbody>*/}
			{/*</table>*/}
				{props.publications.map((publication, i) => {
					const year = publication.date.year;
					const parts: string[] = [
						publication.authors.join(", "),
						publication.title,
						publication.publication,
						pDateToString(publication.date)
					];

					const nodes = [];
					if (year !== lastYear) {
						nodes.push(
						  <li key={`year-${year}`} className="year-header">
							{year}
						  </li>
						);
						lastYear = year;
					}

					nodes.push(
						<li key={`pub-${i}`}>
						  {parts.join(", ")}
						</li>
					  );

					return <React.Fragment key={i}>{nodes}</React.Fragment>;
				})}
		</ol>
	</Layout>
}

export const getStaticProps: GetStaticProps<PublicationsPageProps> = async () => {
	return { props: { publications: publications.sort((a, b) => pDateCompare(a.date, b.date)) } }
}
