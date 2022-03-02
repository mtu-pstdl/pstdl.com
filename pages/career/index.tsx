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
		<Layout title={"Positions"} className={"PartnershipsPage"}>
			<h2>Open Positions</h2>
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
