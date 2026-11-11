"use client";

import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Nav() {
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

        const navItems = gsap.utils.toArray<HTMLAnchorElement>(".nav-item");

        gsap.from(navItems, {
          opacity: 0,
          y: -10,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
        });

        const cleanups = navItems.map((item) => {
          const animation = gsap.to(item, {
            y: -3,
            duration: 0.2,
            ease: "power2.out",
            paused: true,
          });
          const enter = () => {
            animation.play();
          };
          const leave = () => {
            animation.reverse();
          };

          if (context.conditions?.hover) {
            item.addEventListener("pointerenter", enter);
            item.addEventListener("pointerleave", leave);
          }
          item.addEventListener("focus", enter);
          item.addEventListener("blur", leave);

          return () => {
            item.removeEventListener("pointerenter", enter);
            item.removeEventListener("pointerleave", leave);
            item.removeEventListener("focus", enter);
            item.removeEventListener("blur", leave);
          };
        });

        return () => cleanups.forEach((cleanup) => cleanup());
      },
    );

    return () => media.revert();
  });

  return (
    <nav
      aria-label="Reference navigation"
      className="flex items-center gap-5 text-[13px] font-medium sm:gap-8"
    >
      <Link href="/about" className="hidden sm:block nav-item">
        About
      </Link>
      <Link href="/resume" className="hidden md:block nav-item">
        Experience
      </Link>
      <Link
        className="rounded-full border border-current/25 px-5 py-2.5 transition-colors duration-200 motion-reduce:transition-none hover:bg-[#263c32] hover:text-[#f8f7f0] nav-item"
        href="/contact"
      >
        Let’s talk
      </Link>
    </nav>
  );
}
