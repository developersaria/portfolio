"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const projects = [
    {
      name: "Miipedia",
      category: "COMMUNITY & DISCOVERY",
      url: "https://miipedia.com",
      domain: "miipedia.com",
      video: "https://placeholdervideo.dev/1920x1080",
      description:
        "A home for the Tomodachi and Miitopia community. A browsable collection that brings creators and their characters together.",
      framework: "Next.js",
      integrations: [
        {
          name: "OAuth using Better Auth",
          howUsed: [
            "Used for user authentication via OAuth.",
            "Services used include Discord and Twitch.",
          ],
        },
      ],
      tags: ["React", "Next.js", "OAuth"],
    },
    {
      name: "PositiVT",
      category: "CREATORS & ENTERTAINMENT",
      url: "https://positivt.space/",
      domain: "positivt.space",
      video: "https://placeholdervideo.dev/1920x1080",
      description:
        "A digital home for a team of independent creators, with talent, schedules, and a shared identity built around positivity.",
      framework: "Next.js",
      integrations: [
        {
          name: "Twitch Api",
          howUsed: ["Creator now live status", "Creators Twitch schedule"],
        },
        {
          name: "Google Calendar Api",
          howUsed: ["Displaying Creator birthdays within community"],
        },
        {
          name: "OAuth using Better Auth",
          howUsed: [
            "Used for user authentication via OAuth.",
            "Services used include Discord and Twitch.",
          ],
        },
        {
          name: "Custom CMS for Talent",
          howUsed: ["Used for managing talent profiles and content."],
        },
      ],
      tags: ["React", "Next.js", "OAuth", "Twitch", "Google Calendar"],
    },
    {
      name: "Carryon",
      category: "TRAVEL & HOSPITALITY",
      url: "https://www.bookcarryon.com/",
      domain: "bookcarryon.com",
      video: "https://placeholdervideo.dev/1920x1080",
      description:
        "A travel website I built and maintained, bringing my frontend experience to a different audience and brand.",
      framework: "Next.js",
      integrations: [
        {
          name: "Mapbox",
          howUsed: ["Autocomplete for addresses."],
        },
        {
          name: "Stripe",
          howUsed: ["Payment processing"],
        },
        {
          name: "OAuth using Better Auth",
          howUsed: [
            "Used for user authentication via OAuth.",
            "Services used include Facebook and Google.",
          ],
        },
      ],
      tags: ["React", "Next.js", "OAuth", "Mapbox", "Stripe"],
    },
  ];

  const primarySkills = [
    {
      title: "Frontend development",
      text: "Responsive interfaces, reusable React components, API integrations, and validated forms. Built with Next.js, TypeScript, and Tailwind CSS.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Content & publishing",
      text: "Custom content management systems, WordPress, and headless CMS workflows. Thoughtful content structure, accessible markup, and on-page SEO.",
      tags: ["Headless CMS", "WordPress", "SEO", "Accessibility"],
    },
    {
      title: "Email & delivery",
      text: "Responsive HTML email templates, cross-browser debugging, and performance improvements. Ownership from implementation through deployment.",
      tags: ["HTML email", "Git", "Vercel", "Cross-browser testing"],
    },
  ];

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

        const sampleWorksItems =
          document.querySelectorAll(".sample-works-item");

        const sampleWorksTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#sample-works-container",
            start: "top 90%",
            once: true,
          },
        });

        sampleWorksItems.forEach((item, index) => {
          sampleWorksTimeline.fromTo(
            item,
            {
              opacity: 0,
              x: index % 2 === 1 ? 100 : -100,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "<50%",
          );
        });

        const primarySkillsItems = document.querySelectorAll(
          ".primary-skills-item",
        );

        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: "#primary-skills-container",
            start: "top 90%",
            once: true,
          },
        });

        t2.from(primarySkillsItems, {
          opacity: 0,
          y: 50,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
        });
      },
    );

    return () => media.revert();
  });

  return (
    <div>
      <section className="py-[60px] md:py-[88px] border-y border-[#d8dbd0]">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-14 lg:px-20">
          <div className="mb-12">
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.13] tracking-[-0.05em] font-medium">
              Sample Works.
            </h2>
          </div>
          <div id="sample-works-container" className="flex flex-col gap-6">
            {projects.map((item) => (
              <div
                key={item.name}
                className="sample-works-item motion-safe:opacity-0 border border-[#263c32]/25 p-6 rounded-xl flex flex-col md:flex-row gap-6 md:even:flex-row-reverse shadow-lg"
              >
                <div className="w-full md:w-3/6 md:flex-shrink-0">
                  <video
                    src={item.video}
                    width={1920}
                    height={1080}
                    className="rounded-xl"
                    autoPlay
                    playsInline
                    controls
                    loop
                    muted
                  />
                </div>
                <div className="w-fullmd:flex-1">
                  <h3 className="mt-6 text-2xl font-medium tracking-tight flex items-center gap-2">
                    {item.name}
                    <span className="bg-[#b04f37]/10 text-[#b04f37] px-3 py-2 rounded-full text-xs ">
                      {item.framework}
                    </span>
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#667068]">
                    {item.description}
                  </p>
                  <ul
                    role="list"
                    className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-x-6 gap-y-5 text-sm"
                  >
                    {item.integrations.map((integration) => (
                      <li
                        key={integration.name}
                        className="border-t border-[#263c32]/15 pt-3"
                      >
                        <span className="font-medium text-[#263c32]">
                          {integration.name}
                        </span>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-[13px] leading-6 text-[#667068] marker:text-[#b04f37]/60">
                          {integration.howUsed.map((usage) => (
                            <li key={usage}>{usage}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#263c32]/15 px-3 py-1.5 text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[60px] md:py-[88px] border-y border-[#d8dbd0] bg-[#eeeee5]">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-14 lg:px-20">
          <div className="mb-12">
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.13] tracking-[-0.05em] font-medium">
              Primary Skills
            </h2>
          </div>
          <div
            id="primary-skills-container"
            className="grid gap-10 md:grid-cols-3 md:gap-9"
          >
            {primarySkills.map((item) => (
              <div
                key={item.title}
                className="primary-skills-item border-t border-[#263c32]/25 pt-6"
              >
                <h3 className="mt-6 text-2xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#667068]">
                  {item.text}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#263c32]/15 px-3 py-1.5 text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
