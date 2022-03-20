/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {FC} from "react";
import styles from "../styles/MemberMap.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import {Marker, Map} from "react-map-gl";
import {Member} from "../interfaces/Member";
import {ajgoddu} from "../data/members";
import Image from "next/image";

export interface MemberMapProps {
	members: Member[];
}

export interface MemberItemProps {
	member: Member;
}

export const MemberItem: FC<MemberItemProps> = props => {
	const location = props.member.location;
	if (!location) return <></>
	return <Marker latitude={location.lat} longitude={location.lng}>
		<div
			className={styles.pin}
			onClick={() => {
				window.open("/members/" + props.member.username)
			}}
		>
			<Image
				src={`/members/${props.member.username}.jpg`}
				width={48 * 2}
				height={48 * 2}
			/>
		</div>
	</Marker>
}

export const MemberMap: FC<MemberMapProps> = props => {

	return (<div className={styles.container}>
		<h2>Alumni Reach</h2>
		<div className={styles.mapHolder}>
			<Map
				initialViewState={{
					longitude: -99.044,
					latitude: 40.3814,
					zoom: 3
				}}
				style={{width: 860, height: 480}}
				mapStyle="mapbox://styles/ejcobb/cl0zi0vwt002c14t8z2wybw6r"
				mapboxAccessToken={"pk.eyJ1IjoiZWpjb2JiIiwiYSI6ImNsMHpobHozcjBqenQzY3MxNng0azQ0eDUifQ.ua_7O1xNvWWaWTs2CRwznQ"}
			>
				<Marker longitude={-88.54895} latitude={47.11964} color="gold" />
				{props.members.map((m, i) => <MemberItem member={m} key={i}/>)}
			</Map>
		</div>
	</div>);

};