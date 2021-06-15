/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement, useEffect, useState} from "react";
import Layout from "../components/Layout";

function Slideshow(): ReactElement {

	const [i, setI] = useState(0);
	const [arr, setArr] = useState<number[]>([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			let newI = i + 1;
			if (newI >= arr.length) newI = 0;

			const slideshowAnimator = document.getElementById("slideshow-animate");
			if (!slideshowAnimator) return;

			const slideshow = document.getElementById("slideshow");
			if (!slideshow) return;

			slideshow.onload = () => {
				slideshowAnimator.style.opacity = "0";
			}

			slideshowAnimator.style.opacity = "1";

			setTimeout(() => {
				setI(newI)
			}, 500);

		}, 5000);
		return () => clearTimeout(timeout);
	}, [i]);

	useEffect(() => {
		for (let i = 0; i < 21; i ++) arr.push(i);
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}, [])

	return <img id={"slideshow"} className={"slideshow"} src={`/slideshow/slideshow${arr[i] ?? 0}.jpg`} alt={"slideshow"}/>
}

export default function IndexPage(): ReactElement {
	return <Layout disableDefault className={"IndexPage"}>
		<Slideshow/>
		<div id={"slideshow-animate"}/>
		<div className={"container"}>
			<h2>Michigan Technological University</h2>
			<h1>Planetary Surface Technology Development Lab</h1>
			<h2>"HuskyWorks"</h2>
			<p>Developing cutting edge technology solutions for planetary surface exploration of the Moon, Mars and beyond while training the next generation of engineers that will return humanity to other planetary surfaces - this time to stay.</p>
		</div>
	</Layout>
}