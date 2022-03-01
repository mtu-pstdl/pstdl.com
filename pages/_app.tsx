/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import "../styles/index.scss";
import "../styles/Astra.scss";
import "../styles/ContactPage.scss";
import "../styles/global.scss";
import "../styles/HomePage.scss";
import "../styles/MembersPage.scss";
import "../styles/MemberView.scss";
import "../styles/MenuView.scss";
import "../styles/ModelView.scss";
import "../styles/NavView.scss";
import "../styles/NewsPage.scss";
import "../styles/NewsView.scss";
import "../styles/NotFoundPage.scss";
import "../styles/PartnershipsPage.scss";
import "../styles/ProjectDetail.scss";
import "../styles/ProjectRow.scss";
import "../styles/ProjectsPage.scss";
import "../styles/PublicationsPage.scss";
import "../styles/IndexPage.scss";
import "../styles/MembersDetailPage.scss";
import "../styles/MemberSmallView.scss";


import type {AppProps} from 'next/app'
import { GoogleAnalytics, usePagesViews } from "nextjs-google-analytics";


export default function MyApp({ Component, pageProps }: AppProps) {
	usePagesViews();
	return <>
		<GoogleAnalytics/>
		<Component {...pageProps} />
	</>
}