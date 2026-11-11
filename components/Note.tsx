"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Note() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 48rem)",
        hover: "(hover: hover)",
        reducedMotion: "(prefers-reduced-motion: reduce)",
        all: "all",
      },
      (context) => {
        if (context.conditions?.reducedMotion) return;

        gsap.fromTo(
          ".note-symbol",
          { y: 0, rotation: "0deg" },
          {
            y: -10,
            rotation: "10deg",
            duration: 0.8,
            ease: "power2.out",
            yoyo: true,
            repeat: -1,
          },
        );
      },
    );

    return () => media.revert();
  });

  return (
    <div className="note-symbol text-[#b04f37]">
      <svg
        aria-hidden="true"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 18V3c0 5 6 3 6 8" />
        <ellipse cx="10" cy="18" rx="4" ry="3" />
      </svg>
    </div>
  );
}
