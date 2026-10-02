"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  ["98%", "more electric range"],
  ["0.24", "drag coefficient"],
  ["3.2s", "0–100 km/h"]
];

function Car() {
  return (
    <svg className="car" viewBox="0 0 900 430" role="img" aria-label="Silver concept sports car">
      <defs>
        <linearGradient id="paint" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#ffffff"/><stop offset=".32" stopColor="#b9c3c8"/><stop offset=".68" stopColor="#68757b"/><stop offset="1" stopColor="#d6dce0"/></linearGradient>
        <linearGradient id="glass" x1="0" x2="1"><stop stopColor="#071217"/><stop offset=".7" stopColor="#3e606b"/><stop offset="1" stopColor="#091216"/></linearGradient>
        <filter id="shadow"><feGaussianBlur stdDeviation="16"/></filter>
      </defs>
      <ellipse cx="457" cy="370" rx="350" ry="31" fill="#000" opacity=".5" filter="url(#shadow)"/>
      <path d="M100 303C123 240 173 207 264 191L387 92C410 69 455 58 534 62C587 65 633 93 690 157L776 182C818 190 844 220 858 276L856 315C852 338 831 351 802 351H132C104 351 89 329 100 303Z" fill="url(#paint)" stroke="#e8eff0" strokeWidth="4"/>
      <path d="M281 188L398 101C425 82 461 77 517 80C567 83 606 108 658 162L661 177L281 188Z" fill="url(#glass)" stroke="#dce8e8" strokeWidth="4"/>
      <path d="M420 97L411 181" stroke="#b7c9ce" strokeWidth="5"/><path d="M171 247C243 244 296 239 357 230" fill="none" stroke="#fff" opacity=".7" strokeWidth="5"/>
      <path d="M108 277H204L173 305H104Z" fill="#d8ff54"/><path d="M720 222L796 239L811 274H744Z" fill="#ff6259"/>
      <g fill="#101719" stroke="#aab5b9" strokeWidth="12"><circle cx="250" cy="341" r="65"/><circle cx="711" cy="341" r="65"/></g>
      <g fill="#b8c3c6" stroke="#242c2e" strokeWidth="9"><circle cx="250" cy="341" r="31"/><circle cx="711" cy="341" r="31"/></g>
      <path d="M174 312C327 330 554 328 787 295" fill="none" stroke="#394548" strokeWidth="5" opacity=".6"/>
    </svg>
  );
}

export default function Home() {
  const scene = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.from(".intro-word", { y: 28, opacity: 0, duration: .8, stagger: .055, ease: "power3.out" });
      gsap.from(".stat", { y: 18, opacity: 0, duration: .55, stagger: .14, delay: .5, ease: "power2.out" });
      gsap.to(".car-stage", {
        xPercent: 44, yPercent: -26, scale: .78, rotation: -4, ease: "none",
        scrollTrigger: { trigger: scene.current, start: "top top", end: "bottom bottom", scrub: 1.1 }
      });
      gsap.to(".road-line", { backgroundPosition: "150% 0", ease: "none", scrollTrigger: { trigger: scene.current, start: "top top", end: "bottom bottom", scrub: true } });
      gsap.utils.toArray<HTMLElement>(".milestone").forEach((item, index) => {
        gsap.fromTo(item, { opacity: 0, y: 22 }, { opacity: 1, y: 0, ease: "power2.out", scrollTrigger: { trigger: scene.current, start: `${30 + index * 18}% top`, end: `${47 + index * 18}% top`, scrub: true } });
      });
    }, scene);
    return () => context.revert();
  }, []);

  return <main>
    <section ref={scene} className="journey">
      <div className="hero pin">
        <nav><span className="brand">ITZFIZZ<span>®</span></span><span className="menu">01 / 03 &nbsp; EXPERIENCE</span></nav>
        <div className="copy"><p className="eyebrow">THE FUTURE, IN MOTION</p><h1 aria-label="Welcome Itzfizz">{["WELCOME", "ITZFIZZ"].map(word => <span className="intro-word" key={word}>{word}</span>)}</h1></div>
        <div className="stats">{stats.map(([number, label]) => <div className="stat" key={number}><strong>{number}</strong><span>{label}</span></div>)}</div>
        <div className="car-stage"><Car /></div>
        <div className="road"><div className="road-line"/></div>
        <div className="scroll-cue"><i/> SCROLL TO DRIVE</div>
        <div className="milestones"><p className="milestone">01 — SILENT POWER</p><p className="milestone">02 — PURE PRECISION</p><p className="milestone">03 — MADE TO MOVE</p></div>
      </div>
    </section>
    <section className="outro"><p>ENGINEERED FOR<br/>THE OPEN ROAD.</p><span>ITZFIZZ / 2026</span></section>
  </main>;
}
