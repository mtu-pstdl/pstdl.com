/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { positions } from "../../data/positions";
import { PositionRow } from "../../components/PositionRow";
import Layout from "../../components/Layout";
import { Position, positionPayString, positionStartString } from "../../interfaces/Position";
import {EventAvailable, LocalAtm, Person, QueryBuilder, SvgIconComponent} from "@material-ui/icons";
import styles from "../../styles/PositionDetail.module.scss"
import { FC } from "react";
import { DetailItemRow } from "../../components/DetailItemRow";

interface PageProps {
	position: Position;
}

const Bubble: FC<{
	icon: SvgIconComponent,
	label: string;
	value: string;
}> = props => {
	return <div className={styles.bubble}>
		<props.icon className={styles.icon} />
		<span className={styles.label}>{props.label}</span>
		<span className={styles.value}>{props.value}</span>
	</div>
}

const Page: NextPage<PageProps> = props => {

	const { levels, title, hours, description, semesters, projects, tasks, qualifications, majors } = props.position;

	return (
		<Layout title={title} className={styles.container}>
			<h2>{title}</h2>
			<div className={styles.bubbleContainer}>
				<Bubble icon={LocalAtm} label={"Compensation"} value={"Up-to " + positionPayString(props.position)} />
				{levels.map((l, i) => <Bubble icon={Person} key={i} label={"Type"} value={l} />)}
				<Bubble icon={QueryBuilder} label={"Commitment"} value={hours + " hrs/w"} />
				<Bubble icon={EventAvailable} label={"Start Date"} value={positionStartString(props.position)} />
			</div>
			<h3>Semesters</h3>
			<p>This position may have additional semesters if the allocation of further funding is available. Most positions involve 40 hrs/week during the summer and 10-20 hrs/week when classes occur. The guaranteed semesters for this position are:</p>
			<ul>
				{semesters.map((s, i) => <li key={i}>{`${s.semester} ${s.year}`}</li>)}
			</ul>
			<h3>Description</h3>
			<p>{description}</p>
			<h3>Tasks</h3>
			<ul>
				{tasks.map((t, i) => {
					return <li key={i}>{t}</li>
				})}
			</ul>
			<h3>Qualifications</h3>
			<h4>Recommended Majors</h4>
			<ul>{majors.map((t, i) => <li key={i}>{t}</li>)}</ul>
			<h4>Required</h4>
			<ul>
				<li>You must be a U.S. person.</li>
				{qualifications.required.map((t, i) => {
					return <li key={i}>{t}</li>
				})}
			</ul>
			<h4>Preferred</h4>
			<ul>
				{qualifications.preferred.map((t, i) => {
					return <li key={i}>{t}</li>
				})}
			</ul>
			<h3>Projects</h3>
			<div className={styles.projects}>
				{projects.map((p, i) => {
					return <DetailItemRow base={"projects"} item={p} key={i} />
				})}
			</div>
			<a target={"_blank"} rel="noreferrer" href="https://forms.gle/cJYnJQBxgwAbL9zP7" className={styles.apply}>Apply</a>
		</Layout>
	);
};

// export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
// 	return {
// 		props: {}
// 	}
// }

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {

	const id = context.params.id;
	let position: Position | undefined;
	for (const p of positions) if (p.key === id) position = p;
	if (!position) return { redirect: { destination: "/career", permanent: false } }

	return {
		props: { position }
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: positions.map(p => "/career/" + p.key),
		fallback: false
	};
}

export default Page;
