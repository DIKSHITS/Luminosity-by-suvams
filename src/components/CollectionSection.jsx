import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/CollectionSection.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";


import img2 from "../assets/hero/img2.jpg";
import img3 from "../assets/hero/img3.jpg";

import img5 from "../assets/hero/img5.jpg";
import img6 from "../assets/hero/img6.jpg";
import img7 from "../assets/hero/img7.jpg";
import img8 from "../assets/hero/img8.jpg";
import img9 from "../assets/hero/img9.jpg";
import img10 from "../assets/hero/img10.jpg";
import img11 from "../assets/hero/img11.jpg";
import img12 from "../assets/hero/img12.jpg";
import img13 from "../assets/hero/img13.jpg";
import img14 from "../assets/hero/img14.jpg";
import img15 from "../assets/hero/img15.jpg";
import img16 from "../assets/hero/img16.jpg";
import img17 from "../assets/hero/img17.jpg";
import img18 from "../assets/hero/img18.jpg";
import img21 from "../assets/hero/img21.jpg";
import img22 from "../assets/hero/img22.jpg";
import img24 from "../assets/hero/img24.jpg";
import img25 from "../assets/hero/img25.jpg";
import img26 from "../assets/hero/img26.jpg";
import img27 from "../assets/hero/img27.jpg";
import img28 from "../assets/hero/img28.jpg";

const YOUTUBE_EMBED_URL =
	"https://www.youtube-nocookie.com/embed/Y9li4I7MvLE?autoplay=1&mute=1&controls=0&loop=1&playlist=Y9li4I7MvLE&modestbranding=1&rel=0&playsinline=1";

const gallery = [
	
	{
		src: img2,
		title: "Quiet reflection",
		tag: "Editorial",
	},
	{
		src: img3,
		title: "Soft editorial motion",
		tag: "Fashion",
	},
	
	{
		src: img5,
		title: "Frame in motion",
		tag: "Cinematic",
	},
	{
		src: img6,
		title: "Layered texture",
		tag: "Details",
	},
	{
		src: img7,
		title: "Soft glow",
		tag: "Portrait",
	},
	{
		src: img8,
		title: "Wide scene",
		tag: "Landscape",
	},
	{
		src: img9,
		title: "Open frame",
		tag: "Mood",
	},
	{
		src: img10,
		title: "Cinematic energy",
		tag: "Motion",
	},
	{
		src: img11,
		title: "Soft highlight",
		tag: "Detail",
	},
	{
		src: img12,
		title: "Evening tone",
		tag: "Wedding",
	},
	{
		src: img13,
		title: "Golden dusk",
		tag: "Portrait",
	},
	{
		src: img14,
		title: "Framed in contrast",
		tag: "Story",
	},
	{
		src: img15,
		title: "Soft capture",
		tag: "Emotion",
	},
	{
		src: img16,
		title: "Quiet luxury",
		tag: "Still life",
	},
	{
		src: img17,
		title: "Edge light",
		tag: "Motion",
	},
	{
		src: img18,
		title: "Muted palette",
		tag: "Editorial",
	},
	{
		src: img21,
		title: "Natural light study",
		tag: "Wedding",
	},
	{
		src: img22,
		title: "Soft geometry",
		tag: "Details",
	},
	{
		src: img24,
		title: "Balanced frame",
		tag: "Story",
	},
	{
		src: img25,
		title: "Warm finish",
		tag: "Portrait",
	},
	{
		src: img26,
		title: "Signature portrait",
		tag: "Feature",
	},
	{
		src: img27,
		title: "Late light",
		tag: "Mood",
	},
	{
		src: img28,
		title: "Closing scene",
		tag: "Reel",
	},
	{
		src: img2,
		title: "Ambient detail",
		tag: "Archive",
	},
	// removed unused img4 entry
	{
		src: img21,
		title: "Natural light study",
		tag: "Wedding",
	},
	{
		src: img28,
		title: "Closing scene",
		tag: "Reel",
	},
];

const CollectionSection = () => {
	useEffect(() => {
		const elements = document.querySelectorAll(".reveal");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.18 }
		);

		elements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<Navbar />

			<section className="collections-page">
				<div className="collections-glow collections-glow-left" />
				<div className="collections-glow collections-glow-right" />

				<div className="collections-shell">
					<div className="collections-hero reveal">
						<div className="collections-video-frame collections-youtube-frame">
							<iframe
								className="collections-youtube-bg"
								src={YOUTUBE_EMBED_URL}
								title="Luminosity by Suvam YouTube background video"
								allow="autoplay; encrypted-media; picture-in-picture"
								allowFullScreen
							/>
							<div className="collections-video-overlay">
								<p className="collections-kicker">Curated collection</p>
								<div className="collections-actions">
									<Link to="/" className="collections-button">
										Back to home
									</Link>
									<a href="#collections-gallery" className="collections-button secondary">
										Jump to gallery
									</a>
								</div>
							</div>
						</div>
					</div>

					<div id="collections-gallery" className="collections-grid">
						{gallery.map((item, index) => (
							<article
								key={item.title}
								className={`collection-card reveal ${index === 0 ? "wide" : ""} ${
									index === 3 ? "tall" : ""
								} ${index === 7 ? "featured" : ""}`}
								style={{ "--delay": `${index * 90}ms` }}
							>
								<div className="collection-media">
									<img src={item.src} alt={item.title} loading="lazy" />
								</div>

								<div className="collection-meta">
									<span>{item.tag}</span>
									<h2>{item.title}</h2>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<Footer />
			<WhatsAppFloat />
		</>
	);
};

export default CollectionSection;
