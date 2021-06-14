/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement} from "react";
import {ErrorPage} from "../components/ErrorPage";

export default function Custom404(): ReactElement {
	return <ErrorPage msg={"404 Not Found"}/>
}