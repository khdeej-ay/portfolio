import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { MovingElement } from "../navbar";

export function Header({ data }: { data: Record<string, string> }) {
  const handleChange = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="pt-8 sm:pt-12 pb-6">
      <div className="flex items-center justify-between gap-8">

        {/* Left: existing content — no changes inside here */}
        <div className="space-y-2">
          <p className="font-normal text-muted-foreground text-base">
            hello, I&apos;m
          </p>
          <div className="space-y-2">
            <h1 className="font-bold text-primary/90 text-4xl tracking-tight">
              {data.NAME}
            </h1>
            <h2 className="pb-2 flex flex-col gap-0 font-normal text-primary/90 text-base">
              <p>{data.PRONOUN}</p>
              <p>{data.HEADLINE}</p>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MovingElement
              className="inline-flex justify-center items-center bg-primary betterhover:hover:bg-primary/90 disabled:opacity-50 shadow px-4 py-2 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-primary-foreground text-sm whitespace-nowrap transition-colors disabled:pointer-events-none"
              change={() => handleChange(data.RESUME)}
              toChange={false}
              ariaLabel="Resume"
            >
              Resume
            </MovingElement>
            <div className="flex gap-2">
              <MovingElement change={() => handleChange(data.EMAIL)} ariaLabel="Email">
                <Mail />
              </MovingElement>
              <MovingElement change={() => handleChange(data.GITHUB)} ariaLabel="Github">
                <Github />
              </MovingElement>
              <MovingElement change={() => handleChange(data.LINKEDIN)} ariaLabel="Linkedin">
                <Linkedin />
              </MovingElement>
            </div>
          </div>
        </div>

        {/* Right: your photo */}
        <div className="hidden md:flex flex-shrink-0">
          <Image
            src="/photo.jpeg"
            alt="skz's photo"
            width={210}
            height={210}
            className="rounded border-2 border-border object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}