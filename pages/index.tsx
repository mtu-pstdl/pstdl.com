/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import {ReactElement, useEffect, useRef, useState} from "react";
import Layout from "../components/Layout";

function Slideshow(): ReactElement {

	const [slideIndex, setSlideIndex] = useState(0);
	const arr = useRef<number[]>([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			let newI = slideIndex + 1;
			if (newI >= arr.current.length) newI = 0;

			const slideshowAnimator = document.getElementById("slideshow-animate");
			if (!slideshowAnimator) return;

			const slideshow = document.getElementById("slideshow");
			if (!slideshow) return;

			slideshow.onload = () => {
				slideshowAnimator.style.opacity = "0";
			}

			slideshowAnimator.style.opacity = "1";

			setTimeout(() => {
				setSlideIndex(newI)
			}, 500);

		}, 5000);
		return () => clearTimeout(timeout);
	}, [slideIndex]);

	useEffect(() => {
		const a = arr.current;
		for (let i = 0; i < 21; i ++) a.push(i);
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
	}, [])

	return <img id={"slideshow"} className={"slideshow"} src={`/slideshow/slideshow${arr.current[slideIndex] ?? 0}.jpg`} alt={"slideshow"}/>
}

export default function IndexPage(): ReactElement {
	return <Layout isHome disableDefault className={"IndexPage"}>
		<Slideshow/>
		<div id={"slideshow-animate"}/>
		<div className={"container"}>
			<div className={"blur"}/>
			<h2>Michigan Technological University</h2>
			<h1>Planetary Surface Technology Development Lab</h1>
			<h2>{"HuskyWorks"}</h2>
			<p>Developing cutting edge technology solutions for planetary surface exploration of the Moon, Mars and beyond while training the next generation of engineers that will return humanity to other planetary surfaces - this time to stay.</p>
		</div>
	</Layout>
}