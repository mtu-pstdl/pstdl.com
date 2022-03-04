/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps} from "next";
import Layout from "../../components/Layout";
import {positions} from "../../data/positions";
import {PositionRow} from "../../components/PositionRow";

interface PageProps {

}

const Page: NextPage<PageProps> = () => {
	return (
		<Layout title={"Career"} className={"PartnershipsPage"}>
			<h2>Open Positions</h2>
			<p><b>Note</b>: Due to ITAR restrictions, to work at the PSTDL you must be <a href={"https://www.law.cornell.edu/cfr/text/22/120.15"} target={"_blank"} rel={"noreferrer"}>a U.S. Person.</a></p>
			{positions.map((position, i) => {
				return <PositionRow position={position} key={i}/>
			})}
		</Layout>
	);
};

// export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
// 	return {
// 		props: {}
// 	}
// }

// export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
// 	return {
// 		props: {}
// 	}
// }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	return {
// 		paths: [],
// 		fallback: false
// 	};
// }

export default Page;
