/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {FC} from "react";
import styles from "../styles/PositionRow.module.scss";
import {
	Position,
	positionPayString, positionSemestersString,
	positionStartString
} from "../interfaces/Position";
import {OpenInNew as Link} from "@material-ui/icons";
export interface PositionRowProps {
	position: Position
}

/*
export interface Position {
	title: string;
	projects: DetailItem[];
	levels: PositionLevel[];
	majors: MemberMajor[];
	pay: {type: PositionPayType, value: number | null};
	hours: number;
	start: {semester: PositionSemester, year: number}
	description: string;
	tasks: string[];
	qualifications: {required: string[], preferred: string[]};
}
 */

const PositionRowItem: FC<{left: string, right: string}> = props => {
	return <div className={styles.rowItem}>
		<span className={styles.left}>{props.left}:</span>
		<span className={styles.right}>{props.right}</span>
	</div>
}

export const PositionRow: FC<PositionRowProps> = props => {

	const {title, levels, majors, hours, projects, key} = props.position;

	return (<a className={styles.container} href={"/career/" + key} target={"_self"} rel={"noreferrer"}>
		<div>
			<span className={styles.title}>{title}</span>
			<PositionRowItem left={"Type"} right={levels.join(", ")}/>
			<PositionRowItem left={"Projects"} right={projects.map(p => p.title).join(", ")}/>
			<PositionRowItem left={"Recommended Majors"} right={majors.join(", ")}/>
			<PositionRowItem left={"Commitment"} right={hours + " hrs/w"}/>
			<PositionRowItem left={"Up-to"} right={positionPayString(props.position)}/>
			<PositionRowItem left={"Semesters"} right={positionSemestersString(props.position)}/>
		</div>
		<Link className={styles.link}/>
	</a>);

};
