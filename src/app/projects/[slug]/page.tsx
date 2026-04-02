"use client";

import { DATA, IProjectData } from "@/app/data";
import { Contact, Footer, Navbar } from "@/components/sections";
import GridPattern from "@/components/ui/grid-pattern";
import TargetCursor from "@/components/ui/target-cursor";
import useMobileDetection from "@/hooks/use-mobile";
import { ArrowUpRight, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

const bentoSizes = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
];

function FeatureCard({ feature, index }: { feature: string; index: number }) {
  const spanClass = bentoSizes[index % bentoSizes.length];
  return (
    <div
      className={`col-span-1 ${spanClass} flex flex-col gap-2 p-5 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 hover:border-muted-foreground/40 transition-all duration-300`}
    >
      <span className="text-muted-foreground/30 text-xs font-mono">
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="text-primary/85 text-sm leading-relaxed">{feature}</p>
    </div>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const checkMobile = useMobileDetection();

  const slug = decodeURIComponent(params.slug as string).toLowerCase();
  const projectEntry = Object.entries(DATA.PROJECTS).find(
    ([name]) => name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!projectEntry) notFound();

  const [projectName, project] = projectEntry as [string, IProjectData];

  const primaryLink = project.LIVE_PREVIEW ?? project.GITHUB ?? project.LINK;
  const linkLabel = project.LIVE_PREVIEW
    ? "live preview"
    : project.GITHUB
      ? "github"
      : "view project";

  return (
    <div className="mx-auto px-4 pt-6 sm:pt-12 w-full lg:w-2/3 xl:w-1/2 text-foreground">
      <Navbar />

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
      />

      <main className="px-4 min-h-lvh">

        <div className="pt-10 pb-2">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <MoveLeft size={13} />
            all projects
          </Link>
        </div>

        <section className="flex flex-wrap items-start justify-between gap-3 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="font-medium text-primary/90 text-2xl leading-tight">
              {projectName}
            </h1>
            {project.NOTE && (
              <span className="text-[10px] font-medium bg-primary/10 text-primary/60 border border-primary/20 px-2 py-0.5 rounded-full">
                {project.NOTE}
              </span>
            )}
          </div>

          {primaryLink && (
            
            <a href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {linkLabel}
              <ArrowUpRight size={15} />
            </a>
          )}
        </section>

        {project.IMAGE && (
          <div className="w-full rounded-xl overflow-hidden border border-border bg-muted aspect-[16/9] relative">
            <Image
              src={project.IMAGE}
              alt={projectName}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        )}

        <section className="py-10">
          <h2 className="font-medium text-primary/90 text-base mb-3">
            overview.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.DESCRIPTION}
          </p>
          <ul className="flex flex-wrap gap-1.5 mt-5">
            {project.TAGS.map((tag) => (
              <li
                key={tag}
                className="bg-background border border-border px-2 py-0.5 rounded text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </section>

        {project.FEATURES && project.FEATURES.length > 0 && (
          <section className="pb-10">
            <h2 className="font-medium text-primary/90 text-base mb-4">
              features.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-auto">
              {project.FEATURES.map((feature, i) => (
                <FeatureCard key={i} feature={feature} index={i} />
              ))}
            </div>
          </section>
        )}

        <Contact data={DATA.HEADER} />
        <Footer />
      </main>

      {!checkMobile && <TargetCursor spinDuration={2} hideDefaultCursor />}
    </div>
  );
}