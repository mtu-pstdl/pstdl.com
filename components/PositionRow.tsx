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
	PositionLevel,
	positionPayString,
	PositionPayType,
	PositionSemester,
	positionStartString
} from "../interfaces/Position";

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

	const {title, majors, levels, pay, hours, projects} = props.position;

	return (<div className={styles.container}>
		<h3>{title}</h3>
		<PositionRowItem left={"Projects"} right={projects.map(p => p.title).join(", ")}/>
		<PositionRowItem left={"Majors"} right={majors.join(", ")}/>
		<PositionRowItem left={"Levels"} right={levels}/>
		<PositionRowItem left={"Commitment"} right={hours + " hrs/w"}/>
		<PositionRowItem left={"Wage"} right={positionPayString(props.position)}/>
		<PositionRowItem left={"Start"} right={positionStartString(props.position)}/>
	</div>);

};
