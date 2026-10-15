import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About me, background, and how to get in touch.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Kingsford Amekudzi</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
  <p>
    A <strong className="font-semibold text-foreground">frontend developer, graphic designer, and machine learning engineer</strong> who enjoys building things that look great, feel intuitive, and work intelligently. I bring together <strong className="font-semibold text-foreground">visual craft</strong>, <strong className="font-semibold text-foreground">clean code</strong>, and <strong className="font-semibold text-foreground">data-driven thinking</strong> to every project.
  </p>
  <p>
    I started out in design, and my curiosity about how things work led me into code and then into machine learning. Each skill strengthens the others: design keeps my engineering <strong className="font-semibold text-foreground">human-centered</strong>, and ML helps me build products that are <strong className="font-semibold text-foreground">smarter and more useful</strong>.
  </p>
  <p>
    Today I build <strong className="font-semibold text-foreground">responsive, accessible interfaces</strong> and develop <strong className="font-semibold text-foreground">machine learning solutions</strong>, and I&rsquo;m always looking for opportunities to work on projects where design and intelligence meet.
  </p>
</div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
