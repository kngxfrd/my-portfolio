import type { ReactNode } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiPython,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

import LogoLoop from "../layout/logoloop";
import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";


// Simple Icons (Si...) has no Adobe logos, so Photoshop/Illustrator come from
// the Devicons set (Di...) instead.
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
  { node: <DiPhotoshop />, title: "Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
  { node: <DiIllustrator />, title: "Illustrator", href: "https://www.adobe.com/products/illustrator.html" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <SiTensorflow />, title: "TensorFlow", href: "https://www.tensorflow.org" },
];

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-40 pb-24 sm:px-10 sm:pt-50 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Hey, I&rsquo;m Kingsford
            </p>

            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block whitespace-nowrap">Frontend developer,</span>
              <span className="block whitespace-nowrap">Graphic designer</span>
              <span className="block whitespace-nowrap">& ML engineer</span>
            </h1>

            <p className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-foreground/65">
              Developer and engineer focused on building interactive and beautiful screens and
              training models.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div className="relative aspect-square w-full md:max-w-105 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                {/* portrait goes here */}
              </div>
            </div>
          </ScaleUnblur>
        </div>

        {/* Scrolling tech logos */}
        <FadeIn delay={0.3} className="mt-16 sm:mt-24">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={40}
            gap={56}
            pauseOnHover
            scaleOnHover
            fadeOut
            ariaLabel="Tools and technologies I work with"
            className="text-foreground/60"
          />
        </FadeIn>
      </div>
    </section>
  );
}