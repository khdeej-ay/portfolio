"use client";

import { DATA } from "@/app/data";
import { Contact, Footer, Navbar } from "@/components/sections";
import GridPattern from "@/components/ui/grid-pattern";
import TargetCursor from "@/components/ui/target-cursor";
import useMobileDetection from "@/hooks/use-mobile";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// ── Types ──────────────────────────────────────────────────────────────────────

interface IFeaturedProject {
  IMAGE?: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  LINK?: string;
  SHORT_DESCRIPTION?: string;
  DESCRIPTION: string;
  NOTE?: string;
  FEATURES?: string[];
  TAGS: string[];
}

interface IOtherProject {
  SHORT_DESCRIPTION: string;
  TAGS: string[];
}

// ── Featured Project Card ──────────────────────────────────────────────────────

function ProjectCard({ name, data }: { name: string; data: IFeaturedProject }) {
  return (
    <li className="group flex flex-col md:flex-row border border-border hover:border-muted-foreground/40 bg-muted/30 hover:bg-muted/50 rounded-xl overflow-hidden transition-all duration-300">

      {/* Image */}
      <div className="relative md:w-[240px] md:min-w-[240px] w-full h-48 md:h-auto bg-muted shrink-0 overflow-hidden">
        {data.IMAGE ? (
          <Image
            src={data.IMAGE}
            alt={name}
            fill
            className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 text-xs select-none">
            no preview
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between gap-3 p-5 flex-1 min-w-0">
        <div className="flex flex-col gap-2">

          {/* Title row */}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-primary/90 text-lg font-medium">{name}</h3>

            {data.NOTE && (
              <span className="text-[10px] font-medium bg-primary/10 text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full">
                {data.NOTE}
              </span>
            )}

            {/* Links */}
            <div className="flex items-center gap-3 text-sm text-muted-foreground ml-auto">
              {data.LIVE_PREVIEW && (
                <a
                  href={data.LIVE_PREVIEW}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  live preview <ArrowUpRight size={15} />
                </a>
              )}
              {data.GITHUB && (
                <a
                  href={data.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  github <ArrowUpRight size={15} />
                </a>
              )}
              {data.LINK && !data.LIVE_PREVIEW && !data.GITHUB && (
                <a
                  href={data.LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  view project <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {data.DESCRIPTION}
          </p>
        </div>

        {/* Tags */}
        <ul className="flex flex-wrap gap-1.5">
          {data.TAGS.map((tag) => (
            <li key={tag} className="bg-background border border-border px-2 py-0.5 rounded text-xs text-muted-foreground">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

// ── Small Grid Card ────────────────────────────────────────────────────────────

function SmallCard({ name, data }: { name: string; data: IOtherProject }) {
  return (
    <li className="flex flex-col gap-2 p-4 border border-border hover:border-muted-foreground/40 bg-muted/20 hover:bg-muted/40 rounded-xl transition-all duration-300 h-full">
      <p className="text-primary/90 text-sm font-medium">{name}</p>
      <p className="text-muted-foreground text-xs leading-relaxed flex-1">{data.SHORT_DESCRIPTION}</p>
      <ul className="flex flex-wrap gap-1 mt-1">
        {data.TAGS.map((tag) => (
          <li key={tag} className="bg-background border border-border px-2 py-0.5 rounded text-[10px] text-muted-foreground">
            {tag}
          </li>
        ))}
      </ul>
    </li>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Page() {
  const checkMobile = useMobileDetection();

  const featuredProjects = DATA.PROJECTS as Record<string, IFeaturedProject>;
  const otherProjects = DATA.OTHER_PROJECTS as Record<string, Record<string, IOtherProject>>;

  return (
    <div className="mx-auto px-4 pt-6 sm:pt-12 w-full lg:w-2/3 text-foreground">
      <Navbar />

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
      />

      {/* Header */}
      <section className="py-16">
        <h1 className="font-medium text-primary/90 text-base">my projects.</h1>
        <div className="max-w-4xl text-muted-foreground text-sm leading-relaxed">
          <p className="mt-2 mb-4">
            A collection of things I've built over the past 3 years — from full-stack web apps and machine learning experiments to Figma prototypes, Android apps, and games. I love jumping between disciplines and finding the creative thread that ties them together.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <ul className="flex flex-col gap-4 mb-16">
        {Object.entries(featuredProjects).map(([key, value]) => (
          <ProjectCard key={key} name={key} data={value} />
        ))}
      </ul>

      {/* Other Projects */}
      {otherProjects && Object.keys(otherProjects).length > 0 && (
        <section className="mb-16">
          <h2 className="font-medium text-primary/90 text-base mb-8">other projects.</h2>

          <div className="flex flex-col gap-10">
            {Object.entries(otherProjects).map(([category, projects]) => (
              <div key={category}>
                <p className="text-muted-foreground/50 text-xs uppercase tracking-widest mb-3">{category}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Object.entries(projects).map(([name, proj]) => (
                    <SmallCard key={name} name={name} data={proj} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <Contact data={DATA.HEADER} />
      <Footer />

      {!checkMobile && <TargetCursor spinDuration={2} hideDefaultCursor />}
    </div>
  );
}
