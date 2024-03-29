/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps} from "next";
import Image from "next/image";
import Layout from "../../components/Layout";
import {positions} from "../../data/positions";
import {PositionRow} from "../../components/PositionRow";


interface PageProps {

}

const Page: NextPage<PageProps> = () => {
	return (
		<Layout title={"Career"} className={"PartnershipsPage"}>

			<p style={{fontSize:20}}>Currently there are no open positions available.</p>
			<p style={{fontSize:20}}>When any open positions are available, they will be advertised here and via MTU e-mail lists, so keep an eye on this page. In the mean time, if you are generally interested to learn more, please contact Dr. van Susante at <a href = "pjvansus@mtu.edu">pjvansus@mtu.edu</a></p>
			
			<div style={{
      		  textAlign: "center"
     		 }}>
				<img src="logo-new-dark.png" width="500" height="500"></img>
			</div>
			<p style={{fontSize:20}}><b>Note</b>: Due to ITAR restrictions, to work at the PSTDL you must be a U.S. Person or a U.S. Citizen.</p>
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
