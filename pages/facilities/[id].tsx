/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement} from "react";
import {DetailItemDetail, DetailItemDetailProps} from "../../components/DetailItemDetail";
import {facilities, getFacilityByLink} from "../../data/facilities";
import {GetStaticPaths, GetStaticProps} from "next";
import {fetchMarkdown} from "../../data/md";


export default function FacilitiesDetail(props: DetailItemDetailProps): ReactElement {
	return <DetailItemDetail {...props}/>
}

export const getStaticProps: GetStaticProps<DetailItemDetailProps> = async (context) => {
	const id = context.params.id;
	const item = getFacilityByLink(id);
	return {props: {item, md: fetchMarkdown("/facilities/" + item.link)}};
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: facilities.map(i => {
			return {params: {id: i.link}};
		}),
		fallback: false
	}
}