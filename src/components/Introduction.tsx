"use client";

import ScrollExpand from "./ScrollExpand";

export default function Introduction() {
  return (
    <section id="introduction" className="relative">
      {/* ScrollExpand driven by the page scroll (useWindowScroll).
          The frame starts as a compact window and expands to full-bleed
          as the user scrolls past the hero section. */}
      <ScrollExpand
        src="/images/philosophy-bg.jpg"
        alt="Dark atmospheric background"
        title="The Philosophy"
        scrollHint="Scroll"
        useWindowScroll
        startWidth={38}
        startHeight={52}
        startRadius={20}
        endRadius={0}
        mediaZoom={1.4}
        scrollDistance={1.1}
        holdDistance={0.4}
        smoothing={0.08}
        overlayScrim={0.55}
      >
        {/* ── Overlay content: fades in once the frame reaches full bleed ── */}
        <div
          className="flex flex-col items-center justify-center gap-10 max-w-4xl mx-auto px-6"
          style={{ fontFamily: "var(--font-josefin), 'Josefin Sans', sans-serif" }}
        >
          {/* Eyebrow label */}
          <span className="text-ember text-xs font-semibold tracking-[0.35em] uppercase">
            The Philosophy
          </span>

          {/* Main manifesto text */}
           <p>I just dont write the code .I turn idea into Experience.
     Every detail has a purpose.Every interaction tells a Story
       Build to Designed to be Remembered.

       Anyone can build a project 
    The real art is building something people cannot stop thinking about.</p>
           <p>creat something to be remember 

          </p>

        </div>
      </ScrollExpand>
    </section>
  );
}
   <span>I just dont write the code .I turn idea into Experience.
     Every detail has a purpose.Every interaction tells a Story
       Build to Designed to be Remembered.

       Anyone can build a project 
    The real art is building something people cannot stop thinking about.
    </span>
