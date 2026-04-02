"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface IProjectData {
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

interface IOtherProjectData {
  SHORT_DESCRIPTION: string;
  TAGS: string[];
}

// ─── Featured Project Card ─────────────────────────────────────────────────────

function ProjectCard({ name, data }: { name: string; data: IProjectData }) {
  return (
    <li className="group">
      <div className="flex flex-col md:flex-row gap-5 rounded-xl border border-border hover:border-muted-foreground/40 bg-muted/30 hover:bg-muted/50 transition-all duration-300 overflow-hidden">

        {/* Image */}
        <div className="md:w-[260px] md:min-w-[260px] w-full h-48 md:h-auto relative overflow-hidden bg-muted shrink-0">
          {data.IMAGE ? (
            <Image
              src={data.IMAGE}
              alt={name}
              fill
              className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 text-xs">
              No preview
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between py-5 pr-5 pl-5 md:pl-1 gap-3">
          <div className="flex flex-col gap-2">
            {/* Name + note + links */}
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/projects/${name.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-primary/90 text-lg font-medium leading-tight hover:text-primary transition-colors"
              >
                {name}
              </Link>
              {data.NOTE && (
                <span className="text-[10px] font-medium bg-primary/10 text-primary/60 px-2 py-0.5 rounded-full border border-primary/20">
                  {data.NOTE}
                </span>
              )}
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
              {data.SHORT_DESCRIPTION}
            </p>
          </div>

          {/* Tags */}
          <ul className="flex flex-wrap gap-1.5">
            {data.TAGS.map((tag) => (
              <li key={tag} className="bg-background px-2 py-0.5 rounded text-xs text-muted-foreground border border-border">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

// ─── Other Project Card ────────────────────────────────────────────────────────

function SmallProjectCard({ name, data }: { name: string; data: IOtherProjectData }) {
  return (
    <li className="group flex flex-col gap-2 p-4 rounded-xl border border-border hover:border-muted-foreground/40 bg-muted/20 hover:bg-muted/40 transition-all duration-300 h-full">
      <p className="text-primary/90 text-sm font-medium">{name}</p>
      <p className="text-muted-foreground text-xs leading-relaxed flex-1">{data.SHORT_DESCRIPTION}</p>
      <ul className="flex flex-wrap gap-1 mt-1">
        {data.TAGS.map((tag) => (
          <li key={tag} className="bg-background px-2 py-0.5 rounded text-[10px] text-muted-foreground border border-border">
            {tag}
          </li>
        ))}
      </ul>
    </li>
  );
}

// ─── Main Projects Section ─────────────────────────────────────────────────────

export function Projects({
  data,
  otherData,
}: {
  data: Record<string, IProjectData>;
  otherData?: Record<string, Record<string, IOtherProjectData>>;
}) {
  return (
    <div id="projects" className="py-10">
      <h2 className="font-medium text-primary/90 text-base">projects.</h2>

      <ul className="flex flex-col gap-5 mt-4">
        {Object.entries(data).map(([key, value]) => (
          <ProjectCard key={key} name={key} data={value} />
        ))}
      </ul>

      <div className="flex justify-center mt-8">
        <Link
          href="/projects"
          className="inline-flex justify-center items-center bg-background hover:bg-accent disabled:opacity-50 shadow-sm px-4 py-2 border border-input rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-muted-foreground text-sm whitespace-nowrap transition-colors hover:text-accent-foreground cursor-target disabled:pointer-events-none"
        >
          View all projects
        </Link>
      </div>

      {otherData && (
        <div className="mt-14">
          <h2 className="font-medium text-primary/90 text-base">other projects.</h2>
          <div className="flex flex-col gap-8 mt-4">
            {Object.entries(otherData).map(([category, projects]) => (
              <div key={category}>
                <h3 className="text-muted-foreground text-xs uppercase tracking-widest mb-3">{category}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Object.entries(projects).map(([name, proj]) => (
                    <SmallProjectCard key={name} name={name} data={proj} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
