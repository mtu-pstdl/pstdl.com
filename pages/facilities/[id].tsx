/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import { ReactElement } from "react";
import { DetailItemDetail, DetailItemDetailProps } from "../../components/DetailItemDetail";
import { facilities, getFacilityByLink } from "../../data/facilities";
import { GetServerSidePropsContext, GetStaticPaths, GetStaticProps } from "next";
import { fetchMarkdown } from "../../data/md";
import { DetailItem } from "../../interfaces/DetailItem";


export default function FacilitiesDetail(props: DetailItemDetailProps): ReactElement {
	return <DetailItemDetail {...props} />
}

export async function getStaticProps(context: GetServerSidePropsContext) {
	const id = context.params?.id as string;
	const item = getFacilityByLink(id) as DetailItem;
	const path = "/facilities/" + item?.link;
	const md = fetchMarkdown(path);
	return { props: { item, md } };
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: facilities.map(i => {
			return { params: { id: i.link } };
		}),
		fallback: false
	}
}