export default function Footer() {
  return (
    <section id="contact" className="bg-[#263c32] text-[#f8f7f0]">
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-14 lg:px-20 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <h2 className="text-[clamp(3rem,6.5vw,6.2rem)] leading-[1.06] tracking-[-0.055em]">
            Have something
            <br />
            <span className="font-[family-name:Georgia,Times_New_Roman,serif] italic font-normal text-[#d5dfa8]">
              good in mind?
            </span>
          </h2>
          <div className="pb-2">
            <p className="mb-6 max-w-xs text-sm leading-7 text-white/75">
              A frontend role, a thoughtful project, or a conversation about
              what comes next.
            </p>
            <a
              className="inline-flex items-center gap-6 border-b border-white/40 pb-3 text-base hover:text-[#d5dfa8] sm:text-lg"
              href="mailto:randyg@developersaria.com"
            >
              randyg@developersaria.com ↗
            </a>
          </div>
        </div>
        <footer className="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-7 text-[11px] text-white/70">
          <span>© 2026 DevelopersAria. Built with care.</span>
          <span>NEXT.JS · TAILWIND CSS · GSAP</span>
          <a
            href="https://github.com/developersaria/portfolio"
            className="hover:text-[#d5dfa8]"
          >
            GitHub
          </a>
          <a href="#page-top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
